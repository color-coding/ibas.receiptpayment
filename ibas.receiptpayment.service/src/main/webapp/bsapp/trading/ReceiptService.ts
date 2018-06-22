/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../3rdparty/shell/index.d.ts" />
namespace receiptpayment {
    export namespace app {
        /** 系统折扣交易模板 */
        const TRADING_SYSTEM_DISCOUNT_TEMPLATE: string = "%{0}";
        /** 收款服务 */
        export class ReceiptService extends ibas.ServiceWithResultApplication<IReceiptServiceView, businesspartner.app.IReceiptContract, bo.IReceipt> {
            /** 应用标识 */
            static APPLICATION_ID: string = "0d0f9266-5d7a-4e10-81be-4da982c15e1a";
            /** 应用名称 */
            static APPLICATION_NAME: string = "receiptpayment_service_receipt";
            /** 构造函数 */
            constructor() {
                super();
                this.id = ReceiptService.APPLICATION_ID;
                this.name = ReceiptService.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.applyReceiptTradingEvent = this.applyReceiptTrading;
                this.view.removeReceiptTradingEvent = this.removeReceiptTrading;
                this.view.confirmEvent = this.confirm;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                this.view.showBusinessPartner(this.businesspartner);
                this.view.showTarget(this.target);
                let methods: ibas.IList<ReceiptMethod> = receiptMethods();
                this.view.showMethods(methods);
                let that: this = this;
                for (let item of methods) {
                    item.getTradings({
                        businessPartnerType: this.businesspartner.type,
                        businessPartnerCode: this.businesspartner.code,
                        documentType: this.target.documentType,
                        documentEntry: this.target.documentEntry,
                        documentLineId: this.target.documentLineId,
                        documentTotal: this.target.total,
                        documentCurrency: this.target.currency,
                        onCompleted(opRslt: ibas.IOperationResult<IReceiptTradingMethod>): void {
                            that.view.showTradingMethods(opRslt.resultObjects);
                        }
                    });
                }
                this.showReceiptTradings();
            }
            private target: ReceiptTarget;
            private businesspartner: BusinessPartner;
            private receiptTradings: ibas.IList<ReceiptTrading>;
            /** 运行服务 */
            runService(contract: businesspartner.app.IReceiptContract): void {
                this.target = new ReceiptTarget();
                this.target.documentType = contract.documentType;
                this.target.documentEntry = contract.documentEntry;
                this.target.documentLineId = contract.documentLineId;
                this.target.documentSummary = contract.documentSummary;
                this.target.total = ibas.numbers.round(contract.documentTotal);
                this.target.currency = contract.documentCurrency;
                this.businesspartner = new BusinessPartner();
                this.businesspartner.type = contract.businessPartnerType;
                this.businesspartner.code = contract.businessPartnerCode;

                if (!ibas.objects.isNull(this.target)) {
                    if (!ibas.objects.isNull(this.businesspartner.type) && !ibas.strings.isEmpty(this.businesspartner.code)) {
                        let that: this = this;
                        let boRepository: businesspartner.bo.IBORepositoryBusinessPartner = ibas.boFactory.create(businesspartner.bo.BO_REPOSITORY_BUSINESSPARTNER);
                        let criteria: ibas.ICriteria = new ibas.Criteria();
                        let condition: ibas.ICondition = criteria.conditions.create();
                        condition.alias = "Code";
                        condition.value = this.businesspartner.code;
                        if (this.businesspartner.type === businesspartner.bo.emBusinessPartnerType.CUSTOMER) {
                            boRepository.fetchCustomer({
                                criteria: criteria,
                                onCompleted(opRslt: ibas.IOperationResult<businesspartner.bo.ICustomer>): void {
                                    try {
                                        let customer: businesspartner.bo.ICustomer = opRslt.resultObjects.firstOrDefault();
                                        if (ibas.objects.isNull(customer)) {
                                            throw new Error(ibas.i18n.prop("receiptpayment_unknown_customer", that.businesspartner.code));
                                        }
                                        that.businesspartner.code = customer.code;
                                        that.businesspartner.name = customer.name;
                                        that.show();
                                    } catch (error) {
                                        that.messages(error);
                                    }
                                }
                            }); return;
                        } else if (this.businesspartner.type === businesspartner.bo.emBusinessPartnerType.SUPPLIER) {
                            boRepository.fetchSupplier({
                                criteria: criteria,
                                onCompleted(opRslt: ibas.IOperationResult<businesspartner.bo.ISupplier>): void {
                                    try {
                                        let supplier: businesspartner.bo.ISupplier = opRslt.resultObjects.firstOrDefault();
                                        if (ibas.objects.isNull(supplier)) {
                                            throw new Error(ibas.i18n.prop("receiptpayment_unknown_supplier", that.businesspartner.code));
                                        }
                                        that.businesspartner.code = supplier.code;
                                        that.businesspartner.name = supplier.name;
                                        that.show();
                                    } catch (error) {
                                        that.messages(error);
                                    }
                                }
                            }); return;
                        } else {
                            throw new Error(ibas.i18n.prop("sys_unsupported_operation"));
                        }
                    }
                }
                // 没有需要处理的数据
                this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("receiptpayment_no_work_datas_for_receipt"));
            }
            /** 移出收款交易 */
            private removeReceiptTrading(trading: ReceiptTrading): void {
                if (ibas.objects.isNull(trading)) {
                    return;
                }
                if (ibas.objects.isNull(this.receiptTradings)) {
                    return;
                }
                for (let index: number = this.receiptTradings.length - 1; index >= 0; index--) {
                    let item: ReceiptTrading = this.receiptTradings[index];
                    if (item === trading) {
                        this.receiptTradings.removeAt(index);
                    }
                    if (item instanceof ReceiptTradingDiscount) {
                        if (item.parent === trading) {
                            this.receiptTradings.removeAt(index);
                        }
                    }
                    if (trading instanceof ReceiptTradingDiscount) {
                        if (trading.parent === item) {
                            this.receiptTradings.removeAt(index);
                        }
                    }
                }
                this.showReceiptTradings();
            }
            /** 使用收款交易 */
            private applyReceiptTrading(method: IReceiptTradingMethod, amount: number): void {
                if (ibas.objects.isNull(method)) {
                    throw new Error(ibas.i18n.prop("receiptpaymentt_please_choose_paid_method"));
                }
                if (typeof amount !== "number" || isNaN(amount) || amount <= 0) {
                    throw new Error(ibas.i18n.prop("receiptpaymentt_please_input_paid_amount"));
                }
                if (ibas.objects.isNull(this.receiptTradings)) {
                    this.receiptTradings = new ibas.ArrayList<ReceiptTrading>();
                }
                if (!ibas.objects.isNull(this.receiptTradings.firstOrDefault(c => c.trading === method))) {
                    throw new Error(ibas.i18n.prop("receiptpayment_exists_paid_method", method.description));
                }
                let paid: number = this.target.total;
                if (!ibas.objects.isNull(this.receiptTradings)) {
                    for (let item of this.receiptTradings) {
                        paid -= item.amount;
                    }
                }
                // 不能大于待付款金额
                if (amount > paid) {
                    amount = paid;
                }
                // 最多使用可用金额
                let usingAmount: number = amount;
                if (!isNaN(method.amount) && method.amount > 0 && method.amount < usingAmount) {
                    usingAmount = method.amount;
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("receiptpayment_bp_asset_amount_available", method.description, method.amount));
                }
                if (!isNaN(method.discount) && method.discount > 0 && method.discount < 1) {
                    // 使用折扣
                    let amountAfter: number = usingAmount * method.discount;
                    let amountLeft: number = usingAmount - amountAfter;
                    if (usingAmount < amount) {
                        let amountTotal: number = usingAmount / method.discount;
                        if (amountTotal > amount) {
                            amountTotal = amount;
                        }
                        amountAfter = usingAmount;
                        amountLeft = amountTotal - amountAfter;
                    }
                    // 正常交易
                    let trading: ReceiptTrading = new ReceiptTrading();
                    trading.trading = method;
                    trading.amount = ibas.numbers.round(amountAfter);
                    trading.currency = this.target.currency;
                    this.receiptTradings.add(trading);
                    // 折扣交易
                    let tradingDiscout: ReceiptTradingDiscount = new ReceiptTradingDiscount(trading);
                    tradingDiscout.amount = ibas.numbers.round(amountLeft);
                    this.receiptTradings.add(tradingDiscout);
                    this.showReceiptTradings();
                } else {
                    let trading: ReceiptTrading = new ReceiptTrading();
                    trading.trading = method;
                    trading.amount = ibas.numbers.round(usingAmount);
                    trading.currency = this.target.currency;
                    this.receiptTradings.add(trading);
                    this.showReceiptTradings();
                }
            }
            private showReceiptTradings(): void {
                let paid: number = this.target.total;
                if (ibas.objects.isNull(this.receiptTradings)) {
                    this.receiptTradings = new ibas.ArrayList<ReceiptTrading>();
                }
                for (let item of this.receiptTradings) {
                    paid -= item.amount;
                }
                if (paid < 0) {
                    paid = 0;
                }
                paid = ibas.numbers.round(paid);
                this.view.showReceiptTradings(this.receiptTradings, paid);
            }
            /** 确定 */
            private confirm(): void {
                if (ibas.objects.isNull(this.receiptTradings) || this.receiptTradings.length === 0) {
                    throw new Error(ibas.i18n.prop("receiptpaymentt_please_paid"));
                }
                let receipt: bo.Receipt = new bo.Receipt();
                receipt.businessPartnerType = this.businesspartner.type;
                receipt.businessPartnerCode = this.businesspartner.code;
                receipt.businessPartnerName = this.businesspartner.name;
                if (!ibas.strings.isEmpty(this.target.documentSummary)) {
                    receipt.remarks = this.target.documentSummary;
                }
                for (let item of this.receiptTradings) {
                    let receiptItem: bo.ReceiptItem = receipt.receiptItems.create();
                    receiptItem.baseDocumentType = this.target.documentType;
                    receiptItem.baseDocumentEntry = this.target.documentEntry;
                    receiptItem.baseDocumentLineId = this.target.documentLineId;
                    receiptItem.mode = item.trading.method.name;
                    receiptItem.tradeId = item.trading.id;
                    if (item instanceof ReceiptTradingDiscount) {
                        // 折扣项目，特殊处理id
                        receiptItem.tradeId = ibas.strings.format(TRADING_SYSTEM_DISCOUNT_TEMPLATE, receiptItem.tradeId);
                    }
                    receiptItem.amount = item.amount;
                    receiptItem.currency = item.currency;
                    if (!ibas.objects.isNull(item.trading.method.defaultStatus)) {
                        // 设置收款行项目，状态
                        receiptItem.lineStatus = item.trading.method.defaultStatus;
                    }
                }
                if (receipt.documentTotal !== this.target.total) {
                    throw new Error(ibas.i18n.prop("receiptpayment_different_paid_amount", this.target.total - receipt.documentTotal));
                }
                this.busy(true);
                let that: this = this;
                let boRepository: bo.BORepositoryReceiptPayment = new bo.BORepositoryReceiptPayment();
                boRepository.saveReceipt({
                    beSaved: receipt,
                    onCompleted(opRslt: ibas.IOperationResult<bo.Receipt>): void {
                        try {
                            that.busy(false);
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            let receipt: bo.Receipt = opRslt.resultObjects.firstOrDefault();
                            if (!ibas.objects.isNull(receipt)) {
                                that.proceeding(ibas.emMessageType.SUCCESS, ibas.i18n.prop("receiptpayment_receipt_completed", receipt.docEntry));
                                ibas.servicesManager.runApplicationService<IReceiptTradeContract>({
                                    proxy: new ReceiptTradingServiceProxy({
                                        document: receipt
                                    })
                                });
                            }
                            that.close();
                            that.fireCompleted(receipt);
                        } catch (error) {
                            that.messages(error);
                        }
                    }
                });
                this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_saving_data"));
            }
        }
        /** 视图-收款服务 */
        export interface IReceiptServiceView extends ibas.IBOView {
            /** 显示业务伙伴 */
            showBusinessPartner(data: BusinessPartner): void;
            /** 显示收款目标 */
            showTarget(data: ReceiptTarget): void;
            /** 显示收款方式 */
            showMethods(methods: ReceiptMethod[]): void;
            /** 显示收款交易方式 */
            showTradingMethods(methods: IReceiptTradingMethod[]): void;
            /** 显示收款交易 */
            showReceiptTradings(tradings: ReceiptTrading[], paid: number): void;
            /** 移出收款交易 */
            removeReceiptTradingEvent: Function;
            /** 使用收款交易 */
            applyReceiptTradingEvent: Function;
            /** 确定 */
            confirmEvent: Function;
        }
        export class BusinessPartner {
            /** 类型 */
            type: businesspartner.bo.emBusinessPartnerType;
            /** 编码 */
            code: string;
            /** 名称 */
            name: string;
        }
        export class ReceiptTarget {
            /** 待收总计 */
            total: number;
            /** 币种 */
            currency: string;
            /** 单据类型 */
            documentType: string;
            /** 单据编号 */
            documentEntry: number;
            /** 单据行号 */
            documentLineId?: number;
            /** 单据摘要 */
            documentSummary?: string;
        }
        export class ReceiptTrading {
            /** 交易方式 */
            trading: IReceiptTradingMethod;
            /** 金额 */
            amount: number;
            /** 货币 */
            currency: string;
        }
        export class ReceiptTradingDiscount extends ReceiptTrading {
            constructor(parent: ReceiptTrading) {
                super();
                this.parent = parent;
                this.currency = this.parent.currency;
                this.trading = this.parent.trading;
            }
            /** 父项交易 */
            parent: ReceiptTrading;
        }
        /** 收款服务映射 */
        export class ReceiptServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = ReceiptService.APPLICATION_ID;
                this.name = ReceiptService.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
                this.proxy = businesspartner.app.ReceiptServiceProxy;
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract> {
                return new ReceiptService();
            }
        }
    }
}
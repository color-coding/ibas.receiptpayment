/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
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
                this.view.showBusinessPartner(this.businessPartner);
                this.view.showTarget(this.target);
                let that: this = this;
                let methods: ibas.IServiceAgent[] = ibas.servicesManager.getServices(<ibas.IServiceCaller<ibas.IServiceContract>>{
                    proxy: new ReceiptMethodProxy({
                        businessPartnerType: this.businessPartner.type,
                        businessPartnerCode: this.businessPartner.code,
                        documentType: this.target.documentType,
                        documentEntry: this.target.documentEntry,
                        documentLineId: this.target.documentLineId,
                        documentTotal: this.target.total,
                        documentCurrency: this.target.currency
                    }),
                    onCompleted(opRslt: ibas.IOperationResult<IReceiptTradingMethod>): void {
                        that.view.showTradingMethods(opRslt.resultObjects);
                    }
                });
                for (let item of methods) {
                    item.run();
                }
                this.showReceiptTradings();
            }
            private target: ReceiptTarget;
            private businessPartner: BusinessPartner;
            private receiptTradings: ibas.IList<ReceiptTrading>;
            /** 运行服务 */
            runService(contract: businesspartner.app.IReceiptContract): void {
                this.target = new ReceiptTarget();
                this.target.documentType = contract.documentType;
                this.target.documentEntry = contract.documentEntry;
                this.target.documentLineId = contract.documentLineId;
                this.target.documentSummary = contract.documentSummary;
                this.target.allowPartial = contract.allowPartial;
                this.target.allowOver = contract.allowOver;
                this.target.total = ibas.numbers.round(contract.documentTotal);
                this.target.currency = contract.documentCurrency;
                this.target.branch = contract.branch;
                this.businessPartner = new BusinessPartner();
                this.businessPartner.type = contract.businessPartnerType;
                this.businessPartner.code = contract.businessPartnerCode;

                if (!ibas.objects.isNull(this.target)) {
                    if (!ibas.objects.isNull(this.businessPartner.type) && !ibas.strings.isEmpty(this.businessPartner.code)) {
                        let that: this = this;
                        let boRepository: businesspartner.bo.BORepositoryBusinessPartner = new businesspartner.bo.BORepositoryBusinessPartner();
                        let criteria: ibas.ICriteria = new ibas.Criteria();
                        let condition: ibas.ICondition = criteria.conditions.create();
                        condition.alias = businesspartner.bo.Customer.PROPERTY_CODE_NAME;
                        condition.value = this.businessPartner.code;
                        if (this.businessPartner.type === businesspartner.bo.emBusinessPartnerType.CUSTOMER) {
                            boRepository.fetchCustomer({
                                criteria: criteria,
                                onCompleted(opRslt: ibas.IOperationResult<businesspartner.bo.ICustomer>): void {
                                    try {
                                        let customer: businesspartner.bo.ICustomer = opRslt.resultObjects.firstOrDefault();
                                        if (ibas.objects.isNull(customer)) {
                                            throw new Error(ibas.i18n.prop("receiptpayment_unknown_customer", that.businessPartner.code));
                                        }
                                        that.businessPartner.code = customer.code;
                                        that.businessPartner.name = customer.name;
                                        that.show();
                                    } catch (error) {
                                        that.messages(error);
                                    }
                                }
                            }); return;
                        } else if (this.businessPartner.type === businesspartner.bo.emBusinessPartnerType.SUPPLIER) {
                            boRepository.fetchSupplier({
                                criteria: criteria,
                                onCompleted(opRslt: ibas.IOperationResult<businesspartner.bo.ISupplier>): void {
                                    try {
                                        let supplier: businesspartner.bo.ISupplier = opRslt.resultObjects.firstOrDefault();
                                        if (ibas.objects.isNull(supplier)) {
                                            throw new Error(ibas.i18n.prop("receiptpayment_unknown_supplier", that.businessPartner.code));
                                        }
                                        that.businessPartner.code = supplier.code;
                                        that.businessPartner.name = supplier.name;
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
                if (typeof amount !== "number" || isNaN(amount)) {
                    throw new Error(ibas.i18n.prop("receiptpaymentt_please_input_paid_amount"));
                }
                if (amount < 0 || (this.target.total !== 0 && amount === 0)) {
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
            private confirm(orderType?: string): void {
                if (ibas.objects.isNull(this.receiptTradings) || this.receiptTradings.length === 0) {
                    throw new Error(ibas.i18n.prop("receiptpaymentt_please_paid"));
                }
                let receipt: bo.Receipt = new bo.Receipt();
                receipt.businessPartnerType = this.businessPartner.type;
                receipt.businessPartnerCode = this.businessPartner.code;
                receipt.businessPartnerName = this.businessPartner.name;
                receipt.branch = this.target.branch;
                if (!ibas.strings.isEmpty(this.target.documentSummary)) {
                    receipt.remarks = this.target.documentSummary;
                }
                if (!ibas.strings.isEmpty(orderType)) {
                    receipt.orderType = orderType;
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
                let totalDiff: number = this.target.total - receipt.documentTotal;
                if (totalDiff > 0 && this.target.allowPartial !== true) {
                    throw new Error(ibas.i18n.prop("receiptpayment_unpaid_amount", totalDiff));
                } else if (totalDiff < 0 && this.target.allowOver !== true) {
                    throw new Error(ibas.i18n.prop("receiptpayment_more_paid_amount", totalDiff));
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
                                ibas.servicesManager.runApplicationService<IReceiptTradeContract, bo.IReceipt>({
                                    proxy: new ReceiptTradingServiceProxy({
                                        document: receipt
                                    }),
                                    onCompleted(result: bo.IReceipt): void {
                                        that.fireCompleted(receipt);
                                    }
                                });
                            } else {
                                that.fireCompleted(receipt);
                            }
                            that.close();
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
            /** 允许部分收款 */
            allowPartial?: boolean;
            /** 允许超出收款 */
            allowOver?: boolean;
            /** 分支 */
            branch: string;
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
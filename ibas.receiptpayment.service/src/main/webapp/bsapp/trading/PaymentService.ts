/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace receiptpayment {
    export namespace app {
        /** 付款服务 */
        export class PaymentService extends ibas.ServiceWithResultApplication<IPaymentServiceView, businesspartner.app.IPaymentContract, bo.IPayment> {
            /** 应用标识 */
            static APPLICATION_ID: string = "5198614b-6759-491d-bf4b-76a8d1bf2ca9";
            /** 应用名称 */
            static APPLICATION_NAME: string = "receiptpayment_service_payment";
            /** 构造函数 */
            constructor() {
                super();
                this.id = PaymentService.APPLICATION_ID;
                this.name = PaymentService.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.applyPaymentTradingEvent = this.applyPaymentTrading;
                this.view.removePaymentTradingEvent = this.removePaymentTrading;
                this.view.confirmEvent = this.confirm;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                this.view.showBusinessPartner(this.businessPartner);
                this.view.showTarget(this.target);
                let that: this = this;
                let methods: ibas.IServiceAgent[] = ibas.servicesManager.getServices(<ibas.IServiceCaller<ibas.IServiceContract>>{
                    proxy: new PaymentMethodProxy({
                        businessPartnerType: this.businessPartner.type,
                        businessPartnerCode: this.businessPartner.code,
                        documentType: this.target.documentType,
                        documentEntry: this.target.documentEntry,
                        documentLineId: this.target.documentLineId,
                        documentTotal: this.target.total,
                        documentCurrency: this.target.currency
                    }),
                    onCompleted(opRslt: ibas.IOperationResult<IPaymentTradingMethod>): void {
                        that.view.showTradingMethods(opRslt.resultObjects);
                    }
                });
                for (let item of methods) {
                    item.run();
                }
                this.showPaymentTradings();
            }
            private target: PaymentTarget;
            private businessPartner: BusinessPartner;
            private paymentTradings: ibas.IList<PaymentTrading>;
            /** 运行服务 */
            runService(contract: businesspartner.app.IPaymentContract): void {
                this.target = new PaymentTarget();
                this.target.documentType = contract.documentType;
                this.target.documentEntry = contract.documentEntry;
                this.target.documentLineId = contract.documentLineId;
                this.target.documentSummary = contract.documentSummary;
                this.target.allowPartial = contract.allowPartial;
                this.target.allowOver = contract.allowOver;
                this.target.total = ibas.numbers.round(contract.documentTotal);
                this.target.currency = contract.documentCurrency;
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
            /** 移出付款交易 */
            private removePaymentTrading(trading: PaymentTrading): void {
                if (ibas.objects.isNull(trading)) {
                    return;
                }
                if (ibas.objects.isNull(this.paymentTradings)) {
                    return;
                }
                for (let index: number = this.paymentTradings.length - 1; index >= 0; index--) {
                    let item: PaymentTrading = this.paymentTradings[index];
                    if (item === trading) {
                        this.paymentTradings.removeAt(index);
                    }
                }
                this.showPaymentTradings();
            }
            /** 使用付款交易 */
            private applyPaymentTrading(method: IPaymentTradingMethod, amount: number): void {
                if (ibas.objects.isNull(method)) {
                    throw new Error(ibas.i18n.prop("receiptpaymentt_please_choose_paid_method"));
                }
                if (typeof amount !== "number" || isNaN(amount)) {
                    throw new Error(ibas.i18n.prop("receiptpaymentt_please_input_paid_amount"));
                }
                if (amount < 0 || (this.target.total !== 0 && amount === 0)) {
                    throw new Error(ibas.i18n.prop("receiptpaymentt_please_input_paid_amount"));
                }
                if (ibas.objects.isNull(this.paymentTradings)) {
                    this.paymentTradings = new ibas.ArrayList<PaymentTrading>();
                }
                if (!ibas.objects.isNull(this.paymentTradings.firstOrDefault(c => c.trading === method))) {
                    throw new Error(ibas.i18n.prop("receiptpayment_exists_paid_method", method.description));
                }
                let paid: number = this.target.total;
                if (!ibas.objects.isNull(this.paymentTradings)) {
                    for (let item of this.paymentTradings) {
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
                let trading: PaymentTrading = new PaymentTrading();
                trading.trading = method;
                trading.amount = ibas.numbers.round(usingAmount);
                trading.currency = this.target.currency;
                this.paymentTradings.add(trading);
                this.showPaymentTradings();
            }
            private showPaymentTradings(): void {
                let paid: number = this.target.total;
                if (ibas.objects.isNull(this.paymentTradings)) {
                    this.paymentTradings = new ibas.ArrayList<PaymentTrading>();
                }
                for (let item of this.paymentTradings) {
                    paid -= item.amount;
                }
                if (paid < 0) {
                    paid = 0;
                }
                paid = ibas.numbers.round(paid);
                this.view.showPaymentTradings(this.paymentTradings, paid);
            }
            /** 确定 */
            private confirm(orderType?: string): void {
                if (ibas.objects.isNull(this.paymentTradings) || this.paymentTradings.length === 0) {
                    throw new Error(ibas.i18n.prop("receiptpaymentt_please_paid"));
                }
                let receipt: bo.Payment = new bo.Payment();
                receipt.businessPartnerType = this.businessPartner.type;
                receipt.businessPartnerCode = this.businessPartner.code;
                receipt.businessPartnerName = this.businessPartner.name;
                if (!ibas.strings.isEmpty(this.target.documentSummary)) {
                    receipt.remarks = this.target.documentSummary;
                }
                if (!ibas.strings.isEmpty(orderType)) {
                    receipt.orderType = orderType;
                }
                for (let item of this.paymentTradings) {
                    let receiptItem: bo.PaymentItem = receipt.paymentItems.create();
                    receiptItem.baseDocumentType = this.target.documentType;
                    receiptItem.baseDocumentEntry = this.target.documentEntry;
                    receiptItem.baseDocumentLineId = this.target.documentLineId;
                    receiptItem.mode = item.trading.method.name;
                    receiptItem.tradeId = item.trading.id;
                    receiptItem.amount = item.amount;
                    receiptItem.currency = item.currency;
                    if (!ibas.objects.isNull(item.trading.method.defaultStatus)) {
                        // 设置付款行项目，状态
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
                boRepository.savePayment({
                    beSaved: receipt,
                    onCompleted(opRslt: ibas.IOperationResult<bo.Payment>): void {
                        try {
                            that.busy(false);
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            if (opRslt.resultObjects.length > 0) {
                                let payment: bo.Payment = opRslt.resultObjects.firstOrDefault();
                                that.proceeding(ibas.emMessageType.SUCCESS, ibas.i18n.prop("receiptpayment_payment_completed", payment.docEntry));
                                that.fireCompleted(payment);
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
        /** 视图-付款服务 */
        export interface IPaymentServiceView extends ibas.IBOView {
            /** 显示业务伙伴 */
            showBusinessPartner(data: BusinessPartner): void;
            /** 显示付款目标 */
            showTarget(data: PaymentTarget): void;
            /** 显示付款交易方式 */
            showTradingMethods(methods: IPaymentTradingMethod[]): void;
            /** 显示付款交易 */
            showPaymentTradings(tradings: PaymentTrading[], paid: number): void;
            /** 移出付款交易 */
            removePaymentTradingEvent: Function;
            /** 使用付款交易 */
            applyPaymentTradingEvent: Function;
            /** 确定 */
            confirmEvent: Function;
        }
        export class PaymentTarget {
            /** 待付总计 */
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
            /** 允许部分付款 */
            allowPartial?: boolean;
            /** 允许超出付款 */
            allowOver?: boolean;
        }
        export class PaymentTrading {
            /** 交易方式 */
            trading: IPaymentTradingMethod;
            /** 金额 */
            amount: number;
            /** 货币 */
            currency: string;
        }
        /** 付款服务映射 */
        export class PaymentServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = PaymentService.APPLICATION_ID;
                this.name = PaymentService.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
                this.proxy = businesspartner.app.PaymentServiceProxy;
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract> {
                return new PaymentService();
            }
        }
    }
}
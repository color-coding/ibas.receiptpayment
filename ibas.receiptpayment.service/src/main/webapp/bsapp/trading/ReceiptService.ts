/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace receiptpayment {
    export namespace app {
        /** 收款服务 */
        export class ReceiptService extends ibas.ServiceApplication<IReceiptServiceView, app.IReceiptContract> {
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
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                let methods: trading.IReceiptMethod[] = receiptMethodManager.getMethods();
                this.view.showMethods(methods);
                let that: this = this;
                for (let item of methods) {
                    item.getTrading({
                        businessPartnerType: this.target.businessPartnerType,
                        businessPartnerCode: this.target.businessPartnerCode,
                        documentType: this.target.documentType,
                        documentEntry: this.target.documentEntry,
                        documentLineId: this.target.documentLineId,
                        documentTotal: this.target.documentTotal,
                        documentCurrency: this.target.documentCurrency,
                        onCompleted(opRslt: ibas.IOperationResult<trading.ITradingMethod>): void {
                            that.view.showTradingMethods(opRslt.resultObjects);
                        }
                    });
                }
            }
            protected target: app.IReceiptContract;
            /** 运行服务 */
            runService(contract: app.IReceiptContract): void {
                this.target = contract;
                if (!ibas.objects.isNull(this.target)) {
                    if (!ibas.objects.isNull(this.target.businessPartnerType) && !ibas.strings.isEmpty(this.target.businessPartnerCode)) {
                        let that: this = this;
                        let boRepository: businesspartner.bo.IBORepositoryBusinessPartner = ibas.boFactory.create(businesspartner.bo.BO_REPOSITORY_BUSINESSPARTNER);
                        let criteria: ibas.ICriteria = new ibas.Criteria();
                        let condition: ibas.ICondition = criteria.conditions.create();
                        condition.alias = "Code";
                        condition.value = this.target.businessPartnerCode;
                        if (this.target.businessPartnerType === businesspartner.bo.emBusinessPartnerType.CUSTOMER) {
                            boRepository.fetchCustomer({
                                criteria: criteria,
                                onCompleted(opRslt: ibas.IOperationResult<businesspartner.bo.ICustomer>): void {
                                    try {
                                        let customer: businesspartner.bo.ICustomer = opRslt.resultObjects.firstOrDefault();
                                        if (ibas.objects.isNull(customer)) {
                                            throw new Error(ibas.i18n.prop("receiptpayment_unknown_customer", that.target.businessPartnerCode));
                                        }
                                        let businesspartner: BusinessPartner = new BusinessPartner();
                                        businesspartner.code = customer.code;
                                        businesspartner.name = customer.name;
                                        that.show();
                                        that.view.showBusinessPartner(businesspartner);
                                    } catch (error) {
                                        that.messages(error);
                                    }
                                }
                            });
                        } else if (this.target.businessPartnerType === businesspartner.bo.emBusinessPartnerType.SUPPLIER) {
                            boRepository.fetchSupplier({
                                criteria: criteria,
                                onCompleted(opRslt: ibas.IOperationResult<businesspartner.bo.ISupplier>): void {
                                    try {
                                        let supplier: businesspartner.bo.ISupplier = opRslt.resultObjects.firstOrDefault();
                                        if (ibas.objects.isNull(supplier)) {
                                            throw new Error(ibas.i18n.prop("receiptpayment_unknown_supplier", that.target.businessPartnerCode));
                                        }
                                        let businesspartner: BusinessPartner = new BusinessPartner();
                                        businesspartner.code = supplier.code;
                                        businesspartner.name = supplier.name;
                                        that.show();
                                        that.view.showBusinessPartner(businesspartner);
                                    } catch (error) {
                                        that.messages(error);
                                    }
                                }
                            });
                        } else {
                            throw new Error(ibas.i18n.prop("sys_unsupported_operation"));
                        }
                        return;
                    }
                }
                // 没有需要处理的数据
                this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("receiptpayment_no_work_datas_for_receipt"));
            }
        }
        /** 视图-收款 */
        export interface IReceiptServiceView extends ibas.IBOView {
            /** 显示业务伙伴 */
            showBusinessPartner(data: BusinessPartner): void;
            /** 显示收款目标 */
            showTarget(target: ReceiptTarget): void;
            /** 显示收款方式 */
            showMethods(methods: trading.IReceiptMethod[]): void;
            /** 显示收款交易方式 */
            showTradingMethods(methods: trading.ITradingMethod[]): void;
            /** 显示收款交易 */
            showReceiptTradings(methods: ReceiptTrading[]): void;
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
        }
        export class ReceiptTrading {
            /** 方式 */
            mode: string;
            /** 交易识别码 */
            tradeId: string;
            /** 金额 */
            amount: number;
            /** 货币 */
            currency: string;
        }
        /** 单据收款服务映射 */
        export class ReceiptServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = ReceiptService.APPLICATION_ID;
                this.name = ReceiptService.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
                this.proxy = app.ReceiptServiceProxy;
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract> {
                return new ReceiptService();
            }
        }

    }
}
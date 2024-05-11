/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace receiptpayment {
    export namespace app {
        const PROPERTY_DRAWNTOTAL: symbol = Symbol("drawnTotal");
        export class InternalReconciliation extends ibas.Bindable {
            /**
             * 构造
             * @param data  bo.Receipt | bo.Payment
             *    | sales.bo.SalesInvoice | sales.bo.SalesCreditNote
             *    | purchase.bo.PurchaseInvoice | purchase.bo.PurchaseCreditNote
             */
            constructor(data: any) {
                super();
                this.data = data;
                this.drawnTotal = this.documentTotal - this.closedAmount;
            }
            /**
             * 原始数据
             * 类型：bo.Receipt | bo.Payment
             *        | sales.bo.SalesInvoice | sales.bo.SalesCreditNote
             *        | purchase.bo.PurchaseInvoice | purchase.bo.PurchaseCreditNote
             */
            data: any;

            /** 获取-单据类型 */
            get documentType(): string {
                return this.data.objectCode;
            }
            /** 设置-单据类型 */
            set documentType(value: string) {
                this.data.objectCode = value;
            }

            /** 获取-单据标识 */
            get documentEntry(): number {
                return this.data.docEntry;
            }
            /** 设置-单据标识 */
            set documentEntry(value: number) {
                this.data.docEntry = value;
            }

            /** 获取-过账日期 */
            get postingDate(): Date {
                return this.data.postingDate;
            }
            /** 设置-过账日期 */
            set postingDate(value: Date) {
                this.data.postingDate = value;
            }

            /** 获取-到期日 */
            get deliveryDate(): Date {
                return this.data.deliveryDate;
            }
            /** 设置-到期日 */
            set deliveryDate(value: Date) {
                this.data.deliveryDate = value;
            }

            /** 获取-凭证日期 */
            get documentDate(): Date {
                return this.data.documentDate;
            }
            /** 设置-凭证日期 */
            set documentDate(value: Date) {
                this.data.documentDate = value;
            }

            /** 获取-单据货币 */
            get documentCurrency(): string {
                return this.data.documentCurrency;
            }
            /** 设置-单据货币 */
            set documentCurrency(value: string) {
                this.data.documentCurrency = value;
            }

            /** 获取-单据汇率 */
            get documentRate(): number {
                return this.data.documentRate;
            }
            /** 设置-单据汇率 */
            set documentRate(value: number) {
                this.data.documentRate = value;
            }

            /** 获取-单据总计 */
            get documentTotal(): number {
                if (this.data instanceof bo.Receipt || this.data instanceof bo.Payment) {
                    return -this.data.documentTotal;
                } else if (this.data instanceof sales.bo.SalesInvoice || this.data instanceof purchase.bo.PurchaseInvoice) {
                    return this.data.documentTotal;
                } else if (this.data instanceof sales.bo.SalesCreditNote || this.data instanceof purchase.bo.PurchaseCreditNote) {
                    return -this.data.documentTotal;
                }
                return 0;
            }
            /** 设置-单据总计 */
            set documentTotal(value: number) {
                this.data.documentTotal = Math.abs(value);
            }

            /** 获取-已清金额 */
            get closedAmount(): number {
                if (this.data instanceof bo.Receipt || this.data instanceof bo.Payment) {
                    return -this.data.closedAmount;
                } else if (this.data instanceof sales.bo.SalesInvoice || this.data instanceof purchase.bo.PurchaseInvoice) {
                    return this.data.paidTotal;
                } else if (this.data instanceof sales.bo.SalesCreditNote || this.data instanceof purchase.bo.PurchaseCreditNote) {
                    return -this.data.paidTotal;
                }
                return 0;
            }
            /** 设置-已清金额 */
            set closedAmount(value: number) {
                if (this.data instanceof bo.Receipt || this.data instanceof bo.Payment) {
                    this.data.closedAmount = Math.abs(value);
                } else if (this.data instanceof sales.bo.SalesInvoice || this.data instanceof purchase.bo.PurchaseInvoice) {
                    this.data.paidTotal = Math.abs(value);
                } else if (this.data instanceof sales.bo.SalesCreditNote || this.data instanceof purchase.bo.PurchaseCreditNote) {
                    this.data.paidTotal = Math.abs(value);
                }
            }

            /** 获取-参考1 */
            get reference1(): string {
                return this.data.reference1;
            }
            /** 设置-参考1 */
            set reference1(value: string) {
                this.data.reference1 = value;
            }

            /** 获取-参考2 */
            get reference2(): string {
                return this.data.reference2;
            }
            /** 设置-参考2 */
            set reference2(value: string) {
                this.data.reference2 = value;
            }

            /** 获取-备注 */
            get remarks(): string {
                return this.data.remarks;
            }
            /** 设置-备注 */
            set remarks(value: string) {
                this.data.remarks = value;
            }

            /** 获取-提取金额 */
            get drawnTotal(): number {
                return this[PROPERTY_DRAWNTOTAL];
            }
            /** 设置-提取金额 */
            set drawnTotal(value: number) {
                this[PROPERTY_DRAWNTOTAL] = value;
            }
            /** 获取业务伙伴信息 */
            get shortName(): string {
                if (this.data instanceof bo.Receipt || this.data instanceof bo.Payment) {
                    return this.data.businessPartnerCode;
                } else if (this.data instanceof sales.bo.SalesInvoice || this.data instanceof sales.bo.SalesCreditNote) {
                    return this.data.customerCode;
                } else if (this.data instanceof purchase.bo.PurchaseInvoice || this.data instanceof purchase.bo.PurchaseCreditNote) {
                    return this.data.supplierCode;
                }
                return "";
            }
        }
        /** 应用-内部对账 */
        export class InternalReconciliationApp extends ibas.Application<IInternalReconciliationView> {
            /** 应用标识 */
            static APPLICATION_ID: string = "e8868f4e-4e2a-4f65-a113-f4106a4eb88d";
            /** 应用名称 */
            static APPLICATION_NAME: string = "receiptpayment_app_internalreconciliation";
            /** 构造函数 */
            constructor() {
                super();
                this.id = InternalReconciliationApp.APPLICATION_ID;
                this.name = InternalReconciliationApp.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.fetchDocumentsEvent = this.fetchDocuments;
                this.view.reconcileEvent = this.reconcile;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
            }

            private fetchDocuments(criteria: ibas.ICriteria): void {
                if (criteria instanceof ibas.Criteria) {
                    let condition: ibas.ICondition = criteria.conditions.create();
                    // 未取消的
                    condition.alias = bo.Receipt.PROPERTY_CANCELED_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = ibas.emYesNo.NO.toString();
                    // 未删除的
                    condition = criteria.conditions.create();
                    condition.alias = bo.Receipt.PROPERTY_DELETED_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = ibas.emYesNo.NO.toString();
                    // 仅下达的
                    condition = criteria.conditions.create();
                    condition.alias = bo.Receipt.PROPERTY_DOCUMENTSTATUS_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = ibas.emDocumentStatus.RELEASED.toString();
                    // 审批通过的或未进审批
                    condition = criteria.conditions.create();
                    condition.alias = bo.Receipt.PROPERTY_APPROVALSTATUS_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = ibas.emApprovalStatus.APPROVED.toString();
                    condition.bracketOpen = 1;
                    condition = criteria.conditions.create();
                    condition.alias = bo.Receipt.PROPERTY_APPROVALSTATUS_NAME;
                    condition.operation = ibas.emConditionOperation.EQUAL;
                    condition.value = ibas.emApprovalStatus.UNAFFECTED.toString();
                    condition.relationship = ibas.emConditionRelationship.OR;
                    condition.bracketClose = 1;
                }
                let documents: ibas.IList<InternalReconciliation> = new ibas.ArrayList<InternalReconciliation>();
                if (criteria?.conditions.firstOrDefault(c => c.alias === businesspartner.bo.Customer.name) !== null) {
                    // 客户单据查询
                    let rpCriteria: ibas.ICriteria = criteria.clone();
                    for (let condition of rpCriteria.conditions) {
                        if (condition.alias === businesspartner.bo.Customer.name) {
                            condition.alias = bo.Receipt.PROPERTY_BUSINESSPARTNERCODE_NAME;
                        }
                    }
                    this.busy(true);
                    let condition: ibas.ICondition = rpCriteria.conditions.create();
                    condition.alias = bo.Receipt.PROPERTY_BUSINESSPARTNERTYPE_NAME;
                    condition.value = businesspartner.bo.emBusinessPartnerType.CUSTOMER.toString();
                    condition = rpCriteria.conditions.create();
                    condition.alias = bo.Receipt.PROPERTY_DOCUMENTTOTAL_NAME;
                    condition.operation = ibas.emConditionOperation.GRATER_THAN;
                    condition.comparedAlias = bo.Receipt.PROPERTY_CLOSEDAMOUNT_NAME;
                    let boRepository: bo.BORepositoryReceiptPayment = new bo.BORepositoryReceiptPayment();
                    boRepository.fetchReceipt({
                        criteria: rpCriteria,
                        onCompleted: (opRslt) => {
                            try {
                                if (opRslt.resultCode !== 0) {
                                    throw new Error(opRslt.message);
                                }
                                for (let item of opRslt.resultObjects) {
                                    if ((item.documentTotal - item.closedAmount) <= 0) {
                                        continue;
                                    }
                                    documents.add(new InternalReconciliation(item));
                                }
                                rpCriteria = criteria.clone();
                                for (let condition of rpCriteria.conditions) {
                                    if (condition.alias === businesspartner.bo.Customer.name) {
                                        condition.alias = sales.bo.SalesInvoice.PROPERTY_CUSTOMERCODE_NAME;
                                    }
                                }
                                condition = rpCriteria.conditions.create();
                                condition.alias = sales.bo.SalesInvoice.PROPERTY_DOCUMENTTOTAL_NAME;
                                condition.operation = ibas.emConditionOperation.GRATER_THAN;
                                condition.comparedAlias = sales.bo.SalesInvoice.PROPERTY_PAIDTOTAL_NAME;
                                let boRepository: sales.bo.BORepositorySales = new sales.bo.BORepositorySales();
                                boRepository.fetchSalesInvoice({
                                    criteria: rpCriteria,
                                    onCompleted: (opRslt) => {
                                        try {
                                            if (opRslt.resultCode !== 0) {
                                                throw new Error(opRslt.message);
                                            }
                                            for (let item of opRslt.resultObjects) {
                                                if ((item.documentTotal - item.paidTotal) <= 0) {
                                                    continue;
                                                }
                                                documents.add(new InternalReconciliation(item));
                                            }
                                            boRepository.fetchSalesCreditNote({
                                                criteria: rpCriteria,
                                                onCompleted: (opRslt) => {
                                                    try {
                                                        this.busy(false);
                                                        if (opRslt.resultCode !== 0) {
                                                            throw new Error(opRslt.message);
                                                        }
                                                        for (let item of opRslt.resultObjects) {
                                                            if ((item.documentTotal - item.paidTotal) <= 0) {
                                                                continue;
                                                            }
                                                            documents.add(new InternalReconciliation(item));
                                                        }
                                                        if (documents.length === 0) {
                                                            this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_data_fetched_none"));
                                                        }
                                                        this.view.showDocuments(documents);
                                                    } catch (error) {
                                                        this.messages(error);
                                                    }
                                                }
                                            });
                                        } catch (error) {
                                            this.busy(false);
                                            this.messages(error);
                                        }
                                    }
                                });
                            } catch (error) {
                                this.busy(false);
                                this.messages(error);
                            }
                        }
                    });
                    this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_fetching_data"));
                } else if (criteria?.conditions.firstOrDefault(c => c.alias === businesspartner.bo.Supplier.name) !== null) {
                    // 供应商单据查询
                    let rpCriteria: ibas.ICriteria = criteria.clone();
                    for (let condition of rpCriteria.conditions) {
                        if (condition.alias === businesspartner.bo.Supplier.name) {
                            condition.alias = bo.Payment.PROPERTY_BUSINESSPARTNERCODE_NAME;
                        }
                    }
                    let condition: ibas.ICondition = rpCriteria.conditions.create();
                    condition.alias = bo.Payment.PROPERTY_BUSINESSPARTNERTYPE_NAME;
                    condition.value = businesspartner.bo.emBusinessPartnerType.CUSTOMER.toString();
                    condition = rpCriteria.conditions.create();
                    condition.alias = bo.Receipt.PROPERTY_DOCUMENTTOTAL_NAME;
                    condition.operation = ibas.emConditionOperation.GRATER_THAN;
                    condition.comparedAlias = bo.Receipt.PROPERTY_CLOSEDAMOUNT_NAME;
                    this.busy(true);
                    let boRepository: bo.BORepositoryReceiptPayment = new bo.BORepositoryReceiptPayment();
                    boRepository.fetchPayment({
                        criteria: rpCriteria,
                        onCompleted: (opRslt) => {
                            try {
                                if (opRslt.resultCode !== 0) {
                                    throw new Error(opRslt.message);
                                }
                                for (let item of opRslt.resultObjects) {
                                    if ((item.documentTotal - item.closedAmount) <= 0) {
                                        continue;
                                    }
                                    documents.add(new InternalReconciliation(item));
                                }
                                rpCriteria = criteria.clone();
                                for (let condition of rpCriteria.conditions) {
                                    if (condition.alias === businesspartner.bo.Supplier.name) {
                                        condition.alias = purchase.bo.PurchaseInvoice.PROPERTY_SUPPLIERCODE_NAME;
                                    }
                                }
                                condition = rpCriteria.conditions.create();
                                condition.alias = purchase.bo.PurchaseInvoice.PROPERTY_DOCUMENTTOTAL_NAME;
                                condition.operation = ibas.emConditionOperation.GRATER_THAN;
                                condition.comparedAlias = purchase.bo.PurchaseInvoice.PROPERTY_PAIDTOTAL_NAME;
                                let boRepository: purchase.bo.BORepositoryPurchase = new purchase.bo.BORepositoryPurchase();
                                boRepository.fetchPurchaseInvoice({
                                    criteria: rpCriteria,
                                    onCompleted: (opRslt) => {
                                        try {
                                            if (opRslt.resultCode !== 0) {
                                                throw new Error(opRslt.message);
                                            }
                                            for (let item of opRslt.resultObjects) {
                                                if ((item.documentTotal - item.paidTotal) <= 0) {
                                                    continue;
                                                }
                                                documents.add(new InternalReconciliation(item));
                                            }
                                            if (documents.length === 0) {
                                                this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_data_fetched_none"));
                                            }
                                            boRepository.fetchPurchaseCreditNote({
                                                criteria: rpCriteria,
                                                onCompleted: (opRslt) => {
                                                    try {
                                                        this.busy(false);
                                                        if (opRslt.resultCode !== 0) {
                                                            throw new Error(opRslt.message);
                                                        }
                                                        for (let item of opRslt.resultObjects) {
                                                            if ((item.documentTotal - item.paidTotal) <= 0) {
                                                                continue;
                                                            }
                                                            documents.add(new InternalReconciliation(item));
                                                        }
                                                        if (documents.length === 0) {
                                                            this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_data_fetched_none"));
                                                        }
                                                        this.view.showDocuments(documents);
                                                    } catch (error) {
                                                        this.messages(error);
                                                    }
                                                }
                                            });
                                        } catch (error) {
                                            this.busy(false);
                                            this.messages(error);
                                        }
                                    }
                                });
                            } catch (error) {
                                this.busy(false);
                                this.messages(error);
                            }
                        }
                    });
                    this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_fetching_data"));
                } else {
                    this.view.showDocuments(undefined);
                    throw new Error(ibas.i18n.prop("receiptpayment_guide_please_choose_businesspartner"));
                }
            }
            /** 对账事件 */
            private reconcile(datas: InternalReconciliation[]): void {
                if (!(datas?.length > 0)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("receiptpayment_guide_please_choose_reconciliation_documents"));
                    return;
                }
                datas = datas.filter(c => c.drawnTotal !== 0);
                let sum: number = 0;
                for (let data of datas) {
                    if (data.documentTotal > 0) {
                        if (data.drawnTotal < 0 || data.drawnTotal > (data.documentTotal - data.closedAmount)) {
                            throw new Error(ibas.i18n.prop("receiptpayment_guide_exceeding_available_range", data.data.toString()));
                        }
                    } else {
                        if (data.drawnTotal > 0 || data.drawnTotal < (data.documentTotal - data.closedAmount)) {
                            throw new Error(ibas.i18n.prop("receiptpayment_guide_exceeding_available_range", data.data.toString()));
                        }
                    }
                    sum += data.drawnTotal;
                }
                if (sum !== 0) {
                    throw new Error(ibas.i18n.prop("receiptpayment_guide_reconciliation_amount_not_zero"));
                }
                let reconciliation: businesspartner.bo.InternalReconciliation = new businesspartner.bo.InternalReconciliation();
                reconciliation.systemed = ibas.emYesNo.NO;
                reconciliation.baseDocumentType = ibas.dates.toString(ibas.dates.now(), "yyyyMMddHHmmss");
                reconciliation.baseDocumentEntry = ibas.numbers.valueOf(ibas.variablesManager.getValue(ibas.VARIABLE_NAME_USER_ID));
                reconciliation.reconciliationDate = ibas.dates.today();
                for (let data of datas) {
                    let recItem: businesspartner.bo.InternalReconciliationLine = reconciliation.internalReconciliationLines.create();
                    recItem.shortName = data.shortName;
                    recItem.documentType = data.documentType;
                    recItem.documentEntry = data.documentEntry;
                    recItem.amount = data.drawnTotal;
                    recItem.currency = data.documentCurrency;
                    recItem.rate = data.documentRate;
                }
                this.busy(true);
                let boRepository: bo.BORepositoryReceiptPayment = new bo.BORepositoryReceiptPayment();
                boRepository.saveInternalReconciliation({
                    beSaved: reconciliation,
                    onCompleted: (opRslt) => {
                        try {
                            this.busy(false);
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            this.messages(ibas.emMessageType.SUCCESS,
                                ibas.i18n.prop("shell_data_save") + ibas.i18n.prop("shell_sucessful"));
                            this.view.showResults(opRslt.resultObjects);
                        } catch (error) {
                            this.messages(error);
                        }
                    }
                });
            }
        }
        /** 视图-内部对账 */
        export interface IInternalReconciliationView extends ibas.IView {
            /** 显示数据 */
            showDocuments(datas: InternalReconciliation[]): void;
            /** 查询数据事件 */
            fetchDocumentsEvent: Function;
            /** 对账事件 */
            reconcileEvent: Function;
            /** 显示结果 */
            showResults(datas: businesspartner.bo.InternalReconciliation[]): void;
        }
    }
}

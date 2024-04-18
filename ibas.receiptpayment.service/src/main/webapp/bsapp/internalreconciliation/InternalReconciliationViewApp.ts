/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace receiptpayment {
    export namespace app {
        /** 查看应用-内部对账 */
        export class InternalReconciliationViewApp extends ibas.BOViewService<IInternalReconciliationViewView, businesspartner.bo.InternalReconciliation> {
            /** 应用标识 */
            static APPLICATION_ID: string = "1d1e8258-a9ca-4d8d-afe1-08bbba38611b";
            /** 应用名称 */
            static APPLICATION_NAME: string = "receiptpayment_app_internalreconciliation_view";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = businesspartner.bo.InternalReconciliation.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = InternalReconciliationViewApp.APPLICATION_ID;
                this.name = InternalReconciliationViewApp.APPLICATION_NAME;
                this.boCode = InternalReconciliationViewApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.editDataEvent = this.editData;
                this.view.deleteDataEvent = this.deleteData;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成，基类方法更新地址
                super.viewShowed();
                if (ibas.objects.isNull(this.viewData)) {
                    // 创建编辑对象实例
                    this.viewData = new businesspartner.bo.InternalReconciliation();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showInternalReconciliation(this.viewData);
                this.view.showInternalReconciliationLines(this.viewData.internalReconciliationLines.filterDeleted());
            }
            /** 编辑数据，参数：目标数据 */
            protected editData(): void {
                let app: InternalReconciliationEditApp = new InternalReconciliationEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(this.viewData);
            }
            run(): void;
            run(data: businesspartner.bo.InternalReconciliation): void;
            run(): void {
                if (ibas.objects.instanceOf(arguments[0], businesspartner.bo.InternalReconciliation)) {
                    let data: businesspartner.bo.InternalReconciliation = arguments[0];
                    if (data.isNew) {
                        this.viewData = data;
                        this.show();
                    } else {
                        let criteria: ibas.ICriteria = data.criteria();
                        if (criteria?.conditions.length > 0) {
                            // 有效的查询对象查询
                            let that: this = this;
                            let boRepository: bo.BORepositoryReceiptPayment = new bo.BORepositoryReceiptPayment();
                            boRepository.fetchInternalReconciliation({
                                criteria: criteria,
                                onCompleted(opRslt: ibas.IOperationResult<businesspartner.bo.InternalReconciliation>): void {
                                    try {
                                        if (opRslt.resultCode !== 0) {
                                            throw new Error(opRslt.message);
                                        }
                                        if (opRslt.resultObjects.length > 0) {
                                            that.viewData = opRslt.resultObjects.firstOrDefault();
                                            that.show();
                                        } else {
                                            that.messages({
                                                type: ibas.emMessageType.WARNING,
                                                message: ibas.i18n.prop("shell_data_deleted_and_created"),
                                                onCompleted(): void {
                                                    that.show();
                                                }
                                            });
                                        }
                                    } catch (error) {
                                        that.messages(error);
                                    }
                                }
                            });
                        } else {
                            super.run.apply(this, arguments);
                        }
                    }
                } else {
                    super.run.apply(this, arguments);
                }
            }
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void {
                this.busy(true);
                let that: this = this;
                if (typeof criteria === "string") {
                    let condition: ibas.ICondition;
                    let value: string = criteria;
                    criteria = new ibas.Criteria();
                    criteria.result = 1;
                    condition = criteria.conditions.create();
                    condition.alias = businesspartner.bo.InternalReconciliation.PROPERTY_OBJECTKEY_NAME;
                    condition.value = value;
                }
                let boRepository: bo.BORepositoryReceiptPayment = new bo.BORepositoryReceiptPayment();
                boRepository.fetchInternalReconciliation({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<businesspartner.bo.InternalReconciliation>): void {
                        try {
                            that.busy(false);
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            that.viewData = opRslt.resultObjects.firstOrDefault();
                            if (!that.isViewShowed()) {
                                // 没显示视图，先显示
                                that.show();
                            } else {
                                that.viewShowed();
                            }
                        } catch (error) {
                            that.messages(error);
                        }
                    }
                });
                this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_fetching_data"));
            }
            /** 删除数据 */
            protected deleteData(): void {
                let that: this = this;
                this.messages({
                    type: ibas.emMessageType.QUESTION,
                    title: ibas.i18n.prop(this.name),
                    message: ibas.i18n.prop("receiptpayment_data_cancel_continue", 1),
                    actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                    onCompleted(action: ibas.emMessageAction): void {
                        if (action !== ibas.emMessageAction.YES) {
                            return;
                        }
                        if (that.viewData.canceled === ibas.emYesNo.YES) {
                            return;
                        }
                        that.viewData.canceled = ibas.emYesNo.YES;
                        let boRepository: bo.BORepositoryReceiptPayment = new bo.BORepositoryReceiptPayment();
                        boRepository.saveInternalReconciliation({
                            beSaved: that.viewData,
                            onCompleted(opRslt: ibas.IOperationResult<businesspartner.bo.InternalReconciliation>): void {
                                try {
                                    if (opRslt.resultCode !== 0) {
                                        throw new Error(opRslt.message);
                                    }
                                    that.viewData = opRslt.resultObjects.firstOrDefault();
                                    that.messages(ibas.emMessageType.SUCCESS,
                                        ibas.i18n.prop("shell_data_cancel") + ibas.i18n.prop("shell_sucessful"));
                                    that.viewShowed();
                                } catch (error) {
                                    that.messages(ibas.emMessageType.ERROR, error.message);
                                }
                            }
                        });
                    }
                });
            }
        }
        /** 视图-内部对账 */
        export interface IInternalReconciliationViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showInternalReconciliation(data: businesspartner.bo.InternalReconciliation): void;
            /** 显示数据-内部对账-行 */
            showInternalReconciliationLines(datas: businesspartner.bo.InternalReconciliationLine[]): void;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;

        }
        /** 内部对账连接服务映射 */
        export class InternalReconciliationLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = InternalReconciliationViewApp.APPLICATION_ID;
                this.name = InternalReconciliationViewApp.APPLICATION_NAME;
                this.boCode = InternalReconciliationViewApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IBOLinkService {
                return new InternalReconciliationViewApp();
            }
        }
    }
}

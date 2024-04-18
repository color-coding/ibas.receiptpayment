/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace receiptpayment {
    export namespace app {
        /** 编辑应用-内部对账 */
        export class InternalReconciliationEditApp extends ibas.BOEditApplication<IInternalReconciliationEditView, businesspartner.bo.InternalReconciliation> {
            /** 应用标识 */
            static APPLICATION_ID: string = "902a1e5f-3298-4c26-8dcb-e7739f6a948c";
            /** 应用名称 */
            static APPLICATION_NAME: string = "receiptpayment_app_internalreconciliation_edit";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = businesspartner.bo.InternalReconciliation.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = InternalReconciliationEditApp.APPLICATION_ID;
                this.name = InternalReconciliationEditApp.APPLICATION_NAME;
                this.boCode = InternalReconciliationEditApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.deleteDataEvent = this.deleteData;
                this.view.createDataEvent = this.createData;
                this.view.addInternalReconciliationLineEvent = this.addInternalReconciliationLine;
                this.view.removeInternalReconciliationLineEvent = this.removeInternalReconciliationLine;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                super.viewShowed();
                if (ibas.objects.isNull(this.editData)) {
                    // 创建编辑对象实例
                    this.editData = new businesspartner.bo.InternalReconciliation();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showInternalReconciliation(this.editData);
                this.view.showInternalReconciliationLines(this.editData.internalReconciliationLines.filterDeleted());
            }
            run(): void;
            run(data: businesspartner.bo.InternalReconciliation): void;
            run(): void {
                if (ibas.objects.instanceOf(arguments[0], businesspartner.bo.InternalReconciliation)) {
                    let data: businesspartner.bo.InternalReconciliation = arguments[0];
                    if (data.isNew) {
                        this.editData = data;
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
                                            that.editData = opRslt.resultObjects.firstOrDefault();
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
            /** 保存数据 */
            protected saveData(): void {
                this.busy(true);
                let that: this = this;
                let boRepository: bo.BORepositoryReceiptPayment = new bo.BORepositoryReceiptPayment();
                boRepository.saveInternalReconciliation({
                    beSaved: this.editData,
                    onCompleted(opRslt: ibas.IOperationResult<businesspartner.bo.InternalReconciliation>): void {
                        try {
                            that.busy(false);
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            if (opRslt.resultObjects.length === 0) {
                                // 删除成功，释放当前对象
                                that.messages(ibas.emMessageType.SUCCESS,
                                    ibas.i18n.prop("shell_data_delete") + ibas.i18n.prop("shell_sucessful"));
                                that.editData = undefined;
                            } else {
                                // 替换编辑对象
                                that.editData = opRslt.resultObjects.firstOrDefault();
                                that.messages(ibas.emMessageType.SUCCESS,
                                    ibas.i18n.prop("shell_data_save") + ibas.i18n.prop("shell_sucessful"));
                            }
                            // 刷新当前视图
                            that.viewShowed();
                        } catch (error) {
                            that.messages(error);
                        }
                    }
                });
                this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_saving_data"));
            }
            /** 删除数据 */
            protected deleteData(): void {
                let that: this = this;
                this.messages({
                    type: ibas.emMessageType.QUESTION,
                    title: ibas.i18n.prop(this.name),
                    message: ibas.i18n.prop("shell_delete_continue"),
                    actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                    onCompleted(action: ibas.emMessageAction): void {
                        if (action === ibas.emMessageAction.YES) {
                            that.editData.delete();
                            that.saveData();
                        }
                    }
                });
            }
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void {
                let that: this = this;
                let createData: Function = function (): void {
                    if (clone) {
                        // 克隆对象
                        that.editData = that.editData.clone();
                        that.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_cloned_new"));
                        that.viewShowed();
                    } else {
                        // 新建对象
                        that.editData = new businesspartner.bo.InternalReconciliation();
                        that.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                        that.viewShowed();
                    }
                };
                if (that.editData.isDirty) {
                    this.messages({
                        type: ibas.emMessageType.QUESTION,
                        title: ibas.i18n.prop(this.name),
                        message: ibas.i18n.prop("shell_data_not_saved_continue"),
                        actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                        onCompleted(action: ibas.emMessageAction): void {
                            if (action === ibas.emMessageAction.YES) {
                                createData();
                            }
                        }
                    });
                } else {
                    createData();
                }
            }
            /** 添加内部对账-行事件 */
            protected addInternalReconciliationLine(): void {
                this.editData.internalReconciliationLines.create();
                // 仅显示没有标记删除的
                this.view.showInternalReconciliationLines(this.editData.internalReconciliationLines.filterDeleted());
            }
            /** 删除内部对账-行事件 */
            protected removeInternalReconciliationLine(items: businesspartner.bo.InternalReconciliationLine[]): void {
                // 非数组，转为数组
                if (!(items instanceof Array)) {
                    items = [items];
                }
                if (items.length === 0) {
                    return;
                }
                // 移除项目
                for (let item of items) {
                    if (this.editData.internalReconciliationLines.indexOf(item) >= 0) {
                        if (item.isNew) {
                            // 新建的移除集合
                            this.editData.internalReconciliationLines.remove(item);
                        } else {
                            // 非新建标记删除
                            item.delete();
                        }
                    }
                }
                // 仅显示没有标记删除的
                this.view.showInternalReconciliationLines(this.editData.internalReconciliationLines.filterDeleted());
            }

        }
        /** 视图-内部对账 */
        export interface IInternalReconciliationEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showInternalReconciliation(data: businesspartner.bo.InternalReconciliation): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加内部对账-行事件 */
            addInternalReconciliationLineEvent: Function;
            /** 删除内部对账-行事件 */
            removeInternalReconciliationLineEvent: Function;
            /** 显示数据-内部对账-行 */
            showInternalReconciliationLines(datas: businesspartner.bo.InternalReconciliationLine[]): void;
        }
    }
}

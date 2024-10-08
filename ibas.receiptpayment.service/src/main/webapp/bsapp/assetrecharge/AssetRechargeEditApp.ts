/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace receiptpayment {
    export namespace app {
        /** 编辑应用-资产充值 */
        export class AssetRechargeEditApp extends ibas.BOEditService<IAssetRechargeEditView, bo.AssetRecharge> {

            /** 应用标识 */
            static APPLICATION_ID: string = "649ebc79-6210-4bc9-83ad-19fd41aa510e";
            /** 应用名称 */
            static APPLICATION_NAME: string = "receiptpayment_app_assetrecharge_edit";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.AssetRecharge.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = AssetRechargeEditApp.APPLICATION_ID;
                this.name = AssetRechargeEditApp.APPLICATION_NAME;
                this.boCode = AssetRechargeEditApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.deleteDataEvent = this.deleteData;
                this.view.createDataEvent = this.createData;
                this.view.addAssetRechargeItemEvent = this.addAssetRechargeItem;
                this.view.removeAssetRechargeItemEvent = this.removeAssetRechargeItem;
                this.view.chooseAssetRechargeBusinessPartnerEvent = this.chooseAssetRechargeBusinessPartner;
                this.view.chooseAssetRechargeBusinessPartnerAssetEvent = this.chooseAssetRechargeBusinessPartnerAsset;
                this.view.chooseAssetRechargeItemModeTradeIdEvent = this.chooseAssetRechargeItemModeTradeId;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                super.viewShowed();
                if (ibas.objects.isNull(this.editData)) {
                    // 创建编辑对象实例
                    this.editData = new bo.AssetRecharge();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showAssetRecharge(this.editData);
                this.view.showAssetRechargeItems(this.editData.assetRechargeItems.filterDeleted());
            }
            run(): void;
            run(data: bo.AssetRecharge): void;
            run(): void {
                let that: this = this;
                if (ibas.objects.instanceOf(arguments[0], bo.AssetRecharge)) {
                    let data: bo.AssetRecharge = arguments[0];
                    // 新对象直接编辑
                    if (data.isNew) {
                        that.editData = data;
                        that.show();
                        return;
                    }
                    // 尝试重新查询编辑对象
                    let criteria: ibas.ICriteria = data.criteria();
                    if (!ibas.objects.isNull(criteria) && criteria.conditions.length > 0) {
                        // 有效的查询对象查询
                        let boRepository: bo.BORepositoryReceiptPayment = new bo.BORepositoryReceiptPayment();
                        boRepository.fetchAssetRecharge({
                            criteria: criteria,
                            onCompleted(opRslt: ibas.IOperationResult<bo.AssetRecharge>): void {
                                let data: bo.AssetRecharge;
                                if (opRslt.resultCode === 0) {
                                    data = opRslt.resultObjects.firstOrDefault();
                                }
                                if (ibas.objects.instanceOf(data, bo.AssetRecharge)) {
                                    // 查询到了有效数据
                                    that.editData = data;
                                    that.show();
                                } else {
                                    // 数据重新检索无效
                                    that.messages({
                                        type: ibas.emMessageType.WARNING,
                                        message: ibas.i18n.prop("shell_data_deleted_and_created"),
                                        onCompleted(): void {
                                            that.show();
                                        }
                                    });
                                }
                            }
                        });
                        return; // 退出
                    }
                }
                super.run.apply(this, arguments);
            }
            /** 保存数据 */
            protected saveData(): void {
                this.busy(true);
                let that: this = this;
                let boRepository: bo.BORepositoryReceiptPayment = new bo.BORepositoryReceiptPayment();
                boRepository.saveAssetRecharge({
                    beSaved: this.editData,
                    onCompleted(opRslt: ibas.IOperationResult<bo.AssetRecharge>): void {
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
                            if (that.editData.referenced === ibas.emYesNo.YES) {
                                that.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_referenced", that.editData.toString()));
                            } else {
                                that.editData.delete();
                                that.saveData();
                            }
                        }
                    }
                });
            }
            /** 新建数据，参数1：是否克隆 or 导入文件 */
            protected createData(clone: boolean | Blob): void {
                let that: this = this;
                let createData: Function = function (): void {
                    if (clone instanceof Blob) {
                        let formData: FormData = new FormData();
                        formData.append("file", clone);
                        let boRepository: importexport.bo.BORepositoryImportExport = new importexport.bo.BORepositoryImportExport();
                        boRepository.parse<bo.AssetRecharge>({
                            converter: new bo.DataConverter(),
                            fileData: formData,
                            onCompleted: (opRslt) => {
                                try {
                                    if (opRslt.resultCode !== 0) {
                                        throw new Error(opRslt.message);
                                    }
                                    if (opRslt.resultObjects.length === 0) {
                                        throw new Error(ibas.i18n.prop("sys_unrecognized_data"));
                                    }
                                    that.editData = opRslt.resultObjects.firstOrDefault();
                                    that.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_read_new"));
                                    that.viewShowed();
                                } catch (error) {
                                    that.messages(error);
                                }
                            }
                        });
                    } else if (typeof clone === "boolean" && clone === true) {
                        // 克隆对象
                        that.editData = that.editData.clone();
                        that.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_cloned_new"));
                        that.viewShowed();
                    } else {
                        // 新建对象
                        that.editData = new bo.AssetRecharge();
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
            /** 添加资产充值-项目事件 */
            protected addAssetRechargeItem(): void {
                this.editData.assetRechargeItems.create();
                // 仅显示没有标记删除的
                this.view.showAssetRechargeItems(this.editData.assetRechargeItems.filterDeleted());
            }
            /** 删除资产充值-项目事件 */
            protected removeAssetRechargeItem(items: bo.AssetRechargeItem[]): void {
                // 非数组，转为数组
                if (!(items instanceof Array)) {
                    items = [items];
                }
                if (items.length === 0) {
                    return;
                }
                // 移除项目
                for (let item of items) {
                    if (this.editData.assetRechargeItems.indexOf(item) >= 0) {
                        if (item.isNew) {
                            // 新建的移除集合
                            this.editData.assetRechargeItems.remove(item);
                        } else {
                            // 非新建标记删除
                            if (item.referenced === ibas.emYesNo.YES) {
                                this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_referenced", item.toString()));
                            } else {
                                item.delete();
                            }
                        }
                    }
                }
                // 仅显示没有标记删除的
                this.view.showAssetRechargeItems(this.editData.assetRechargeItems.filterDeleted());
            }
            /** 选择资产充值-交易标识 */
            private chooseAssetRechargeItemModeTradeId(data: bo.AssetRechargeItem): void {
                if (ibas.objects.isNull(this.editData) || ibas.strings.isEmpty(this.editData.businessPartnerCode)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_payment_businesspartnercode")
                    ));
                    return;
                }
                if (ibas.objects.isNull(data)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data"));
                    return;
                }
                if (ibas.strings.isEmpty(data.mode)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("receiptpaymentt_please_choose_paid_method"));
                    return;
                }
                for (let srvAgent of ibas.servicesManager.getServices(<ibas.IServiceCaller<ibas.IServiceContract>>{
                    proxy: new app.PaymentMethodProxy({
                        businessPartnerType: this.editData.businessPartnerType,
                        businessPartnerCode: this.editData.businessPartnerCode,
                        documentType: undefined,
                        documentEntry: undefined,
                        documentLineId: undefined,
                        documentTotal: data.amount,
                        documentCurrency: data.currency,
                        selective: true,
                    }),
                    onCompleted(opRslt: ibas.IOperationResult<IPaymentTradingMethod>): void {
                        for (let item of opRslt.resultObjects) {
                            data.tradeId = item.id;
                        }
                    }
                })) {
                    if (srvAgent.name === data.mode) {
                        srvAgent.run();
                        break;
                    }
                }
            }
            /** 选择资产充值-业务伙伴资产 */
            private chooseAssetRechargeBusinessPartnerAsset(): void {
                if (ibas.objects.isNull(this.editData) || ibas.strings.isEmpty(this.editData.businessPartnerCode)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_payment_businesspartnercode")
                    ));
                    return;
                }
                // 调用选择服务
                let criteria: ibas.ICriteria = new ibas.Criteria();
                let condition: ibas.ICondition = criteria.conditions.create();
                condition.alias = businesspartner.bo.BusinessPartnerAsset.PROPERTY_BUSINESSPARTNERTYPE_NAME;
                condition.value = this.editData.businessPartnerType.toString();
                condition = criteria.conditions.create();
                condition.alias = businesspartner.bo.BusinessPartnerAsset.PROPERTY_BUSINESSPARTNERCODE_NAME;
                condition.value = this.editData.businessPartnerCode;

                let that: this = this;
                ibas.servicesManager.runChooseService<businesspartner.bo.IBusinessPartnerAsset>({
                    boCode: businesspartner.bo.BO_CODE_BUSINESSPARTNERASSET,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: criteria,
                    onCompleted(selecteds: ibas.IList<businesspartner.bo.IBusinessPartnerAsset>): void {
                        let selected: businesspartner.bo.IBusinessPartnerAsset = selecteds.firstOrDefault();
                        that.editData.businessPartnerType = selected.businessPartnerType;
                        that.editData.businessPartnerCode = selected.businessPartnerCode;
                        that.editData.serviceCode = selected.code;
                        if (!ibas.strings.isEmpty(selected.assetCode)) {
                            // 加载资产货币
                            criteria = new ibas.Criteria();
                            condition = criteria.conditions.create();
                            condition.alias = businesspartner.bo.AssetItem.PROPERTY_CODE_NAME;
                            condition.value = selected.assetCode;
                            let boRepository: businesspartner.bo.BORepositoryBusinessPartner = new businesspartner.bo.BORepositoryBusinessPartner();
                            boRepository.fetchAssetItem({
                                criteria: criteria,
                                onCompleted: (opRslt) => {
                                    for (let item of opRslt.resultObjects) {
                                        that.editData.currency = item.amountUnit;
                                    }
                                }
                            });
                        }
                    }
                });
            }
            /** 选择资产充值客户事件 */
            private chooseAssetRechargeBusinessPartner(filterConditions?: ibas.ICondition[]): void {
                if (!ibas.objects.isNull(this.editData) && this.editData.assetRechargeItems.length > 0) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("receiptpayment_existing_items_not_allowed_operation"));
                    return;
                }
                let that: this = this;
                if (this.editData.businessPartnerType === businesspartner.bo.emBusinessPartnerType.CUSTOMER) {
                    let conditions: ibas.IList<ibas.ICondition> = businesspartner.app.conditions.customer.create();
                    // 添加输入条件
                    if (filterConditions instanceof Array && filterConditions.length > 0) {
                        if (conditions.length > 1) {
                            conditions.firstOrDefault().bracketOpen++;
                            conditions.lastOrDefault().bracketClose++;
                        }
                        conditions.add(filterConditions);
                    }
                    ibas.servicesManager.runChooseService<businesspartner.bo.ICustomer>({
                        boCode: businesspartner.bo.BO_CODE_CUSTOMER,
                        chooseType: ibas.emChooseType.SINGLE,
                        criteria: conditions,
                        onCompleted(selecteds: ibas.IList<businesspartner.bo.ICustomer>): void {
                            let selected: businesspartner.bo.ICustomer = selecteds.firstOrDefault();
                            that.editData.businessPartnerCode = selected.code;
                            that.editData.businessPartnerName = selected.name;
                            that.editData.contactPerson = selected.contactPerson;
                        }
                    });
                } else if (this.editData.businessPartnerType === businesspartner.bo.emBusinessPartnerType.SUPPLIER) {
                    let conditions: ibas.IList<ibas.ICondition> = businesspartner.app.conditions.supplier.create();
                    // 添加输入条件
                    if (filterConditions instanceof Array && filterConditions.length > 0) {
                        if (conditions.length > 1) {
                            conditions.firstOrDefault().bracketOpen++;
                            conditions.lastOrDefault().bracketClose++;
                        }
                        conditions.add(filterConditions);
                    }
                    ibas.servicesManager.runChooseService<businesspartner.bo.ISupplier>({
                        boCode: businesspartner.bo.BO_CODE_SUPPLIER,
                        chooseType: ibas.emChooseType.SINGLE,
                        criteria: conditions,
                        onCompleted(selecteds: ibas.IList<businesspartner.bo.ISupplier>): void {
                            let selected: businesspartner.bo.ISupplier = selecteds.firstOrDefault();
                            that.editData.businessPartnerCode = selected.code;
                            that.editData.businessPartnerName = selected.name;
                            that.editData.contactPerson = selected.contactPerson;
                        }
                    });
                }
            }

        }
        /** 视图-资产充值 */
        export interface IAssetRechargeEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showAssetRecharge(data: bo.AssetRecharge): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加资产充值-项目事件 */
            addAssetRechargeItemEvent: Function;
            /** 删除资产充值-项目事件 */
            removeAssetRechargeItemEvent: Function;
            /** 显示数据 */
            showAssetRechargeItems(datas: bo.AssetRechargeItem[]): void;
            /** 选择资产充值客户事件 */
            chooseAssetRechargeBusinessPartnerEvent: Function;
            /** 选择资产充值项目 */
            chooseAssetRechargeBusinessPartnerAssetEvent: Function;
            /** 选择资产充值方式项目 */
            chooseAssetRechargeItemModeTradeIdEvent: Function;
        }
        /** 资产充值编辑服务映射 */
        export class AssetRechargeEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = AssetRechargeEditApp.APPLICATION_ID;
                this.name = AssetRechargeEditApp.APPLICATION_NAME;
                this.boCode = AssetRechargeEditApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.AssetRecharge>> {
                return new AssetRechargeEditApp();
            }
        }
    }
}

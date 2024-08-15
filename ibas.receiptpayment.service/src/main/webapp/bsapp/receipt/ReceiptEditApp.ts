/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace receiptpayment {
    export namespace app {
        /** 编辑应用-收款 */
        export class ReceiptEditApp extends ibas.BOEditService<IReceiptEditView, bo.Receipt> {
            /** 应用标识 */
            static APPLICATION_ID: string = "1e3ec36b-931b-430a-b81a-781836e83d1c";
            /** 应用名称 */
            static APPLICATION_NAME: string = "receiptpayment_app_receipt_edit";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.Receipt.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = ReceiptEditApp.APPLICATION_ID;
                this.name = ReceiptEditApp.APPLICATION_NAME;
                this.boCode = ReceiptEditApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.deleteDataEvent = this.deleteData;
                this.view.createDataEvent = this.createData;
                this.view.addReceiptItemEvent = this.addReceiptItem;
                this.view.removeReceiptItemEvent = this.removeReceiptItem;
                this.view.chooseReceiptBusinessPartnerEvent = this.chooseReceiptBusinessPartner;
                this.view.chooseReceiptContactPersonEvent = this.chooseReceiptContactPerson;
                this.view.chooseReceiptItemModeTradeIdEvent = this.chooseReceiptItemModeTradeId;
                this.view.turnToPaymentEvent = this.turnToPayment;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                super.viewShowed();
                if (ibas.objects.isNull(this.editData)) {
                    // 创建编辑对象实例
                    this.editData = new bo.Receipt();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showReceipt(this.editData);
                this.view.showReceiptItems(this.editData.receiptItems.filterDeleted());
                this.view.showReceiptDocuments(ibas.servicesManager.getServices({
                    trigger: this,
                    proxy: new DocumentReceiptServiceProxy({
                        receipt: this.editData,
                    })
                }).sort((a, b) => {
                    if (ibas.strings.equals(a.id, NotBaseOnReceiptService.APPLICATION_ID)) {
                        return -1;
                    }
                    if (ibas.strings.equals(b.id, NotBaseOnReceiptService.APPLICATION_ID)) {
                        return 1;
                    }
                    return 0;
                }));
            }
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.Receipt): void;
            run(): void {
                let that: this = this;
                if (ibas.objects.instanceOf(arguments[0], bo.Receipt)) {
                    let data: bo.Receipt = arguments[0];
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
                        boRepository.fetchReceipt({
                            criteria: criteria,
                            onCompleted(opRslt: ibas.IOperationResult<bo.Receipt>): void {
                                let data: bo.Receipt;
                                if (opRslt.resultCode === 0) {
                                    data = opRslt.resultObjects.firstOrDefault();
                                }
                                if (ibas.objects.instanceOf(data, bo.Receipt)) {
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
                        // 开始查询数据
                        return;
                    }
                }
                super.run.apply(this, arguments);
            }
            /** 保存数据 */
            protected saveData(): void {
                this.busy(true);
                let that: this = this;
                let boRepository: bo.BORepositoryReceiptPayment = new bo.BORepositoryReceiptPayment();
                boRepository.saveReceipt({
                    beSaved: this.editData,
                    onCompleted(opRslt: ibas.IOperationResult<bo.Receipt>): void {
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
                        boRepository.parse<bo.Receipt>({
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
                        that.editData = new bo.Receipt();
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
            /** 添加收款-项目事件 */
            private addReceiptItem(agent?: ibas.IServiceAgent): void {
                if (!ibas.objects.isNull(agent) && typeof agent.run === "function") {
                    if (ibas.objects.isNull(this.editData) || ibas.strings.isEmpty(this.editData.businessPartnerCode)) {
                        this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                            ibas.i18n.prop("bo_receipt_businesspartnercode")
                        )); return;
                    }
                    // 设置运行参数
                    let caller: ibas.IServiceWithResultCaller<IDocumentReceiptContract, bo.ReceiptItem[]> = <any>agent.caller;
                    if (caller.proxy instanceof DocumentReceiptServiceProxy) {
                        caller.proxy.contract.receipt = this.editData.clone();
                        caller.proxy.contract.receipt.receiptItems.forEach(c => c.isSavable = false);
                        caller.onCompleted = (results: bo.ReceiptItem[]) => {
                            for (let item of results) {
                                if (item.isSavable === false) {
                                    continue;
                                }
                                this.editData.receiptItems.add(item);
                            }
                            this.view.showReceiptItems(this.editData.receiptItems.filterDeleted());
                        };
                    }
                    agent.run();
                } else {
                    let item: bo.IReceiptItem = this.editData.receiptItems.create();
                    item.currency = this.editData.documentCurrency;
                    // 仅显示没有标记删除的
                    this.view.showReceiptItems(this.editData.receiptItems.filterDeleted());
                }
            }
            /** 删除收款-项目事件 */
            private removeReceiptItem(items: bo.ReceiptItem[]): void {
                // 非数组，转为数组
                if (!(items instanceof Array)) {
                    items = [items];
                }
                if (items.length === 0) {
                    return;
                }
                // 移除项目
                for (let item of items) {
                    if (this.editData.receiptItems.indexOf(item) >= 0) {
                        if (item.isNew) {
                            // 新建的移除集合
                            this.editData.receiptItems.remove(item);
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
                this.view.showReceiptItems(this.editData.receiptItems.filterDeleted());
            }

            /** 选择收款供应商事件 */
            private chooseReceiptBusinessPartner(filterConditions?: ibas.ICondition[]): void {
                if (!ibas.objects.isNull(this.editData) && this.editData.receiptItems.length > 0) {
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
            /** 选择收款项目-交易标识 */
            private chooseReceiptItemModeTradeId(data: bo.ReceiptItem): void {
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
                    proxy: new app.ReceiptMethodProxy({
                        businessPartnerType: this.editData.businessPartnerType,
                        businessPartnerCode: this.editData.businessPartnerCode,
                        documentType: data.baseDocumentType,
                        documentEntry: data.baseDocumentEntry,
                        documentLineId: data.baseDocumentLineId,
                        documentTotal: data.amount,
                        documentCurrency: data.currency,
                        selective: true,
                    }),
                    onCompleted(opRslt: ibas.IOperationResult<IReceiptTradingMethod>): void {
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
            /** 选择收款联系人 */
            private chooseReceiptContactPerson(): void {
                if (ibas.objects.isNull(this.editData) || ibas.strings.isEmpty(this.editData.businessPartnerCode)) {
                    this.messages(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_please_chooose_data",
                        ibas.i18n.prop("bo_payment_businesspartnercode")
                    ));
                    return;
                }
                let criteria: ibas.ICriteria = new ibas.Criteria();
                let condition: ibas.ICondition = criteria.conditions.create();
                condition.alias = businesspartner.bo.ContactPerson.PROPERTY_OWNERTYPE_NAME;
                condition.value = this.editData.businessPartnerType.toString();
                condition = criteria.conditions.create();
                condition.alias = businesspartner.bo.ContactPerson.PROPERTY_BUSINESSPARTNER_NAME;
                condition.value = this.editData.businessPartnerCode;
                condition = criteria.conditions.create();
                condition.alias = businesspartner.bo.ContactPerson.PROPERTY_ACTIVATED_NAME;
                condition.value = ibas.emYesNo.YES.toString();
                // 调用选择服务
                let that: this = this;
                ibas.servicesManager.runChooseService<businesspartner.bo.IContactPerson>({
                    boCode: businesspartner.bo.BO_CODE_CONTACTPERSON,
                    chooseType: ibas.emChooseType.SINGLE,
                    criteria: criteria,
                    onCompleted(selecteds: ibas.IList<businesspartner.bo.IContactPerson>): void {
                        let selected: businesspartner.bo.IContactPerson = selecteds.firstOrDefault();
                        that.editData.contactPerson = selected.objectKey;
                    }
                });
            }
            /** 转为付款事件 */
            private turnToPayment(): void {
                if (ibas.objects.isNull(this.editData) || this.editData.isDirty) {
                    throw new Error(ibas.i18n.prop("shell_data_saved_first"));
                }
                let payment: bo.Payment = new bo.Payment();
                payment.businessPartnerType = this.editData.businessPartnerType;
                payment.businessPartnerCode = this.editData.businessPartnerCode;
                payment.businessPartnerName = this.editData.businessPartnerName;
                for (let item of this.editData.receiptItems) {
                    let payItem: bo.IPaymentItem = payment.paymentItems.create();
                    payItem.baseDocumentType = item.objectCode;
                    payItem.baseDocumentEntry = item.docEntry;
                    payItem.baseDocumentLineId = item.lineId;
                    payItem.amount = item.amount;
                    payItem.currency = item.currency;
                    payItem.mode = item.mode;
                }
                let app: PaymentEditApp = new PaymentEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(payment);
            }
        }
        /** 视图-收款 */
        export interface IReceiptEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showReceipt(data: bo.Receipt): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 选择收款客户事件 */
            chooseReceiptBusinessPartnerEvent: Function;
            /** 选择收款联系人事件 */
            chooseReceiptContactPersonEvent: Function;
            /** 添加收款-项目事件 */
            addReceiptItemEvent: Function;
            /** 删除收款-项目事件 */
            removeReceiptItemEvent: Function;
            /** 显示数据 */
            showReceiptItems(datas: bo.ReceiptItem[]): void;
            /** 选择收款方式项目 */
            chooseReceiptItemModeTradeIdEvent: Function;
            /** 显示显示收款单据 */
            showReceiptDocuments(datas: ibas.IServiceAgent[]): void;
            /** 转为付款事件 */
            turnToPaymentEvent: Function;
        }
        /** 收款编辑服务映射 */
        export class ReceiptEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = ReceiptEditApp.APPLICATION_ID;
                this.name = ReceiptEditApp.APPLICATION_NAME;
                this.boCode = ReceiptEditApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.Receipt>> {
                return new ReceiptEditApp();
            }
        }

        /** 单据收款-不基于 */
        export class NotBaseOnReceiptService extends ibas.ServiceWithResultApplication<ibas.IView, app.IDocumentReceiptContract, bo.IReceiptItem[]> {
            /** 应用标识 */
            static APPLICATION_ID: string = "ab7f0d1e-ddbf-484d-9472-f836bdeff0a8";
            /** 应用名称 */
            static APPLICATION_NAME: string = "receiptpayment_document_receipt_not_baseon";
            /** 构造函数 */
            constructor() {
                super();
                this.id = NotBaseOnReceiptService.APPLICATION_ID;
                this.name = NotBaseOnReceiptService.APPLICATION_NAME;
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
            }
            protected runService(contract: app.IDocumentReceiptContract): void {
                let item: bo.IReceiptItem = contract.receipt.receiptItems.create();
                item.currency = contract.receipt.documentCurrency;
                this.fireCompleted(contract.receipt.receiptItems);
            }
        }
        /** 单据收款-不基于服务映射 */
        export class NotBaseOnReceiptServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = NotBaseOnReceiptService.APPLICATION_ID;
                this.name = NotBaseOnReceiptService.APPLICATION_NAME;
                this.description = ibas.i18n.prop("shell_data_add_line");
                this.proxy = DocumentReceiptServiceProxy;
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract> {
                return new NotBaseOnReceiptService();
            }
        }
    }
}
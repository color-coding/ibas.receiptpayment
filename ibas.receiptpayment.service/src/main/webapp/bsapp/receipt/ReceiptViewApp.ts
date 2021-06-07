/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace receiptpayment {
    export namespace app {
        /** 查看应用-收款 */
        export class ReceiptViewApp extends ibas.BOViewService<IReceiptViewView, bo.Receipt> {
            /** 应用标识 */
            static APPLICATION_ID: string = "85ff41f9-ec7a-4d97-a634-829121c881be";
            /** 应用名称 */
            static APPLICATION_NAME: string = "receiptpayment_app_receipt_view";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.Receipt.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = ReceiptViewApp.APPLICATION_ID;
                this.name = ReceiptViewApp.APPLICATION_NAME;
                this.boCode = ReceiptViewApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.editDataEvent = this.editData;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成，基类方法更新地址
                super.viewShowed();
                if (ibas.objects.isNull(this.viewData)) {
                    // 创建编辑对象实例
                    this.viewData = new bo.Receipt();
                    this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                }
                this.view.showReceipt(this.viewData);
                this.view.showReceiptItems(this.viewData.receiptItems.filterDeleted());
            }
            /** 编辑数据，参数：目标数据 */
            protected editData(): void {
                let app: ReceiptEditApp = new ReceiptEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(this.viewData);
            }
            run(): void;
            run(data: bo.Receipt): void;
            /** 运行 */
            run(): void {
                let that: this = this;
                if (ibas.objects.instanceOf(arguments[0], bo.Receipt)) {
                    let data: bo.Receipt = arguments[0];
                    // 新对象直接编辑
                    if (data.isNew) {
                        that.viewData = data;
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
                                    that.viewData = data;
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
                    condition.alias = bo.Receipt.PROPERTY_DOCENTRY_NAME;
                    condition.value = value;
                }
                let boRepository: bo.BORepositoryReceiptPayment = new bo.BORepositoryReceiptPayment();
                boRepository.fetchReceipt({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.Receipt>): void {
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
        }
        /** 视图-收款 */
        export interface IReceiptViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showReceipt(data: bo.Receipt): void;
            /** 显示数据-收款-项目 */
            showReceiptItems(datas: bo.ReceiptItem[]): void;

        }
        /** 收款连接服务映射 */
        export class ReceiptLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = ReceiptViewApp.APPLICATION_ID;
                this.name = ReceiptViewApp.APPLICATION_NAME;
                this.boCode = ReceiptViewApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IBOLinkService {
                return new ReceiptViewApp();
            }
        }
    }
}

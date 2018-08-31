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
            static APPLICATION_ID: string = "fb024320-b6ad-4411-a819-65793326f286";
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
                // 视图加载完成
                super.viewShowed();
            }
            /** 编辑数据，参数：目标数据 */
            protected editData(): void {
                let app: ReceiptEditApp = new ReceiptEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(this.viewData);
            }
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.Receipt): void;
            run(): void {
                if (ibas.objects.instanceOf(arguments[0], bo.Receipt)) {
                    this.viewData = arguments[0];
                    this.show();
                } else {
                    super.run.apply(this, arguments);
                }
            }
            protected viewData: bo.Receipt;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void {
                this.busy(true);
                let that: this = this;
                if (typeof criteria === "string") {
                    let value: string = criteria;
                    criteria = new ibas.Criteria();
                    criteria.result = 1;
                    // 添加查询条件

                }
                let boRepository: bo.BORepositoryReceiptPayment = new bo.BORepositoryReceiptPayment();
                boRepository.fetchReceipt({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.Receipt>): void {
                        try {
                            if (opRslt.resultCode !== 0) {
                                throw new Error(opRslt.message);
                            }
                            that.viewData = opRslt.resultObjects.firstOrDefault();
                            if (!that.isViewShowed()) {
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
            create(): ibas.IService<ibas.IBOLinkServiceCaller> {
                return new ReceiptViewApp();
            }
        }
    }
}
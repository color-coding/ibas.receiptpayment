/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace receiptpayment {
    export namespace app {
        /** 查看应用-资产充值 */
        export class AssetRechargeViewApp extends ibas.BOViewService<IAssetRechargeViewView, bo.AssetRecharge> {

            /** 应用标识 */
            static APPLICATION_ID: string = "5ecd608a-19e0-4f58-af2b-ca96a9e005ce";
            /** 应用名称 */
            static APPLICATION_NAME: string = "receiptpayment_app_assetrecharge_view";
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string = bo.AssetRecharge.BUSINESS_OBJECT_CODE;
            /** 构造函数 */
            constructor() {
                super();
                this.id = AssetRechargeViewApp.APPLICATION_ID;
                this.name = AssetRechargeViewApp.APPLICATION_NAME;
                this.boCode = AssetRechargeViewApp.BUSINESS_OBJECT_CODE;
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
            }
            /** 编辑数据，参数：目标数据 */
            protected editData(): void {
                let app: AssetRechargeEditApp = new AssetRechargeEditApp();
                app.navigation = this.navigation;
                app.viewShower = this.viewShower;
                app.run(this.viewData);
            }
            run(): void;
            run(data: bo.AssetRecharge): void;
            /** 运行 */
            run(): void {
                if (ibas.objects.instanceOf(arguments[0], bo.AssetRecharge)) {
                    this.viewData = arguments[0];
                    this.show();
                } else {
                    super.run.apply(this, arguments);
                }
            }
            protected viewData: bo.AssetRecharge;
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
                boRepository.fetchAssetRecharge({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.AssetRecharge>): void {
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
        /** 视图-资产充值 */
        export interface IAssetRechargeViewView extends ibas.IBOViewView {

        }
        /** 资产充值连接服务映射 */
        export class AssetRechargeLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = AssetRechargeViewApp.APPLICATION_ID;
                this.name = AssetRechargeViewApp.APPLICATION_NAME;
                this.boCode = AssetRechargeViewApp.BUSINESS_OBJECT_CODE;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 创建服务实例 */
            create(): ibas.IBOLinkService {
                return new AssetRechargeViewApp();
            }
        }
    }
}

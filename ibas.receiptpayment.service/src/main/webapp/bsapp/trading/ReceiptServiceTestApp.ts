/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace receiptpayment {
    export namespace app {
        /** 应用-收款服务测试 */
        export class ReceiptServiceTestApp extends ibas.ResidentApplication<IReceiptServiceTestView> {
            /** 应用标识 */
            static APPLICATION_ID: string = "dcada643-cc95-4ec9-8c33-16828af54812";
            /** 应用名称 */
            static APPLICATION_NAME: string = "receiptpayment_receipt_service_test";
            /** 构造函数 */
            constructor() {
                super();
                this.id = ReceiptServiceTestApp.APPLICATION_ID;
                this.name = ReceiptServiceTestApp.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            private refresh: boolean = true;
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
            }
            /** 运行,覆盖原方法 */
            run(): void {
                super.run.apply(this, arguments);
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                // 视图加载完成
                ibas.servicesManager.runApplicationService<businesspartner.app.IReceiptContract>({
                    proxy: new businesspartner.app.ReceiptServiceProxy({
                        businessPartnerType: businesspartner.bo.emBusinessPartnerType.CUSTOMER,
                        businessPartnerCode: "C70000",
                        documentType: "_TEST_",
                        documentEntry: 199,
                        documentLineId: 2,
                        documentTotal: 129.99,
                        documentCurrency: ibas.config.get(ibas.CONFIG_ITEM_DEFAULT_CURRENCY),
                        documentSummary: "坚果 Pro 3 64G 黑",
                    })
                });
            }
        }
        /** 视图-收款服务测试 */
        export interface IReceiptServiceTestView extends ibas.IResidentView {
        }
    }
}
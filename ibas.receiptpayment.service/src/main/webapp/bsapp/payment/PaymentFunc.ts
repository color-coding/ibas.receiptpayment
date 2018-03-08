/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace receiptpayment {
    export namespace app {

        export class PaymentFunc extends ibas.ModuleFunction {

            /** 功能标识 */
            static FUNCTION_ID = "d986ea5d-d745-4018-9bbb-3ed4dc8df125";
            /** 功能名称 */
            static FUNCTION_NAME = "receiptpayment_func_payment";
            /** 构造函数 */
            constructor() {
                super();
                this.id = PaymentFunc.FUNCTION_ID;
                this.name = PaymentFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: PaymentListApp = new PaymentListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}
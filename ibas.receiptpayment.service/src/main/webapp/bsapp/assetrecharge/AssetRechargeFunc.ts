/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace receiptpayment {
    export namespace app {
        export class AssetRechargeFunc extends ibas.ModuleFunction {

            /** 功能标识 */
            static FUNCTION_ID = "b1974838-71aa-432b-b2cc-b524fb1e100d";
            /** 功能名称 */
            static FUNCTION_NAME = "receiptpayment_func_assetrecharge";
            /** 构造函数 */
            constructor() {
                super();
                this.id = AssetRechargeFunc.FUNCTION_ID;
                this.name = AssetRechargeFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: AssetRechargeListApp = new AssetRechargeListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}

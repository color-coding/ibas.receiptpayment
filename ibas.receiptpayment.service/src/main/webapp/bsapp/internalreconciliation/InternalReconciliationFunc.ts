/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace receiptpayment {
    export namespace app {
        export class InternalReconciliationFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID = "14b8bb56-b1b8-4a30-8046-955cb3c6721f";
            /** 功能名称 */
            static FUNCTION_NAME = "receiptpayment_func_internalreconciliation";
            /** 构造函数 */
            constructor() {
                super();
                this.id = InternalReconciliationFunc.FUNCTION_ID;
                this.name = InternalReconciliationFunc.FUNCTION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView> {
                let app: InternalReconciliationListApp = new InternalReconciliationListApp();
                app.navigation = this.navigation;
                return app;
            }
        }
    }
}

/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

namespace receiptpayment {
    export namespace app {
        /** 交易方式-货到付款 */
        export const TRADING_MODE_COD: string = "TM_COD";
        /**
         * 收款方式-货到付款
         */
        export class ReceiptMethodCOD extends ReceiptMethod {
            constructor() {
                super();
                this.id = "0618d10f-b3c9-408e-be17-726a0ed6a238";
                this.name = TRADING_MODE_COD;
                this.description = ibas.i18n.prop(ibas.strings.format("{0}_{1}", ReceiptMethod.name, this.name).toLowerCase());
                this.enabled = !ibas.config.get(ibas.strings.format(CONFIG_ITEM_TEMPLATE_TRADING_MODE_DISABLED, this.name), false);
                this.noTrade = true;
                // 状态为计划，收款后变化
                this.defaultStatus = ibas.emDocumentStatus.PLANNED;
            }
            /** 默认收款项目状态 */
            defaultStatus: ibas.emDocumentStatus;
            /** 获取可用交易类型 */
            getTradings(caller: IReceiptTradingGetter): void {
                if (caller.onCompleted instanceof Function) {
                    let opRslt: ibas.IOperationResult<ReceiptTradingMethod> = new ibas.OperationResult<ReceiptTradingMethod>();
                    let trading: ReceiptTradingMethod = new ReceiptTradingMethod();
                    trading.method = this;
                    trading.id = "";
                    trading.description = this.description;
                    trading.icon = ibas.i18n.prop(ibas.strings.format("{0}_{1}_icon", ReceiptMethod.name, this.name).toLowerCase());
                    opRslt.resultObjects.add(trading);
                    caller.onCompleted(opRslt);
                }
            }
        }
    }
}

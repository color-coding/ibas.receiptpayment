/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

namespace receiptpayment {
    export namespace app {
        /** 交易方式-POS */
        export const TRADING_MODE_POS: string = "TM_POS";
        /**
         * 收款方式-POS
         */
        export class ReceiptMethodPOS extends ReceiptMethod {
            constructor() {
                super();
                this.id = "25edd5e5-1a85-4be0-b2a9-131065ca5828";
                this.name = TRADING_MODE_POS;
                this.description = ibas.i18n.prop(ibas.strings.format("{0}_{1}", ReceiptMethod.name, this.name).toLowerCase());
                this.enabled = !ibas.config.get(ibas.strings.format(CONFIG_ITEM_TEMPLATE_TRADING_MODE_DISABLED, this.name), false);
                this.noTrade = false;
            }
            /** 获取可用交易类型 */
            getTradings(caller: IReceiptTradingGetter): void {
                if (caller.onCompleted instanceof Function) {
                    let opRslt: ibas.IOperationResult<ReceiptTradingMethod> = new ibas.OperationResult<ReceiptTradingMethod>();
                    let trading: POSTradingMethod = new POSTradingMethod();
                    trading.method = this;
                    trading.id = "";
                    trading.description = this.description;
                    trading.icon = ibas.i18n.prop(ibas.strings.format("{0}_{1}_icon", ReceiptMethod.name, this.name).toLowerCase());
                    opRslt.resultObjects.add(trading);
                    caller.onCompleted(opRslt);
                }
            }
        }
        class POSTradingMethod extends ReceiptTradingMethod {
            /** 交易 */
            trade(amount: number): void | ibas.Waiter {
                return new Waiter(this.description);
            }
        }
    }
}

/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

namespace receiptpayment {
    export namespace app {
        /** 交易方式-现金 */
        export const TRADING_MODE_CASH: string = "TM_CASH";
        /**
         * 交易方式-现金
         */
        export abstract class TradingMethodCash {
            constructor() {
                this.name = TRADING_MODE_CASH;
                this.description = ibas.i18n.prop("receiptpayment_method_cash");
                this.enabled = !ibas.config.get(ibas.strings.format(trading.CONFIG_ITEM_TEMPLATE_TRADING_MODE_DISABLED, this.name), false);
            }
            /** 名称 */
            name: string;
            /** 描述 */
            description: string;
            /** 启用 */
            enabled: boolean;
        }
        /**
         * 收款方式-现金
         */
        export class ReceiptMethodCash extends TradingMethodCash implements trading.IReceiptMethod {
            /** 获取可用交易类型 */
            getTradings(caller: trading.IReceiptTradingMethodCaller): void {
                if (caller.onCompleted instanceof Function) {
                    let opRslt: ibas.IOperationResult<ReceiptTradingMethod> = new ibas.OperationResult<ReceiptTradingMethod>();
                    let trading: trading.IReceiptTradingMethod = new ReceiptTradingMethod();
                    trading.method = this;
                    trading.id = "";
                    trading.description = this.description;
                    trading.icon = ibas.i18n.prop("receiptpayment_method_cash_icon");
                    opRslt.resultObjects.add(trading);
                    caller.onCompleted(opRslt);
                }
            }
        }
        /**
         * 付款方式-现金
         */
        export class PaymentMethodCash extends TradingMethodCash implements trading.IPaymentMethod {
            /** 获取可用交易类型 */
            getTradings(caller: trading.IPaymentTradingMethodCaller): void {
                if (caller.onCompleted instanceof Function) {
                    let opRslt: ibas.IOperationResult<PaymentTradingMethod> = new ibas.OperationResult<PaymentTradingMethod>();
                    let trading: trading.IPaymentTradingMethod = new PaymentTradingMethod();
                    trading.method = this;
                    trading.id = "";
                    trading.description = this.description;
                    trading.icon = ibas.i18n.prop("receiptpayment_method_cash_icon");
                    opRslt.resultObjects.add(trading);
                    caller.onCompleted(opRslt);
                }
            }
        }
    }
}

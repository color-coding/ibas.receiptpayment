/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

namespace receiptpayment {
    export namespace app {
        /** 交易方式-银行 */
        export const TRADING_MODE_BANK: string = "TM_BANK";
        /**
         * 收款方式-银行
         */
        export class ReceiptMethodBank extends ReceiptMethod {
            constructor() {
                super();
                this.id = "e81d088d-2735-4356-b0af-610d261a1019";
                this.name = TRADING_MODE_BANK;
                this.description = ibas.i18n.prop("receiptpayment_method_bank");
                this.enabled = !ibas.config.get(ibas.strings.format(CONFIG_ITEM_TEMPLATE_TRADING_MODE_DISABLED, this.name), false);
            }
            /** 获取可用交易类型 */
            getTradings(caller: IReceiptTradingGetter): void {
                if (caller.onCompleted instanceof Function) {
                    let opRslt: ibas.IOperationResult<ReceiptTradingMethod> = new ibas.OperationResult<ReceiptTradingMethod>();
                    let trading: ReceiptTradingMethod = new ReceiptTradingMethod();
                    trading.method = this;
                    trading.id = "";
                    trading.description = this.description;
                    trading.icon = ibas.i18n.prop("receiptpayment_method_bank_icon");
                    opRslt.resultObjects.add(trading);
                    caller.onCompleted(opRslt);
                }
            }
        }
        /**
         * 付款方式-银行
         */
        export class PaymentMethodBank extends PaymentMethod {
            constructor() {
                super();
                this.id = "d92a2b64-8fd0-4e04-9384-0fbb4f6497a7";
                this.name = TRADING_MODE_BANK;
                this.description = ibas.i18n.prop("receiptpayment_method_bank");
                this.enabled = !ibas.config.get(ibas.strings.format(CONFIG_ITEM_TEMPLATE_TRADING_MODE_DISABLED, this.name), false);
            }
            /** 获取可用交易类型 */
            getTradings(caller: IPaymentTradingGetter): void {
                if (caller.onCompleted instanceof Function) {
                    let opRslt: ibas.IOperationResult<PaymentTradingMethod> = new ibas.OperationResult<PaymentTradingMethod>();
                    let trading: IPaymentTradingMethod = new PaymentTradingMethod();
                    trading.method = this;
                    trading.id = "";
                    trading.description = this.description;
                    trading.icon = ibas.i18n.prop("receiptpayment_method_bank_icon");
                    opRslt.resultObjects.add(trading);
                    caller.onCompleted(opRslt);
                }
            }
        }
    }
}

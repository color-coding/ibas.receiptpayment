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
         * 交易方式-现金
         */
        export abstract class TradingMethodBank {
            constructor() {
                this.name = TRADING_MODE_BANK;
                this.description = ibas.i18n.prop("receiptpayment_method_bank");
            }
            /** 名称 */
            name: string;
            /** 描述 */
            description: string;
        }
        /**
         * 收款方式-银行
         */
        export class ReceiptMethodBank extends TradingMethodBank implements trading.IReceiptMethod {
            /** 获取可用交易类型 */
            getTrading(caller: trading.IReceiptTradingMethodCaller): void {
                if (caller.onCompleted instanceof Function) {
                    let opRslt: ibas.IOperationResult<ReceiptTradingMethod> = new ibas.OperationResult<ReceiptTradingMethod>();
                    let method: trading.IReceiptTradingMethod = new ReceiptTradingMethod();
                    method.mode = this;
                    method.id = "";
                    method.description = this.description;
                    method.icon = ibas.i18n.prop("receiptpayment_method_bank_icon");
                    opRslt.resultObjects.add(method);
                    caller.onCompleted(opRslt);
                }
            }
        }
        /**
         * 付款方式-银行
         */
        export class PaymentMethodBank extends TradingMethodBank implements trading.IPaymentMethod {
            /** 获取可用交易类型 */
            getTrading(caller: trading.IPaymentTradingMethodCaller): void {
                if (caller.onCompleted instanceof Function) {
                    let opRslt: ibas.IOperationResult<PaymentTradingMethod> = new ibas.OperationResult<PaymentTradingMethod>();
                    let method: trading.IPaymentTradingMethod = new PaymentTradingMethod();
                    method.mode = this;
                    method.id = "";
                    method.description = this.description;
                    method.icon = ibas.i18n.prop("receiptpayment_method_bank_icon");
                    opRslt.resultObjects.add(method);
                    caller.onCompleted(opRslt);
                }
            }
        }
    }
}

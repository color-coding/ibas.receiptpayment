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
            }
            /** 名称 */
            name: string;
            /** 描述 */
            description: string;
            /** 获取可用交易类型 */
            getTrading(caller: trading.ITradingMethodCaller): void {
                this.onCompleted = caller.onCompleted;
                this.fireOnCompleted();
            }

            private onCompleted: Function;
            protected fireOnCompleted(): void {
                if (this.onCompleted instanceof Function) {
                    let method: trading.ITradingMethod = new TradingMethod();
                    method.id = this.name;
                    method.description = this.description;
                    this.onCompleted(method);
                }
            }
        }
        class TradingMethod implements trading.ITradingMethod {
            constructor() {
                this.group = TRADING_MODE_CASH;
            }
            /** 组 */
            group: string;
            /** 标记 */
            id: string;
            /** 描述 */
            description: string;
            /** 图标 */
            icon?: string;
            /** 收款 */
            trading(caller: trading.ITradingCaller): void {
            }
        }
        /**
         * 收款方式-现金
         */
        export class ReceiptMethodCash extends TradingMethodCash implements trading.IReceiptMethod {
        }
        /**
         * 付款方式-现金
         */
        export class PaymentMethodCash extends TradingMethodCash implements trading.IPaymentMethod {
        }
    }
}

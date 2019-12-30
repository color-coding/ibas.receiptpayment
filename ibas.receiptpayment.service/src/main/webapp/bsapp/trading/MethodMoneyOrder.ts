/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

namespace receiptpayment {
    export namespace app {
        /** 交易方式-汇票 */
        export const TRADING_MODE_MONEY_ORDER: string = "TM_MEORD";
        /** 交易标记-收款-汇票 */
        export const TRADING_ID_RECEIPT_MONEY_ORDER: string = "bedc9e3f-455b-471a-9dce-0212da06ffa6";
        /**
         * 收款方式-汇票
         */
        export class ReceiptMethodMoneyOrder extends ReceiptMethod {
            constructor() {
                super();
                this.id = TRADING_ID_RECEIPT_MONEY_ORDER;
                this.name = TRADING_MODE_MONEY_ORDER;
                this.description = ibas.i18n.prop(ibas.strings.format("{0}_{1}", ReceiptMethod.name, this.name).toLowerCase());
                this.enabled = !ibas.config.get(ibas.strings.format(CONFIG_ITEM_TEMPLATE_TRADING_MODE_DISABLED, this.name), false);
            }
            /** 获取可用交易类型 */
            run(caller: ibas.IServiceWithResultCaller<IReceiptMethodContract, ibas.IOperationResult<IReceiptTradingMethod>>): void {
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
        /** 收款方式映射-汇票 */
        export class ReceiptMethodMoneyOrderMapping extends ReceiptMethodServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = TRADING_ID_RECEIPT_MONEY_ORDER;
                this.name = TRADING_MODE_MONEY_ORDER;
                this.description = ibas.i18n.prop(ibas.strings.format("{0}_{1}", ReceiptMethod.name, this.name).toLowerCase());
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract> {
                return new ReceiptMethodMoneyOrder();
            }
        }
        /** 交易标记-付款-汇票 */
        export const TRADING_ID_PAYMENT_MONEY_ORDER: string = "62cff5be-eb01-4136-be42-9b0590f1e027";
        /**
         * 付款方式-汇票
         */
        export class PaymentMethodMoneyOrder extends PaymentMethod {
            constructor() {
                super();
                this.id = TRADING_ID_PAYMENT_MONEY_ORDER;
                this.name = TRADING_MODE_MONEY_ORDER;
                this.description = ibas.i18n.prop(ibas.strings.format("{0}_{1}", PaymentMethod.name, this.name).toLowerCase());
                this.enabled = !ibas.config.get(ibas.strings.format(CONFIG_ITEM_TEMPLATE_TRADING_MODE_DISABLED, this.name), false);
            }
            /** 获取可用交易类型 */
            run(caller: ibas.IServiceWithResultCaller<IPaymentMethodContract, ibas.IOperationResult<IPaymentTradingMethod>>): void {
                if (caller.onCompleted instanceof Function) {
                    let opRslt: ibas.IOperationResult<PaymentTradingMethod> = new ibas.OperationResult<PaymentTradingMethod>();
                    let trading: IPaymentTradingMethod = new PaymentTradingMethod();
                    trading.method = this;
                    trading.id = "";
                    trading.description = this.description;
                    trading.icon = ibas.i18n.prop(ibas.strings.format("{0}_{1}_icon", PaymentMethod.name, this.name).toLowerCase());
                    opRslt.resultObjects.add(trading);
                    caller.onCompleted(opRslt);
                }
            }
        }
        /** 付款方式映射-汇票 */
        export class PaymentMethodMoneyOrderMapping extends PaymentMethodServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = TRADING_ID_PAYMENT_MONEY_ORDER;
                this.name = TRADING_MODE_MONEY_ORDER;
                this.description = ibas.i18n.prop(ibas.strings.format("{0}_{1}", ReceiptMethod.name, this.name).toLowerCase());
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract> {
                return new PaymentMethodMoneyOrder();
            }
        }
    }
}

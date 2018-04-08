/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

namespace receiptpayment {
    export namespace app {
        /** 交易方式-业务伙伴资产 */
        export const TRADING_MODE_BP_ASSSET: string = "TM_BPAS";
        /**
         * 收款方式-业务伙伴资产
         */
        export class ReceiptMethodBPAsset implements trading.IReceiptMethod {
            constructor() {
                this.name = TRADING_MODE_BP_ASSSET;
                this.description = ibas.i18n.prop("receiptpayment_method_bp_asset");
            }
            /** 名称 */
            name: string;
            /** 描述 */
            description: string;
            /** 获取可用交易类型 */
            getTrading(caller: trading.ITradingMethodCaller): void {

            }
        }
    }
}

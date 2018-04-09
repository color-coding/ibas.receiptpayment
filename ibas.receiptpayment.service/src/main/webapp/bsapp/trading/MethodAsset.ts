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
            getTrading(caller: trading.IReceiptTradingMethodCaller): void {
                let that: this = this;
                let boRepository: businesspartner.bo.IBORepositoryBusinessPartner = ibas.boFactory.create(businesspartner.bo.BO_REPOSITORY_BUSINESSPARTNER);
                let criteria: ibas.ICriteria = new ibas.Criteria();
                criteria.conditions.add(businesspartner.app.conditions.businesspartnerasset.create(caller.businessPartnerType, caller.businessPartnerCode));
                let condition: ibas.ICondition = criteria.conditions.create();
                condition.alias = "times";
                condition.value = "0";
                condition.operation = ibas.emConditionOperation.GRATER_EQUAL;
                boRepository.fetchBusinessPartnerAsset({
                    criteria: criteria,
                    onCompleted(opRsltAsset: ibas.IOperationResult<businesspartner.bo.IBusinessPartnerAsset>): void {
                        let opRslt: ibas.IOperationResult<trading.IReceiptTradingMethod> = new ibas.OperationResult<trading.IReceiptTradingMethod>();
                        if (opRsltAsset.resultCode !== 0) {
                            opRslt.resultCode = -1;
                            opRslt.message = opRsltAsset.message;
                        } else {
                            for (let item of opRsltAsset.resultObjects) {
                                let method: trading.IReceiptTradingMethod = new ReceiptTradingMethod();
                                method.mode = that;
                                method.id = item.code;
                                method.description = item.name;
                                method.icon = ibas.i18n.prop("receiptpayment_method_bp_asset_icon");
                                opRslt.resultObjects.add(method);
                            }
                        }
                        if (caller.onCompleted instanceof Function) {
                            caller.onCompleted(opRslt);
                        }
                    }
                });
            }

        }
    }
}

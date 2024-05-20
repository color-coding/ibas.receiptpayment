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
        /** 交易标记-收款-业务伙伴资产 */
        export const TRADING_ID_RECEIPT_BP_ASSSET: string = "bd959445-66a0-4760-be0a-2be36bfeec01";
        /**
         * 收款方式-业务伙伴资产
         */
        export class ReceiptMethodBPAsset extends ReceiptMethod {
            constructor() {
                super();
                this.id = TRADING_ID_RECEIPT_BP_ASSSET;
                this.name = TRADING_MODE_BP_ASSSET;
                this.description = ibas.i18n.prop(ibas.strings.format("{0}_{1}", ReceiptMethod.name, this.name).toLowerCase());
                this.enabled = !ibas.config.get(ibas.strings.format(CONFIG_ITEM_TEMPLATE_TRADING_MODE_DISABLED, this.name), false);
                this.noTrade = true;
            }
            /** 获取可用交易类型 */
            run(caller: ibas.IServiceWithResultCaller<IReceiptMethodContract, ibas.IOperationResult<IReceiptTradingMethod>>): void {
                if (ibas.objects.isNull(caller)) {
                    throw new Error(ibas.i18n.prop("sys_invalid_parameter", "caller"));
                }
                if (!ibas.objects.instanceOf(caller.proxy, ibas.ServiceProxy)) {
                    throw new Error(ibas.i18n.prop("sys_invalid_parameter", "caller.proxy"));
                }
                if (ibas.objects.isNull(caller.proxy.contract)) {
                    throw new Error(ibas.i18n.prop("sys_invalid_parameter", "caller.proxy.contract"));
                }
                let that: this = this;
                let contract: IReceiptMethodContract = caller.proxy.contract;
                if (contract.selective === true) {
                    ibas.servicesManager.runChooseService<businesspartner.bo.ICustomerAsset>({
                        boCode: businesspartner.bo.BO_CODE_CUSTOMERASSET,
                        chooseType: ibas.emChooseType.SINGLE,
                        criteria: [
                            new ibas.Condition(businesspartner.bo.BusinessPartnerAsset.PROPERTY_BUSINESSPARTNERCODE_NAME, ibas.emConditionOperation.EQUAL, contract.businessPartnerCode),
                            new ibas.Condition(businesspartner.bo.AssetItem.PROPERTY_AMOUNTUNIT_NAME, ibas.emConditionOperation.EQUAL, contract.documentCurrency),
                        ],
                        onCompleted(selecteds: ibas.IList<businesspartner.bo.ICustomerAsset>): void {
                            let opRslt: ibas.IOperationResult<IReceiptTradingMethod> = new ibas.OperationResult<IReceiptTradingMethod>();
                            for (let item of selecteds) {
                                let trading: IReceiptTradingMethod = new ReceiptTradingMethod();
                                trading.method = that;
                                trading.id = item.code;
                                trading.description = item.name;
                                trading.icon = item.picture;
                                trading.discount = item.discount;
                                trading.amount = item.amount;
                                trading.unit = item.unit;
                                if (ibas.strings.isEmpty(trading.icon)) {
                                    trading.icon = ibas.i18n.prop(ibas.strings.format("{0}_{1}_icon", ReceiptMethod.name, that.name).toLowerCase());
                                }
                                opRslt.resultObjects.add(trading);
                            }
                            if (caller.onCompleted instanceof Function) {
                                caller.onCompleted(opRslt);
                            }
                        }
                    });
                } else {
                    let boRepository: businesspartner.bo.IBORepositoryBusinessPartner = ibas.boFactory.create(businesspartner.bo.BO_REPOSITORY_BUSINESSPARTNER);
                    boRepository.fetchCustomerAsset({
                        request: {
                            businessPartner: contract.businessPartnerCode,
                            documentType: contract.documentType,
                            documentEntry: contract.documentEntry,
                            documentLineId: contract.documentLineId,
                            total: contract.documentTotal,
                            currency: contract.documentCurrency
                        },
                        onCompleted(opRsltAsset: ibas.IOperationResult<businesspartner.bo.ICustomerAsset>): void {
                            let opRslt: ibas.IOperationResult<IReceiptTradingMethod> = new ibas.OperationResult<IReceiptTradingMethod>();
                            if (opRsltAsset.resultCode !== 0) {
                                opRslt.resultCode = -1;
                                opRslt.message = opRsltAsset.message;
                            } else {
                                for (let item of opRsltAsset.resultObjects) {
                                    let trading: IReceiptTradingMethod = new ReceiptTradingMethod();
                                    trading.method = that;
                                    trading.id = item.code;
                                    trading.description = item.name;
                                    trading.icon = item.picture;
                                    trading.discount = item.discount;
                                    trading.amount = item.amount;
                                    trading.unit = item.unit;
                                    if (ibas.strings.isEmpty(trading.icon)) {
                                        trading.icon = ibas.i18n.prop(ibas.strings.format("{0}_{1}_icon", ReceiptMethod.name, that.name).toLowerCase());
                                    }
                                    opRslt.resultObjects.add(trading);
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
        /** 收款方式映射-业务伙伴资产 */
        export class ReceiptMethodBPAssetMapping extends ReceiptMethodServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = TRADING_ID_RECEIPT_BP_ASSSET;
                this.name = TRADING_MODE_BP_ASSSET;
                this.description = ibas.i18n.prop(ibas.strings.format("{0}_{1}", ReceiptMethod.name, this.name).toLowerCase());
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract> {
                return new ReceiptMethodBPAsset();
            }
        }


        /** 交易标记-付款-业务伙伴资产 */
        export const TRADING_ID_PAYMENT_BP_ASSSET: string = "2fc1a68f-355c-41c2-8a1e-e23c27cc4af1";
        /**
         * 付款方式-业务伙伴资产
         */
        export class PaymentMethodBPAsset extends PaymentMethod {
            constructor() {
                super();
                this.id = TRADING_ID_PAYMENT_BP_ASSSET;
                this.name = TRADING_MODE_BP_ASSSET;
                this.description = ibas.i18n.prop(ibas.strings.format("{0}_{1}", PaymentMethod.name, this.name).toLowerCase());
                this.enabled = !ibas.config.get(ibas.strings.format(CONFIG_ITEM_TEMPLATE_TRADING_MODE_DISABLED, this.name), false);
                this.noTrade = true;
            }
            /** 获取可用交易类型 */
            run(caller: ibas.IServiceWithResultCaller<IPaymentMethodContract, ibas.IOperationResult<IPaymentTradingMethod>>): void {
                if (ibas.objects.isNull(caller)) {
                    throw new Error(ibas.i18n.prop("sys_invalid_parameter", "caller"));
                }
                if (!ibas.objects.instanceOf(caller.proxy, ibas.ServiceProxy)) {
                    throw new Error(ibas.i18n.prop("sys_invalid_parameter", "caller.proxy"));
                }
                if (ibas.objects.isNull(caller.proxy.contract)) {
                    throw new Error(ibas.i18n.prop("sys_invalid_parameter", "caller.proxy.contract"));
                }
                let that: this = this;
                let contract: IPaymentMethodContract = caller.proxy.contract;
                if (contract.selective === true) {
                    ibas.servicesManager.runChooseService<businesspartner.bo.ISupplierAsset>({
                        boCode: businesspartner.bo.BO_CODE_SUPPLIERASSET,
                        chooseType: ibas.emChooseType.SINGLE,
                        criteria: [
                            new ibas.Condition(businesspartner.bo.BusinessPartnerAsset.PROPERTY_BUSINESSPARTNERCODE_NAME, ibas.emConditionOperation.EQUAL, contract.businessPartnerCode),
                            new ibas.Condition(businesspartner.bo.AssetItem.PROPERTY_AMOUNTUNIT_NAME, ibas.emConditionOperation.EQUAL, contract.documentCurrency),
                        ],
                        onCompleted(selecteds: ibas.IList<businesspartner.bo.ISupplierAsset>): void {
                            let opRslt: ibas.IOperationResult<IPaymentTradingMethod> = new ibas.OperationResult<IPaymentTradingMethod>();
                            for (let item of selecteds) {
                                let trading: IPaymentTradingMethod = new PaymentTradingMethod();
                                trading.method = that;
                                trading.id = item.code;
                                trading.description = item.name;
                                trading.icon = item.picture;
                                trading.amount = item.amount;
                                trading.unit = item.unit;
                                if (ibas.strings.isEmpty(trading.icon)) {
                                    trading.icon = ibas.i18n.prop(ibas.strings.format("{0}_{1}_icon", PaymentMethod.name, that.name).toLowerCase());
                                }
                                opRslt.resultObjects.add(trading);
                            }
                            if (caller.onCompleted instanceof Function) {
                                caller.onCompleted(opRslt);
                            }
                        }
                    });
                } else {
                    let boRepository: businesspartner.bo.IBORepositoryBusinessPartner = ibas.boFactory.create(businesspartner.bo.BO_REPOSITORY_BUSINESSPARTNER);
                    boRepository.fetchSupplierAsset({
                        request: {
                            businessPartner: contract.businessPartnerCode,
                            documentType: contract.documentType,
                            documentEntry: contract.documentEntry,
                            documentLineId: contract.documentLineId,
                            total: contract.documentTotal,
                            currency: contract.documentCurrency
                        },
                        onCompleted(opRsltAsset: ibas.IOperationResult<businesspartner.bo.ISupplierAsset>): void {
                            let opRslt: ibas.IOperationResult<IPaymentTradingMethod> = new ibas.OperationResult<IPaymentTradingMethod>();
                            if (opRsltAsset.resultCode !== 0) {
                                opRslt.resultCode = -1;
                                opRslt.message = opRsltAsset.message;
                            } else {
                                for (let item of opRsltAsset.resultObjects) {
                                    let trading: IPaymentTradingMethod = new PaymentTradingMethod();
                                    trading.method = that;
                                    trading.id = item.code;
                                    trading.description = item.name;
                                    trading.icon = item.picture;
                                    trading.amount = item.amount;
                                    trading.unit = item.unit;
                                    if (ibas.strings.isEmpty(trading.icon)) {
                                        trading.icon = ibas.i18n.prop(ibas.strings.format("{0}_{1}_icon", PaymentMethod.name, that.name).toLowerCase());
                                    }
                                    opRslt.resultObjects.add(trading);
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
        /** 付款方式映射-业务伙伴资产 */
        export class PaymentMethodBPAssetMapping extends PaymentMethodServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = TRADING_ID_PAYMENT_BP_ASSSET;
                this.name = TRADING_MODE_BP_ASSSET;
                this.description = ibas.i18n.prop(ibas.strings.format("{0}_{1}", PaymentMethod.name, this.name).toLowerCase());
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract> {
                return new PaymentMethodBPAsset();
            }
        }
    }
}

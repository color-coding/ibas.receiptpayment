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
        /** 交易标记-收款-银行 */
        export const TRADING_ID_RECEIPT_BANK: string = "e81d088d-2735-4356-b0af-610d261a1019";
        /**
         * 收款方式-银行
         */
        export class ReceiptMethodBank extends ReceiptMethod {
            constructor() {
                super();
                this.id = TRADING_ID_RECEIPT_BANK;
                this.name = TRADING_MODE_BANK;
                this.description = ibas.i18n.prop(ibas.strings.format("{0}_{1}", ReceiptMethod.name, this.name).toLowerCase());
                this.enabled = !ibas.config.get(ibas.strings.format(CONFIG_ITEM_TEMPLATE_TRADING_MODE_DISABLED, this.name), false);
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
                    ibas.servicesManager.runChooseService<accounting.bo.IBankAccount>({
                        boCode: accounting.bo.BO_CODE_BANKACCOUNT,
                        chooseType: ibas.emChooseType.SINGLE,
                        criteria: [
                            new ibas.Condition(accounting.bo.BankAccount.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, ibas.emYesNo.YES),
                        ],
                        onCompleted(selecteds: ibas.IList<accounting.bo.IBankAccount>): void {
                            let opRslt: ibas.IOperationResult<IReceiptTradingMethod> = new ibas.OperationResult<IReceiptTradingMethod>();
                            for (let item of selecteds) {
                                let trading: IReceiptTradingMethod = new ReceiptTradingMethod();
                                trading.method = that;
                                trading.id = item.code;
                                trading.description = item.name;
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
                    let boRepository: accounting.bo.BORepositoryAccounting = new accounting.bo.BORepositoryAccounting();
                    boRepository.fetchBankAccount({
                        criteria: [
                            new ibas.Condition(accounting.bo.BankAccount.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, ibas.emYesNo.YES),
                        ],
                        onCompleted(opRsltAsset: ibas.IOperationResult<accounting.bo.IBankAccount>): void {
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
        /** 收款方式映射-银行 */
        export class ReceiptMethodBankMapping extends ReceiptMethodServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = TRADING_ID_RECEIPT_BANK;
                this.name = TRADING_MODE_BANK;
                this.description = ibas.i18n.prop(ibas.strings.format("{0}_{1}", ReceiptMethod.name, this.name).toLowerCase());
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract> {
                return new ReceiptMethodBank();
            }
        }
        /** 交易标记-付款-银行 */
        export const TRADING_ID_PAYMENT_BANK: string = "d92a2b64-8fd0-4e04-9384-0fbb4f6497a7";
        /**
         * 付款方式-银行
         */
        export class PaymentMethodBank extends PaymentMethod {
            constructor() {
                super();
                this.id = TRADING_ID_PAYMENT_BANK;
                this.name = TRADING_MODE_BANK;
                this.description = ibas.i18n.prop(ibas.strings.format("{0}_{1}", PaymentMethod.name, this.name).toLowerCase());
                this.enabled = !ibas.config.get(ibas.strings.format(CONFIG_ITEM_TEMPLATE_TRADING_MODE_DISABLED, this.name), false);
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
                    ibas.servicesManager.runChooseService<accounting.bo.IBankAccount>({
                        boCode: accounting.bo.BO_CODE_BANKACCOUNT,
                        chooseType: ibas.emChooseType.SINGLE,
                        criteria: [
                            new ibas.Condition(accounting.bo.BankAccount.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, ibas.emYesNo.YES),
                        ],
                        onCompleted(selecteds: ibas.IList<accounting.bo.IBankAccount>): void {
                            let opRslt: ibas.IOperationResult<IPaymentTradingMethod> = new ibas.OperationResult<IPaymentTradingMethod>();
                            for (let item of selecteds) {
                                let trading: IPaymentTradingMethod = new PaymentTradingMethod();
                                trading.method = that;
                                trading.id = item.code;
                                trading.description = item.name;
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
                    let boRepository: accounting.bo.BORepositoryAccounting = new accounting.bo.BORepositoryAccounting();
                    boRepository.fetchBankAccount({
                        criteria: [
                            new ibas.Condition(accounting.bo.BankAccount.PROPERTY_ACTIVATED_NAME, ibas.emConditionOperation.EQUAL, ibas.emYesNo.YES),
                        ],
                        onCompleted(opRsltAsset: ibas.IOperationResult<accounting.bo.IBankAccount>): void {
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
        /** 付款方式映射-银行 */
        export class PaymentMethodBankMapping extends PaymentMethodServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = TRADING_ID_PAYMENT_BANK;
                this.name = TRADING_MODE_BANK;
                this.description = ibas.i18n.prop(ibas.strings.format("{0}_{1}", ReceiptMethod.name, this.name).toLowerCase());
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract> {
                return new PaymentMethodBank();
            }
        }
    }
}

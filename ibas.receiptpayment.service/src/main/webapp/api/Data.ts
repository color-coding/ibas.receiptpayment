﻿/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace receiptpayment {
    /** 模块-标识 */
    export const CONSOLE_ID: string = "77d894db-e7f7-4fdd-910c-7835612407be";
    /** 模块-名称 */
    export const CONSOLE_NAME: string = "ReceiptPayment";
    /** 模块-版本 */
    export const CONSOLE_VERSION: string = "0.1.0";

    export namespace config {
        /** 配置项目-默认现金流（充值） */
        export const CONFIG_ITEM_DEFAULT_CASH_FLOW_RECHARGES: string = "defaultCashFlowRecharges";
        /** 配置项目-默认现金流（付款） */
        export const CONFIG_ITEM_DEFAULT_CASH_FLOW_PAYMENTS: string = "defaultCashFlowPayments";
        /** 配置项目-默认现金流（收款） */
        export const CONFIG_ITEM_DEFAULT_CASH_FLOW_RECEIPTS: string = "defaultCashFlowReceipts";
        /**
         * 获取此模块配置
         * @param key 配置项
         * @param defalut 默认值
         */
        export function get<T>(key: string, defalut?: T): T {
            return ibas.config.get(ibas.strings.format("{0}|{1}", CONSOLE_ID, key), defalut);
        }

        let CASH_FLOWS: Map<string, number>;
        /**
         * 获取默认现金流
         * @param boName 对象类型
         * @param method 支付方式
         */
        export function defaultCashFlow(boName: string, method: string): number {
            if (ibas.objects.isNull(CASH_FLOWS)) {
                CASH_FLOWS = new Map<string, number>();
                let action: (boCode: string, configValues: string) => void = (bo, values) => {
                    if (ibas.objects.isNull(values) || ibas.objects.isNull(bo)) {
                        return;
                    }
                    for (let value of values.split(";")) {
                        if (ibas.strings.isEmpty(value)) {
                            continue;
                        }
                        let tmps: string[] = value.split("=");
                        if (tmps.length !== 2) {
                            continue;
                        }
                        CASH_FLOWS.set(ibas.strings.format("cashFlow|{0}|{1}", bo, ibas.strings.trim(tmps[0])), ibas.numbers.valueOf(tmps[1]));
                    }

                };
                action(bo.Receipt.name, get(CONFIG_ITEM_DEFAULT_CASH_FLOW_RECEIPTS));
                action(bo.Payment.name, get(CONFIG_ITEM_DEFAULT_CASH_FLOW_PAYMENTS));
                action(bo.AssetRecharge.name, get(CONFIG_ITEM_DEFAULT_CASH_FLOW_RECHARGES));
            }
            let key: string = ibas.strings.format("cashFlow|{0}|{1}", boName, method);
            if (CASH_FLOWS.has(key)) {
                CASH_FLOWS.get(key);
            }
            return -1;
        }
    }
    export namespace bo {
        /** 业务仓库名称 */
        export const BO_REPOSITORY_RECEIPTPAYMENT: string = ibas.strings.format(ibas.MODULE_REPOSITORY_NAME_TEMPLATE, CONSOLE_NAME);
        /** 业务对象编码-付款 */
        export const BO_CODE_PAYMENT: string = "${Company}_RP_PAYMENT";
        /** 业务对象编码-收款 */
        export const BO_CODE_RECEIPT: string = "${Company}_RP_RECEIPT";
        /** 业务对象编码-资产充值 */
        export const BO_CODE_ASSETRECHARGE: string = "${Company}_RP_ASRECHARGE";
    }

    export namespace app {
        /** 配置项目-远程仓库的默认地址模板 */
        export const CONFIG_ITEM_TEMPLATE_TRADING_MODE_DISABLED: string = "disabledTradingMode|{0}";
        /** 收款方式契约 */
        export interface IReceiptMethodContract extends ibas.IServiceContract {
            /** 业务伙伴类型 */
            businessPartnerType: businesspartner.bo.emBusinessPartnerType;
            /** 业务伙伴编码 */
            businessPartnerCode: string;
            /** 单据类型 */
            documentType: string;
            /** 单据编号 */
            documentEntry: number;
            /** 单据行号 */
            documentLineId?: number;
            /** 单据总计 */
            documentTotal: number;
            /** 单据货币 */
            documentCurrency: string;
            /** 单据摘要 */
            documentSummary?: string;
            /** 选择的 */
            selective?: boolean;
        }
        /** 收款方式代理 */
        export class ReceiptMethodProxy extends ibas.ServiceProxy<IReceiptMethodContract> {
        }
        /** 收款方式服务映射 */
        export abstract class ReceiptMethodServiceMapping extends ibas.ServiceMapping {
            constructor() {
                super();
                this.proxy = ReceiptMethodProxy;
            }
            get category(): string {
                return this.name;
            }
            set category(value: string) {
                this.name = value;
            }
            abstract create(): ibas.IService<ibas.IServiceContract>;
        }
        /** 收款交易方式 */
        export interface IReceiptTradingMethod {
            /** 收款方式 */
            method: ReceiptMethod;
            /** 标记 */
            id: string;
            /** 描述 */
            description: string;
            /** 图标 */
            icon?: string;
            /** 可用金额 */
            amount: number;
            /** 单位 */
            unit?: string;
            /** 折扣 */
            discount?: number;
            /** 交易 */
            trade(amount: number): void | ibas.Waiter;
        }
        /** 收款方式 */
        export abstract class ReceiptMethod extends ibas.Element
            implements ibas.IService<ibas.IServiceWithResultCaller<IReceiptMethodContract, ibas.IOperationResult<IReceiptTradingMethod>>> {
            /** 启用 */
            enabled: boolean;
            /** 默认收款项目状态 */
            defaultStatus?: ibas.emDocumentStatus;
            /** 不需要进行交易 */
            noTrade?: boolean;
            /** 运行-获取可用交易方式 */
            abstract run(caller: ibas.IServiceWithResultCaller<IReceiptMethodContract, ibas.IOperationResult<IReceiptTradingMethod>>): void;
        }
        /** 付款方式契约 */
        export interface IPaymentMethodContract extends ibas.IServiceContract {
            /** 业务伙伴类型 */
            businessPartnerType: businesspartner.bo.emBusinessPartnerType;
            /** 业务伙伴编码 */
            businessPartnerCode: string;
            /** 单据类型 */
            documentType: string;
            /** 单据编号 */
            documentEntry: number;
            /** 单据行号 */
            documentLineId?: number;
            /** 单据总计 */
            documentTotal: number;
            /** 单据货币 */
            documentCurrency: string;
            /** 单据摘要 */
            documentSummary?: string;
            /** 选择的 */
            selective?: boolean;
        }
        /** 付款方式代理 */
        export class PaymentMethodProxy extends ibas.ServiceProxy<IPaymentMethodContract> {
        }
        /** 付款方式服务映射 */
        export abstract class PaymentMethodServiceMapping extends ibas.ServiceMapping {
            constructor() {
                super();
                this.proxy = PaymentMethodProxy;
            }
            get category(): string {
                return this.name;
            }
            set category(value: string) {
                this.name = value;
            }
            abstract create(): ibas.IService<ibas.IServiceContract>;
        }
        /** 付款交易方式 */
        export interface IPaymentTradingMethod {
            /** 付款方式 */
            method: PaymentMethod;
            /** 标记 */
            id: string;
            /** 描述 */
            description: string;
            /** 图标 */
            icon?: string;
            /** 可用金额 */
            amount: number;
            /** 单位 */
            unit?: string;
        }
        /** 付款方式 */
        export abstract class PaymentMethod extends ibas.Element
            implements ibas.IService<ibas.IServiceWithResultCaller<IPaymentMethodContract, ibas.IOperationResult<IPaymentTradingMethod>>> {
            /** 启用 */
            enabled: boolean;
            /** 默认付款项目状态 */
            defaultStatus?: ibas.emDocumentStatus;
            /** 不需要进行交易 */
            noTrade?: boolean;
            /** 运行-获取可用交易方式 */
            abstract run(caller: ibas.IServiceWithResultCaller<IPaymentMethodContract, ibas.IOperationResult<IPaymentTradingMethod>>): void;
        }
        /** 收款交易契约 */
        export interface IReceiptTradeContract extends ibas.IServiceContract {
            /** 收款单据 */
            document?: bo.IReceipt | number;
        }
        /** 收款交易服务代理 */
        export class ReceiptTradingServiceProxy extends ibas.ServiceProxy<IReceiptTradeContract> {

        }

        /** 单据收款 */
        export interface IDocumentReceiptContract extends ibas.IServiceContract {
            /** 收款单 */
            receipt: bo.Receipt;
        }
        /** 单据收款服务代理 */
        export class DocumentReceiptServiceProxy extends ibas.ServiceProxy<IDocumentReceiptContract> {

        }
        /** 单据付款 */
        export interface IDocumentPaymentContract extends ibas.IServiceContract {
            /** 付款单 */
            payment: bo.Payment;
        }
        /** 单据付款服务代理 */
        export class DocumentPaymentServiceProxy extends ibas.ServiceProxy<IDocumentPaymentContract> {

        }
    }
}
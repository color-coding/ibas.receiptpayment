/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace receiptpayment {
    export namespace app {
        /** 收款交易方式 */
        export class ReceiptTradingMethod implements IReceiptTradingMethod {
            /** 收款方式 */
            method: ReceiptMethod;
            /** 标记 */
            id: string;
            /** 描述 */
            description: string;
            /** 图标 */
            icon: string;
            /** 可用金额 */
            amount: number;
            /** 单位 */
            unit: string;
            /** 折扣 */
            discount: number;
            /** 交易 */
            trade(amount: number): void | ibas.Waiter {
                if (ibas.config.get(ibas.CONFIG_ITEM_DEBUG_MODE)) {
                    // 测试等待
                    return new Waiter(this.description);
                }
            }
        }
        /** 付款交易方式 */
        export class PaymentTradingMethod implements IPaymentTradingMethod {
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
        }
        export class Waiter extends ibas.Waiter {
            constructor(title: string) {
                super();
                this.title = title;
            }
            title: string;
            start(): void {
                let that: this = this;
                ibas.servicesManager.runApplicationService<IWaitTradingContract, any>({
                    proxy: new WaitTradingServiceProxy({
                        title: this.title,
                    }),
                    onCompleted(result: any): void {
                        that.fireCompleted();
                    }
                });
            }
        }
        export class BusinessPartner {
            /** 类型 */
            type: businesspartner.bo.emBusinessPartnerType;
            /** 编码 */
            code: string;
            /** 名称 */
            name: string;
        }
    }
}

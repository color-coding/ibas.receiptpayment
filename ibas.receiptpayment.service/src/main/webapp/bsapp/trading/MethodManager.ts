/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace receiptpayment {
    export namespace app {
        /** 收款方式管理员 */
        class ReceiptMethodManager implements IReceiptMethodManager {
            /** 方式列表 */
            private methods: ibas.ArrayList<IReceiptMethod>;
            /** 注册收款方式 */
            register(method: IReceiptMethod): void {
                if (ibas.objects.isNull(method)) {
                    return;
                }
                if (ibas.objects.isNull(this.methods)) {
                    this.methods = new ibas.ArrayList<IReceiptMethod>();
                }
                let exists: IReceiptMethod = this.methods.firstOrDefault(c => c.name === method.name);
                if (ibas.objects.isNull(exists)) {
                    this.methods.add(method);
                } else {
                    ibas.logger.log(ibas.emMessageLevel.WARN, "already existed, receipt method {0} - {1}", method.name, method.description);
                }
            }
            /** 获取方式 */
            getMethods(): ibas.IList<IReceiptMethod> {
                if (ibas.objects.isNull(this.methods)) {
                    this.methods = new ibas.ArrayList<IReceiptMethod>();
                }
                let methods: ibas.IList<IReceiptMethod> = new ibas.ArrayList<IReceiptMethod>();
                for (let item of this.methods) {
                    if (!item.enabled) {
                        continue;
                    }
                    methods.push(item);
                }
                return methods;
            }
        }
        /** 收款方式管理员实例 */
        export const receiptMethodManager: IReceiptMethodManager = new ReceiptMethodManager();
        /** 付款方式管理员 */
        class PaymentMethodManager implements IPaymentMethodManager {
            /** 方式列表 */
            private methods: ibas.ArrayList<IPaymentMethod>;
            /** 注册付款方式 */
            register(method: IPaymentMethod): void {
                if (ibas.objects.isNull(method)) {
                    return;
                }
                if (ibas.objects.isNull(this.methods)) {
                    this.methods = new ibas.ArrayList<IPaymentMethod>();
                }
                let exists: IPaymentMethod = this.methods.firstOrDefault(c => c.name === method.name);
                if (ibas.objects.isNull(exists)) {
                    this.methods.add(method);
                } else {
                    ibas.logger.log(ibas.emMessageLevel.WARN, "already existed, payment method {0} - {1}", method.name, method.description);
                }
            }
            /** 获取方式 */
            getMethods(): ibas.IList<IPaymentMethod> {
                if (ibas.objects.isNull(this.methods)) {
                    this.methods = new ibas.ArrayList<IPaymentMethod>();
                }
                let methods: ibas.IList<IPaymentMethod> = new ibas.ArrayList<IPaymentMethod>();
                for (let item of this.methods) {
                    if (!item.enabled) {
                        continue;
                    }
                    methods.push(item);
                }
                return methods;
            }
        }
        /** 付款方式管理员实例 */
        export const paymentMethodManager: IPaymentMethodManager = new PaymentMethodManager();
        /** 收款交易方式 */
        export class ReceiptTradingMethod implements IReceiptTradingMethod {
            /** 收款方式 */
            method: IReceiptMethod;
            /** 标记 */
            id: string;
            /** 描述 */
            description: string;
            /** 图标 */
            icon?: string;
            /** 可用金额 */
            amount: number;
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
        /** 付款交易方式 */
        export class PaymentTradingMethod implements IPaymentTradingMethod {
            /** 付款方式 */
            method: IPaymentMethod;
            /** 标记 */
            id: string;
            /** 描述 */
            description: string;
            /** 图标 */
            icon?: string;
            /** 可用金额 */
            amount: number;
        }
    }
}

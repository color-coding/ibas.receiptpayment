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
        class ReceiptMethodManager implements trading.IReceiptMethodManager {
            /** 方式列表 */
            private methods: ibas.ArrayList<trading.IReceiptMethod>;
            /** 注册收款方式 */
            register(method: trading.IReceiptMethod): void {
                if (ibas.objects.isNull(method)) {
                    return;
                }
                if (ibas.objects.isNull(this.methods)) {
                    this.methods = new ibas.ArrayList<trading.IReceiptMethod>();
                }
                let exists: trading.IReceiptMethod = this.methods.firstOrDefault(c => c.name === method.name);
                if (ibas.objects.isNull(exists)) {
                    this.methods.add(method);
                } else {
                    ibas.logger.log(ibas.emMessageLevel.WARN, "already existed, receipt method {0} - {1}", method.name, method.description);
                }
            }
            /** 获取方式 */
            getMethods(): trading.IReceiptMethod[] {
                if (ibas.objects.isNull(this.methods)) {
                    this.methods = new ibas.ArrayList<trading.IReceiptMethod>();
                }
                return this.methods;
            }
        }
        /** 收款方式管理员实例 */
        export const receiptMethodManager: trading.IReceiptMethodManager = new ReceiptMethodManager();
        /** 付款方式管理员 */
        class PaymentMethodManager implements trading.IPaymentMethodManager {
            /** 方式列表 */
            private methods: ibas.ArrayList<trading.IPaymentMethod>;
            /** 注册付款方式 */
            register(method: trading.IPaymentMethod): void {
                if (ibas.objects.isNull(method)) {
                    return;
                }
                if (ibas.objects.isNull(this.methods)) {
                    this.methods = new ibas.ArrayList<trading.IPaymentMethod>();
                }
                let exists: trading.IPaymentMethod = this.methods.firstOrDefault(c => c.name === method.name);
                if (ibas.objects.isNull(exists)) {
                    this.methods.add(method);
                } else {
                    ibas.logger.log(ibas.emMessageLevel.WARN, "already existed, payment method {0} - {1}", method.name, method.description);
                }
            }
            /** 获取方式 */
            getMethods(): trading.IPaymentMethod[] {
                if (ibas.objects.isNull(this.methods)) {
                    this.methods = new ibas.ArrayList<trading.IPaymentMethod>();
                }
                return this.methods;
            }
        }
        /** 付款方式管理员实例 */
        export const paymentMethodManager: trading.IPaymentMethodManager = new PaymentMethodManager();
        /** 收款交易方式 */
        export class ReceiptTradingMethod implements trading.IReceiptTradingMethod {
            /** 组 */
            mode: trading.IReceiptMethod;
            /** 标记 */
            id: string;
            /** 描述 */
            description: string;
            /** 图标 */
            icon?: string;
        }
        /** 付款交易方式 */
        export class PaymentTradingMethod implements trading.IPaymentTradingMethod {
            /** 组 */
            mode: trading.IPaymentMethod;
            /** 标记 */
            id: string;
            /** 描述 */
            description: string;
            /** 图标 */
            icon?: string;
        }
    }
}

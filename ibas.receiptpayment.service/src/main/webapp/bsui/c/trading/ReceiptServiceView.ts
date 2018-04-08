/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace receiptpayment {
    export namespace ui {
        export namespace c {
            /**
             * 服务视图-收款
             */
            export class ReceiptServiceView extends ibas.BODialogView implements app.IReceiptServiceView {
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    return new sap.m.Dialog("", {
                        title: this.title,
                        type: sap.m.DialogType.Standard,
                        state: sap.ui.core.ValueState.None,
                        stretchOnPhone: true,
                        horizontalScrolling: true,
                        verticalScrolling: true,
                        content: [

                        ],
                        buttons: [
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_exit"),
                                type: sap.m.ButtonType.Transparent,
                                // icon: "sap-icon://inspect-down",
                                press: function (): void {
                                    that.fireViewEvents(that.closeEvent);
                                }
                            }),
                        ]
                    });
                }
                private page: sap.m.Page;

                /** 显示业务伙伴 */
                showBusinessPartner(data: app.BusinessPartner): void { }
                /** 显示收款目标 */
                showTarget(target: app.ReceiptTarget): void { }
                /** 显示收款方式 */
                showMethods(methods: app.trading.IReceiptMethod[]): void { }
                /** 显示收款交易方式 */
                showTradingMethods(methods: app.trading.ITradingMethod[]): void { }
                /** 显示收款交易 */
                showReceiptTradings(methods: app.ReceiptTrading[]): void { }
            }
        }
    }
}
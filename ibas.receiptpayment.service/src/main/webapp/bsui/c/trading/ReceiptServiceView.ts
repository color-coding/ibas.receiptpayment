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
                /** 移出收款交易 */
                removeReceiptTradingEvent: Function;
                /** 使用收款交易 */
                applyReceiptTradingEvent: Function;
                /** 确定 */
                confirmEvent: Function;
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.bp_bar = new sap.m.Toolbar("", {
                        content: [
                            new sap.m.Label("", {
                                width: "auto",
                            }).bindProperty("text", {
                                path: "type",
                                formatter(data: any): any {
                                    return ibas.enums.describe(businesspartner.bo.emBusinessPartnerType, data);
                                }
                            }),
                            new sap.m.ToolbarSeparator(""),
                            new sap.m.Label("", {
                                width: "auto",
                            }).bindProperty("text", {
                                path: "code",
                            }),
                            new sap.m.Label("", {
                                width: "5px",
                                text: "-",
                            }),
                            new sap.m.Label("", {
                                width: "auto",
                            }).bindProperty("text", {
                                path: "name",
                            }),
                        ]
                    });
                    this.target_bar = new sap.m.Toolbar("", {
                        content: [
                            new sap.m.Label("", {
                                width: "auto",
                            }).bindProperty("text", {
                                path: "documentType",
                                formatter(data: any): any {
                                    return data;
                                }
                            }),
                            new sap.m.Label("", {
                                width: "5px",
                                text: "-",
                            }),
                            new sap.m.Label("", {
                                width: "auto",
                                textAlign: sap.ui.core.TextAlign.Right,
                            }).bindProperty("text", {
                                path: "documentEntry",
                            }),
                            new sap.m.Label("", {
                                width: "5px",
                                text: "-",
                            }),
                            new sap.m.Label("", {
                                width: "auto",
                                textAlign: sap.ui.core.TextAlign.Right,
                            }).bindProperty("text", {
                                path: "documentLineId",
                            }),
                            new sap.m.ToolbarSpacer(""),
                            new sap.m.ToolbarSeparator(""),
                            new sap.m.Label("", {
                                width: "auto",
                                textAlign: sap.ui.core.TextAlign.Right,
                            }).bindProperty("text", {
                                path: "total",
                            }),
                            new sap.m.Label("", {
                                width: "auto",
                                textAlign: sap.ui.core.TextAlign.Left,
                            }).bindProperty("text", {
                                path: "currency",
                            }),
                        ]
                    });
                    this.menthod_box = new sap.m.VBox("", {
                    });
                    this.trading_box = new sap.m.VBox("", {
                    });
                    this.paid_input = new sap.m.Input("", {
                        width: "auto",
                        textAlign: sap.ui.core.TextAlign.Right,
                    });
                    this.paid_bar = new sap.m.Toolbar("", {
                        content: [
                            new sap.m.ToolbarSpacer(""),
                            new sap.m.Label("", {
                                width: "auto",
                                textAlign: sap.ui.core.TextAlign.Left,
                                text: ibas.i18n.prop("receiptpayment_payment")
                            }),
                            this.paid_input,
                            new sap.m.ToolbarSeparator(""),
                            new sap.m.Button("", {
                                icon: "sap-icon://accept",
                                type: sap.m.ButtonType.Transparent,
                                press(oControlEvent: sap.ui.base.Event): void {
                                    for (let bar of that.menthod_bars.values()) {
                                        let contents: sap.ui.core.Control[] = bar.getContent();
                                        for (let index: number = 0; index < contents.length; index++) {
                                            let item: sap.ui.core.Control = contents[index];
                                            if (item instanceof sap.m.ToggleButton) {
                                                if (item.getPressed()) {
                                                    let model: any = item.getModel();
                                                    that.fireViewEvents(that.applyReceiptTradingEvent, model.getData(), parseFloat(that.paid_input.getValue()));
                                                    return;
                                                }
                                            }
                                        }
                                    }
                                }
                            }),
                        ]
                    });
                    return new sap.m.Dialog("", {
                        title: this.title,
                        type: sap.m.DialogType.Standard,
                        state: sap.ui.core.ValueState.None,
                        stretchOnPhone: true,
                        horizontalScrolling: true,
                        verticalScrolling: true,
                        contentWidth: "60%",
                        content: [
                            new sap.m.VBox("", {
                                items: [
                                    this.bp_bar,
                                    this.target_bar,
                                    new sap.m.Toolbar("", {
                                        content: [
                                            new sap.m.Label("", {
                                                text: ibas.i18n.prop("receiptpaymentt_please_choose_paid_method"),
                                            })
                                        ]
                                    }),
                                    this.menthod_box,
                                    this.trading_box,
                                    this.paid_bar,
                                ]
                            })
                        ],
                        buttons: [
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_confirm"),
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    that.fireViewEvents(that.confirmEvent);
                                }
                            }),
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_exit"),
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    that.fireViewEvents(that.closeEvent);
                                }
                            }),
                        ]
                    });
                }
                private page: sap.m.Page;
                private bp_bar: sap.m.Toolbar;
                private target_bar: sap.m.Toolbar;
                private paid_bar: sap.m.Toolbar;
                private paid_input: sap.m.Input;
                private menthod_bars: Map<String, sap.m.Toolbar>;
                private menthod_box: sap.m.VBox;
                private trading_box: sap.m.VBox;
                /** 显示业务伙伴 */
                showBusinessPartner(data: app.BusinessPartner): void {
                    this.bp_bar.setModel(new sap.ui.model.json.JSONModel(data));
                    this.bp_bar.bindObject("/");
                }
                /** 显示收款目标 */
                showTarget(data: app.ReceiptTarget): void {
                    this.target_bar.setModel(new sap.ui.model.json.JSONModel(data));
                    this.target_bar.bindObject("/");
                }
                /** 显示收款方式 */
                showMethods(methods: app.trading.IReceiptMethod[]): void {
                    if (ibas.objects.isNull(this.menthod_bars)) {
                        this.menthod_bars = new Map<String, sap.m.Toolbar>();
                    }
                    for (let item of methods) {
                        let bar: sap.m.Toolbar = new sap.m.Toolbar("", {
                            content: [
                                new sap.m.Label("", {
                                    width: "auto",
                                    text: item.description
                                }),
                                new sap.m.ToolbarSeparator(""),
                            ]
                        });
                        this.menthod_bars.set(item.name, bar);
                        this.menthod_box.addItem(bar);
                    }
                }
                /** 显示收款交易方式 */
                showTradingMethods(methods: app.trading.IReceiptTradingMethod[]): void {
                    if (ibas.objects.isNull(this.menthod_bars)) {
                        return;
                    }
                    let that: this = this;
                    let index: number = 2;
                    for (let item of methods) {
                        let bar: sap.m.Toolbar = this.menthod_bars.get(item.mode.name);
                        if (ibas.objects.isNull(bar)) {
                            continue;
                        }
                        let button: sap.m.ToggleButton = new sap.m.ToggleButton("", {
                            text: item.description,
                            icon: item.icon,
                            type: sap.m.ButtonType.Transparent,
                            press(oControlEvent: sap.ui.base.Event): void {
                                for (let item of that.menthod_bars.values()) {
                                    let contents: sap.ui.core.Control[] = item.getContent();
                                    for (let index: number = 2; index < contents.length; index++) {
                                        let item: sap.ui.core.Control = contents[index];
                                        if (item !== oControlEvent.getSource()) {
                                            if (item instanceof sap.m.ToggleButton) {
                                                item.setPressed(false);
                                            }
                                        }
                                    }
                                }
                            }
                        });
                        button.setModel(new sap.ui.model.json.JSONModel(item));
                        bar.insertContent(button, index);
                        index++;
                    }
                }
                /** 显示收款交易 */
                showReceiptTradings(tradings: app.ReceiptTrading[]): void {
                    this.trading_box.destroyItems();
                    let that: this = this;
                    this.trading_box.addItem(new sap.m.Toolbar("", {
                        content: [
                            new sap.m.Label("", {
                                text: ibas.i18n.prop("receiptpaymentt_choosed_paid_method"),
                            })
                        ]
                    }));
                    for (let item of tradings) {
                        let bar: sap.m.Toolbar = new sap.m.Toolbar("", {
                            content: [
                                new sap.m.Label("", {
                                    width: "100%",
                                    text: item.method.description,
                                    textAlign: sap.ui.core.TextAlign.Right,
                                }),
                                new sap.m.Label("", {
                                    width: "80px",
                                    textAlign: sap.ui.core.TextAlign.Right,
                                    text: item.amount,
                                }),
                                new sap.m.ToolbarSeparator(""),
                                new sap.m.Button("", {
                                    icon: "sap-icon://decline",
                                    type: sap.m.ButtonType.Transparent,
                                    press(oControlEvent: sap.ui.base.Event): void {
                                        that.fireViewEvents(that.removeReceiptTradingEvent, item);
                                    }
                                })
                            ]
                        });
                        this.trading_box.addItem(bar);
                    }
                }
            }
        }
    }
}
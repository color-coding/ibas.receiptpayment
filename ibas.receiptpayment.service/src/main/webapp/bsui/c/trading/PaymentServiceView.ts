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
             * 服务视图-付款
             */
            export class PaymentServiceView extends ibas.DialogView implements app.IPaymentServiceView {
                /** 移出付款交易 */
                removePaymentTradingEvent: Function;
                /** 使用付款交易 */
                applyPaymentTradingEvent: Function;
                /** 确定 */
                confirmEvent: Function;
                /** 绘制视图 */
                draw(): any {
                    jQuery.sap.require("sap.ui.layout.cssgrid.GridBasicLayout");
                    let that: this = this;
                    this.bp_bar = new sap.m.Toolbar("", {
                        content: [
                            new sap.m.Label("", {
                                width: "auto",
                            }).bindProperty("text", {
                                path: "/type",
                                formatter(data: any): any {
                                    return ibas.enums.describe(businesspartner.bo.emBusinessPartnerType, data);
                                }
                            }).addStyleClass("sapUiTinyMarginBegin"),
                            new sap.m.ToolbarSeparator(""),
                            new sap.m.Label("", {
                                width: "auto",
                            }).bindProperty("text", {
                                parts: [
                                    {
                                        path: "/code",
                                    },
                                    {
                                        path: "/name",
                                    }
                                ],
                                formatter(code: string, name: string): string {
                                    return ibas.strings.format("{0} - {1}", code, name);
                                }
                            }).addStyleClass("sapUiTinyMarginEnd"),
                        ]
                    });
                    this.target_bar = new sap.m.Toolbar("", {
                        content: [
                            new sap.m.Label("", {
                                width: "auto",
                            }).bindProperty("text", {
                                path: "/documentType",
                                formatter(data: any): any {
                                    try {
                                        let name: string = ibas.objects.nameOf(ibas.boFactory.classOf(data));
                                        let description: string = ibas.i18n.prop(ibas.strings.format("bo_{0}", name).toLowerCase());
                                        if (!description.startsWith("[") && !description.endsWith("]")) {
                                            return description;
                                        }
                                    } catch (error) {
                                    }
                                    return data;
                                }
                            }).addStyleClass("sapUiTinyMarginBegin"),
                            new sap.m.Label("", {
                                width: "5px",
                                text: "-",
                            }),
                            new sap.m.Label("", {
                                width: "auto",
                                textAlign: sap.ui.core.TextAlign.Left,
                            }).bindProperty("text", {
                                parts: [
                                    {
                                        path: "/documentEntry",
                                    },
                                    {
                                        path: "/documentLineId",
                                    }
                                ],
                                formatter(entry: number, lineId: number): string {
                                    let builder: ibas.StringBuilder = new ibas.StringBuilder();
                                    builder.map(undefined, "");
                                    builder.map(null, "");
                                    builder.append(entry);
                                    if (lineId > 0) {
                                        builder.append(" - ");
                                        builder.append(lineId);
                                    }
                                    return builder.toString();
                                }
                            }),
                            new sap.m.ToolbarSeparator(""),
                            new sap.m.Label("", {
                                width: "auto",
                                textAlign: sap.ui.core.TextAlign.Right,
                            }).bindProperty("text", {
                                path: "/documentSummary",
                            }),
                            new sap.m.ToolbarSpacer(""),
                            new sap.m.ToolbarSeparator(""),
                            new sap.m.ObjectNumber("", {
                                number: {
                                    path: "/total",
                                    type: new sap.extension.data.Sum(),
                                },
                                numberUnit: {
                                    path: "/currency",
                                    type: new sap.extension.data.Alphanumeric(),
                                },
                            }).addStyleClass("sapUiTinyMarginEnd"),
                        ]
                    });
                    return new sap.m.Dialog("", {
                        title: this.title,
                        type: sap.m.DialogType.Standard,
                        state: sap.ui.core.ValueState.None,
                        stretch: ibas.config.get(ibas.CONFIG_ITEM_PLANTFORM) === ibas.emPlantform.PHONE ? true : false,
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
                                                showColon: true,
                                                text: ibas.i18n.prop("receiptpaymentt_choosable_paid_method"),
                                            }).addStyleClass("sapUiTinyMarginBegin"),
                                            new sap.m.ToolbarSpacer(),
                                            new sap.m.Label("", {
                                                showColon: true,
                                                text: ibas.i18n.prop("bo_receipt_ordertype"),
                                            }),
                                            this.type_select = new sap.extension.m.PropertySelect("", {
                                                dataInfo: {
                                                    code: bo.Payment.BUSINESS_OBJECT_CODE,
                                                },
                                                propertyName: "orderType",
                                                width: "8rem",
                                            }).bindProperty("bindingValue", {
                                                path: "orderType",
                                                type: new sap.extension.data.Alphanumeric({
                                                    maxLength: 8
                                                })
                                            }).addStyleClass("sapUiSmallMarginBegin"),
                                        ]
                                    }),
                                    this.menthod_box = new sap.extension.f.GridList("", {
                                        growingThreshold: ibas.config.get(ibas.CONFIG_ITEM_CRITERIA_RESULT_COUNT, 30),
                                        growingScrollToLoad: true,
                                        mode: sap.m.ListMode.None,
                                        showNoData: false,
                                        customLayout: new sap.ui.layout.cssgrid.GridBasicLayout("", {
                                            gridTemplateColumns: "repeat(auto-fill, minmax(6rem,6rem))",
                                            gridGap: "0.5rem 0.5rem",
                                        }),
                                    }).addStyleClass("sapUiContentPadding"),
                                    this.trading_box = new sap.m.VBox("", {
                                    }),
                                    new sap.m.Toolbar("", {
                                        content: [
                                            new sap.m.ToolbarSpacer(""),
                                            new sap.m.Label("", {
                                                width: "auto",
                                                showColon: true,
                                                textAlign: sap.ui.core.TextAlign.Left,
                                                text: ibas.i18n.prop("receiptpayment_paid")
                                            }),
                                            this.paid_input = new sap.m.Input("", {
                                                width: "12rem",
                                                textAlign: sap.ui.core.TextAlign.Right,
                                                placeholder: ibas.i18n.prop("receiptpaymentt_please_input_paid_amount"),
                                            }),
                                            new sap.m.ToolbarSeparator(""),
                                            this.applyButton = new sap.m.Button("", {
                                                icon: "sap-icon://accept",
                                                type: sap.m.ButtonType.Transparent,
                                                press(oControlEvent: sap.ui.base.Event): void {
                                                    for (let item of that.menthod_box.getItems()) {
                                                        if (item instanceof sap.f.GridListItem) {
                                                            for (let sItem of item.getContent()) {
                                                                if (sItem instanceof sap.m.RadioButton) {
                                                                    if (sItem.getSelected()) {
                                                                        let model: any = item.getModel();
                                                                        that.fireViewEvents(that.applyPaymentTradingEvent, model.getData(), ibas.numbers.valueOf(that.paid_input.getValue()));
                                                                        return;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                    // 错误参数调用，用于提示
                                                    that.fireViewEvents(that.applyPaymentTradingEvent);
                                                }
                                            }).addStyleClass("sapUiTinyMarginEnd"),
                                        ]
                                    })
                                ]
                            })
                        ],
                        buttons: [
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_confirm"),
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    that.fireViewEvents(that.confirmEvent, that.type_select.getSelectedKey());
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
                    }).addStyleClass("sapUiNoContentPadding");
                }
                private bp_bar: sap.m.Toolbar;
                private target_bar: sap.m.Toolbar;
                private paid_input: sap.m.Input;
                private menthod_box: sap.extension.f.GridList;
                private trading_box: sap.m.VBox;
                private type_select: sap.m.Select;
                private applyButton: sap.m.Button;
                /** 显示业务伙伴 */
                showBusinessPartner(data: app.BusinessPartner): void {
                    this.bp_bar.setModel(new sap.ui.model.json.JSONModel(data));
                }
                /** 显示付款目标 */
                showTarget(data: app.PaymentTarget): void {
                    this.target_bar.setModel(new sap.ui.model.json.JSONModel(data));
                }
                /** 显示付款交易方式 */
                showTradingMethods(methods: app.IPaymentTradingMethod[]): void {
                    let that: this = this;
                    for (let item of methods) {
                        this.menthod_box.addItem(new sap.f.GridListItem("", {
                            type: sap.m.ListType.Active,
                            content: [
                                new sap.m.VBox("", {
                                    alignItems: sap.m.FlexAlignItems.Center,
                                    items: [
                                        new sap.m.Avatar("", {
                                            src: {
                                                path: "/icon"
                                            },
                                            customDisplaySize: "6rem",
                                            backgroundColor: sap.m.AvatarColor.Random,
                                            displayShape: sap.m.AvatarShape.Square,
                                            showBorder: false,
                                        }),
                                    ]
                                }).addStyleClass("sapUiTinyMarginTop"),
                                new sap.m.RadioButton("", {
                                    width: "auto",
                                    groupName: that.id,
                                    text: {
                                        path: "/description"
                                    },
                                    select(event: sap.ui.base.Event): void {
                                        let source: any = event.getSource();
                                        if (source instanceof sap.m.RadioButton) {
                                            if (event.getParameter("selected") === true) {
                                                setTimeout(() => {
                                                    let amount: number = ibas.numbers.valueOf(that.paid_input.getValue());
                                                    if (amount > 0) {
                                                        (<any>that.applyButton).firePress({});
                                                    }
                                                }, 100);
                                            }
                                        }
                                    }
                                })
                            ],
                            press(event: sap.ui.base.Event): void {
                                let source: any = event.getSource();
                                if (source instanceof sap.f.GridListItem) {
                                    for (let item of source.getContent()) {
                                        if (item instanceof sap.m.RadioButton) {
                                            if (item.getSelected() === false) {
                                                (<any>item).ontap();
                                            }
                                        }
                                    }
                                }
                            },
                            tooltip: {
                                parts: [
                                    {
                                        path: "/description"
                                    },
                                    {
                                        path: "/amount"
                                    },
                                    {
                                        path: "/unit"
                                    }
                                ],
                                formatter(description: string, amount: number, unit: string): string {
                                    let builder: ibas.StringBuilder = new ibas.StringBuilder();
                                    builder.map(undefined, "");
                                    builder.map(null, "");
                                    builder.append(description);
                                    if (amount >= 0) {
                                        builder.append("\n");
                                        builder.append(ibas.i18n.prop("receiptmethod_available_amount"));
                                        builder.append(sap.extension.data.formatValue(sap.extension.data.Sum, amount, "string"));
                                        if (!ibas.strings.isEmpty(unit)) {
                                            builder.append(" ");
                                            builder.append(unit);
                                        }
                                    }
                                    return builder.toString();
                                }
                            },
                        }).setModel(new sap.extension.model.JSONModel(item)));
                    }
                }
                /** 显示付款交易 */
                showPaymentTradings(tradings: app.PaymentTrading[], paid: number): void {
                    this.paid_input.setValue(sap.extension.data.formatValue(sap.extension.data.Sum, paid, "string"));
                    this.trading_box.destroyItems();
                    if (tradings.length === 0) {
                        return;
                    }
                    this.trading_box.addItem(new sap.m.Toolbar("", {
                        content: [
                            new sap.m.Label("", {
                                showColon: true,
                                text: ibas.i18n.prop("receiptpaymentt_choosed_paid_method"),
                            }).addStyleClass("sapUiTinyMarginBegin"),
                        ]
                    }));
                    let that: this = this;
                    for (let item of tradings) {
                        let bar: sap.m.Toolbar = new sap.m.Toolbar("", {
                            content: [
                                new sap.m.ToolbarSpacer(""),
                                new sap.m.Label("", {
                                    width: "auto",
                                    showColon: true,
                                    text: item.trading.description,
                                    textAlign: sap.ui.core.TextAlign.Right,
                                }).addStyleClass("sapUiTinyMarginEnd"),
                                new sap.m.Text("", {
                                    width: "auto",
                                    textAlign: sap.ui.core.TextAlign.Right,
                                }).setText(sap.extension.data.formatValue(sap.extension.data.Sum, item.amount, "string")),
                                new sap.m.ToolbarSeparator(""),
                                new sap.m.Button("", {
                                    icon: "sap-icon://decline",
                                    type: sap.m.ButtonType.Transparent,
                                    press(oControlEvent: sap.ui.base.Event): void {
                                        that.fireViewEvents(that.removePaymentTradingEvent, item);
                                    }
                                }).addStyleClass("sapUiTinyMarginEnd"),
                            ]
                        });
                        this.trading_box.addItem(bar);
                    }
                }
            }
        }
    }
}
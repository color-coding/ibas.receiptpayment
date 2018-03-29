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
             * 编辑视图-付款
             */
            export class PaymentEditView extends ibas.BOEditView implements app.IPaymentEditView {
                /** 删除数据事件 */
                deleteDataEvent: Function;
                /** 新建数据事件，参数1：是否克隆 */
                createDataEvent: Function;
                /** 添加付款-项目事件 */
                addPaymentItemEvent: Function;
                /** 删除付款-项目事件 */
                removePaymentItemEvent: Function;
                /** 选择付款客户事件 */
                choosePaymentBusinessPartnerEvent: Function;
                /** 选择付款项目-采购订单 */
                choosePaymentItemPurchaseOrderEvent: Function;
                /** 选择付款项目-采购收货 */
                choosePaymentItemPurchaseDeliveryEvent: Function;
                /** 选择付款项目-销售退货 */
                choosePaymentItemSalesReturnEvent: Function;

                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    let formTop: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("receiptpayment_title_general") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_payment_businesspartnertype") }),
                            new sap.m.Select("", {
                                items: openui5.utils.createComboBoxItems(businesspartner.bo.emBusinessPartnerType),
                            }).bindProperty("selectedKey", {
                                path: "businessPartnerType",
                                type: "sap.ui.model.type.Integer",
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_payment_businesspartnercode") }),
                            new sap.m.Input("", {
                                showValueHelp: true,
                                valueHelpRequest: function (): void {
                                    that.fireViewEvents(that.choosePaymentBusinessPartnerEvent);
                                }
                            }).bindProperty("value", {
                                path: "businessPartnerCode",
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_payment_businesspartnername") }),
                            new sap.m.Input("", {
                                editable: false,
                            }).bindProperty("value", {
                                path: "businessPartnerName",
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_payment_contactperson") }),
                            new sap.m.ex.BOChooseInput("", {
                                boText: "name",
                                boKey: "objectKey",
                                boCode: ibas.config.applyVariables(businesspartner.bo.BO_CODE_CONTACTPERSON),
                                repositoryName: businesspartner.bo.BO_REPOSITORY_BUSINESSPARTNER,
                                criteria: businesspartner.app.conditions.contactperson.create(<any>"{businessPartnerType}", "{businessPartnerCode}"),
                                bindingValue: {
                                    path: "contactPerson"
                                }
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_payment_reference1") }),
                            new sap.m.Input("", {
                            }).bindProperty("value", {
                                path: "reference1",
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_payment_reference2") }),
                            new sap.m.Input("", {
                            }).bindProperty("value", {
                                path: "reference2",
                            }),
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("receiptpayment_title_status") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_payment_documentstatus") }),
                            new sap.m.Select("", {
                                items: openui5.utils.createComboBoxItems(ibas.emDocumentStatus),
                            }).bindProperty("selectedKey", {
                                path: "documentStatus",
                                type: "sap.ui.model.type.Integer",
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_payment_canceled") }),
                            new sap.m.Select("", {
                                items: openui5.utils.createComboBoxItems(ibas.emYesNo),
                            }).bindProperty("selectedKey", {
                                path: "canceled",
                                type: "sap.ui.model.type.Integer",
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_payment_documentdate") }),
                            new sap.m.DatePicker("", {
                                valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                                displayFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                            }).bindProperty("dateValue", {
                                path: "documentDate",
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_payment_dataowner") }),
                            new sap.m.ex.DataOwnerInput("", {
                                bindingValue: {
                                    path: "dataOwner"
                                }
                            }),
                        ]
                    });
                    this.tablePaymentItem = new sap.ui.table.Table("", {
                        toolbar: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.MenuButton("", {
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://add",
                                    text: ibas.i18n.prop("shell_data_add"),
                                    menu: new sap.m.Menu("", {
                                        items: [
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("shell_data_add_line"),
                                                press: function (): void {
                                                    that.fireViewEvents(that.addPaymentItemEvent);
                                                }
                                            }),
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("receiptpayment_purchase_order"),
                                                press: function (): void {
                                                    that.fireViewEvents(that.choosePaymentItemPurchaseOrderEvent);
                                                }
                                            }),
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("receiptpayment_purchase_delivery"),
                                                press: function (): void {
                                                    that.fireViewEvents(that.choosePaymentItemPurchaseDeliveryEvent);
                                                }
                                            }),
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("receiptpayment_sales_return"),
                                                press: function (): void {
                                                    that.fireViewEvents(that.choosePaymentItemSalesReturnEvent);
                                                }
                                            }),
                                        ]
                                    })
                                }),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_remove"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://less",
                                    press: function (): void {
                                        that.fireViewEvents(that.removePaymentItemEvent,
                                            // 获取表格选中的对象
                                            openui5.utils.getSelecteds<bo.PaymentItem>(that.tablePaymentItem)
                                        );
                                    }
                                }),
                            ]
                        }),
                        enableSelectAll: false,
                        selectionBehavior: sap.ui.table.SelectionBehavior.Row,
                        visibleRowCount: ibas.config.get(openui5.utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, 8),
                        rows: "{/rows}",
                        columns: [
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_paymentitem_lineid"),
                                template: new sap.m.Text("", {
                                    wrapping: false,
                                }).bindProperty("text", {
                                    path: "lineId",
                                }),
                            }),
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_paymentitem_linestatus"),
                                template: new sap.m.Select("", {
                                    width: "100%",
                                    items: openui5.utils.createComboBoxItems(ibas.emDocumentStatus),
                                }).bindProperty("selectedKey", {
                                    path: "lineStatus",
                                    type: "sap.ui.model.type.Integer",
                                })
                            }),
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_paymentitem_basedocumenttype"),
                                template: new sap.m.Text("", {
                                    wrapping: false,
                                }).bindProperty("text", {
                                    path: "baseDocumentType",
                                }),
                            }),
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_paymentitem_basedocumententry"),
                                template: new sap.m.Text("", {
                                    wrapping: false,
                                }).bindProperty("text", {
                                    path: "baseDocumentEntry",
                                }),
                            }),
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_paymentitem_basedocumentlineid"),
                                template: new sap.m.Text("", {
                                    wrapping: false,
                                }).bindProperty("text", {
                                    path: "baseDocumentLineId",
                                }),
                            }),
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_paymentitem_mode"),
                                template: new sap.m.Input("", {
                                    width: "100%",
                                    showValueHelp: true,
                                }).bindProperty("value", {
                                    path: "mode"
                                })
                            }),
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_paymentitem_amount"),
                                template: new sap.m.Input("", {
                                    width: "100%",
                                }).bindProperty("value", {
                                    path: "amount"
                                })
                            }),
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_paymentitem_currency"),
                                template: new sap.m.Text("", {
                                    wrapping: false,
                                }).bindProperty("text", {
                                    path: "currency"
                                })
                            }),
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_paymentitem_tradeid"),
                                template: new sap.m.Input("", {
                                    width: "100%",
                                }).bindProperty("value", {
                                    path: "tradeId"
                                })
                            }),
                        ]
                    });
                    let formMiddle: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("bo_paymentitem") }),
                            this.tablePaymentItem,
                        ]
                    });
                    let formBottom: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("receiptpayment_title_remarks") }),
                            new sap.m.TextArea("", {
                                rows: 5,
                            }).bindProperty("value", {
                                path: "remarks",
                            }),
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("receiptpayment_title_total") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_payment_documenttotal") }),
                            new sap.m.Input("", {
                                editable: false,
                            }).bindProperty("value", {
                                path: "documentTotal",
                            }),
                            new sap.m.Input("", {
                                editable: false,
                            }).bindProperty("value", {
                                path: "documentCurrency",
                            }),
                        ],
                    });
                    this.layoutMain = new sap.ui.layout.VerticalLayout("", {
                        content: [
                            formTop,
                            formMiddle,
                            formBottom,
                        ],
                    });
                    this.page = new sap.m.Page("", {
                        showHeader: false,
                        subHeader: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_save"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://save",
                                    press: function (): void {
                                        that.fireViewEvents(that.saveDataEvent);
                                    }
                                }),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_delete"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://delete",
                                    press: function (): void {
                                        that.fireViewEvents(that.deleteDataEvent);
                                    }
                                }),
                                new sap.m.ToolbarSeparator(""),
                                new sap.m.MenuButton("", {
                                    text: ibas.strings.format("{0}/{1}",
                                        ibas.i18n.prop("shell_data_new"), ibas.i18n.prop("shell_data_clone")),
                                    icon: "sap-icon://create",
                                    type: sap.m.ButtonType.Transparent,
                                    menu: new sap.m.Menu("", {
                                        items: [
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("shell_data_new"),
                                                icon: "sap-icon://create",
                                                press: function (): void {
                                                    // 创建新的对象
                                                    that.fireViewEvents(that.createDataEvent, false);
                                                }
                                            }),
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("shell_data_clone"),
                                                icon: "sap-icon://copy",
                                                press: function (): void {
                                                    // 复制当前对象
                                                    that.fireViewEvents(that.createDataEvent, true);
                                                }
                                            }),
                                        ],
                                    })
                                }),
                            ]
                        }),
                        content: [this.layoutMain]
                    });
                    return this.page;
                }
                private page: sap.m.Page;
                private layoutMain: sap.ui.layout.VerticalLayout;
                /** 改变视图状态 */
                private changeViewStatus(data: bo.Payment): void {
                    if (ibas.objects.isNull(data)) {
                        return;
                    }
                    // 新建时：禁用删除，
                    if (data.isNew) {
                        if (this.page.getSubHeader() instanceof sap.m.Toolbar) {
                            openui5.utils.changeToolbarDeletable(<sap.m.Toolbar>this.page.getSubHeader(), false);
                        }
                    }
                    // 不可编辑：已批准，
                    if (data.approvalStatus === ibas.emApprovalStatus.APPROVED) {
                        if (this.page.getSubHeader() instanceof sap.m.Toolbar) {
                            openui5.utils.changeToolbarSavable(<sap.m.Toolbar>this.page.getSubHeader(), false);
                            openui5.utils.changeToolbarDeletable(<sap.m.Toolbar>this.page.getSubHeader(), false);
                        }
                        openui5.utils.changeFormEditable(this.layoutMain, false);
                    }
                }
                private tablePaymentItem: sap.ui.table.Table;

                /** 显示数据 */
                showPayment(data: bo.Payment): void {
                    this.layoutMain.setModel(new sap.ui.model.json.JSONModel(data));
                    this.layoutMain.bindObject("/");
                    // 监听属性改变，并更新控件
                    openui5.utils.refreshModelChanged(this.layoutMain, data);
                    // 改变视图状态
                    this.changeViewStatus(data);
                }
                /** 显示数据 */
                showPaymentItems(datas: bo.PaymentItem[]): void {
                    this.tablePaymentItem.setModel(new sap.ui.model.json.JSONModel({ rows: datas }));
                    // 监听属性改变，并更新控件
                    openui5.utils.refreshModelChanged(this.tablePaymentItem, datas);
                }
            }
        }
    }
}
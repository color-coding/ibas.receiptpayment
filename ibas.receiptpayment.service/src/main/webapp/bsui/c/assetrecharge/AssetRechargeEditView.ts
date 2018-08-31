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
            /** 编辑视图-资产充值 */
            export class AssetRechargeEditView extends ibas.BOEditView implements app.IAssetRechargeEditView {
                /** 删除数据事件 */
                deleteDataEvent: Function;
                /** 新建数据事件，参数1：是否克隆 */
                createDataEvent: Function;
                /** 添加资产充值-项目事件 */
                addAssetRechargeItemEvent: Function;
                /** 删除资产充值-项目事件 */
                removeAssetRechargeItemEvent: Function;
                /** 选择资产充值客户事件 */
                chooseAssetRechargeBusinessPartnerEvent: Function;
                /** 选择资产充值项目 */
                chooseAssetRechargeBusinessPartnerAssetEvent: Function;
                /** 选择资产充值方式项目 */
                chooseAssetRechargeItemModeTradeIdEvent: Function;

                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    let formTop: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("receiptpayment_title_general") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_assetrecharge_businesspartnercode") }),
                            new sap.m.Select("", {
                                items: openui5.utils.createComboBoxItems(businesspartner.bo.emBusinessPartnerType),
                            }).bindProperty("selectedKey", {
                                path: "businessPartnerType",
                                type: "sap.ui.model.type.Integer",
                            }),
                            new sap.m.Input("", {
                                showValueHelp: true,
                                valueHelpRequest: function (): void {
                                    that.fireViewEvents(that.chooseAssetRechargeBusinessPartnerEvent);
                                }
                            }).bindProperty("value", {
                                path: "businessPartnerCode",
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_assetrecharge_businesspartnername") }),
                            new sap.m.Input("", {
                                editable: false,
                            }).bindProperty("value", {
                                path: "businessPartnerName",
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_assetrecharge_servicecode") }),
                            new sap.m.ex.BOInput("", {
                                boText: "name",
                                boKey: "code",
                                boCode: ibas.config.applyVariables(businesspartner.bo.BO_CODE_BUSINESSPARTNERASSET),
                                repositoryName: businesspartner.bo.BO_REPOSITORY_BUSINESSPARTNER,
                                valueHelpRequest: function (): void {
                                    that.fireViewEvents(that.chooseAssetRechargeBusinessPartnerAssetEvent);
                                },
                                bindingValue: {
                                    path: "serviceCode"
                                }
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_assetrecharge_amount") }),
                            new sap.m.Input("", {
                            }).bindProperty("value", {
                                path: "amount",
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_assetrecharge_times") }),
                            new sap.m.Input("", {
                            }).bindProperty("value", {
                                path: "times",
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_assetrecharge_ordertype") }),
                            new sap.m.ex.SmartField("", {
                                width: "100%",
                                boType: bo.AssetRecharge.name,
                                propertyName: "OrderType",
                                bindingValue: {
                                    path: "orderType"
                                }
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_assetrecharge_reference1") }),
                            new sap.m.Input("", {
                            }).bindProperty("value", {
                                path: "reference1",
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_assetrecharge_reference2") }),
                            new sap.m.Input("", {
                            }).bindProperty("value", {
                                path: "reference2",
                            }),
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("receiptpayment_title_status") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_assetrecharge_docentry") }),
                            new sap.m.Input("", {
                                editable: false,
                            }).bindProperty("value", {
                                path: "docEntry"
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_assetrecharge_documentstatus") }),
                            new sap.m.Select("", {
                                items: openui5.utils.createComboBoxItems(ibas.emDocumentStatus),
                            }).bindProperty("selectedKey", {
                                path: "documentStatus",
                                type: "sap.ui.model.type.Integer",
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_assetrecharge_canceled") }),
                            new sap.m.Select("", {
                                items: openui5.utils.createComboBoxItems(ibas.emYesNo),
                            }).bindProperty("selectedKey", {
                                path: "canceled",
                                type: "sap.ui.model.type.Integer",
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_assetrecharge_documentdate") }),
                            new sap.m.DatePicker("", {
                                valueFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                                displayFormat: ibas.config.get(ibas.CONFIG_ITEM_FORMAT_DATE),
                            }).bindProperty("dateValue", {
                                path: "documentDate",
                            }),
                        ]
                    });
                    this.tableAssetRechargeItem = new sap.ui.table.Table("", {
                        toolbar: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_add"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://add",
                                    press: function (): void {
                                        that.fireViewEvents(that.addAssetRechargeItemEvent);
                                    }
                                }),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_remove"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://less",
                                    press: function (): void {
                                        that.fireViewEvents(that.removeAssetRechargeItemEvent,
                                            // 获取表格选中的对象
                                            openui5.utils.getSelecteds<bo.AssetRechargeItem>(that.tableAssetRechargeItem)
                                        );
                                    }
                                })
                            ]
                        }),
                        enableSelectAll: false,
                        selectionBehavior: sap.ui.table.SelectionBehavior.Row,
                        visibleRowCount: ibas.config.get(openui5.utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, 8),
                        rows: "{/rows}",
                        columns: [
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_assetrechargeitem_lineid"),
                                template: new sap.m.Text("", {
                                    wrapping: false,
                                }).bindProperty("text", {
                                    path: "lineId",
                                }),
                            }),
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_assetrechargeitem_linestatus"),
                                template: new sap.m.Select("", {
                                    width: "100%",
                                    items: openui5.utils.createComboBoxItems(ibas.emDocumentStatus),
                                }).bindProperty("selectedKey", {
                                    path: "lineStatus",
                                    type: "sap.ui.model.type.Integer",
                                })
                            }),
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_assetrechargeitem_mode"),
                                template: new sap.m.Select("", {
                                    width: "100%",
                                    items: receiptMethods(),
                                }).bindProperty("selectedKey", {
                                    path: "mode"
                                })
                            }),
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_assetrechargeitem_amount"),
                                template: new sap.m.Input("", {
                                    width: "100%",
                                }).bindProperty("value", {
                                    path: "amount"
                                })
                            }),
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_assetrechargeitem_currency"),
                                template: new sap.m.Text("", {
                                    wrapping: false,
                                }).bindProperty("text", {
                                    path: "currency"
                                })
                            }),
                            new sap.ui.table.Column("", {
                                label: ibas.i18n.prop("bo_assetrechargeitem_tradeid"),
                                template: new sap.m.Input("", {
                                    width: "100%",
                                    showValueHelp: true,
                                    valueHelpRequest: function (): void {
                                        that.fireViewEvents(that.chooseAssetRechargeItemModeTradeIdEvent,
                                            // 获取当前对象
                                            this.getBindingContext().getObject()
                                        );
                                    }
                                }).bindProperty("value", {
                                    path: "tradeId"
                                })
                            }),
                        ]
                    });
                    let formAssetRechargeItem: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("bo_assetrechargeitem") }),
                            this.tableAssetRechargeItem,
                        ]
                    });
                    let formBottom: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("receiptpayment_title_others") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_assetrecharge_dataowner") }),
                            new sap.m.ex.DataOwnerInput("", {
                                bindingValue: {
                                    path: "dataOwner"
                                }
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_assetrecharge_remarks") }),
                            new sap.m.TextArea("", {
                                rows: 3,
                            }).bindProperty("value", {
                                path: "remarks",
                            }),
                            new sap.ui.core.Title("", {}),
                        ],
                    });
                    this.layoutMain = new sap.ui.layout.VerticalLayout("", {
                        width: "100%",
                        height: "100%",
                        content: [
                            formTop,
                            formAssetRechargeItem,
                            formBottom
                        ]
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
                private tableAssetRechargeItem: sap.ui.table.Table;

                /** 改变视图状态 */
                private changeViewStatus(data: bo.AssetRecharge): void {
                    if (ibas.objects.isNull(data)) {
                        return;
                    }
                    // 新建时：禁用删除，
                    if (data.isNew) {
                        if (this.page.getSubHeader() instanceof sap.m.Toolbar) {
                            openui5.utils.changeToolbarSavable(<sap.m.Toolbar>this.page.getSubHeader(), true);
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

                /** 显示数据 */
                showAssetRecharge(data: bo.AssetRecharge): void {
                    this.layoutMain.setModel(new sap.ui.model.json.JSONModel(data));
                    this.layoutMain.bindObject("/");
                    // 监听属性改变，并更新控件
                    openui5.utils.refreshModelChanged(this.layoutMain, data);
                    // 改变视图状态
                    this.changeViewStatus(data);
                }
                /** 显示数据 */
                showAssetRechargeItems(datas: bo.AssetRechargeItem[]): void {
                    this.tableAssetRechargeItem.setModel(new sap.ui.model.json.JSONModel({ rows: datas }));
                    // 监听属性改变，并更新控件
                    openui5.utils.refreshModelChanged(this.tableAssetRechargeItem, datas);
                }
            }
        }
    }
}

/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as openui5 from "openui5/index";
import * as bo from "../../../borep/bo/index";
import { IPaymentEditView } from "../../../bsapp/payment/index";

/**
 * 编辑视图-付款
 */
export class PaymentEditView extends ibas.BOEditView implements IPaymentEditView {
    /** 删除数据事件 */
    deleteDataEvent: Function;
    /** 新建数据事件，参数1：是否克隆 */
    createDataEvent: Function;
    /** 添加付款-项目事件 */
    addPaymentItemEvent: Function;
    /** 删除付款-项目事件 */
    removePaymentItemEvent: Function;
    /** 选择付款客户事件 */
    chooseBusinessPartnerEvent: Function;
    private mainLayout: sap.ui.layout.VerticalLayout;
    private viewTopForm: sap.ui.layout.form.SimpleForm;
    private viewBottomForm: sap.ui.layout.form.SimpleForm;

    /** 绘制视图 */
    darw(): any {
        let that: this = this;
        this.viewTopForm = new sap.ui.layout.form.SimpleForm("", {
            editable: true,
            content: [
                new sap.ui.core.Title("", { text: ibas.i18n.prop("receiptpayment_basis_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_payment_businesspartnertype") }),
                new sap.m.Select("", {
                    items: openui5.utils.createComboBoxItems(bo.emBusinessPartnerType),
                }).bindProperty("selectedKey", {
                    path: "businessPartnerType",
                    type: "sap.ui.model.type.Integer",
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_payment_businesspartnercode") }),
                new sap.m.Input("", {
                    showValueHelp: true,
                    valueHelpRequest: function (): void {
                        that.fireViewEvents(that.chooseBusinessPartnerEvent);
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
                new sap.ui.core.Title("", { text: ibas.i18n.prop("receiptpayment_status_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_payment_docnum") }),
                new sap.m.Input("", {
                }).bindProperty("value", {
                    path: "docNum",
                }),
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
                    valueFormat: "yyyy-MM-dd",
                }).bindProperty("dateValue", {
                    path: "documentDate",
                }),
            ]
        });
        this.tablePaymentItem = new sap.ui.table.Table("", {
            toolbar: new sap.m.Toolbar("", {
                content: [
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("shell_data_add"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://add",
                        press: function (): void {
                            that.fireViewEvents(that.addPaymentItemEvent);
                        }
                    }),
                    new sap.m.Button("", {
                        text: ibas.i18n.prop("shell_data_remove"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://less",
                        press: function (): void {
                            that.fireViewEvents(that.removePaymentItemEvent,
                                // 获取表格选中的对象
                                openui5.utils.getTableSelecteds<bo.PaymentItem>(that.tablePaymentItem)
                            );
                        }
                    })
                ]
            }),
            enableSelectAll: false,
            selectionBehavior: sap.ui.table.SelectionBehavior.Row,
            visibleRowCount: ibas.config.get(openui5.utils.CONFIG_ITEM_LIST_TABLE_VISIBLE_ROW_COUNT, 10),
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
                    }).bindProperty("value", {
                        path: "mode"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_paymentitem_amount"),
                    template: new sap.m.Input("", {
                        width: "100%",
                        type: sap.m.InputType.Number
                    }).bindProperty("value", {
                        path: "amount"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_paymentitem_currency"),
                    template: new sap.m.Input("", {
                        width: "100%",
                        type: sap.m.InputType.Text
                    }).bindProperty("value", {
                        path: "currency"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_paymentitem_bankcode"),
                    template: new sap.m.Input("", {
                        width: "100%",
                        type: sap.m.InputType.Text
                    }).bindProperty("value", {
                        path: "bankCode"
                    })
                }),
                new sap.ui.table.Column("", {
                    label: ibas.i18n.prop("bo_paymentitem_cardnumber"),
                    template: new sap.m.Input("", {
                        width: "100%",
                        type: sap.m.InputType.Text
                    }).bindProperty("value", {
                        path: "cardNumber"
                    })
                }),
            ]
        });
        this.viewBottomForm = new sap.ui.layout.form.SimpleForm("", {
            editable: true,
            content: [
                new sap.ui.core.Title("", { text: ibas.i18n.prop("receiptpayment_remarks_information") }),
                new sap.m.TextArea("", {
                    rows: 5,
                }).bindProperty("value", {
                    path: "/remarks",
                }),
                new sap.ui.core.Title("", { text: ibas.i18n.prop("receiptpayment_total_information") }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_payment_documenttotal") }),
                new sap.m.Input("", {
                    type: sap.m.InputType.Number,
                }).bindProperty("value", {
                    path: "/documentTotal",
                }),
                new sap.m.Label("", { text: ibas.i18n.prop("bo_payment_documentcurrency") }),
                new sap.m.Input("", {
                    type: sap.m.InputType.Number,
                }).bindProperty("value", {
                    path: "/documentCurrency",
                }),
            ],
        });
        this.mainLayout = new sap.ui.layout.VerticalLayout("", {
            content: [
                this.viewTopForm,
                this.tablePaymentItem,
                this.viewBottomForm,
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
                        text: ibas.i18n.prop("shell_data_new"),
                        type: sap.m.ButtonType.Transparent,
                        icon: "sap-icon://create",
                        buttonMode: sap.m.MenuButtonMode.Split,
                        defaultAction: function (): void {
                            // 触发新建对象
                            that.fireViewEvents(that.createDataEvent, false);
                        },
                        menu: new sap.m.Menu("", {
                            items: [
                                new sap.m.MenuItem("", {
                                    text: ibas.i18n.prop("shell_data_new"),
                                    icon: "sap-icon://create"
                                }),
                                new sap.m.MenuItem("", {
                                    text: ibas.i18n.prop("shell_data_clone"),
                                    icon: "sap-icon://copy"
                                }),
                            ],
                            itemSelected: function (event: any): void {
                                let item: any = event.getParameter("item");
                                if (item instanceof sap.m.MenuItem) {
                                    if (item.getIcon() === "sap-icon://copy") {
                                        // 触发克隆对象
                                        that.fireViewEvents(that.createDataEvent, true);
                                    } else {
                                        // 触发新建对象
                                        that.fireViewEvents(that.createDataEvent, false);
                                    }
                                }
                            }
                        })
                    }),
                ]
            }),
            content: [this.mainLayout]
        });
        this.id = this.page.getId();
        return this.page;
    }
    private page: sap.m.Page;
    private form: sap.ui.layout.form.SimpleForm;
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
            openui5.utils.changeFormEditable(this.mainLayout, false);
        }
    }
    private tablePaymentItem: sap.ui.table.Table;

    /** 显示数据 */
    showPayment(data: bo.Payment): void {
        this.mainLayout.setModel(new sap.ui.model.json.JSONModel(data));
        this.mainLayout.bindObject("/");
        // 监听属性改变，并更新控件
        openui5.utils.refreshModelChanged(this.mainLayout, data);
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

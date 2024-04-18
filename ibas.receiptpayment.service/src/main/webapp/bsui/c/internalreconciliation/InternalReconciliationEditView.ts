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
            /** 编辑视图-内部对账 */
            export class InternalReconciliationEditView extends ibas.BOEditView implements app.IInternalReconciliationEditView {
                /** 删除数据事件 */
                deleteDataEvent: Function;
                /** 新建数据事件，参数1：是否克隆 */
                createDataEvent: Function;
                /** 添加内部对账-行事件 */
                addInternalReconciliationLineEvent: Function;
                /** 删除内部对账-行事件 */
                removeInternalReconciliationLineEvent: Function;

                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    let formTop: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("receiptpayment_title_general") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_internalreconciliation_reconciliationtype") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "reconciliationType",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 30
                                }),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_internalreconciliation_reconciliationdate") }),
                            new sap.extension.m.DatePicker("", {
                            }).bindProperty("bindingValue", {
                                path: "reconciliationDate",
                                type: new sap.extension.data.Date(),
                            }),
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("receiptpayment_title_status") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_internalreconciliation_objectkey") }),
                            new sap.extension.m.Input("", {
                                editable: false,
                            }).bindProperty("bindingValue", {
                                path: "objectKey",
                                type: new sap.extension.data.Numeric(),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_internalreconciliation_canceled") }),
                            new sap.extension.m.EnumSelect("", {
                                enumType: ibas.emYesNo
                            }).bindProperty("bindingValue", {
                                path: "canceled",
                                type: new sap.extension.data.YesNo(),
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_internalreconciliation_systemed") }),
                            new sap.extension.m.EnumSelect("", {
                                enumType: ibas.emYesNo
                            }).bindProperty("bindingValue", {
                                path: "systemed",
                                type: new sap.extension.data.YesNo(),
                            }),
                        ]
                    });
                    let formInternalReconciliationLine: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("bo_internalreconciliationline") }),
                            this.tableInternalReconciliationLine = new sap.extension.table.DataTable("", {
                                enableSelectAll: false,
                                visibleRowCount: sap.extension.table.visibleRowCount(8),
                                dataInfo: {
                                    code: businesspartner.bo.InternalReconciliation.BUSINESS_OBJECT_CODE,
                                    name: businesspartner.bo.InternalReconciliationLine.name
                                },
                                toolbar: new sap.m.Toolbar("", {
                                    content: [
                                        new sap.m.Button("", {
                                            text: ibas.i18n.prop("shell_data_add"),
                                            type: sap.m.ButtonType.Transparent,
                                            icon: "sap-icon://add",
                                            press(): void {
                                                that.fireViewEvents(that.addInternalReconciliationLineEvent);
                                            }
                                        }),
                                        new sap.m.Button("", {
                                            text: ibas.i18n.prop("shell_data_remove"),
                                            type: sap.m.ButtonType.Transparent,
                                            icon: "sap-icon://less",
                                            press(): void {
                                                that.fireViewEvents(that.removeInternalReconciliationLineEvent, that.tableInternalReconciliationLine.getSelecteds());
                                            }
                                        })
                                    ]
                                }),
                                rows: "{/rows}",
                                columns: [
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_internalreconciliationline_lineid"),
                                        template: new sap.extension.m.Text("", {
                                        }).bindProperty("bindingValue", {
                                            path: "lineId",
                                            type: new sap.extension.data.Numeric(),
                                        }),
                                        width: "6rem",
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_internalreconciliationline_shortname"),
                                        template: new sap.extension.m.Link("", {
                                            press(): void {

                                            }
                                        }).bindProperty("bindingValue", {
                                            path: "shortName",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 20
                                            }),
                                        }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_internalreconciliationline_document"),
                                        template: new sap.extension.m.Link("", {
                                            press(): void {
                                                let data: any = this.getBindingContext().getObject();
                                                if (ibas.objects.instanceOf(data, businesspartner.bo.InternalReconciliationLine) && data.documentEntry > 0) {
                                                    ibas.servicesManager.runLinkService({
                                                        boCode: data.documentType,
                                                        linkValue: data.documentEntry.toString()
                                                    });
                                                }
                                            }
                                        }).bindProperty("bindingValue", {
                                            parts: [
                                                {
                                                    path: "documentType",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }, {
                                                    path: "documentEntry",
                                                    type: new sap.extension.data.Numeric(),
                                                }, {
                                                    path: "documentLineId",
                                                    type: new sap.extension.data.Numeric(),
                                                }
                                            ],
                                            formatter(type: string, entry: number, lineId: number): string {
                                                if (ibas.objects.isNull(type) || ibas.objects.isNull(entry)) {
                                                    return "";
                                                }
                                                return ibas.businessobjects.describe(ibas.strings.format("{[{0}].[DocEntry = {1}]}", type, entry))
                                                    + (lineId > 0 ? ibas.strings.format(", {0}-{1}", ibas.i18n.prop("bo_receiptitem_lineid"), lineId) : "");
                                            }
                                        }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_internalreconciliationline_amount"),
                                        template: new sap.extension.m.Input("", {
                                        }).bindProperty("bindingValue", {
                                            path: "amount",
                                            type: new sap.extension.data.Sum(),
                                        }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_internalreconciliationline_currency"),
                                        template: new sap.extension.m.Text("", {
                                        }).bindProperty("bindingValue", {
                                            path: "currency",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 8
                                            }),
                                        }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_internalreconciliationline_remarks"),
                                        template: new sap.extension.m.Input("", {
                                            rows: 3,
                                        }).bindProperty("bindingValue", {
                                            path: "remarks",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }),
                                        width: "16rem",
                                    }),
                                ]
                            }),
                        ]
                    });
                    let formBottom: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("receiptpayment_title_others") }),
                            new sap.m.Label("", {
                                text: ibas.i18n.prop("bo_internalreconciliation_branch"),
                                visible: accounting.config.isEnableBranch(),
                                required: true,
                            }),
                            new sap.extension.m.DataBranchInput("", {
                                showValueHelp: true,
                                visible: accounting.config.isEnableBranch(),
                            }).bindProperty("bindingValue", {
                                path: "branch",
                                type: new sap.extension.data.Alphanumeric()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_remarks") }),
                            new sap.extension.m.TextArea("", {
                                rows: 3,
                            }).bindProperty("bindingValue", {
                                path: "remarks",
                                type: new sap.extension.data.Alphanumeric()
                            }),
                            new sap.ui.core.Title("", { text: "" }),
                        ]
                    });
                    return this.page = new sap.extension.m.DataPage("", {
                        showHeader: false,
                        dataInfo: {
                            code: businesspartner.bo.InternalReconciliation.BUSINESS_OBJECT_CODE,
                        },
                        subHeader: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_save"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://save",
                                    press(): void {
                                        that.fireViewEvents(that.saveDataEvent);
                                    }
                                }),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_data_delete"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://delete",
                                    press(): void {
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
                                                press(): void {
                                                    // 创建新的对象
                                                    that.fireViewEvents(that.createDataEvent, false);
                                                }
                                            }),
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("shell_data_clone"),
                                                icon: "sap-icon://copy",
                                                press(): void {
                                                    // 复制当前对象
                                                    that.fireViewEvents(that.createDataEvent, true);
                                                }
                                            }),
                                        ],
                                    })
                                }),
                                new sap.m.ToolbarSeparator(""),
                                new sap.extension.m.MenuButton("", {
                                    autoHide: true,
                                    type: sap.m.ButtonType.Transparent,
                                    text: ibas.i18n.prop("shell_quick_to"),
                                    icon: "sap-icon://generate-shortcut",
                                    menu: new sap.m.Menu("", {
                                        items: [
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("bo_journalentry"),
                                                icon: "sap-icon://credit-card",
                                                press: function (): void {
                                                    let data: any = this.getBindingContext().getObject();
                                                    if (ibas.objects.instanceOf(data, businesspartner.bo.InternalReconciliation)) {
                                                        let criteria: ibas.ICriteria = new ibas.Criteria();
                                                        criteria.result = 1;
                                                        let condition: ibas.ICondition = criteria.conditions.create();
                                                        condition.alias = accounting.bo.JournalEntry.PROPERTY_BASEDOCUMENTTYPE_NAME;
                                                        condition.value = data.objectCode;
                                                        condition = criteria.conditions.create();
                                                        condition.alias = accounting.bo.JournalEntry.PROPERTY_BASEDOCUMENTENTRY_NAME;
                                                        condition.value = data.objectKey.toString();
                                                        let sort: ibas.ISort = criteria.sorts.create();
                                                        sort.alias = accounting.bo.JournalEntry.PROPERTY_DOCENTRY_NAME;
                                                        sort.sortType = ibas.emSortType.DESCENDING;
                                                        ibas.servicesManager.runLinkService({
                                                            boCode: accounting.bo.JournalEntry.BUSINESS_OBJECT_CODE,
                                                            linkValue: criteria
                                                        });
                                                    }
                                                },
                                                visible: shell.app.privileges.canRun({
                                                    id: accounting.app.JournalEntryViewApp.APPLICATION_ID,
                                                    name: accounting.app.JournalEntryViewApp.APPLICATION_NAME,
                                                })
                                            }),
                                        ],
                                    })
                                }),
                                new sap.m.ToolbarSpacer(""),
                                new sap.m.Button("", {
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://action",
                                    press: function (event: any): void {
                                        ibas.servicesManager.showServices({
                                            proxy: new ibas.BOServiceProxy({
                                                data: that.page.getModel().getData(),
                                                converter: new bo.DataConverter(),
                                            }),
                                            displayServices(services: ibas.IServiceAgent[]): void {
                                                if (ibas.objects.isNull(services) || services.length === 0) {
                                                    return;
                                                }
                                                let actionSheet: sap.m.ActionSheet = new sap.m.ActionSheet("", {
                                                    placement: sap.m.PlacementType.Bottom,
                                                    buttons: {
                                                        path: "/",
                                                        template: new sap.m.Button("", {
                                                            type: sap.m.ButtonType.Transparent,
                                                            text: {
                                                                path: "name",
                                                                type: new sap.extension.data.Alphanumeric(),
                                                                formatter(data: string): string {
                                                                    return data ? ibas.i18n.prop(data) : "";
                                                                }
                                                            },
                                                            icon: {
                                                                path: "icon",
                                                                type: new sap.extension.data.Alphanumeric(),
                                                                formatter(data: string): string {
                                                                    return data ? data : "sap-icon://e-care";
                                                                }
                                                            },
                                                            press(this: sap.m.Button): void {
                                                                let service: ibas.IServiceAgent = this.getBindingContext().getObject();
                                                                if (service) {
                                                                    service.run();
                                                                }
                                                            }
                                                        })
                                                    }
                                                });
                                                actionSheet.setModel(new sap.extension.model.JSONModel(services));
                                                actionSheet.openBy(event.getSource());
                                            }
                                        });
                                    }
                                })
                            ]
                        }),
                        content: [
                            formTop,
                            formInternalReconciliationLine,
                            formBottom,
                        ]
                    });
                }

                private page: sap.extension.m.Page;
                private tableInternalReconciliationLine: sap.extension.table.Table;

                /** 显示数据 */
                showInternalReconciliation(data: businesspartner.bo.InternalReconciliation): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                    // 改变页面状态
                    sap.extension.pages.changeStatus(this.page);
                }
                /** 显示数据-内部对账-行 */
                showInternalReconciliationLines(datas: businesspartner.bo.InternalReconciliationLine[]): void {
                    this.tableInternalReconciliationLine.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                }
            }
        }
    }
}

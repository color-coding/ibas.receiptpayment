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
            /** 查看视图-内部对账 */
            export class InternalReconciliationViewView extends ibas.BOViewView implements app.IInternalReconciliationViewView {

                /** 删除数据事件，参数：删除对象集合 */
                deleteDataEvent: Function;
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.tableInternalReconciliationLine = new sap.extension.m.DataTable("", {
                        autoPopinMode: true,
                        dataInfo: {
                            code: businesspartner.bo.InternalReconciliation.BUSINESS_OBJECT_CODE,
                            name: businesspartner.bo.InternalReconciliationLine.name
                        },
                        columns: [
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_internalreconciliationline_lineid"),
                                width: "4rem",
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_internalreconciliationline_shortname"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_internalreconciliationline_document"),
                                width: "16rem",
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_internalreconciliationline_category"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_internalreconciliationline_amount"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_internalreconciliationline_remarks"),
                            }),
                        ],
                        items: {
                            path: "/rows",
                            template: new sap.m.ColumnListItem("", {
                                cells: [
                                    new sap.extension.m.ObjectAttribute("", {
                                        bindingValue: {
                                            path: "lineId",
                                            type: new sap.extension.data.Numeric(),
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        bindingValue: {
                                            path: "shortName",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        bindingValue: {
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
                                        },
                                        showValueLink: true,
                                        valueLinkRequest: function (event: sap.ui.base.Event): void {
                                            let data: any = this.getBindingContext().getObject();
                                            if (ibas.objects.instanceOf(data, businesspartner.bo.InternalReconciliationLine) && data.documentEntry > 0) {
                                                ibas.servicesManager.runLinkService({
                                                    boCode: data.documentType,
                                                    linkValue: data.documentEntry.toString()
                                                });
                                            }
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        bindingValue: {
                                            path: "category",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }
                                    }),
                                    new sap.extension.m.ObjectNumber("", {
                                        number: {
                                            path: "amount",
                                            type: new sap.extension.data.Sum(),
                                        },
                                        unit: {
                                            path: "currency",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        bindingValue: {
                                            path: "remarks",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }
                                    }),
                                ]
                            }),
                        }
                    });
                    return this.page = new sap.extension.uxap.DataObjectPageLayout("", {
                        dataInfo: {
                            code: businesspartner.bo.InternalReconciliation.BUSINESS_OBJECT_CODE,
                        },
                        headerTitle: new sap.uxap.ObjectPageHeader("", {
                            objectTitle: {
                                path: "objectKey",
                                type: new sap.extension.data.Numeric(),
                                formatter(data: string): any {
                                    return ibas.strings.format("# {0}", data);
                                }
                            },
                            objectSubtitle: {
                                parts: [
                                    {
                                        path: "baseDocumentType",
                                        type: new sap.extension.data.Alphanumeric(),
                                    }, {
                                        path: "baseDocumentEntry",
                                        type: new sap.extension.data.Numeric(),
                                    }, {
                                        path: "baseDocumentLineId",
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
                            },
                            navigationBar: new sap.m.Bar("", {
                                contentLeft: [
                                    new sap.m.Button("", {
                                        text: ibas.i18n.prop("shell_data_cancel"),
                                        type: sap.m.ButtonType.Transparent,
                                        icon: "sap-icon://sys-cancel",
                                        press(): void {
                                            that.fireViewEvents(that.deleteDataEvent);
                                        },
                                        enabled: {
                                            path: "canceled",
                                            formatter(data: any): boolean {
                                                return data === ibas.emYesNo.YES ? false : true;
                                            }
                                        }
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
                                ],
                                contentRight: [
                                    new sap.m.Button("", {
                                        type: sap.m.ButtonType.Transparent,
                                        icon: "sap-icon://action",
                                        press(event: sap.ui.base.Event): void {
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
                            actions: [
                                new sap.extension.m.ObjectYesNoStatus("", {
                                    title: ibas.i18n.prop("bo_internalreconciliation_canceled"),
                                    negative: true,
                                    enumValue: {
                                        path: "canceled",
                                        type: new sap.extension.data.YesNo(),
                                    },
                                }),
                                new sap.extension.m.ObjectYesNoStatus("", {
                                    title: ibas.i18n.prop("bo_internalreconciliation_systemed"),
                                    negative: true,
                                    enumValue: {
                                        path: "systemed",
                                        type: new sap.extension.data.YesNo(),
                                    },
                                }),
                                new sap.extension.m.ObjectNumber("", {
                                    textAlign: sap.ui.core.TextAlign.Right,
                                    number: {
                                        path: "amount",
                                        type: new sap.extension.data.Sum()
                                    },
                                    unit: {
                                        path: "currency",
                                        type: new sap.extension.data.Alphanumeric()
                                    },
                                }).addStyleClass("sapMObjectNumberLarge"),
                            ]
                        }),
                        headerContent: [
                            new sap.extension.m.ObjectAttribute("", {
                                title: ibas.i18n.prop("bo_internalreconciliation_reconciliationtype"),
                                bindingValue: {
                                    path: "reconciliationType",
                                    type: new sap.extension.data.Alphanumeric(),
                                }
                            }),
                            new sap.extension.m.ObjectAttribute("", {
                                title: ibas.i18n.prop("bo_internalreconciliation_reconciliationdate"),
                                bindingValue: {
                                    path: "reconciliationDate",
                                    type: new sap.extension.data.Date(),
                                }
                            }),
                        ],
                        sections: [
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("bo_internalreconciliationline"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            this.tableInternalReconciliationLine
                                        ],
                                    })
                                ]
                            }),
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("receiptpayment_title_others"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.extension.m.ObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_internalreconciliation_remarks"),
                                                bindingValue: {
                                                    path: "remarks",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                            new sap.extension.m.UserObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_internalreconciliation_dataowner"),
                                                bindingValue: {
                                                    path: "dataOwner",
                                                    type: new sap.extension.data.Numeric(),
                                                }
                                            }),
                                            new sap.extension.m.OrganizationObjectAttribute("", {
                                                title: ibas.i18n.prop("bo_internalreconciliation_organization"),
                                                bindingValue: {
                                                    path: "organization",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                }
                                            }),
                                        ],
                                    })
                                ]
                            }),
                        ]
                    });
                }

                private page: sap.extension.uxap.ObjectPageLayout;
                private tableInternalReconciliationLine: sap.extension.m.Table;

                /** 显示数据 */
                showInternalReconciliation(data: businesspartner.bo.InternalReconciliation): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                }
                /** 显示数据-内部对账-行 */
                showInternalReconciliationLines(datas: businesspartner.bo.InternalReconciliationLine[]): void {
                    this.tableInternalReconciliationLine.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                }
            }
        }
    }
}

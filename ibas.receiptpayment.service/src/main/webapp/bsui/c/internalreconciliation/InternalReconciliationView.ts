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
            /** 视图-内部对账 */
            export class InternalReconciliationView extends ibas.View implements app.IInternalReconciliationView {
                /** 查询数据事件 */
                fetchDocumentsEvent: Function;
                /** 对账事件 */
                reconcileEvent: Function;

                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.pageCommon = new sap.m.Page("", {
                        showHeader: false,
                        subHeader: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.GenericTag("", {
                                    status: sap.ui.core.ValueState.Information,
                                    text: ibas.i18n.prop("receiptpayment_guide_please_choose_conditions"),
                                }),
                                new sap.m.ToolbarSpacer("", {}),
                            ]
                        }),
                        content: [
                            new sap.m.VBox("", {
                                width: "100%",
                                height: "100%",
                                alignContent: sap.m.FlexAlignContent.Center,
                                alignItems: sap.m.FlexAlignItems.Center,
                                justifyContent: sap.m.FlexJustifyContent.Center,
                                renderType: sap.m.FlexRendertype.Bare,
                                items: [
                                    new sap.ui.layout.form.SimpleForm("", {
                                        editable: true,
                                        width: "30rem",
                                        content: [
                                            new sap.m.Label("", { text: ibas.i18n.prop("bo_internalreconciliation_reconciliationtype") }),
                                            new sap.extension.m.Select("", {
                                                items: [
                                                    new sap.extension.m.SelectItem("", {
                                                        key: "M",
                                                        text: ibas.i18n.prop("receiptpayment_reconciliation_manual"),
                                                    }),
                                                ]
                                            }),
                                            new sap.m.Label("", { text: ibas.i18n.prop("receiptpayment_reconciliation_customer") }),
                                            this.inputCustomer = new sap.extension.m.SelectionInput("", {
                                                showValueHelp: true,
                                                repository: businesspartner.bo.BORepositoryBusinessPartner,
                                                dataInfo: {
                                                    type: businesspartner.bo.Customer,
                                                    key: businesspartner.bo.Customer.PROPERTY_CODE_NAME,
                                                    text: businesspartner.bo.Customer.PROPERTY_NAME_NAME
                                                },
                                                criteria: [
                                                    new ibas.Condition(businesspartner.bo.Customer.PROPERTY_DELETED_NAME, ibas.emConditionOperation.EQUAL, ibas.emYesNo.NO)
                                                ]
                                            }),
                                            new sap.m.Label("", { text: ibas.i18n.prop("receiptpayment_reconciliation_supplier") }),
                                            this.inputSupplier = new sap.extension.m.SelectionInput("", {
                                                showValueHelp: true,
                                                repository: businesspartner.bo.BORepositoryBusinessPartner,
                                                dataInfo: {
                                                    type: businesspartner.bo.Supplier,
                                                    key: businesspartner.bo.Supplier.PROPERTY_CODE_NAME,
                                                    text: businesspartner.bo.Supplier.PROPERTY_NAME_NAME
                                                },
                                                criteria: [
                                                    new ibas.Condition(businesspartner.bo.Customer.PROPERTY_DELETED_NAME, ibas.emConditionOperation.EQUAL, ibas.emYesNo.NO)
                                                ]
                                            }),
                                            new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_documentdate") }),
                                            this.inputDocumentDate = new sap.extension.m.DatePicker("", {
                                            }),
                                            new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_deliverydate") }),
                                            this.inputDeliveryDate = new sap.extension.m.DatePicker("", {
                                            }),
                                            new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_postingdate") }),
                                            this.inputPostingDate = new sap.extension.m.DatePicker("", {
                                            }),
                                        ]
                                    }),
                                ]
                            })
                        ],
                        footer: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.ToolbarSpacer("", {}),
                                new sap.m.ToolbarSeparator(""),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("receiptpayment_guide_next_step"),
                                    icon: "sap-icon://arrow-right",
                                    type: sap.m.ButtonType.Transparent,
                                    iconFirst: false,
                                    press: function (): void {
                                        that.container.to(that.pageDocument.getId(), undefined, undefined, undefined);
                                    }
                                }),
                            ]
                        })

                    });
                    this.pageDocument = new sap.m.Page("", {
                        showHeader: false,
                        subHeader: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.GenericTag("", {
                                    status: sap.ui.core.ValueState.Information,
                                    text: ibas.i18n.prop("receiptpayment_guide_please_choose_reconciliation_documents")
                                }),
                                new sap.m.ToolbarSpacer("", {}),
                                new sap.m.Button("", {
                                    icon: "sap-icon://refresh",
                                    type: sap.m.ButtonType.Transparent,
                                    press: function (): void {
                                        that.fireFetchDocuments();
                                    }
                                }),
                            ]
                        }),
                        content: [
                            new sap.m.VBox("", {
                                width: "100%",
                                height: "100%",
                                alignContent: sap.m.FlexAlignContent.Center,
                                alignItems: sap.m.FlexAlignItems.Center,
                                justifyContent: sap.m.FlexJustifyContent.Start,
                                renderType: sap.m.FlexRendertype.Bare,
                                items: [
                                    this.listDocuments = new sap.extension.m.DataTable("", {
                                        autoPopinMode: true,
                                        chooseType: ibas.emChooseType.MULTIPLE,
                                        columns: [
                                            new sap.extension.m.Column("", {
                                                header: ibas.i18n.prop("bo_internalreconciliationline_document"),
                                                width: "12rem",
                                            }),
                                            new sap.extension.m.Column("", {
                                                header: new sap.m.Toolbar("", {
                                                    style: sap.m.ToolbarStyle.Clear,
                                                    width: "100%",
                                                    content: [
                                                        new sap.m.Text("", {
                                                            text: ibas.i18n.prop("bo_internalreconciliationline_deliverydate"),
                                                        }),
                                                        new sap.m.ToolbarSpacer(),
                                                        new sap.m.Button("", {
                                                            type: sap.m.ButtonType.Transparent,
                                                            icon: "sap-icon://sort-ascending",
                                                            press(event: sap.ui.base.Event): void {
                                                                let source: any = event.getSource();
                                                                if (source instanceof sap.m.Button) {
                                                                    if (source.getIcon() === "sap-icon://sort-ascending") {
                                                                        source.setIcon("sap-icon://sort-descending");
                                                                        let model: any = that.listDocuments.getBinding("items");
                                                                        if (model instanceof sap.ui.model.ListBinding) {
                                                                            model.sort(new sap.ui.model.Sorter("deliveryDate", true));
                                                                        }
                                                                    } else {
                                                                        source.setIcon("sap-icon://sort-ascending");
                                                                        let model: any = that.listDocuments.getBinding("items");
                                                                        if (model instanceof sap.ui.model.ListBinding) {
                                                                            model.sort(new sap.ui.model.Sorter("deliveryDate", false));
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        })
                                                    ]
                                                }),
                                                width: "8rem",
                                                hAlign: sap.ui.core.TextAlign.Begin,
                                            }),
                                            new sap.extension.m.Column("", {
                                                header: new sap.m.Toolbar("", {
                                                    style: sap.m.ToolbarStyle.Clear,
                                                    width: "100%",
                                                    content: [
                                                        new sap.m.Text("", {
                                                            text: ibas.i18n.prop("bo_internalreconciliationline_documentdate"),
                                                        }),
                                                        new sap.m.ToolbarSpacer(),
                                                        new sap.m.Button("", {
                                                            type: sap.m.ButtonType.Transparent,
                                                            icon: "sap-icon://sort-ascending",
                                                            press(event: sap.ui.base.Event): void {
                                                                let source: any = event.getSource();
                                                                if (source instanceof sap.m.Button) {
                                                                    if (source.getIcon() === "sap-icon://sort-ascending") {
                                                                        source.setIcon("sap-icon://sort-descending");
                                                                        let model: any = that.listDocuments.getBinding("items");
                                                                        if (model instanceof sap.ui.model.ListBinding) {
                                                                            model.sort(new sap.ui.model.Sorter("documentDate", true));
                                                                        }
                                                                    } else {
                                                                        source.setIcon("sap-icon://sort-ascending");
                                                                        let model: any = that.listDocuments.getBinding("items");
                                                                        if (model instanceof sap.ui.model.ListBinding) {
                                                                            model.sort(new sap.ui.model.Sorter("documentDate", false));
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        })
                                                    ]
                                                }),
                                                width: "8rem",
                                            }),
                                            new sap.extension.m.Column("", {
                                                header: ibas.i18n.prop("bo_internalreconciliationline_reference1"),
                                            }),
                                            new sap.extension.m.Column("", {
                                                header: ibas.i18n.prop("bo_internalreconciliationline_reference2"),
                                            }),
                                            new sap.extension.m.Column("", {
                                                header: ibas.i18n.prop("bo_internalreconciliationline_remarks"),
                                            }),
                                            new sap.extension.m.Column("", {
                                                header: new sap.m.Toolbar("", {
                                                    style: sap.m.ToolbarStyle.Clear,
                                                    width: "100%",
                                                    content: [
                                                        new sap.m.Text("", {
                                                            text: ibas.i18n.prop("bo_internalreconciliationline_documenttotal"),
                                                        }),
                                                        new sap.m.ToolbarSpacer(),
                                                        new sap.m.Button("", {
                                                            type: sap.m.ButtonType.Transparent,
                                                            icon: "sap-icon://sort-ascending",
                                                            press(event: sap.ui.base.Event): void {
                                                                let source: any = event.getSource();
                                                                if (source instanceof sap.m.Button) {
                                                                    if (source.getIcon() === "sap-icon://sort-ascending") {
                                                                        source.setIcon("sap-icon://sort-descending");
                                                                        let model: any = that.listDocuments.getBinding("items");
                                                                        if (model instanceof sap.ui.model.ListBinding) {
                                                                            model.sort(new sap.ui.model.Sorter("documentTotal", true));
                                                                        }
                                                                    } else {
                                                                        source.setIcon("sap-icon://sort-ascending");
                                                                        let model: any = that.listDocuments.getBinding("items");
                                                                        if (model instanceof sap.ui.model.ListBinding) {
                                                                            model.sort(new sap.ui.model.Sorter("documentTotal", false));
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        })
                                                    ]
                                                }),
                                                width: "12rem",
                                            }),
                                            new sap.extension.m.Column("", {
                                                header: ibas.i18n.prop("bo_internalreconciliationline_documenttotal"),
                                                width: "10rem",
                                            }),
                                            new sap.extension.m.Column("", {
                                                header: new sap.m.Toolbar("", {
                                                    style: sap.m.ToolbarStyle.Clear,
                                                    width: "100%",
                                                    content: [
                                                        new sap.m.Text("", {
                                                            text: ibas.i18n.prop("bo_internalreconciliationline_drawntotal"),
                                                        }),
                                                        new sap.m.ToolbarSpacer(),
                                                        new sap.m.Button("", {
                                                            type: sap.m.ButtonType.Transparent,
                                                            icon: "sap-icon://reset",
                                                            press(event: sap.ui.base.Event): void {
                                                                let model: any = that.listDocuments.getModel();
                                                                if (model instanceof sap.extension.model.JSONModel) {
                                                                    for (let item of model.getData<any[]>()) {
                                                                        if (item instanceof app.InternalReconciliation) {
                                                                            item.drawnTotal = item.documentTotal - item.closedAmount;
                                                                        }
                                                                    }
                                                                    model.refresh(true);
                                                                }
                                                            }
                                                        })
                                                    ]
                                                }),
                                                width: "10rem",
                                            }),
                                        ],
                                        items: {
                                            path: "/",
                                            templateShareable: false,
                                            template: new sap.m.ColumnListItem("", {
                                                cells: [
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
                                                            if (data instanceof app.InternalReconciliation && data.documentEntry > 0) {
                                                                ibas.servicesManager.runLinkService({
                                                                    boCode: data.documentType,
                                                                    linkValue: data.documentEntry.toString()
                                                                });
                                                            }
                                                        }
                                                    }),
                                                    new sap.extension.m.ObjectAttribute("", {
                                                        bindingValue: {
                                                            path: "deliveryDate",
                                                            type: new sap.extension.data.Date(),
                                                        }
                                                    }),
                                                    new sap.extension.m.ObjectAttribute("", {
                                                        bindingValue: {
                                                            path: "documentDate",
                                                            type: new sap.extension.data.Date(),
                                                        }
                                                    }),
                                                    new sap.extension.m.ObjectAttribute("", {
                                                        bindingValue: {
                                                            path: "reference1",
                                                            type: new sap.extension.data.Alphanumeric(),
                                                        }
                                                    }),
                                                    new sap.extension.m.ObjectAttribute("", {
                                                        bindingValue: {
                                                            path: "reference2",
                                                            type: new sap.extension.data.Alphanumeric(),
                                                        }
                                                    }),
                                                    new sap.extension.m.ObjectAttribute("", {
                                                        bindingValue: {
                                                            path: "remarks",
                                                            type: new sap.extension.data.Alphanumeric(),
                                                        }
                                                    }),
                                                    new sap.extension.m.ObjectAttribute("", {
                                                        bindingValue: {
                                                            parts: [
                                                                {
                                                                    path: "documentTotal",
                                                                    type: new sap.extension.data.Sum(),
                                                                },
                                                                {
                                                                    path: "documentCurrency",
                                                                    type: new sap.extension.data.Alphanumeric(),
                                                                }
                                                            ],
                                                        }
                                                    }),
                                                    new sap.extension.m.ObjectAttribute("", {
                                                        bindingValue: {
                                                            parts: [
                                                                {
                                                                    path: "documentTotal",
                                                                    type: new sap.extension.data.Sum(),
                                                                },
                                                                {
                                                                    path: "closedAmount",
                                                                    type: new sap.extension.data.Sum(),
                                                                }
                                                            ],
                                                            formatter(total: number, amount: number): number {
                                                                return sap.extension.data.formatValue(sap.extension.data.Sum, ibas.numbers.valueOf(total) - ibas.numbers.valueOf(amount), "string");
                                                            }
                                                        }
                                                    }),
                                                    new sap.extension.m.Input("", {
                                                        extAlign: sap.ui.core.TextAlign.Right,
                                                        bindingValue: {
                                                            path: "drawnTotal",
                                                            type: new sap.extension.data.Sum(),
                                                        },
                                                        change(event: sap.ui.base.Event): void {
                                                            let source: any = event.getSource();
                                                            if (source instanceof sap.extension.m.Input) {
                                                                let value: any = source.getBindingValue();
                                                                if (ibas.numbers.valueOf(value) !== 0) {
                                                                    let parent: any = source.getParent();
                                                                    if (parent instanceof sap.m.ColumnListItem) {
                                                                        parent.setSelected(true);
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }),
                                                ],
                                            })
                                        },
                                    }).addStyleClass("sapUiNoContentPadding"),
                                ]
                            })
                        ],
                        footer: new sap.m.Toolbar("", {
                            content: [
                                this.buttonHistory = new sap.m.Button("", {
                                    icon: "sap-icon://history",
                                    type: sap.m.ButtonType.Accept,
                                    customData: [
                                        new sap.m.BadgeCustomData("", {
                                            key: "badge",
                                            value: 0,
                                        })
                                    ],
                                    text: ibas.i18n.prop("receiptpayment_guide_reconciled"),
                                    press(): void {
                                        let popover: sap.m.Popover = new sap.m.Popover("", {
                                            showHeader: false,
                                            contentWidth: "16rem",
                                            titleAlignment: sap.m.TitleAlignment.Start,
                                            placement: sap.m.PlacementType.VerticalPreferedTop,
                                            content: [
                                                new sap.extension.m.List("", {
                                                    items: {
                                                        path: "/",
                                                        template: new sap.m.StandardListItem("", {
                                                            title: "# {objectKey}",
                                                            description: {
                                                                parts: [
                                                                    {
                                                                        path: "baseDocumentType",
                                                                        type: new sap.extension.data.Alphanumeric(),
                                                                    },
                                                                    {
                                                                        path: "baseDocumentEntry",
                                                                        type: new sap.extension.data.Numeric(),
                                                                    },
                                                                    {
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
                                                            type: sap.m.ListType.Active,
                                                            press: function (oEvent: sap.ui.base.Event): void {
                                                                let data: any = this.getBindingContext().getObject();
                                                                if (ibas.objects.instanceOf(data, businesspartner.bo.InternalReconciliation)) {
                                                                    ibas.servicesManager.runLinkService({
                                                                        boCode: data.objectCode,
                                                                        linkValue: data.objectKey.toString()
                                                                    });
                                                                }
                                                            },
                                                        })
                                                    },
                                                })
                                            ],
                                        });
                                        popover.setModel(new sap.extension.model.JSONModel(that.history));
                                        popover.openBy(this, false);
                                    }
                                }),
                                new sap.m.ToolbarSpacer("", {}),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("receiptpayment_guide_previous_step"),
                                    icon: "sap-icon://arrow-left",
                                    type: sap.m.ButtonType.Transparent,
                                    iconFirst: true,
                                    press: function (): void {
                                        that.container.backToPage(that.pageCommon.getId());
                                    }
                                }),
                                new sap.m.ToolbarSeparator(""),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("receiptpayment_guide_reconciliation"),
                                    icon: "sap-icon://combine",
                                    type: sap.m.ButtonType.Transparent,
                                    iconFirst: false,
                                    press: function (): void {
                                        that.fireViewEvents(that.reconcileEvent, that.listDocuments.getSelecteds());
                                    }
                                }),
                            ]
                        })
                    });
                    return this.page = new sap.extension.m.Page("", {
                        showHeader: false,
                        content: [
                            this.container = new sap.m.NavContainer("", {
                                autoFocus: false,
                                pages: [
                                    this.pageCommon,
                                    this.pageDocument,
                                ],
                                afterNavigate(event: sap.ui.base.Event): void {
                                    let source: any = event.getSource();
                                    if (source instanceof sap.m.NavContainer) {
                                        if (event.getParameter("isTo") === true && event.getParameter("to") === that.pageDocument) {
                                            that.fireFetchDocuments();
                                        } else if (event.getParameter("to") === that.pageCommon) {

                                        }
                                    }
                                },
                            }),
                        ]
                    });
                }

                protected fireFetchDocuments(): void {
                    let value: any = null;
                    let condition: ibas.ICondition = null;
                    let criteria: ibas.ICriteria = new ibas.Criteria();
                    value = this.inputPostingDate.getDateValue();
                    if (value instanceof Date) {
                        condition = criteria.conditions.create();
                        condition.alias = bo.Receipt.PROPERTY_POSTINGDATE_NAME;
                        condition.operation = ibas.emConditionOperation.LESS_EQUAL;
                        condition.value = ibas.dates.toString(value, "yyyy-MM-dd");
                    }
                    value = this.inputDeliveryDate.getDateValue();
                    if (value instanceof Date) {
                        condition = criteria.conditions.create();
                        condition.alias = bo.Receipt.PROPERTY_DELIVERYDATE_NAME;
                        condition.operation = ibas.emConditionOperation.LESS_EQUAL;
                        condition.value = ibas.dates.toString(value, "yyyy-MM-dd");
                    }
                    value = this.inputDocumentDate.getDateValue();
                    if (value instanceof Date) {
                        condition = criteria.conditions.create();
                        condition.alias = bo.Receipt.PROPERTY_DOCUMENTDATE_NAME;
                        condition.operation = ibas.emConditionOperation.LESS_EQUAL;
                        condition.value = ibas.dates.toString(value, "yyyy-MM-dd");
                    }
                    value = this.inputCustomer.getBindingValue();
                    if (!ibas.strings.isEmpty(value)) {
                        condition = criteria.conditions.create();
                        condition.alias = businesspartner.bo.Customer.name;
                        condition.operation = ibas.emConditionOperation.EQUAL;
                        condition.value = value;
                    }
                    value = this.inputSupplier.getBindingValue();
                    if (!ibas.strings.isEmpty(value)) {
                        condition = criteria.conditions.create();
                        condition.alias = businesspartner.bo.Supplier.name;
                        condition.operation = ibas.emConditionOperation.EQUAL;
                        condition.value = value;
                    }
                    this.fireViewEvents(this.fetchDocumentsEvent, criteria);
                }
                private page: sap.m.Page;
                private container: sap.m.NavContainer;
                private pageCommon: sap.m.Page;
                private pageDocument: sap.m.Page;
                private listDocuments: sap.extension.m.Table;
                private inputCustomer: sap.extension.m.Input;
                private inputSupplier: sap.extension.m.Input;
                private inputPostingDate: sap.m.DatePicker;
                private inputDocumentDate: sap.m.DatePicker;
                private inputDeliveryDate: sap.m.DatePicker;
                private buttonHistory: sap.m.Button;

                /** 显示数据 */
                showDocuments(datas: app.InternalReconciliation[]): void {
                    if (ibas.objects.isNull(datas)) {
                        this.container.backToTop();
                    } else {
                        this.listDocuments.setModel(new sap.extension.model.JSONModel(datas));
                    }
                }
                private history: ibas.IList<businesspartner.bo.InternalReconciliation>;
                /** 显示结果 */
                showResults(datas: businesspartner.bo.InternalReconciliation[]): void {
                    if (ibas.objects.isNull(this.history)) {
                        this.history = new ibas.ArrayList<businesspartner.bo.InternalReconciliation>();
                    }
                    this.history.add(datas);
                    this.buttonHistory.destroyCustomData();
                    this.buttonHistory.addCustomData(
                        new sap.m.BadgeCustomData("", {
                            key: "badge",
                            value: this.history.length,
                        })
                    );
                    setTimeout(() => {
                        if (datas.length > 0) {
                            this.fireFetchDocuments();
                        }
                    }, 600);
                }
            }
        }
    }
}

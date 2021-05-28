/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace receiptpayment {
    export namespace ui {
        export namespace m {
            /** 查看视图-收款单 */
            export class ReceiptViewView extends ibas.BOViewView implements app.IReceiptViewView {
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    return this.page = new sap.extension.uxap.DataObjectPageLayout("", {
                        dataInfo: {
                            code: bo.Receipt.BUSINESS_OBJECT_CODE,
                        },
                        userFieldsMode: "text",
                        showFooter: false,
                        headerTitle: new sap.uxap.ObjectPageHeader("", {
                            objectTitle: {
                                path: "docEntry",
                                type: new sap.extension.data.Numeric(),
                                formatter(data: string): any {
                                    return ibas.strings.format("# {0}", data ? data : "0");
                                }
                            },
                            objectSubtitle: {
                                parts: [
                                    {
                                        path: "businessPartnerName",
                                        type: new sap.extension.data.Alphanumeric(),
                                    },
                                    {
                                        path: "businessPartnerCode",
                                        type: new sap.extension.data.Alphanumeric(),
                                        formatter(data: string): any {
                                            if (ibas.strings.isEmpty(data)) {
                                                return "";
                                            }
                                            return ibas.strings.format("({0})", data);
                                        }
                                    }
                                ],
                            },
                            actions: [
                                new sap.uxap.ObjectPageHeaderActionButton("", {
                                    hideText: true,
                                    importance: sap.uxap.Importance.High,
                                    text: ibas.i18n.prop("shell_data_edit"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://edit",
                                    visible: this.mode === ibas.emViewMode.VIEW ? false : true,
                                    press(): void {
                                        that.fireViewEvents(that.editDataEvent);
                                    }
                                }),
                                new sap.uxap.ObjectPageHeaderActionButton("", {
                                    hideText: true,
                                    importance: sap.uxap.Importance.Medium,
                                    text: ibas.i18n.prop("shell_data_services"),
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
                                                let popover: sap.m.Popover = new sap.m.Popover("", {
                                                    showHeader: false,
                                                    placement: sap.m.PlacementType.Bottom,
                                                });
                                                for (let service of services) {
                                                    popover.addContent(new sap.m.Button("", {
                                                        text: ibas.i18n.prop(service.name),
                                                        type: sap.m.ButtonType.Transparent,
                                                        icon: service.icon,
                                                        press(): void {
                                                            service.run();
                                                            popover.close();
                                                        }
                                                    }));
                                                }
                                                popover.addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
                                                popover.openBy(event.getSource(), true);
                                            }
                                        });
                                    }
                                }),
                            ],
                        }).addStyleClass("sapUiNoContentPadding"),
                        headerContent: [
                            new sap.extension.m.ObjectDocumentStatus("", {
                                title: ibas.i18n.prop("bo_receipt_documentstatus"),
                                text: {
                                    path: "documentStatus",
                                    type: new sap.extension.data.DocumentStatus(true),
                                },
                            }),
                            new sap.extension.m.ObjectYesNoStatus("", {
                                title: ibas.i18n.prop("bo_receipt_canceled"),
                                negative: true,
                                text: {
                                    path: "canceled",
                                    type: new sap.extension.data.YesNo(true),
                                },
                                visible: {
                                    path: "canceled",
                                    formatter(data: ibas.emYesNo): boolean {
                                        return data === ibas.emYesNo.YES ? true : false;
                                    }
                                }
                            }),
                            new sap.extension.m.ObjectAttribute("", {
                                title: ibas.i18n.prop("bo_receipt_documentdate"),
                                bindingValue: {
                                    path: "documentDate",
                                    type: new sap.extension.data.Date(),
                                },
                            }),
                            new sap.extension.m.ObjectAttribute("", {
                                title: ibas.i18n.prop("bo_receipt_documenttotal"),
                                bindingValue: {
                                    parts: [
                                        {
                                            path: "documentTotal",
                                            type: new sap.extension.data.Sum(),
                                        },
                                        {
                                            path: "documentCurrency",
                                            type: new sap.extension.data.Alphanumeric()
                                        },
                                    ]
                                }
                            }),
                        ],
                        sections: [
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("materials_title_general"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.ui.layout.form.SimpleForm("", {
                                                editable: false,
                                                width: "auto",
                                                content: [
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_ordertype") }),
                                                    new sap.extension.m.PropertyText("", {
                                                        dataInfo: {
                                                            code: bo.Receipt.BUSINESS_OBJECT_CODE,
                                                        },
                                                        propertyName: "orderType",
                                                    }).bindProperty("bindingValue", {
                                                        path: "orderType",
                                                        type: new sap.extension.data.Alphanumeric()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_reference1") }),
                                                    new sap.extension.m.Text("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "reference1",
                                                        type: new sap.extension.data.Alphanumeric()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_reference2") }),
                                                    new sap.extension.m.Text("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "reference2",
                                                        type: new sap.extension.data.Alphanumeric()
                                                    }),
                                                ]
                                            }).addStyleClass("sapUxAPObjectPageSubSectionAlignContent"),
                                        ]
                                    }),
                                ]
                            }),
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("materials_title_status"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.ui.layout.form.SimpleForm("", {
                                                editable: false,
                                                width: "auto",
                                                content: [
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_documentstatus") }),
                                                    new sap.extension.m.Text("", {
                                                    }).bindProperty("bindingValue", {
                                                        parts: [
                                                            {
                                                                path: "documentStatus",
                                                                type: new sap.extension.data.DocumentStatus(true)
                                                            },
                                                            {
                                                                path: "canceled",
                                                                type: new sap.extension.data.YesNo(true),
                                                                formatter(data: ibas.emYesNo): string {
                                                                    return ibas.emYesNo.YES === data ? ibas.i18n.prop("bo_receipt_canceled") : "";
                                                                },
                                                            },
                                                        ]
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_documentdate") }),
                                                    new sap.extension.m.Text("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "documentDate",
                                                        type: new sap.extension.data.Date()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_deliverydate") }),
                                                    new sap.extension.m.Text("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "deliveryDate",
                                                        type: new sap.extension.data.Date()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_postingdate") }),
                                                    new sap.extension.m.Text("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "postingDate",
                                                        type: new sap.extension.data.Date()
                                                    }),
                                                ]
                                            }).addStyleClass("sapUxAPObjectPageSubSectionAlignContent"),
                                        ]
                                    }),
                                ]
                            }),
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("bo_receiptitem"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            this.listReceiptItem = new sap.extension.m.List("", {
                                                inset: false,
                                                width: "auto",
                                                growing: false,
                                                mode: sap.m.ListMode.None,
                                                swipeDirection: sap.m.SwipeDirection.RightToLeft,
                                                backgroundDesign: sap.m.BackgroundDesign.Transparent,
                                                showNoData: true,
                                                swipeContent: new sap.m.FlexBox("", {
                                                    height: "100%",
                                                    alignItems: sap.m.FlexAlignItems.Start,
                                                    justifyContent: sap.m.FlexJustifyContent.End,
                                                    items: [
                                                        new sap.m.SegmentedButton("", {
                                                            width: "3rem",
                                                            items: [
                                                                new sap.m.SegmentedButtonItem("", {
                                                                    width: "3rem",
                                                                    icon: "sap-icon://sap-box",
                                                                    press(oEvent: any): void {

                                                                    }
                                                                }),
                                                            ]
                                                        }),
                                                    ]
                                                }).addStyleClass("sapUiSmallMarginTop"),
                                                items: {
                                                    path: "/rows",
                                                    template: new sap.m.ObjectListItem("", {
                                                        title: "# {lineId}",
                                                        number: {
                                                            path: "lineStatus",
                                                            type: new sap.extension.data.DocumentStatus(true),
                                                        },
                                                        attributes: [
                                                            new sap.extension.m.ObjectAttribute("", {
                                                                title: ibas.i18n.prop("bo_receiptitem_basedocument"),
                                                                bindingValue: {
                                                                    parts: [
                                                                        {
                                                                            path: "baseDocumentType",
                                                                            type: new sap.extension.data.Alphanumeric(),
                                                                            formatter(data: string): string {
                                                                                return ibas.businessobjects.resource(ibas.businessobjects.name(data));
                                                                            }
                                                                        },
                                                                        {
                                                                            path: "baseDocumentEntry",
                                                                            type: new sap.extension.data.Numeric()
                                                                        },
                                                                        {
                                                                            path: "baseDocumentLineId",
                                                                            type: new sap.extension.data.Numeric()
                                                                        },
                                                                    ]
                                                                }
                                                            }),
                                                            new sap.extension.m.ObjectAttribute("", {
                                                                title: ibas.i18n.prop("bo_receiptitem_mode"),
                                                                bindingValue: {
                                                                    path: "mode",
                                                                    type: new sap.extension.data.Alphanumeric()
                                                                },
                                                            }),
                                                            new sap.extension.m.ObjectAttribute("", {
                                                                title: ibas.i18n.prop("bo_receiptitem_amount"),
                                                                bindingValue: {
                                                                    parts: [
                                                                        {
                                                                            path: "amount",
                                                                            type: new sap.extension.data.Sum(),
                                                                        },
                                                                        {
                                                                            path: "currency",
                                                                            type: new sap.extension.data.Alphanumeric()
                                                                        },
                                                                    ]
                                                                }
                                                            }),
                                                            new sap.extension.m.ObjectAttribute("", {
                                                                bindingValue: {
                                                                    path: "tradeId",
                                                                    type: new sap.extension.data.Alphanumeric(),
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
                                                        ],
                                                        type: sap.m.ListType.Active,
                                                        press: function (oEvent: sap.ui.base.Event): void {
                                                            that.viewReceiptItem(this.getBindingContext().getObject());
                                                        },
                                                    })
                                                }
                                            }).addStyleClass("sapUxAPObjectPageSubSectionAlignContent"),
                                            new sap.ui.layout.form.SimpleForm("", {
                                                editable: false,
                                                width: "auto",
                                                content: [
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_documenttotal") }),
                                                    new sap.extension.m.Text("", {
                                                    }).bindProperty("bindingValue", {
                                                        parts: [
                                                            {
                                                                path: "documentTotal",
                                                                type: new sap.extension.data.Sum()
                                                            },
                                                            {
                                                                path: "documentCurrency",
                                                                type: new sap.extension.data.Alphanumeric()
                                                            },
                                                        ],
                                                    }),
                                                ]
                                            }).addStyleClass("sapUxAPObjectPageSubSectionAlignContent"),
                                        ]
                                    }),
                                ]
                            }),
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("materials_title_others"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.ui.layout.form.SimpleForm("", {
                                                editable: false,
                                                width: "auto",
                                                content: [
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_dataowner") }),
                                                    new sap.extension.m.UserText("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "dataOwner",
                                                        type: new sap.extension.data.Numeric()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_project") }),
                                                    new sap.extension.m.RepositoryText("", {
                                                        repository: accounting.bo.BORepositoryAccounting,
                                                        dataInfo: {
                                                            type: accounting.bo.Project,
                                                            key: accounting.bo.Project.PROPERTY_CODE_NAME,
                                                            text: accounting.bo.Project.PROPERTY_NAME_NAME,
                                                        },
                                                    }).bindProperty("bindingValue", {
                                                        path: "project",
                                                        type: new sap.extension.data.Alphanumeric()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_organization") }),
                                                    new sap.extension.m.OrganizationText("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "organization",
                                                        type: new sap.extension.data.Alphanumeric()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_remarks") }),
                                                    new sap.extension.m.Text("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "remarks",
                                                        type: new sap.extension.data.Alphanumeric()
                                                    }),
                                                ]
                                            }).addStyleClass("sapUxAPObjectPageSubSectionAlignContent"),
                                        ]
                                    }),
                                ]
                            }),
                        ]
                    });
                }

                private page: sap.extension.uxap.ObjectPageLayout;
                private listReceiptItem: sap.extension.m.List;

                /** 显示数据 */
                showReceipt(data: bo.Receipt): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                    // 改变页面状态
                    sap.extension.pages.changeStatus(this.page);
                }
                /** 显示数据（收款单-行） */
                showReceiptItems(datas: bo.ReceiptItem[]): void {
                    this.listReceiptItem.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                }
                /** 编辑数据行（收款单-行） */
                viewReceiptItem(data: bo.ReceiptItem): void {
                    let that: this = this;
                    let editForm: sap.m.Dialog = new sap.m.Dialog("", {
                        title: {
                            path: "lineId",
                            type: new sap.extension.data.Numeric(),
                            formatter(data: string): string {
                                return ibas.strings.format("{0} - {1}", ibas.i18n.prop("bo_receiptitem"), data);
                            }
                        },
                        type: sap.m.DialogType.Standard,
                        state: sap.ui.core.ValueState.None,
                        stretch: ibas.config.get(ibas.CONFIG_ITEM_PLANTFORM) === ibas.emPlantform.PHONE ? true : false,
                        horizontalScrolling: true,
                        verticalScrolling: true,
                        content: [
                            new sap.extension.layout.DataSimpleForm("", {
                                editable: false,
                                userFieldsTitle: "",
                                userFieldsMode: "text",
                                dataInfo: {
                                    code: bo.Receipt.BUSINESS_OBJECT_CODE,
                                    name: bo.ReceiptItem.name,
                                },
                                content: [
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_receiptitem_lineid") }),
                                    new sap.extension.m.Text("", {
                                    }).bindProperty("bindingValue", {
                                        path: "lineId",
                                        type: new sap.extension.data.Numeric(),
                                    }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_receiptitem_linestatus") }),
                                    new sap.extension.m.Text("", {
                                    }).bindProperty("bindingValue", {
                                        path: "lineStatus",
                                        type: new sap.extension.data.DocumentStatus(true),
                                    }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_receiptitem_itemcode") }),
                                    new sap.extension.m.Text("", {
                                    }).bindProperty("bindingValue", {
                                        path: "itemCode",
                                        type: new sap.extension.data.Alphanumeric(),
                                    }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_receiptitem_itemdescription") }),
                                    new sap.extension.m.Text("", {
                                    }).bindProperty("bindingValue", {
                                        path: "itemDescription",
                                        type: new sap.extension.data.Alphanumeric()
                                    }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_receiptitem_warehouse") }),
                                    new sap.extension.m.RepositoryText("", {
                                        repository: materials.bo.BORepositoryMaterials,
                                        dataInfo: {
                                            type: materials.bo.Warehouse,
                                            key: materials.bo.Warehouse.PROPERTY_CODE_NAME,
                                            text: materials.bo.Warehouse.PROPERTY_NAME_NAME
                                        },
                                    }).bindProperty("bindingValue", {
                                        path: "warehouse",
                                        type: new sap.extension.data.Alphanumeric()
                                    }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_receiptitem_quantity") }),
                                    new sap.extension.m.Text("", {
                                    }).bindProperty("bindingValue", {
                                        parts: [
                                            {
                                                path: "quantity",
                                                type: new sap.extension.data.Quantity(),
                                            },
                                            {
                                                path: "uom",
                                                type: new sap.extension.data.Alphanumeric(),
                                            }
                                        ]
                                    }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_receiptitem_price") }),
                                    new sap.extension.m.Text("", {
                                    }).bindProperty("bindingValue", {
                                        parts: [
                                            {
                                                path: "price",
                                                type: new sap.extension.data.Price(),
                                            },
                                            {
                                                path: "currency",
                                                type: new sap.extension.data.Alphanumeric(),
                                            }
                                        ]
                                    }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_receiptitem_linetotal") }),
                                    new sap.extension.m.Text("", {
                                    }).bindProperty("bindingValue", {
                                        parts: [
                                            {
                                                path: "lineTotal",
                                                type: new sap.extension.data.Sum(),
                                            },
                                            {
                                                path: "currency",
                                                type: new sap.extension.data.Alphanumeric(),
                                            }
                                        ]
                                    }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_receiptitem_reference1") }),
                                    new sap.extension.m.Text("", {
                                    }).bindProperty("bindingValue", {
                                        path: "reference1",
                                        type: new sap.extension.data.Alphanumeric(),
                                    }),
                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_receiptitem_reference2") }),
                                    new sap.extension.m.Text("", {
                                    }).bindProperty("bindingValue", {
                                        path: "reference2",
                                        type: new sap.extension.data.Alphanumeric(),
                                    }),
                                ],
                            }),
                        ],
                        buttons: [
                            new sap.m.Button("", {
                                icon: "sap-icon://arrow-left",
                                type: sap.m.ButtonType.Transparent,
                                press(): void {
                                    let model: any = editForm.getModel();
                                    if (model instanceof sap.extension.model.JSONModel) {
                                        let data: any = model.getData();
                                        if (data) {
                                            let datas: any = that.listReceiptItem.getModel().getData("rows");
                                            if (datas instanceof Array && datas.length > 0) {
                                                let index: number = datas.indexOf(data);
                                                index = index <= 0 ? datas.length - 1 : index - 1;
                                                editForm.setModel(new sap.extension.model.JSONModel(datas[index]));
                                            } else {
                                                that.application.viewShower.messages({
                                                    title: that.title,
                                                    type: ibas.emMessageType.WARNING,
                                                    message: ibas.i18n.prop(["shell_please", "shell_data_add_line"]),
                                                });
                                            }
                                        }
                                    }
                                }
                            }),
                            new sap.m.Button("", {
                                icon: "sap-icon://arrow-right",
                                type: sap.m.ButtonType.Transparent,
                                press(): void {
                                    let model: any = editForm.getModel();
                                    if (model instanceof sap.extension.model.JSONModel) {
                                        let data: any = model.getData();
                                        if (data) {
                                            let datas: any = that.listReceiptItem.getModel().getData("rows");
                                            if (datas instanceof Array && datas.length > 0) {
                                                let index: number = datas.indexOf(data);
                                                index = index >= datas.length - 1 ? 0 : index + 1;
                                                editForm.setModel(new sap.extension.model.JSONModel(datas[index]));
                                            } else {
                                                that.application.viewShower.messages({
                                                    title: that.title,
                                                    type: ibas.emMessageType.WARNING,
                                                    message: ibas.i18n.prop(["shell_please", "shell_data_add_line"]),
                                                });
                                            }
                                        }
                                    }
                                }
                            }),
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_exit"),
                                type: sap.m.ButtonType.Transparent,
                                press(): void {
                                    editForm.close();
                                }
                            }),
                        ]
                    }).addStyleClass("sapUiNoContentPadding");
                    editForm.bindObject("/").setModel(new sap.extension.model.JSONModel(data));
                    editForm.open();
                }
            }
        }
    }
}

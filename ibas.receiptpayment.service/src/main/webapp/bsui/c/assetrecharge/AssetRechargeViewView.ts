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
            /** 查看视图-充值 */
            export class AssetRechargeViewView extends ibas.BOViewView implements app.IAssetRechargeViewView {

                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.tableAssetRechargeItem = new sap.extension.m.DataTable("", {
                        dataInfo: {
                            code: bo.AssetRecharge.BUSINESS_OBJECT_CODE,
                            name: bo.AssetRechargeItem.name
                        },
                        columns: [
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_assetrechargeitem_lineid"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_assetrechargeitem_linestatus"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_assetrechargeitem_mode"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_assetrechargeitem_amount"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_assetrechargeitem_tradeid"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_assetrechargeitem_reference1"),
                            }),
                            new sap.extension.m.Column("", {
                                header: ibas.i18n.prop("bo_assetrechargeitem_reference2"),
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
                                    new sap.extension.m.ObjectDocumentStatus("", {
                                        text: {
                                            path: "lineStatus",
                                            type: new sap.extension.data.DocumentStatus(true),
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        bindingValue: {
                                            path: "mode",
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
                                ]
                            }),
                        }
                    });
                    return this.page = new sap.extension.uxap.DataObjectPageLayout("", {
                        dataInfo: {
                            code: bo.AssetRecharge.BUSINESS_OBJECT_CODE,
                        },
                        headerTitle: new sap.uxap.ObjectPageHeader("", {
                            objectTitle: {
                                path: "docEntry",
                                type: new sap.extension.data.Numeric(),
                                formatter(data: string): any {
                                    return ibas.strings.format("# {0}", data);
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
                                            return ibas.strings.format("({0})", data);
                                        }
                                    }
                                ],
                            },
                            navigationBar: new sap.m.Bar("", {
                                contentLeft: [
                                    new sap.m.Button("", {
                                        text: ibas.i18n.prop("shell_data_edit"),
                                        type: sap.m.ButtonType.Transparent,
                                        icon: "sap-icon://edit",
                                        visible: this.mode === ibas.emViewMode.VIEW ? false : true,
                                        press: function (): void {
                                            that.fireViewEvents(that.editDataEvent);
                                        }
                                    })
                                ],
                                contentRight: [
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
                                                    let popover: sap.m.Popover = new sap.m.Popover("", {
                                                        showHeader: false,
                                                        placement: sap.m.PlacementType.Bottom,
                                                    });
                                                    for (let service of services) {
                                                        popover.addContent(new sap.m.Button("", {
                                                            text: ibas.i18n.prop(service.name),
                                                            type: sap.m.ButtonType.Transparent,
                                                            icon: service.icon,
                                                            press: function (): void {
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
                                    })
                                ]
                            }),
                            actions: [
                                new sap.extension.m.ObjectDocumentStatus("", {
                                    title: ibas.i18n.prop("bo_assetrecharge_documentstatus"),
                                    text: {
                                        path: "documentStatus",
                                        type: new sap.extension.data.DocumentStatus(true),
                                    },
                                }),
                                new sap.extension.m.ObjectYesNoStatus("", {
                                    title: ibas.i18n.prop("bo_assetrecharge_canceled"),
                                    negative: true,
                                    text: {
                                        path: "canceled",
                                        type: new sap.extension.data.YesNo(true),
                                    },
                                }),
                                new sap.extension.m.ObjectNumber("", {
                                    number: {
                                        path: "amount",
                                        type: new sap.extension.data.Sum()
                                    },
                                }).addStyleClass("sapMObjectNumberLarge"),
                            ]
                        }),
                        headerContent: [
                            new sap.ui.layout.VerticalLayout("", {
                                width: "30%",
                                content: [
                                    new sap.extension.m.ObjectStatus("", {
                                        title: ibas.i18n.prop("bo_assetrecharge_times"),
                                        text: {
                                            path: "times",
                                            type: new sap.extension.data.Numeric(),
                                        }
                                    }),
                                    new sap.extension.m.PropertyObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_assetrecharge_ordertype"),
                                        bindingValue: {
                                            path: "orderType",
                                            type: new sap.extension.data.Alphanumeric(),
                                        },
                                        dataInfo: {
                                            code: bo.AssetRecharge.BUSINESS_OBJECT_CODE,
                                        },
                                        propertyName: "orderType",
                                    }),
                                ],
                            }),
                            new sap.ui.layout.VerticalLayout("", {
                                width: "30%",
                                content: [
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_assetrecharge_postingdate"),
                                        bindingValue: {
                                            path: "postingDate",
                                            type: new sap.extension.data.Date(),
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_assetrecharge_documentdate"),
                                        bindingValue: {
                                            path: "documentDate",
                                            type: new sap.extension.data.Date(),
                                        }
                                    }),
                                    new sap.extension.m.ObjectAttribute("", {
                                        title: ibas.i18n.prop("bo_assetrecharge_deliverydate"),
                                        bindingValue: {
                                            path: "deliveryDate",
                                            type: new sap.extension.data.Date(),
                                        }
                                    }),
                                ]
                            }),
                        ],
                        sections: [
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("bo_assetrecharge_assetrechargeitems"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            this.tableAssetRechargeItem
                                        ],
                                    })
                                ]
                            }),
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("receiptpayment_title_others"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            new sap.ui.layout.VerticalLayout("", {
                                                content: [
                                                    new sap.extension.m.ObjectAttribute("", {
                                                        title: ibas.i18n.prop("bo_assetrecharge_remarks"),
                                                        bindingValue: {
                                                            path: "remarks",
                                                            type: new sap.extension.data.Alphanumeric(),
                                                        }
                                                    }),
                                                    new sap.extension.m.ObjectAttribute("", {
                                                        title: ibas.i18n.prop("bo_assetrecharge_reference1"),
                                                        bindingValue: {
                                                            path: "reference1",
                                                            type: new sap.extension.data.Alphanumeric(),
                                                        }
                                                    }),
                                                    new sap.extension.m.ObjectAttribute("", {
                                                        title: ibas.i18n.prop("bo_assetrecharge_reference2"),
                                                        bindingValue: {
                                                            path: "reference2",
                                                            type: new sap.extension.data.Alphanumeric(),
                                                        }
                                                    }),
                                                ]
                                            }),
                                            new sap.ui.layout.VerticalLayout("", {
                                                content: [
                                                    new sap.extension.m.UserObjectAttribute("", {
                                                        title: ibas.i18n.prop("bo_assetrecharge_dataowner"),
                                                        bindingValue: {
                                                            path: "dataOwner",
                                                            type: new sap.extension.data.Alphanumeric(),
                                                        }
                                                    }),
                                                    new sap.extension.m.OrganizationObjectAttribute("", {
                                                        title: ibas.i18n.prop("bo_assetrecharge_organization"),
                                                        bindingValue: {
                                                            path: "organization",
                                                            type: new sap.extension.data.Alphanumeric(),
                                                        }
                                                    }),
                                                ]
                                            }),
                                        ],
                                    })
                                ]
                            }),
                        ]
                    });
                }

                private page: sap.extension.uxap.ObjectPageLayout;
                private tableAssetRechargeItem: sap.extension.m.Table;

                /** 显示数据 */
                showAssetRecharge(data: bo.AssetRecharge): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                }
                /** 显示数据-充值-项目 */
                showAssetRechargeItems(datas: bo.AssetRechargeItem[]): void {
                    this.tableAssetRechargeItem.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                }
            }
        }
    }
}

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
            /** 编辑视图-付款单 */
            export class PaymentEditView extends ibas.BOEditView implements app.IPaymentEditView {
                /** 删除数据事件 */
                deleteDataEvent: Function;
                /** 新建数据事件，参数1：是否克隆 */
                createDataEvent: Function;
                /** 添加付款单-行事件 */
                addPaymentItemEvent: Function;
                /** 删除付款单-行事件 */
                removePaymentItemEvent: Function;
                /** 选择付款客户事件 */
                choosePaymentBusinessPartnerEvent: Function;
                /** 选择付款联系人事件 */
                choosePaymentContactPersonEvent: Function;
                /** 选择付款方式项目 */
                choosePaymentItemModeTradeIdEvent: Function;

                draw(): any {
                    let that: this = this;
                    return this.page = new sap.extension.uxap.DataObjectPageLayout("", {
                        dataInfo: {
                            code: bo.Payment.BUSINESS_OBJECT_CODE,
                        },
                        userFieldsMode: "input",
                        showFooter: sap.ui.getCore().getConfiguration().getVersion().getMajor() >= 1
                            && sap.ui.getCore().getConfiguration().getVersion().getMinor() >= 73 ? false : true,
                        footer: new sap.m.Toolbar("", {
                            content: [
                                new sap.m.ToolbarSeparator(""),
                                new sap.m.ToolbarSpacer(""),
                                new sap.m.MenuButton("", {
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://add",
                                    text: ibas.i18n.prop("shell_data_add"),
                                    menu: this.menuDocuments = new sap.m.Menu("", {
                                        items: {
                                            path: "/",
                                            template: new sap.m.MenuItem("", {
                                                text: {
                                                    path: "description",
                                                    type: new sap.extension.data.Alphanumeric(),
                                                },
                                                press: function (this: sap.m.MenuItem): void {
                                                    that.fireViewEvents(that.addPaymentItemEvent, this.getBindingContext().getObject());
                                                }
                                            })
                                        }
                                    })
                                }),
                            ]
                        }),
                        sectionChange(event: sap.ui.base.Event): void {
                            let section: any = event.getParameter("section");
                            if (section instanceof sap.uxap.ObjectPageSection) {
                                if (section.getTitle() === ibas.i18n.prop("bo_paymentitem")) {
                                    that.page.setShowFooter(true);
                                } else {
                                    that.page.setShowFooter(false);
                                }
                            }
                        },
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
                            sideContentButton: new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_data_save"),
                                type: sap.m.ButtonType.Transparent,
                                icon: "sap-icon://save",
                                press(): void {
                                    that.fireViewEvents(that.saveDataEvent);
                                }
                            }),
                            actions: [
                                new sap.uxap.ObjectPageHeaderActionButton("", {
                                    text: ibas.i18n.prop("shell_data_clone"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://copy",
                                    hideText: true,
                                    importance: sap.uxap.Importance.Medium,
                                    press: function (): void {
                                        that.fireViewEvents(that.createDataEvent, true);
                                    }
                                }),
                                new sap.uxap.ObjectPageHeaderActionButton("", {
                                    text: ibas.i18n.prop("shell_data_delete"),
                                    type: sap.m.ButtonType.Transparent,
                                    icon: "sap-icon://delete",
                                    hideText: true,
                                    importance: sap.uxap.Importance.Low,
                                    press: function (): void {
                                        that.fireViewEvents(that.deleteDataEvent);
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
                                }),
                            ],
                        }).addStyleClass("sapUiNoContentPadding"),
                        headerContent: [
                            new sap.extension.m.ObjectApprovalStatus("", {
                                title: ibas.i18n.prop("bo_payment_approvalstatus"),
                                enumValue: {
                                    path: "approvalStatus",
                                    type: new sap.extension.data.ApprovalStatus(),
                                },
                                visible: {
                                    path: "approvalStatus",
                                    formatter(data: ibas.emApprovalStatus): boolean {
                                        return ibas.objects.isNull(data) || data === ibas.emApprovalStatus.UNAFFECTED ? false : true;
                                    }
                                }
                            }),
                            new sap.extension.m.ObjectDocumentCanceledStatus("", {
                                title: ibas.i18n.prop("bo_payment_documentstatus"),
                                canceledStatus: {
                                    path: "canceled",
                                    type: new sap.extension.data.YesNo(),
                                },
                                documentStatus: {
                                    path: "documentStatus",
                                    type: new sap.extension.data.DocumentStatus(),
                                },
                            }),
                            new sap.extension.m.ObjectAttribute("", {
                                title: ibas.i18n.prop("bo_payment_documentdate"),
                                bindingValue: {
                                    path: "documentDate",
                                    type: new sap.extension.data.Date(),
                                },
                            }),
                            new sap.extension.m.ObjectAttribute("", {
                                title: ibas.i18n.prop("bo_payment_documenttotal"),
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
                                                editable: true,
                                                width: "auto",
                                                content: [
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_payment_businesspartnercode") }),
                                                    new sap.extension.m.Input("", {
                                                        showValueHelp: true,
                                                        valueHelpRequest: function (): void {
                                                            that.fireViewEvents(that.choosePaymentBusinessPartnerEvent);
                                                        },
                                                        showValueLink: true,
                                                        valueLinkRequest: function (this: sap.extension.m.Input, event: sap.ui.base.Event): void {
                                                            let object: any = this.getBindingContext().getObject();
                                                            if (object instanceof bo.AssetRecharge) {
                                                                if (object.businessPartnerType === businesspartner.bo.emBusinessPartnerType.CUSTOMER) {
                                                                    ibas.servicesManager.runLinkService({
                                                                        boCode: businesspartner.bo.Customer.BUSINESS_OBJECT_CODE,
                                                                        linkValue: event.getParameter("value")
                                                                    });
                                                                } else if (object.businessPartnerType === businesspartner.bo.emBusinessPartnerType.SUPPLIER) {
                                                                    ibas.servicesManager.runLinkService({
                                                                        boCode: businesspartner.bo.Supplier.BUSINESS_OBJECT_CODE,
                                                                        linkValue: event.getParameter("value")
                                                                    });
                                                                } if (object.businessPartnerType === businesspartner.bo.emBusinessPartnerType.LEAD) {
                                                                    ibas.servicesManager.runLinkService({
                                                                        boCode: businesspartner.bo.Lead.BUSINESS_OBJECT_CODE,
                                                                        linkValue: event.getParameter("value")
                                                                    });
                                                                }
                                                            }
                                                        }
                                                    }).bindProperty("bindingValue", {
                                                        path: "businessPartnerCode",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 20
                                                        })
                                                    }),
                                                    new sap.extension.m.EnumSelect("", {
                                                        enumType: businesspartner.bo.emBusinessPartnerType
                                                    }).bindProperty("bindingValue", {
                                                        path: "businessPartnerType",
                                                        type: new sap.extension.data.Enum({
                                                            enumType: businesspartner.bo.emBusinessPartnerType
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_payment_businesspartnername") }),
                                                    new sap.extension.m.Input("", {
                                                        editable: false,
                                                    }).bindProperty("bindingValue", {
                                                        path: "businessPartnerName",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 200
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_payment_contactperson") }),
                                                    new sap.extension.m.RepositoryInput("", {
                                                        showValueHelp: true,
                                                        repository: businesspartner.bo.BORepositoryBusinessPartner,
                                                        dataInfo: {
                                                            type: businesspartner.bo.ContactPerson,
                                                            key: businesspartner.bo.ContactPerson.PROPERTY_OBJECTKEY_NAME,
                                                            text: businesspartner.bo.ContactPerson.PROPERTY_NAME_NAME
                                                        },
                                                        valueHelpRequest: function (): void {
                                                            that.fireViewEvents(that.choosePaymentContactPersonEvent);
                                                        },
                                                    }).bindProperty("bindingValue", {
                                                        path: "contactPerson",
                                                        type: new sap.extension.data.Numeric()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_payment_ordertype") }),
                                                    new sap.extension.m.PropertySelect("", {
                                                        dataInfo: {
                                                            code: bo.Payment.BUSINESS_OBJECT_CODE,
                                                        },
                                                        propertyName: "orderType",
                                                    }).bindProperty("bindingValue", {
                                                        path: "orderType",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 8
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_payment_reference1") }),
                                                    new sap.extension.m.Input("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "reference1",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 100
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_payment_reference2") }),
                                                    new sap.extension.m.Input("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "reference2",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 200
                                                        })
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
                                                editable: true,
                                                width: "auto",
                                                content: [
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_payment_documentstatus") }),
                                                    new sap.extension.m.EnumSelect("", {
                                                        enumType: ibas.emDocumentStatus
                                                    }).bindProperty("bindingValue", {
                                                        path: "documentStatus",
                                                        type: new sap.extension.data.DocumentStatus()
                                                    }),
                                                    new sap.extension.m.TipsCheckBox("", {
                                                        text: ibas.i18n.prop("bo_payment_canceled"),
                                                        tipsOnSelection: ibas.i18n.prop(["shell_data_cancel", "shell_data_status"]),
                                                    }).bindProperty("bindingValue", {
                                                        path: "canceled",
                                                        type: new sap.extension.data.YesNo()
                                                    }).bindProperty("editable", {
                                                        path: "approvalStatus",
                                                        type: new sap.extension.data.ApprovalStatus(),
                                                        formatter(data: ibas.emApprovalStatus): boolean {
                                                            if (data === ibas.emApprovalStatus.PROCESSING) {
                                                                return false;
                                                            } return true;
                                                        }
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_payment_documentdate") }),
                                                    new sap.extension.m.DatePicker("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "documentDate",
                                                        type: new sap.extension.data.Date()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_payment_deliverydate") }),
                                                    new sap.extension.m.DatePicker("", {
                                                    }).bindProperty("bindingValue", {
                                                        path: "deliveryDate",
                                                        type: new sap.extension.data.Date()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_payment_downpayment") }),
                                                    new sap.extension.m.EnumSelect("", {
                                                        enumType: ibas.emYesNo
                                                    }).bindProperty("bindingValue", {
                                                        path: "downPayment",
                                                        type: new sap.extension.data.YesNo(),
                                                    }),
                                                ]
                                            }).addStyleClass("sapUxAPObjectPageSubSectionAlignContent"),
                                        ]
                                    }),
                                ]
                            }),
                            new sap.uxap.ObjectPageSection("", {
                                title: ibas.i18n.prop("bo_paymentitem"),
                                subSections: [
                                    new sap.uxap.ObjectPageSubSection("", {
                                        blocks: [
                                            this.listPaymentItem = new sap.extension.m.List("", {
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
                                                            items: [
                                                                new sap.m.SegmentedButtonItem("", {
                                                                    width: "3rem",
                                                                    icon: "sap-icon://delete",
                                                                    press(oEvent: any): void {
                                                                        that.fireViewEvents(that.removePaymentItemEvent, that.listPaymentItem.getSelecteds());
                                                                    }
                                                                }),
                                                            ]
                                                        }),
                                                    ]
                                                }).addStyleClass("sapUiSmallMarginTop"),
                                                items: {
                                                    path: "/rows",
                                                    template: new sap.extension.m.DataObjectListItem("", {
                                                        dataInfo: {
                                                            code: bo.Payment.BUSINESS_OBJECT_CODE,
                                                            name: bo.PaymentItem.name
                                                        },
                                                        title: "# {lineId}",
                                                        number: {
                                                            path: "lineStatus",
                                                            type: new sap.extension.data.DocumentStatus(true),
                                                        },
                                                        attributes: [
                                                            new sap.extension.m.ObjectAttribute("", {
                                                                title: ibas.i18n.prop("bo_paymentitem_basedocument"),
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
                                                                title: ibas.i18n.prop("bo_paymentitem_mode"),
                                                                bindingValue: {
                                                                    path: "mode",
                                                                    type: new sap.extension.data.Alphanumeric()
                                                                },
                                                            }),
                                                            new sap.extension.m.ObjectAttribute("", {
                                                                title: ibas.i18n.prop("bo_paymentitem_amount"),
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
                                                                title: ibas.i18n.prop("bo_paymentitem_tradeId"),
                                                                bindingValue: {
                                                                    path: "tradeId",
                                                                    type: new sap.extension.data.Alphanumeric(),
                                                                }
                                                            }),
                                                            new sap.extension.m.ObjectAttribute("", {
                                                                title: ibas.i18n.prop("bo_paymentitem_reference1"),
                                                                bindingValue: {
                                                                    path: "reference1",
                                                                    type: new sap.extension.data.Alphanumeric(),
                                                                }
                                                            }),
                                                            new sap.extension.m.ObjectAttribute("", {
                                                                title: ibas.i18n.prop("bo_paymentitem_reference2"),
                                                                bindingValue: {
                                                                    path: "reference2",
                                                                    type: new sap.extension.data.Alphanumeric(),
                                                                }
                                                            }),
                                                        ],
                                                        type: sap.m.ListType.Active,
                                                        press: function (oEvent: sap.ui.base.Event): void {
                                                            that.editPaymentItem(this.getBindingContext().getObject());
                                                        },
                                                    })
                                                },
                                            }).addStyleClass("sapUxAPObjectPageSubSectionAlignContent"),
                                            new sap.ui.layout.form.SimpleForm("", {
                                                editable: false,
                                                width: "auto",
                                                content: [
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_payment_documenttotal") }),
                                                    new sap.extension.m.Input("", {
                                                        editable: false,

                                                    }).bindProperty("bindingValue", {
                                                        path: "documentTotal",
                                                        type: new sap.extension.data.Sum()
                                                    }),
                                                    new sap.extension.m.CurrencySelect("", {
                                                        editable: false,
                                                    }).bindProperty("bindingValue", {
                                                        path: "documentCurrency",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 8
                                                        })
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
                                                editable: true,
                                                width: "auto",
                                                content: [
                                                    new sap.m.Label("", {
                                                        text: ibas.i18n.prop("bo_payment_branch"),
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
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_payment_dataowner") }),
                                                    new sap.extension.m.DataOwnerInput("", {
                                                        showValueHelp: true,
                                                        organization: {
                                                            path: "organization",
                                                            type: new sap.extension.data.Alphanumeric({
                                                                maxLength: 8
                                                            })
                                                        }
                                                    }).bindProperty("bindingValue", {
                                                        path: "dataOwner",
                                                        type: new sap.extension.data.Numeric()
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_payment_project") }),
                                                    new sap.extension.m.SelectionInput("", {
                                                        showValueHelp: true,
                                                        repository: accounting.bo.BORepositoryAccounting,
                                                        dataInfo: {
                                                            type: accounting.bo.Project,
                                                            key: accounting.bo.Project.PROPERTY_CODE_NAME,
                                                            text: accounting.bo.Project.PROPERTY_NAME_NAME,
                                                        },
                                                        criteria: [
                                                            new ibas.Condition(
                                                                accounting.bo.Project.PROPERTY_DELETED_NAME, ibas.emConditionOperation.NOT_EQUAL, ibas.emYesNo.YES.toString())
                                                        ]
                                                    }).bindProperty("bindingValue", {
                                                        path: "project",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 8
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_payment_organization") }),
                                                    new sap.extension.m.DataOrganizationInput("", {
                                                        width: "100%",
                                                        showValueHelp: true,
                                                    }).bindProperty("bindingValue", {
                                                        path: "organization",
                                                        type: new sap.extension.data.Alphanumeric({
                                                            maxLength: 8
                                                        })
                                                    }),
                                                    new sap.m.Label("", { text: ibas.i18n.prop("bo_payment_remarks") }),
                                                    new sap.extension.m.TextArea("", {
                                                        rows: 3,
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
                private listPaymentItem: sap.extension.m.List;
                private menuDocuments: sap.m.Menu;

                /** 显示数据 */
                showPayment(data: bo.Payment): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                    // 改变页面状态
                    //   sap.extension.pages.changeStatus(this.page);
                }
                /** 显示数据（付款单-行） */
                showPaymentItems(datas: bo.PaymentItem[]): void {
                    this.listPaymentItem.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                }
                /** 显示付款单据 */
                showPaymentDocuments(datas: ibas.IServiceAgent[]): void {
                    this.menuDocuments.setModel(new sap.extension.model.JSONModel(datas));
                }
                /** 编辑数据（付款单-行） */
                editPaymentItem(data: bo.PaymentItem): void {
                    let that: this = this;
                    let editForm: sap.m.Dialog = <any>sap.ui.getCore().byId(this.id + "_editform");
                    if (!(editForm instanceof sap.m.Dialog)) {
                        editForm = new sap.m.Dialog(this.id + "_editform", {
                            title: ibas.strings.format("{0} - {1}", ibas.i18n.prop("bo_paymentitem"), data.lineId),
                            type: sap.m.DialogType.Standard,
                            state: sap.ui.core.ValueState.None,
                            stretch: ibas.config.get(ibas.CONFIG_ITEM_PLANTFORM) === ibas.emPlantform.PHONE ? true : false,
                            horizontalScrolling: true,
                            verticalScrolling: true,
                            content: [
                                new sap.extension.layout.DataSimpleForm("", {
                                    editable: true,
                                    userFieldsTitle: "",
                                    userFieldsMode: "input",
                                    dataInfo: {
                                        code: bo.Payment.BUSINESS_OBJECT_CODE,
                                        name: bo.PaymentItem.name,
                                    },
                                    content: [
                                        new sap.m.Label("", { text: ibas.i18n.prop("bo_paymentitem_lineid") }),
                                        new sap.extension.m.Input("", {
                                            editable: false,

                                        }).bindProperty("bindingValue", {
                                            path: "lineId",
                                            type: new sap.extension.data.Numeric(),
                                        }),
                                        new sap.m.Label("", { text: ibas.i18n.prop("bo_paymentitem_linestatus") }),
                                        new sap.extension.m.EnumSelect("", {
                                            enumType: ibas.emDocumentStatus
                                        }).bindProperty("bindingValue", {
                                            path: "lineStatus",
                                            type: new sap.extension.data.DocumentStatus(),
                                        }),
                                        new sap.m.Label("", { text: ibas.i18n.prop("bo_paymentitem_basedocumenttype") }),
                                        new sap.extension.m.Input("", {
                                            editable: false,
                                        }).bindProperty("bindingValue", {
                                            path: "baseDocumentType",
                                            type: new sap.extension.data.Alphanumeric(),
                                            formatter(data: string): string {
                                                return ibas.businessobjects.resource(ibas.businessobjects.name(data));
                                            }
                                        }),
                                        new sap.m.Label("", { text: ibas.i18n.prop("bo_paymentitem_basedocumententry") }),
                                        new sap.extension.m.Input("", {
                                            editable: false,
                                        }).bindProperty("bindingValue", {
                                            path: "baseDocumentEntry",
                                            type: new sap.extension.data.Numeric()
                                        }),
                                        new sap.m.Label("", { text: ibas.i18n.prop("bo_paymentitem_basedocumentlineid") }),
                                        new sap.extension.m.Input("", {
                                            editable: false,
                                        }).bindProperty("bindingValue", {
                                            path: "baseDocumentLineId",
                                            type: new sap.extension.data.Numeric()
                                        }),
                                        new sap.m.Label("", { text: ibas.i18n.prop("bo_paymentitem_mode") }),
                                        new sap.extension.m.Select("", {
                                            items: component.paymentMethods(),
                                        }).bindProperty("bindingValue", {
                                            path: "mode",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 8
                                            })
                                        }),
                                        new sap.m.Label("", { text: ibas.i18n.prop("bo_paymentitem_amount") }),
                                        new sap.extension.m.Input("", {

                                        }).bindProperty("bindingValue", {
                                            path: "amount",
                                            type: new sap.extension.data.Sum(),
                                        }).bindProperty("description", {
                                            path: "currency",
                                            type: new sap.extension.data.Alphanumeric(),
                                        }),
                                        new sap.m.Label("", { text: ibas.i18n.prop("bo_paymentitem_tradeid") }),
                                        new sap.extension.m.Input("", {
                                            showValueHelp: true,
                                            valueHelpOnly: false,
                                            valueHelpRequest: function (): void {
                                                that.fireViewEvents(that.choosePaymentItemModeTradeIdEvent,
                                                    // 获取当前对象
                                                    this.getBindingContext().getObject()
                                                );
                                            }
                                        }).bindProperty("bindingValue", {
                                            path: "tradeId",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 140
                                            })
                                        }),
                                        new sap.m.Label("", { text: ibas.i18n.prop("bo_paymentitem_reference1") }),
                                        new sap.extension.m.Input("", {
                                        }).bindProperty("bindingValue", {
                                            path: "reference1",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 100
                                            }),
                                        }),
                                        new sap.m.Label("", { text: ibas.i18n.prop("bo_paymentitem_reference2") }),
                                        new sap.extension.m.Input("", {
                                        }).bindProperty("bindingValue", {
                                            path: "reference2",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 200
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                            buttons: [
                                new sap.m.Button("", {
                                    width: "20%",
                                    icon: "sap-icon://arrow-left",
                                    type: sap.m.ButtonType.Transparent,
                                    press: function (): void {
                                        let form: any = editForm.getContent()[0];
                                        if (form instanceof sap.extension.layout.SimpleForm) {
                                            let datas: any = that.listPaymentItem.getModel().getData("rows");
                                            if (datas instanceof Array && datas.length > 0) {
                                                let index: number = datas.indexOf(form.getModel().getData());
                                                index = index <= 0 ? datas.length - 1 : index - 1;
                                                form.setModel(new sap.extension.model.JSONModel(datas[index]));
                                                editForm.setTitle(ibas.strings.format("{0} - {1}", ibas.i18n.prop("bo_paymentitem"), datas[index].lineId));
                                            } else {
                                                that.application.viewShower.messages({
                                                    title: that.title,
                                                    type: ibas.emMessageType.WARNING,
                                                    message: ibas.i18n.prop(["shell_please", "shell_data_add_line"]),
                                                });
                                            }
                                        }
                                    }
                                }),
                                new sap.m.Button("", {
                                    width: "20%",
                                    icon: "sap-icon://arrow-right",
                                    type: sap.m.ButtonType.Transparent,
                                    press: function (): void {
                                        let form: any = editForm.getContent()[0];
                                        if (form instanceof sap.extension.layout.SimpleForm) {
                                            let datas: any = that.listPaymentItem.getModel().getData("rows");
                                            if (datas instanceof Array && datas.length > 0) {
                                                let index: number = datas.indexOf(form.getModel().getData());
                                                index = index >= datas.length - 1 ? 0 : index + 1;
                                                form.setModel(new sap.extension.model.JSONModel(datas[index]));
                                                editForm.setTitle(ibas.strings.format("{0} - {1}", ibas.i18n.prop("bo_paymentitem"), datas[index].lineId));
                                            } else {
                                                that.application.viewShower.messages({
                                                    title: that.title,
                                                    type: ibas.emMessageType.WARNING,
                                                    message: ibas.i18n.prop(["shell_please", "shell_data_add_line"]),
                                                });
                                            }
                                        }
                                    }
                                }),
                                new sap.m.Button("", {
                                    width: "20%",
                                    text: ibas.i18n.prop("shell_data_remove"),
                                    type: sap.m.ButtonType.Transparent,
                                    press: function (): void {
                                        let form: any = editForm.getContent()[0];
                                        if (form instanceof sap.extension.layout.SimpleForm) {
                                            let datas: any = that.listPaymentItem.getModel().getData("rows");
                                            if (datas instanceof Array && datas.length > 0) {
                                                that.fireViewEvents(that.removePaymentItemEvent, form.getModel().getData());
                                                if (datas.length === 1) {
                                                    // 无数据，退出
                                                    (<any>editForm.getButtons()[3]).firePress({});
                                                } else {
                                                    // 下一个
                                                    (<any>editForm.getButtons()[1]).firePress({});
                                                }
                                            }
                                        }
                                    }
                                }),
                                new sap.m.Button("", {
                                    text: ibas.i18n.prop("shell_exit"),
                                    type: sap.m.ButtonType.Transparent,
                                    press(this: sap.m.Button): void {
                                        if (this.getParent() instanceof sap.m.Dialog) {
                                            (<sap.m.Dialog>this.getParent()).close();
                                        } else {
                                            editForm.close();
                                        }
                                    }
                                }),
                            ]
                        }).addStyleClass("sapUiNoContentPadding");
                    }
                    editForm.getContent()[0].setModel(new sap.extension.model.JSONModel(data));
                    editForm.open();
                }
                protected onClosed(): void {
                    super.onClosed();
                    let form: any = sap.ui.getCore().byId(this.id + "_editform");
                    if (form instanceof sap.m.Dialog) {
                        form.destroy();
                    }
                }
            }
        }
    }
}

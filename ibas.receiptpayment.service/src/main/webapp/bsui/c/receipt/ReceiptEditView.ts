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
             * 编辑视图-收款
             */
            export class ReceiptEditView extends ibas.BOEditView implements app.IReceiptEditView {
                /** 删除数据事件 */
                deleteDataEvent: Function;
                /** 新建数据事件，参数1：是否克隆 */
                createDataEvent: Function;
                /** 添加收款-项目事件 */
                addReceiptItemEvent: Function;
                /** 删除收款-项目事件 */
                removeReceiptItemEvent: Function;
                /** 选择收款客户事件 */
                chooseReceiptBusinessPartnerEvent: Function;
                /** 选择收款联系人事件 */
                chooseReceiptContactPersonEvent: Function;
                /** 选择收款方式项目 */
                chooseReceiptItemModeTradeIdEvent: Function;
                /** 转为付款事件 */
                turnToPaymentEvent: Function;

                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    let formTop: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("receiptpayment_title_general") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_businesspartnercode") }),
                            new sap.m.HBox("", {
                                width: "100%",
                                renderType: sap.m.FlexRendertype.Bare,
                                items: [
                                    new sap.extension.m.RepositoryInput("", {
                                        width: "60%",
                                        showValueHelp: true,
                                        valueHelpRequest: function (): void {
                                            that.fireViewEvents(that.chooseReceiptBusinessPartnerEvent);
                                        },
                                        showValueLink: true,
                                        valueLinkRequest: function (event: sap.ui.base.Event): void {
                                            ibas.servicesManager.runLinkService({
                                                boCode: businesspartner.bo.Customer.BUSINESS_OBJECT_CODE,
                                                linkValue: event.getParameter("value")
                                            });
                                        },
                                        describeValue: false,
                                        showSuggestion: true,
                                        repository: businesspartner.bo.BORepositoryBusinessPartner,
                                        dataInfo: {
                                            type: businesspartner.bo.Customer,
                                            key: businesspartner.bo.Customer.PROPERTY_CODE_NAME,
                                            text: businesspartner.bo.Customer.PROPERTY_NAME_NAME
                                        },
                                        suggestionItemSelected: function (this: sap.extension.m.RepositoryInput, event: sap.ui.base.Event): void {
                                            let selectedItem: any = event.getParameter("selectedItem");
                                            if (!ibas.objects.isNull(selectedItem)) {
                                                that.fireViewEvents(that.chooseReceiptBusinessPartnerEvent, this.itemConditions(selectedItem));
                                            }
                                        },
                                        editable: {
                                            parts: [
                                                {
                                                    path: "isNew",
                                                },
                                                {
                                                    path: "documentStatus",
                                                }
                                            ],
                                            formatter(isNew: boolean, documentStatus: ibas.emDocumentStatus): boolean {
                                                return isNew === false && documentStatus > ibas.emDocumentStatus.PLANNED ? false : true;
                                            }
                                        }
                                    }).bindProperty("bindingValue", {
                                        path: "businessPartnerCode",
                                        type: new sap.extension.data.Alphanumeric({
                                            maxLength: 20
                                        })
                                    }).bindProperty("visible", {
                                        path: "businessPartnerType",
                                        formatter(data: any): boolean {
                                            return data === businesspartner.bo.emBusinessPartnerType.CUSTOMER ? true : false;
                                        }
                                    }),
                                    new sap.extension.m.RepositoryInput("", {
                                        width: "60%",
                                        showValueHelp: true,
                                        valueHelpRequest: function (): void {
                                            that.fireViewEvents(that.chooseReceiptBusinessPartnerEvent);
                                        },
                                        showValueLink: true,
                                        valueLinkRequest: function (event: sap.ui.base.Event): void {
                                            ibas.servicesManager.runLinkService({
                                                boCode: businesspartner.bo.Supplier.BUSINESS_OBJECT_CODE,
                                                linkValue: event.getParameter("value")
                                            });
                                        },
                                        describeValue: false,
                                        showSuggestion: true,
                                        repository: businesspartner.bo.BORepositoryBusinessPartner,
                                        dataInfo: {
                                            type: businesspartner.bo.Supplier,
                                            key: businesspartner.bo.Supplier.PROPERTY_CODE_NAME,
                                            text: businesspartner.bo.Supplier.PROPERTY_NAME_NAME
                                        },
                                        suggestionItemSelected: function (this: sap.extension.m.RepositoryInput, event: sap.ui.base.Event): void {
                                            let selectedItem: any = event.getParameter("selectedItem");
                                            if (!ibas.objects.isNull(selectedItem)) {
                                                that.fireViewEvents(that.chooseReceiptBusinessPartnerEvent, this.itemConditions(selectedItem));
                                            }
                                        },
                                    }).bindProperty("bindingValue", {
                                        path: "businessPartnerCode",
                                        type: new sap.extension.data.Alphanumeric({
                                            maxLength: 20
                                        })
                                    }).bindProperty("visible", {
                                        path: "businessPartnerType",
                                        formatter(data: any): boolean {
                                            return data === businesspartner.bo.emBusinessPartnerType.SUPPLIER ? true : false;
                                        }
                                    }),
                                    new sap.extension.m.EnumSelect("", {
                                        width: "40%",
                                        items: [
                                            new sap.extension.m.SelectItem("", {
                                                key: businesspartner.bo.emBusinessPartnerType.CUSTOMER,
                                                text: ibas.enums.describe(businesspartner.bo.emBusinessPartnerType, businesspartner.bo.emBusinessPartnerType.CUSTOMER)
                                            }),
                                            new sap.extension.m.SelectItem("", {
                                                key: businesspartner.bo.emBusinessPartnerType.SUPPLIER,
                                                text: ibas.enums.describe(businesspartner.bo.emBusinessPartnerType, businesspartner.bo.emBusinessPartnerType.SUPPLIER)
                                            })
                                        ]
                                    }).bindProperty("bindingValue", {
                                        path: "businessPartnerType",
                                        type: new sap.extension.data.Enum({
                                            enumType: businesspartner.bo.emBusinessPartnerType
                                        })
                                    }).addStyleClass("sapUiTinyMarginBegin"),
                                ]
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_businesspartnername") }),
                            new sap.extension.m.Input("", {
                                editable: false,
                            }).bindProperty("bindingValue", {
                                path: "businessPartnerName",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 200
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_contactperson") }),
                            new sap.extension.m.RepositoryInput("", {
                                showValueHelp: true,
                                repository: businesspartner.bo.BORepositoryBusinessPartner,
                                dataInfo: {
                                    type: businesspartner.bo.ContactPerson,
                                    key: businesspartner.bo.ContactPerson.PROPERTY_OBJECTKEY_NAME,
                                    text: businesspartner.bo.ContactPerson.PROPERTY_NAME_NAME
                                },
                                valueHelpRequest: function (): void {
                                    that.fireViewEvents(that.chooseReceiptContactPersonEvent);
                                },
                            }).bindProperty("bindingValue", {
                                path: "contactPerson",
                                type: new sap.extension.data.Numeric()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_ordertype") }),
                            new sap.extension.m.PropertySelect("", {
                                dataInfo: {
                                    code: bo.Receipt.BUSINESS_OBJECT_CODE,
                                },
                                propertyName: "orderType",
                            }).bindProperty("bindingValue", {
                                path: "orderType",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 8
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_reference1") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "reference1",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 100
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_reference2") }),
                            new sap.extension.m.Input("", {
                            }).bindProperty("bindingValue", {
                                path: "reference2",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 200
                                })
                            }),
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("receiptpayment_title_status") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_docentry") }),
                            new sap.extension.m.Input("", {
                                editable: false,
                            }).bindProperty("bindingValue", {
                                path: "docEntry",
                                type: new sap.extension.data.Numeric()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_documentstatus") }),
                            new sap.m.FlexBox("", {
                                width: "100%",
                                justifyContent: sap.m.FlexJustifyContent.Start,
                                renderType: sap.m.FlexRendertype.Bare,
                                alignContent: sap.m.FlexAlignContent.Center,
                                alignItems: sap.m.FlexAlignItems.Center,
                                items: [
                                    new sap.extension.m.EnumSelect("", {
                                        enumType: ibas.emDocumentStatus,
                                        width: "100%",
                                    }).bindProperty("bindingValue", {
                                        path: "documentStatus",
                                        type: new sap.extension.data.DocumentStatus()
                                    }).addStyleClass("sapUiSmallMarginEnd"),
                                    new sap.extension.m.TipsCheckBox("", {
                                        text: ibas.i18n.prop("bo_receipt_canceled"),
                                        tipsOnSelection: ibas.i18n.prop(["shell_data_cancel", "shell_data_status"]),
                                    }).bindProperty("bindingValue", {
                                        path: "canceled",
                                        type: new sap.extension.data.YesNo()
                                    }).bindProperty("editable", {
                                        parts: [
                                            {
                                                path: "approvalStatus",
                                                type: new sap.extension.data.ApprovalStatus(),
                                            },
                                            {
                                                path: "documentStatus",
                                                type: new sap.extension.data.DocumentStatus(),
                                            }
                                        ],
                                        formatter(apStatus: ibas.emApprovalStatus, docStatus: ibas.emDocumentStatus): boolean {
                                            if (apStatus === ibas.emApprovalStatus.PROCESSING) {
                                                return false;
                                            }
                                            if (docStatus === ibas.emDocumentStatus.PLANNED) {
                                                return false;
                                            }
                                            return true;
                                        }
                                    }).addStyleClass("sapUiSmallMarginEnd"),
                                    new sap.extension.m.CheckBox("", {
                                        text: ibas.i18n.prop("bo_receipt_printed"),
                                        editable: false,
                                    }).bindProperty("bindingValue", {
                                        path: "printed",
                                        type: new sap.extension.data.YesNo()
                                    }),
                                ]
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_documentdate") }),
                            new sap.extension.m.DatePicker("", {
                            }).bindProperty("bindingValue", {
                                path: "documentDate",
                                type: new sap.extension.data.Date()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_deliverydate") }),
                            new sap.extension.m.DatePicker("", {
                            }).bindProperty("bindingValue", {
                                path: "deliveryDate",
                                type: new sap.extension.data.Date()
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_downpayment") }),
                            new sap.extension.m.EnumSelect("", {
                                enumType: ibas.emYesNo
                            }).bindProperty("bindingValue", {
                                path: "downPayment",
                                type: new sap.extension.data.YesNo(),
                            }),
                        ]
                    });
                    let formReceiptItem: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("bo_receiptitem") }),
                            this.tableReceiptItem = new sap.extension.table.DataTable("", {
                                enableSelectAll: false,
                                visibleRowCount: sap.extension.table.visibleRowCount(8),
                                dataInfo: {
                                    code: bo.Receipt.BUSINESS_OBJECT_CODE,
                                    name: bo.ReceiptItem.name
                                },
                                toolbar: new sap.m.Toolbar("", {
                                    content: [
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
                                                            that.fireViewEvents(that.addReceiptItemEvent, this.getBindingContext().getObject());
                                                        }
                                                    })
                                                }
                                            })
                                        }),
                                        new sap.m.Button("", {
                                            text: ibas.i18n.prop("shell_data_remove"),
                                            type: sap.m.ButtonType.Transparent,
                                            icon: "sap-icon://less",
                                            press: function (): void {
                                                that.fireViewEvents(that.removeReceiptItemEvent, that.tableReceiptItem.getSelecteds());
                                            }
                                        }),
                                    ]
                                }),
                                rows: "{/rows}",
                                columns: [
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_receiptitem_lineid"),
                                        template: new sap.extension.m.Text("", {
                                        }).bindProperty("bindingValue", {
                                            path: "lineId",
                                            type: new sap.extension.data.Numeric()
                                        }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_receiptitem_linestatus"),
                                        template: new sap.extension.m.EnumSelect("", {
                                            enumType: ibas.emDocumentStatus
                                        }).bindProperty("bindingValue", {
                                            path: "lineStatus",
                                            type: new sap.extension.data.DocumentStatus()
                                        }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_receiptitem_basedocument"),
                                        template: new sap.extension.m.DataLink("", {
                                            press(this: sap.f.cards.Header): void {
                                                let data: any = this.getBindingContext().getObject();
                                                if (data instanceof bo.ReceiptItem && data.baseDocumentEntry > 0) {
                                                    ibas.servicesManager.runLinkService({
                                                        boCode: data.baseDocumentType,
                                                        linkValue: data.baseDocumentEntry.toString()
                                                    });
                                                }
                                            }
                                        }).bindProperty("bindingValue", {
                                            parts: [
                                                {
                                                    path: "baseDocumentType",
                                                    type: new sap.extension.data.Alphanumeric({
                                                        maxLength: 30
                                                    }),
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
                                        }),
                                        width: "16rem",
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_receiptitem_mode"),
                                        template: new sap.extension.m.Select("", {
                                            items: component.receiptMethods(),
                                            change(event: sap.ui.base.Event): void {
                                                let item: any = event.getParameter("selectedItem");
                                                let data: any = this.getBindingContext().getObject();
                                                if (data instanceof bo.ReceiptItem) {
                                                    let defalut: number = config.defaultCashFlow(bo.Payment.name, item?.getKey());
                                                    if (defalut >= 0) {
                                                        // 大于0，支持现金流的项目
                                                        if (!(data.cashFlow > 0)) {
                                                            data.cashFlow = defalut;
                                                        }
                                                    } else {
                                                        // 不支持现金流的项目
                                                        if (data.cashFlow > 0) {
                                                            data.cashFlow = 0;
                                                        }
                                                    }
                                                }
                                            }
                                        }).bindProperty("bindingValue", {
                                            path: "mode",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 8
                                            })
                                        }),
                                        width: "12rem",
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_receiptitem_amount"),
                                        template: new sap.extension.m.Input("", {

                                        }).bindProperty("bindingValue", {
                                            path: "amount",
                                            type: new sap.extension.data.Sum()
                                        }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_receiptitem_currency"),
                                        template: new sap.extension.m.CurrencySelect("", {
                                            editable: true,
                                        }).bindProperty("bindingValue", {
                                            path: "currency",
                                            type: new sap.extension.data.Alphanumeric({
                                                maxLength: 8
                                            })
                                        }),
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_receiptitem_tradeid"),
                                        template: new sap.extension.m.Input("", {
                                            showValueHelp: true,
                                            valueHelpOnly: false,
                                            valueHelpRequest: function (): void {
                                                that.fireViewEvents(that.chooseReceiptItemModeTradeIdEvent,
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
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_receiptitem_cashflow"),
                                        template: new sap.extension.m.RepositorySelect("", {
                                            repository: accounting.bo.BORepositoryAccounting,
                                            dataInfo: {
                                                type: accounting.bo.CashFlow,
                                                key: accounting.bo.CashFlow.PROPERTY_SIGN_NAME,
                                                text: accounting.bo.CashFlow.PROPERTY_NAME_NAME
                                            },
                                            criteria: [
                                                new ibas.Condition(accounting.bo.CashFlow.PROPERTY_POSTABLE_NAME, ibas.emConditionOperation.EQUAL, accounting.bo.emPostableType.ACTIVE)
                                            ],
                                        }).bindProperty("bindingValue", {
                                            path: "cashFlow",
                                            type: new sap.extension.data.Numeric(),
                                        }),
                                        width: "14rem",
                                        visible: false,
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_receiptitem_reference1"),
                                        template: new sap.extension.m.Input("", {
                                        }).bindProperty("bindingValue", {
                                            path: "reference1",
                                            type: new sap.extension.data.Alphanumeric()
                                        }),
                                        width: "12rem",
                                    }),
                                    new sap.extension.table.DataColumn("", {
                                        label: ibas.i18n.prop("bo_receiptitem_reference2"),
                                        template: new sap.extension.m.Input("", {
                                        }).bindProperty("bindingValue", {
                                            path: "reference2",
                                            type: new sap.extension.data.Alphanumeric()
                                        }),
                                        width: "16rem",
                                    }),
                                ],
                                sortProperty: "visOrder",
                                sortIntervalStep: 1,
                            })
                        ]
                    });
                    let formBottom: sap.ui.layout.form.SimpleForm = new sap.ui.layout.form.SimpleForm("", {
                        editable: true,
                        content: [
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("receiptpayment_title_others") }),
                            new sap.m.Label("", {
                                text: ibas.i18n.prop("bo_receipt_branch"),
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
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_dataowner") }),
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
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_project") }),
                            new sap.extension.m.SelectionInput("", {
                                showValueHelp: true,
                                repository: accounting.bo.BORepositoryAccounting,
                                dataInfo: {
                                    type: accounting.bo.Project,
                                    key: accounting.bo.Project.PROPERTY_CODE_NAME,
                                    text: accounting.bo.Project.PROPERTY_NAME_NAME,
                                },
                                criteria: [
                                    new ibas.Condition(accounting.bo.Project.PROPERTY_DELETED_NAME, ibas.emConditionOperation.NOT_EQUAL, ibas.emYesNo.YES.toString())
                                ]
                            }).bindProperty("bindingValue", {
                                path: "project",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 20
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_organization") }),
                            new sap.extension.m.DataOrganizationInput("", {
                                width: "100%",
                                showValueHelp: true,
                            }).bindProperty("bindingValue", {
                                path: "organization",
                                type: new sap.extension.data.Alphanumeric({
                                    maxLength: 8
                                })
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_remarks") }),
                            new sap.extension.m.TextArea("", {
                                rows: 3,
                            }).bindProperty("bindingValue", {
                                path: "remarks",
                                type: new sap.extension.data.Alphanumeric()
                            }),
                            new sap.ui.core.Title("", { text: ibas.i18n.prop("receiptpayment_title_total") }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_documenttotal") }),
                            new sap.m.FlexBox("", {
                                width: "100%",
                                justifyContent: sap.m.FlexJustifyContent.Start,
                                renderType: sap.m.FlexRendertype.Bare,
                                alignContent: sap.m.FlexAlignContent.Center,
                                alignItems: sap.m.FlexAlignItems.Center,
                                items: [
                                    new sap.extension.m.Input("", {
                                        width: "70%",
                                        editable: true,
                                    }).bindProperty("bindingValue", {
                                        path: "documentTotal",
                                        type: new sap.extension.data.Sum()
                                    }).addStyleClass("sapUiTinyMarginEnd"),
                                    new sap.extension.m.CurrencyRateSelect("", {
                                        baseCurrency: accounting.config.currency("LOCAL"),
                                        currency: {
                                            path: "documentCurrency",
                                            type: new sap.extension.data.Alphanumeric()
                                        },
                                        rate: {
                                            path: "documentRate",
                                            type: new sap.extension.data.Rate()
                                        },
                                        date: {
                                            path: "documentDate",
                                            type: new sap.extension.data.Date()
                                        }
                                    }),
                                ]
                            }),
                            new sap.m.Label("", { text: ibas.i18n.prop("bo_receipt_closedamount") }),
                            new sap.extension.m.Input("", {
                                editable: false,
                            }).bindProperty("bindingValue", {
                                path: "closedAmount",
                                type: new sap.extension.data.Sum()
                            }),
                        ],
                    });
                    return this.page = new sap.extension.m.DataPage("", {
                        showHeader: false,
                        dataInfo: {
                            code: bo.Receipt.BUSINESS_OBJECT_CODE,
                        },
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
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("shell_data_read"),
                                                icon: "sap-icon://excel-attachment",
                                                press: function (): void {
                                                    // 读取当前对象
                                                    ibas.files.open((files) => {
                                                        that.fireViewEvents(that.createDataEvent, files[0]);
                                                    }, {
                                                        accept: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                                                        multiple: false
                                                    });
                                                }
                                            }),
                                        ],
                                    })
                                }),
                                new sap.m.ToolbarSeparator(),
                                new sap.extension.m.MenuButton("", {
                                    autoHide: true,
                                    text: ibas.i18n.prop("shell_quick_to"),
                                    icon: "sap-icon://generate-shortcut",
                                    type: sap.m.ButtonType.Transparent,
                                    menuPosition: sap.ui.core.Popup.Dock.EndBottom,
                                    menu: new sap.m.Menu("", {
                                        items: [
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("bo_journalentry"),
                                                icon: "sap-icon://credit-card",
                                                press: function (): void {
                                                    let data: any = this.getBindingContext().getObject();
                                                    if (data instanceof bo.Receipt) {
                                                        let criteria: ibas.ICriteria = new ibas.Criteria();
                                                        criteria.result = 1;
                                                        let condition: ibas.ICondition = criteria.conditions.create();
                                                        condition.alias = accounting.bo.JournalEntry.PROPERTY_BASEDOCUMENTTYPE_NAME;
                                                        condition.value = data.objectCode;
                                                        condition = criteria.conditions.create();
                                                        condition.alias = accounting.bo.JournalEntry.PROPERTY_BASEDOCUMENTENTRY_NAME;
                                                        condition.value = data.docEntry.toString();
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
                                            new sap.m.MenuItem("", {
                                                text: ibas.i18n.prop("bo_payment"),
                                                icon: "sap-icon://doc-attachment",
                                                press: function (): void {
                                                    that.fireViewEvents(that.turnToPaymentEvent);
                                                },
                                                visible: shell.app.privileges.canRun({
                                                    id: app.PaymentFunc.FUNCTION_ID,
                                                    name: app.PaymentFunc.FUNCTION_NAME,
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
                            formReceiptItem,
                            formBottom,
                        ]
                    });
                }
                private page: sap.extension.m.Page;
                private tableReceiptItem: sap.extension.table.Table;
                private menuDocuments: sap.m.Menu;

                /** 显示数据 */
                showReceipt(data: bo.Receipt): void {
                    this.page.setModel(new sap.extension.model.JSONModel(data));
                    // 改变页面状态
                    sap.extension.pages.changeStatus(this.page);
                }
                /** 显示数据-收款-项目 */
                showReceiptItems(datas: bo.ReceiptItem[]): void {
                    this.tableReceiptItem.setModel(new sap.extension.model.JSONModel({ rows: datas }));
                }
                /** 显示收款单据 */
                showReceiptDocuments(datas: ibas.IServiceAgent[]): void {
                    this.menuDocuments.setModel(new sap.extension.model.JSONModel(datas));
                }
            }
        }
    }
}
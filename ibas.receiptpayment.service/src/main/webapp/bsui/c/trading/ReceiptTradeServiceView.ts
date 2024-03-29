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
             * 服务视图-收款交易
             */
            export class ReceiptTradeServiceView extends ibas.DialogView implements app.IReceiptTradeServiceView {
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.list = new sap.m.List("", {
                    });
                    return new sap.m.Dialog("", {
                        title: this.title,
                        type: sap.m.DialogType.Standard,
                        state: sap.ui.core.ValueState.None,
                        stretch: ibas.config.get(ibas.CONFIG_ITEM_PLANTFORM) === ibas.emPlantform.PHONE ? true : false,
                        horizontalScrolling: false,
                        verticalScrolling: true,
                        escapeHandler(): void {
                            // 组织esc关闭页面
                        },
                        // contentWidth: "60%",
                        content: [
                            this.list
                        ],
                        buttons: [
                            new sap.m.Button("", {
                                text: ibas.i18n.prop("shell_confirm"),
                                type: sap.m.ButtonType.Transparent,
                                press: function (): void {
                                    that.fireViewEvents(that.closeEvent);
                                }
                            }),
                        ]
                    }).addStyleClass("sapUiNoContentPadding");
                }
                private list: sap.m.List;
                showTradings(tradings: app.ReceiptTrading[]): void {
                    this.list.destroyItems();
                    for (let item of tradings) {
                        this.list.addItem(
                            new sap.m.FeedListItem("", {
                                icon: item.trading.icon,
                                text: ibas.strings.format("{0} {1}",
                                    item.trading.description, item.trading.id),
                                info: ibas.strings.format("{0} {1}",
                                    sap.extension.data.formatValue(sap.extension.data.Sum, item.amount, "string"), item.currency),
                            })
                        );
                    }
                }
            }
        }
    }
}
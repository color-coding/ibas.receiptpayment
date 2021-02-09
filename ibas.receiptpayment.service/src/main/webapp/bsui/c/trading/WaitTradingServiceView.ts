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
             * 服务视图-等待交易
             */
            export class WaitTradingServiceView extends ibas.DialogView implements app.IWaitTradingServiceView {
                /** 完成事件 */
                finishedEvent: Function;
                /** 绘制视图 */
                draw(): any {
                    let that: this = this;
                    this.progress = new sap.m.ProgressIndicator("", {
                        state: sap.ui.core.ValueState.Success
                    });
                    return new sap.m.Dialog("", {
                        title: this.title,
                        type: sap.m.DialogType.Standard,
                        state: sap.ui.core.ValueState.Warning,
                        stretch: ibas.config.get(ibas.CONFIG_ITEM_PLANTFORM) === ibas.emPlantform.PHONE ? true : false,
                        horizontalScrolling: false,
                        verticalScrolling: false,
                        content: [
                            this.progress
                        ],
                    }).addStyleClass("sapUiNoContentPadding");
                }
                private progress: sap.m.ProgressIndicator;
                private interval: number;
                /** 开始 */
                start(): void {
                    let that: this = this;
                    this.interval = setInterval(function (): void {
                        that.progress.setPercentValue(that.progress.getPercentValue() + 10);
                        if (that.progress.getPercentValue() >= 100) {
                            clearInterval(that.interval);
                            that.fireViewEvents(that.finishedEvent);
                        }
                    }, 100);
                }
            }
        }
    }
}
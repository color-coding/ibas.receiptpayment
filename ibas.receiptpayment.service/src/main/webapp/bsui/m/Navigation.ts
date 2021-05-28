/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../index.d.ts" />
/// <reference path="../Component.ts" />
/// <reference path="./payment/index.ts" />
/// <reference path="./receipt/index.ts" />
/// <reference path="./assetrecharge/index.ts" />
/// <reference path="../c/trading/index.ts" />
namespace receiptpayment {
    export namespace ui {
        /**
         * 视图导航
         */
        export class Navigation extends ibas.ViewNavigation {

            /**
             * 创建实例
             * @param id 应用id
             */
            protected newView(id: string): ibas.IView {
                let view: ibas.IView = null;
                switch (id) {
                    case app.PaymentListApp.APPLICATION_ID:
                        view = new m.PaymentListView();
                        break;
                    case app.PaymentChooseApp.APPLICATION_ID:
                        view = new m.PaymentChooseView();
                        break;
                    case app.PaymentEditApp.APPLICATION_ID:
                        view = new m.PaymentEditView();
                        break;
                    case app.PaymentViewApp.APPLICATION_ID:
                        view = new m.PaymentViewView();
                        break;
                    case app.ReceiptListApp.APPLICATION_ID:
                        view = new m.ReceiptListView();
                        break;
                    case app.ReceiptChooseApp.APPLICATION_ID:
                        view = new m.ReceiptChooseView();
                        break;
                    case app.ReceiptEditApp.APPLICATION_ID:
                        view = new m.ReceiptEditView();
                        break;
                    case app.ReceiptViewApp.APPLICATION_ID:
                        view = new m.ReceiptViewView();
                        break;
                    case app.AssetRechargeListApp.APPLICATION_ID:
                        view = new m.AssetRechargeListView();
                        break;
                    case app.AssetRechargeChooseApp.APPLICATION_ID:
                        view = new m.AssetRechargeChooseView();
                        break;
                    case app.AssetRechargeEditApp.APPLICATION_ID:
                        view = new m.AssetRechargeEditView();
                        break;
                    case app.AssetRechargeViewApp.APPLICATION_ID:
                        view = new m.AssetRechargeViewView();
                        break;
                    case app.ReceiptService.APPLICATION_ID:
                        view = new c.ReceiptServiceView();
                        break;
                    case app.ReceiptTradeService.APPLICATION_ID:
                        view = new c.ReceiptTradeServiceView();
                        break;
                    case app.WaitTradingService.APPLICATION_ID:
                        view = new c.WaitTradingServiceView();
                        break;
                    default:
                        break;
                }
                return view;
            }
        }
    }
}

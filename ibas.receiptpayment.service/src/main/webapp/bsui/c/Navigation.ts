/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../../3rdparty/ibas/index.d.ts" />
/// <reference path="../../3rdparty/openui5/index.d.ts" />
/// <reference path="../../index.d.ts" />
/// <reference path="./receipt/index.ts" />
/// <reference path="./payment/index.ts" />
/// <reference path="./assetrecharge/index.ts" />
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
                        view = new c.PaymentListView();
                        break;
                    case app.PaymentChooseApp.APPLICATION_ID:
                        view = new c.PaymentChooseView();
                        break;
                    case app.PaymentViewApp.APPLICATION_ID:
                        view = new c.PaymentViewView();
                        break;
                    case app.PaymentEditApp.APPLICATION_ID:
                        view = new c.PaymentEditView();
                        break;
                    case app.PaymentService.APPLICATION_ID:
                        view = new c.PaymentServiceView();
                        break;
                    case app.ReceiptListApp.APPLICATION_ID:
                        view = new c.ReceiptListView();
                        break;
                    case app.ReceiptChooseApp.APPLICATION_ID:
                        view = new c.ReceiptChooseView();
                        break;
                    case app.ReceiptViewApp.APPLICATION_ID:
                        view = new c.ReceiptViewView();
                        break;
                    case app.ReceiptEditApp.APPLICATION_ID:
                        view = new c.ReceiptEditView();
                        break;
                    case app.ReceiptService.APPLICATION_ID:
                        view = new c.ReceiptServiceView();
                        break;
                    case app.AssetRechargeListApp.APPLICATION_ID:
                        view = new c.AssetRechargeListView();
                        break;
                    case app.AssetRechargeChooseApp.APPLICATION_ID:
                        view = new c.AssetRechargeChooseView();
                        break;
                    case app.AssetRechargeViewApp.APPLICATION_ID:
                        view = new c.AssetRechargeViewView();
                        break;
                    case app.AssetRechargeEditApp.APPLICATION_ID:
                        view = new c.AssetRechargeEditView();
                        break;
                    default:
                        break;
                }
                return view;
            }
        }
    }
}
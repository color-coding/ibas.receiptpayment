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

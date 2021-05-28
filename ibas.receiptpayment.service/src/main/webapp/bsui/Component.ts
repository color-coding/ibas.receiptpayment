/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace receiptpayment {
    export namespace ui {
        export namespace component {
            export function receiptMethods(): sap.ui.core.Item[] {
                let items: sap.ui.core.Item[] = new ibas.ArrayList<sap.ui.core.Item>();
                items.push(new sap.ui.core.Item("", {
                    key: "",
                    text: ibas.i18n.prop("openui5_please_select_data"),
                }));
                for (let item of ibas.servicesManager.getServices(<ibas.IServiceCaller<ibas.IServiceContract>>{
                    proxy: new app.ReceiptMethodProxy()
                })) {
                    items.push(new sap.ui.core.Item("", {
                        key: item.name,
                        text: item.description,
                    }));
                }
                return items;
            }
            export function paymentMethods(): sap.ui.core.Item[] {
                let items: sap.ui.core.Item[] = new ibas.ArrayList<sap.ui.core.Item>();
                items.push(new sap.ui.core.Item("", {
                    key: "",
                    text: ibas.i18n.prop("openui5_please_select_data"),
                }));
                for (let item of ibas.servicesManager.getServices(<ibas.IServiceCaller<ibas.IServiceContract>>{
                    proxy: new app.PaymentMethodProxy()
                })) {
                    items.push(new sap.ui.core.Item("", {
                        key: item.name,
                        text: item.description,
                    }));
                }
                return items;
            }
        }
    }
}
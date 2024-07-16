/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../borep/index.ts" />
/// <reference path="./payment/index.ts" />
/// <reference path="./receipt/index.ts" />
/// <reference path="./assetrecharge/index.ts" />
/// <reference path="./internalreconciliation/index.ts" />
/// <reference path="./trading/index.ts" />
namespace receiptpayment {
    export namespace app {
        /** 属性-导航 */
        const PROPERTY_NAVIGATION: symbol = Symbol("navigation");
        /** 模块控制台 */
        export class Console extends ibas.ModuleConsole {
            /** 构造函数 */
            constructor() {
                super();
                this.id = CONSOLE_ID;
                this.name = CONSOLE_NAME;
                this.version = CONSOLE_VERSION;
                this.copyright = ibas.i18n.prop("shell_license");
            }
            /** 创建视图导航 */
            navigation(): ibas.IViewNavigation {
                return this[PROPERTY_NAVIGATION];
            }
            /** 初始化 */
            protected registers(): void {
                // 注册功能
                this.register(new ReceiptFunc());
                this.register(new PaymentFunc());
                this.register(new AssetRechargeFunc());
                this.register(new InternalReconciliationFunc());
                // 注册服务应用
                this.register(new PaymentChooseServiceMapping());
                this.register(new PaymentLinkServiceMapping());
                this.register(new PaymentEditServiceMapping());
                this.register(new ReceiptChooseServiceMapping());
                this.register(new ReceiptLinkServiceMapping());
                this.register(new ReceiptEditServiceMapping());
                this.register(new ReceiptServiceMapping());
                this.register(new ReceiptTradeServiceMapping());
                this.register(new PaymentServiceMapping());
                this.register(new AssetRechargeChooseServiceMapping());
                this.register(new AssetRechargeLinkServiceMapping());
                this.register(new AssetRechargeEditServiceMapping());
                this.register(new InternalReconciliationChooseServiceMapping());
                this.register(new InternalReconciliationLinkServiceMapping());
                // 注册常驻应用

                // 注册收款方式
                this.register(new ReceiptMethodBPAssetMapping());
                this.register(new ReceiptMethodBankMapping());
                this.register(new ReceiptMethodCashMapping());
                this.register(new ReceiptMethodPOSMapping());
                this.register(new ReceiptMethodCODMapping());
                this.register(new ReceiptMethodCheckMapping());
                this.register(new ReceiptMethodMoneyOrderMapping());
                this.register(new NotBaseOnReceiptServiceMapping());
                // 注册付款方式
                this.register(new PaymentMethodBPAssetMapping());
                this.register(new PaymentMethodCashMapping());
                this.register(new PaymentMethodBankMapping());
                this.register(new PaymentMethodCheckMapping());
                this.register(new PaymentMethodMoneyOrderMapping());
                this.register(new NotBaseOnPaymentServiceMapping());
                this.register(new ReceiptPaymentServiceMapping());
                // 注册测试应用
                if (ibas.config.get(ibas.CONFIG_ITEM_DEBUG_MODE)) {
                    this.register(new WaitTradingServiceMapping());
                }
            }
            /** 运行 */
            run(): void {
                // 加载语言-框架默认
                ibas.i18n.load([
                    this.rootUrl + "resources/languages/receiptpayment.json",
                    this.rootUrl + "resources/languages/bos.json"
                ], () => {
                    // 设置资源属性
                    this.description = ibas.i18n.prop(this.name.toLowerCase());
                    this.icon = ibas.i18n.prop(this.name.toLowerCase() + "_icon");
                    // 先加载ui导航
                    let uiModules: string[] = [];
                    if (!ibas.config.get(ibas.CONFIG_ITEM_DISABLE_PLATFORM_VIEW, false)) {
                        if (this.plantform === ibas.emPlantform.PHONE) {
                            // 使用m类型视图
                            uiModules.push("index.ui.m");
                        }
                    }
                    // 默认使用视图
                    if (uiModules.length === 0) {
                        // 使用c类型视图
                        uiModules.push("index.ui.c");
                    }
                    // 加载视图库
                    this.loadUI(uiModules, (ui) => {
                        // 设置导航
                        this[PROPERTY_NAVIGATION] = new ui.Navigation();
                        // 调用初始化
                        this.initialize();
                    });
                    // 保留基类方法
                    super.run();
                });
            }
        }

        /** 模块控制台，手机端 */
        export class ConsolePhone extends Console {
            /** 初始化 */
            protected registers(): void {
                super.registers();
            }
        }
    }
}
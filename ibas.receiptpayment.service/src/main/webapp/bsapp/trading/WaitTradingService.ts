/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace receiptpayment {
    export namespace app {
        /** 等待交易契约 */
        export interface IWaitTradingContract extends ibas.IServiceContract {
            /** 标题 */
            title: string;
        }
        /** 等待交易服务代理 */
        export class WaitTradingServiceProxy extends ibas.ServiceProxy<IWaitTradingContract> {
        }
        /** 等待交易服务 */
        export class WaitTradingService extends ibas.ServiceWithResultApplication<IWaitTradingServiceView, IWaitTradingContract, any> {
            /** 应用标识 */
            static APPLICATION_ID: string = "16452f4a-f0d6-4f7f-a43e-9023993079db";
            /** 应用名称 */
            static APPLICATION_NAME: string = "receiptpayment_wait_trading";
            /** 构造函数 */
            constructor() {
                super();
                this.id = WaitTradingService.APPLICATION_ID;
                this.name = WaitTradingService.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
                this.view.finishedEvent = this.finished;
            }
            /** 视图显示后 */
            protected viewShowed(): void {
                this.view.start();
            }
            /** 运行服务 */
            runService(contract: IWaitTradingContract): void {
                if (!ibas.strings.isEmpty(contract.title)) {
                    this.description = ibas.strings.format("{0}: {1}", this.description, contract.title);
                }
                this.show();
            }
            private finished(): void {
                this.fireCompleted(undefined);
            }
        }
        /** 视图-等待交易服务 */
        export interface IWaitTradingServiceView extends ibas.IView {
            /** 开始 */
            start(): void;
            /** 完成事件 */
            finishedEvent: Function;
        }
        /** 等待交易服务映射 */
        export class WaitTradingServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = WaitTradingService.APPLICATION_ID;
                this.name = WaitTradingService.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
                this.proxy = WaitTradingServiceProxy;
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract> {
                return new WaitTradingService();
            }
        }
    }
}
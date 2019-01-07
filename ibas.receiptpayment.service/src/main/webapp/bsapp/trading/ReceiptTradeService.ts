/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace receiptpayment {
    export namespace app {
        /** 收款交易服务 */
        export class ReceiptTradeService extends ibas.ServiceApplication<IReceiptTradeServiceView, IReceiptTradeContract> {
            /** 应用标识 */
            static APPLICATION_ID: string = "388eb3e2-d481-4ae2-b629-43f83e51a5b4";
            /** 应用名称 */
            static APPLICATION_NAME: string = "receiptpayment_service_receipt_trade";
            /** 构造函数 */
            constructor() {
                super();
                this.id = ReceiptTradeService.APPLICATION_ID;
                this.name = ReceiptTradeService.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
            }
            /** 注册视图 */
            protected registerView(): void {
                super.registerView();
                // 其他事件
            }
            /** 视图显示后 */
            protected viewShowed(): void {

            }
            private receipt: bo.Receipt;
            /** 运行服务 */
            runService(contract: IReceiptTradeContract): void {
                if (contract.document instanceof bo.Receipt) {
                    this.getTradings(contract.document);
                } else if (contract.document instanceof Number) {
                    let that: this = this;
                    let criteria: ibas.ICriteria = new ibas.Criteria();
                    let condition: ibas.ICondition = criteria.conditions.create();
                    condition.alias = bo.Receipt.PROPERTY_DOCENTRY_NAME;
                    condition.value = contract.document.toString();
                    let boRepository: bo.BORepositoryReceiptPayment = new bo.BORepositoryReceiptPayment();
                    boRepository.fetchReceipt({
                        criteria: criteria,
                        onCompleted(opRslt: ibas.IOperationResult<bo.Receipt>): void {
                            try {
                                if (opRslt.resultCode !== 0) {
                                    throw new Error(opRslt.message);
                                }
                                that.getTradings(opRslt.resultObjects.firstOrDefault());
                            } catch (error) {
                                that.messages(error);
                            }
                        }
                    });
                }
            }
            private tradings: ibas.IList<ReceiptTrading>;
            private getTradings(receipt: bo.Receipt): void {
                try {
                    this.receipt = receipt;
                    let that: this = this;
                    for (let item of this.receipt.receiptItems) {
                        for (let method of ibas.servicesManager.getServices(<ibas.IServiceCaller<ibas.IServiceContract>>{
                            category: item.mode,
                            proxy: new ReceiptMethodProxy({
                                businessPartnerType: this.receipt.businessPartnerType,
                                businessPartnerCode: this.receipt.businessPartnerCode,
                                documentType: this.receipt.objectCode,
                                documentEntry: this.receipt.docEntry,
                                documentLineId: item.lineId,
                                documentTotal: item.amount,
                                documentCurrency: item.currency,
                                documentSummary: this.receipt.remarks,
                            }),
                            onCompleted(opRslt: ibas.IOperationResult<IReceiptTradingMethod>): void {
                                let trade: IReceiptTradingMethod = opRslt.resultObjects.firstOrDefault(c => c.id === item.tradeId);
                                let trading: ReceiptTrading = new ReceiptTrading();
                                trading.trading = trade;
                                trading.amount = item.amount;
                                trading.currency = item.currency;
                                if (ibas.objects.isNull(that.tradings)) {
                                    that.tradings = new ibas.ArrayList<ReceiptTrading>();
                                }
                                that.tradings.add(trading);
                                if (that.receipt.receiptItems.lastOrDefault() === item) {
                                    // 最后一条
                                    that.trade();
                                }
                            }
                        })) {
                            if (method instanceof ReceiptMethod) {
                                if (method.noTrade) {
                                    continue;
                                }
                            }
                            method.run();
                        }
                    }
                } catch (error) {
                    this.messages(error);
                }
            }
            /** 执行交易 */
            private trade(): void {
                if (!ibas.objects.isNull(this.tradings) && this.tradings.length !== 0) {
                    let that: this = this;
                    let tradings: Array<ReceiptTrading> = this.tradings.copyWithin(this.tradings.length, 0);
                    let trade: Function = function (): void {
                        that.showTradings(tradings);
                        let trading: ReceiptTrading = tradings.pop();
                        if (ibas.objects.isNull(trading)) {
                            // 队列处理完成
                        } else if (trading.trading.method.noTrade) {
                            // 不需要进行交易，处理下一条
                            trade();
                        } else {
                            that.proceeding(ibas.emMessageType.INFORMATION,
                                ibas.i18n.prop("receiptpayment_receipt_trading", trading.trading.description, trading.amount));
                            let waiter: any = trading.trading.trade(trading.amount);
                            if (waiter instanceof ibas.Waiter) {
                                waiter.register({
                                    onCompleted(): void {
                                        that.proceeding(ibas.emMessageType.SUCCESS,
                                            ibas.i18n.prop("receiptpayment_receipt_traded", trading.trading.description, trading.amount));
                                        trade();
                                    }
                                });
                                waiter.start();
                            }
                        }
                    };
                    trade();
                } else {
                    this.showTradings(null);
                }
            }
            private showTradings(tradings: Array<ReceiptTrading>): void {
                if (ibas.objects.isNull(this.tradings) || this.tradings.length === 0) {
                    this.messages(ibas.emMessageType.SUCCESS, ibas.i18n.prop("receiptpayment_receipt_trade_completed", this.receipt.docEntry));
                    this.close();
                } else {
                    if (!this.isViewShowed()) {
                        this.show();
                    }
                    this.view.showTradings(tradings);
                }
            }
        }
        /** 视图-收款交易服务 */
        export interface IReceiptTradeServiceView extends ibas.IBOView {
            /** 显示收款交易 */
            showTradings(tradings: ReceiptTrading[]): void;
        }
        /** 收款交易服务映射 */
        export class ReceiptTradeServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor() {
                super();
                this.id = ReceiptTradeService.APPLICATION_ID;
                this.name = ReceiptTradeService.APPLICATION_NAME;
                this.description = ibas.i18n.prop(this.name);
                this.proxy = ReceiptTradingServiceProxy;
            }
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract> {
                return new ReceiptTradeService();
            }
        }
    }
}
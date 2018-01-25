/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
import * as ibas from "ibas/index";
import * as bp from "3rdparty/businesspartner/index";
import * as bo from "../../borep/bo/index";
import { BORepositoryReceiptPayment } from "../../borep/BORepositories";
import { PaymentEditApp } from "./PaymentEditApp";

/** 单据付款服务 */
export class PaymentService extends ibas.ServiceApplication<IPaymentServiceView, bp.IPaymentContract[]> {
    /** 应用标识 */
    static APPLICATION_ID: string = "98b71e07-2f22-4606-8338-a73f6196206b";
    /** 应用名称 */
    static APPLICATION_NAME: string = "receiptpayment_service_payment";
    /** 构造函数 */
    constructor() {
        super();
        this.id = PaymentService.APPLICATION_ID;
        this.name = PaymentService.APPLICATION_NAME;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 注册视图 */
    protected registerView(): void {
        super.registerView();
        // 其他事件
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        // 视图加载完成
    }
    protected workDatas: ibas.List<bp.IPaymentContract>;
    /** 运行服务 */
    runService(contracts: bp.IPaymentContract[]): void {
        this.workDatas = new ibas.ArrayList<bp.IPaymentContract>();
        for (let item of contracts) {
            if (ibas.objects.isNull(item)) {
                continue;
            }
            this.workDatas.add(item);
        }
        if (this.workDatas.length > 0) {
            super.show();
        } else {
            // 没有需要处理的数据
            this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("receiptpayment_no_work_datas_for_payment"));
        }
    }
}
/** 视图-付款 */
export interface IPaymentServiceView extends ibas.IBOView {

}
/** 单据付款服务映射 */
export class PaymentServiceMapping extends ibas.ServiceMapping {
    /** 构造函数 */
    constructor() {
        super();
        this.id = PaymentService.APPLICATION_ID;
        this.name = PaymentService.APPLICATION_NAME;
        this.description = ibas.i18n.prop(this.name);
        this.proxy = bp.PaymentServiceProxy;
    }
    /** 创建服务实例 */
    create(): ibas.IService<ibas.IServiceContract> {
        return new PaymentService();
    }
}


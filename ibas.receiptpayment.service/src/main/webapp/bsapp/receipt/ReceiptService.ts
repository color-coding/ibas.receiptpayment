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
import { ReceiptEditApp } from "./ReceiptEditApp";

/** 单据收款服务 */
export class ReceiptService extends ibas.ServiceApplication<IReceiptServiceView, bp.IReceiptContract[]> {
    /** 应用标识 */
    static APPLICATION_ID: string = "0d0f9266-5d7a-4e10-81be-4da982c15e1a";
    /** 应用名称 */
    static APPLICATION_NAME: string = "receiptpayment_service_payment";
    /** 构造函数 */
    constructor() {
        super();
        this.id = ReceiptService.APPLICATION_ID;
        this.name = ReceiptService.APPLICATION_NAME;
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
    protected workDatas: ibas.List<bp.IReceiptContract>;
    /** 运行服务 */
    runService(contracts: bp.IReceiptContract[]): void {
        this.workDatas = new ibas.ArrayList<bp.IReceiptContract>();
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
            this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("receiptpayment_no_work_datas_for_receipt"));
        }
    }
}
/** 视图-收款 */
export interface IReceiptServiceView extends ibas.IBOView {

}
/** 单据收款服务映射 */
export class ReceiptServiceMapping extends ibas.ServiceMapping {
    /** 构造函数 */
    constructor() {
        super();
        this.id = ReceiptService.APPLICATION_ID;
        this.name = ReceiptService.APPLICATION_NAME;
        this.description = ibas.i18n.prop(this.name);
        this.proxy = bp.ReceiptServiceProxy;
    }
    /** 创建服务实例 */
    create(): ibas.IService<ibas.IServiceContract> {
        return new ReceiptService();
    }
}


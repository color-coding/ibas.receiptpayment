/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as bo from "../../borep/bo/index";
import { BORepositoryReceiptPayment } from "../../borep/BORepositories";
import { BO_CODE_CUSTOMER, BO_CODE_SUPPLIER, ICustomer, ISupplier } from "3rdparty/businesspartner/index";

/** 编辑应用-付款 */
export class PaymentEditApp extends ibas.BOEditApplication<IPaymentEditView, bo.Payment> {

    /** 应用标识 */
    static APPLICATION_ID: string = "101d5699-904c-49b7-9ae4-0f6f3eea0f7c";
    /** 应用名称 */
    static APPLICATION_NAME: string = "receiptpayment_app_payment_edit";
    /** 业务对象编码 */
    static BUSINESS_OBJECT_CODE: string = bo.Payment.BUSINESS_OBJECT_CODE;
    /** 构造函数 */
    constructor() {
        super();
        this.id = PaymentEditApp.APPLICATION_ID;
        this.name = PaymentEditApp.APPLICATION_NAME;
        this.boCode = PaymentEditApp.BUSINESS_OBJECT_CODE;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 注册视图 */
    protected registerView(): void {
        super.registerView();
        // 其他事件
        this.view.deleteDataEvent = this.deleteData;
        this.view.createDataEvent = this.createData;
        this.view.addPaymentItemEvent = this.addPaymentItem;
        this.view.removePaymentItemEvent = this.removePaymentItem;
        this.view.chooseBusinessPartnerEvent = this.chooseBusinessPartner;
    }
    /** 视图显示后 */
    protected viewShowed(): void {
        // 视图加载完成
        if (ibas.objects.isNull(this.editData)) {
            // 创建编辑对象实例
            this.editData = new bo.Payment();
            this.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
        }
        this.view.showPayment(this.editData);
        this.view.showPaymentItems(this.editData.paymentItems.filterDeleted());
    }
    /** 运行,覆盖原方法 */
    run(): void;
    run(data: bo.Payment): void;
    run(): void {
        let that: this = this;
        if (ibas.objects.instanceOf(arguments[0], bo.Payment)) {
            let data: bo.Payment = arguments[0];
            // 新对象直接编辑
            if (data.isNew) {
                that.editData = data;
                that.show();
                return;
            }
            // 尝试重新查询编辑对象
            let criteria: ibas.ICriteria = data.criteria();
            if (!ibas.objects.isNull(criteria) && criteria.conditions.length > 0) {
                // 有效的查询对象查询
                let boRepository: BORepositoryReceiptPayment = new BORepositoryReceiptPayment();
                boRepository.fetchPayment({
                    criteria: criteria,
                    onCompleted(opRslt: ibas.IOperationResult<bo.Payment>): void {
                        let data: bo.Payment;
                        if (opRslt.resultCode === 0) {
                            data = opRslt.resultObjects.firstOrDefault();
                        }
                        if (ibas.objects.instanceOf(data, bo.Payment)) {
                            // 查询到了有效数据
                            that.editData = data;
                            that.show();
                        } else {
                            // 数据重新检索无效
                            that.messages({
                                type: ibas.emMessageType.WARNING,
                                message: ibas.i18n.prop("shell_data_deleted_and_created"),
                                onCompleted(): void {
                                    that.show();
                                }
                            });
                        }
                    }
                });
                // 开始查询数据
                return;
            }
        }
        super.run.apply(this, arguments);
    }
    /** 待编辑的数据 */
    protected editData: bo.Payment;
    /** 保存数据 */
    protected saveData(): void {
        let that: this = this;
        let boRepository: BORepositoryReceiptPayment = new BORepositoryReceiptPayment();
        boRepository.savePayment({
            beSaved: this.editData,
            onCompleted(opRslt: ibas.IOperationResult<bo.Payment>): void {
                try {
                    that.busy(false);
                    if (opRslt.resultCode !== 0) {
                        throw new Error(opRslt.message);
                    }
                    if (opRslt.resultObjects.length === 0) {
                        // 删除成功，释放当前对象
                        that.messages(ibas.emMessageType.SUCCESS,
                            ibas.i18n.prop("shell_data_delete") + ibas.i18n.prop("shell_sucessful"));
                        that.editData = undefined;
                    } else {
                        // 替换编辑对象
                        that.editData = opRslt.resultObjects.firstOrDefault();
                        that.messages(ibas.emMessageType.SUCCESS,
                            ibas.i18n.prop("shell_data_save") + ibas.i18n.prop("shell_sucessful"));
                    }
                    // 刷新当前视图
                    that.viewShowed();
                } catch (error) {
                    that.messages(error);
                }
            }
        });
        this.busy(true);
        this.proceeding(ibas.emMessageType.INFORMATION, ibas.i18n.prop("shell_saving_data"));
    }
    /** 删除数据 */
    protected deleteData(): void {
        let that: this = this;
        this.messages({
            type: ibas.emMessageType.QUESTION,
            title: ibas.i18n.prop(this.name),
            message: ibas.i18n.prop("sys_whether_to_delete"),
            actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
            onCompleted(action: ibas.emMessageAction): void {
                if (action === ibas.emMessageAction.YES) {
                    that.editData.delete();
                    that.saveData();
                }
            }
        });
    }
    /** 新建数据，参数1：是否克隆 */
    protected createData(clone: boolean): void {
        let that: this = this;
        let createData: Function = function (): void {
            if (clone) {
                // 克隆对象
                that.editData = that.editData.clone();
                that.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_cloned_new"));
                that.viewShowed();
            } else {
                // 新建对象
                that.editData = new bo.Payment();
                that.proceeding(ibas.emMessageType.WARNING, ibas.i18n.prop("shell_data_created_new"));
                that.viewShowed();
            }
        };
        if (that.editData.isDirty) {
            this.messages({
                type: ibas.emMessageType.QUESTION,
                title: ibas.i18n.prop(this.name),
                message: ibas.i18n.prop("sys_data_not_saved_whether_to_continue"),
                actions: [ibas.emMessageAction.YES, ibas.emMessageAction.NO],
                onCompleted(action: ibas.emMessageAction): void {
                    if (action === ibas.emMessageAction.YES) {
                        createData();
                    }
                }
            });
        } else {
            createData();
        }
    }
    /** 添加付款-项目事件 */
    addPaymentItem(): void {
        this.editData.paymentItems.create();
        // 仅显示没有标记删除的
        this.view.showPaymentItems(this.editData.paymentItems.filterDeleted());
    }
    /** 删除付款-项目事件 */
    removePaymentItem(items: bo.PaymentItem[]): void {
        // 非数组，转为数组
        if (!(items instanceof Array)) {
            items = [items];
        }
        if (items.length === 0) {
            return;
        }
        // 移除项目
        for (let item of items) {
            if (this.editData.paymentItems.indexOf(item) >= 0) {
                if (item.isNew) {
                    // 新建的移除集合
                    this.editData.paymentItems.remove(item);
                } else {
                    // 非新建标记删除
                    item.delete();
                }
            }
        }
        // 仅显示没有标记删除的
        this.view.showPaymentItems(this.editData.paymentItems.filterDeleted());
    }

    /** 选择付款客户事件 */
    private chooseBusinessPartner(): void {
        let that: this = this;
        if (this.editData.businessPartnerType === bo.emBusinessPartnerType.CUSTOMER) {
            ibas.servicesManager.runChooseService<ICustomer>({
                boCode: BO_CODE_CUSTOMER,
                criteria: [
                ],
                onCompleted(selecteds: ibas.List<ICustomer>): void {
                    let selected: ICustomer = selecteds.firstOrDefault();
                    that.editData.businessPartnerCode = selected.code;
                    that.editData.businessPartnerName = selected.name;
                }
            });
        } else if (this.editData.businessPartnerType === bo.emBusinessPartnerType.SUPPLIER) {
            ibas.servicesManager.runChooseService<ISupplier>({
                boCode: BO_CODE_SUPPLIER,
                criteria: [
                ],
                onCompleted(selecteds: ibas.List<ISupplier>): void {
                    let selected: ICustomer = selecteds.firstOrDefault();
                    that.editData.businessPartnerCode = selected.code;
                    that.editData.businessPartnerName = selected.name;
                }
            });
        }
    }

}
/** 视图-付款 */
export interface IPaymentEditView extends ibas.IBOEditView {
    /** 显示数据 */
    showPayment(data: bo.Payment): void;
    /** 删除数据事件 */
    deleteDataEvent: Function;
    /** 新建数据事件，参数1：是否克隆 */
    createDataEvent: Function;
    /** 添加付款-项目事件 */
    addPaymentItemEvent: Function;
    /** 删除付款-项目事件 */
    removePaymentItemEvent: Function;
    /** 选择付款客户事件 */
    chooseBusinessPartnerEvent: Function;
    /** 显示数据 */
    showPaymentItems(datas: bo.PaymentItem[]): void;
}

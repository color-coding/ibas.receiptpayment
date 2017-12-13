/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    emYesNo,
    emDocumentStatus,
    emBOStatus,
    emApprovalStatus,
    IBusinessObject,
    IBusinessObjects,
    IBOMasterData,
    IBOMasterDataLine,
    IBODocument,
    IBODocumentLine,
    IBOSimple,
    IBOSimpleLine
} from "ibas/index";
import {
    emBusinessPartnerType
} from "../../3rdparty/businesspartner/index";
import {

} from "../Datas";

/** 付款 */
export interface IPayment extends IBODocument {

    /** 凭证编号 */
    docEntry: number;

    /** 期间编号 */
    docNum: number;

    /** 期间 */
    period: number;

    /** 取消 */
    canceled: emYesNo;

    /** 状态 */
    status: emBOStatus;

    /** 审批状态 */
    approvalStatus: emApprovalStatus;

    /** 单据状态 */
    documentStatus: emDocumentStatus;

    /** 对象类型 */
    objectCode: string;

    /** 创建日期 */
    createDate: Date;

    /** 创建时间 */
    createTime: number;

    /** 修改日期 */
    updateDate: Date;

    /** 修改时间 */
    updateTime: number;

    /** 版本 */
    logInst: number;

    /** 服务系列 */
    series: number;

    /** 数据源 */
    dataSource: string;

    /** 创建用户 */
    createUserSign: number;

    /** 修改用户 */
    updateUserSign: number;

    /** 创建动作标识 */
    createActionId: string;

    /** 更新动作标识 */
    updateActionId: string;

    /** 数据所有者 */
    dataOwner: number;

    /** 团队成员 */
    teamMembers: string;

    /** 数据所属组织 */
    organization: string;

    /** 过账日期 */
    postingDate: Date;

    /** 到期日 */
    deliveryDate: Date;

    /** 凭证日期 */
    documentDate: Date;

    /** 参考1 */
    reference1: string;

    /** 参考2 */
    reference2: string;

    /** 备注 */
    remarks: string;

    /** 已引用 */
    referenced: emYesNo;

    /** 已删除 */
    deleted: emYesNo;

    /** 业务伙伴类型 */
    businessPartnerType: emBusinessPartnerType;

    /** 业务伙伴代码 */
    businessPartnerCode: string;

    /** 业务伙伴名称 */
    businessPartnerName: string;

    /** 单据货币 */
    documentCurrency: string;

    /** 单据交换率 */
    documentRate: number;

    /** 单据总计 */
    documentTotal: number;


    /** 付款-项目集合 */
    paymentItems: IPaymentItems;


}

/** 付款-项目 集合 */
export interface IPaymentItems extends IBusinessObjects<IPaymentItem, IPayment> {

    /** 创建并添加子项 */
    create(): IPaymentItem;
}

/** 付款-项目 */
export interface IPaymentItem extends IBODocumentLine {

    /** 编码 */
    docEntry: number;

    /** 行号 */
    lineId: number;

    /** 显示顺序 */
    visOrder: number;

    /** 类型 */
    objectCode: string;

    /** 实例号（版本） */
    logInst: number;

    /** 数据源 */
    dataSource: string;

    /** 取消 */
    canceled: emYesNo;

    /** 状态 */
    status: emBOStatus;

    /** 单据状态 */
    lineStatus: emDocumentStatus;

    /** 创建日期 */
    createDate: Date;

    /** 创建时间 */
    createTime: number;

    /** 修改日期 */
    updateDate: Date;

    /** 修改时间 */
    updateTime: number;

    /** 创建用户 */
    createUserSign: number;

    /** 修改用户 */
    updateUserSign: number;

    /** 创建动作标识 */
    createActionId: string;

    /** 更新动作标识 */
    updateActionId: string;

    /** 参考1 */
    reference1: string;

    /** 参考2 */
    reference2: string;

    /** 已引用 */
    referenced: emYesNo;

    /** 已删除 */
    deleted: emYesNo;

    /** 基于类型 */
    baseDocumentType: string;

    /** 基于标识 */
    baseDocumentEntry: number;

    /** 基于行号 */
    baseDocumentLineId: number;

    /** 原始类型 */
    originalDocumentType: string;

    /** 原始标识 */
    originalDocumentEntry: number;

    /** 原始行号 */
    originalDocumentLineId: number;

    /** 方式 */
    mode: string;

    /** 金额 */
    amount: number;

    /** 币种 */
    currency: string;

    /** 汇率 */
    rate: number;

    /** 银行编码 */
    bankCode: string;

    /** 卡号 */
    cardNumber: string;


}



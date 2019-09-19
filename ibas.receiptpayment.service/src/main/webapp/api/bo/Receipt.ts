/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace receiptpayment {
    export namespace bo {

        /** 收款 */
        export interface IReceipt extends ibas.IBODocument, ibas.IBOUserFields {

            /** 凭证编号 */
            docEntry: number;

            /** 期间编号 */
            docNum: number;

            /** 期间 */
            period: number;

            /** 取消 */
            canceled: ibas.emYesNo;

            /** 状态 */
            status: ibas.emBOStatus;

            /** 审批状态 */
            approvalStatus: ibas.emApprovalStatus;

            /** 单据状态 */
            documentStatus: ibas.emDocumentStatus;

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
            referenced: ibas.emYesNo;

            /** 已删除 */
            deleted: ibas.emYesNo;

            /** 业务伙伴类型 */
            businessPartnerType: businesspartner.bo.emBusinessPartnerType;

            /** 业务伙伴代码 */
            businessPartnerCode: string;

            /** 业务伙伴名称 */
            businessPartnerName: string;

            /** 联系人 */
            contactPerson: number;

            /** 单据货币 */
            documentCurrency: string;

            /** 单据汇率 */
            documentRate: number;

            /** 单据总计 */
            documentTotal: number;

            /** 项目代码 */
            project: string;

            /** 单据类型 */
            orderType: string;

            /** 收款-项目集合 */
            receiptItems: IReceiptItems;

        }

        /** 收款-项目 集合 */
        export interface IReceiptItems extends ibas.IBusinessObjects<IReceiptItem> {

            /** 创建并添加子项 */
            create(): IReceiptItem;
        }

        /** 收款-项目 */
        export interface IReceiptItem extends ibas.IBODocumentLine, ibas.IBOUserFields {

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
            canceled: ibas.emYesNo;

            /** 状态 */
            status: ibas.emBOStatus;

            /** 单据状态 */
            lineStatus: ibas.emDocumentStatus;

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
            referenced: ibas.emYesNo;

            /** 已删除 */
            deleted: ibas.emYesNo;

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

            /** 终端客户 */
            consumer: string;

            /** 方式 */
            mode: string;

            /** 金额 */
            amount: number;

            /** 货币 */
            currency: string;

            /** 汇率 */
            rate: number;

            /** 交易识别码 */
            tradeId: string;

        }
    }
}



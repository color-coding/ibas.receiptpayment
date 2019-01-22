/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    /** 模块-标识 */
    const CONSOLE_ID: string;
    /** 模块-名称 */
    const CONSOLE_NAME: string;
    /** 模块-版本 */
    const CONSOLE_VERSION: string;
    namespace bo {
        /** 业务仓库名称 */
        const BO_REPOSITORY_PURCHASE: string;
        /** 业务对象编码-采购收货 */
        const BO_CODE_PURCHASEDELIVERY: string;
        /** 业务对象编码-采购订单 */
        const BO_CODE_PURCHASEORDER: string;
        /** 业务对象编码-采购退货 */
        const BO_CODE_PURCHASERETURN: string;
        /** 业务对象编码-送货地址 */
        const BO_CODE_SHIPPINGADDRESS: string;
        /** 业务对象编码-采购报价 */
        const BO_CODE_PURCHASEQUOTE: string;
        /** 运输状态 */
        enum emShippingStatus {
            /**
             * 等待
             */
            WAITING = 0,
            /**
             * 运输中
             */
            SHIPPING = 1,
            /**
             * 已送达
             */
            SHIPPED = 2
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace bo {
        /** 采购收货 */
        interface IPurchaseDelivery extends ibas.IBODocument, ibas.IBOUserFields {
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
            /** 供应商代码 */
            supplierCode: string;
            /** 供应商名称 */
            supplierName: string;
            /** 联系人 */
            contactPerson: number;
            /** 折扣 */
            discount: number;
            /** 折扣后总计 */
            discountTotal: number;
            /** 单据货币 */
            documentCurrency: string;
            /** 单据汇率 */
            documentRate: number;
            /** 单据总计 */
            documentTotal: number;
            /** 已付款总计 */
            paidTotal: number;
            /** 价格清单 */
            priceList: number;
            /** 付款条款代码 */
            paymentCode: string;
            /** 舍入 */
            rounding: ibas.emYesNo;
            /** 舍入差额 */
            diffAmount: number;
            /** 项目代码 */
            project: string;
            /** 消费者 */
            consumer: string;
            /** 单据类型 */
            orderType: string;
            /** 采购收货-行集合 */
            purchaseDeliveryItems: IPurchaseDeliveryItems;
            /** 送货地址集合 */
            shippingAddresss: IShippingAddresss;
            /** 基于采购订单 */
            baseDocument(document: IPurchaseOrder): void;
        }
        /** 采购收货-行 集合 */
        interface IPurchaseDeliveryItems extends ibas.IBusinessObjects<IPurchaseDeliveryItem> {
            /** 创建并添加子项 */
            create(): IPurchaseDeliveryItem;
        }
        /** 采购收货-行 */
        interface IPurchaseDeliveryItem extends ibas.IBODocumentLine, materials.bo.IMaterialBatchItemParent, materials.bo.IMaterialSerialItemParent, ibas.IBOUserFields {
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
            /** 物料编码 */
            itemCode: string;
            /** 物料/服务描述 */
            itemDescription: string;
            /** 序号管理 */
            serialManagement: ibas.emYesNo;
            /** 批号管理 */
            batchManagement: ibas.emYesNo;
            /** 数量 */
            quantity: number;
            /** 计量单位 */
            uom: string;
            /** 仓库 */
            warehouse: string;
            /** 价格 */
            price: number;
            /** 货币 */
            currency: string;
            /** 汇率 */
            rate: number;
            /** 行总计 */
            lineTotal: number;
            /** 行交货日期 */
            deliveryDate: Date;
            /** 已清数量 */
            closedQuantity: number;
            /** 行折扣 */
            discount: number;
            /** 已清金额 */
            closedAmount: number;
            /** 科目代码 */
            accountCode: string;
            /** 折扣前价格 */
            unitPrice: number;
            /** 税定义 */
            tax: string;
            /** 税率 */
            taxRate: number;
            /** 税总额 */
            taxTotal: number;
            /** 毛价 */
            grossPrice: number;
            /** 毛总额 */
            grossTotal: number;
            /** 分配规则1 */
            distributionRule1: string;
            /** 分配规则2 */
            distributionRule2: string;
            /** 分配规则3 */
            distributionRule3: string;
            /** 分配规则4 */
            distributionRule4: string;
            /** 分配规则5 */
            distributionRule5: string;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace bo {
        /** 采购订单 */
        interface IPurchaseOrder extends ibas.IBODocument, ibas.IBOUserFields {
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
            /** 供应商代码 */
            supplierCode: string;
            /** 供应商名称 */
            supplierName: string;
            /** 联系人 */
            contactPerson: number;
            /** 折扣 */
            discount: number;
            /** 折扣后总计 */
            discountTotal: number;
            /** 单据货币 */
            documentCurrency: string;
            /** 单据汇率 */
            documentRate: number;
            /** 单据总计 */
            documentTotal: number;
            /** 已付款总计 */
            paidTotal: number;
            /** 价格清单 */
            priceList: number;
            /** 付款条款代码 */
            paymentCode: string;
            /** 舍入 */
            rounding: ibas.emYesNo;
            /** 舍入差额 */
            diffAmount: number;
            /** 项目代码 */
            project: string;
            /** 消费者 */
            consumer: string;
            /** 单据类型 */
            orderType: string;
            /** 采购订单-行集合 */
            purchaseOrderItems: IPurchaseOrderItems;
            /** 送货地址集合 */
            shippingAddresss: IShippingAddresss;
        }
        /** 采购订单-行 集合 */
        interface IPurchaseOrderItems extends ibas.IBusinessObjects<IPurchaseOrderItem> {
            /** 创建并添加子项 */
            create(): IPurchaseOrderItem;
        }
        /** 采购订单-行 */
        interface IPurchaseOrderItem extends ibas.IBODocumentLine, materials.bo.IMaterialBatchItemParent, materials.bo.IMaterialSerialItemParent, ibas.IBOUserFields {
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
            /** 物料编码 */
            itemCode: string;
            /** 物料/服务描述 */
            itemDescription: string;
            /** 序号管理 */
            serialManagement: ibas.emYesNo;
            /** 批号管理 */
            batchManagement: ibas.emYesNo;
            /** 数量 */
            quantity: number;
            /** 计量单位 */
            uom: string;
            /** 仓库 */
            warehouse: string;
            /** 价格 */
            price: number;
            /** 货币 */
            currency: string;
            /** 汇率 */
            rate: number;
            /** 行总计 */
            lineTotal: number;
            /** 行交货日期 */
            deliveryDate: Date;
            /** 已清数量 */
            closedQuantity: number;
            /** 行折扣 */
            discount: number;
            /** 已清金额 */
            closedAmount: number;
            /** 科目代码 */
            accountCode: string;
            /** 折扣前价格 */
            unitPrice: number;
            /** 税定义 */
            tax: string;
            /** 税率 */
            taxRate: number;
            /** 税总额 */
            taxTotal: number;
            /** 毛价 */
            grossPrice: number;
            /** 毛总额 */
            grossTotal: number;
            /** 分配规则1 */
            distributionRule1: string;
            /** 分配规则2 */
            distributionRule2: string;
            /** 分配规则3 */
            distributionRule3: string;
            /** 分配规则4 */
            distributionRule4: string;
            /** 分配规则5 */
            distributionRule5: string;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace bo {
        /** 采购退货 */
        interface IPurchaseReturn extends ibas.IBODocument, ibas.IBOUserFields {
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
            /** 供应商代码 */
            supplierCode: string;
            /** 供应商名称 */
            supplierName: string;
            /** 联系人 */
            contactPerson: number;
            /** 折扣 */
            discount: number;
            /** 折扣后总计 */
            discountTotal: number;
            /** 单据货币 */
            documentCurrency: string;
            /** 单据汇率 */
            documentRate: number;
            /** 单据总计 */
            documentTotal: number;
            /** 已付款总计 */
            paidTotal: number;
            /** 价格清单 */
            priceList: number;
            /** 付款条款代码 */
            paymentCode: string;
            /** 舍入 */
            rounding: ibas.emYesNo;
            /** 舍入差额 */
            diffAmount: number;
            /** 项目代码 */
            project: string;
            /** 消费者 */
            consumer: string;
            /** 单据类型 */
            orderType: string;
            /** 采购退货-行集合 */
            purchaseReturnItems: IPurchaseReturnItems;
            /** 送货地址集合 */
            shippingAddresss: IShippingAddresss;
            /** 基于采购订单 */
            baseDocument(document: IPurchaseOrder): void;
            /** 基于采购收货 */
            baseDocument(document: IPurchaseDelivery): void;
        }
        /** 采购退货-行 集合 */
        interface IPurchaseReturnItems extends ibas.IBusinessObjects<IPurchaseReturnItem> {
            /** 创建并添加子项 */
            create(): IPurchaseReturnItem;
        }
        /** 采购退货-行 */
        interface IPurchaseReturnItem extends ibas.IBODocumentLine, materials.bo.IMaterialBatchItemParent, materials.bo.IMaterialSerialItemParent, ibas.IBOUserFields {
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
            /** 物料编码 */
            itemCode: string;
            /** 物料/服务描述 */
            itemDescription: string;
            /** 序号管理 */
            serialManagement: ibas.emYesNo;
            /** 批号管理 */
            batchManagement: ibas.emYesNo;
            /** 数量 */
            quantity: number;
            /** 计量单位 */
            uom: string;
            /** 仓库 */
            warehouse: string;
            /** 价格 */
            price: number;
            /** 货币 */
            currency: string;
            /** 汇率 */
            rate: number;
            /** 行总计 */
            lineTotal: number;
            /** 行交货日期 */
            deliveryDate: Date;
            /** 已清数量 */
            closedQuantity: number;
            /** 行折扣 */
            discount: number;
            /** 已清金额 */
            closedAmount: number;
            /** 科目代码 */
            accountCode: string;
            /** 折扣前价格 */
            unitPrice: number;
            /** 税定义 */
            tax: string;
            /** 税率 */
            taxRate: number;
            /** 税总额 */
            taxTotal: number;
            /** 毛价 */
            grossPrice: number;
            /** 毛总额 */
            grossTotal: number;
            /** 分配规则1 */
            distributionRule1: string;
            /** 分配规则2 */
            distributionRule2: string;
            /** 分配规则3 */
            distributionRule3: string;
            /** 分配规则4 */
            distributionRule4: string;
            /** 分配规则5 */
            distributionRule5: string;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace bo {
        /** 采购报价 */
        interface IPurchaseQuote extends ibas.IBODocument, ibas.IBOUserFields {
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
            /** 供应商代码 */
            supplierCode: string;
            /** 供应商名称 */
            supplierName: string;
            /** 联系人 */
            contactPerson: number;
            /** 折扣 */
            discount: number;
            /** 折扣后总计 */
            discountTotal: number;
            /** 单据货币 */
            documentCurrency: string;
            /** 单据汇率 */
            documentRate: number;
            /** 单据总计 */
            documentTotal: number;
            /** 已付款总计 */
            paidTotal: number;
            /** 价格清单 */
            priceList: number;
            /** 付款条款代码 */
            paymentCode: string;
            /** 舍入 */
            rounding: ibas.emYesNo;
            /** 舍入差额 */
            diffAmount: number;
            /** 项目代码 */
            project: string;
            /** 消费者 */
            consumer: string;
            /** 单据类型 */
            orderType: string;
            /** 采购报价-行集合 */
            purchaseQuoteItems: IPurchaseQuoteItems;
        }
        /** 采购报价-行 集合 */
        interface IPurchaseQuoteItems extends ibas.IBusinessObjects<IPurchaseQuoteItem> {
            /** 创建并添加子项 */
            create(): IPurchaseQuoteItem;
        }
        /** 采购报价-行 */
        interface IPurchaseQuoteItem extends ibas.IBODocumentLine, ibas.IBOUserFields {
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
            /** 物料编码 */
            itemCode: string;
            /** 物料/服务描述 */
            itemDescription: string;
            /** 序号管理 */
            serialManagement: ibas.emYesNo;
            /** 批号管理 */
            batchManagement: ibas.emYesNo;
            /** 数量 */
            quantity: number;
            /** 计量单位 */
            uom: string;
            /** 仓库 */
            warehouse: string;
            /** 价格 */
            price: number;
            /** 货币 */
            currency: string;
            /** 汇率 */
            rate: number;
            /** 行总计 */
            lineTotal: number;
            /** 行交货日期 */
            deliveryDate: Date;
            /** 已清数量 */
            closedQuantity: number;
            /** 行折扣 */
            discount: number;
            /** 已清金额 */
            closedAmount: number;
            /** 科目代码 */
            accountCode: string;
            /** 折扣前价格 */
            unitPrice: number;
            /** 税定义 */
            tax: string;
            /** 税率 */
            taxRate: number;
            /** 税总额 */
            taxTotal: number;
            /** 毛价 */
            grossPrice: number;
            /** 毛总额 */
            grossTotal: number;
            /** 分配规则1 */
            distributionRule1: string;
            /** 分配规则2 */
            distributionRule2: string;
            /** 分配规则3 */
            distributionRule3: string;
            /** 分配规则4 */
            distributionRule4: string;
            /** 分配规则5 */
            distributionRule5: string;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace bo {
        /** 送货地址 */
        interface IShippingAddress extends ibas.IBOSimple, ibas.IBOUserFields {
            /** 基于类型 */
            baseDocumentType: string;
            /** 基于标识 */
            baseDocumentEntry: number;
            /** 名称 */
            name: string;
            /** 顺序 */
            order: number;
            /** 送货状态 */
            shippingStatus: emShippingStatus;
            /** 收货人 */
            consignee: string;
            /** 街道 */
            street: string;
            /** 县/区 */
            district: string;
            /** 市 */
            city: string;
            /** 省 */
            province: string;
            /** 国 */
            country: string;
            /** 邮编 */
            zipCode: string;
            /** 联系电话 */
            mobilePhone: string;
            /** 电话  */
            telephone: string;
            /** 备注 1 */
            remark1: string;
            /** 备注 2 */
            remark2: string;
            /** 费用 */
            expense: number;
            /** 货币 */
            currency: string;
            /** 快递单号 */
            trackingNumber: string;
            /** 对象编号 */
            objectKey: number;
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
            /** 实例号（版本） */
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
        }
        /** 送货地址 集合 */
        interface IShippingAddresss extends ibas.IBusinessObjects<IShippingAddress> {
            /** 创建并添加子项 */
            create(): IShippingAddress;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace bo {
        /** 业务仓库 */
        interface IBORepositoryPurchase extends ibas.IBORepositoryApplication {
            /**
             * 上传文件
             * @param caller 调用者
             */
            upload(caller: ibas.IUploadFileCaller<ibas.FileData>): void;
            /**
             * 下载文件
             * @param caller 调用者
             */
            download(caller: ibas.IDownloadFileCaller<Blob>): void;
            /**
             * 查询 采购收货
             * @param fetcher 查询者
             */
            fetchPurchaseDelivery(fetcher: ibas.IFetchCaller<bo.IPurchaseDelivery>): void;
            /**
             * 保存 采购收货
             * @param saver 保存者
             */
            savePurchaseDelivery(saver: ibas.ISaveCaller<bo.IPurchaseDelivery>): void;
            /**
             * 查询 采购订单
             * @param fetcher 查询者
             */
            fetchPurchaseOrder(fetcher: ibas.IFetchCaller<bo.IPurchaseOrder>): void;
            /**
             * 保存 采购订单
             * @param saver 保存者
             */
            savePurchaseOrder(saver: ibas.ISaveCaller<bo.IPurchaseOrder>): void;
            /**
             * 查询 采购退货
             * @param fetcher 查询者
             */
            fetchPurchaseReturn(fetcher: ibas.IFetchCaller<bo.IPurchaseReturn>): void;
            /**
             * 保存 采购退货
             * @param saver 保存者
             */
            savePurchaseReturn(saver: ibas.ISaveCaller<bo.IPurchaseReturn>): void;
            /**
             * 查询 采购报价
             * @param fetcher 查询者
             */
            fetchPurchaseQuote(fetcher: ibas.IFetchCaller<bo.IPurchaseQuote>): void;
            /**
             * 保存 采购报价
             * @param saver 保存者
             */
            savePurchaseQuote(saver: ibas.ISaveCaller<bo.IPurchaseQuote>): void;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace bo {
        /** 采购收货 */
        class PurchaseDelivery extends ibas.BODocument<PurchaseDelivery> implements IPurchaseDelivery, ibas.IConvertedData {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-凭证编号 */
            static PROPERTY_DOCENTRY_NAME: string;
            /** 获取-凭证编号 */
            /** 设置-凭证编号 */
            docEntry: number;
            /** 映射的属性名称-期间编号 */
            static PROPERTY_DOCNUM_NAME: string;
            /** 获取-期间编号 */
            /** 设置-期间编号 */
            docNum: number;
            /** 映射的属性名称-期间 */
            static PROPERTY_PERIOD_NAME: string;
            /** 获取-期间 */
            /** 设置-期间 */
            period: number;
            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string;
            /** 获取-取消 */
            /** 设置-取消 */
            canceled: ibas.emYesNo;
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            /** 设置-状态 */
            status: ibas.emBOStatus;
            /** 映射的属性名称-审批状态 */
            static PROPERTY_APPROVALSTATUS_NAME: string;
            /** 获取-审批状态 */
            /** 设置-审批状态 */
            approvalStatus: ibas.emApprovalStatus;
            /** 映射的属性名称-单据状态 */
            static PROPERTY_DOCUMENTSTATUS_NAME: string;
            /** 获取-单据状态 */
            /** 设置-单据状态 */
            documentStatus: ibas.emDocumentStatus;
            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-对象类型 */
            /** 设置-对象类型 */
            objectCode: string;
            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string;
            /** 获取-创建日期 */
            /** 设置-创建日期 */
            createDate: Date;
            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string;
            /** 获取-创建时间 */
            /** 设置-创建时间 */
            createTime: number;
            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-修改日期 */
            /** 设置-修改日期 */
            updateDate: Date;
            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-修改时间 */
            /** 设置-修改时间 */
            updateTime: number;
            /** 映射的属性名称-版本 */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-版本 */
            /** 设置-版本 */
            logInst: number;
            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string;
            /** 获取-服务系列 */
            /** 设置-服务系列 */
            series: number;
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            /** 设置-数据源 */
            dataSource: string;
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            /** 设置-创建用户 */
            createUserSign: number;
            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-修改用户 */
            /** 设置-修改用户 */
            updateUserSign: number;
            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string;
            /** 获取-创建动作标识 */
            /** 设置-创建动作标识 */
            createActionId: string;
            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string;
            /** 获取-更新动作标识 */
            /** 设置-更新动作标识 */
            updateActionId: string;
            /** 映射的属性名称-数据所有者 */
            static PROPERTY_DATAOWNER_NAME: string;
            /** 获取-数据所有者 */
            /** 设置-数据所有者 */
            dataOwner: number;
            /** 映射的属性名称-团队成员 */
            static PROPERTY_TEAMMEMBERS_NAME: string;
            /** 获取-团队成员 */
            /** 设置-团队成员 */
            teamMembers: string;
            /** 映射的属性名称-数据所属组织 */
            static PROPERTY_ORGANIZATION_NAME: string;
            /** 获取-数据所属组织 */
            /** 设置-数据所属组织 */
            organization: string;
            /** 映射的属性名称-过账日期 */
            static PROPERTY_POSTINGDATE_NAME: string;
            /** 获取-过账日期 */
            /** 设置-过账日期 */
            postingDate: Date;
            /** 映射的属性名称-到期日 */
            static PROPERTY_DELIVERYDATE_NAME: string;
            /** 获取-到期日 */
            /** 设置-到期日 */
            deliveryDate: Date;
            /** 映射的属性名称-凭证日期 */
            static PROPERTY_DOCUMENTDATE_NAME: string;
            /** 获取-凭证日期 */
            /** 设置-凭证日期 */
            documentDate: Date;
            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string;
            /** 获取-参考1 */
            /** 设置-参考1 */
            reference1: string;
            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string;
            /** 获取-参考2 */
            /** 设置-参考2 */
            reference2: string;
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            /** 设置-备注 */
            remarks: string;
            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string;
            /** 获取-已引用 */
            /** 设置-已引用 */
            referenced: ibas.emYesNo;
            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string;
            /** 获取-已删除 */
            /** 设置-已删除 */
            deleted: ibas.emYesNo;
            /** 映射的属性名称-供应商代码 */
            static PROPERTY_SUPPLIERCODE_NAME: string;
            /** 获取-供应商代码 */
            /** 设置-供应商代码 */
            supplierCode: string;
            /** 映射的属性名称-供应商名称 */
            static PROPERTY_SUPPLIERNAME_NAME: string;
            /** 获取-供应商名称 */
            /** 设置-供应商名称 */
            supplierName: string;
            /** 映射的属性名称-联系人 */
            static PROPERTY_CONTACTPERSON_NAME: string;
            /** 获取-联系人 */
            /** 设置-联系人 */
            contactPerson: number;
            /** 映射的属性名称-折扣 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-折扣 */
            /** 设置-折扣 */
            discount: number;
            /** 映射的属性名称-折扣后总计 */
            static PROPERTY_DISCOUNTTOTAL_NAME: string;
            /** 获取-折扣后总计 */
            /** 设置-折扣后总计 */
            discountTotal: number;
            /** 映射的属性名称-单据货币 */
            static PROPERTY_DOCUMENTCURRENCY_NAME: string;
            /** 获取-单据货币 */
            /** 设置-单据货币 */
            documentCurrency: string;
            /** 映射的属性名称-单据汇率 */
            static PROPERTY_DOCUMENTRATE_NAME: string;
            /** 获取-单据汇率 */
            /** 设置-单据汇率 */
            documentRate: number;
            /** 映射的属性名称-单据总计 */
            static PROPERTY_DOCUMENTTOTAL_NAME: string;
            /** 获取-单据总计 */
            /** 设置-单据总计 */
            documentTotal: number;
            /** 映射的属性名称-已付款总计 */
            static PROPERTY_PAIDTOTAL_NAME: string;
            /** 获取-已付款总计 */
            /** 设置-已付款总计 */
            paidTotal: number;
            /** 映射的属性名称-价格清单 */
            static PROPERTY_PRICELIST_NAME: string;
            /** 获取-价格清单 */
            /** 设置-价格清单 */
            priceList: number;
            /** 映射的属性名称-付款条款代码 */
            static PROPERTY_PAYMENTCODE_NAME: string;
            /** 获取-付款条款代码 */
            /** 设置-付款条款代码 */
            paymentCode: string;
            /** 映射的属性名称-舍入 */
            static PROPERTY_ROUNDING_NAME: string;
            /** 获取-舍入 */
            /** 设置-舍入 */
            rounding: ibas.emYesNo;
            /** 映射的属性名称-舍入差额 */
            static PROPERTY_DIFFAMOUNT_NAME: string;
            /** 获取-舍入差额 */
            /** 设置-舍入差额 */
            diffAmount: number;
            /** 映射的属性名称-项目代码 */
            static PROPERTY_PROJECT_NAME: string;
            /** 获取-项目代码 */
            /** 设置-项目代码 */
            project: string;
            /** 映射的属性名称-消费者 */
            static PROPERTY_CONSUMER_NAME: string;
            /** 获取-消费者 */
            /** 设置-消费者 */
            consumer: string;
            /** 映射的属性名称-单据类型 */
            static PROPERTY_ORDERTYPE_NAME: string;
            /** 获取-单据类型 */
            /** 设置-单据类型 */
            orderType: string;
            /** 映射的属性名称-采购收货-行集合 */
            static PROPERTY_PURCHASEDELIVERYITEMS_NAME: string;
            /** 获取-采购收货-行集合 */
            /** 设置-采购收货-行集合 */
            purchaseDeliveryItems: PurchaseDeliveryItems;
            /** 映射的属性名称-送货地址集合 */
            static PROPERTY_SHIPPINGADDRESSS_NAME: string;
            /** 获取-送货地址集合 */
            /** 设置-送货地址集合 */
            shippingAddresss: ShippingAddresss;
            /** 初始化数据 */
            protected init(): void;
            /** 映射的属性名称-项目的税总计 */
            static PROPERTY_ITEMSTAXTOTAL_NAME: string;
            /** 获取-项目的税总计 */
            /** 设置-项目的税总计 */
            itemsTaxTotal: number;
            /** 映射的属性名称-项目的行总计 */
            static PROPERTY_ITEMSLINETOTAL_NAME: string;
            /** 获取-项目的行总计 */
            /** 设置-项目的行总计 */
            itemsLineTotal: number;
            /** 映射的属性名称-运送费用总计 */
            static PROPERTY_SHIPPINGSEXPENSETOTAL_NAME: string;
            /** 获取-运送费用总计 */
            /** 设置-运送费用总计 */
            shippingsExpenseTotal: number;
            protected registerRules(): ibas.IBusinessRule[];
            /** 转换之前 */
            beforeConvert(): void;
            /** 数据解析后 */
            afterParsing(): void;
            /** 基于采购订单 */
            baseDocument(document: IPurchaseOrder): void;
        }
        /** 采购收货-行 集合 */
        class PurchaseDeliveryItems extends ibas.BusinessObjects<PurchaseDeliveryItem, PurchaseDelivery> implements IPurchaseDeliveryItems {
            /** 创建并添加子项 */
            create(): PurchaseDeliveryItem;
        }
        /** 采购收货-行 */
        class PurchaseDeliveryItem extends ibas.BODocumentLine<PurchaseDeliveryItem> implements IPurchaseDeliveryItem {
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-编码 */
            static PROPERTY_DOCENTRY_NAME: string;
            /** 获取-编码 */
            /** 设置-编码 */
            docEntry: number;
            /** 映射的属性名称-行号 */
            static PROPERTY_LINEID_NAME: string;
            /** 获取-行号 */
            /** 设置-行号 */
            lineId: number;
            /** 映射的属性名称-显示顺序 */
            static PROPERTY_VISORDER_NAME: string;
            /** 获取-显示顺序 */
            /** 设置-显示顺序 */
            visOrder: number;
            /** 映射的属性名称-类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-类型 */
            /** 设置-类型 */
            objectCode: string;
            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-实例号（版本） */
            /** 设置-实例号（版本） */
            logInst: number;
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            /** 设置-数据源 */
            dataSource: string;
            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string;
            /** 获取-取消 */
            /** 设置-取消 */
            canceled: ibas.emYesNo;
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            /** 设置-状态 */
            status: ibas.emBOStatus;
            /** 映射的属性名称-单据状态 */
            static PROPERTY_LINESTATUS_NAME: string;
            /** 获取-单据状态 */
            /** 设置-单据状态 */
            lineStatus: ibas.emDocumentStatus;
            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string;
            /** 获取-创建日期 */
            /** 设置-创建日期 */
            createDate: Date;
            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string;
            /** 获取-创建时间 */
            /** 设置-创建时间 */
            createTime: number;
            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-修改日期 */
            /** 设置-修改日期 */
            updateDate: Date;
            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-修改时间 */
            /** 设置-修改时间 */
            updateTime: number;
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            /** 设置-创建用户 */
            createUserSign: number;
            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-修改用户 */
            /** 设置-修改用户 */
            updateUserSign: number;
            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string;
            /** 获取-创建动作标识 */
            /** 设置-创建动作标识 */
            createActionId: string;
            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string;
            /** 获取-更新动作标识 */
            /** 设置-更新动作标识 */
            updateActionId: string;
            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string;
            /** 获取-参考1 */
            /** 设置-参考1 */
            reference1: string;
            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string;
            /** 获取-参考2 */
            /** 设置-参考2 */
            reference2: string;
            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string;
            /** 获取-已引用 */
            /** 设置-已引用 */
            referenced: ibas.emYesNo;
            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string;
            /** 获取-已删除 */
            /** 设置-已删除 */
            deleted: ibas.emYesNo;
            /** 映射的属性名称-基于类型 */
            static PROPERTY_BASEDOCUMENTTYPE_NAME: string;
            /** 获取-基于类型 */
            /** 设置-基于类型 */
            baseDocumentType: string;
            /** 映射的属性名称-基于标识 */
            static PROPERTY_BASEDOCUMENTENTRY_NAME: string;
            /** 获取-基于标识 */
            /** 设置-基于标识 */
            baseDocumentEntry: number;
            /** 映射的属性名称-基于行号 */
            static PROPERTY_BASEDOCUMENTLINEID_NAME: string;
            /** 获取-基于行号 */
            /** 设置-基于行号 */
            baseDocumentLineId: number;
            /** 映射的属性名称-原始类型 */
            static PROPERTY_ORIGINALDOCUMENTTYPE_NAME: string;
            /** 获取-原始类型 */
            /** 设置-原始类型 */
            originalDocumentType: string;
            /** 映射的属性名称-原始标识 */
            static PROPERTY_ORIGINALDOCUMENTENTRY_NAME: string;
            /** 获取-原始标识 */
            /** 设置-原始标识 */
            originalDocumentEntry: number;
            /** 映射的属性名称-原始行号 */
            static PROPERTY_ORIGINALDOCUMENTLINEID_NAME: string;
            /** 获取-原始行号 */
            /** 设置-原始行号 */
            originalDocumentLineId: number;
            /** 映射的属性名称-物料编码 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-物料编码 */
            /** 设置-物料编码 */
            itemCode: string;
            /** 映射的属性名称-物料/服务描述 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            /** 获取-物料/服务描述 */
            /** 设置-物料/服务描述 */
            itemDescription: string;
            /** 映射的属性名称-序号管理 */
            static PROPERTY_SERIALMANAGEMENT_NAME: string;
            /** 获取-序号管理 */
            /** 设置-序号管理 */
            serialManagement: ibas.emYesNo;
            /** 映射的属性名称-批号管理 */
            static PROPERTY_BATCHMANAGEMENT_NAME: string;
            /** 获取-批号管理 */
            /** 设置-批号管理 */
            batchManagement: ibas.emYesNo;
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            /** 设置-数量 */
            quantity: number;
            /** 映射的属性名称-计量单位 */
            static PROPERTY_UOM_NAME: string;
            /** 获取-计量单位 */
            /** 设置-计量单位 */
            uom: string;
            /** 映射的属性名称-仓库 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库 */
            /** 设置-仓库 */
            warehouse: string;
            /** 映射的属性名称-价格 */
            static PROPERTY_PRICE_NAME: string;
            /** 获取-价格 */
            /** 设置-价格 */
            price: number;
            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string;
            /** 获取-货币 */
            /** 设置-货币 */
            currency: string;
            /** 映射的属性名称-汇率 */
            static PROPERTY_RATE_NAME: string;
            /** 获取-汇率 */
            /** 设置-汇率 */
            rate: number;
            /** 映射的属性名称-行总计 */
            static PROPERTY_LINETOTAL_NAME: string;
            /** 获取-行总计 */
            /** 设置-行总计 */
            lineTotal: number;
            /** 映射的属性名称-行交货日期 */
            static PROPERTY_DELIVERYDATE_NAME: string;
            /** 获取-行交货日期 */
            /** 设置-行交货日期 */
            deliveryDate: Date;
            /** 映射的属性名称-已清数量 */
            static PROPERTY_CLOSEDQUANTITY_NAME: string;
            /** 获取-已清数量 */
            /** 设置-已清数量 */
            closedQuantity: number;
            /** 映射的属性名称-行折扣 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-行折扣 */
            /** 设置-行折扣 */
            discount: number;
            /** 映射的属性名称-已清金额 */
            static PROPERTY_CLOSEDAMOUNT_NAME: string;
            /** 获取-已清金额 */
            /** 设置-已清金额 */
            closedAmount: number;
            /** 映射的属性名称-科目代码 */
            static PROPERTY_ACCOUNTCODE_NAME: string;
            /** 获取-科目代码 */
            /** 设置-科目代码 */
            accountCode: string;
            /** 映射的属性名称-折扣前价格 */
            static PROPERTY_UNITPRICE_NAME: string;
            /** 获取-折扣前价格 */
            /** 设置-折扣前价格 */
            unitPrice: number;
            /** 映射的属性名称-税定义 */
            static PROPERTY_TAX_NAME: string;
            /** 获取-税定义 */
            /** 设置-税定义 */
            tax: string;
            /** 映射的属性名称-税率 */
            static PROPERTY_TAXRATE_NAME: string;
            /** 获取-税率 */
            /** 设置-税率 */
            taxRate: number;
            /** 映射的属性名称-税总额 */
            static PROPERTY_TAXTOTAL_NAME: string;
            /** 获取-税总额 */
            /** 设置-税总额 */
            taxTotal: number;
            /** 映射的属性名称-毛价 */
            static PROPERTY_GROSSPRICE_NAME: string;
            /** 获取-毛价 */
            /** 设置-毛价 */
            grossPrice: number;
            /** 映射的属性名称-毛总额 */
            static PROPERTY_GROSSTOTAL_NAME: string;
            /** 获取-毛总额 */
            /** 设置-毛总额 */
            grossTotal: number;
            /** 映射的属性名称-分配规则1 */
            static PROPERTY_DISTRIBUTIONRULE1_NAME: string;
            /** 获取-分配规则1 */
            /** 设置-分配规则1 */
            distributionRule1: string;
            /** 映射的属性名称-分配规则2 */
            static PROPERTY_DISTRIBUTIONRULE2_NAME: string;
            /** 获取-分配规则2 */
            /** 设置-分配规则2 */
            distributionRule2: string;
            /** 映射的属性名称-分配规则3 */
            static PROPERTY_DISTRIBUTIONRULE3_NAME: string;
            /** 获取-分配规则3 */
            /** 设置-分配规则3 */
            distributionRule3: string;
            /** 映射的属性名称-分配规则4 */
            static PROPERTY_DISTRIBUTIONRULE4_NAME: string;
            /** 获取-分配规则4 */
            /** 设置-分配规则4 */
            distributionRule4: string;
            /** 映射的属性名称-分配规则5 */
            static PROPERTY_DISTRIBUTIONRULE5_NAME: string;
            /** 获取-分配规则5 */
            /** 设置-分配规则5 */
            distributionRule5: string;
            /** 映射的属性名称-物料批次集合 */
            static PROPERTY_MATERIALBATCHES_NAME: string;
            /** 获取-物料批次集合 */
            /** 设置-物料批次集合 */
            materialBatches: materials.bo.MaterialBatchItems;
            /** 映射的属性名称-物料序列集合 */
            static PROPERTY_MATERIALSERIALS_NAME: string;
            /** 获取-物料序列集合 */
            /** 设置-物料序列集合 */
            materialSerials: materials.bo.MaterialSerialItems;
            /** 初始化数据 */
            protected init(): void;
            protected registerRules(): ibas.IBusinessRule[];
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace bo {
        /** 采购订单 */
        class PurchaseOrder extends ibas.BODocument<PurchaseOrder> implements IPurchaseOrder, ibas.IConvertedData {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-凭证编号 */
            static PROPERTY_DOCENTRY_NAME: string;
            /** 获取-凭证编号 */
            /** 设置-凭证编号 */
            docEntry: number;
            /** 映射的属性名称-期间编号 */
            static PROPERTY_DOCNUM_NAME: string;
            /** 获取-期间编号 */
            /** 设置-期间编号 */
            docNum: number;
            /** 映射的属性名称-期间 */
            static PROPERTY_PERIOD_NAME: string;
            /** 获取-期间 */
            /** 设置-期间 */
            period: number;
            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string;
            /** 获取-取消 */
            /** 设置-取消 */
            canceled: ibas.emYesNo;
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            /** 设置-状态 */
            status: ibas.emBOStatus;
            /** 映射的属性名称-审批状态 */
            static PROPERTY_APPROVALSTATUS_NAME: string;
            /** 获取-审批状态 */
            /** 设置-审批状态 */
            approvalStatus: ibas.emApprovalStatus;
            /** 映射的属性名称-单据状态 */
            static PROPERTY_DOCUMENTSTATUS_NAME: string;
            /** 获取-单据状态 */
            /** 设置-单据状态 */
            documentStatus: ibas.emDocumentStatus;
            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-对象类型 */
            /** 设置-对象类型 */
            objectCode: string;
            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string;
            /** 获取-创建日期 */
            /** 设置-创建日期 */
            createDate: Date;
            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string;
            /** 获取-创建时间 */
            /** 设置-创建时间 */
            createTime: number;
            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-修改日期 */
            /** 设置-修改日期 */
            updateDate: Date;
            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-修改时间 */
            /** 设置-修改时间 */
            updateTime: number;
            /** 映射的属性名称-版本 */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-版本 */
            /** 设置-版本 */
            logInst: number;
            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string;
            /** 获取-服务系列 */
            /** 设置-服务系列 */
            series: number;
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            /** 设置-数据源 */
            dataSource: string;
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            /** 设置-创建用户 */
            createUserSign: number;
            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-修改用户 */
            /** 设置-修改用户 */
            updateUserSign: number;
            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string;
            /** 获取-创建动作标识 */
            /** 设置-创建动作标识 */
            createActionId: string;
            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string;
            /** 获取-更新动作标识 */
            /** 设置-更新动作标识 */
            updateActionId: string;
            /** 映射的属性名称-数据所有者 */
            static PROPERTY_DATAOWNER_NAME: string;
            /** 获取-数据所有者 */
            /** 设置-数据所有者 */
            dataOwner: number;
            /** 映射的属性名称-团队成员 */
            static PROPERTY_TEAMMEMBERS_NAME: string;
            /** 获取-团队成员 */
            /** 设置-团队成员 */
            teamMembers: string;
            /** 映射的属性名称-数据所属组织 */
            static PROPERTY_ORGANIZATION_NAME: string;
            /** 获取-数据所属组织 */
            /** 设置-数据所属组织 */
            organization: string;
            /** 映射的属性名称-过账日期 */
            static PROPERTY_POSTINGDATE_NAME: string;
            /** 获取-过账日期 */
            /** 设置-过账日期 */
            postingDate: Date;
            /** 映射的属性名称-到期日 */
            static PROPERTY_DELIVERYDATE_NAME: string;
            /** 获取-到期日 */
            /** 设置-到期日 */
            deliveryDate: Date;
            /** 映射的属性名称-凭证日期 */
            static PROPERTY_DOCUMENTDATE_NAME: string;
            /** 获取-凭证日期 */
            /** 设置-凭证日期 */
            documentDate: Date;
            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string;
            /** 获取-参考1 */
            /** 设置-参考1 */
            reference1: string;
            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string;
            /** 获取-参考2 */
            /** 设置-参考2 */
            reference2: string;
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            /** 设置-备注 */
            remarks: string;
            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string;
            /** 获取-已引用 */
            /** 设置-已引用 */
            referenced: ibas.emYesNo;
            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string;
            /** 获取-已删除 */
            /** 设置-已删除 */
            deleted: ibas.emYesNo;
            /** 映射的属性名称-供应商代码 */
            static PROPERTY_SUPPLIERCODE_NAME: string;
            /** 获取-供应商代码 */
            /** 设置-供应商代码 */
            supplierCode: string;
            /** 映射的属性名称-供应商名称 */
            static PROPERTY_SUPPLIERNAME_NAME: string;
            /** 获取-供应商名称 */
            /** 设置-供应商名称 */
            supplierName: string;
            /** 映射的属性名称-联系人 */
            static PROPERTY_CONTACTPERSON_NAME: string;
            /** 获取-联系人 */
            /** 设置-联系人 */
            contactPerson: number;
            /** 映射的属性名称-折扣 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-折扣 */
            /** 设置-折扣 */
            discount: number;
            /** 映射的属性名称-折扣后总计 */
            static PROPERTY_DISCOUNTTOTAL_NAME: string;
            /** 获取-折扣后总计 */
            /** 设置-折扣后总计 */
            discountTotal: number;
            /** 映射的属性名称-单据货币 */
            static PROPERTY_DOCUMENTCURRENCY_NAME: string;
            /** 获取-单据货币 */
            /** 设置-单据货币 */
            documentCurrency: string;
            /** 映射的属性名称-单据汇率 */
            static PROPERTY_DOCUMENTRATE_NAME: string;
            /** 获取-单据汇率 */
            /** 设置-单据汇率 */
            documentRate: number;
            /** 映射的属性名称-单据总计 */
            static PROPERTY_DOCUMENTTOTAL_NAME: string;
            /** 获取-单据总计 */
            /** 设置-单据总计 */
            documentTotal: number;
            /** 映射的属性名称-已付款总计 */
            static PROPERTY_PAIDTOTAL_NAME: string;
            /** 获取-已付款总计 */
            /** 设置-已付款总计 */
            paidTotal: number;
            /** 映射的属性名称-价格清单 */
            static PROPERTY_PRICELIST_NAME: string;
            /** 获取-价格清单 */
            /** 设置-价格清单 */
            priceList: number;
            /** 映射的属性名称-付款条款代码 */
            static PROPERTY_PAYMENTCODE_NAME: string;
            /** 获取-付款条款代码 */
            /** 设置-付款条款代码 */
            paymentCode: string;
            /** 映射的属性名称-舍入 */
            static PROPERTY_ROUNDING_NAME: string;
            /** 获取-舍入 */
            /** 设置-舍入 */
            rounding: ibas.emYesNo;
            /** 映射的属性名称-舍入差额 */
            static PROPERTY_DIFFAMOUNT_NAME: string;
            /** 获取-舍入差额 */
            /** 设置-舍入差额 */
            diffAmount: number;
            /** 映射的属性名称-项目代码 */
            static PROPERTY_PROJECT_NAME: string;
            /** 获取-项目代码 */
            /** 设置-项目代码 */
            project: string;
            /** 映射的属性名称-消费者 */
            static PROPERTY_CONSUMER_NAME: string;
            /** 获取-消费者 */
            /** 设置-消费者 */
            consumer: string;
            /** 映射的属性名称-单据类型 */
            static PROPERTY_ORDERTYPE_NAME: string;
            /** 获取-单据类型 */
            /** 设置-单据类型 */
            orderType: string;
            /** 映射的属性名称-采购订单-行集合 */
            static PROPERTY_PURCHASEORDERITEMS_NAME: string;
            /** 获取-采购订单-行集合 */
            /** 设置-采购订单-行集合 */
            purchaseOrderItems: PurchaseOrderItems;
            /** 映射的属性名称-送货地址集合 */
            static PROPERTY_SHIPPINGADDRESSS_NAME: string;
            /** 获取-送货地址集合 */
            /** 设置-送货地址集合 */
            shippingAddresss: ShippingAddresss;
            /** 基于采购订单 */
            baseDocument(document: IPurchaseQuote): void;
            /** 初始化数据 */
            protected init(): void;
            /** 映射的属性名称-项目的税总计 */
            static PROPERTY_ITEMSTAXTOTAL_NAME: string;
            /** 获取-项目的税总计 */
            /** 设置-项目的税总计 */
            itemsTaxTotal: number;
            /** 映射的属性名称-项目的行总计 */
            static PROPERTY_ITEMSLINETOTAL_NAME: string;
            /** 获取-项目的行总计 */
            /** 设置-项目的行总计 */
            itemsLineTotal: number;
            /** 映射的属性名称-运送费用总计 */
            static PROPERTY_SHIPPINGSEXPENSETOTAL_NAME: string;
            /** 获取-运送费用总计 */
            /** 设置-运送费用总计 */
            shippingsExpenseTotal: number;
            protected registerRules(): ibas.IBusinessRule[];
            /** 转换之前 */
            beforeConvert(): void;
            /** 数据解析后 */
            afterParsing(): void;
        }
        /** 采购订单-行 集合 */
        class PurchaseOrderItems extends ibas.BusinessObjects<PurchaseOrderItem, PurchaseOrder> implements IPurchaseOrderItems {
            /** 创建并添加子项 */
            create(): PurchaseOrderItem;
        }
        /** 采购订单-行 */
        class PurchaseOrderItem extends ibas.BODocumentLine<PurchaseOrderItem> implements IPurchaseOrderItem {
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-编码 */
            static PROPERTY_DOCENTRY_NAME: string;
            /** 获取-编码 */
            /** 设置-编码 */
            docEntry: number;
            /** 映射的属性名称-行号 */
            static PROPERTY_LINEID_NAME: string;
            /** 获取-行号 */
            /** 设置-行号 */
            lineId: number;
            /** 映射的属性名称-显示顺序 */
            static PROPERTY_VISORDER_NAME: string;
            /** 获取-显示顺序 */
            /** 设置-显示顺序 */
            visOrder: number;
            /** 映射的属性名称-类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-类型 */
            /** 设置-类型 */
            objectCode: string;
            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-实例号（版本） */
            /** 设置-实例号（版本） */
            logInst: number;
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            /** 设置-数据源 */
            dataSource: string;
            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string;
            /** 获取-取消 */
            /** 设置-取消 */
            canceled: ibas.emYesNo;
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            /** 设置-状态 */
            status: ibas.emBOStatus;
            /** 映射的属性名称-单据状态 */
            static PROPERTY_LINESTATUS_NAME: string;
            /** 获取-单据状态 */
            /** 设置-单据状态 */
            lineStatus: ibas.emDocumentStatus;
            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string;
            /** 获取-创建日期 */
            /** 设置-创建日期 */
            createDate: Date;
            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string;
            /** 获取-创建时间 */
            /** 设置-创建时间 */
            createTime: number;
            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-修改日期 */
            /** 设置-修改日期 */
            updateDate: Date;
            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-修改时间 */
            /** 设置-修改时间 */
            updateTime: number;
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            /** 设置-创建用户 */
            createUserSign: number;
            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-修改用户 */
            /** 设置-修改用户 */
            updateUserSign: number;
            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string;
            /** 获取-创建动作标识 */
            /** 设置-创建动作标识 */
            createActionId: string;
            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string;
            /** 获取-更新动作标识 */
            /** 设置-更新动作标识 */
            updateActionId: string;
            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string;
            /** 获取-参考1 */
            /** 设置-参考1 */
            reference1: string;
            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string;
            /** 获取-参考2 */
            /** 设置-参考2 */
            reference2: string;
            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string;
            /** 获取-已引用 */
            /** 设置-已引用 */
            referenced: ibas.emYesNo;
            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string;
            /** 获取-已删除 */
            /** 设置-已删除 */
            deleted: ibas.emYesNo;
            /** 映射的属性名称-基于类型 */
            static PROPERTY_BASEDOCUMENTTYPE_NAME: string;
            /** 获取-基于类型 */
            /** 设置-基于类型 */
            baseDocumentType: string;
            /** 映射的属性名称-基于标识 */
            static PROPERTY_BASEDOCUMENTENTRY_NAME: string;
            /** 获取-基于标识 */
            /** 设置-基于标识 */
            baseDocumentEntry: number;
            /** 映射的属性名称-基于行号 */
            static PROPERTY_BASEDOCUMENTLINEID_NAME: string;
            /** 获取-基于行号 */
            /** 设置-基于行号 */
            baseDocumentLineId: number;
            /** 映射的属性名称-原始类型 */
            static PROPERTY_ORIGINALDOCUMENTTYPE_NAME: string;
            /** 获取-原始类型 */
            /** 设置-原始类型 */
            originalDocumentType: string;
            /** 映射的属性名称-原始标识 */
            static PROPERTY_ORIGINALDOCUMENTENTRY_NAME: string;
            /** 获取-原始标识 */
            /** 设置-原始标识 */
            originalDocumentEntry: number;
            /** 映射的属性名称-原始行号 */
            static PROPERTY_ORIGINALDOCUMENTLINEID_NAME: string;
            /** 获取-原始行号 */
            /** 设置-原始行号 */
            originalDocumentLineId: number;
            /** 映射的属性名称-物料编码 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-物料编码 */
            /** 设置-物料编码 */
            itemCode: string;
            /** 映射的属性名称-物料/服务描述 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            /** 获取-物料/服务描述 */
            /** 设置-物料/服务描述 */
            itemDescription: string;
            /** 映射的属性名称-序号管理 */
            static PROPERTY_SERIALMANAGEMENT_NAME: string;
            /** 获取-序号管理 */
            /** 设置-序号管理 */
            serialManagement: ibas.emYesNo;
            /** 映射的属性名称-批号管理 */
            static PROPERTY_BATCHMANAGEMENT_NAME: string;
            /** 获取-批号管理 */
            /** 设置-批号管理 */
            batchManagement: ibas.emYesNo;
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            /** 设置-数量 */
            quantity: number;
            /** 映射的属性名称-计量单位 */
            static PROPERTY_UOM_NAME: string;
            /** 获取-计量单位 */
            /** 设置-计量单位 */
            uom: string;
            /** 映射的属性名称-仓库 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库 */
            /** 设置-仓库 */
            warehouse: string;
            /** 映射的属性名称-价格 */
            static PROPERTY_PRICE_NAME: string;
            /** 获取-价格 */
            /** 设置-价格 */
            price: number;
            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string;
            /** 获取-货币 */
            /** 设置-货币 */
            currency: string;
            /** 映射的属性名称-汇率 */
            static PROPERTY_RATE_NAME: string;
            /** 获取-汇率 */
            /** 设置-汇率 */
            rate: number;
            /** 映射的属性名称-行总计 */
            static PROPERTY_LINETOTAL_NAME: string;
            /** 获取-行总计 */
            /** 设置-行总计 */
            lineTotal: number;
            /** 映射的属性名称-行交货日期 */
            static PROPERTY_DELIVERYDATE_NAME: string;
            /** 获取-行交货日期 */
            /** 设置-行交货日期 */
            deliveryDate: Date;
            /** 映射的属性名称-已清数量 */
            static PROPERTY_CLOSEDQUANTITY_NAME: string;
            /** 获取-已清数量 */
            /** 设置-已清数量 */
            closedQuantity: number;
            /** 映射的属性名称-行折扣 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-行折扣 */
            /** 设置-行折扣 */
            discount: number;
            /** 映射的属性名称-已清金额 */
            static PROPERTY_CLOSEDAMOUNT_NAME: string;
            /** 获取-已清金额 */
            /** 设置-已清金额 */
            closedAmount: number;
            /** 映射的属性名称-科目代码 */
            static PROPERTY_ACCOUNTCODE_NAME: string;
            /** 获取-科目代码 */
            /** 设置-科目代码 */
            accountCode: string;
            /** 映射的属性名称-折扣前价格 */
            static PROPERTY_UNITPRICE_NAME: string;
            /** 获取-折扣前价格 */
            /** 设置-折扣前价格 */
            unitPrice: number;
            /** 映射的属性名称-税定义 */
            static PROPERTY_TAX_NAME: string;
            /** 获取-税定义 */
            /** 设置-税定义 */
            tax: string;
            /** 映射的属性名称-税率 */
            static PROPERTY_TAXRATE_NAME: string;
            /** 获取-税率 */
            /** 设置-税率 */
            taxRate: number;
            /** 映射的属性名称-税总额 */
            static PROPERTY_TAXTOTAL_NAME: string;
            /** 获取-税总额 */
            /** 设置-税总额 */
            taxTotal: number;
            /** 映射的属性名称-毛价 */
            static PROPERTY_GROSSPRICE_NAME: string;
            /** 获取-毛价 */
            /** 设置-毛价 */
            grossPrice: number;
            /** 映射的属性名称-毛总额 */
            static PROPERTY_GROSSTOTAL_NAME: string;
            /** 获取-毛总额 */
            /** 设置-毛总额 */
            grossTotal: number;
            /** 映射的属性名称-分配规则1 */
            static PROPERTY_DISTRIBUTIONRULE1_NAME: string;
            /** 获取-分配规则1 */
            /** 设置-分配规则1 */
            distributionRule1: string;
            /** 映射的属性名称-分配规则2 */
            static PROPERTY_DISTRIBUTIONRULE2_NAME: string;
            /** 获取-分配规则2 */
            /** 设置-分配规则2 */
            distributionRule2: string;
            /** 映射的属性名称-分配规则3 */
            static PROPERTY_DISTRIBUTIONRULE3_NAME: string;
            /** 获取-分配规则3 */
            /** 设置-分配规则3 */
            distributionRule3: string;
            /** 映射的属性名称-分配规则4 */
            static PROPERTY_DISTRIBUTIONRULE4_NAME: string;
            /** 获取-分配规则4 */
            /** 设置-分配规则4 */
            distributionRule4: string;
            /** 映射的属性名称-分配规则5 */
            static PROPERTY_DISTRIBUTIONRULE5_NAME: string;
            /** 获取-分配规则5 */
            /** 设置-分配规则5 */
            distributionRule5: string;
            /** 映射的属性名称-物料批次集合 */
            static PROPERTY_MATERIALBATCHES_NAME: string;
            /** 获取-物料批次集合 */
            /** 设置-物料批次集合 */
            materialBatches: materials.bo.MaterialBatchItems;
            /** 映射的属性名称-物料序列集合 */
            static PROPERTY_MATERIALSERIALS_NAME: string;
            /** 获取-物料序列集合 */
            /** 设置-物料序列集合 */
            materialSerials: materials.bo.MaterialSerialItems;
            /** 初始化数据 */
            protected init(): void;
            protected registerRules(): ibas.IBusinessRule[];
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace bo {
        /** 采购退货 */
        class PurchaseReturn extends ibas.BODocument<PurchaseReturn> implements IPurchaseReturn, ibas.IConvertedData {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-凭证编号 */
            static PROPERTY_DOCENTRY_NAME: string;
            /** 获取-凭证编号 */
            /** 设置-凭证编号 */
            docEntry: number;
            /** 映射的属性名称-期间编号 */
            static PROPERTY_DOCNUM_NAME: string;
            /** 获取-期间编号 */
            /** 设置-期间编号 */
            docNum: number;
            /** 映射的属性名称-期间 */
            static PROPERTY_PERIOD_NAME: string;
            /** 获取-期间 */
            /** 设置-期间 */
            period: number;
            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string;
            /** 获取-取消 */
            /** 设置-取消 */
            canceled: ibas.emYesNo;
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            /** 设置-状态 */
            status: ibas.emBOStatus;
            /** 映射的属性名称-审批状态 */
            static PROPERTY_APPROVALSTATUS_NAME: string;
            /** 获取-审批状态 */
            /** 设置-审批状态 */
            approvalStatus: ibas.emApprovalStatus;
            /** 映射的属性名称-单据状态 */
            static PROPERTY_DOCUMENTSTATUS_NAME: string;
            /** 获取-单据状态 */
            /** 设置-单据状态 */
            documentStatus: ibas.emDocumentStatus;
            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-对象类型 */
            /** 设置-对象类型 */
            objectCode: string;
            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string;
            /** 获取-创建日期 */
            /** 设置-创建日期 */
            createDate: Date;
            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string;
            /** 获取-创建时间 */
            /** 设置-创建时间 */
            createTime: number;
            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-修改日期 */
            /** 设置-修改日期 */
            updateDate: Date;
            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-修改时间 */
            /** 设置-修改时间 */
            updateTime: number;
            /** 映射的属性名称-版本 */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-版本 */
            /** 设置-版本 */
            logInst: number;
            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string;
            /** 获取-服务系列 */
            /** 设置-服务系列 */
            series: number;
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            /** 设置-数据源 */
            dataSource: string;
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            /** 设置-创建用户 */
            createUserSign: number;
            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-修改用户 */
            /** 设置-修改用户 */
            updateUserSign: number;
            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string;
            /** 获取-创建动作标识 */
            /** 设置-创建动作标识 */
            createActionId: string;
            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string;
            /** 获取-更新动作标识 */
            /** 设置-更新动作标识 */
            updateActionId: string;
            /** 映射的属性名称-数据所有者 */
            static PROPERTY_DATAOWNER_NAME: string;
            /** 获取-数据所有者 */
            /** 设置-数据所有者 */
            dataOwner: number;
            /** 映射的属性名称-团队成员 */
            static PROPERTY_TEAMMEMBERS_NAME: string;
            /** 获取-团队成员 */
            /** 设置-团队成员 */
            teamMembers: string;
            /** 映射的属性名称-数据所属组织 */
            static PROPERTY_ORGANIZATION_NAME: string;
            /** 获取-数据所属组织 */
            /** 设置-数据所属组织 */
            organization: string;
            /** 映射的属性名称-过账日期 */
            static PROPERTY_POSTINGDATE_NAME: string;
            /** 获取-过账日期 */
            /** 设置-过账日期 */
            postingDate: Date;
            /** 映射的属性名称-到期日 */
            static PROPERTY_DELIVERYDATE_NAME: string;
            /** 获取-到期日 */
            /** 设置-到期日 */
            deliveryDate: Date;
            /** 映射的属性名称-凭证日期 */
            static PROPERTY_DOCUMENTDATE_NAME: string;
            /** 获取-凭证日期 */
            /** 设置-凭证日期 */
            documentDate: Date;
            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string;
            /** 获取-参考1 */
            /** 设置-参考1 */
            reference1: string;
            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string;
            /** 获取-参考2 */
            /** 设置-参考2 */
            reference2: string;
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            /** 设置-备注 */
            remarks: string;
            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string;
            /** 获取-已引用 */
            /** 设置-已引用 */
            referenced: ibas.emYesNo;
            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string;
            /** 获取-已删除 */
            /** 设置-已删除 */
            deleted: ibas.emYesNo;
            /** 映射的属性名称-供应商代码 */
            static PROPERTY_SUPPLIERCODE_NAME: string;
            /** 获取-供应商代码 */
            /** 设置-供应商代码 */
            supplierCode: string;
            /** 映射的属性名称-供应商名称 */
            static PROPERTY_SUPPLIERNAME_NAME: string;
            /** 获取-供应商名称 */
            /** 设置-供应商名称 */
            supplierName: string;
            /** 映射的属性名称-联系人 */
            static PROPERTY_CONTACTPERSON_NAME: string;
            /** 获取-联系人 */
            /** 设置-联系人 */
            contactPerson: number;
            /** 映射的属性名称-折扣 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-折扣 */
            /** 设置-折扣 */
            discount: number;
            /** 映射的属性名称-折扣后总计 */
            static PROPERTY_DISCOUNTTOTAL_NAME: string;
            /** 获取-折扣后总计 */
            /** 设置-折扣后总计 */
            discountTotal: number;
            /** 映射的属性名称-单据货币 */
            static PROPERTY_DOCUMENTCURRENCY_NAME: string;
            /** 获取-单据货币 */
            /** 设置-单据货币 */
            documentCurrency: string;
            /** 映射的属性名称-单据汇率 */
            static PROPERTY_DOCUMENTRATE_NAME: string;
            /** 获取-单据汇率 */
            /** 设置-单据汇率 */
            documentRate: number;
            /** 映射的属性名称-单据总计 */
            static PROPERTY_DOCUMENTTOTAL_NAME: string;
            /** 获取-单据总计 */
            /** 设置-单据总计 */
            documentTotal: number;
            /** 映射的属性名称-已付款总计 */
            static PROPERTY_PAIDTOTAL_NAME: string;
            /** 获取-已付款总计 */
            /** 设置-已付款总计 */
            paidTotal: number;
            /** 映射的属性名称-价格清单 */
            static PROPERTY_PRICELIST_NAME: string;
            /** 获取-价格清单 */
            /** 设置-价格清单 */
            priceList: number;
            /** 映射的属性名称-付款条款代码 */
            static PROPERTY_PAYMENTCODE_NAME: string;
            /** 获取-付款条款代码 */
            /** 设置-付款条款代码 */
            paymentCode: string;
            /** 映射的属性名称-舍入 */
            static PROPERTY_ROUNDING_NAME: string;
            /** 获取-舍入 */
            /** 设置-舍入 */
            rounding: ibas.emYesNo;
            /** 映射的属性名称-舍入差额 */
            static PROPERTY_DIFFAMOUNT_NAME: string;
            /** 获取-舍入差额 */
            /** 设置-舍入差额 */
            diffAmount: number;
            /** 映射的属性名称-项目代码 */
            static PROPERTY_PROJECT_NAME: string;
            /** 获取-项目代码 */
            /** 设置-项目代码 */
            project: string;
            /** 映射的属性名称-消费者 */
            static PROPERTY_CONSUMER_NAME: string;
            /** 获取-消费者 */
            /** 设置-消费者 */
            consumer: string;
            /** 映射的属性名称-单据类型 */
            static PROPERTY_ORDERTYPE_NAME: string;
            /** 获取-单据类型 */
            /** 设置-单据类型 */
            orderType: string;
            /** 映射的属性名称-采购退货-行集合 */
            static PROPERTY_PURCHASERETURNITEMS_NAME: string;
            /** 获取-采购退货-行集合 */
            /** 设置-采购退货-行集合 */
            purchaseReturnItems: PurchaseReturnItems;
            /** 映射的属性名称-送货地址集合 */
            static PROPERTY_SHIPPINGADDRESSS_NAME: string;
            /** 获取-送货地址集合 */
            /** 设置-送货地址集合 */
            shippingAddresss: ShippingAddresss;
            /** 初始化数据 */
            protected init(): void;
            /** 映射的属性名称-项目的税总计 */
            static PROPERTY_ITEMSTAXTOTAL_NAME: string;
            /** 获取-项目的税总计 */
            /** 设置-项目的税总计 */
            itemsTaxTotal: number;
            /** 映射的属性名称-项目的行总计 */
            static PROPERTY_ITEMSLINETOTAL_NAME: string;
            /** 获取-项目的行总计 */
            /** 设置-项目的行总计 */
            itemsLineTotal: number;
            /** 映射的属性名称-运送费用总计 */
            static PROPERTY_SHIPPINGSEXPENSETOTAL_NAME: string;
            /** 获取-运送费用总计 */
            /** 设置-运送费用总计 */
            shippingsExpenseTotal: number;
            protected registerRules(): ibas.IBusinessRule[];
            /** 转换之前 */
            beforeConvert(): void;
            /** 数据解析后 */
            afterParsing(): void;
            /** 基于采购订单 */
            baseDocument(document: IPurchaseOrder): void;
            /** 基于采购收货 */
            baseDocument(document: IPurchaseDelivery): void;
        }
        /** 采购退货-行 集合 */
        class PurchaseReturnItems extends ibas.BusinessObjects<PurchaseReturnItem, PurchaseReturn> implements IPurchaseReturnItems {
            /** 创建并添加子项 */
            create(): PurchaseReturnItem;
        }
        /** 采购退货-行 */
        class PurchaseReturnItem extends ibas.BODocumentLine<PurchaseReturnItem> implements IPurchaseReturnItem {
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-编码 */
            static PROPERTY_DOCENTRY_NAME: string;
            /** 获取-编码 */
            /** 设置-编码 */
            docEntry: number;
            /** 映射的属性名称-行号 */
            static PROPERTY_LINEID_NAME: string;
            /** 获取-行号 */
            /** 设置-行号 */
            lineId: number;
            /** 映射的属性名称-显示顺序 */
            static PROPERTY_VISORDER_NAME: string;
            /** 获取-显示顺序 */
            /** 设置-显示顺序 */
            visOrder: number;
            /** 映射的属性名称-类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-类型 */
            /** 设置-类型 */
            objectCode: string;
            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-实例号（版本） */
            /** 设置-实例号（版本） */
            logInst: number;
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            /** 设置-数据源 */
            dataSource: string;
            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string;
            /** 获取-取消 */
            /** 设置-取消 */
            canceled: ibas.emYesNo;
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            /** 设置-状态 */
            status: ibas.emBOStatus;
            /** 映射的属性名称-单据状态 */
            static PROPERTY_LINESTATUS_NAME: string;
            /** 获取-单据状态 */
            /** 设置-单据状态 */
            lineStatus: ibas.emDocumentStatus;
            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string;
            /** 获取-创建日期 */
            /** 设置-创建日期 */
            createDate: Date;
            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string;
            /** 获取-创建时间 */
            /** 设置-创建时间 */
            createTime: number;
            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-修改日期 */
            /** 设置-修改日期 */
            updateDate: Date;
            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-修改时间 */
            /** 设置-修改时间 */
            updateTime: number;
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            /** 设置-创建用户 */
            createUserSign: number;
            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-修改用户 */
            /** 设置-修改用户 */
            updateUserSign: number;
            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string;
            /** 获取-创建动作标识 */
            /** 设置-创建动作标识 */
            createActionId: string;
            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string;
            /** 获取-更新动作标识 */
            /** 设置-更新动作标识 */
            updateActionId: string;
            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string;
            /** 获取-参考1 */
            /** 设置-参考1 */
            reference1: string;
            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string;
            /** 获取-参考2 */
            /** 设置-参考2 */
            reference2: string;
            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string;
            /** 获取-已引用 */
            /** 设置-已引用 */
            referenced: ibas.emYesNo;
            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string;
            /** 获取-已删除 */
            /** 设置-已删除 */
            deleted: ibas.emYesNo;
            /** 映射的属性名称-基于类型 */
            static PROPERTY_BASEDOCUMENTTYPE_NAME: string;
            /** 获取-基于类型 */
            /** 设置-基于类型 */
            baseDocumentType: string;
            /** 映射的属性名称-基于标识 */
            static PROPERTY_BASEDOCUMENTENTRY_NAME: string;
            /** 获取-基于标识 */
            /** 设置-基于标识 */
            baseDocumentEntry: number;
            /** 映射的属性名称-基于行号 */
            static PROPERTY_BASEDOCUMENTLINEID_NAME: string;
            /** 获取-基于行号 */
            /** 设置-基于行号 */
            baseDocumentLineId: number;
            /** 映射的属性名称-原始类型 */
            static PROPERTY_ORIGINALDOCUMENTTYPE_NAME: string;
            /** 获取-原始类型 */
            /** 设置-原始类型 */
            originalDocumentType: string;
            /** 映射的属性名称-原始标识 */
            static PROPERTY_ORIGINALDOCUMENTENTRY_NAME: string;
            /** 获取-原始标识 */
            /** 设置-原始标识 */
            originalDocumentEntry: number;
            /** 映射的属性名称-原始行号 */
            static PROPERTY_ORIGINALDOCUMENTLINEID_NAME: string;
            /** 获取-原始行号 */
            /** 设置-原始行号 */
            originalDocumentLineId: number;
            /** 映射的属性名称-物料编码 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-物料编码 */
            /** 设置-物料编码 */
            itemCode: string;
            /** 映射的属性名称-物料/服务描述 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            /** 获取-物料/服务描述 */
            /** 设置-物料/服务描述 */
            itemDescription: string;
            /** 映射的属性名称-序号管理 */
            static PROPERTY_SERIALMANAGEMENT_NAME: string;
            /** 获取-序号管理 */
            /** 设置-序号管理 */
            serialManagement: ibas.emYesNo;
            /** 映射的属性名称-批号管理 */
            static PROPERTY_BATCHMANAGEMENT_NAME: string;
            /** 获取-批号管理 */
            /** 设置-批号管理 */
            batchManagement: ibas.emYesNo;
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            /** 设置-数量 */
            quantity: number;
            /** 映射的属性名称-计量单位 */
            static PROPERTY_UOM_NAME: string;
            /** 获取-计量单位 */
            /** 设置-计量单位 */
            uom: string;
            /** 映射的属性名称-仓库 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库 */
            /** 设置-仓库 */
            warehouse: string;
            /** 映射的属性名称-价格 */
            static PROPERTY_PRICE_NAME: string;
            /** 获取-价格 */
            /** 设置-价格 */
            price: number;
            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string;
            /** 获取-货币 */
            /** 设置-货币 */
            currency: string;
            /** 映射的属性名称-汇率 */
            static PROPERTY_RATE_NAME: string;
            /** 获取-汇率 */
            /** 设置-汇率 */
            rate: number;
            /** 映射的属性名称-行总计 */
            static PROPERTY_LINETOTAL_NAME: string;
            /** 获取-行总计 */
            /** 设置-行总计 */
            lineTotal: number;
            /** 映射的属性名称-行交货日期 */
            static PROPERTY_DELIVERYDATE_NAME: string;
            /** 获取-行交货日期 */
            /** 设置-行交货日期 */
            deliveryDate: Date;
            /** 映射的属性名称-已清数量 */
            static PROPERTY_CLOSEDQUANTITY_NAME: string;
            /** 获取-已清数量 */
            /** 设置-已清数量 */
            closedQuantity: number;
            /** 映射的属性名称-行折扣 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-行折扣 */
            /** 设置-行折扣 */
            discount: number;
            /** 映射的属性名称-已清金额 */
            static PROPERTY_CLOSEDAMOUNT_NAME: string;
            /** 获取-已清金额 */
            /** 设置-已清金额 */
            closedAmount: number;
            /** 映射的属性名称-科目代码 */
            static PROPERTY_ACCOUNTCODE_NAME: string;
            /** 获取-科目代码 */
            /** 设置-科目代码 */
            accountCode: string;
            /** 映射的属性名称-折扣前价格 */
            static PROPERTY_UNITPRICE_NAME: string;
            /** 获取-折扣前价格 */
            /** 设置-折扣前价格 */
            unitPrice: number;
            /** 映射的属性名称-税定义 */
            static PROPERTY_TAX_NAME: string;
            /** 获取-税定义 */
            /** 设置-税定义 */
            tax: string;
            /** 映射的属性名称-税率 */
            static PROPERTY_TAXRATE_NAME: string;
            /** 获取-税率 */
            /** 设置-税率 */
            taxRate: number;
            /** 映射的属性名称-税总额 */
            static PROPERTY_TAXTOTAL_NAME: string;
            /** 获取-税总额 */
            /** 设置-税总额 */
            taxTotal: number;
            /** 映射的属性名称-毛价 */
            static PROPERTY_GROSSPRICE_NAME: string;
            /** 获取-毛价 */
            /** 设置-毛价 */
            grossPrice: number;
            /** 映射的属性名称-毛总额 */
            static PROPERTY_GROSSTOTAL_NAME: string;
            /** 获取-毛总额 */
            /** 设置-毛总额 */
            grossTotal: number;
            /** 映射的属性名称-分配规则1 */
            static PROPERTY_DISTRIBUTIONRULE1_NAME: string;
            /** 获取-分配规则1 */
            /** 设置-分配规则1 */
            distributionRule1: string;
            /** 映射的属性名称-分配规则2 */
            static PROPERTY_DISTRIBUTIONRULE2_NAME: string;
            /** 获取-分配规则2 */
            /** 设置-分配规则2 */
            distributionRule2: string;
            /** 映射的属性名称-分配规则3 */
            static PROPERTY_DISTRIBUTIONRULE3_NAME: string;
            /** 获取-分配规则3 */
            /** 设置-分配规则3 */
            distributionRule3: string;
            /** 映射的属性名称-分配规则4 */
            static PROPERTY_DISTRIBUTIONRULE4_NAME: string;
            /** 获取-分配规则4 */
            /** 设置-分配规则4 */
            distributionRule4: string;
            /** 映射的属性名称-分配规则5 */
            static PROPERTY_DISTRIBUTIONRULE5_NAME: string;
            /** 获取-分配规则5 */
            /** 设置-分配规则5 */
            distributionRule5: string;
            /** 映射的属性名称-物料批次集合 */
            static PROPERTY_MATERIALBATCHES_NAME: string;
            /** 获取-物料批次集合 */
            /** 设置-物料批次集合 */
            materialBatches: materials.bo.MaterialBatchItems;
            /** 映射的属性名称-物料序列集合 */
            static PROPERTY_MATERIALSERIALS_NAME: string;
            /** 获取-物料序列集合 */
            /** 设置-物料序列集合 */
            materialSerials: materials.bo.MaterialSerialItems;
            /** 初始化数据 */
            protected init(): void;
            protected registerRules(): ibas.IBusinessRule[];
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace bo {
        /** 采购报价 */
        class PurchaseQuote extends ibas.BODocument<PurchaseQuote> implements IPurchaseQuote, ibas.IConvertedData {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-凭证编号 */
            static PROPERTY_DOCENTRY_NAME: string;
            /** 获取-凭证编号 */
            /** 设置-凭证编号 */
            docEntry: number;
            /** 映射的属性名称-期间编号 */
            static PROPERTY_DOCNUM_NAME: string;
            /** 获取-期间编号 */
            /** 设置-期间编号 */
            docNum: number;
            /** 映射的属性名称-期间 */
            static PROPERTY_PERIOD_NAME: string;
            /** 获取-期间 */
            /** 设置-期间 */
            period: number;
            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string;
            /** 获取-取消 */
            /** 设置-取消 */
            canceled: ibas.emYesNo;
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            /** 设置-状态 */
            status: ibas.emBOStatus;
            /** 映射的属性名称-审批状态 */
            static PROPERTY_APPROVALSTATUS_NAME: string;
            /** 获取-审批状态 */
            /** 设置-审批状态 */
            approvalStatus: ibas.emApprovalStatus;
            /** 映射的属性名称-单据状态 */
            static PROPERTY_DOCUMENTSTATUS_NAME: string;
            /** 获取-单据状态 */
            /** 设置-单据状态 */
            documentStatus: ibas.emDocumentStatus;
            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-对象类型 */
            /** 设置-对象类型 */
            objectCode: string;
            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string;
            /** 获取-创建日期 */
            /** 设置-创建日期 */
            createDate: Date;
            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string;
            /** 获取-创建时间 */
            /** 设置-创建时间 */
            createTime: number;
            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-修改日期 */
            /** 设置-修改日期 */
            updateDate: Date;
            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-修改时间 */
            /** 设置-修改时间 */
            updateTime: number;
            /** 映射的属性名称-版本 */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-版本 */
            /** 设置-版本 */
            logInst: number;
            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string;
            /** 获取-服务系列 */
            /** 设置-服务系列 */
            series: number;
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            /** 设置-数据源 */
            dataSource: string;
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            /** 设置-创建用户 */
            createUserSign: number;
            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-修改用户 */
            /** 设置-修改用户 */
            updateUserSign: number;
            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string;
            /** 获取-创建动作标识 */
            /** 设置-创建动作标识 */
            createActionId: string;
            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string;
            /** 获取-更新动作标识 */
            /** 设置-更新动作标识 */
            updateActionId: string;
            /** 映射的属性名称-数据所有者 */
            static PROPERTY_DATAOWNER_NAME: string;
            /** 获取-数据所有者 */
            /** 设置-数据所有者 */
            dataOwner: number;
            /** 映射的属性名称-团队成员 */
            static PROPERTY_TEAMMEMBERS_NAME: string;
            /** 获取-团队成员 */
            /** 设置-团队成员 */
            teamMembers: string;
            /** 映射的属性名称-数据所属组织 */
            static PROPERTY_ORGANIZATION_NAME: string;
            /** 获取-数据所属组织 */
            /** 设置-数据所属组织 */
            organization: string;
            /** 映射的属性名称-过账日期 */
            static PROPERTY_POSTINGDATE_NAME: string;
            /** 获取-过账日期 */
            /** 设置-过账日期 */
            postingDate: Date;
            /** 映射的属性名称-到期日 */
            static PROPERTY_DELIVERYDATE_NAME: string;
            /** 获取-到期日 */
            /** 设置-到期日 */
            deliveryDate: Date;
            /** 映射的属性名称-凭证日期 */
            static PROPERTY_DOCUMENTDATE_NAME: string;
            /** 获取-凭证日期 */
            /** 设置-凭证日期 */
            documentDate: Date;
            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string;
            /** 获取-参考1 */
            /** 设置-参考1 */
            reference1: string;
            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string;
            /** 获取-参考2 */
            /** 设置-参考2 */
            reference2: string;
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            /** 设置-备注 */
            remarks: string;
            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string;
            /** 获取-已引用 */
            /** 设置-已引用 */
            referenced: ibas.emYesNo;
            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string;
            /** 获取-已删除 */
            /** 设置-已删除 */
            deleted: ibas.emYesNo;
            /** 映射的属性名称-供应商代码 */
            static PROPERTY_SUPPLIERCODE_NAME: string;
            /** 获取-供应商代码 */
            /** 设置-供应商代码 */
            supplierCode: string;
            /** 映射的属性名称-供应商名称 */
            static PROPERTY_SUPPLIERNAME_NAME: string;
            /** 获取-供应商名称 */
            /** 设置-供应商名称 */
            supplierName: string;
            /** 映射的属性名称-联系人 */
            static PROPERTY_CONTACTPERSON_NAME: string;
            /** 获取-联系人 */
            /** 设置-联系人 */
            contactPerson: number;
            /** 映射的属性名称-折扣 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-折扣 */
            /** 设置-折扣 */
            discount: number;
            /** 映射的属性名称-折扣后总计 */
            static PROPERTY_DISCOUNTTOTAL_NAME: string;
            /** 获取-折扣后总计 */
            /** 设置-折扣后总计 */
            discountTotal: number;
            /** 映射的属性名称-单据货币 */
            static PROPERTY_DOCUMENTCURRENCY_NAME: string;
            /** 获取-单据货币 */
            /** 设置-单据货币 */
            documentCurrency: string;
            /** 映射的属性名称-单据汇率 */
            static PROPERTY_DOCUMENTRATE_NAME: string;
            /** 获取-单据汇率 */
            /** 设置-单据汇率 */
            documentRate: number;
            /** 映射的属性名称-单据总计 */
            static PROPERTY_DOCUMENTTOTAL_NAME: string;
            /** 获取-单据总计 */
            /** 设置-单据总计 */
            documentTotal: number;
            /** 映射的属性名称-已付款总计 */
            static PROPERTY_PAIDTOTAL_NAME: string;
            /** 获取-已付款总计 */
            /** 设置-已付款总计 */
            paidTotal: number;
            /** 映射的属性名称-价格清单 */
            static PROPERTY_PRICELIST_NAME: string;
            /** 获取-价格清单 */
            /** 设置-价格清单 */
            priceList: number;
            /** 映射的属性名称-付款条款代码 */
            static PROPERTY_PAYMENTCODE_NAME: string;
            /** 获取-付款条款代码 */
            /** 设置-付款条款代码 */
            paymentCode: string;
            /** 映射的属性名称-舍入 */
            static PROPERTY_ROUNDING_NAME: string;
            /** 获取-舍入 */
            /** 设置-舍入 */
            rounding: ibas.emYesNo;
            /** 映射的属性名称-舍入差额 */
            static PROPERTY_DIFFAMOUNT_NAME: string;
            /** 获取-舍入差额 */
            /** 设置-舍入差额 */
            diffAmount: number;
            /** 映射的属性名称-项目代码 */
            static PROPERTY_PROJECT_NAME: string;
            /** 获取-项目代码 */
            /** 设置-项目代码 */
            project: string;
            /** 映射的属性名称-消费者 */
            static PROPERTY_CONSUMER_NAME: string;
            /** 获取-消费者 */
            /** 设置-消费者 */
            consumer: string;
            /** 映射的属性名称-单据类型 */
            static PROPERTY_ORDERTYPE_NAME: string;
            /** 获取-单据类型 */
            /** 设置-单据类型 */
            orderType: string;
            /** 映射的属性名称-采购报价-行集合 */
            static PROPERTY_PURCHASEQUOTEITEMS_NAME: string;
            /** 获取-采购报价-行集合 */
            /** 设置-采购报价-行集合 */
            purchaseQuoteItems: PurchaseQuoteItems;
            /** 初始化数据 */
            protected init(): void;
            /** 映射的属性名称-项目的税总计 */
            static PROPERTY_ITEMSTAXTOTAL_NAME: string;
            /** 获取-项目的税总计 */
            /** 设置-项目的税总计 */
            itemsTaxTotal: number;
            /** 映射的属性名称-项目的行总计 */
            static PROPERTY_ITEMSLINETOTAL_NAME: string;
            /** 获取-项目的行总计 */
            /** 设置-项目的行总计 */
            itemsLineTotal: number;
            protected registerRules(): ibas.IBusinessRule[];
            /** 转换之前 */
            beforeConvert(): void;
            /** 数据解析后 */
            afterParsing(): void;
        }
        /** 采购报价-行 集合 */
        class PurchaseQuoteItems extends ibas.BusinessObjects<PurchaseQuoteItem, PurchaseQuote> implements IPurchaseQuoteItems {
            /** 创建并添加子项 */
            create(): PurchaseQuoteItem;
        }
        /** 采购报价-行 */
        class PurchaseQuoteItem extends ibas.BODocumentLine<PurchaseQuoteItem> implements IPurchaseQuoteItem {
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-编码 */
            static PROPERTY_DOCENTRY_NAME: string;
            /** 获取-编码 */
            /** 设置-编码 */
            docEntry: number;
            /** 映射的属性名称-行号 */
            static PROPERTY_LINEID_NAME: string;
            /** 获取-行号 */
            /** 设置-行号 */
            lineId: number;
            /** 映射的属性名称-显示顺序 */
            static PROPERTY_VISORDER_NAME: string;
            /** 获取-显示顺序 */
            /** 设置-显示顺序 */
            visOrder: number;
            /** 映射的属性名称-类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-类型 */
            /** 设置-类型 */
            objectCode: string;
            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-实例号（版本） */
            /** 设置-实例号（版本） */
            logInst: number;
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            /** 设置-数据源 */
            dataSource: string;
            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string;
            /** 获取-取消 */
            /** 设置-取消 */
            canceled: ibas.emYesNo;
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            /** 设置-状态 */
            status: ibas.emBOStatus;
            /** 映射的属性名称-单据状态 */
            static PROPERTY_LINESTATUS_NAME: string;
            /** 获取-单据状态 */
            /** 设置-单据状态 */
            lineStatus: ibas.emDocumentStatus;
            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string;
            /** 获取-创建日期 */
            /** 设置-创建日期 */
            createDate: Date;
            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string;
            /** 获取-创建时间 */
            /** 设置-创建时间 */
            createTime: number;
            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-修改日期 */
            /** 设置-修改日期 */
            updateDate: Date;
            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-修改时间 */
            /** 设置-修改时间 */
            updateTime: number;
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            /** 设置-创建用户 */
            createUserSign: number;
            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-修改用户 */
            /** 设置-修改用户 */
            updateUserSign: number;
            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string;
            /** 获取-创建动作标识 */
            /** 设置-创建动作标识 */
            createActionId: string;
            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string;
            /** 获取-更新动作标识 */
            /** 设置-更新动作标识 */
            updateActionId: string;
            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string;
            /** 获取-参考1 */
            /** 设置-参考1 */
            reference1: string;
            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string;
            /** 获取-参考2 */
            /** 设置-参考2 */
            reference2: string;
            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string;
            /** 获取-已引用 */
            /** 设置-已引用 */
            referenced: ibas.emYesNo;
            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string;
            /** 获取-已删除 */
            /** 设置-已删除 */
            deleted: ibas.emYesNo;
            /** 映射的属性名称-基于类型 */
            static PROPERTY_BASEDOCUMENTTYPE_NAME: string;
            /** 获取-基于类型 */
            /** 设置-基于类型 */
            baseDocumentType: string;
            /** 映射的属性名称-基于标识 */
            static PROPERTY_BASEDOCUMENTENTRY_NAME: string;
            /** 获取-基于标识 */
            /** 设置-基于标识 */
            baseDocumentEntry: number;
            /** 映射的属性名称-基于行号 */
            static PROPERTY_BASEDOCUMENTLINEID_NAME: string;
            /** 获取-基于行号 */
            /** 设置-基于行号 */
            baseDocumentLineId: number;
            /** 映射的属性名称-原始类型 */
            static PROPERTY_ORIGINALDOCUMENTTYPE_NAME: string;
            /** 获取-原始类型 */
            /** 设置-原始类型 */
            originalDocumentType: string;
            /** 映射的属性名称-原始标识 */
            static PROPERTY_ORIGINALDOCUMENTENTRY_NAME: string;
            /** 获取-原始标识 */
            /** 设置-原始标识 */
            originalDocumentEntry: number;
            /** 映射的属性名称-原始行号 */
            static PROPERTY_ORIGINALDOCUMENTLINEID_NAME: string;
            /** 获取-原始行号 */
            /** 设置-原始行号 */
            originalDocumentLineId: number;
            /** 映射的属性名称-物料编码 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-物料编码 */
            /** 设置-物料编码 */
            itemCode: string;
            /** 映射的属性名称-物料/服务描述 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            /** 获取-物料/服务描述 */
            /** 设置-物料/服务描述 */
            itemDescription: string;
            /** 映射的属性名称-序号管理 */
            static PROPERTY_SERIALMANAGEMENT_NAME: string;
            /** 获取-序号管理 */
            /** 设置-序号管理 */
            serialManagement: ibas.emYesNo;
            /** 映射的属性名称-批号管理 */
            static PROPERTY_BATCHMANAGEMENT_NAME: string;
            /** 获取-批号管理 */
            /** 设置-批号管理 */
            batchManagement: ibas.emYesNo;
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            /** 设置-数量 */
            quantity: number;
            /** 映射的属性名称-计量单位 */
            static PROPERTY_UOM_NAME: string;
            /** 获取-计量单位 */
            /** 设置-计量单位 */
            uom: string;
            /** 映射的属性名称-仓库 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库 */
            /** 设置-仓库 */
            warehouse: string;
            /** 映射的属性名称-价格 */
            static PROPERTY_PRICE_NAME: string;
            /** 获取-价格 */
            /** 设置-价格 */
            price: number;
            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string;
            /** 获取-货币 */
            /** 设置-货币 */
            currency: string;
            /** 映射的属性名称-汇率 */
            static PROPERTY_RATE_NAME: string;
            /** 获取-汇率 */
            /** 设置-汇率 */
            rate: number;
            /** 映射的属性名称-行总计 */
            static PROPERTY_LINETOTAL_NAME: string;
            /** 获取-行总计 */
            /** 设置-行总计 */
            lineTotal: number;
            /** 映射的属性名称-行交货日期 */
            static PROPERTY_DELIVERYDATE_NAME: string;
            /** 获取-行交货日期 */
            /** 设置-行交货日期 */
            deliveryDate: Date;
            /** 映射的属性名称-已清数量 */
            static PROPERTY_CLOSEDQUANTITY_NAME: string;
            /** 获取-已清数量 */
            /** 设置-已清数量 */
            closedQuantity: number;
            /** 映射的属性名称-行折扣 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-行折扣 */
            /** 设置-行折扣 */
            discount: number;
            /** 映射的属性名称-已清金额 */
            static PROPERTY_CLOSEDAMOUNT_NAME: string;
            /** 获取-已清金额 */
            /** 设置-已清金额 */
            closedAmount: number;
            /** 映射的属性名称-科目代码 */
            static PROPERTY_ACCOUNTCODE_NAME: string;
            /** 获取-科目代码 */
            /** 设置-科目代码 */
            accountCode: string;
            /** 映射的属性名称-折扣前价格 */
            static PROPERTY_UNITPRICE_NAME: string;
            /** 获取-折扣前价格 */
            /** 设置-折扣前价格 */
            unitPrice: number;
            /** 映射的属性名称-税定义 */
            static PROPERTY_TAX_NAME: string;
            /** 获取-税定义 */
            /** 设置-税定义 */
            tax: string;
            /** 映射的属性名称-税率 */
            static PROPERTY_TAXRATE_NAME: string;
            /** 获取-税率 */
            /** 设置-税率 */
            taxRate: number;
            /** 映射的属性名称-税总额 */
            static PROPERTY_TAXTOTAL_NAME: string;
            /** 获取-税总额 */
            /** 设置-税总额 */
            taxTotal: number;
            /** 映射的属性名称-毛价 */
            static PROPERTY_GROSSPRICE_NAME: string;
            /** 获取-毛价 */
            /** 设置-毛价 */
            grossPrice: number;
            /** 映射的属性名称-毛总额 */
            static PROPERTY_GROSSTOTAL_NAME: string;
            /** 获取-毛总额 */
            /** 设置-毛总额 */
            grossTotal: number;
            /** 映射的属性名称-分配规则1 */
            static PROPERTY_DISTRIBUTIONRULE1_NAME: string;
            /** 获取-分配规则1 */
            /** 设置-分配规则1 */
            distributionRule1: string;
            /** 映射的属性名称-分配规则2 */
            static PROPERTY_DISTRIBUTIONRULE2_NAME: string;
            /** 获取-分配规则2 */
            /** 设置-分配规则2 */
            distributionRule2: string;
            /** 映射的属性名称-分配规则3 */
            static PROPERTY_DISTRIBUTIONRULE3_NAME: string;
            /** 获取-分配规则3 */
            /** 设置-分配规则3 */
            distributionRule3: string;
            /** 映射的属性名称-分配规则4 */
            static PROPERTY_DISTRIBUTIONRULE4_NAME: string;
            /** 获取-分配规则4 */
            /** 设置-分配规则4 */
            distributionRule4: string;
            /** 映射的属性名称-分配规则5 */
            static PROPERTY_DISTRIBUTIONRULE5_NAME: string;
            /** 获取-分配规则5 */
            /** 设置-分配规则5 */
            distributionRule5: string;
            /** 初始化数据 */
            protected init(): void;
            protected registerRules(): ibas.IBusinessRule[];
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace bo {
        /** 送货地址 */
        class ShippingAddress extends ibas.BOSimple<ShippingAddress> implements IShippingAddress {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-基于类型 */
            static PROPERTY_BASEDOCUMENTTYPE_NAME: string;
            /** 获取-基于类型 */
            /** 设置-基于类型 */
            baseDocumentType: string;
            /** 映射的属性名称-基于标识 */
            static PROPERTY_BASEDOCUMENTENTRY_NAME: string;
            /** 获取-基于标识 */
            /** 设置-基于标识 */
            baseDocumentEntry: number;
            /** 映射的属性名称-名称 */
            static PROPERTY_NAME_NAME: string;
            /** 获取-名称 */
            /** 设置-名称 */
            name: string;
            /** 映射的属性名称-顺序 */
            static PROPERTY_ORDER_NAME: string;
            /** 获取-顺序 */
            /** 设置-顺序 */
            order: number;
            /** 映射的属性名称-送货状态 */
            static PROPERTY_SHIPPINGSTATUS_NAME: string;
            /** 获取-送货状态 */
            /** 设置-送货状态 */
            shippingStatus: emShippingStatus;
            /** 映射的属性名称-收货人 */
            static PROPERTY_CONSIGNEE_NAME: string;
            /** 获取-收货人 */
            /** 设置-收货人 */
            consignee: string;
            /** 映射的属性名称-街道 */
            static PROPERTY_STREET_NAME: string;
            /** 获取-街道 */
            /** 设置-街道 */
            street: string;
            /** 映射的属性名称-县/区 */
            static PROPERTY_DISTRICT_NAME: string;
            /** 获取-县/区 */
            /** 设置-县/区 */
            district: string;
            /** 映射的属性名称-市 */
            static PROPERTY_CITY_NAME: string;
            /** 获取-市 */
            /** 设置-市 */
            city: string;
            /** 映射的属性名称-省 */
            static PROPERTY_PROVINCE_NAME: string;
            /** 获取-省 */
            /** 设置-省 */
            province: string;
            /** 映射的属性名称-国 */
            static PROPERTY_COUNTRY_NAME: string;
            /** 获取-国 */
            /** 设置-国 */
            country: string;
            /** 映射的属性名称-邮编 */
            static PROPERTY_ZIPCODE_NAME: string;
            /** 获取-邮编 */
            /** 设置-邮编 */
            zipCode: string;
            /** 映射的属性名称-联系电话 */
            static PROPERTY_MOBILEPHONE_NAME: string;
            /** 获取-联系电话 */
            /** 设置-联系电话 */
            mobilePhone: string;
            /** 映射的属性名称-电话  */
            static PROPERTY_TELEPHONE_NAME: string;
            /** 获取-电话  */
            /** 设置-电话  */
            telephone: string;
            /** 映射的属性名称-备注 1 */
            static PROPERTY_REMARK1_NAME: string;
            /** 获取-备注 1 */
            /** 设置-备注 1 */
            remark1: string;
            /** 映射的属性名称-备注 2 */
            static PROPERTY_REMARK2_NAME: string;
            /** 获取-备注 2 */
            /** 设置-备注 2 */
            remark2: string;
            /** 映射的属性名称-费用 */
            static PROPERTY_EXPENSE_NAME: string;
            /** 获取-费用 */
            /** 设置-费用 */
            expense: number;
            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string;
            /** 获取-货币 */
            /** 设置-货币 */
            currency: string;
            /** 映射的属性名称-快递单号 */
            static PROPERTY_TRACKINGNUMBER_NAME: string;
            /** 获取-快递单号 */
            /** 设置-快递单号 */
            trackingNumber: string;
            /** 映射的属性名称-对象编号 */
            static PROPERTY_OBJECTKEY_NAME: string;
            /** 获取-对象编号 */
            /** 设置-对象编号 */
            objectKey: number;
            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-对象类型 */
            /** 设置-对象类型 */
            objectCode: string;
            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string;
            /** 获取-创建日期 */
            /** 设置-创建日期 */
            createDate: Date;
            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string;
            /** 获取-创建时间 */
            /** 设置-创建时间 */
            createTime: number;
            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-修改日期 */
            /** 设置-修改日期 */
            updateDate: Date;
            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-修改时间 */
            /** 设置-修改时间 */
            updateTime: number;
            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-实例号（版本） */
            /** 设置-实例号（版本） */
            logInst: number;
            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string;
            /** 获取-服务系列 */
            /** 设置-服务系列 */
            series: number;
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            /** 设置-数据源 */
            dataSource: string;
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            /** 设置-创建用户 */
            createUserSign: number;
            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-修改用户 */
            /** 设置-修改用户 */
            updateUserSign: number;
            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string;
            /** 获取-创建动作标识 */
            /** 设置-创建动作标识 */
            createActionId: string;
            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string;
            /** 获取-更新动作标识 */
            /** 设置-更新动作标识 */
            updateActionId: string;
            /** 初始化数据 */
            protected init(): void;
        }
        /** 送货地址 集合 */
        class ShippingAddresss extends ibas.BusinessObjects<ShippingAddress, ibas.IBODocument> implements IShippingAddresss {
            /** 创建并添加子项 */
            create(): ShippingAddress;
            /** 添加子项后 子项属性赋值 */
            protected afterAdd(item: ShippingAddress): void;
            /** 主表属性发生变化后 子项属性赋值  */
            protected onParentPropertyChanged(name: string): void;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace bo {
        /** 数据转换者 */
        class DataConverter extends ibas.DataConverter4j {
            /** 创建业务对象转换者 */
            protected createConverter(): ibas.BOConverter;
        }
        /** 模块业务对象工厂 */
        const boFactory: ibas.BOFactory;
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace bo {
        /** 业务对象仓库 */
        class BORepositoryPurchase extends ibas.BORepositoryApplication implements IBORepositoryPurchase {
            /** 创建此模块的后端与前端数据的转换者 */
            protected createConverter(): ibas.IDataConverter;
            /**
             * 上传文件
             * @param caller 调用者
             */
            upload(caller: ibas.IUploadFileCaller<ibas.FileData>): void;
            /**
             * 下载文件
             * @param caller 调用者
             */
            download(caller: ibas.IDownloadFileCaller<Blob>): void;
            /**
             * 查询 采购收货
             * @param fetcher 查询者
             */
            fetchPurchaseDelivery(fetcher: ibas.IFetchCaller<bo.PurchaseDelivery>): void;
            /**
             * 保存 采购收货
             * @param saver 保存者
             */
            savePurchaseDelivery(saver: ibas.ISaveCaller<bo.PurchaseDelivery>): void;
            /**
             * 查询 采购订单
             * @param fetcher 查询者
             */
            fetchPurchaseOrder(fetcher: ibas.IFetchCaller<bo.PurchaseOrder>): void;
            /**
             * 保存 采购订单
             * @param saver 保存者
             */
            savePurchaseOrder(saver: ibas.ISaveCaller<bo.PurchaseOrder>): void;
            /**
             * 查询 采购退货
             * @param fetcher 查询者
             */
            fetchPurchaseReturn(fetcher: ibas.IFetchCaller<bo.PurchaseReturn>): void;
            /**
             * 保存 采购退货
             * @param saver 保存者
             */
            savePurchaseReturn(saver: ibas.ISaveCaller<bo.PurchaseReturn>): void;
            /**
             * 查询 采购报价
             * @param fetcher 查询者
             */
            fetchPurchaseQuote(fetcher: ibas.IFetchCaller<bo.PurchaseQuote>): void;
            /**
             * 保存 采购报价
             * @param saver 保存者
             */
            savePurchaseQuote(saver: ibas.ISaveCaller<bo.PurchaseQuote>): void;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace bo {
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace app {
        /** 选择应用-采购收货 */
        class PurchaseDeliveryChooseApp extends ibas.BOChooseService<IPurchaseDeliveryChooseView, bo.PurchaseDelivery> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria): void;
            /** 新建数据 */
            protected newData(): void;
        }
        /** 视图-采购收货 */
        interface IPurchaseDeliveryChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.PurchaseDelivery[]): void;
        }
        /** 采购收货选择服务映射 */
        class PurchaseDeliveryChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.PurchaseDelivery>>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace app {
        /** 编辑应用-采购收货 */
        class PurchaseDeliveryEditApp extends ibas.BOEditApplication<IPurchaseDeliveryEditView, bo.PurchaseDelivery> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.PurchaseDelivery): void;
            /** 待编辑的数据 */
            protected editData: bo.PurchaseDelivery;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
            /** 选择供应商信息 */
            private choosePurchaseDeliverySupplier;
            /** 选择价格清单事件 */
            private choosePurchaseDeliveryPriceList;
            /** 选择物料主数据 */
            private choosePurchaseDeliveryItemMaterial;
            /** 采购收货-行 选择仓库主数据 */
            private choosePurchaseDeliveryItemWarehouse;
            /** 添加采购收货-行事件 */
            private addPurchaseDeliveryItem;
            /** 删除采购收货-行事件 */
            private removePurchaseDeliveryItem;
            /** 选择物料批次事件 */
            private choosePurchaseDeliveryItemMaterialBatch;
            /** 选择物料序列事件 */
            private choosePurchaseDeliveryItemMaterialSerial;
            /** 选择采购收货-采购订单事件 */
            private choosePurchaseDeliveryPurchaseOrder;
            private editShippingAddresses;
        }
        /** 视图-采购收货 */
        interface IPurchaseDeliveryEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showPurchaseDelivery(data: bo.PurchaseDelivery): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加采购收货-行事件 */
            addPurchaseDeliveryItemEvent: Function;
            /** 删除采购收货-行事件 */
            removePurchaseDeliveryItemEvent: Function;
            /** 选择采购收货供应商信息 */
            choosePurchaseDeliverySupplierEvent: Function;
            /** 选择采购收货价格清单信息 */
            choosePurchaseDeliveryPriceListEvent: Function;
            /** 选择采购收货-行物料主数据 */
            choosePurchaseDeliveryItemMaterialEvent: Function;
            /** 选择采购收货-行 仓库 */
            choosePurchaseDeliveryItemWarehouseEvent: Function;
            /** 选择采购收货-行 物料序列事件 */
            choosePurchaseDeliveryItemMaterialSerialEvent: Function;
            /** 选择采购收货-行 物料批次事件 */
            choosePurchaseDeliveryItemMaterialBatchEvent: Function;
            /** 显示数据 */
            showPurchaseDeliveryItems(datas: bo.PurchaseDeliveryItem[]): void;
            /** 选择采购收货-采购订单事件 */
            choosePurchaseDeliveryPurchaseOrderEvent: Function;
            /** 编辑地址事件 */
            editShippingAddressesEvent: Function;
            /** 默认仓库 */
            defaultWarehouse: string;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace app {
        class PurchaseDeliveryFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID: string;
            /** 功能名称 */
            static FUNCTION_NAME: string;
            /** 构造函数 */
            constructor();
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace app {
        /** 列表应用-采购收货 */
        class PurchaseDeliveryListApp extends ibas.BOListApplication<IPurchaseDeliveryListView, bo.PurchaseDelivery> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria): void;
            /** 新建数据 */
            protected newData(): void;
            /** 查看数据，参数：目标数据 */
            protected viewData(data: bo.PurchaseDelivery): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.PurchaseDelivery): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.PurchaseDelivery | bo.PurchaseDelivery[]): void;
        }
        /** 视图-采购收货 */
        interface IPurchaseDeliveryListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.PurchaseDelivery[]): void;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace app {
        /** 查看应用-采购收货 */
        class PurchaseDeliveryViewApp extends ibas.BOViewService<IPurchaseDeliveryViewView, bo.PurchaseDelivery> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(): void;
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.PurchaseDelivery): void;
            protected viewData: bo.PurchaseDelivery;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-采购收货 */
        interface IPurchaseDeliveryViewView extends ibas.IBOViewView {
            showPurchaseDelivery(data: bo.PurchaseDelivery): void;
            showPurchaseDeliveryItems(data: bo.PurchaseDeliveryItem[]): void;
        }
        /** 采购收货连接服务映射 */
        class PurchaseDeliveryLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOLinkServiceCaller>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace app {
        /** 选择应用-采购订单 */
        class PurchaseOrderChooseApp extends ibas.BOChooseService<IPurchaseOrderChooseView, bo.PurchaseOrder> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria): void;
            /** 新建数据 */
            protected newData(): void;
        }
        /** 视图-采购订单 */
        interface IPurchaseOrderChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.PurchaseOrder[]): void;
        }
        /** 采购订单选择服务映射 */
        class PurchaseOrderChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.PurchaseOrder>>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace app {
        /** 编辑应用-采购订单 */
        class PurchaseOrderEditApp extends ibas.BOEditApplication<IPurchaseOrderEditView, bo.PurchaseOrder> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.PurchaseOrder): void;
            /** 待编辑的数据 */
            protected editData: bo.PurchaseOrder;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            private deleteData;
            /** 新建数据，参数1：是否克隆 */
            private createData;
            private choosePurchaseOrderSupplier;
            /** 选择价格清单事件 */
            private choosePurchaseOrderPriceList;
            private choosePurchaseOrderItemWarehouse;
            private choosePurchaseOrderItemMaterial;
            /** 添加采购订单-行事件 */
            private addPurchaseOrderItem;
            /** 删除采购订单-行事件 */
            private removePurchaseOrderItem;
            /** 选择物料批次事件 */
            private choosePurchaseOrderItemMaterialBatch;
            /** 选择物料序列事件 */
            private choosePurchaseOrderItemMaterialSerial;
            /** 选择采购订单-采购报价事件 */
            private choosePurchaseOrderPurchaseQuote;
            private editShippingAddresses;
        }
        /** 视图-采购订单 */
        interface IPurchaseOrderEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showPurchaseOrder(data: bo.PurchaseOrder): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加采购订单-行事件 */
            addPurchaseOrderItemEvent: Function;
            /** 删除采购订单-行事件 */
            removePurchaseOrderItemEvent: Function;
            /** 选择采购订单供应商信息 */
            choosePurchaseOrderSupplierEvent: Function;
            /** 选择采购订单价格清单信息 */
            choosePurchaseOrderPriceListEvent: Function;
            /** 选择采购订单-行物料主数据 */
            choosePurchaseOrderItemMaterialEvent: Function;
            /** 选择采购订单-行 仓库 */
            choosePurchaseOrderItemWarehouseEvent: Function;
            /** 选择采购订单-行 物料序列事件 */
            choosePurchaseOrderItemMaterialSerialEvent: Function;
            /** 选择采购订单-行 物料批次事件 */
            choosePurchaseOrderItemMaterialBatchEvent: Function;
            /** 显示数据 */
            showPurchaseOrderItems(datas: bo.PurchaseOrderItem[]): void;
            /** 选择采购订单-采购报价事件 */
            choosePurchaseOrderPurchaseQuoteEvent: Function;
            /** 编辑地址事件 */
            editShippingAddressesEvent: Function;
            /** 默认仓库 */
            defaultWarehouse: string;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace app {
        class PurchaseOrderFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID: string;
            /** 功能名称 */
            static FUNCTION_NAME: string;
            /** 构造函数 */
            constructor();
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace app {
        /** 列表应用-采购订单 */
        class PurchaseOrderListApp extends ibas.BOListApplication<IPurchaseOrderListView, bo.PurchaseOrder> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria): void;
            /** 新建数据 */
            protected newData(): void;
            /** 查看数据，参数：目标数据 */
            protected viewData(data: bo.PurchaseOrder): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.PurchaseOrder): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.PurchaseOrder | bo.PurchaseOrder[]): void;
        }
        /** 视图-采购订单 */
        interface IPurchaseOrderListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.PurchaseOrder[]): void;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace app {
        /** 查看应用-采购订单 */
        class PurchaseOrderViewApp extends ibas.BOViewService<IPurchaseOrderViewView, bo.PurchaseOrder> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(): void;
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.PurchaseOrder): void;
            protected viewData: bo.PurchaseOrder;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-采购订单 */
        interface IPurchaseOrderViewView extends ibas.IBOViewView {
            showPurchaseOrder(data: bo.PurchaseOrder): void;
            showPurchaseOrderItems(data: bo.PurchaseOrderItem[]): void;
        }
        /** 采购订单连接服务映射 */
        class PurchaseOrderLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOLinkServiceCaller>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace app {
        /** 选择应用-采购退货 */
        class PurchaseReturnChooseApp extends ibas.BOChooseService<IPurchaseReturnChooseView, bo.PurchaseReturn> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria): void;
            /** 新建数据 */
            protected newData(): void;
        }
        /** 视图-采购退货 */
        interface IPurchaseReturnChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.PurchaseReturn[]): void;
        }
        /** 采购退货选择服务映射 */
        class PurchaseReturnChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.PurchaseReturn>>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace app {
        /** 编辑应用-采购退货 */
        class PurchaseReturnEditApp extends ibas.BOEditApplication<IPurchaseReturnEditView, bo.PurchaseReturn> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.PurchaseReturn): void;
            /** 待编辑的数据 */
            protected editData: bo.PurchaseReturn;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
            private choosePurchaseReturnSupplier;
            /** 选择价格清单事件 */
            private choosePurchaseReturnPriceList;
            private choosePurchaseReturnItemWarehouse;
            private choosePurchaseReturnItemMaterial;
            /** 添加采购退货-行事件 */
            private addPurchaseReturnItem;
            /** 删除采购退货-行事件 */
            private removePurchaseReturnItem;
            /** 选择物料批次事件 */
            private choosePurchaseReturnItemMaterialBatch;
            /** 选择物料序列事件 */
            private choosePurchaseReturnItemMaterialSerial;
            /** 选择采购退货项目-采购订单事件 */
            private choosePurchaseReturnPurchaseOrder;
            /** 选择采购退货项目-采购收货事件 */
            private choosePurchaseReturnPurchaseDelivery;
            private editShippingAddresses;
        }
        /** 视图-采购退货 */
        interface IPurchaseReturnEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showPurchaseReturn(data: bo.PurchaseReturn): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加采购退货-行事件 */
            addPurchaseReturnItemEvent: Function;
            /** 删除采购退货-行事件 */
            removePurchaseReturnItemEvent: Function;
            /** 选择采购退货供应商信息 */
            choosePurchaseReturnSupplierEvent: Function;
            /** 选择采购退货价格清单信息 */
            choosePurchaseReturnPriceListEvent: Function;
            /** 选择采购退货-行物料主数据 */
            choosePurchaseReturnItemMaterialEvent: Function;
            /** 选择采购退货-行 仓库 */
            choosePurchaseReturnItemWarehouseEvent: Function;
            /** 选择采购退货-行 物料序列事件 */
            choosePurchaseReturnItemMaterialSerialEvent: Function;
            /** 选择采购退货-行 物料批次事件 */
            choosePurchaseReturnItemMaterialBatchEvent: Function;
            /** 显示数据 */
            showPurchaseReturnItems(datas: bo.PurchaseReturnItem[]): void;
            /** 选择采购退货项目-采购订单事件 */
            choosePurchaseReturnPurchaseOrderEvent: Function;
            /** 选择采购退货项目-采购交货事件 */
            choosePurchaseReturnPurchaseDeliveryEvent: Function;
            /** 编辑地址事件 */
            editShippingAddressesEvent: Function;
            /** 默认仓库 */
            defaultWarehouse: string;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace app {
        class PurchaseReturnFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID: string;
            /** 功能名称 */
            static FUNCTION_NAME: string;
            /** 构造函数 */
            constructor();
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace app {
        /** 列表应用-采购退货 */
        class PurchaseReturnListApp extends ibas.BOListApplication<IPurchaseReturnListView, bo.PurchaseReturn> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria): void;
            /** 新建数据 */
            protected newData(): void;
            /** 查看数据，参数：目标数据 */
            protected viewData(data: bo.PurchaseReturn): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.PurchaseReturn): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.PurchaseReturn | bo.PurchaseReturn[]): void;
        }
        /** 视图-采购退货 */
        interface IPurchaseReturnListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.PurchaseReturn[]): void;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace app {
        /** 查看应用-采购退货 */
        class PurchaseReturnViewApp extends ibas.BOViewService<IPurchaseReturnViewView, bo.PurchaseReturn> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(): void;
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.PurchaseReturn): void;
            protected viewData: bo.PurchaseReturn;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-采购退货 */
        interface IPurchaseReturnViewView extends ibas.IBOViewView {
            showPurchaseReturn(data: bo.PurchaseReturn): void;
            showPurchaseReturnItems(data: bo.PurchaseReturnItem[]): void;
        }
        /** 采购退货连接服务映射 */
        class PurchaseReturnLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOLinkServiceCaller>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace app {
        /** 选择应用-采购订单 */
        class PurchaseQuoteChooseApp extends ibas.BOChooseService<IPurchaseQuoteChooseView, bo.PurchaseQuote> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria): void;
            /** 新建数据 */
            protected newData(): void;
        }
        /** 视图-采购订单 */
        interface IPurchaseQuoteChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.PurchaseQuote[]): void;
        }
        /** 采购订单选择服务映射 */
        class PurchaseQuoteChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.PurchaseQuote>>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace app {
        /** 编辑应用-采购订单 */
        class PurchaseQuoteEditApp extends ibas.BOEditApplication<IPurchaseQuoteEditView, bo.PurchaseQuote> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.PurchaseQuote): void;
            /** 待编辑的数据 */
            protected editData: bo.PurchaseQuote;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            private deleteData;
            /** 新建数据，参数1：是否克隆 */
            private createData;
            private choosePurchaseQuoteSupplier;
            /** 选择价格清单事件 */
            private choosePurchaseQuotePriceList;
            private choosePurchaseQuoteItemWarehouse;
            private choosePurchaseQuoteItemMaterial;
            /** 添加采购订单-行事件 */
            private addPurchaseQuoteItem;
            /** 删除采购订单-行事件 */
            private removePurchaseQuoteItem;
        }
        /** 视图-采购订单 */
        interface IPurchaseQuoteEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showPurchaseQuote(data: bo.PurchaseQuote): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加采购订单-行事件 */
            addPurchaseQuoteItemEvent: Function;
            /** 删除采购订单-行事件 */
            removePurchaseQuoteItemEvent: Function;
            /** 选择采购订单供应商信息 */
            choosePurchaseQuoteSupplierEvent: Function;
            /** 选择采购订单价格清单信息 */
            choosePurchaseQuotePriceListEvent: Function;
            /** 选择采购订单-行物料主数据 */
            choosePurchaseQuoteItemMaterialEvent: Function;
            /** 选择采购订单-行 仓库 */
            choosePurchaseQuoteItemWarehouseEvent: Function;
            /** 显示数据 */
            showPurchaseQuoteItems(datas: bo.PurchaseQuoteItem[]): void;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace app {
        class PurchaseQuoteFunc extends ibas.ModuleFunction {
            /** 功能标识 */
            static FUNCTION_ID: string;
            /** 功能名称 */
            static FUNCTION_NAME: string;
            /** 构造函数 */
            constructor();
            /** 默认功能 */
            default(): ibas.IApplication<ibas.IView>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace app {
        /** 列表应用-采购订单 */
        class PurchaseQuoteListApp extends ibas.BOListApplication<IPurchaseQuoteListView, bo.PurchaseQuote> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria): void;
            /** 新建数据 */
            protected newData(): void;
            /** 查看数据，参数：目标数据 */
            protected viewData(data: bo.PurchaseQuote): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.PurchaseQuote): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.PurchaseQuote | bo.PurchaseQuote[]): void;
        }
        /** 视图-采购订单 */
        interface IPurchaseQuoteListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.PurchaseQuote[]): void;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace app {
        /** 查看应用-采购订单 */
        class PurchaseQuoteViewApp extends ibas.BOViewService<IPurchaseQuoteViewView, bo.PurchaseQuote> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(): void;
            /** 运行,覆盖原方法 */
            run(): void;
            run(data: bo.PurchaseQuote): void;
            protected viewData: bo.PurchaseQuote;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-采购订单 */
        interface IPurchaseQuoteViewView extends ibas.IBOViewView {
            showPurchaseQuote(data: bo.PurchaseQuote): void;
            showPurchaseQuoteItems(data: bo.PurchaseQuoteItem[]): void;
        }
        /** 采购订单连接服务映射 */
        class PurchaseQuoteLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOLinkServiceCaller>;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace app {
        /** 编辑应用-送货地址 */
        class ShippingAddressesEditApp extends ibas.BOApplication<IShippingAddressesEditView> {
            /** 应用标识 */
            static APPLICATION_ID: string;
            /** 应用名称 */
            static APPLICATION_NAME: string;
            /** 构造函数 */
            constructor();
            /** 注册视图 */
            protected registerView(): void;
            /** 视图显示后 */
            protected viewShowed(): void;
            run(): void;
            run(datas: bo.ShippingAddresss): void;
            /** 待编辑的数据 */
            protected editAddresses: bo.ShippingAddresss;
            /** 删除数据 */
            protected deleteData(data: bo.ShippingAddress): void;
            /** 新建数据 */
            protected createData(): void;
            /** 待编辑的数据 */
            protected editAddress: bo.ShippingAddress;
            /** 编辑数据 */
            protected editData(data: bo.ShippingAddress): void;
            /** 关闭视图 */
            close(): void;
            onClosed: Function;
        }
        /** 视图-送货地址 */
        interface IShippingAddressesEditView extends ibas.IBOView {
            /** 显示数据 */
            showShippingAddresses(datas: bo.ShippingAddress[]): void;
            /** 编辑数据事件 */
            editDataEvent: Function;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件 */
            createDataEvent: Function;
            /** 显示数据 */
            showShippingAddress(data: bo.ShippingAddress): void;
        }
    }
}
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace purchase {
    namespace app {
        /** 模块控制台 */
        class Console extends ibas.ModuleConsole {
            /** 构造函数 */
            constructor();
            private _navigation;
            /** 创建视图导航 */
            navigation(): ibas.IViewNavigation;
            /** 初始化 */
            protected registers(): void;
            /** 运行 */
            run(): void;
        }
        /** 模块控制台，手机端 */
        class ConsolePhone extends Console {
            /** 初始化 */
            protected registers(): void;
        }
    }
}

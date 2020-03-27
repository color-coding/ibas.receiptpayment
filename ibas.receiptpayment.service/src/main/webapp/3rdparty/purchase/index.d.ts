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
        /** 业务对象编码-采购申请 */
        const BO_CODE_PURCHASEREQUEST: string;
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
            /** 终端客户 */
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
            /** 物料标识 */
            itemSign: string;
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
            /** 折扣前价格 */
            unitPrice: number;
            /** 税定义 */
            tax: string;
            /** 税率 */
            taxRate: number;
            /** 税总额 */
            taxTotal: number;
            /** 税前价格 */
            preTaxPrice: number;
            /** 税前行总计 */
            preTaxLineTotal: number;
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
            /** 赋值产品 */
            baseProduct(source: materials.bo.IProduct): void;
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
            /** 终端客户 */
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
            /** 物料标识 */
            itemSign: string;
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
            /** 折扣前价格 */
            unitPrice: number;
            /** 税定义 */
            tax: string;
            /** 税率 */
            taxRate: number;
            /** 税总额 */
            taxTotal: number;
            /** 税前价格 */
            preTaxPrice: number;
            /** 税前行总计 */
            preTaxLineTotal: number;
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
            /** 采购订单-行-额外信息集合 */
            purchaseOrderItemExtras: IPurchaseOrderItemExtras;
            /** 赋值产品 */
            baseProduct(source: materials.bo.IProduct): void;
        }
        /** 采购订单-行-额外信息 集合 */
        interface IPurchaseOrderItemExtras extends ibas.IBusinessObjects<IPurchaseOrderItemExtra> {
            /** 创建并添加子项 */
            create(): IPurchaseOrderItemExtra;
        }
        /** 采购订单-行-额外信息 */
        interface IPurchaseOrderItemExtra extends ibas.IBODocumentLine {
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
            /** 项目行号 */
            itemId: number;
            /** 额外类型 */
            extraType: string;
            /** 额外标识 */
            extraKey: number;
            /** 数量 */
            quantity: number;
            /** 备注 */
            note: string;
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
            /** 终端客户 */
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
            /** 物料标识 */
            itemSign: string;
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
            /** 折扣前价格 */
            unitPrice: number;
            /** 税定义 */
            tax: string;
            /** 税率 */
            taxRate: number;
            /** 税总额 */
            taxTotal: number;
            /** 税前价格 */
            preTaxPrice: number;
            /** 税前行总计 */
            preTaxLineTotal: number;
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
            /** 赋值产品 */
            baseProduct(source: materials.bo.IProduct): void;
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
            /** 终端客户 */
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
            /** 物料标识 */
            itemSign: string;
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
            /** 折扣前价格 */
            unitPrice: number;
            /** 税定义 */
            tax: string;
            /** 税率 */
            taxRate: number;
            /** 税总额 */
            taxTotal: number;
            /** 税前价格 */
            preTaxPrice: number;
            /** 税前行总计 */
            preTaxLineTotal: number;
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
            /** 采购报价-行-额外信息集合 */
            purchaseQuoteItemExtras: IPurchaseQuoteItemExtras;
            /** 赋值产品 */
            baseProduct(source: materials.bo.IProduct): void;
        }
        /** 采购报价-行-额外信息 集合 */
        interface IPurchaseQuoteItemExtras extends ibas.IBusinessObjects<IPurchaseQuoteItemExtra> {
            /** 创建并添加子项 */
            create(): IPurchaseQuoteItemExtra;
        }
        /** 采购报价-行-额外信息 */
        interface IPurchaseQuoteItemExtra extends ibas.IBODocumentLine {
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
            /** 项目行号 */
            itemId: number;
            /** 额外类型 */
            extraType: string;
            /** 额外标识 */
            extraKey: number;
            /** 数量 */
            quantity: number;
            /** 备注 */
            note: string;
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
        /** 采购申请 */
        interface IPurchaseRequest extends ibas.IBODocument, ibas.IBOUserFields {
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
            /** 需求人 */
            requester: string;
            /** 事由 */
            cause: string;
            /** 需求日期 */
            requestDate: Date;
            /** 单据货币 */
            documentCurrency: string;
            /** 单据汇率 */
            documentRate: number;
            /** 单据总计 */
            documentTotal: number;
            /** 价格清单 */
            priceList: number;
            /** 舍入 */
            rounding: ibas.emYesNo;
            /** 舍入差额 */
            diffAmount: number;
            /** 项目代码 */
            project: string;
            /** 单据类型 */
            orderType: string;
            /** 采购申请-行集合 */
            purchaseRequestItems: IPurchaseRequestItems;
        }
        /** 采购申请-行 集合 */
        interface IPurchaseRequestItems extends ibas.IBusinessObjects<IPurchaseRequestItem> {
            /** 创建并添加子项 */
            create(): IPurchaseRequestItem;
        }
        /** 采购申请-行 */
        interface IPurchaseRequestItem extends ibas.IBODocumentLine, ibas.IBOUserFields {
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
            /** 物料标识 */
            itemSign: string;
            /** 序号管理 */
            serialManagement: ibas.emYesNo;
            /** 批号管理 */
            batchManagement: ibas.emYesNo;
            /** 数量 */
            quantity: number;
            /** 单位 */
            uom: string;
            /** 供应商 */
            supplier: string;
            /** 价格 */
            price: number;
            /** 货币 */
            currency: string;
            /** 汇率 */
            rate: number;
            /** 行总计 */
            lineTotal: number;
            /** 需求日期 */
            requestDate: Date;
            /** 已清数量 */
            closedQuantity: number;
            /** 税定义 */
            tax: string;
            /** 税率 */
            taxRate: number;
            /** 税总额 */
            taxTotal: number;
            /** 税前价格 */
            preTaxPrice: number;
            /** 税前行总计 */
            preTaxLineTotal: number;
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
            /** 采购申请-行-额外信息集合 */
            purchaseRequestItemExtras: IPurchaseRequestItemExtras;
        }
        /** 采购申请-行-额外信息 集合 */
        interface IPurchaseRequestItemExtras extends ibas.IBusinessObjects<IPurchaseRequestItemExtra> {
            /** 创建并添加子项 */
            create(): IPurchaseRequestItemExtra;
        }
        /** 采购申请-行-额外信息 */
        interface IPurchaseRequestItemExtra extends ibas.IBODocumentLine {
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
            /** 项目行号 */
            itemId: number;
            /** 额外类型 */
            extraType: string;
            /** 额外标识 */
            extraKey: number;
            /** 数量 */
            quantity: number;
            /** 备注 */
            note: string;
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
            /** 汇率 */
            rate: number;
            /** 快递单号 */
            trackingNumber: string;
            /** 税定义 */
            tax: string;
            /** 税率 */
            taxRate: number;
            /** 税总额 */
            taxTotal: number;
            /** 税前费用 */
            preTaxExpense: number;
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
            /**
             * 查询 采购申请
             * @param fetcher 查询者
             */
            fetchPurchaseRequest(fetcher: ibas.IFetchCaller<bo.IPurchaseRequest>): void;
            /**
             * 保存 采购申请
             * @param saver 保存者
             */
            savePurchaseRequest(saver: ibas.ISaveCaller<bo.IPurchaseRequest>): void;
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
            get docEntry(): number;
            /** 设置-凭证编号 */
            set docEntry(value: number);
            /** 映射的属性名称-期间编号 */
            static PROPERTY_DOCNUM_NAME: string;
            /** 获取-期间编号 */
            get docNum(): number;
            /** 设置-期间编号 */
            set docNum(value: number);
            /** 映射的属性名称-期间 */
            static PROPERTY_PERIOD_NAME: string;
            /** 获取-期间 */
            get period(): number;
            /** 设置-期间 */
            set period(value: number);
            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string;
            /** 获取-取消 */
            get canceled(): ibas.emYesNo;
            /** 设置-取消 */
            set canceled(value: ibas.emYesNo);
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            get status(): ibas.emBOStatus;
            /** 设置-状态 */
            set status(value: ibas.emBOStatus);
            /** 映射的属性名称-审批状态 */
            static PROPERTY_APPROVALSTATUS_NAME: string;
            /** 获取-审批状态 */
            get approvalStatus(): ibas.emApprovalStatus;
            /** 设置-审批状态 */
            set approvalStatus(value: ibas.emApprovalStatus);
            /** 映射的属性名称-单据状态 */
            static PROPERTY_DOCUMENTSTATUS_NAME: string;
            /** 获取-单据状态 */
            get documentStatus(): ibas.emDocumentStatus;
            /** 设置-单据状态 */
            set documentStatus(value: ibas.emDocumentStatus);
            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-对象类型 */
            get objectCode(): string;
            /** 设置-对象类型 */
            set objectCode(value: string);
            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string;
            /** 获取-创建日期 */
            get createDate(): Date;
            /** 设置-创建日期 */
            set createDate(value: Date);
            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string;
            /** 获取-创建时间 */
            get createTime(): number;
            /** 设置-创建时间 */
            set createTime(value: number);
            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-修改日期 */
            get updateDate(): Date;
            /** 设置-修改日期 */
            set updateDate(value: Date);
            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-修改时间 */
            get updateTime(): number;
            /** 设置-修改时间 */
            set updateTime(value: number);
            /** 映射的属性名称-版本 */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-版本 */
            get logInst(): number;
            /** 设置-版本 */
            set logInst(value: number);
            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string;
            /** 获取-服务系列 */
            get series(): number;
            /** 设置-服务系列 */
            set series(value: number);
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            get dataSource(): string;
            /** 设置-数据源 */
            set dataSource(value: string);
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            get createUserSign(): number;
            /** 设置-创建用户 */
            set createUserSign(value: number);
            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-修改用户 */
            get updateUserSign(): number;
            /** 设置-修改用户 */
            set updateUserSign(value: number);
            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string;
            /** 获取-创建动作标识 */
            get createActionId(): string;
            /** 设置-创建动作标识 */
            set createActionId(value: string);
            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string;
            /** 获取-更新动作标识 */
            get updateActionId(): string;
            /** 设置-更新动作标识 */
            set updateActionId(value: string);
            /** 映射的属性名称-数据所有者 */
            static PROPERTY_DATAOWNER_NAME: string;
            /** 获取-数据所有者 */
            get dataOwner(): number;
            /** 设置-数据所有者 */
            set dataOwner(value: number);
            /** 映射的属性名称-团队成员 */
            static PROPERTY_TEAMMEMBERS_NAME: string;
            /** 获取-团队成员 */
            get teamMembers(): string;
            /** 设置-团队成员 */
            set teamMembers(value: string);
            /** 映射的属性名称-数据所属组织 */
            static PROPERTY_ORGANIZATION_NAME: string;
            /** 获取-数据所属组织 */
            get organization(): string;
            /** 设置-数据所属组织 */
            set organization(value: string);
            /** 映射的属性名称-过账日期 */
            static PROPERTY_POSTINGDATE_NAME: string;
            /** 获取-过账日期 */
            get postingDate(): Date;
            /** 设置-过账日期 */
            set postingDate(value: Date);
            /** 映射的属性名称-到期日 */
            static PROPERTY_DELIVERYDATE_NAME: string;
            /** 获取-到期日 */
            get deliveryDate(): Date;
            /** 设置-到期日 */
            set deliveryDate(value: Date);
            /** 映射的属性名称-凭证日期 */
            static PROPERTY_DOCUMENTDATE_NAME: string;
            /** 获取-凭证日期 */
            get documentDate(): Date;
            /** 设置-凭证日期 */
            set documentDate(value: Date);
            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string;
            /** 获取-参考1 */
            get reference1(): string;
            /** 设置-参考1 */
            set reference1(value: string);
            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string;
            /** 获取-参考2 */
            get reference2(): string;
            /** 设置-参考2 */
            set reference2(value: string);
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string;
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo;
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo);
            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string;
            /** 获取-已删除 */
            get deleted(): ibas.emYesNo;
            /** 设置-已删除 */
            set deleted(value: ibas.emYesNo);
            /** 映射的属性名称-供应商代码 */
            static PROPERTY_SUPPLIERCODE_NAME: string;
            /** 获取-供应商代码 */
            get supplierCode(): string;
            /** 设置-供应商代码 */
            set supplierCode(value: string);
            /** 映射的属性名称-供应商名称 */
            static PROPERTY_SUPPLIERNAME_NAME: string;
            /** 获取-供应商名称 */
            get supplierName(): string;
            /** 设置-供应商名称 */
            set supplierName(value: string);
            /** 映射的属性名称-联系人 */
            static PROPERTY_CONTACTPERSON_NAME: string;
            /** 获取-联系人 */
            get contactPerson(): number;
            /** 设置-联系人 */
            set contactPerson(value: number);
            /** 映射的属性名称-折扣 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-折扣 */
            get discount(): number;
            /** 设置-折扣 */
            set discount(value: number);
            /** 映射的属性名称-折扣后总计 */
            static PROPERTY_DISCOUNTTOTAL_NAME: string;
            /** 获取-折扣后总计 */
            get discountTotal(): number;
            /** 设置-折扣后总计 */
            set discountTotal(value: number);
            /** 映射的属性名称-单据货币 */
            static PROPERTY_DOCUMENTCURRENCY_NAME: string;
            /** 获取-单据货币 */
            get documentCurrency(): string;
            /** 设置-单据货币 */
            set documentCurrency(value: string);
            /** 映射的属性名称-单据汇率 */
            static PROPERTY_DOCUMENTRATE_NAME: string;
            /** 获取-单据汇率 */
            get documentRate(): number;
            /** 设置-单据汇率 */
            set documentRate(value: number);
            /** 映射的属性名称-单据总计 */
            static PROPERTY_DOCUMENTTOTAL_NAME: string;
            /** 获取-单据总计 */
            get documentTotal(): number;
            /** 设置-单据总计 */
            set documentTotal(value: number);
            /** 映射的属性名称-已付款总计 */
            static PROPERTY_PAIDTOTAL_NAME: string;
            /** 获取-已付款总计 */
            get paidTotal(): number;
            /** 设置-已付款总计 */
            set paidTotal(value: number);
            /** 映射的属性名称-价格清单 */
            static PROPERTY_PRICELIST_NAME: string;
            /** 获取-价格清单 */
            get priceList(): number;
            /** 设置-价格清单 */
            set priceList(value: number);
            /** 映射的属性名称-付款条款代码 */
            static PROPERTY_PAYMENTCODE_NAME: string;
            /** 获取-付款条款代码 */
            get paymentCode(): string;
            /** 设置-付款条款代码 */
            set paymentCode(value: string);
            /** 映射的属性名称-舍入 */
            static PROPERTY_ROUNDING_NAME: string;
            /** 获取-舍入 */
            get rounding(): ibas.emYesNo;
            /** 设置-舍入 */
            set rounding(value: ibas.emYesNo);
            /** 映射的属性名称-舍入差额 */
            static PROPERTY_DIFFAMOUNT_NAME: string;
            /** 获取-舍入差额 */
            get diffAmount(): number;
            /** 设置-舍入差额 */
            set diffAmount(value: number);
            /** 映射的属性名称-项目代码 */
            static PROPERTY_PROJECT_NAME: string;
            /** 获取-项目代码 */
            get project(): string;
            /** 设置-项目代码 */
            set project(value: string);
            /** 映射的属性名称-终端客户 */
            static PROPERTY_CONSUMER_NAME: string;
            /** 获取-终端客户 */
            get consumer(): string;
            /** 设置-终端客户 */
            set consumer(value: string);
            /** 映射的属性名称-单据类型 */
            static PROPERTY_ORDERTYPE_NAME: string;
            /** 获取-单据类型 */
            get orderType(): string;
            /** 设置-单据类型 */
            set orderType(value: string);
            /** 映射的属性名称-采购收货-行集合 */
            static PROPERTY_PURCHASEDELIVERYITEMS_NAME: string;
            /** 获取-采购收货-行集合 */
            get purchaseDeliveryItems(): PurchaseDeliveryItems;
            /** 设置-采购收货-行集合 */
            set purchaseDeliveryItems(value: PurchaseDeliveryItems);
            /** 映射的属性名称-送货地址集合 */
            static PROPERTY_SHIPPINGADDRESSS_NAME: string;
            /** 获取-送货地址集合 */
            get shippingAddresss(): ShippingAddresss;
            /** 设置-送货地址集合 */
            set shippingAddresss(value: ShippingAddresss);
            /** 初始化数据 */
            protected init(): void;
            /** 映射的属性名称-项目的税总计 */
            static PROPERTY_ITEMSTAXTOTAL_NAME: string;
            /** 获取-项目的税总计 */
            get itemsTaxTotal(): number;
            /** 设置-项目的税总计 */
            set itemsTaxTotal(value: number);
            /** 映射的属性名称-项目的行总计 */
            static PROPERTY_ITEMSLINETOTAL_NAME: string;
            /** 获取-项目的行总计 */
            get itemsLineTotal(): number;
            /** 设置-项目的行总计 */
            set itemsLineTotal(value: number);
            /** 映射的属性名称-运送费税总计 */
            static PROPERTY_SHIPPINGSTAXTOTAL_NAME: string;
            /** 获取-运送费税总计 */
            get shippingsTaxTotal(): number;
            /** 设置-运送费税总计 */
            set shippingsTaxTotal(value: number);
            /** 映射的属性名称-运送费用总计 */
            static PROPERTY_SHIPPINGSEXPENSETOTAL_NAME: string;
            /** 获取-运送费用总计 */
            get shippingsExpenseTotal(): number;
            /** 设置-运送费用总计 */
            set shippingsExpenseTotal(value: number);
            /** 映射的属性名称-单据税总计 */
            static PROPERTY_DOCUMENTTAXTOTAL_NAME: string;
            /** 获取-单据税总计 */
            get documentTaxTotal(): number;
            /** 设置-单据税总计 */
            set documentTaxTotal(value: number);
            protected registerRules(): ibas.IBusinessRule[];
            /** 重置 */
            reset(): void;
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
            get docEntry(): number;
            /** 设置-编码 */
            set docEntry(value: number);
            /** 映射的属性名称-行号 */
            static PROPERTY_LINEID_NAME: string;
            /** 获取-行号 */
            get lineId(): number;
            /** 设置-行号 */
            set lineId(value: number);
            /** 映射的属性名称-显示顺序 */
            static PROPERTY_VISORDER_NAME: string;
            /** 获取-显示顺序 */
            get visOrder(): number;
            /** 设置-显示顺序 */
            set visOrder(value: number);
            /** 映射的属性名称-类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-类型 */
            get objectCode(): string;
            /** 设置-类型 */
            set objectCode(value: string);
            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-实例号（版本） */
            get logInst(): number;
            /** 设置-实例号（版本） */
            set logInst(value: number);
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            get dataSource(): string;
            /** 设置-数据源 */
            set dataSource(value: string);
            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string;
            /** 获取-取消 */
            get canceled(): ibas.emYesNo;
            /** 设置-取消 */
            set canceled(value: ibas.emYesNo);
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            get status(): ibas.emBOStatus;
            /** 设置-状态 */
            set status(value: ibas.emBOStatus);
            /** 映射的属性名称-单据状态 */
            static PROPERTY_LINESTATUS_NAME: string;
            /** 获取-单据状态 */
            get lineStatus(): ibas.emDocumentStatus;
            /** 设置-单据状态 */
            set lineStatus(value: ibas.emDocumentStatus);
            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string;
            /** 获取-创建日期 */
            get createDate(): Date;
            /** 设置-创建日期 */
            set createDate(value: Date);
            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string;
            /** 获取-创建时间 */
            get createTime(): number;
            /** 设置-创建时间 */
            set createTime(value: number);
            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-修改日期 */
            get updateDate(): Date;
            /** 设置-修改日期 */
            set updateDate(value: Date);
            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-修改时间 */
            get updateTime(): number;
            /** 设置-修改时间 */
            set updateTime(value: number);
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            get createUserSign(): number;
            /** 设置-创建用户 */
            set createUserSign(value: number);
            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-修改用户 */
            get updateUserSign(): number;
            /** 设置-修改用户 */
            set updateUserSign(value: number);
            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string;
            /** 获取-创建动作标识 */
            get createActionId(): string;
            /** 设置-创建动作标识 */
            set createActionId(value: string);
            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string;
            /** 获取-更新动作标识 */
            get updateActionId(): string;
            /** 设置-更新动作标识 */
            set updateActionId(value: string);
            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string;
            /** 获取-参考1 */
            get reference1(): string;
            /** 设置-参考1 */
            set reference1(value: string);
            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string;
            /** 获取-参考2 */
            get reference2(): string;
            /** 设置-参考2 */
            set reference2(value: string);
            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string;
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo;
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo);
            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string;
            /** 获取-已删除 */
            get deleted(): ibas.emYesNo;
            /** 设置-已删除 */
            set deleted(value: ibas.emYesNo);
            /** 映射的属性名称-基于类型 */
            static PROPERTY_BASEDOCUMENTTYPE_NAME: string;
            /** 获取-基于类型 */
            get baseDocumentType(): string;
            /** 设置-基于类型 */
            set baseDocumentType(value: string);
            /** 映射的属性名称-基于标识 */
            static PROPERTY_BASEDOCUMENTENTRY_NAME: string;
            /** 获取-基于标识 */
            get baseDocumentEntry(): number;
            /** 设置-基于标识 */
            set baseDocumentEntry(value: number);
            /** 映射的属性名称-基于行号 */
            static PROPERTY_BASEDOCUMENTLINEID_NAME: string;
            /** 获取-基于行号 */
            get baseDocumentLineId(): number;
            /** 设置-基于行号 */
            set baseDocumentLineId(value: number);
            /** 映射的属性名称-原始类型 */
            static PROPERTY_ORIGINALDOCUMENTTYPE_NAME: string;
            /** 获取-原始类型 */
            get originalDocumentType(): string;
            /** 设置-原始类型 */
            set originalDocumentType(value: string);
            /** 映射的属性名称-原始标识 */
            static PROPERTY_ORIGINALDOCUMENTENTRY_NAME: string;
            /** 获取-原始标识 */
            get originalDocumentEntry(): number;
            /** 设置-原始标识 */
            set originalDocumentEntry(value: number);
            /** 映射的属性名称-原始行号 */
            static PROPERTY_ORIGINALDOCUMENTLINEID_NAME: string;
            /** 获取-原始行号 */
            get originalDocumentLineId(): number;
            /** 设置-原始行号 */
            set originalDocumentLineId(value: number);
            /** 映射的属性名称-物料编码 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-物料编码 */
            get itemCode(): string;
            /** 设置-物料编码 */
            set itemCode(value: string);
            /** 映射的属性名称-物料/服务描述 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            /** 获取-物料/服务描述 */
            get itemDescription(): string;
            /** 设置-物料/服务描述 */
            set itemDescription(value: string);
            /** 映射的属性名称-物料标识 */
            static PROPERTY_ITEMSIGN_NAME: string;
            /** 获取-物料标识 */
            get itemSign(): string;
            /** 设置-物料标识 */
            set itemSign(value: string);
            /** 映射的属性名称-序号管理 */
            static PROPERTY_SERIALMANAGEMENT_NAME: string;
            /** 获取-序号管理 */
            get serialManagement(): ibas.emYesNo;
            /** 设置-序号管理 */
            set serialManagement(value: ibas.emYesNo);
            /** 映射的属性名称-批号管理 */
            static PROPERTY_BATCHMANAGEMENT_NAME: string;
            /** 获取-批号管理 */
            get batchManagement(): ibas.emYesNo;
            /** 设置-批号管理 */
            set batchManagement(value: ibas.emYesNo);
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            get quantity(): number;
            /** 设置-数量 */
            set quantity(value: number);
            /** 映射的属性名称-计量单位 */
            static PROPERTY_UOM_NAME: string;
            /** 获取-计量单位 */
            get uom(): string;
            /** 设置-计量单位 */
            set uom(value: string);
            /** 映射的属性名称-仓库 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库 */
            get warehouse(): string;
            /** 设置-仓库 */
            set warehouse(value: string);
            /** 映射的属性名称-价格 */
            static PROPERTY_PRICE_NAME: string;
            /** 获取-价格 */
            get price(): number;
            /** 设置-价格 */
            set price(value: number);
            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string;
            /** 获取-货币 */
            get currency(): string;
            /** 设置-货币 */
            set currency(value: string);
            /** 映射的属性名称-汇率 */
            static PROPERTY_RATE_NAME: string;
            /** 获取-汇率 */
            get rate(): number;
            /** 设置-汇率 */
            set rate(value: number);
            /** 映射的属性名称-行总计 */
            static PROPERTY_LINETOTAL_NAME: string;
            /** 获取-行总计 */
            get lineTotal(): number;
            /** 设置-行总计 */
            set lineTotal(value: number);
            /** 映射的属性名称-行交货日期 */
            static PROPERTY_DELIVERYDATE_NAME: string;
            /** 获取-行交货日期 */
            get deliveryDate(): Date;
            /** 设置-行交货日期 */
            set deliveryDate(value: Date);
            /** 映射的属性名称-已清数量 */
            static PROPERTY_CLOSEDQUANTITY_NAME: string;
            /** 获取-已清数量 */
            get closedQuantity(): number;
            /** 设置-已清数量 */
            set closedQuantity(value: number);
            /** 映射的属性名称-行折扣 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-行折扣 */
            get discount(): number;
            /** 设置-行折扣 */
            set discount(value: number);
            /** 映射的属性名称-已清金额 */
            static PROPERTY_CLOSEDAMOUNT_NAME: string;
            /** 获取-已清金额 */
            get closedAmount(): number;
            /** 设置-已清金额 */
            set closedAmount(value: number);
            /** 映射的属性名称-折扣前价格 */
            static PROPERTY_UNITPRICE_NAME: string;
            /** 获取-折扣前价格 */
            get unitPrice(): number;
            /** 设置-折扣前价格 */
            set unitPrice(value: number);
            /** 映射的属性名称-税定义 */
            static PROPERTY_TAX_NAME: string;
            /** 获取-税定义 */
            get tax(): string;
            /** 设置-税定义 */
            set tax(value: string);
            /** 映射的属性名称-税率 */
            static PROPERTY_TAXRATE_NAME: string;
            /** 获取-税率 */
            get taxRate(): number;
            /** 设置-税率 */
            set taxRate(value: number);
            /** 映射的属性名称-税总额 */
            static PROPERTY_TAXTOTAL_NAME: string;
            /** 获取-税总额 */
            get taxTotal(): number;
            /** 设置-税总额 */
            set taxTotal(value: number);
            /** 映射的属性名称-税前价格 */
            static PROPERTY_PRETAXPRICE_NAME: string;
            /** 获取-税前价格 */
            get preTaxPrice(): number;
            /** 设置-税前价格 */
            set preTaxPrice(value: number);
            /** 映射的属性名称-税前行总计 */
            static PROPERTY_PRETAXLINETOTAL_NAME: string;
            /** 获取-税前行总计 */
            get preTaxLineTotal(): number;
            /** 设置-税前行总计 */
            set preTaxLineTotal(value: number);
            /** 映射的属性名称-分配规则1 */
            static PROPERTY_DISTRIBUTIONRULE1_NAME: string;
            /** 获取-分配规则1 */
            get distributionRule1(): string;
            /** 设置-分配规则1 */
            set distributionRule1(value: string);
            /** 映射的属性名称-分配规则2 */
            static PROPERTY_DISTRIBUTIONRULE2_NAME: string;
            /** 获取-分配规则2 */
            get distributionRule2(): string;
            /** 设置-分配规则2 */
            set distributionRule2(value: string);
            /** 映射的属性名称-分配规则3 */
            static PROPERTY_DISTRIBUTIONRULE3_NAME: string;
            /** 获取-分配规则3 */
            get distributionRule3(): string;
            /** 设置-分配规则3 */
            set distributionRule3(value: string);
            /** 映射的属性名称-分配规则4 */
            static PROPERTY_DISTRIBUTIONRULE4_NAME: string;
            /** 获取-分配规则4 */
            get distributionRule4(): string;
            /** 设置-分配规则4 */
            set distributionRule4(value: string);
            /** 映射的属性名称-分配规则5 */
            static PROPERTY_DISTRIBUTIONRULE5_NAME: string;
            /** 获取-分配规则5 */
            get distributionRule5(): string;
            /** 设置-分配规则5 */
            set distributionRule5(value: string);
            /** 映射的属性名称-物料批次集合 */
            static PROPERTY_MATERIALBATCHES_NAME: string;
            /** 获取-物料批次集合 */
            get materialBatches(): materials.bo.MaterialBatchItems;
            /** 设置-物料批次集合 */
            set materialBatches(value: materials.bo.MaterialBatchItems);
            /** 映射的属性名称-物料序列集合 */
            static PROPERTY_MATERIALSERIALS_NAME: string;
            /** 获取-物料序列集合 */
            get materialSerials(): materials.bo.MaterialSerialItems;
            /** 设置-物料序列集合 */
            set materialSerials(value: materials.bo.MaterialSerialItems);
            /** 初始化数据 */
            protected init(): void;
            /** 赋值产品 */
            baseProduct(source: materials.bo.IProduct): void;
            protected registerRules(): ibas.IBusinessRule[];
            /** 重置 */
            reset(): void;
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
            get docEntry(): number;
            /** 设置-凭证编号 */
            set docEntry(value: number);
            /** 映射的属性名称-期间编号 */
            static PROPERTY_DOCNUM_NAME: string;
            /** 获取-期间编号 */
            get docNum(): number;
            /** 设置-期间编号 */
            set docNum(value: number);
            /** 映射的属性名称-期间 */
            static PROPERTY_PERIOD_NAME: string;
            /** 获取-期间 */
            get period(): number;
            /** 设置-期间 */
            set period(value: number);
            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string;
            /** 获取-取消 */
            get canceled(): ibas.emYesNo;
            /** 设置-取消 */
            set canceled(value: ibas.emYesNo);
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            get status(): ibas.emBOStatus;
            /** 设置-状态 */
            set status(value: ibas.emBOStatus);
            /** 映射的属性名称-审批状态 */
            static PROPERTY_APPROVALSTATUS_NAME: string;
            /** 获取-审批状态 */
            get approvalStatus(): ibas.emApprovalStatus;
            /** 设置-审批状态 */
            set approvalStatus(value: ibas.emApprovalStatus);
            /** 映射的属性名称-单据状态 */
            static PROPERTY_DOCUMENTSTATUS_NAME: string;
            /** 获取-单据状态 */
            get documentStatus(): ibas.emDocumentStatus;
            /** 设置-单据状态 */
            set documentStatus(value: ibas.emDocumentStatus);
            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-对象类型 */
            get objectCode(): string;
            /** 设置-对象类型 */
            set objectCode(value: string);
            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string;
            /** 获取-创建日期 */
            get createDate(): Date;
            /** 设置-创建日期 */
            set createDate(value: Date);
            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string;
            /** 获取-创建时间 */
            get createTime(): number;
            /** 设置-创建时间 */
            set createTime(value: number);
            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-修改日期 */
            get updateDate(): Date;
            /** 设置-修改日期 */
            set updateDate(value: Date);
            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-修改时间 */
            get updateTime(): number;
            /** 设置-修改时间 */
            set updateTime(value: number);
            /** 映射的属性名称-版本 */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-版本 */
            get logInst(): number;
            /** 设置-版本 */
            set logInst(value: number);
            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string;
            /** 获取-服务系列 */
            get series(): number;
            /** 设置-服务系列 */
            set series(value: number);
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            get dataSource(): string;
            /** 设置-数据源 */
            set dataSource(value: string);
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            get createUserSign(): number;
            /** 设置-创建用户 */
            set createUserSign(value: number);
            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-修改用户 */
            get updateUserSign(): number;
            /** 设置-修改用户 */
            set updateUserSign(value: number);
            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string;
            /** 获取-创建动作标识 */
            get createActionId(): string;
            /** 设置-创建动作标识 */
            set createActionId(value: string);
            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string;
            /** 获取-更新动作标识 */
            get updateActionId(): string;
            /** 设置-更新动作标识 */
            set updateActionId(value: string);
            /** 映射的属性名称-数据所有者 */
            static PROPERTY_DATAOWNER_NAME: string;
            /** 获取-数据所有者 */
            get dataOwner(): number;
            /** 设置-数据所有者 */
            set dataOwner(value: number);
            /** 映射的属性名称-团队成员 */
            static PROPERTY_TEAMMEMBERS_NAME: string;
            /** 获取-团队成员 */
            get teamMembers(): string;
            /** 设置-团队成员 */
            set teamMembers(value: string);
            /** 映射的属性名称-数据所属组织 */
            static PROPERTY_ORGANIZATION_NAME: string;
            /** 获取-数据所属组织 */
            get organization(): string;
            /** 设置-数据所属组织 */
            set organization(value: string);
            /** 映射的属性名称-过账日期 */
            static PROPERTY_POSTINGDATE_NAME: string;
            /** 获取-过账日期 */
            get postingDate(): Date;
            /** 设置-过账日期 */
            set postingDate(value: Date);
            /** 映射的属性名称-到期日 */
            static PROPERTY_DELIVERYDATE_NAME: string;
            /** 获取-到期日 */
            get deliveryDate(): Date;
            /** 设置-到期日 */
            set deliveryDate(value: Date);
            /** 映射的属性名称-凭证日期 */
            static PROPERTY_DOCUMENTDATE_NAME: string;
            /** 获取-凭证日期 */
            get documentDate(): Date;
            /** 设置-凭证日期 */
            set documentDate(value: Date);
            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string;
            /** 获取-参考1 */
            get reference1(): string;
            /** 设置-参考1 */
            set reference1(value: string);
            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string;
            /** 获取-参考2 */
            get reference2(): string;
            /** 设置-参考2 */
            set reference2(value: string);
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string;
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo;
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo);
            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string;
            /** 获取-已删除 */
            get deleted(): ibas.emYesNo;
            /** 设置-已删除 */
            set deleted(value: ibas.emYesNo);
            /** 映射的属性名称-供应商代码 */
            static PROPERTY_SUPPLIERCODE_NAME: string;
            /** 获取-供应商代码 */
            get supplierCode(): string;
            /** 设置-供应商代码 */
            set supplierCode(value: string);
            /** 映射的属性名称-供应商名称 */
            static PROPERTY_SUPPLIERNAME_NAME: string;
            /** 获取-供应商名称 */
            get supplierName(): string;
            /** 设置-供应商名称 */
            set supplierName(value: string);
            /** 映射的属性名称-联系人 */
            static PROPERTY_CONTACTPERSON_NAME: string;
            /** 获取-联系人 */
            get contactPerson(): number;
            /** 设置-联系人 */
            set contactPerson(value: number);
            /** 映射的属性名称-折扣 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-折扣 */
            get discount(): number;
            /** 设置-折扣 */
            set discount(value: number);
            /** 映射的属性名称-折扣后总计 */
            static PROPERTY_DISCOUNTTOTAL_NAME: string;
            /** 获取-折扣后总计 */
            get discountTotal(): number;
            /** 设置-折扣后总计 */
            set discountTotal(value: number);
            /** 映射的属性名称-单据货币 */
            static PROPERTY_DOCUMENTCURRENCY_NAME: string;
            /** 获取-单据货币 */
            get documentCurrency(): string;
            /** 设置-单据货币 */
            set documentCurrency(value: string);
            /** 映射的属性名称-单据汇率 */
            static PROPERTY_DOCUMENTRATE_NAME: string;
            /** 获取-单据汇率 */
            get documentRate(): number;
            /** 设置-单据汇率 */
            set documentRate(value: number);
            /** 映射的属性名称-单据总计 */
            static PROPERTY_DOCUMENTTOTAL_NAME: string;
            /** 获取-单据总计 */
            get documentTotal(): number;
            /** 设置-单据总计 */
            set documentTotal(value: number);
            /** 映射的属性名称-已付款总计 */
            static PROPERTY_PAIDTOTAL_NAME: string;
            /** 获取-已付款总计 */
            get paidTotal(): number;
            /** 设置-已付款总计 */
            set paidTotal(value: number);
            /** 映射的属性名称-价格清单 */
            static PROPERTY_PRICELIST_NAME: string;
            /** 获取-价格清单 */
            get priceList(): number;
            /** 设置-价格清单 */
            set priceList(value: number);
            /** 映射的属性名称-付款条款代码 */
            static PROPERTY_PAYMENTCODE_NAME: string;
            /** 获取-付款条款代码 */
            get paymentCode(): string;
            /** 设置-付款条款代码 */
            set paymentCode(value: string);
            /** 映射的属性名称-舍入 */
            static PROPERTY_ROUNDING_NAME: string;
            /** 获取-舍入 */
            get rounding(): ibas.emYesNo;
            /** 设置-舍入 */
            set rounding(value: ibas.emYesNo);
            /** 映射的属性名称-舍入差额 */
            static PROPERTY_DIFFAMOUNT_NAME: string;
            /** 获取-舍入差额 */
            get diffAmount(): number;
            /** 设置-舍入差额 */
            set diffAmount(value: number);
            /** 映射的属性名称-项目代码 */
            static PROPERTY_PROJECT_NAME: string;
            /** 获取-项目代码 */
            get project(): string;
            /** 设置-项目代码 */
            set project(value: string);
            /** 映射的属性名称-终端客户 */
            static PROPERTY_CONSUMER_NAME: string;
            /** 获取-终端客户 */
            get consumer(): string;
            /** 设置-终端客户 */
            set consumer(value: string);
            /** 映射的属性名称-单据类型 */
            static PROPERTY_ORDERTYPE_NAME: string;
            /** 获取-单据类型 */
            get orderType(): string;
            /** 设置-单据类型 */
            set orderType(value: string);
            /** 映射的属性名称-采购订单-行集合 */
            static PROPERTY_PURCHASEORDERITEMS_NAME: string;
            /** 获取-采购订单-行集合 */
            get purchaseOrderItems(): PurchaseOrderItems;
            /** 设置-采购订单-行集合 */
            set purchaseOrderItems(value: PurchaseOrderItems);
            /** 映射的属性名称-送货地址集合 */
            static PROPERTY_SHIPPINGADDRESSS_NAME: string;
            /** 获取-送货地址集合 */
            get shippingAddresss(): ShippingAddresss;
            /** 设置-送货地址集合 */
            set shippingAddresss(value: ShippingAddresss);
            /** 基于采购报价 */
            baseDocument(document: IPurchaseQuote): void;
            /** 基于采购申请 */
            baseDocument(document: IPurchaseRequest): void;
            /** 初始化数据 */
            protected init(): void;
            /** 映射的属性名称-项目的税总计 */
            static PROPERTY_ITEMSTAXTOTAL_NAME: string;
            /** 获取-项目的税总计 */
            get itemsTaxTotal(): number;
            /** 设置-项目的税总计 */
            set itemsTaxTotal(value: number);
            /** 映射的属性名称-项目的行总计 */
            static PROPERTY_ITEMSLINETOTAL_NAME: string;
            /** 获取-项目的行总计 */
            get itemsLineTotal(): number;
            /** 设置-项目的行总计 */
            set itemsLineTotal(value: number);
            /** 映射的属性名称-运送费税总计 */
            static PROPERTY_SHIPPINGSTAXTOTAL_NAME: string;
            /** 获取-运送费税总计 */
            get shippingsTaxTotal(): number;
            /** 设置-运送费税总计 */
            set shippingsTaxTotal(value: number);
            /** 映射的属性名称-运送费用总计 */
            static PROPERTY_SHIPPINGSEXPENSETOTAL_NAME: string;
            /** 获取-运送费用总计 */
            get shippingsExpenseTotal(): number;
            /** 设置-运送费用总计 */
            set shippingsExpenseTotal(value: number);
            /** 映射的属性名称-单据税总计 */
            static PROPERTY_DOCUMENTTAXTOTAL_NAME: string;
            /** 获取-单据税总计 */
            get documentTaxTotal(): number;
            /** 设置-单据税总计 */
            set documentTaxTotal(value: number);
            protected registerRules(): ibas.IBusinessRule[];
            /** 重置 */
            reset(): void;
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
            get docEntry(): number;
            /** 设置-编码 */
            set docEntry(value: number);
            /** 映射的属性名称-行号 */
            static PROPERTY_LINEID_NAME: string;
            /** 获取-行号 */
            get lineId(): number;
            /** 设置-行号 */
            set lineId(value: number);
            /** 映射的属性名称-显示顺序 */
            static PROPERTY_VISORDER_NAME: string;
            /** 获取-显示顺序 */
            get visOrder(): number;
            /** 设置-显示顺序 */
            set visOrder(value: number);
            /** 映射的属性名称-类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-类型 */
            get objectCode(): string;
            /** 设置-类型 */
            set objectCode(value: string);
            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-实例号（版本） */
            get logInst(): number;
            /** 设置-实例号（版本） */
            set logInst(value: number);
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            get dataSource(): string;
            /** 设置-数据源 */
            set dataSource(value: string);
            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string;
            /** 获取-取消 */
            get canceled(): ibas.emYesNo;
            /** 设置-取消 */
            set canceled(value: ibas.emYesNo);
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            get status(): ibas.emBOStatus;
            /** 设置-状态 */
            set status(value: ibas.emBOStatus);
            /** 映射的属性名称-单据状态 */
            static PROPERTY_LINESTATUS_NAME: string;
            /** 获取-单据状态 */
            get lineStatus(): ibas.emDocumentStatus;
            /** 设置-单据状态 */
            set lineStatus(value: ibas.emDocumentStatus);
            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string;
            /** 获取-创建日期 */
            get createDate(): Date;
            /** 设置-创建日期 */
            set createDate(value: Date);
            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string;
            /** 获取-创建时间 */
            get createTime(): number;
            /** 设置-创建时间 */
            set createTime(value: number);
            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-修改日期 */
            get updateDate(): Date;
            /** 设置-修改日期 */
            set updateDate(value: Date);
            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-修改时间 */
            get updateTime(): number;
            /** 设置-修改时间 */
            set updateTime(value: number);
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            get createUserSign(): number;
            /** 设置-创建用户 */
            set createUserSign(value: number);
            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-修改用户 */
            get updateUserSign(): number;
            /** 设置-修改用户 */
            set updateUserSign(value: number);
            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string;
            /** 获取-创建动作标识 */
            get createActionId(): string;
            /** 设置-创建动作标识 */
            set createActionId(value: string);
            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string;
            /** 获取-更新动作标识 */
            get updateActionId(): string;
            /** 设置-更新动作标识 */
            set updateActionId(value: string);
            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string;
            /** 获取-参考1 */
            get reference1(): string;
            /** 设置-参考1 */
            set reference1(value: string);
            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string;
            /** 获取-参考2 */
            get reference2(): string;
            /** 设置-参考2 */
            set reference2(value: string);
            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string;
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo;
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo);
            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string;
            /** 获取-已删除 */
            get deleted(): ibas.emYesNo;
            /** 设置-已删除 */
            set deleted(value: ibas.emYesNo);
            /** 映射的属性名称-基于类型 */
            static PROPERTY_BASEDOCUMENTTYPE_NAME: string;
            /** 获取-基于类型 */
            get baseDocumentType(): string;
            /** 设置-基于类型 */
            set baseDocumentType(value: string);
            /** 映射的属性名称-基于标识 */
            static PROPERTY_BASEDOCUMENTENTRY_NAME: string;
            /** 获取-基于标识 */
            get baseDocumentEntry(): number;
            /** 设置-基于标识 */
            set baseDocumentEntry(value: number);
            /** 映射的属性名称-基于行号 */
            static PROPERTY_BASEDOCUMENTLINEID_NAME: string;
            /** 获取-基于行号 */
            get baseDocumentLineId(): number;
            /** 设置-基于行号 */
            set baseDocumentLineId(value: number);
            /** 映射的属性名称-原始类型 */
            static PROPERTY_ORIGINALDOCUMENTTYPE_NAME: string;
            /** 获取-原始类型 */
            get originalDocumentType(): string;
            /** 设置-原始类型 */
            set originalDocumentType(value: string);
            /** 映射的属性名称-原始标识 */
            static PROPERTY_ORIGINALDOCUMENTENTRY_NAME: string;
            /** 获取-原始标识 */
            get originalDocumentEntry(): number;
            /** 设置-原始标识 */
            set originalDocumentEntry(value: number);
            /** 映射的属性名称-原始行号 */
            static PROPERTY_ORIGINALDOCUMENTLINEID_NAME: string;
            /** 获取-原始行号 */
            get originalDocumentLineId(): number;
            /** 设置-原始行号 */
            set originalDocumentLineId(value: number);
            /** 映射的属性名称-物料编码 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-物料编码 */
            get itemCode(): string;
            /** 设置-物料编码 */
            set itemCode(value: string);
            /** 映射的属性名称-物料/服务描述 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            /** 获取-物料/服务描述 */
            get itemDescription(): string;
            /** 设置-物料/服务描述 */
            set itemDescription(value: string);
            /** 映射的属性名称-物料标识 */
            static PROPERTY_ITEMSIGN_NAME: string;
            /** 获取-物料标识 */
            get itemSign(): string;
            /** 设置-物料标识 */
            set itemSign(value: string);
            /** 映射的属性名称-序号管理 */
            static PROPERTY_SERIALMANAGEMENT_NAME: string;
            /** 获取-序号管理 */
            get serialManagement(): ibas.emYesNo;
            /** 设置-序号管理 */
            set serialManagement(value: ibas.emYesNo);
            /** 映射的属性名称-批号管理 */
            static PROPERTY_BATCHMANAGEMENT_NAME: string;
            /** 获取-批号管理 */
            get batchManagement(): ibas.emYesNo;
            /** 设置-批号管理 */
            set batchManagement(value: ibas.emYesNo);
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            get quantity(): number;
            /** 设置-数量 */
            set quantity(value: number);
            /** 映射的属性名称-计量单位 */
            static PROPERTY_UOM_NAME: string;
            /** 获取-计量单位 */
            get uom(): string;
            /** 设置-计量单位 */
            set uom(value: string);
            /** 映射的属性名称-仓库 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库 */
            get warehouse(): string;
            /** 设置-仓库 */
            set warehouse(value: string);
            /** 映射的属性名称-价格 */
            static PROPERTY_PRICE_NAME: string;
            /** 获取-价格 */
            get price(): number;
            /** 设置-价格 */
            set price(value: number);
            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string;
            /** 获取-货币 */
            get currency(): string;
            /** 设置-货币 */
            set currency(value: string);
            /** 映射的属性名称-汇率 */
            static PROPERTY_RATE_NAME: string;
            /** 获取-汇率 */
            get rate(): number;
            /** 设置-汇率 */
            set rate(value: number);
            /** 映射的属性名称-行总计 */
            static PROPERTY_LINETOTAL_NAME: string;
            /** 获取-行总计 */
            get lineTotal(): number;
            /** 设置-行总计 */
            set lineTotal(value: number);
            /** 映射的属性名称-行交货日期 */
            static PROPERTY_DELIVERYDATE_NAME: string;
            /** 获取-行交货日期 */
            get deliveryDate(): Date;
            /** 设置-行交货日期 */
            set deliveryDate(value: Date);
            /** 映射的属性名称-已清数量 */
            static PROPERTY_CLOSEDQUANTITY_NAME: string;
            /** 获取-已清数量 */
            get closedQuantity(): number;
            /** 设置-已清数量 */
            set closedQuantity(value: number);
            /** 映射的属性名称-行折扣 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-行折扣 */
            get discount(): number;
            /** 设置-行折扣 */
            set discount(value: number);
            /** 映射的属性名称-已清金额 */
            static PROPERTY_CLOSEDAMOUNT_NAME: string;
            /** 获取-已清金额 */
            get closedAmount(): number;
            /** 设置-已清金额 */
            set closedAmount(value: number);
            /** 映射的属性名称-折扣前价格 */
            static PROPERTY_UNITPRICE_NAME: string;
            /** 获取-折扣前价格 */
            get unitPrice(): number;
            /** 设置-折扣前价格 */
            set unitPrice(value: number);
            /** 映射的属性名称-税定义 */
            static PROPERTY_TAX_NAME: string;
            /** 获取-税定义 */
            get tax(): string;
            /** 设置-税定义 */
            set tax(value: string);
            /** 映射的属性名称-税率 */
            static PROPERTY_TAXRATE_NAME: string;
            /** 获取-税率 */
            get taxRate(): number;
            /** 设置-税率 */
            set taxRate(value: number);
            /** 映射的属性名称-税总额 */
            static PROPERTY_TAXTOTAL_NAME: string;
            /** 获取-税总额 */
            get taxTotal(): number;
            /** 设置-税总额 */
            set taxTotal(value: number);
            /** 映射的属性名称-税前价格 */
            static PROPERTY_PRETAXPRICE_NAME: string;
            /** 获取-税前价格 */
            get preTaxPrice(): number;
            /** 设置-税前价格 */
            set preTaxPrice(value: number);
            /** 映射的属性名称-税前行总计 */
            static PROPERTY_PRETAXLINETOTAL_NAME: string;
            /** 获取-税前行总计 */
            get preTaxLineTotal(): number;
            /** 设置-税前行总计 */
            set preTaxLineTotal(value: number);
            /** 映射的属性名称-分配规则1 */
            static PROPERTY_DISTRIBUTIONRULE1_NAME: string;
            /** 获取-分配规则1 */
            get distributionRule1(): string;
            /** 设置-分配规则1 */
            set distributionRule1(value: string);
            /** 映射的属性名称-分配规则2 */
            static PROPERTY_DISTRIBUTIONRULE2_NAME: string;
            /** 获取-分配规则2 */
            get distributionRule2(): string;
            /** 设置-分配规则2 */
            set distributionRule2(value: string);
            /** 映射的属性名称-分配规则3 */
            static PROPERTY_DISTRIBUTIONRULE3_NAME: string;
            /** 获取-分配规则3 */
            get distributionRule3(): string;
            /** 设置-分配规则3 */
            set distributionRule3(value: string);
            /** 映射的属性名称-分配规则4 */
            static PROPERTY_DISTRIBUTIONRULE4_NAME: string;
            /** 获取-分配规则4 */
            get distributionRule4(): string;
            /** 设置-分配规则4 */
            set distributionRule4(value: string);
            /** 映射的属性名称-分配规则5 */
            static PROPERTY_DISTRIBUTIONRULE5_NAME: string;
            /** 获取-分配规则5 */
            get distributionRule5(): string;
            /** 设置-分配规则5 */
            set distributionRule5(value: string);
            /** 映射的属性名称-采购订单-行-额外信息集合 */
            static PROPERTY_PURCHASEORDERITEMEXTRAS_NAME: string;
            /** 获取-采购订单-行-额外信息集合 */
            get purchaseOrderItemExtras(): PurchaseOrderItemExtras;
            /** 设置-采购订单-行-额外信息集合 */
            set purchaseOrderItemExtras(value: PurchaseOrderItemExtras);
            /** 映射的属性名称-物料批次集合 */
            static PROPERTY_MATERIALBATCHES_NAME: string;
            /** 获取-物料批次集合 */
            get materialBatches(): materials.bo.MaterialBatchItems;
            /** 设置-物料批次集合 */
            set materialBatches(value: materials.bo.MaterialBatchItems);
            /** 映射的属性名称-物料序列集合 */
            static PROPERTY_MATERIALSERIALS_NAME: string;
            /** 获取-物料序列集合 */
            get materialSerials(): materials.bo.MaterialSerialItems;
            /** 设置-物料序列集合 */
            set materialSerials(value: materials.bo.MaterialSerialItems);
            /** 初始化数据 */
            protected init(): void;
            /** 赋值产品 */
            baseProduct(source: materials.bo.IProduct): void;
            protected registerRules(): ibas.IBusinessRule[];
            /** 重置 */
            reset(): void;
        }
        /** 采购订单-行-额外信息 集合 */
        class PurchaseOrderItemExtras extends ibas.BusinessObjects<PurchaseOrderItemExtra, PurchaseOrderItem> implements IPurchaseOrderItemExtras {
            /** 创建并添加子项 */
            create(): PurchaseOrderItemExtra;
        }
        /** 采购订单-行-额外信息 */
        class PurchaseOrderItemExtra extends ibas.BODocumentLine<PurchaseOrderItemExtra> implements IPurchaseOrderItemExtra {
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-编码 */
            static PROPERTY_DOCENTRY_NAME: string;
            /** 获取-编码 */
            get docEntry(): number;
            /** 设置-编码 */
            set docEntry(value: number);
            /** 映射的属性名称-行号 */
            static PROPERTY_LINEID_NAME: string;
            /** 获取-行号 */
            get lineId(): number;
            /** 设置-行号 */
            set lineId(value: number);
            /** 映射的属性名称-显示顺序 */
            static PROPERTY_VISORDER_NAME: string;
            /** 获取-显示顺序 */
            get visOrder(): number;
            /** 设置-显示顺序 */
            set visOrder(value: number);
            /** 映射的属性名称-类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-类型 */
            get objectCode(): string;
            /** 设置-类型 */
            set objectCode(value: string);
            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-实例号（版本） */
            get logInst(): number;
            /** 设置-实例号（版本） */
            set logInst(value: number);
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            get dataSource(): string;
            /** 设置-数据源 */
            set dataSource(value: string);
            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string;
            /** 获取-取消 */
            get canceled(): ibas.emYesNo;
            /** 设置-取消 */
            set canceled(value: ibas.emYesNo);
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            get status(): ibas.emBOStatus;
            /** 设置-状态 */
            set status(value: ibas.emBOStatus);
            /** 映射的属性名称-单据状态 */
            static PROPERTY_LINESTATUS_NAME: string;
            /** 获取-单据状态 */
            get lineStatus(): ibas.emDocumentStatus;
            /** 设置-单据状态 */
            set lineStatus(value: ibas.emDocumentStatus);
            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string;
            /** 获取-创建日期 */
            get createDate(): Date;
            /** 设置-创建日期 */
            set createDate(value: Date);
            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string;
            /** 获取-创建时间 */
            get createTime(): number;
            /** 设置-创建时间 */
            set createTime(value: number);
            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-修改日期 */
            get updateDate(): Date;
            /** 设置-修改日期 */
            set updateDate(value: Date);
            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-修改时间 */
            get updateTime(): number;
            /** 设置-修改时间 */
            set updateTime(value: number);
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            get createUserSign(): number;
            /** 设置-创建用户 */
            set createUserSign(value: number);
            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-修改用户 */
            get updateUserSign(): number;
            /** 设置-修改用户 */
            set updateUserSign(value: number);
            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string;
            /** 获取-创建动作标识 */
            get createActionId(): string;
            /** 设置-创建动作标识 */
            set createActionId(value: string);
            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string;
            /** 获取-更新动作标识 */
            get updateActionId(): string;
            /** 设置-更新动作标识 */
            set updateActionId(value: string);
            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string;
            /** 获取-参考1 */
            get reference1(): string;
            /** 设置-参考1 */
            set reference1(value: string);
            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string;
            /** 获取-参考2 */
            get reference2(): string;
            /** 设置-参考2 */
            set reference2(value: string);
            /** 映射的属性名称-项目行号 */
            static PROPERTY_ITEMID_NAME: string;
            /** 获取-项目行号 */
            get itemId(): number;
            /** 设置-项目行号 */
            set itemId(value: number);
            /** 映射的属性名称-额外类型 */
            static PROPERTY_EXTRATYPE_NAME: string;
            /** 获取-额外类型 */
            get extraType(): string;
            /** 设置-额外类型 */
            set extraType(value: string);
            /** 映射的属性名称-额外标识 */
            static PROPERTY_EXTRAKEY_NAME: string;
            /** 获取-额外标识 */
            get extraKey(): number;
            /** 设置-额外标识 */
            set extraKey(value: number);
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            get quantity(): number;
            /** 设置-数量 */
            set quantity(value: number);
            /** 映射的属性名称-备注 */
            static PROPERTY_NOTE_NAME: string;
            /** 获取-备注 */
            get note(): string;
            /** 设置-备注 */
            set note(value: string);
            /** 初始化数据 */
            protected init(): void;
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
            get docEntry(): number;
            /** 设置-凭证编号 */
            set docEntry(value: number);
            /** 映射的属性名称-期间编号 */
            static PROPERTY_DOCNUM_NAME: string;
            /** 获取-期间编号 */
            get docNum(): number;
            /** 设置-期间编号 */
            set docNum(value: number);
            /** 映射的属性名称-期间 */
            static PROPERTY_PERIOD_NAME: string;
            /** 获取-期间 */
            get period(): number;
            /** 设置-期间 */
            set period(value: number);
            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string;
            /** 获取-取消 */
            get canceled(): ibas.emYesNo;
            /** 设置-取消 */
            set canceled(value: ibas.emYesNo);
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            get status(): ibas.emBOStatus;
            /** 设置-状态 */
            set status(value: ibas.emBOStatus);
            /** 映射的属性名称-审批状态 */
            static PROPERTY_APPROVALSTATUS_NAME: string;
            /** 获取-审批状态 */
            get approvalStatus(): ibas.emApprovalStatus;
            /** 设置-审批状态 */
            set approvalStatus(value: ibas.emApprovalStatus);
            /** 映射的属性名称-单据状态 */
            static PROPERTY_DOCUMENTSTATUS_NAME: string;
            /** 获取-单据状态 */
            get documentStatus(): ibas.emDocumentStatus;
            /** 设置-单据状态 */
            set documentStatus(value: ibas.emDocumentStatus);
            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-对象类型 */
            get objectCode(): string;
            /** 设置-对象类型 */
            set objectCode(value: string);
            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string;
            /** 获取-创建日期 */
            get createDate(): Date;
            /** 设置-创建日期 */
            set createDate(value: Date);
            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string;
            /** 获取-创建时间 */
            get createTime(): number;
            /** 设置-创建时间 */
            set createTime(value: number);
            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-修改日期 */
            get updateDate(): Date;
            /** 设置-修改日期 */
            set updateDate(value: Date);
            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-修改时间 */
            get updateTime(): number;
            /** 设置-修改时间 */
            set updateTime(value: number);
            /** 映射的属性名称-版本 */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-版本 */
            get logInst(): number;
            /** 设置-版本 */
            set logInst(value: number);
            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string;
            /** 获取-服务系列 */
            get series(): number;
            /** 设置-服务系列 */
            set series(value: number);
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            get dataSource(): string;
            /** 设置-数据源 */
            set dataSource(value: string);
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            get createUserSign(): number;
            /** 设置-创建用户 */
            set createUserSign(value: number);
            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-修改用户 */
            get updateUserSign(): number;
            /** 设置-修改用户 */
            set updateUserSign(value: number);
            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string;
            /** 获取-创建动作标识 */
            get createActionId(): string;
            /** 设置-创建动作标识 */
            set createActionId(value: string);
            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string;
            /** 获取-更新动作标识 */
            get updateActionId(): string;
            /** 设置-更新动作标识 */
            set updateActionId(value: string);
            /** 映射的属性名称-数据所有者 */
            static PROPERTY_DATAOWNER_NAME: string;
            /** 获取-数据所有者 */
            get dataOwner(): number;
            /** 设置-数据所有者 */
            set dataOwner(value: number);
            /** 映射的属性名称-团队成员 */
            static PROPERTY_TEAMMEMBERS_NAME: string;
            /** 获取-团队成员 */
            get teamMembers(): string;
            /** 设置-团队成员 */
            set teamMembers(value: string);
            /** 映射的属性名称-数据所属组织 */
            static PROPERTY_ORGANIZATION_NAME: string;
            /** 获取-数据所属组织 */
            get organization(): string;
            /** 设置-数据所属组织 */
            set organization(value: string);
            /** 映射的属性名称-过账日期 */
            static PROPERTY_POSTINGDATE_NAME: string;
            /** 获取-过账日期 */
            get postingDate(): Date;
            /** 设置-过账日期 */
            set postingDate(value: Date);
            /** 映射的属性名称-到期日 */
            static PROPERTY_DELIVERYDATE_NAME: string;
            /** 获取-到期日 */
            get deliveryDate(): Date;
            /** 设置-到期日 */
            set deliveryDate(value: Date);
            /** 映射的属性名称-凭证日期 */
            static PROPERTY_DOCUMENTDATE_NAME: string;
            /** 获取-凭证日期 */
            get documentDate(): Date;
            /** 设置-凭证日期 */
            set documentDate(value: Date);
            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string;
            /** 获取-参考1 */
            get reference1(): string;
            /** 设置-参考1 */
            set reference1(value: string);
            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string;
            /** 获取-参考2 */
            get reference2(): string;
            /** 设置-参考2 */
            set reference2(value: string);
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string;
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo;
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo);
            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string;
            /** 获取-已删除 */
            get deleted(): ibas.emYesNo;
            /** 设置-已删除 */
            set deleted(value: ibas.emYesNo);
            /** 映射的属性名称-供应商代码 */
            static PROPERTY_SUPPLIERCODE_NAME: string;
            /** 获取-供应商代码 */
            get supplierCode(): string;
            /** 设置-供应商代码 */
            set supplierCode(value: string);
            /** 映射的属性名称-供应商名称 */
            static PROPERTY_SUPPLIERNAME_NAME: string;
            /** 获取-供应商名称 */
            get supplierName(): string;
            /** 设置-供应商名称 */
            set supplierName(value: string);
            /** 映射的属性名称-联系人 */
            static PROPERTY_CONTACTPERSON_NAME: string;
            /** 获取-联系人 */
            get contactPerson(): number;
            /** 设置-联系人 */
            set contactPerson(value: number);
            /** 映射的属性名称-折扣 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-折扣 */
            get discount(): number;
            /** 设置-折扣 */
            set discount(value: number);
            /** 映射的属性名称-折扣后总计 */
            static PROPERTY_DISCOUNTTOTAL_NAME: string;
            /** 获取-折扣后总计 */
            get discountTotal(): number;
            /** 设置-折扣后总计 */
            set discountTotal(value: number);
            /** 映射的属性名称-单据货币 */
            static PROPERTY_DOCUMENTCURRENCY_NAME: string;
            /** 获取-单据货币 */
            get documentCurrency(): string;
            /** 设置-单据货币 */
            set documentCurrency(value: string);
            /** 映射的属性名称-单据汇率 */
            static PROPERTY_DOCUMENTRATE_NAME: string;
            /** 获取-单据汇率 */
            get documentRate(): number;
            /** 设置-单据汇率 */
            set documentRate(value: number);
            /** 映射的属性名称-单据总计 */
            static PROPERTY_DOCUMENTTOTAL_NAME: string;
            /** 获取-单据总计 */
            get documentTotal(): number;
            /** 设置-单据总计 */
            set documentTotal(value: number);
            /** 映射的属性名称-已付款总计 */
            static PROPERTY_PAIDTOTAL_NAME: string;
            /** 获取-已付款总计 */
            get paidTotal(): number;
            /** 设置-已付款总计 */
            set paidTotal(value: number);
            /** 映射的属性名称-价格清单 */
            static PROPERTY_PRICELIST_NAME: string;
            /** 获取-价格清单 */
            get priceList(): number;
            /** 设置-价格清单 */
            set priceList(value: number);
            /** 映射的属性名称-付款条款代码 */
            static PROPERTY_PAYMENTCODE_NAME: string;
            /** 获取-付款条款代码 */
            get paymentCode(): string;
            /** 设置-付款条款代码 */
            set paymentCode(value: string);
            /** 映射的属性名称-舍入 */
            static PROPERTY_ROUNDING_NAME: string;
            /** 获取-舍入 */
            get rounding(): ibas.emYesNo;
            /** 设置-舍入 */
            set rounding(value: ibas.emYesNo);
            /** 映射的属性名称-舍入差额 */
            static PROPERTY_DIFFAMOUNT_NAME: string;
            /** 获取-舍入差额 */
            get diffAmount(): number;
            /** 设置-舍入差额 */
            set diffAmount(value: number);
            /** 映射的属性名称-项目代码 */
            static PROPERTY_PROJECT_NAME: string;
            /** 获取-项目代码 */
            get project(): string;
            /** 设置-项目代码 */
            set project(value: string);
            /** 映射的属性名称-终端客户 */
            static PROPERTY_CONSUMER_NAME: string;
            /** 获取-终端客户 */
            get consumer(): string;
            /** 设置-终端客户 */
            set consumer(value: string);
            /** 映射的属性名称-单据类型 */
            static PROPERTY_ORDERTYPE_NAME: string;
            /** 获取-单据类型 */
            get orderType(): string;
            /** 设置-单据类型 */
            set orderType(value: string);
            /** 映射的属性名称-采购退货-行集合 */
            static PROPERTY_PURCHASERETURNITEMS_NAME: string;
            /** 获取-采购退货-行集合 */
            get purchaseReturnItems(): PurchaseReturnItems;
            /** 设置-采购退货-行集合 */
            set purchaseReturnItems(value: PurchaseReturnItems);
            /** 映射的属性名称-送货地址集合 */
            static PROPERTY_SHIPPINGADDRESSS_NAME: string;
            /** 获取-送货地址集合 */
            get shippingAddresss(): ShippingAddresss;
            /** 设置-送货地址集合 */
            set shippingAddresss(value: ShippingAddresss);
            /** 初始化数据 */
            protected init(): void;
            /** 映射的属性名称-项目的税总计 */
            static PROPERTY_ITEMSTAXTOTAL_NAME: string;
            /** 获取-项目的税总计 */
            get itemsTaxTotal(): number;
            /** 设置-项目的税总计 */
            set itemsTaxTotal(value: number);
            /** 映射的属性名称-项目的行总计 */
            static PROPERTY_ITEMSLINETOTAL_NAME: string;
            /** 获取-项目的行总计 */
            get itemsLineTotal(): number;
            /** 设置-项目的行总计 */
            set itemsLineTotal(value: number);
            /** 映射的属性名称-运送费税总计 */
            static PROPERTY_SHIPPINGSTAXTOTAL_NAME: string;
            /** 获取-运送费税总计 */
            get shippingsTaxTotal(): number;
            /** 设置-运送费税总计 */
            set shippingsTaxTotal(value: number);
            /** 映射的属性名称-运送费用总计 */
            static PROPERTY_SHIPPINGSEXPENSETOTAL_NAME: string;
            /** 获取-运送费用总计 */
            get shippingsExpenseTotal(): number;
            /** 设置-运送费用总计 */
            set shippingsExpenseTotal(value: number);
            /** 映射的属性名称-单据税总计 */
            static PROPERTY_DOCUMENTTAXTOTAL_NAME: string;
            /** 获取-单据税总计 */
            get documentTaxTotal(): number;
            /** 设置-单据税总计 */
            set documentTaxTotal(value: number);
            protected registerRules(): ibas.IBusinessRule[];
            /** 重置 */
            reset(): void;
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
            get docEntry(): number;
            /** 设置-编码 */
            set docEntry(value: number);
            /** 映射的属性名称-行号 */
            static PROPERTY_LINEID_NAME: string;
            /** 获取-行号 */
            get lineId(): number;
            /** 设置-行号 */
            set lineId(value: number);
            /** 映射的属性名称-显示顺序 */
            static PROPERTY_VISORDER_NAME: string;
            /** 获取-显示顺序 */
            get visOrder(): number;
            /** 设置-显示顺序 */
            set visOrder(value: number);
            /** 映射的属性名称-类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-类型 */
            get objectCode(): string;
            /** 设置-类型 */
            set objectCode(value: string);
            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-实例号（版本） */
            get logInst(): number;
            /** 设置-实例号（版本） */
            set logInst(value: number);
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            get dataSource(): string;
            /** 设置-数据源 */
            set dataSource(value: string);
            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string;
            /** 获取-取消 */
            get canceled(): ibas.emYesNo;
            /** 设置-取消 */
            set canceled(value: ibas.emYesNo);
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            get status(): ibas.emBOStatus;
            /** 设置-状态 */
            set status(value: ibas.emBOStatus);
            /** 映射的属性名称-单据状态 */
            static PROPERTY_LINESTATUS_NAME: string;
            /** 获取-单据状态 */
            get lineStatus(): ibas.emDocumentStatus;
            /** 设置-单据状态 */
            set lineStatus(value: ibas.emDocumentStatus);
            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string;
            /** 获取-创建日期 */
            get createDate(): Date;
            /** 设置-创建日期 */
            set createDate(value: Date);
            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string;
            /** 获取-创建时间 */
            get createTime(): number;
            /** 设置-创建时间 */
            set createTime(value: number);
            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-修改日期 */
            get updateDate(): Date;
            /** 设置-修改日期 */
            set updateDate(value: Date);
            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-修改时间 */
            get updateTime(): number;
            /** 设置-修改时间 */
            set updateTime(value: number);
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            get createUserSign(): number;
            /** 设置-创建用户 */
            set createUserSign(value: number);
            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-修改用户 */
            get updateUserSign(): number;
            /** 设置-修改用户 */
            set updateUserSign(value: number);
            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string;
            /** 获取-创建动作标识 */
            get createActionId(): string;
            /** 设置-创建动作标识 */
            set createActionId(value: string);
            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string;
            /** 获取-更新动作标识 */
            get updateActionId(): string;
            /** 设置-更新动作标识 */
            set updateActionId(value: string);
            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string;
            /** 获取-参考1 */
            get reference1(): string;
            /** 设置-参考1 */
            set reference1(value: string);
            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string;
            /** 获取-参考2 */
            get reference2(): string;
            /** 设置-参考2 */
            set reference2(value: string);
            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string;
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo;
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo);
            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string;
            /** 获取-已删除 */
            get deleted(): ibas.emYesNo;
            /** 设置-已删除 */
            set deleted(value: ibas.emYesNo);
            /** 映射的属性名称-基于类型 */
            static PROPERTY_BASEDOCUMENTTYPE_NAME: string;
            /** 获取-基于类型 */
            get baseDocumentType(): string;
            /** 设置-基于类型 */
            set baseDocumentType(value: string);
            /** 映射的属性名称-基于标识 */
            static PROPERTY_BASEDOCUMENTENTRY_NAME: string;
            /** 获取-基于标识 */
            get baseDocumentEntry(): number;
            /** 设置-基于标识 */
            set baseDocumentEntry(value: number);
            /** 映射的属性名称-基于行号 */
            static PROPERTY_BASEDOCUMENTLINEID_NAME: string;
            /** 获取-基于行号 */
            get baseDocumentLineId(): number;
            /** 设置-基于行号 */
            set baseDocumentLineId(value: number);
            /** 映射的属性名称-原始类型 */
            static PROPERTY_ORIGINALDOCUMENTTYPE_NAME: string;
            /** 获取-原始类型 */
            get originalDocumentType(): string;
            /** 设置-原始类型 */
            set originalDocumentType(value: string);
            /** 映射的属性名称-原始标识 */
            static PROPERTY_ORIGINALDOCUMENTENTRY_NAME: string;
            /** 获取-原始标识 */
            get originalDocumentEntry(): number;
            /** 设置-原始标识 */
            set originalDocumentEntry(value: number);
            /** 映射的属性名称-原始行号 */
            static PROPERTY_ORIGINALDOCUMENTLINEID_NAME: string;
            /** 获取-原始行号 */
            get originalDocumentLineId(): number;
            /** 设置-原始行号 */
            set originalDocumentLineId(value: number);
            /** 映射的属性名称-物料编码 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-物料编码 */
            get itemCode(): string;
            /** 设置-物料编码 */
            set itemCode(value: string);
            /** 映射的属性名称-物料/服务描述 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            /** 获取-物料/服务描述 */
            get itemDescription(): string;
            /** 设置-物料/服务描述 */
            set itemDescription(value: string);
            /** 映射的属性名称-物料标识 */
            static PROPERTY_ITEMSIGN_NAME: string;
            /** 获取-物料标识 */
            get itemSign(): string;
            /** 设置-物料标识 */
            set itemSign(value: string);
            /** 映射的属性名称-序号管理 */
            static PROPERTY_SERIALMANAGEMENT_NAME: string;
            /** 获取-序号管理 */
            get serialManagement(): ibas.emYesNo;
            /** 设置-序号管理 */
            set serialManagement(value: ibas.emYesNo);
            /** 映射的属性名称-批号管理 */
            static PROPERTY_BATCHMANAGEMENT_NAME: string;
            /** 获取-批号管理 */
            get batchManagement(): ibas.emYesNo;
            /** 设置-批号管理 */
            set batchManagement(value: ibas.emYesNo);
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            get quantity(): number;
            /** 设置-数量 */
            set quantity(value: number);
            /** 映射的属性名称-计量单位 */
            static PROPERTY_UOM_NAME: string;
            /** 获取-计量单位 */
            get uom(): string;
            /** 设置-计量单位 */
            set uom(value: string);
            /** 映射的属性名称-仓库 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库 */
            get warehouse(): string;
            /** 设置-仓库 */
            set warehouse(value: string);
            /** 映射的属性名称-价格 */
            static PROPERTY_PRICE_NAME: string;
            /** 获取-价格 */
            get price(): number;
            /** 设置-价格 */
            set price(value: number);
            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string;
            /** 获取-货币 */
            get currency(): string;
            /** 设置-货币 */
            set currency(value: string);
            /** 映射的属性名称-汇率 */
            static PROPERTY_RATE_NAME: string;
            /** 获取-汇率 */
            get rate(): number;
            /** 设置-汇率 */
            set rate(value: number);
            /** 映射的属性名称-行总计 */
            static PROPERTY_LINETOTAL_NAME: string;
            /** 获取-行总计 */
            get lineTotal(): number;
            /** 设置-行总计 */
            set lineTotal(value: number);
            /** 映射的属性名称-行交货日期 */
            static PROPERTY_DELIVERYDATE_NAME: string;
            /** 获取-行交货日期 */
            get deliveryDate(): Date;
            /** 设置-行交货日期 */
            set deliveryDate(value: Date);
            /** 映射的属性名称-已清数量 */
            static PROPERTY_CLOSEDQUANTITY_NAME: string;
            /** 获取-已清数量 */
            get closedQuantity(): number;
            /** 设置-已清数量 */
            set closedQuantity(value: number);
            /** 映射的属性名称-行折扣 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-行折扣 */
            get discount(): number;
            /** 设置-行折扣 */
            set discount(value: number);
            /** 映射的属性名称-已清金额 */
            static PROPERTY_CLOSEDAMOUNT_NAME: string;
            /** 获取-已清金额 */
            get closedAmount(): number;
            /** 设置-已清金额 */
            set closedAmount(value: number);
            /** 映射的属性名称-折扣前价格 */
            static PROPERTY_UNITPRICE_NAME: string;
            /** 获取-折扣前价格 */
            get unitPrice(): number;
            /** 设置-折扣前价格 */
            set unitPrice(value: number);
            /** 映射的属性名称-税定义 */
            static PROPERTY_TAX_NAME: string;
            /** 获取-税定义 */
            get tax(): string;
            /** 设置-税定义 */
            set tax(value: string);
            /** 映射的属性名称-税率 */
            static PROPERTY_TAXRATE_NAME: string;
            /** 获取-税率 */
            get taxRate(): number;
            /** 设置-税率 */
            set taxRate(value: number);
            /** 映射的属性名称-税总额 */
            static PROPERTY_TAXTOTAL_NAME: string;
            /** 获取-税总额 */
            get taxTotal(): number;
            /** 设置-税总额 */
            set taxTotal(value: number);
            /** 映射的属性名称-税前价格 */
            static PROPERTY_PRETAXPRICE_NAME: string;
            /** 获取-税前价格 */
            get preTaxPrice(): number;
            /** 设置-税前价格 */
            set preTaxPrice(value: number);
            /** 映射的属性名称-税前行总计 */
            static PROPERTY_PRETAXLINETOTAL_NAME: string;
            /** 获取-税前行总计 */
            get preTaxLineTotal(): number;
            /** 设置-税前行总计 */
            set preTaxLineTotal(value: number);
            /** 映射的属性名称-分配规则1 */
            static PROPERTY_DISTRIBUTIONRULE1_NAME: string;
            /** 获取-分配规则1 */
            get distributionRule1(): string;
            /** 设置-分配规则1 */
            set distributionRule1(value: string);
            /** 映射的属性名称-分配规则2 */
            static PROPERTY_DISTRIBUTIONRULE2_NAME: string;
            /** 获取-分配规则2 */
            get distributionRule2(): string;
            /** 设置-分配规则2 */
            set distributionRule2(value: string);
            /** 映射的属性名称-分配规则3 */
            static PROPERTY_DISTRIBUTIONRULE3_NAME: string;
            /** 获取-分配规则3 */
            get distributionRule3(): string;
            /** 设置-分配规则3 */
            set distributionRule3(value: string);
            /** 映射的属性名称-分配规则4 */
            static PROPERTY_DISTRIBUTIONRULE4_NAME: string;
            /** 获取-分配规则4 */
            get distributionRule4(): string;
            /** 设置-分配规则4 */
            set distributionRule4(value: string);
            /** 映射的属性名称-分配规则5 */
            static PROPERTY_DISTRIBUTIONRULE5_NAME: string;
            /** 获取-分配规则5 */
            get distributionRule5(): string;
            /** 设置-分配规则5 */
            set distributionRule5(value: string);
            /** 映射的属性名称-物料批次集合 */
            static PROPERTY_MATERIALBATCHES_NAME: string;
            /** 获取-物料批次集合 */
            get materialBatches(): materials.bo.MaterialBatchItems;
            /** 设置-物料批次集合 */
            set materialBatches(value: materials.bo.MaterialBatchItems);
            /** 映射的属性名称-物料序列集合 */
            static PROPERTY_MATERIALSERIALS_NAME: string;
            /** 获取-物料序列集合 */
            get materialSerials(): materials.bo.MaterialSerialItems;
            /** 设置-物料序列集合 */
            set materialSerials(value: materials.bo.MaterialSerialItems);
            /** 初始化数据 */
            protected init(): void;
            /** 赋值产品 */
            baseProduct(source: materials.bo.IProduct): void;
            protected registerRules(): ibas.IBusinessRule[];
            /** 重置 */
            reset(): void;
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
            get docEntry(): number;
            /** 设置-凭证编号 */
            set docEntry(value: number);
            /** 映射的属性名称-期间编号 */
            static PROPERTY_DOCNUM_NAME: string;
            /** 获取-期间编号 */
            get docNum(): number;
            /** 设置-期间编号 */
            set docNum(value: number);
            /** 映射的属性名称-期间 */
            static PROPERTY_PERIOD_NAME: string;
            /** 获取-期间 */
            get period(): number;
            /** 设置-期间 */
            set period(value: number);
            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string;
            /** 获取-取消 */
            get canceled(): ibas.emYesNo;
            /** 设置-取消 */
            set canceled(value: ibas.emYesNo);
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            get status(): ibas.emBOStatus;
            /** 设置-状态 */
            set status(value: ibas.emBOStatus);
            /** 映射的属性名称-审批状态 */
            static PROPERTY_APPROVALSTATUS_NAME: string;
            /** 获取-审批状态 */
            get approvalStatus(): ibas.emApprovalStatus;
            /** 设置-审批状态 */
            set approvalStatus(value: ibas.emApprovalStatus);
            /** 映射的属性名称-单据状态 */
            static PROPERTY_DOCUMENTSTATUS_NAME: string;
            /** 获取-单据状态 */
            get documentStatus(): ibas.emDocumentStatus;
            /** 设置-单据状态 */
            set documentStatus(value: ibas.emDocumentStatus);
            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-对象类型 */
            get objectCode(): string;
            /** 设置-对象类型 */
            set objectCode(value: string);
            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string;
            /** 获取-创建日期 */
            get createDate(): Date;
            /** 设置-创建日期 */
            set createDate(value: Date);
            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string;
            /** 获取-创建时间 */
            get createTime(): number;
            /** 设置-创建时间 */
            set createTime(value: number);
            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-修改日期 */
            get updateDate(): Date;
            /** 设置-修改日期 */
            set updateDate(value: Date);
            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-修改时间 */
            get updateTime(): number;
            /** 设置-修改时间 */
            set updateTime(value: number);
            /** 映射的属性名称-版本 */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-版本 */
            get logInst(): number;
            /** 设置-版本 */
            set logInst(value: number);
            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string;
            /** 获取-服务系列 */
            get series(): number;
            /** 设置-服务系列 */
            set series(value: number);
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            get dataSource(): string;
            /** 设置-数据源 */
            set dataSource(value: string);
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            get createUserSign(): number;
            /** 设置-创建用户 */
            set createUserSign(value: number);
            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-修改用户 */
            get updateUserSign(): number;
            /** 设置-修改用户 */
            set updateUserSign(value: number);
            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string;
            /** 获取-创建动作标识 */
            get createActionId(): string;
            /** 设置-创建动作标识 */
            set createActionId(value: string);
            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string;
            /** 获取-更新动作标识 */
            get updateActionId(): string;
            /** 设置-更新动作标识 */
            set updateActionId(value: string);
            /** 映射的属性名称-数据所有者 */
            static PROPERTY_DATAOWNER_NAME: string;
            /** 获取-数据所有者 */
            get dataOwner(): number;
            /** 设置-数据所有者 */
            set dataOwner(value: number);
            /** 映射的属性名称-团队成员 */
            static PROPERTY_TEAMMEMBERS_NAME: string;
            /** 获取-团队成员 */
            get teamMembers(): string;
            /** 设置-团队成员 */
            set teamMembers(value: string);
            /** 映射的属性名称-数据所属组织 */
            static PROPERTY_ORGANIZATION_NAME: string;
            /** 获取-数据所属组织 */
            get organization(): string;
            /** 设置-数据所属组织 */
            set organization(value: string);
            /** 映射的属性名称-过账日期 */
            static PROPERTY_POSTINGDATE_NAME: string;
            /** 获取-过账日期 */
            get postingDate(): Date;
            /** 设置-过账日期 */
            set postingDate(value: Date);
            /** 映射的属性名称-到期日 */
            static PROPERTY_DELIVERYDATE_NAME: string;
            /** 获取-到期日 */
            get deliveryDate(): Date;
            /** 设置-到期日 */
            set deliveryDate(value: Date);
            /** 映射的属性名称-凭证日期 */
            static PROPERTY_DOCUMENTDATE_NAME: string;
            /** 获取-凭证日期 */
            get documentDate(): Date;
            /** 设置-凭证日期 */
            set documentDate(value: Date);
            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string;
            /** 获取-参考1 */
            get reference1(): string;
            /** 设置-参考1 */
            set reference1(value: string);
            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string;
            /** 获取-参考2 */
            get reference2(): string;
            /** 设置-参考2 */
            set reference2(value: string);
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string;
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo;
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo);
            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string;
            /** 获取-已删除 */
            get deleted(): ibas.emYesNo;
            /** 设置-已删除 */
            set deleted(value: ibas.emYesNo);
            /** 映射的属性名称-供应商代码 */
            static PROPERTY_SUPPLIERCODE_NAME: string;
            /** 获取-供应商代码 */
            get supplierCode(): string;
            /** 设置-供应商代码 */
            set supplierCode(value: string);
            /** 映射的属性名称-供应商名称 */
            static PROPERTY_SUPPLIERNAME_NAME: string;
            /** 获取-供应商名称 */
            get supplierName(): string;
            /** 设置-供应商名称 */
            set supplierName(value: string);
            /** 映射的属性名称-联系人 */
            static PROPERTY_CONTACTPERSON_NAME: string;
            /** 获取-联系人 */
            get contactPerson(): number;
            /** 设置-联系人 */
            set contactPerson(value: number);
            /** 映射的属性名称-折扣 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-折扣 */
            get discount(): number;
            /** 设置-折扣 */
            set discount(value: number);
            /** 映射的属性名称-折扣后总计 */
            static PROPERTY_DISCOUNTTOTAL_NAME: string;
            /** 获取-折扣后总计 */
            get discountTotal(): number;
            /** 设置-折扣后总计 */
            set discountTotal(value: number);
            /** 映射的属性名称-单据货币 */
            static PROPERTY_DOCUMENTCURRENCY_NAME: string;
            /** 获取-单据货币 */
            get documentCurrency(): string;
            /** 设置-单据货币 */
            set documentCurrency(value: string);
            /** 映射的属性名称-单据汇率 */
            static PROPERTY_DOCUMENTRATE_NAME: string;
            /** 获取-单据汇率 */
            get documentRate(): number;
            /** 设置-单据汇率 */
            set documentRate(value: number);
            /** 映射的属性名称-单据总计 */
            static PROPERTY_DOCUMENTTOTAL_NAME: string;
            /** 获取-单据总计 */
            get documentTotal(): number;
            /** 设置-单据总计 */
            set documentTotal(value: number);
            /** 映射的属性名称-已付款总计 */
            static PROPERTY_PAIDTOTAL_NAME: string;
            /** 获取-已付款总计 */
            get paidTotal(): number;
            /** 设置-已付款总计 */
            set paidTotal(value: number);
            /** 映射的属性名称-价格清单 */
            static PROPERTY_PRICELIST_NAME: string;
            /** 获取-价格清单 */
            get priceList(): number;
            /** 设置-价格清单 */
            set priceList(value: number);
            /** 映射的属性名称-付款条款代码 */
            static PROPERTY_PAYMENTCODE_NAME: string;
            /** 获取-付款条款代码 */
            get paymentCode(): string;
            /** 设置-付款条款代码 */
            set paymentCode(value: string);
            /** 映射的属性名称-舍入 */
            static PROPERTY_ROUNDING_NAME: string;
            /** 获取-舍入 */
            get rounding(): ibas.emYesNo;
            /** 设置-舍入 */
            set rounding(value: ibas.emYesNo);
            /** 映射的属性名称-舍入差额 */
            static PROPERTY_DIFFAMOUNT_NAME: string;
            /** 获取-舍入差额 */
            get diffAmount(): number;
            /** 设置-舍入差额 */
            set diffAmount(value: number);
            /** 映射的属性名称-项目代码 */
            static PROPERTY_PROJECT_NAME: string;
            /** 获取-项目代码 */
            get project(): string;
            /** 设置-项目代码 */
            set project(value: string);
            /** 映射的属性名称-终端客户 */
            static PROPERTY_CONSUMER_NAME: string;
            /** 获取-终端客户 */
            get consumer(): string;
            /** 设置-终端客户 */
            set consumer(value: string);
            /** 映射的属性名称-单据类型 */
            static PROPERTY_ORDERTYPE_NAME: string;
            /** 获取-单据类型 */
            get orderType(): string;
            /** 设置-单据类型 */
            set orderType(value: string);
            /** 映射的属性名称-采购报价-行集合 */
            static PROPERTY_PURCHASEQUOTEITEMS_NAME: string;
            /** 获取-采购报价-行集合 */
            get purchaseQuoteItems(): PurchaseQuoteItems;
            /** 设置-采购报价-行集合 */
            set purchaseQuoteItems(value: PurchaseQuoteItems);
            /** 初始化数据 */
            protected init(): void;
            /** 映射的属性名称-项目的税总计 */
            static PROPERTY_ITEMSTAXTOTAL_NAME: string;
            /** 获取-项目的税总计 */
            get itemsTaxTotal(): number;
            /** 设置-项目的税总计 */
            set itemsTaxTotal(value: number);
            /** 映射的属性名称-项目的行总计 */
            static PROPERTY_ITEMSLINETOTAL_NAME: string;
            /** 获取-项目的行总计 */
            get itemsLineTotal(): number;
            /** 设置-项目的行总计 */
            set itemsLineTotal(value: number);
            /** 映射的属性名称-单据税总计 */
            static PROPERTY_DOCUMENTTAXTOTAL_NAME: string;
            /** 获取-单据税总计 */
            get documentTaxTotal(): number;
            /** 设置-单据税总计 */
            set documentTaxTotal(value: number);
            protected registerRules(): ibas.IBusinessRule[];
            /** 重置 */
            reset(): void;
            /** 转换之前 */
            beforeConvert(): void;
            /** 数据解析后 */
            afterParsing(): void;
            /** 基于采购申请 */
            baseDocument(document: IPurchaseRequest): void;
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
            get docEntry(): number;
            /** 设置-编码 */
            set docEntry(value: number);
            /** 映射的属性名称-行号 */
            static PROPERTY_LINEID_NAME: string;
            /** 获取-行号 */
            get lineId(): number;
            /** 设置-行号 */
            set lineId(value: number);
            /** 映射的属性名称-显示顺序 */
            static PROPERTY_VISORDER_NAME: string;
            /** 获取-显示顺序 */
            get visOrder(): number;
            /** 设置-显示顺序 */
            set visOrder(value: number);
            /** 映射的属性名称-类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-类型 */
            get objectCode(): string;
            /** 设置-类型 */
            set objectCode(value: string);
            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-实例号（版本） */
            get logInst(): number;
            /** 设置-实例号（版本） */
            set logInst(value: number);
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            get dataSource(): string;
            /** 设置-数据源 */
            set dataSource(value: string);
            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string;
            /** 获取-取消 */
            get canceled(): ibas.emYesNo;
            /** 设置-取消 */
            set canceled(value: ibas.emYesNo);
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            get status(): ibas.emBOStatus;
            /** 设置-状态 */
            set status(value: ibas.emBOStatus);
            /** 映射的属性名称-单据状态 */
            static PROPERTY_LINESTATUS_NAME: string;
            /** 获取-单据状态 */
            get lineStatus(): ibas.emDocumentStatus;
            /** 设置-单据状态 */
            set lineStatus(value: ibas.emDocumentStatus);
            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string;
            /** 获取-创建日期 */
            get createDate(): Date;
            /** 设置-创建日期 */
            set createDate(value: Date);
            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string;
            /** 获取-创建时间 */
            get createTime(): number;
            /** 设置-创建时间 */
            set createTime(value: number);
            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-修改日期 */
            get updateDate(): Date;
            /** 设置-修改日期 */
            set updateDate(value: Date);
            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-修改时间 */
            get updateTime(): number;
            /** 设置-修改时间 */
            set updateTime(value: number);
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            get createUserSign(): number;
            /** 设置-创建用户 */
            set createUserSign(value: number);
            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-修改用户 */
            get updateUserSign(): number;
            /** 设置-修改用户 */
            set updateUserSign(value: number);
            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string;
            /** 获取-创建动作标识 */
            get createActionId(): string;
            /** 设置-创建动作标识 */
            set createActionId(value: string);
            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string;
            /** 获取-更新动作标识 */
            get updateActionId(): string;
            /** 设置-更新动作标识 */
            set updateActionId(value: string);
            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string;
            /** 获取-参考1 */
            get reference1(): string;
            /** 设置-参考1 */
            set reference1(value: string);
            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string;
            /** 获取-参考2 */
            get reference2(): string;
            /** 设置-参考2 */
            set reference2(value: string);
            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string;
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo;
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo);
            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string;
            /** 获取-已删除 */
            get deleted(): ibas.emYesNo;
            /** 设置-已删除 */
            set deleted(value: ibas.emYesNo);
            /** 映射的属性名称-基于类型 */
            static PROPERTY_BASEDOCUMENTTYPE_NAME: string;
            /** 获取-基于类型 */
            get baseDocumentType(): string;
            /** 设置-基于类型 */
            set baseDocumentType(value: string);
            /** 映射的属性名称-基于标识 */
            static PROPERTY_BASEDOCUMENTENTRY_NAME: string;
            /** 获取-基于标识 */
            get baseDocumentEntry(): number;
            /** 设置-基于标识 */
            set baseDocumentEntry(value: number);
            /** 映射的属性名称-基于行号 */
            static PROPERTY_BASEDOCUMENTLINEID_NAME: string;
            /** 获取-基于行号 */
            get baseDocumentLineId(): number;
            /** 设置-基于行号 */
            set baseDocumentLineId(value: number);
            /** 映射的属性名称-原始类型 */
            static PROPERTY_ORIGINALDOCUMENTTYPE_NAME: string;
            /** 获取-原始类型 */
            get originalDocumentType(): string;
            /** 设置-原始类型 */
            set originalDocumentType(value: string);
            /** 映射的属性名称-原始标识 */
            static PROPERTY_ORIGINALDOCUMENTENTRY_NAME: string;
            /** 获取-原始标识 */
            get originalDocumentEntry(): number;
            /** 设置-原始标识 */
            set originalDocumentEntry(value: number);
            /** 映射的属性名称-原始行号 */
            static PROPERTY_ORIGINALDOCUMENTLINEID_NAME: string;
            /** 获取-原始行号 */
            get originalDocumentLineId(): number;
            /** 设置-原始行号 */
            set originalDocumentLineId(value: number);
            /** 映射的属性名称-物料编码 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-物料编码 */
            get itemCode(): string;
            /** 设置-物料编码 */
            set itemCode(value: string);
            /** 映射的属性名称-物料/服务描述 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            /** 获取-物料/服务描述 */
            get itemDescription(): string;
            /** 设置-物料/服务描述 */
            set itemDescription(value: string);
            /** 映射的属性名称-物料标识 */
            static PROPERTY_ITEMSIGN_NAME: string;
            /** 获取-物料标识 */
            get itemSign(): string;
            /** 设置-物料标识 */
            set itemSign(value: string);
            /** 映射的属性名称-序号管理 */
            static PROPERTY_SERIALMANAGEMENT_NAME: string;
            /** 获取-序号管理 */
            get serialManagement(): ibas.emYesNo;
            /** 设置-序号管理 */
            set serialManagement(value: ibas.emYesNo);
            /** 映射的属性名称-批号管理 */
            static PROPERTY_BATCHMANAGEMENT_NAME: string;
            /** 获取-批号管理 */
            get batchManagement(): ibas.emYesNo;
            /** 设置-批号管理 */
            set batchManagement(value: ibas.emYesNo);
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            get quantity(): number;
            /** 设置-数量 */
            set quantity(value: number);
            /** 映射的属性名称-计量单位 */
            static PROPERTY_UOM_NAME: string;
            /** 获取-计量单位 */
            get uom(): string;
            /** 设置-计量单位 */
            set uom(value: string);
            /** 映射的属性名称-仓库 */
            static PROPERTY_WAREHOUSE_NAME: string;
            /** 获取-仓库 */
            get warehouse(): string;
            /** 设置-仓库 */
            set warehouse(value: string);
            /** 映射的属性名称-价格 */
            static PROPERTY_PRICE_NAME: string;
            /** 获取-价格 */
            get price(): number;
            /** 设置-价格 */
            set price(value: number);
            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string;
            /** 获取-货币 */
            get currency(): string;
            /** 设置-货币 */
            set currency(value: string);
            /** 映射的属性名称-汇率 */
            static PROPERTY_RATE_NAME: string;
            /** 获取-汇率 */
            get rate(): number;
            /** 设置-汇率 */
            set rate(value: number);
            /** 映射的属性名称-行总计 */
            static PROPERTY_LINETOTAL_NAME: string;
            /** 获取-行总计 */
            get lineTotal(): number;
            /** 设置-行总计 */
            set lineTotal(value: number);
            /** 映射的属性名称-行交货日期 */
            static PROPERTY_DELIVERYDATE_NAME: string;
            /** 获取-行交货日期 */
            get deliveryDate(): Date;
            /** 设置-行交货日期 */
            set deliveryDate(value: Date);
            /** 映射的属性名称-已清数量 */
            static PROPERTY_CLOSEDQUANTITY_NAME: string;
            /** 获取-已清数量 */
            get closedQuantity(): number;
            /** 设置-已清数量 */
            set closedQuantity(value: number);
            /** 映射的属性名称-行折扣 */
            static PROPERTY_DISCOUNT_NAME: string;
            /** 获取-行折扣 */
            get discount(): number;
            /** 设置-行折扣 */
            set discount(value: number);
            /** 映射的属性名称-已清金额 */
            static PROPERTY_CLOSEDAMOUNT_NAME: string;
            /** 获取-已清金额 */
            get closedAmount(): number;
            /** 设置-已清金额 */
            set closedAmount(value: number);
            /** 映射的属性名称-折扣前价格 */
            static PROPERTY_UNITPRICE_NAME: string;
            /** 获取-折扣前价格 */
            get unitPrice(): number;
            /** 设置-折扣前价格 */
            set unitPrice(value: number);
            /** 映射的属性名称-税定义 */
            static PROPERTY_TAX_NAME: string;
            /** 获取-税定义 */
            get tax(): string;
            /** 设置-税定义 */
            set tax(value: string);
            /** 映射的属性名称-税率 */
            static PROPERTY_TAXRATE_NAME: string;
            /** 获取-税率 */
            get taxRate(): number;
            /** 设置-税率 */
            set taxRate(value: number);
            /** 映射的属性名称-税总额 */
            static PROPERTY_TAXTOTAL_NAME: string;
            /** 获取-税总额 */
            get taxTotal(): number;
            /** 设置-税总额 */
            set taxTotal(value: number);
            /** 映射的属性名称-税前价格 */
            static PROPERTY_PRETAXPRICE_NAME: string;
            /** 获取-税前价格 */
            get preTaxPrice(): number;
            /** 设置-税前价格 */
            set preTaxPrice(value: number);
            /** 映射的属性名称-税前行总计 */
            static PROPERTY_PRETAXLINETOTAL_NAME: string;
            /** 获取-税前行总计 */
            get preTaxLineTotal(): number;
            /** 设置-税前行总计 */
            set preTaxLineTotal(value: number);
            /** 映射的属性名称-分配规则1 */
            static PROPERTY_DISTRIBUTIONRULE1_NAME: string;
            /** 获取-分配规则1 */
            get distributionRule1(): string;
            /** 设置-分配规则1 */
            set distributionRule1(value: string);
            /** 映射的属性名称-分配规则2 */
            static PROPERTY_DISTRIBUTIONRULE2_NAME: string;
            /** 获取-分配规则2 */
            get distributionRule2(): string;
            /** 设置-分配规则2 */
            set distributionRule2(value: string);
            /** 映射的属性名称-分配规则3 */
            static PROPERTY_DISTRIBUTIONRULE3_NAME: string;
            /** 获取-分配规则3 */
            get distributionRule3(): string;
            /** 设置-分配规则3 */
            set distributionRule3(value: string);
            /** 映射的属性名称-分配规则4 */
            static PROPERTY_DISTRIBUTIONRULE4_NAME: string;
            /** 获取-分配规则4 */
            get distributionRule4(): string;
            /** 设置-分配规则4 */
            set distributionRule4(value: string);
            /** 映射的属性名称-分配规则5 */
            static PROPERTY_DISTRIBUTIONRULE5_NAME: string;
            /** 获取-分配规则5 */
            get distributionRule5(): string;
            /** 设置-分配规则5 */
            set distributionRule5(value: string);
            /** 映射的属性名称-采购报价-行-额外信息集合 */
            static PROPERTY_PURCHASEQUOTEITEMEXTRAS_NAME: string;
            /** 获取-采购报价-行-额外信息集合 */
            get purchaseQuoteItemExtras(): PurchaseQuoteItemExtras;
            /** 设置-采购报价-行-额外信息集合 */
            set purchaseQuoteItemExtras(value: PurchaseQuoteItemExtras);
            /** 初始化数据 */
            protected init(): void;
            /** 赋值产品 */
            baseProduct(source: materials.bo.IProduct): void;
            protected registerRules(): ibas.IBusinessRule[];
            /** 重置 */
            reset(): void;
        }
        /** 采购报价-行-额外信息 集合 */
        class PurchaseQuoteItemExtras extends ibas.BusinessObjects<PurchaseQuoteItemExtra, PurchaseQuoteItem> implements IPurchaseQuoteItemExtras {
            /** 创建并添加子项 */
            create(): PurchaseQuoteItemExtra;
        }
        /** 采购报价-行-额外信息 */
        class PurchaseQuoteItemExtra extends ibas.BODocumentLine<PurchaseQuoteItemExtra> implements IPurchaseQuoteItemExtra {
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-编码 */
            static PROPERTY_DOCENTRY_NAME: string;
            /** 获取-编码 */
            get docEntry(): number;
            /** 设置-编码 */
            set docEntry(value: number);
            /** 映射的属性名称-行号 */
            static PROPERTY_LINEID_NAME: string;
            /** 获取-行号 */
            get lineId(): number;
            /** 设置-行号 */
            set lineId(value: number);
            /** 映射的属性名称-显示顺序 */
            static PROPERTY_VISORDER_NAME: string;
            /** 获取-显示顺序 */
            get visOrder(): number;
            /** 设置-显示顺序 */
            set visOrder(value: number);
            /** 映射的属性名称-类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-类型 */
            get objectCode(): string;
            /** 设置-类型 */
            set objectCode(value: string);
            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-实例号（版本） */
            get logInst(): number;
            /** 设置-实例号（版本） */
            set logInst(value: number);
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            get dataSource(): string;
            /** 设置-数据源 */
            set dataSource(value: string);
            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string;
            /** 获取-取消 */
            get canceled(): ibas.emYesNo;
            /** 设置-取消 */
            set canceled(value: ibas.emYesNo);
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            get status(): ibas.emBOStatus;
            /** 设置-状态 */
            set status(value: ibas.emBOStatus);
            /** 映射的属性名称-单据状态 */
            static PROPERTY_LINESTATUS_NAME: string;
            /** 获取-单据状态 */
            get lineStatus(): ibas.emDocumentStatus;
            /** 设置-单据状态 */
            set lineStatus(value: ibas.emDocumentStatus);
            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string;
            /** 获取-创建日期 */
            get createDate(): Date;
            /** 设置-创建日期 */
            set createDate(value: Date);
            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string;
            /** 获取-创建时间 */
            get createTime(): number;
            /** 设置-创建时间 */
            set createTime(value: number);
            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-修改日期 */
            get updateDate(): Date;
            /** 设置-修改日期 */
            set updateDate(value: Date);
            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-修改时间 */
            get updateTime(): number;
            /** 设置-修改时间 */
            set updateTime(value: number);
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            get createUserSign(): number;
            /** 设置-创建用户 */
            set createUserSign(value: number);
            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-修改用户 */
            get updateUserSign(): number;
            /** 设置-修改用户 */
            set updateUserSign(value: number);
            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string;
            /** 获取-创建动作标识 */
            get createActionId(): string;
            /** 设置-创建动作标识 */
            set createActionId(value: string);
            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string;
            /** 获取-更新动作标识 */
            get updateActionId(): string;
            /** 设置-更新动作标识 */
            set updateActionId(value: string);
            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string;
            /** 获取-参考1 */
            get reference1(): string;
            /** 设置-参考1 */
            set reference1(value: string);
            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string;
            /** 获取-参考2 */
            get reference2(): string;
            /** 设置-参考2 */
            set reference2(value: string);
            /** 映射的属性名称-项目行号 */
            static PROPERTY_ITEMID_NAME: string;
            /** 获取-项目行号 */
            get itemId(): number;
            /** 设置-项目行号 */
            set itemId(value: number);
            /** 映射的属性名称-额外类型 */
            static PROPERTY_EXTRATYPE_NAME: string;
            /** 获取-额外类型 */
            get extraType(): string;
            /** 设置-额外类型 */
            set extraType(value: string);
            /** 映射的属性名称-额外标识 */
            static PROPERTY_EXTRAKEY_NAME: string;
            /** 获取-额外标识 */
            get extraKey(): number;
            /** 设置-额外标识 */
            set extraKey(value: number);
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            get quantity(): number;
            /** 设置-数量 */
            set quantity(value: number);
            /** 映射的属性名称-备注 */
            static PROPERTY_NOTE_NAME: string;
            /** 获取-备注 */
            get note(): string;
            /** 设置-备注 */
            set note(value: string);
            /** 初始化数据 */
            protected init(): void;
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
        /** 采购申请 */
        class PurchaseRequest extends ibas.BODocument<PurchaseRequest> implements IPurchaseRequest {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-凭证编号 */
            static PROPERTY_DOCENTRY_NAME: string;
            /** 获取-凭证编号 */
            get docEntry(): number;
            /** 设置-凭证编号 */
            set docEntry(value: number);
            /** 映射的属性名称-期间编号 */
            static PROPERTY_DOCNUM_NAME: string;
            /** 获取-期间编号 */
            get docNum(): number;
            /** 设置-期间编号 */
            set docNum(value: number);
            /** 映射的属性名称-期间 */
            static PROPERTY_PERIOD_NAME: string;
            /** 获取-期间 */
            get period(): number;
            /** 设置-期间 */
            set period(value: number);
            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string;
            /** 获取-取消 */
            get canceled(): ibas.emYesNo;
            /** 设置-取消 */
            set canceled(value: ibas.emYesNo);
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            get status(): ibas.emBOStatus;
            /** 设置-状态 */
            set status(value: ibas.emBOStatus);
            /** 映射的属性名称-审批状态 */
            static PROPERTY_APPROVALSTATUS_NAME: string;
            /** 获取-审批状态 */
            get approvalStatus(): ibas.emApprovalStatus;
            /** 设置-审批状态 */
            set approvalStatus(value: ibas.emApprovalStatus);
            /** 映射的属性名称-单据状态 */
            static PROPERTY_DOCUMENTSTATUS_NAME: string;
            /** 获取-单据状态 */
            get documentStatus(): ibas.emDocumentStatus;
            /** 设置-单据状态 */
            set documentStatus(value: ibas.emDocumentStatus);
            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-对象类型 */
            get objectCode(): string;
            /** 设置-对象类型 */
            set objectCode(value: string);
            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string;
            /** 获取-创建日期 */
            get createDate(): Date;
            /** 设置-创建日期 */
            set createDate(value: Date);
            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string;
            /** 获取-创建时间 */
            get createTime(): number;
            /** 设置-创建时间 */
            set createTime(value: number);
            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-修改日期 */
            get updateDate(): Date;
            /** 设置-修改日期 */
            set updateDate(value: Date);
            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-修改时间 */
            get updateTime(): number;
            /** 设置-修改时间 */
            set updateTime(value: number);
            /** 映射的属性名称-版本 */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-版本 */
            get logInst(): number;
            /** 设置-版本 */
            set logInst(value: number);
            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string;
            /** 获取-服务系列 */
            get series(): number;
            /** 设置-服务系列 */
            set series(value: number);
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            get dataSource(): string;
            /** 设置-数据源 */
            set dataSource(value: string);
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            get createUserSign(): number;
            /** 设置-创建用户 */
            set createUserSign(value: number);
            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-修改用户 */
            get updateUserSign(): number;
            /** 设置-修改用户 */
            set updateUserSign(value: number);
            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string;
            /** 获取-创建动作标识 */
            get createActionId(): string;
            /** 设置-创建动作标识 */
            set createActionId(value: string);
            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string;
            /** 获取-更新动作标识 */
            get updateActionId(): string;
            /** 设置-更新动作标识 */
            set updateActionId(value: string);
            /** 映射的属性名称-数据所有者 */
            static PROPERTY_DATAOWNER_NAME: string;
            /** 获取-数据所有者 */
            get dataOwner(): number;
            /** 设置-数据所有者 */
            set dataOwner(value: number);
            /** 映射的属性名称-团队成员 */
            static PROPERTY_TEAMMEMBERS_NAME: string;
            /** 获取-团队成员 */
            get teamMembers(): string;
            /** 设置-团队成员 */
            set teamMembers(value: string);
            /** 映射的属性名称-数据所属组织 */
            static PROPERTY_ORGANIZATION_NAME: string;
            /** 获取-数据所属组织 */
            get organization(): string;
            /** 设置-数据所属组织 */
            set organization(value: string);
            /** 映射的属性名称-过账日期 */
            static PROPERTY_POSTINGDATE_NAME: string;
            /** 获取-过账日期 */
            get postingDate(): Date;
            /** 设置-过账日期 */
            set postingDate(value: Date);
            /** 映射的属性名称-到期日 */
            static PROPERTY_DELIVERYDATE_NAME: string;
            /** 获取-到期日 */
            get deliveryDate(): Date;
            /** 设置-到期日 */
            set deliveryDate(value: Date);
            /** 映射的属性名称-凭证日期 */
            static PROPERTY_DOCUMENTDATE_NAME: string;
            /** 获取-凭证日期 */
            get documentDate(): Date;
            /** 设置-凭证日期 */
            set documentDate(value: Date);
            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string;
            /** 获取-参考1 */
            get reference1(): string;
            /** 设置-参考1 */
            set reference1(value: string);
            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string;
            /** 获取-参考2 */
            get reference2(): string;
            /** 设置-参考2 */
            set reference2(value: string);
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string;
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo;
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo);
            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string;
            /** 获取-已删除 */
            get deleted(): ibas.emYesNo;
            /** 设置-已删除 */
            set deleted(value: ibas.emYesNo);
            /** 映射的属性名称-需求人 */
            static PROPERTY_REQUESTER_NAME: string;
            /** 获取-需求人 */
            get requester(): string;
            /** 设置-需求人 */
            set requester(value: string);
            /** 映射的属性名称-事由 */
            static PROPERTY_CAUSE_NAME: string;
            /** 获取-事由 */
            get cause(): string;
            /** 设置-事由 */
            set cause(value: string);
            /** 映射的属性名称-需求日期 */
            static PROPERTY_REQUESTDATE_NAME: string;
            /** 获取-需求日期 */
            get requestDate(): Date;
            /** 设置-需求日期 */
            set requestDate(value: Date);
            /** 映射的属性名称-单据货币 */
            static PROPERTY_DOCUMENTCURRENCY_NAME: string;
            /** 获取-单据货币 */
            get documentCurrency(): string;
            /** 设置-单据货币 */
            set documentCurrency(value: string);
            /** 映射的属性名称-单据汇率 */
            static PROPERTY_DOCUMENTRATE_NAME: string;
            /** 获取-单据汇率 */
            get documentRate(): number;
            /** 设置-单据汇率 */
            set documentRate(value: number);
            /** 映射的属性名称-单据总计 */
            static PROPERTY_DOCUMENTTOTAL_NAME: string;
            /** 获取-单据总计 */
            get documentTotal(): number;
            /** 设置-单据总计 */
            set documentTotal(value: number);
            /** 映射的属性名称-价格清单 */
            static PROPERTY_PRICELIST_NAME: string;
            /** 获取-价格清单 */
            get priceList(): number;
            /** 设置-价格清单 */
            set priceList(value: number);
            /** 映射的属性名称-舍入 */
            static PROPERTY_ROUNDING_NAME: string;
            /** 获取-舍入 */
            get rounding(): ibas.emYesNo;
            /** 设置-舍入 */
            set rounding(value: ibas.emYesNo);
            /** 映射的属性名称-舍入差额 */
            static PROPERTY_DIFFAMOUNT_NAME: string;
            /** 获取-舍入差额 */
            get diffAmount(): number;
            /** 设置-舍入差额 */
            set diffAmount(value: number);
            /** 映射的属性名称-项目代码 */
            static PROPERTY_PROJECT_NAME: string;
            /** 获取-项目代码 */
            get project(): string;
            /** 设置-项目代码 */
            set project(value: string);
            /** 映射的属性名称-单据类型 */
            static PROPERTY_ORDERTYPE_NAME: string;
            /** 获取-单据类型 */
            get orderType(): string;
            /** 设置-单据类型 */
            set orderType(value: string);
            /** 映射的属性名称-采购申请-行集合 */
            static PROPERTY_PURCHASEREQUESTITEMS_NAME: string;
            /** 获取-采购申请-行集合 */
            get purchaseRequestItems(): PurchaseRequestItems;
            /** 设置-采购申请-行集合 */
            set purchaseRequestItems(value: PurchaseRequestItems);
            /** 初始化数据 */
            protected init(): void;
            /** 映射的属性名称-项目的税总计 */
            static PROPERTY_ITEMSTAXTOTAL_NAME: string;
            /** 获取-项目的税总计 */
            get itemsTaxTotal(): number;
            /** 设置-项目的税总计 */
            set itemsTaxTotal(value: number);
            /** 映射的属性名称-单据税总计 */
            static PROPERTY_DOCUMENTTAXTOTAL_NAME: string;
            /** 获取-单据税总计 */
            get documentTaxTotal(): number;
            /** 设置-单据税总计 */
            set documentTaxTotal(value: number);
            protected registerRules(): ibas.IBusinessRule[];
            /** 重置 */
            reset(): void;
            /** 转换之前 */
            beforeConvert(): void;
            /** 数据解析后 */
            afterParsing(): void;
        }
        /** 采购申请-行 集合 */
        class PurchaseRequestItems extends ibas.BusinessObjects<PurchaseRequestItem, PurchaseRequest> implements IPurchaseRequestItems {
            /** 创建并添加子项 */
            create(): PurchaseRequestItem;
        }
        /** 采购申请-行 */
        class PurchaseRequestItem extends ibas.BODocumentLine<PurchaseRequestItem> implements IPurchaseRequestItem {
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-编码 */
            static PROPERTY_DOCENTRY_NAME: string;
            /** 获取-编码 */
            get docEntry(): number;
            /** 设置-编码 */
            set docEntry(value: number);
            /** 映射的属性名称-行号 */
            static PROPERTY_LINEID_NAME: string;
            /** 获取-行号 */
            get lineId(): number;
            /** 设置-行号 */
            set lineId(value: number);
            /** 映射的属性名称-显示顺序 */
            static PROPERTY_VISORDER_NAME: string;
            /** 获取-显示顺序 */
            get visOrder(): number;
            /** 设置-显示顺序 */
            set visOrder(value: number);
            /** 映射的属性名称-类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-类型 */
            get objectCode(): string;
            /** 设置-类型 */
            set objectCode(value: string);
            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-实例号（版本） */
            get logInst(): number;
            /** 设置-实例号（版本） */
            set logInst(value: number);
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            get dataSource(): string;
            /** 设置-数据源 */
            set dataSource(value: string);
            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string;
            /** 获取-取消 */
            get canceled(): ibas.emYesNo;
            /** 设置-取消 */
            set canceled(value: ibas.emYesNo);
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            get status(): ibas.emBOStatus;
            /** 设置-状态 */
            set status(value: ibas.emBOStatus);
            /** 映射的属性名称-单据状态 */
            static PROPERTY_LINESTATUS_NAME: string;
            /** 获取-单据状态 */
            get lineStatus(): ibas.emDocumentStatus;
            /** 设置-单据状态 */
            set lineStatus(value: ibas.emDocumentStatus);
            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string;
            /** 获取-创建日期 */
            get createDate(): Date;
            /** 设置-创建日期 */
            set createDate(value: Date);
            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string;
            /** 获取-创建时间 */
            get createTime(): number;
            /** 设置-创建时间 */
            set createTime(value: number);
            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-修改日期 */
            get updateDate(): Date;
            /** 设置-修改日期 */
            set updateDate(value: Date);
            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-修改时间 */
            get updateTime(): number;
            /** 设置-修改时间 */
            set updateTime(value: number);
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            get createUserSign(): number;
            /** 设置-创建用户 */
            set createUserSign(value: number);
            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-修改用户 */
            get updateUserSign(): number;
            /** 设置-修改用户 */
            set updateUserSign(value: number);
            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string;
            /** 获取-创建动作标识 */
            get createActionId(): string;
            /** 设置-创建动作标识 */
            set createActionId(value: string);
            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string;
            /** 获取-更新动作标识 */
            get updateActionId(): string;
            /** 设置-更新动作标识 */
            set updateActionId(value: string);
            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string;
            /** 获取-参考1 */
            get reference1(): string;
            /** 设置-参考1 */
            set reference1(value: string);
            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string;
            /** 获取-参考2 */
            get reference2(): string;
            /** 设置-参考2 */
            set reference2(value: string);
            /** 映射的属性名称-已引用 */
            static PROPERTY_REFERENCED_NAME: string;
            /** 获取-已引用 */
            get referenced(): ibas.emYesNo;
            /** 设置-已引用 */
            set referenced(value: ibas.emYesNo);
            /** 映射的属性名称-已删除 */
            static PROPERTY_DELETED_NAME: string;
            /** 获取-已删除 */
            get deleted(): ibas.emYesNo;
            /** 设置-已删除 */
            set deleted(value: ibas.emYesNo);
            /** 映射的属性名称-基于类型 */
            static PROPERTY_BASEDOCUMENTTYPE_NAME: string;
            /** 获取-基于类型 */
            get baseDocumentType(): string;
            /** 设置-基于类型 */
            set baseDocumentType(value: string);
            /** 映射的属性名称-基于标识 */
            static PROPERTY_BASEDOCUMENTENTRY_NAME: string;
            /** 获取-基于标识 */
            get baseDocumentEntry(): number;
            /** 设置-基于标识 */
            set baseDocumentEntry(value: number);
            /** 映射的属性名称-基于行号 */
            static PROPERTY_BASEDOCUMENTLINEID_NAME: string;
            /** 获取-基于行号 */
            get baseDocumentLineId(): number;
            /** 设置-基于行号 */
            set baseDocumentLineId(value: number);
            /** 映射的属性名称-原始类型 */
            static PROPERTY_ORIGINALDOCUMENTTYPE_NAME: string;
            /** 获取-原始类型 */
            get originalDocumentType(): string;
            /** 设置-原始类型 */
            set originalDocumentType(value: string);
            /** 映射的属性名称-原始标识 */
            static PROPERTY_ORIGINALDOCUMENTENTRY_NAME: string;
            /** 获取-原始标识 */
            get originalDocumentEntry(): number;
            /** 设置-原始标识 */
            set originalDocumentEntry(value: number);
            /** 映射的属性名称-原始行号 */
            static PROPERTY_ORIGINALDOCUMENTLINEID_NAME: string;
            /** 获取-原始行号 */
            get originalDocumentLineId(): number;
            /** 设置-原始行号 */
            set originalDocumentLineId(value: number);
            /** 映射的属性名称-物料编码 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-物料编码 */
            get itemCode(): string;
            /** 设置-物料编码 */
            set itemCode(value: string);
            /** 映射的属性名称-物料/服务描述 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            /** 获取-物料/服务描述 */
            get itemDescription(): string;
            /** 设置-物料/服务描述 */
            set itemDescription(value: string);
            /** 映射的属性名称-物料标识 */
            static PROPERTY_ITEMSIGN_NAME: string;
            /** 获取-物料标识 */
            get itemSign(): string;
            /** 设置-物料标识 */
            set itemSign(value: string);
            /** 映射的属性名称-序号管理 */
            static PROPERTY_SERIALMANAGEMENT_NAME: string;
            /** 获取-序号管理 */
            get serialManagement(): ibas.emYesNo;
            /** 设置-序号管理 */
            set serialManagement(value: ibas.emYesNo);
            /** 映射的属性名称-批号管理 */
            static PROPERTY_BATCHMANAGEMENT_NAME: string;
            /** 获取-批号管理 */
            get batchManagement(): ibas.emYesNo;
            /** 设置-批号管理 */
            set batchManagement(value: ibas.emYesNo);
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            get quantity(): number;
            /** 设置-数量 */
            set quantity(value: number);
            /** 映射的属性名称-单位 */
            static PROPERTY_UOM_NAME: string;
            /** 获取-单位 */
            get uom(): string;
            /** 设置-单位 */
            set uom(value: string);
            /** 映射的属性名称-供应商 */
            static PROPERTY_SUPPLIER_NAME: string;
            /** 获取-供应商 */
            get supplier(): string;
            /** 设置-供应商 */
            set supplier(value: string);
            /** 映射的属性名称-价格 */
            static PROPERTY_PRICE_NAME: string;
            /** 获取-价格 */
            get price(): number;
            /** 设置-价格 */
            set price(value: number);
            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string;
            /** 获取-货币 */
            get currency(): string;
            /** 设置-货币 */
            set currency(value: string);
            /** 映射的属性名称-汇率 */
            static PROPERTY_RATE_NAME: string;
            /** 获取-汇率 */
            get rate(): number;
            /** 设置-汇率 */
            set rate(value: number);
            /** 映射的属性名称-行总计 */
            static PROPERTY_LINETOTAL_NAME: string;
            /** 获取-行总计 */
            get lineTotal(): number;
            /** 设置-行总计 */
            set lineTotal(value: number);
            /** 映射的属性名称-需求日期 */
            static PROPERTY_REQUESTDATE_NAME: string;
            /** 获取-需求日期 */
            get requestDate(): Date;
            /** 设置-需求日期 */
            set requestDate(value: Date);
            /** 映射的属性名称-已清数量 */
            static PROPERTY_CLOSEDQUANTITY_NAME: string;
            /** 获取-已清数量 */
            get closedQuantity(): number;
            /** 设置-已清数量 */
            set closedQuantity(value: number);
            /** 映射的属性名称-税定义 */
            static PROPERTY_TAX_NAME: string;
            /** 获取-税定义 */
            get tax(): string;
            /** 设置-税定义 */
            set tax(value: string);
            /** 映射的属性名称-税率 */
            static PROPERTY_TAXRATE_NAME: string;
            /** 获取-税率 */
            get taxRate(): number;
            /** 设置-税率 */
            set taxRate(value: number);
            /** 映射的属性名称-税总额 */
            static PROPERTY_TAXTOTAL_NAME: string;
            /** 获取-税总额 */
            get taxTotal(): number;
            /** 设置-税总额 */
            set taxTotal(value: number);
            /** 映射的属性名称-税前价格 */
            static PROPERTY_PRETAXPRICE_NAME: string;
            /** 获取-税前价格 */
            get preTaxPrice(): number;
            /** 设置-税前价格 */
            set preTaxPrice(value: number);
            /** 映射的属性名称-税前行总计 */
            static PROPERTY_PRETAXLINETOTAL_NAME: string;
            /** 获取-税前行总计 */
            get preTaxLineTotal(): number;
            /** 设置-税前行总计 */
            set preTaxLineTotal(value: number);
            /** 映射的属性名称-分配规则1 */
            static PROPERTY_DISTRIBUTIONRULE1_NAME: string;
            /** 获取-分配规则1 */
            get distributionRule1(): string;
            /** 设置-分配规则1 */
            set distributionRule1(value: string);
            /** 映射的属性名称-分配规则2 */
            static PROPERTY_DISTRIBUTIONRULE2_NAME: string;
            /** 获取-分配规则2 */
            get distributionRule2(): string;
            /** 设置-分配规则2 */
            set distributionRule2(value: string);
            /** 映射的属性名称-分配规则3 */
            static PROPERTY_DISTRIBUTIONRULE3_NAME: string;
            /** 获取-分配规则3 */
            get distributionRule3(): string;
            /** 设置-分配规则3 */
            set distributionRule3(value: string);
            /** 映射的属性名称-分配规则4 */
            static PROPERTY_DISTRIBUTIONRULE4_NAME: string;
            /** 获取-分配规则4 */
            get distributionRule4(): string;
            /** 设置-分配规则4 */
            set distributionRule4(value: string);
            /** 映射的属性名称-分配规则5 */
            static PROPERTY_DISTRIBUTIONRULE5_NAME: string;
            /** 获取-分配规则5 */
            get distributionRule5(): string;
            /** 设置-分配规则5 */
            set distributionRule5(value: string);
            /** 映射的属性名称-采购申请-行-额外信息集合 */
            static PROPERTY_PURCHASEREQUESTITEMEXTRAS_NAME: string;
            /** 获取-采购申请-行-额外信息集合 */
            get purchaseRequestItemExtras(): PurchaseRequestItemExtras;
            /** 设置-采购申请-行-额外信息集合 */
            set purchaseRequestItemExtras(value: PurchaseRequestItemExtras);
            /** 初始化数据 */
            protected init(): void;
            /** 赋值产品 */
            baseProduct(source: materials.bo.IProduct): void;
            protected registerRules(): ibas.IBusinessRule[];
            /** 重置 */
            reset(): void;
        }
        /** 采购申请-行-额外信息 集合 */
        class PurchaseRequestItemExtras extends ibas.BusinessObjects<PurchaseRequestItemExtra, PurchaseRequestItem> implements IPurchaseRequestItemExtras {
            /** 创建并添加子项 */
            create(): PurchaseRequestItemExtra;
        }
        /** 采购申请-行-额外信息 */
        class PurchaseRequestItemExtra extends ibas.BODocumentLine<PurchaseRequestItemExtra> implements IPurchaseRequestItemExtra {
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-编码 */
            static PROPERTY_DOCENTRY_NAME: string;
            /** 获取-编码 */
            get docEntry(): number;
            /** 设置-编码 */
            set docEntry(value: number);
            /** 映射的属性名称-行号 */
            static PROPERTY_LINEID_NAME: string;
            /** 获取-行号 */
            get lineId(): number;
            /** 设置-行号 */
            set lineId(value: number);
            /** 映射的属性名称-显示顺序 */
            static PROPERTY_VISORDER_NAME: string;
            /** 获取-显示顺序 */
            get visOrder(): number;
            /** 设置-显示顺序 */
            set visOrder(value: number);
            /** 映射的属性名称-类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-类型 */
            get objectCode(): string;
            /** 设置-类型 */
            set objectCode(value: string);
            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-实例号（版本） */
            get logInst(): number;
            /** 设置-实例号（版本） */
            set logInst(value: number);
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            get dataSource(): string;
            /** 设置-数据源 */
            set dataSource(value: string);
            /** 映射的属性名称-取消 */
            static PROPERTY_CANCELED_NAME: string;
            /** 获取-取消 */
            get canceled(): ibas.emYesNo;
            /** 设置-取消 */
            set canceled(value: ibas.emYesNo);
            /** 映射的属性名称-状态 */
            static PROPERTY_STATUS_NAME: string;
            /** 获取-状态 */
            get status(): ibas.emBOStatus;
            /** 设置-状态 */
            set status(value: ibas.emBOStatus);
            /** 映射的属性名称-单据状态 */
            static PROPERTY_LINESTATUS_NAME: string;
            /** 获取-单据状态 */
            get lineStatus(): ibas.emDocumentStatus;
            /** 设置-单据状态 */
            set lineStatus(value: ibas.emDocumentStatus);
            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string;
            /** 获取-创建日期 */
            get createDate(): Date;
            /** 设置-创建日期 */
            set createDate(value: Date);
            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string;
            /** 获取-创建时间 */
            get createTime(): number;
            /** 设置-创建时间 */
            set createTime(value: number);
            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-修改日期 */
            get updateDate(): Date;
            /** 设置-修改日期 */
            set updateDate(value: Date);
            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-修改时间 */
            get updateTime(): number;
            /** 设置-修改时间 */
            set updateTime(value: number);
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            get createUserSign(): number;
            /** 设置-创建用户 */
            set createUserSign(value: number);
            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-修改用户 */
            get updateUserSign(): number;
            /** 设置-修改用户 */
            set updateUserSign(value: number);
            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string;
            /** 获取-创建动作标识 */
            get createActionId(): string;
            /** 设置-创建动作标识 */
            set createActionId(value: string);
            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string;
            /** 获取-更新动作标识 */
            get updateActionId(): string;
            /** 设置-更新动作标识 */
            set updateActionId(value: string);
            /** 映射的属性名称-参考1 */
            static PROPERTY_REFERENCE1_NAME: string;
            /** 获取-参考1 */
            get reference1(): string;
            /** 设置-参考1 */
            set reference1(value: string);
            /** 映射的属性名称-参考2 */
            static PROPERTY_REFERENCE2_NAME: string;
            /** 获取-参考2 */
            get reference2(): string;
            /** 设置-参考2 */
            set reference2(value: string);
            /** 映射的属性名称-项目行号 */
            static PROPERTY_ITEMID_NAME: string;
            /** 获取-项目行号 */
            get itemId(): number;
            /** 设置-项目行号 */
            set itemId(value: number);
            /** 映射的属性名称-额外类型 */
            static PROPERTY_EXTRATYPE_NAME: string;
            /** 获取-额外类型 */
            get extraType(): string;
            /** 设置-额外类型 */
            set extraType(value: string);
            /** 映射的属性名称-额外标识 */
            static PROPERTY_EXTRAKEY_NAME: string;
            /** 获取-额外标识 */
            get extraKey(): number;
            /** 设置-额外标识 */
            set extraKey(value: number);
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            get quantity(): number;
            /** 设置-数量 */
            set quantity(value: number);
            /** 映射的属性名称-备注 */
            static PROPERTY_NOTE_NAME: string;
            /** 获取-备注 */
            get note(): string;
            /** 设置-备注 */
            set note(value: string);
            /** 初始化数据 */
            protected init(): void;
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
            get baseDocumentType(): string;
            /** 设置-基于类型 */
            set baseDocumentType(value: string);
            /** 映射的属性名称-基于标识 */
            static PROPERTY_BASEDOCUMENTENTRY_NAME: string;
            /** 获取-基于标识 */
            get baseDocumentEntry(): number;
            /** 设置-基于标识 */
            set baseDocumentEntry(value: number);
            /** 映射的属性名称-名称 */
            static PROPERTY_NAME_NAME: string;
            /** 获取-名称 */
            get name(): string;
            /** 设置-名称 */
            set name(value: string);
            /** 映射的属性名称-顺序 */
            static PROPERTY_ORDER_NAME: string;
            /** 获取-顺序 */
            get order(): number;
            /** 设置-顺序 */
            set order(value: number);
            /** 映射的属性名称-送货状态 */
            static PROPERTY_SHIPPINGSTATUS_NAME: string;
            /** 获取-送货状态 */
            get shippingStatus(): emShippingStatus;
            /** 设置-送货状态 */
            set shippingStatus(value: emShippingStatus);
            /** 映射的属性名称-收货人 */
            static PROPERTY_CONSIGNEE_NAME: string;
            /** 获取-收货人 */
            get consignee(): string;
            /** 设置-收货人 */
            set consignee(value: string);
            /** 映射的属性名称-街道 */
            static PROPERTY_STREET_NAME: string;
            /** 获取-街道 */
            get street(): string;
            /** 设置-街道 */
            set street(value: string);
            /** 映射的属性名称-县/区 */
            static PROPERTY_DISTRICT_NAME: string;
            /** 获取-县/区 */
            get district(): string;
            /** 设置-县/区 */
            set district(value: string);
            /** 映射的属性名称-市 */
            static PROPERTY_CITY_NAME: string;
            /** 获取-市 */
            get city(): string;
            /** 设置-市 */
            set city(value: string);
            /** 映射的属性名称-省 */
            static PROPERTY_PROVINCE_NAME: string;
            /** 获取-省 */
            get province(): string;
            /** 设置-省 */
            set province(value: string);
            /** 映射的属性名称-国 */
            static PROPERTY_COUNTRY_NAME: string;
            /** 获取-国 */
            get country(): string;
            /** 设置-国 */
            set country(value: string);
            /** 映射的属性名称-邮编 */
            static PROPERTY_ZIPCODE_NAME: string;
            /** 获取-邮编 */
            get zipCode(): string;
            /** 设置-邮编 */
            set zipCode(value: string);
            /** 映射的属性名称-联系电话 */
            static PROPERTY_MOBILEPHONE_NAME: string;
            /** 获取-联系电话 */
            get mobilePhone(): string;
            /** 设置-联系电话 */
            set mobilePhone(value: string);
            /** 映射的属性名称-电话  */
            static PROPERTY_TELEPHONE_NAME: string;
            /** 获取-电话  */
            get telephone(): string;
            /** 设置-电话  */
            set telephone(value: string);
            /** 映射的属性名称-备注 1 */
            static PROPERTY_REMARK1_NAME: string;
            /** 获取-备注 1 */
            get remark1(): string;
            /** 设置-备注 1 */
            set remark1(value: string);
            /** 映射的属性名称-备注 2 */
            static PROPERTY_REMARK2_NAME: string;
            /** 获取-备注 2 */
            get remark2(): string;
            /** 设置-备注 2 */
            set remark2(value: string);
            /** 映射的属性名称-费用 */
            static PROPERTY_EXPENSE_NAME: string;
            /** 获取-费用 */
            get expense(): number;
            /** 设置-费用 */
            set expense(value: number);
            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string;
            /** 获取-货币 */
            get currency(): string;
            /** 设置-货币 */
            set currency(value: string);
            /** 映射的属性名称-汇率 */
            static PROPERTY_RATE_NAME: string;
            /** 获取-汇率 */
            get rate(): number;
            /** 设置-汇率 */
            set rate(value: number);
            /** 映射的属性名称-快递单号 */
            static PROPERTY_TRACKINGNUMBER_NAME: string;
            /** 获取-快递单号 */
            get trackingNumber(): string;
            /** 设置-快递单号 */
            set trackingNumber(value: string);
            /** 映射的属性名称-税定义 */
            static PROPERTY_TAX_NAME: string;
            /** 获取-税定义 */
            get tax(): string;
            /** 设置-税定义 */
            set tax(value: string);
            /** 映射的属性名称-税率 */
            static PROPERTY_TAXRATE_NAME: string;
            /** 获取-税率 */
            get taxRate(): number;
            /** 设置-税率 */
            set taxRate(value: number);
            /** 映射的属性名称-税总额 */
            static PROPERTY_TAXTOTAL_NAME: string;
            /** 获取-税总额 */
            get taxTotal(): number;
            /** 设置-税总额 */
            set taxTotal(value: number);
            /** 映射的属性名称-税前费用 */
            static PROPERTY_PRETAXEXPENSE_NAME: string;
            /** 获取-税前费用 */
            get preTaxExpense(): number;
            /** 设置-税前费用 */
            set preTaxExpense(value: number);
            /** 映射的属性名称-对象编号 */
            static PROPERTY_OBJECTKEY_NAME: string;
            /** 获取-对象编号 */
            get objectKey(): number;
            /** 设置-对象编号 */
            set objectKey(value: number);
            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-对象类型 */
            get objectCode(): string;
            /** 设置-对象类型 */
            set objectCode(value: string);
            /** 映射的属性名称-创建日期 */
            static PROPERTY_CREATEDATE_NAME: string;
            /** 获取-创建日期 */
            get createDate(): Date;
            /** 设置-创建日期 */
            set createDate(value: Date);
            /** 映射的属性名称-创建时间 */
            static PROPERTY_CREATETIME_NAME: string;
            /** 获取-创建时间 */
            get createTime(): number;
            /** 设置-创建时间 */
            set createTime(value: number);
            /** 映射的属性名称-修改日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-修改日期 */
            get updateDate(): Date;
            /** 设置-修改日期 */
            set updateDate(value: Date);
            /** 映射的属性名称-修改时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-修改时间 */
            get updateTime(): number;
            /** 设置-修改时间 */
            set updateTime(value: number);
            /** 映射的属性名称-实例号（版本） */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-实例号（版本） */
            get logInst(): number;
            /** 设置-实例号（版本） */
            set logInst(value: number);
            /** 映射的属性名称-服务系列 */
            static PROPERTY_SERIES_NAME: string;
            /** 获取-服务系列 */
            get series(): number;
            /** 设置-服务系列 */
            set series(value: number);
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            get dataSource(): string;
            /** 设置-数据源 */
            set dataSource(value: string);
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            get createUserSign(): number;
            /** 设置-创建用户 */
            set createUserSign(value: number);
            /** 映射的属性名称-修改用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-修改用户 */
            get updateUserSign(): number;
            /** 设置-修改用户 */
            set updateUserSign(value: number);
            /** 映射的属性名称-创建动作标识 */
            static PROPERTY_CREATEACTIONID_NAME: string;
            /** 获取-创建动作标识 */
            get createActionId(): string;
            /** 设置-创建动作标识 */
            set createActionId(value: string);
            /** 映射的属性名称-更新动作标识 */
            static PROPERTY_UPDATEACTIONID_NAME: string;
            /** 获取-更新动作标识 */
            get updateActionId(): string;
            /** 设置-更新动作标识 */
            set updateActionId(value: string);
            /** 初始化数据 */
            protected init(): void;
            protected registerRules(): ibas.IBusinessRule[];
        }
        /** 送货地址 集合 */
        class ShippingAddresss extends ibas.BusinessObjects<ShippingAddress, IPurchaseQuote | IPurchaseOrder | IPurchaseDelivery | IPurchaseReturn> implements IShippingAddresss {
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
        /**
         * 基于单据
         * @param target 目标
         * @param source 源
         */
        function baseDocument(target: IPurchaseOrder | IPurchaseDelivery | IPurchaseReturn, source: IPurchaseQuote | IPurchaseOrder | IPurchaseDelivery): void;
        /**
         * 基于单据
         * @param target 目标
         * @param source 源
         */
        function baseDocumentItem(target: IPurchaseOrderItem | IPurchaseDeliveryItem | IPurchaseReturnItem, source: IPurchaseQuoteItem | IPurchaseOrderItem | IPurchaseDeliveryItem): void;
        function baseProduct(target: PurchaseQuoteItem | PurchaseOrderItem | PurchaseDeliveryItem | PurchaseReturnItem | PurchaseRequestItem, source: materials.bo.IProduct): void;
        /** 业务规则-推导税前税后价格 */
        class BusinessRuleDeductionTaxPrice extends ibas.BusinessRuleCommon {
            /**
             * 构造方法
             * @param taxRate  属性-税率
             * @param preTax   属性-税前
             * @param afterTax 属性-税后
             */
            constructor(taxRate: string, preTax: string, afterTax: string, decimalPlaces?: number);
            /** 税率 */
            taxRate: string;
            /** 税前价格 */
            preTax: string;
            /** 税后价格 */
            afterTax: string;
            /** 结果保留小数位 */
            decimalPlaces: number;
            /** 计算规则 */
            protected compute(context: ibas.BusinessRuleContextCommon): void;
        }
        /** 业务规则-推导折扣前折扣后价格 */
        class BusinessRuleDeductionDiscountPrice extends ibas.BusinessRuleCommon {
            /**
             * 构造方法
             * @param discount  属性-折扣
             * @param preDiscount   属性-折扣前
             * @param afterDiscount 属性-折扣后
             */
            constructor(discount: string, preDiscount: string, afterDiscount: string, decimalPlaces?: number);
            /** 折扣 */
            discount: string;
            /** 折扣前价格 */
            preDiscount: string;
            /** 折扣后价格 */
            afterDiscount: string;
            /** 结果保留小数位 */
            decimalPlaces: number;
            /** 计算规则 */
            protected compute(context: ibas.BusinessRuleContextCommon): void;
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
            /**
             * 查询 采购申请
             * @param fetcher 查询者
             */
            fetchPurchaseRequest(fetcher: ibas.IFetchCaller<bo.PurchaseRequest>): void;
            /**
             * 保存 采购申请
             * @param saver 保存者
             */
            savePurchaseRequest(saver: ibas.ISaveCaller<bo.PurchaseRequest>): void;
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
            /** 选择联系人 */
            private choosePurchaseDeliveryContactPerson;
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
            /** 选择采购收货联系人信息 */
            choosePurchaseDeliveryContactPersonEvent: Function;
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
            /** 默认税组 */
            defaultTaxGroup: string;
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
            showShippingAddresses(datas: bo.ShippingAddress[]): void;
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
            /** 选择采购订单-采购请求事件 */
            private choosePurchaseOrderPurchaseRequest;
            /** 选择联系人 */
            private choosePurchaseOrderContactPerson;
            private editShippingAddresses;
            private showSaleOrderItemExtra;
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
            /** 选择采购订单联系人信息 */
            choosePurchaseOrderContactPersonEvent: Function;
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
            /** 显示采购订单行额外信息事件 */
            showPurchaseOrderItemExtraEvent: Function;
            /** 显示数据 */
            showPurchaseOrderItems(datas: bo.PurchaseOrderItem[]): void;
            /** 选择采购订单-采购报价事件 */
            choosePurchaseOrderPurchaseQuoteEvent: Function;
            /** 选择采购订单-采购申请事件 */
            choosePurchaseOrderPurchaseRequestEvent: Function;
            /** 编辑地址事件 */
            editShippingAddressesEvent: Function;
            /** 默认仓库 */
            defaultWarehouse: string;
            /** 默认税组 */
            defaultTaxGroup: string;
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
            showShippingAddresses(datas: bo.ShippingAddress[]): void;
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
declare namespace purchase {
    namespace app {
        /** 列表应用-采购订单项目-额外 */
        class PurchaseOrderItemExtraApp extends ibas.Application<IPurchaseOrderItemExtraView> {
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
            run(data: bo.PurchaseOrderItem, parent?: bo.PurchaseOrder): void;
            private editData;
            private dataParent;
            /** 添加采购订单-行事件 */
            private addPurchaseOrderItemExtra;
            /** 删除采购订单-行事件 */
            private removePurchaseOrderItemExtra;
            private deletePurchaseOrderItemExtra;
            private viewPurchaseOrderItemExtra;
        }
        /** 视图-采购订单项目-额外 */
        interface IPurchaseOrderItemExtraView extends ibas.IBOView {
            /** 显示数据 */
            showData(data: bo.PurchaseOrderItem): void;
            /** 显示额外数据 */
            showExtraDatas(datas: bo.PurchaseOrderItemExtra[]): void;
            /** 添加采购订单-行额外 事件 */
            addPurchaseOrderItemExtraEvent: Function;
            /** 移出采购订单-行额外 事件 */
            removePurchaseOrderItemExtraEvent: Function;
            /** 删除采购订单-行额外 事件 */
            deletePurchaseOrderItemExtraEvent: Function;
            /** 查看采购订单-行额外 事件 */
            viewPurchaseOrderItemExtraEvent: Function;
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
            /** 选择联系人 */
            private choosePurchaseReturnContactPerson;
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
            /** 选择采购退货联系人信息 */
            choosePurchaseReturnContactPersonEvent: Function;
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
            showShippingAddresses(datas: bo.ShippingAddress[]): void;
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
        /** 编辑应用-采购报价 */
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
            /** 添加采购报价-行事件 */
            private addPurchaseQuoteItem;
            /** 删除采购报价-行事件 */
            private removePurchaseQuoteItem;
            /** 选择联系人 */
            private choosePurchaseQuoteContactPerson;
            private showPurchaseQuoteItemExtra;
            /** 选择采购报价-采购请求事件 */
            private choosePurchaseQuotePurchaseRequest;
        }
        /** 视图-采购报价 */
        interface IPurchaseQuoteEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showPurchaseQuote(data: bo.PurchaseQuote): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加采购报价-行事件 */
            addPurchaseQuoteItemEvent: Function;
            /** 删除采购报价-行事件 */
            removePurchaseQuoteItemEvent: Function;
            /** 选择采购报价供应商信息 */
            choosePurchaseQuoteSupplierEvent: Function;
            /** 选择采购报价联系人信息 */
            choosePurchaseQuoteContactPersonEvent: Function;
            /** 选择采购报价价格清单信息 */
            choosePurchaseQuotePriceListEvent: Function;
            /** 选择采购报价-行物料主数据 */
            choosePurchaseQuoteItemMaterialEvent: Function;
            /** 选择采购报价-行 仓库 */
            choosePurchaseQuoteItemWarehouseEvent: Function;
            /** 显示采购报价额外信息事件 */
            showPurchaseQuoteItemExtraEvent: Function;
            /** 显示数据 */
            showPurchaseQuoteItems(datas: bo.PurchaseQuoteItem[]): void;
            /** 选择采购报价-采购申请事件 */
            choosePurchaseQuotePurchaseRequestEvent: Function;
            /** 默认税组 */
            defaultTaxGroup: string;
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
declare namespace purchase {
    namespace app {
        /** 列表应用-采购报价项目-额外 */
        class PurchaseQuoteItemExtraApp extends ibas.Application<IPurchaseQuoteItemExtraView> {
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
            run(data: bo.PurchaseQuoteItem, parent?: bo.PurchaseQuote): void;
            private editData;
            private dataParent;
            /** 添加采购报价-行事件 */
            private addPurchaseQuoteItemExtra;
            /** 删除采购报价-行事件 */
            private removePurchaseQuoteItemExtra;
            private deletePurchaseQuoteItemExtra;
            private viewPurchaseQuoteItemExtra;
        }
        /** 视图-采购报价项目-额外 */
        interface IPurchaseQuoteItemExtraView extends ibas.IBOView {
            /** 显示数据 */
            showData(data: bo.PurchaseQuoteItem): void;
            /** 显示额外数据 */
            showExtraDatas(datas: bo.PurchaseQuoteItemExtra[]): void;
            /** 添加采购报价-行额外 事件 */
            addPurchaseQuoteItemExtraEvent: Function;
            /** 移出采购报价-行额外 事件 */
            removePurchaseQuoteItemExtraEvent: Function;
            /** 删除采购报价-行额外 事件 */
            deletePurchaseQuoteItemExtraEvent: Function;
            /** 查看采购报价-行额外 事件 */
            viewPurchaseQuoteItemExtraEvent: Function;
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
        class PurchaseRequestFunc extends ibas.ModuleFunction {
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
        /** 列表应用-采购申请 */
        class PurchaseRequestListApp extends ibas.BOListApplication<IPurchaseRequestListView, bo.PurchaseRequest> {
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
            protected viewData(data: bo.PurchaseRequest): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.PurchaseRequest): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.PurchaseRequest | bo.PurchaseRequest[]): void;
        }
        /** 视图-采购申请 */
        interface IPurchaseRequestListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.PurchaseRequest[]): void;
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
        /** 选择应用-采购申请 */
        class PurchaseRequestChooseApp extends ibas.BOChooseService<IPurchaseRequestChooseView, bo.PurchaseRequest> {
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
        /** 视图-采购申请 */
        interface IPurchaseRequestChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.PurchaseRequest[]): void;
        }
        /** 采购申请选择服务映射 */
        class PurchaseRequestChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.PurchaseRequest>;
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
        /** 查看应用-采购申请 */
        class PurchaseRequestViewApp extends ibas.BOViewService<IPurchaseRequestViewView, bo.PurchaseRequest> {
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
            run(): void;
            run(data: bo.PurchaseRequest): void;
            protected viewData: bo.PurchaseRequest;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-采购申请 */
        interface IPurchaseRequestViewView extends ibas.IBOViewView {
            /** 显示数据 */
            showPurchaseRequest(data: bo.PurchaseRequest): void;
            /** 显示数据-采购申请-行 */
            showPurchaseRequestItems(datas: bo.PurchaseRequestItem[]): void;
        }
        /** 采购申请连接服务映射 */
        class PurchaseRequestLinkServiceMapping extends ibas.BOLinkServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOLinkService;
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
        /** 编辑应用-采购申请 */
        class PurchaseRequestEditApp extends ibas.BOEditApplication<IPurchaseRequestEditView, bo.PurchaseRequest> {
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
            run(): void;
            run(data: bo.PurchaseRequest): void;
            /** 待编辑的数据 */
            protected editData: bo.PurchaseRequest;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
            /** 添加采购申请-行事件 */
            protected addPurchaseRequestItem(): void;
            /** 删除采购申请-行事件 */
            protected removePurchaseRequestItem(items: bo.PurchaseRequestItem[]): void;
            /** 选择价格清单事件 */
            private choosePurchaseRequestPriceList;
            private choosePurchaseRequestItemMaterial;
            private showPurchaseRequestItemExtra;
        }
        /** 视图-采购申请 */
        interface IPurchaseRequestEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showPurchaseRequest(data: bo.PurchaseRequest): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加采购申请-行事件 */
            addPurchaseRequestItemEvent: Function;
            /** 删除采购申请-行事件 */
            removePurchaseRequestItemEvent: Function;
            /** 选择采购申请价格清单信息 */
            choosePurchaseRequestPriceListEvent: Function;
            /** 选择采购申请-行物料主数据 */
            choosePurchaseRequestItemMaterialEvent: Function;
            /** 显示采购申请额外信息事件 */
            showPurchaseRequestItemExtraEvent: Function;
            /** 显示数据-采购申请-行 */
            showPurchaseRequestItems(datas: bo.PurchaseRequestItem[]): void;
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
        /** 列表应用-采购申请项目-额外 */
        class PurchaseRequestItemExtraApp extends ibas.Application<IPurchaseRequestItemExtraView> {
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
            run(data: bo.PurchaseRequestItem, parent?: bo.PurchaseRequest): void;
            private editData;
            private dataParent;
            /** 添加采购申请-行事件 */
            private addPurchaseRequestItemExtra;
            /** 删除采购申请-行事件 */
            private removePurchaseRequestItemExtra;
            private deletePurchaseRequestItemExtra;
            private viewPurchaseRequestItemExtra;
        }
        /** 视图-采购申请项目-额外 */
        interface IPurchaseRequestItemExtraView extends ibas.IBOView {
            /** 显示数据 */
            showData(data: bo.PurchaseRequestItem): void;
            /** 显示额外数据 */
            showExtraDatas(datas: bo.PurchaseRequestItemExtra[]): void;
            /** 添加采购申请-行额外 事件 */
            addPurchaseRequestItemExtraEvent: Function;
            /** 移出采购申请-行额外 事件 */
            removePurchaseRequestItemExtraEvent: Function;
            /** 删除采购申请-行额外 事件 */
            deletePurchaseRequestItemExtraEvent: Function;
            /** 查看采购申请-行额外 事件 */
            viewPurchaseRequestItemExtraEvent: Function;
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
        /** 附件信息-文档附件 */
        const EXTRA_ATTACHMENT: string;
        /** 模块控制台 */
        class Console extends ibas.ModuleConsole {
            /** 构造函数 */
            constructor();
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

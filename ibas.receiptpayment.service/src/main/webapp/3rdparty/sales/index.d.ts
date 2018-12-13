/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
declare namespace sales {
    /** 模块-标识 */
    const CONSOLE_ID: string;
    /** 模块-名称 */
    const CONSOLE_NAME: string;
    /** 模块-版本 */
    const CONSOLE_VERSION: string;
    namespace bo {
        /** 业务仓库名称 */
        const BO_REPOSITORY_SALES: string;
        /** 业务对象编码-产品套装 */
        const BO_CODE_PRODUCTSUIT: string;
        /** 业务对象编码-销售交货 */
        const BO_CODE_SALESDELIVERY: string;
        /** 业务对象编码-销售订单 */
        const BO_CODE_SALESORDER: string;
        /** 业务对象编码-销售退货 */
        const BO_CODE_SALESRETURN: string;
        /** 业务对象编码-销售报价 */
        const BO_CODE_SALESQUOTE: string;
        /** 业务对象编码-送货地址 */
        const BO_CODE_SHIPPINGADDRESS: string;
        /** 业务对象编码-产品规格 */
        const BO_CODE_PRODUCTSPECIFICATION: string;
        /** 业务对象编码-规格模板 */
        const BO_CODE_SPECIFICATION: string;
        /** 产品树类型 */
        enum emProductTreeType {
            /** 捆绑 */
            BUNDLED = 0
        }
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
        enum emSpecificationTarget {
            /**
             * 物料
             */
            MATERIAL = 0,
            /**
             * 物料组
             */
            MATERIAL_GROUP = 1
        }
    }
    namespace app {
        /** 规格服务契约 */
        interface ISpecificationTreeContract extends ibas.IServiceContract {
            /** 目标（物料编码或产品规格） */
            target: string | bo.IProductSpecification;
            /** 备注 */
            remarks?: string;
        }
        /** 规格服务代理 */
        class SpecificationTreeServiceProxy extends ibas.ServiceProxy<ISpecificationTreeContract> {
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
declare namespace sales {
    namespace bo {
        /** 产品规格 */
        interface IProductSpecification extends ibas.IBOSimple, ibas.IBOUserFields {
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
            /** 审批状态 */
            approvalStatus: ibas.emApprovalStatus;
            /** 数据所有者 */
            dataOwner: number;
            /** 团队成员 */
            teamMembers: string;
            /** 数据所属组织 */
            organization: string;
            /** 名称 */
            name: string;
            /** 规格模板 */
            specification: number;
            /** 参考1 */
            reference1: string;
            /** 参考2 */
            reference2: string;
            /** 备注 */
            remarks: string;
            /** 产品规格-项目集合 */
            productSpecificationItems: IProductSpecificationItems;
        }
        /** 产品规格-项目 集合 */
        interface IProductSpecificationItems extends ibas.IBusinessObjects<IProductSpecificationItem> {
            /** 创建并添加子项 */
            create(): IProductSpecificationItem;
        }
        /** 产品规格-项目 */
        interface IProductSpecificationItem extends ibas.IBOSimpleLine {
            /** 对象编号 */
            objectKey: number;
            /** 对象行号 */
            lineId: number;
            /** 对象类型 */
            objectCode: string;
            /** 实例号 */
            logInst: number;
            /** 数据源 */
            dataSource: string;
            /** 创建日期 */
            createDate: Date;
            /** 创建时间 */
            createTime: number;
            /** 更新日期 */
            updateDate: Date;
            /** 更新时间 */
            updateTime: number;
            /** 创建用户 */
            createUserSign: number;
            /** 更新用户 */
            updateUserSign: number;
            /** 创建动作标识 */
            createActionId: string;
            /** 更新动作标识 */
            updateActionId: string;
            /** 组标记 */
            parentSign: string;
            /** 标记 */
            sign: string;
            /** 描述 */
            description: string;
            /** 内容 */
            content: string;
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
declare namespace sales {
    namespace bo {
        /** 产品套装 */
        interface IProductSuit extends ibas.IBOSimple, ibas.IBOUserFields {
            /** 产品编码 */
            product: string;
            /** 产品描述 */
            description: string;
            /** 版本 */
            version: string;
            /** 是否激活 */
            activated: ibas.emYesNo;
            /** 单位数量 */
            unitQuantity: number;
            /** 计量单位 */
            uom: string;
            /** 生效日期 */
            validDate: Date;
            /** 失效日期 */
            invalidDate: Date;
            /** 总计 */
            total: number;
            /** 货币 */
            currency: string;
            /** 备注 */
            remarks: string;
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
            /** 审批状态 */
            approvalStatus: ibas.emApprovalStatus;
            /** 数据所有者 */
            dataOwner: number;
            /** 团队成员 */
            teamMembers: string;
            /** 数据所属组织 */
            organization: string;
            /** 产品套装-项目集合 */
            productSuitItems: IProductSuitItems;
        }
        /** 产品套装-项目 集合 */
        interface IProductSuitItems extends ibas.IBusinessObjects<IProductSuitItem> {
            /** 创建并添加子项 */
            create(): IProductSuitItem;
        }
        /** 产品套装-项目 */
        interface IProductSuitItem extends ibas.IBOSimpleLine, ibas.IBOUserFields {
            /** 对象编号 */
            objectKey: number;
            /** 对象行号 */
            lineId: number;
            /** 对象类型 */
            objectCode: string;
            /** 实例号 */
            logInst: number;
            /** 数据源 */
            dataSource: string;
            /** 创建日期 */
            createDate: Date;
            /** 创建时间 */
            createTime: number;
            /** 更新日期 */
            updateDate: Date;
            /** 更新时间 */
            updateTime: number;
            /** 创建用户 */
            createUserSign: number;
            /** 更新用户 */
            updateUserSign: number;
            /** 创建动作标识 */
            createActionId: string;
            /** 更新动作标识 */
            updateActionId: string;
            /** 组件编码 */
            itemCode: string;
            /** 组件名称 */
            itemDescription: string;
            /** 数量 */
            quantity: number;
            /** 计量单位 */
            uom: string;
            /** 价格 */
            price: number;
            /** 货币 */
            currency: string;
            /** 总计 */
            lineTotal: number;
        }
        interface IProductSuitEx extends IProductSuit {
            extend: materials.bo.IProduct;
            productSuitItems: IProductSuitItemExs;
        }
        interface IProductSuitItemExs extends ibas.IBusinessObjects<IProductSuitItemEx> {
        }
        interface IProductSuitItemEx extends IProductSuitItem {
            extend: materials.bo.IProduct;
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
declare namespace sales {
    namespace bo {
        /** 销售交货 */
        interface ISalesDelivery extends ibas.IBODocument, ibas.IBOUserFields {
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
            /** 客户代码 */
            customerCode: string;
            /** 客户名称 */
            customerName: string;
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
            /** 毛利 */
            grossProfit: number;
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
            /** 销售交货-行集合 */
            salesDeliveryItems: ISalesDeliveryItems;
            /** 送货地址集合 */
            shippingAddresss: IShippingAddresss;
            /** 基于销售订单 */
            baseDocument(document: ISalesOrder): void;
            /** 基于地址 */
            baseAddress(address: businesspartner.bo.IAddress): void;
        }
        /** 销售交货-行 集合 */
        interface ISalesDeliveryItems extends ibas.IBusinessObjects<ISalesDeliveryItem> {
            /** 创建并添加子项 */
            create(): ISalesDeliveryItem;
        }
        /** 销售交货-行 */
        interface ISalesDeliveryItem extends ibas.IBODocumentLine, materials.bo.IMaterialBatchItemParent, materials.bo.IMaterialSerialItemParent, ibas.IBOUserFields {
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
            /** 产品编号 */
            itemCode: string;
            /** 产品/服务描述 */
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
            /** 产品类型 */
            treeType: emProductTreeType;
            /** 基础数量 */
            basisQuantity: number;
            /** 行标志号 */
            lineSign: string;
            /** 父项行标志号 */
            parentLineSign: string;
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
            /** 毛利 */
            grossProfit: number;
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
declare namespace sales {
    namespace bo {
        /** 销售订单 */
        interface ISalesOrder extends ibas.IBODocument, ibas.IBOUserFields {
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
            /** 客户代码 */
            customerCode: string;
            /** 客户名称 */
            customerName: string;
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
            /** 毛利 */
            grossProfit: number;
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
            /** 销售订单-行集合 */
            salesOrderItems: ISalesOrderItems;
            /** 送货地址集合 */
            shippingAddresss: IShippingAddresss;
            /** 基于销售报价 */
            baseDocument(document: ISalesQuote): void;
            /** 基于地址 */
            baseAddress(address: businesspartner.bo.IAddress): void;
        }
        /** 销售订单-行 集合 */
        interface ISalesOrderItems extends ibas.IBusinessObjects<ISalesOrderItem> {
            /** 创建并添加子项 */
            create(): ISalesOrderItem;
        }
        /** 销售订单-行 */
        interface ISalesOrderItem extends ibas.IBODocumentLine, materials.bo.IMaterialBatchItemParent, materials.bo.IMaterialSerialItemParent, ibas.IBOUserFields {
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
            /** 产品编号 */
            itemCode: string;
            /** 产品/服务描述 */
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
            /** 产品类型 */
            treeType: emProductTreeType;
            /** 基础数量 */
            basisQuantity: number;
            /** 行标志号 */
            lineSign: string;
            /** 父项行标志号 */
            parentLineSign: string;
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
            /** 毛利 */
            grossProfit: number;
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
            /** 销售订单-行-额外信息集合 */
            salesOrderItemExtras: ISalesOrderItemExtras;
        }
        /** 销售订单-行-额外信息 集合 */
        interface ISalesOrderItemExtras extends ibas.IBusinessObjects<ISalesOrderItemExtra> {
            /** 创建并添加子项 */
            create(): ISalesOrderItemExtra;
        }
        /** 销售订单-行-额外信息 */
        interface ISalesOrderItemExtra extends ibas.IBODocumentLine {
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
declare namespace sales {
    namespace bo {
        /** 销售退货 */
        interface ISalesReturn extends ibas.IBODocument, ibas.IBOUserFields {
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
            /** 客户代码 */
            customerCode: string;
            /** 客户名称 */
            customerName: string;
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
            /** 毛利 */
            grossProfit: number;
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
            /** 销售退货-行集合 */
            salesReturnItems: ISalesReturnItems;
            /** 送货地址集合 */
            shippingAddresss: IShippingAddresss;
            /** 基于销售订单 */
            baseDocument(document: ISalesOrder): void;
            /** 基于销售收货 */
            baseDocument(document: ISalesDelivery): void;
        }
        /** 销售退货-行 集合 */
        interface ISalesReturnItems extends ibas.IBusinessObjects<ISalesReturnItem> {
            /** 创建并添加子项 */
            create(): ISalesReturnItem;
        }
        /** 销售退货-行 */
        interface ISalesReturnItem extends ibas.IBODocumentLine, materials.bo.IMaterialBatchItemParent, materials.bo.IMaterialSerialItemParent, ibas.IBOUserFields {
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
            /** 产品编号 */
            itemCode: string;
            /** 产品/服务描述 */
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
            /** 产品类型 */
            treeType: emProductTreeType;
            /** 基础数量 */
            basisQuantity: number;
            /** 行标志号 */
            lineSign: string;
            /** 父项行标志号 */
            parentLineSign: string;
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
            /** 毛利 */
            grossProfit: number;
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
declare namespace sales {
    namespace bo {
        /** 销售报价 */
        interface ISalesQuote extends ibas.IBODocument, ibas.IBOUserFields {
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
            /** 客户代码 */
            customerCode: string;
            /** 客户名称 */
            customerName: string;
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
            /** 毛利 */
            grossProfit: number;
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
            /** 销售报价-行集合 */
            salesQuoteItems: ISalesQuoteItems;
        }
        /** 销售报价-行 集合 */
        interface ISalesQuoteItems extends ibas.IBusinessObjects<ISalesQuoteItem> {
            /** 创建并添加子项 */
            create(): ISalesQuoteItem;
        }
        /** 销售报价-行 */
        interface ISalesQuoteItem extends ibas.IBODocumentLine, ibas.IBOUserFields {
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
            /** 产品编号 */
            itemCode: string;
            /** 产品/服务描述 */
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
            /** 产品类型 */
            treeType: emProductTreeType;
            /** 基础数量 */
            basisQuantity: number;
            /** 行标志号 */
            lineSign: string;
            /** 父项行标志号 */
            parentLineSign: string;
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
            /** 毛利 */
            grossProfit: number;
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
            /** 销售报价-行-额外信息集合 */
            salesQuoteItemExtras: ISalesQuoteItemExtras;
        }
        /** 销售报价-行-额外信息 集合 */
        interface ISalesQuoteItemExtras extends ibas.IBusinessObjects<ISalesQuoteItemExtra> {
            /** 创建并添加子项 */
            create(): ISalesQuoteItemExtra;
        }
        /** 销售报价-行-额外信息 */
        interface ISalesQuoteItemExtra extends ibas.IBODocumentLine {
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
declare namespace sales {
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
            /** 基于地址 */
            baseAddress(address: businesspartner.bo.IAddress): void;
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
declare namespace sales {
    namespace bo {
        /** 规格模板 */
        interface ISpecification extends ibas.IBOSimple, ibas.IBOUserFields {
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
            /** 审批状态 */
            approvalStatus: ibas.emApprovalStatus;
            /** 数据所有者 */
            dataOwner: number;
            /** 团队成员 */
            teamMembers: string;
            /** 数据所属组织 */
            organization: string;
            /** 名称 */
            name: string;
            /** 目标类型 */
            targetType: emSpecificationTarget;
            /** 目标 */
            target: string;
            /** 是否激活 */
            activated: ibas.emYesNo;
            /** 备注 */
            remarks: string;
            /** 规格模板-项目集合 */
            specificationItems: ISpecificationItems;
        }
        /** 规格模板-项目 集合 */
        interface ISpecificationItems extends ibas.IBusinessObjects<ISpecificationItem> {
            /** 创建并添加子项 */
            create(): ISpecificationItem;
        }
        /** 规格模板-项目 */
        interface ISpecificationItem extends ibas.IBOSimpleLine {
            /** 对象编号 */
            objectKey: number;
            /** 对象行号 */
            lineId: number;
            /** 对象类型 */
            objectCode: string;
            /** 实例号 */
            logInst: number;
            /** 数据源 */
            dataSource: string;
            /** 创建日期 */
            createDate: Date;
            /** 创建时间 */
            createTime: number;
            /** 更新日期 */
            updateDate: Date;
            /** 更新时间 */
            updateTime: number;
            /** 创建用户 */
            createUserSign: number;
            /** 更新用户 */
            updateUserSign: number;
            /** 创建动作标识 */
            createActionId: string;
            /** 更新动作标识 */
            updateActionId: string;
            /** 组标记 */
            parentSign: string;
            /** 标记 */
            sign: string;
            /** 描述 */
            description: string;
            /** 内容 */
            content: string;
            /** 备注 */
            note: string;
            /** 可编辑 */
            editable: ibas.emYesNo;
            /** 规格模板-项目值集合 */
            specificationItemValues: ISpecificationItemValues;
        }
        /** 规格模板-项目值 集合 */
        interface ISpecificationItemValues extends ibas.IBusinessObjects<ISpecificationItemValue> {
            /** 创建并添加子项 */
            create(): ISpecificationItemValue;
        }
        /** 规格模板-项目值 */
        interface ISpecificationItemValue extends ibas.IBOSimpleLine {
            /** 对象编号 */
            objectKey: number;
            /** 对象行号 */
            lineId: number;
            /** 对象类型 */
            objectCode: string;
            /** 实例号 */
            logInst: number;
            /** 数据源 */
            dataSource: string;
            /** 创建日期 */
            createDate: Date;
            /** 创建时间 */
            createTime: number;
            /** 更新日期 */
            updateDate: Date;
            /** 更新时间 */
            updateTime: number;
            /** 创建用户 */
            createUserSign: number;
            /** 更新用户 */
            updateUserSign: number;
            /** 创建动作标识 */
            createActionId: string;
            /** 更新动作标识 */
            updateActionId: string;
            /** 项目号 */
            itemId: number;
            /** 值 */
            value: string;
            /** 描述 */
            description: string;
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
declare namespace sales {
    namespace bo {
        /** 规格树 */
        interface ISpecificationTree {
            /** 模板 */
            template: number;
            /** 名称 */
            name: string;
            /** 备注 */
            remarks: string;
            /** 规格模板-项目集合 */
            items: ibas.IList<ISpecificationTreeItem>;
        }
        /** 规格模板-项目 */
        interface ISpecificationTreeItem {
            /** 标记 */
            sign: string;
            /** 描述 */
            description: string;
            /** 内容 */
            content: string;
            /** 备注 */
            note: string;
            /** 可编辑 */
            editable: boolean;
            /** 可选值 */
            vaildValues: ibas.IList<ibas.KeyText>;
            /** 规格模板-项目集合 */
            items: ibas.IList<ISpecificationTreeItem>;
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
declare namespace sales {
    namespace bo {
        /** 业务仓库 */
        interface IBORepositorySales extends ibas.IBORepositoryApplication {
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
             * 查询 产品规格
             * @param fetcher 查询者
             */
            fetchProductSpecification(fetcher: ibas.IFetchCaller<bo.IProductSpecification>): void;
            /**
             * 保存 产品规格
             * @param saver 保存者
             */
            saveProductSpecification(saver: ibas.ISaveCaller<bo.IProductSpecification>): void;
            /**
             * 查询 产品套装
             * @param fetcher 查询者
             */
            fetchProductSuit(fetcher: ibas.IFetchCaller<bo.IProductSuit>): void;
            /**
             * 保存 产品套装
             * @param saver 保存者
             */
            saveProductSuit(saver: ibas.ISaveCaller<bo.IProductSuit>): void;
            /**
             * 查询 销售交货
             * @param fetcher 查询者
             */
            fetchSalesDelivery(fetcher: ibas.IFetchCaller<bo.ISalesDelivery>): void;
            /**
             * 保存 销售交货
             * @param saver 保存者
             */
            saveSalesDelivery(saver: ibas.ISaveCaller<bo.ISalesDelivery>): void;
            /**
             * 查询 销售订单
             * @param fetcher 查询者
             */
            fetchSalesOrder(fetcher: ibas.IFetchCaller<bo.ISalesOrder>): void;
            /**
             * 保存 销售订单
             * @param saver 保存者
             */
            saveSalesOrder(saver: ibas.ISaveCaller<bo.ISalesOrder>): void;
            /**
             * 查询 销售退货
             * @param fetcher 查询者
             */
            fetchSalesReturn(fetcher: ibas.IFetchCaller<bo.ISalesReturn>): void;
            /**
             * 保存 销售退货
             * @param saver 保存者
             */
            saveSalesReturn(saver: ibas.ISaveCaller<bo.ISalesReturn>): void;
            /**
             * 查询 销售报价
             * @param fetcher 查询者
             */
            fetchSalesQuote(fetcher: ibas.IFetchCaller<bo.ISalesQuote>): void;
            /**
             * 保存 销售报价
             * @param saver 保存者
             */
            saveSalesQuote(saver: ibas.ISaveCaller<bo.ISalesQuote>): void;
            /**
             * 查询 规格模板
             * @param fetcher 查询者
             */
            fetchSpecification(fetcher: ibas.IFetchCaller<bo.ISpecification>): void;
            /**
             * 保存 规格模板
             * @param saver 保存者
             */
            saveSpecification(saver: ibas.ISaveCaller<bo.ISpecification>): void;
            /**
             * 查询 规格树
             * @param fetcher 查询者
             */
            fetchSpecificationTree(fetcher: ibas.IFetchCaller<bo.ISpecificationTree>): void;
            /**
             * 查询 产品套装并扩展产品数据
             * @param fetcher 查询者
             */
            fetchProductSuitEx(fetcher: ibas.IFetchCaller<bo.IProductSuitEx>): void;
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
declare namespace sales {
    namespace bo {
        /** 产品套装 */
        class ProductSuit extends ibas.BOSimple<ProductSuit> implements IProductSuit {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-产品编码 */
            static PROPERTY_PRODUCT_NAME: string;
            /** 获取-产品编码 */
            /** 设置-产品编码 */
            product: string;
            /** 映射的属性名称-产品描述 */
            static PROPERTY_DESCRIPTION_NAME: string;
            /** 获取-产品描述 */
            /** 设置-产品描述 */
            description: string;
            /** 映射的属性名称-版本 */
            static PROPERTY_VERSION_NAME: string;
            /** 获取-版本 */
            /** 设置-版本 */
            version: string;
            /** 映射的属性名称-是否激活 */
            static PROPERTY_ACTIVATED_NAME: string;
            /** 获取-是否激活 */
            /** 设置-是否激活 */
            activated: ibas.emYesNo;
            /** 映射的属性名称-单位数量 */
            static PROPERTY_UNITQUANTITY_NAME: string;
            /** 获取-单位数量 */
            /** 设置-单位数量 */
            unitQuantity: number;
            /** 映射的属性名称-计量单位 */
            static PROPERTY_UOM_NAME: string;
            /** 获取-计量单位 */
            /** 设置-计量单位 */
            uom: string;
            /** 映射的属性名称-生效日期 */
            static PROPERTY_VALIDDATE_NAME: string;
            /** 获取-生效日期 */
            /** 设置-生效日期 */
            validDate: Date;
            /** 映射的属性名称-失效日期 */
            static PROPERTY_INVALIDDATE_NAME: string;
            /** 获取-失效日期 */
            /** 设置-失效日期 */
            invalidDate: Date;
            /** 映射的属性名称-总计 */
            static PROPERTY_TOTAL_NAME: string;
            /** 获取-总计 */
            /** 设置-总计 */
            total: number;
            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string;
            /** 获取-货币 */
            /** 设置-货币 */
            currency: string;
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            /** 设置-备注 */
            remarks: string;
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
            /** 映射的属性名称-审批状态 */
            static PROPERTY_APPROVALSTATUS_NAME: string;
            /** 获取-审批状态 */
            /** 设置-审批状态 */
            approvalStatus: ibas.emApprovalStatus;
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
            /** 映射的属性名称-产品套装-项目集合 */
            static PROPERTY_PRODUCTSUITITEMS_NAME: string;
            /** 获取-产品套装-项目集合 */
            /** 设置-产品套装-项目集合 */
            productSuitItems: ProductSuitItems;
            /** 初始化数据 */
            protected init(): void;
            protected registerRules(): ibas.IBusinessRule[];
        }
        /** 产品套装-项目 集合 */
        class ProductSuitItems extends ibas.BusinessObjects<ProductSuitItem, ProductSuit> implements IProductSuitItems {
            /** 创建并添加子项 */
            create(): ProductSuitItem;
        }
        /** 产品套装-项目 */
        class ProductSuitItem extends ibas.BOSimpleLine<ProductSuitItem> implements IProductSuitItem {
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-对象编号 */
            static PROPERTY_OBJECTKEY_NAME: string;
            /** 获取-对象编号 */
            /** 设置-对象编号 */
            objectKey: number;
            /** 映射的属性名称-对象行号 */
            static PROPERTY_LINEID_NAME: string;
            /** 获取-对象行号 */
            /** 设置-对象行号 */
            lineId: number;
            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-对象类型 */
            /** 设置-对象类型 */
            objectCode: string;
            /** 映射的属性名称-实例号 */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-实例号 */
            /** 设置-实例号 */
            logInst: number;
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            /** 设置-数据源 */
            dataSource: string;
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
            /** 映射的属性名称-更新日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-更新日期 */
            /** 设置-更新日期 */
            updateDate: Date;
            /** 映射的属性名称-更新时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-更新时间 */
            /** 设置-更新时间 */
            updateTime: number;
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            /** 设置-创建用户 */
            createUserSign: number;
            /** 映射的属性名称-更新用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-更新用户 */
            /** 设置-更新用户 */
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
            /** 映射的属性名称-组件编码 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-组件编码 */
            /** 设置-组件编码 */
            itemCode: string;
            /** 映射的属性名称-组件名称 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            /** 获取-组件名称 */
            /** 设置-组件名称 */
            itemDescription: string;
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
            /** 映射的属性名称-总计 */
            static PROPERTY_LINETOTAL_NAME: string;
            /** 获取-总计 */
            /** 设置-总计 */
            lineTotal: number;
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
declare namespace sales {
    namespace bo {
        /** 销售交货 */
        class SalesDelivery extends ibas.BODocument<SalesDelivery> implements ISalesDelivery, ibas.IConvertedData {
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
            /** 映射的属性名称-客户代码 */
            static PROPERTY_CUSTOMERCODE_NAME: string;
            /** 获取-客户代码 */
            /** 设置-客户代码 */
            customerCode: string;
            /** 映射的属性名称-客户名称 */
            static PROPERTY_CUSTOMERNAME_NAME: string;
            /** 获取-客户名称 */
            /** 设置-客户名称 */
            customerName: string;
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
            /** 映射的属性名称-毛利 */
            static PROPERTY_GROSSPROFIT_NAME: string;
            /** 获取-毛利 */
            /** 设置-毛利 */
            grossProfit: number;
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
            /** 映射的属性名称-销售交货-行集合 */
            static PROPERTY_SALESDELIVERYITEMS_NAME: string;
            /** 获取-销售交货-行集合 */
            /** 设置-销售交货-行集合 */
            salesDeliveryItems: SalesDeliveryItems;
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
            /** 基于销售订单 */
            baseDocument(document: ISalesOrder): void;
            /** 基于地址 */
            baseAddress(address: businesspartner.bo.IAddress): void;
        }
        /** 销售交货-行 集合 */
        class SalesDeliveryItems extends ibas.BusinessObjects<SalesDeliveryItem, SalesDelivery> implements ISalesDeliveryItems {
            /** 创建并添加子项 */
            create(): SalesDeliveryItem;
            /** 移出项目之后 */
            protected afterRemove(item: SalesDeliveryItem): void;
            /** 子项属性改变时 */
            protected onChildPropertyChanged(item: SalesDeliveryItem, name: string): void;
        }
        /** 销售交货-行 */
        class SalesDeliveryItem extends ibas.BODocumentLine<SalesDeliveryItem> implements ISalesDeliveryItem {
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
            /** 映射的属性名称-产品编号 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-产品编号 */
            /** 设置-产品编号 */
            itemCode: string;
            /** 映射的属性名称-产品/服务描述 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            /** 获取-产品/服务描述 */
            /** 设置-产品/服务描述 */
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
            /** 映射的属性名称-产品类型 */
            static PROPERTY_TREETYPE_NAME: string;
            /** 获取-产品类型 */
            /** 设置-产品类型 */
            treeType: emProductTreeType;
            /** 映射的属性名称-基础数量 */
            static PROPERTY_BASISQUANTITY_NAME: string;
            /** 获取-基础数量 */
            /** 设置-基础数量 */
            basisQuantity: number;
            /** 映射的属性名称-行标志号 */
            static PROPERTY_LINESIGN_NAME: string;
            /** 获取-行标志号 */
            /** 设置-行标志号 */
            lineSign: string;
            /** 映射的属性名称-父项行标志号 */
            static PROPERTY_PARENTLINESIGN_NAME: string;
            /** 获取-父项行标志号 */
            /** 设置-父项行标志号 */
            parentLineSign: string;
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
            /** 映射的属性名称-毛利 */
            static PROPERTY_GROSSPROFIT_NAME: string;
            /** 获取-毛利 */
            /** 设置-毛利 */
            grossProfit: number;
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
declare namespace sales {
    namespace bo {
        /** 销售订单 */
        class SalesOrder extends ibas.BODocument<SalesOrder> implements ISalesOrder, ibas.IConvertedData {
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
            /** 映射的属性名称-客户代码 */
            static PROPERTY_CUSTOMERCODE_NAME: string;
            /** 获取-客户代码 */
            /** 设置-客户代码 */
            customerCode: string;
            /** 映射的属性名称-客户名称 */
            static PROPERTY_CUSTOMERNAME_NAME: string;
            /** 获取-客户名称 */
            /** 设置-客户名称 */
            customerName: string;
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
            /** 映射的属性名称-毛利 */
            static PROPERTY_GROSSPROFIT_NAME: string;
            /** 获取-毛利 */
            /** 设置-毛利 */
            grossProfit: number;
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
            /** 映射的属性名称-销售订单-行集合 */
            static PROPERTY_SALESORDERITEMS_NAME: string;
            /** 获取-销售订单-行集合 */
            /** 设置-销售订单-行集合 */
            salesOrderItems: SalesOrderItems;
            /** 映射的属性名称-送货地址集合 */
            static PROPERTY_SHIPPINGADDRESSS_NAME: string;
            /** 获取-送货地址集合 */
            /** 设置-送货地址集合 */
            shippingAddresss: ShippingAddresss;
            /** 基于销售订单 */
            baseDocument(document: ISalesQuote): void;
            /** 基于地址 */
            baseAddress(address: businesspartner.bo.IAddress): void;
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
        /** 销售订单-行 集合 */
        class SalesOrderItems extends ibas.BusinessObjects<SalesOrderItem, SalesOrder> implements ISalesOrderItems {
            /** 创建并添加子项 */
            create(): SalesOrderItem;
            /** 移出项目之后 */
            protected afterRemove(item: SalesOrderItem): void;
            /** 子项属性改变时 */
            protected onChildPropertyChanged(item: SalesOrderItem, name: string): void;
        }
        /** 销售订单-行 */
        class SalesOrderItem extends ibas.BODocumentLine<SalesOrderItem> implements ISalesOrderItem {
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
            /** 映射的属性名称-产品编号 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-产品编号 */
            /** 设置-产品编号 */
            itemCode: string;
            /** 映射的属性名称-产品/服务描述 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            /** 获取-产品/服务描述 */
            /** 设置-产品/服务描述 */
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
            /** 映射的属性名称-产品类型 */
            static PROPERTY_TREETYPE_NAME: string;
            /** 获取-产品类型 */
            /** 设置-产品类型 */
            treeType: emProductTreeType;
            /** 映射的属性名称-基础数量 */
            static PROPERTY_BASISQUANTITY_NAME: string;
            /** 获取-基础数量 */
            /** 设置-基础数量 */
            basisQuantity: number;
            /** 映射的属性名称-行标志号 */
            static PROPERTY_LINESIGN_NAME: string;
            /** 获取-行标志号 */
            /** 设置-行标志号 */
            lineSign: string;
            /** 映射的属性名称-父项行标志号 */
            static PROPERTY_PARENTLINESIGN_NAME: string;
            /** 获取-父项行标志号 */
            /** 设置-父项行标志号 */
            parentLineSign: string;
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
            /** 映射的属性名称-毛利 */
            static PROPERTY_GROSSPROFIT_NAME: string;
            /** 获取-毛利 */
            /** 设置-毛利 */
            grossProfit: number;
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
            /** 映射的属性名称-销售订单-行-额外信息集合 */
            static PROPERTY_SALESORDERITEMEXTRAS_NAME: string;
            /** 获取-销售订单-行-额外信息集合 */
            /** 设置-销售订单-行-额外信息集合 */
            salesOrderItemExtras: SalesOrderItemExtras;
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
        /** 销售订单-行-额外信息 集合 */
        class SalesOrderItemExtras extends ibas.BusinessObjects<SalesOrderItemExtra, SalesOrderItem> implements ISalesOrderItemExtras {
            /** 创建并添加子项 */
            create(): SalesOrderItemExtra;
        }
        /** 销售订单-行-额外信息 */
        class SalesOrderItemExtra extends ibas.BODocumentLine<SalesOrderItemExtra> implements ISalesOrderItemExtra {
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
            /** 映射的属性名称-项目行号 */
            static PROPERTY_ITEMID_NAME: string;
            /** 获取-项目行号 */
            /** 设置-项目行号 */
            itemId: number;
            /** 映射的属性名称-额外类型 */
            static PROPERTY_EXTRATYPE_NAME: string;
            /** 获取-额外类型 */
            /** 设置-额外类型 */
            extraType: string;
            /** 映射的属性名称-额外标识 */
            static PROPERTY_EXTRAKEY_NAME: string;
            /** 获取-额外标识 */
            /** 设置-额外标识 */
            extraKey: number;
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            /** 设置-数量 */
            quantity: number;
            /** 映射的属性名称-备注 */
            static PROPERTY_NOTE_NAME: string;
            /** 获取-备注 */
            /** 设置-备注 */
            note: string;
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
declare namespace sales {
    namespace bo {
        /** 销售订单 */
        class SalesQuote extends ibas.BODocument<SalesQuote> implements ISalesQuote, ibas.IConvertedData {
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
            /** 映射的属性名称-客户代码 */
            static PROPERTY_CUSTOMERCODE_NAME: string;
            /** 获取-客户代码 */
            /** 设置-客户代码 */
            customerCode: string;
            /** 映射的属性名称-客户名称 */
            static PROPERTY_CUSTOMERNAME_NAME: string;
            /** 获取-客户名称 */
            /** 设置-客户名称 */
            customerName: string;
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
            /** 映射的属性名称-毛利 */
            static PROPERTY_GROSSPROFIT_NAME: string;
            /** 获取-毛利 */
            /** 设置-毛利 */
            grossProfit: number;
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
            /** 映射的属性名称-销售订单-行集合 */
            static PROPERTY_SALESQUOTEITEMS_NAME: string;
            /** 获取-销售订单-行集合 */
            /** 设置-销售订单-行集合 */
            salesQuoteItems: SalesQuoteItems;
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
        /** 销售订单-行 集合 */
        class SalesQuoteItems extends ibas.BusinessObjects<SalesQuoteItem, SalesQuote> implements ISalesQuoteItems {
            /** 创建并添加子项 */
            create(): SalesQuoteItem;
            /** 移出项目之后 */
            protected afterRemove(item: SalesQuoteItem): void;
            /** 子项属性改变时 */
            protected onChildPropertyChanged(item: SalesQuoteItem, name: string): void;
        }
        /** 销售订单-行 */
        class SalesQuoteItem extends ibas.BODocumentLine<SalesQuoteItem> implements ISalesQuoteItem {
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
            /** 映射的属性名称-产品编号 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-产品编号 */
            /** 设置-产品编号 */
            itemCode: string;
            /** 映射的属性名称-产品/服务描述 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            /** 获取-产品/服务描述 */
            /** 设置-产品/服务描述 */
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
            /** 映射的属性名称-产品类型 */
            static PROPERTY_TREETYPE_NAME: string;
            /** 获取-产品类型 */
            /** 设置-产品类型 */
            treeType: emProductTreeType;
            /** 映射的属性名称-基础数量 */
            static PROPERTY_BASISQUANTITY_NAME: string;
            /** 获取-基础数量 */
            /** 设置-基础数量 */
            basisQuantity: number;
            /** 映射的属性名称-行标志号 */
            static PROPERTY_LINESIGN_NAME: string;
            /** 获取-行标志号 */
            /** 设置-行标志号 */
            lineSign: string;
            /** 映射的属性名称-父项行标志号 */
            static PROPERTY_PARENTLINESIGN_NAME: string;
            /** 获取-父项行标志号 */
            /** 设置-父项行标志号 */
            parentLineSign: string;
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
            /** 映射的属性名称-毛利 */
            static PROPERTY_GROSSPROFIT_NAME: string;
            /** 获取-毛利 */
            /** 设置-毛利 */
            grossProfit: number;
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
            /** 映射的属性名称-销售报价-行-额外信息集合 */
            static PROPERTY_SALESQUOTEITEMEXTRAS_NAME: string;
            /** 获取-销售报价-行-额外信息集合 */
            /** 设置-销售报价-行-额外信息集合 */
            salesQuoteItemExtras: SalesQuoteItemExtras;
            /** 初始化数据 */
            protected init(): void;
            protected registerRules(): ibas.IBusinessRule[];
        }
        /** 销售报价-行-额外信息 集合 */
        class SalesQuoteItemExtras extends ibas.BusinessObjects<SalesQuoteItemExtra, SalesQuoteItem> implements ISalesQuoteItemExtras {
            /** 创建并添加子项 */
            create(): SalesQuoteItemExtra;
        }
        /** 销售报价-行-额外信息 */
        class SalesQuoteItemExtra extends ibas.BODocumentLine<SalesQuoteItemExtra> implements ISalesQuoteItemExtra {
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
            /** 映射的属性名称-项目行号 */
            static PROPERTY_ITEMID_NAME: string;
            /** 获取-项目行号 */
            /** 设置-项目行号 */
            itemId: number;
            /** 映射的属性名称-额外类型 */
            static PROPERTY_EXTRATYPE_NAME: string;
            /** 获取-额外类型 */
            /** 设置-额外类型 */
            extraType: string;
            /** 映射的属性名称-额外标识 */
            static PROPERTY_EXTRAKEY_NAME: string;
            /** 获取-额外标识 */
            /** 设置-额外标识 */
            extraKey: number;
            /** 映射的属性名称-数量 */
            static PROPERTY_QUANTITY_NAME: string;
            /** 获取-数量 */
            /** 设置-数量 */
            quantity: number;
            /** 映射的属性名称-备注 */
            static PROPERTY_NOTE_NAME: string;
            /** 获取-备注 */
            /** 设置-备注 */
            note: string;
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
declare namespace sales {
    namespace bo {
        /** 销售退货 */
        class SalesReturn extends ibas.BODocument<SalesReturn> implements ISalesReturn, ibas.IConvertedData {
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
            static PROPERTY_RETURNDATE_NAME: string;
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
            /** 映射的属性名称-客户代码 */
            static PROPERTY_CUSTOMERCODE_NAME: string;
            /** 获取-客户代码 */
            /** 设置-客户代码 */
            customerCode: string;
            /** 映射的属性名称-客户名称 */
            static PROPERTY_CUSTOMERNAME_NAME: string;
            /** 获取-客户名称 */
            /** 设置-客户名称 */
            customerName: string;
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
            /** 映射的属性名称-毛利 */
            static PROPERTY_GROSSPROFIT_NAME: string;
            /** 获取-毛利 */
            /** 设置-毛利 */
            grossProfit: number;
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
            /** 映射的属性名称-销售退货-行集合 */
            static PROPERTY_SALESRETURNITEMS_NAME: string;
            /** 获取-销售退货-行集合 */
            /** 设置-销售退货-行集合 */
            salesReturnItems: SalesReturnItems;
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
            /** 基于销售订单 */
            baseDocument(document: ISalesOrder): void;
            /** 基于销售收货 */
            baseDocument(document: ISalesDelivery): void;
        }
        /** 销售退货-行 集合 */
        class SalesReturnItems extends ibas.BusinessObjects<SalesReturnItem, SalesReturn> implements ISalesReturnItems {
            /** 创建并添加子项 */
            create(): SalesReturnItem;
            /** 移出项目之后 */
            protected afterRemove(item: SalesReturnItem): void;
            /** 子项属性改变时 */
            protected onChildPropertyChanged(item: SalesReturnItem, name: string): void;
        }
        /** 销售退货-行 */
        class SalesReturnItem extends ibas.BODocumentLine<SalesReturnItem> implements ISalesReturnItem {
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
            /** 映射的属性名称-产品编号 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-产品编号 */
            /** 设置-产品编号 */
            itemCode: string;
            /** 映射的属性名称-产品/服务描述 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            /** 获取-产品/服务描述 */
            /** 设置-产品/服务描述 */
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
            static PROPERTY_RETURNDATE_NAME: string;
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
            /** 映射的属性名称-产品类型 */
            static PROPERTY_TREETYPE_NAME: string;
            /** 获取-产品类型 */
            /** 设置-产品类型 */
            treeType: emProductTreeType;
            /** 映射的属性名称-基础数量 */
            static PROPERTY_BASISQUANTITY_NAME: string;
            /** 获取-基础数量 */
            /** 设置-基础数量 */
            basisQuantity: number;
            /** 映射的属性名称-行标志号 */
            static PROPERTY_LINESIGN_NAME: string;
            /** 获取-行标志号 */
            /** 设置-行标志号 */
            lineSign: string;
            /** 映射的属性名称-父项行标志号 */
            static PROPERTY_PARENTLINESIGN_NAME: string;
            /** 获取-父项行标志号 */
            /** 设置-父项行标志号 */
            parentLineSign: string;
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
            /** 映射的属性名称-毛利 */
            static PROPERTY_GROSSPROFIT_NAME: string;
            /** 获取-毛利 */
            /** 设置-毛利 */
            grossProfit: number;
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
declare namespace sales {
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
            /** 基于地址 */
            baseAddress(address: businesspartner.bo.IAddress): void;
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
declare namespace sales {
    namespace bo {
        /** 产品规格 */
        class ProductSpecification extends ibas.BOSimple<ProductSpecification> implements IProductSpecification {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
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
            /** 映射的属性名称-审批状态 */
            static PROPERTY_APPROVALSTATUS_NAME: string;
            /** 获取-审批状态 */
            /** 设置-审批状态 */
            approvalStatus: ibas.emApprovalStatus;
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
            /** 映射的属性名称-名称 */
            static PROPERTY_NAME_NAME: string;
            /** 获取-名称 */
            /** 设置-名称 */
            name: string;
            /** 映射的属性名称-规格模板 */
            static PROPERTY_SPECIFICATION_NAME: string;
            /** 获取-规格模板 */
            /** 设置-规格模板 */
            specification: number;
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
            /** 映射的属性名称-产品规格-项目集合 */
            static PROPERTY_PRODUCTSPECIFICATIONITEMS_NAME: string;
            /** 获取-产品规格-项目集合 */
            /** 设置-产品规格-项目集合 */
            productSpecificationItems: ProductSpecificationItems;
            /** 初始化数据 */
            protected init(): void;
        }
        /** 产品规格-项目 集合 */
        class ProductSpecificationItems extends ibas.BusinessObjects<ProductSpecificationItem, ProductSpecification> implements IProductSpecificationItems {
            /** 创建并添加子项 */
            create(): ProductSpecificationItem;
        }
        /** 产品规格-项目 */
        class ProductSpecificationItem extends ibas.BOSimpleLine<ProductSpecificationItem> implements IProductSpecificationItem {
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-对象编号 */
            static PROPERTY_OBJECTKEY_NAME: string;
            /** 获取-对象编号 */
            /** 设置-对象编号 */
            objectKey: number;
            /** 映射的属性名称-对象行号 */
            static PROPERTY_LINEID_NAME: string;
            /** 获取-对象行号 */
            /** 设置-对象行号 */
            lineId: number;
            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-对象类型 */
            /** 设置-对象类型 */
            objectCode: string;
            /** 映射的属性名称-实例号 */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-实例号 */
            /** 设置-实例号 */
            logInst: number;
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            /** 设置-数据源 */
            dataSource: string;
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
            /** 映射的属性名称-更新日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-更新日期 */
            /** 设置-更新日期 */
            updateDate: Date;
            /** 映射的属性名称-更新时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-更新时间 */
            /** 设置-更新时间 */
            updateTime: number;
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            /** 设置-创建用户 */
            createUserSign: number;
            /** 映射的属性名称-更新用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-更新用户 */
            /** 设置-更新用户 */
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
            /** 映射的属性名称-组标记 */
            static PROPERTY_PARENTSIGN_NAME: string;
            /** 获取-组标记 */
            /** 设置-组标记 */
            parentSign: string;
            /** 映射的属性名称-标记 */
            static PROPERTY_SIGN_NAME: string;
            /** 获取-标记 */
            /** 设置-标记 */
            sign: string;
            /** 映射的属性名称-描述 */
            static PROPERTY_DESCRIPTION_NAME: string;
            /** 获取-描述 */
            /** 设置-描述 */
            description: string;
            /** 映射的属性名称-内容 */
            static PROPERTY_CONTENT_NAME: string;
            /** 获取-内容 */
            /** 设置-内容 */
            content: string;
            /** 映射的属性名称-备注 */
            static PROPERTY_NOTE_NAME: string;
            /** 获取-备注 */
            /** 设置-备注 */
            note: string;
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
declare namespace sales {
    namespace bo {
        /** 规格模板 */
        class Specification extends ibas.BOSimple<Specification> implements ISpecification {
            /** 业务对象编码 */
            static BUSINESS_OBJECT_CODE: string;
            /** 构造函数 */
            constructor();
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
            /** 映射的属性名称-审批状态 */
            static PROPERTY_APPROVALSTATUS_NAME: string;
            /** 获取-审批状态 */
            /** 设置-审批状态 */
            approvalStatus: ibas.emApprovalStatus;
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
            /** 映射的属性名称-名称 */
            static PROPERTY_NAME_NAME: string;
            /** 获取-名称 */
            /** 设置-名称 */
            name: string;
            /** 映射的属性名称-目标类型 */
            static PROPERTY_TARGETTYPE_NAME: string;
            /** 获取-目标类型 */
            /** 设置-目标类型 */
            targetType: emSpecificationTarget;
            /** 映射的属性名称-目标 */
            static PROPERTY_TARGET_NAME: string;
            /** 获取-目标 */
            /** 设置-目标 */
            target: string;
            /** 映射的属性名称-是否激活 */
            static PROPERTY_ACTIVATED_NAME: string;
            /** 获取-是否激活 */
            /** 设置-是否激活 */
            activated: ibas.emYesNo;
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            /** 设置-备注 */
            remarks: string;
            /** 映射的属性名称-规格模板-项目集合 */
            static PROPERTY_SPECIFICATIONITEMS_NAME: string;
            /** 获取-规格模板-项目集合 */
            /** 设置-规格模板-项目集合 */
            specificationItems: SpecificationItems;
            /** 初始化数据 */
            protected init(): void;
        }
        /** 规格模板-项目 集合 */
        class SpecificationItems extends ibas.BusinessObjects<SpecificationItem, Specification> implements ISpecificationItems {
            /** 创建并添加子项 */
            create(): SpecificationItem;
        }
        /** 规格模板-项目 */
        class SpecificationItem extends ibas.BOSimpleLine<SpecificationItem> implements ISpecificationItem {
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-对象编号 */
            static PROPERTY_OBJECTKEY_NAME: string;
            /** 获取-对象编号 */
            /** 设置-对象编号 */
            objectKey: number;
            /** 映射的属性名称-对象行号 */
            static PROPERTY_LINEID_NAME: string;
            /** 获取-对象行号 */
            /** 设置-对象行号 */
            lineId: number;
            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-对象类型 */
            /** 设置-对象类型 */
            objectCode: string;
            /** 映射的属性名称-实例号 */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-实例号 */
            /** 设置-实例号 */
            logInst: number;
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            /** 设置-数据源 */
            dataSource: string;
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
            /** 映射的属性名称-更新日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-更新日期 */
            /** 设置-更新日期 */
            updateDate: Date;
            /** 映射的属性名称-更新时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-更新时间 */
            /** 设置-更新时间 */
            updateTime: number;
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            /** 设置-创建用户 */
            createUserSign: number;
            /** 映射的属性名称-更新用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-更新用户 */
            /** 设置-更新用户 */
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
            /** 映射的属性名称-组标记 */
            static PROPERTY_PARENTSIGN_NAME: string;
            /** 获取-组标记 */
            /** 设置-组标记 */
            parentSign: string;
            /** 映射的属性名称-标记 */
            static PROPERTY_SIGN_NAME: string;
            /** 获取-标记 */
            /** 设置-标记 */
            sign: string;
            /** 映射的属性名称-描述 */
            static PROPERTY_DESCRIPTION_NAME: string;
            /** 获取-描述 */
            /** 设置-描述 */
            description: string;
            /** 映射的属性名称-内容 */
            static PROPERTY_CONTENT_NAME: string;
            /** 获取-内容 */
            /** 设置-内容 */
            content: string;
            /** 映射的属性名称-备注 */
            static PROPERTY_NOTE_NAME: string;
            /** 获取-备注 */
            /** 设置-备注 */
            note: string;
            /** 映射的属性名称-可编辑 */
            static PROPERTY_EDITABLE_NAME: string;
            /** 获取-可编辑 */
            /** 设置-可编辑 */
            editable: ibas.emYesNo;
            /** 映射的属性名称-规格模板-项目值集合 */
            static PROPERTY_SPECIFICATIONITEMVALUES_NAME: string;
            /** 获取-规格模板-项目值集合 */
            /** 设置-规格模板-项目值集合 */
            specificationItemValues: SpecificationItemValues;
            /** 初始化数据 */
            protected init(): void;
        }
        /** 规格模板-项目值 集合 */
        class SpecificationItemValues extends ibas.BusinessObjects<SpecificationItemValue, SpecificationItem> implements ISpecificationItemValues {
            /** 创建并添加子项 */
            create(): SpecificationItemValue;
        }
        /** 规格模板-项目值 */
        class SpecificationItemValue extends ibas.BOSimpleLine<SpecificationItemValue> implements ISpecificationItemValue {
            /** 构造函数 */
            constructor();
            /** 映射的属性名称-对象编号 */
            static PROPERTY_OBJECTKEY_NAME: string;
            /** 获取-对象编号 */
            /** 设置-对象编号 */
            objectKey: number;
            /** 映射的属性名称-对象行号 */
            static PROPERTY_LINEID_NAME: string;
            /** 获取-对象行号 */
            /** 设置-对象行号 */
            lineId: number;
            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-对象类型 */
            /** 设置-对象类型 */
            objectCode: string;
            /** 映射的属性名称-实例号 */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-实例号 */
            /** 设置-实例号 */
            logInst: number;
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            /** 设置-数据源 */
            dataSource: string;
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
            /** 映射的属性名称-更新日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-更新日期 */
            /** 设置-更新日期 */
            updateDate: Date;
            /** 映射的属性名称-更新时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-更新时间 */
            /** 设置-更新时间 */
            updateTime: number;
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            /** 设置-创建用户 */
            createUserSign: number;
            /** 映射的属性名称-更新用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-更新用户 */
            /** 设置-更新用户 */
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
            /** 映射的属性名称-项目号 */
            static PROPERTY_ITEMID_NAME: string;
            /** 获取-项目号 */
            /** 设置-项目号 */
            itemId: number;
            /** 映射的属性名称-值 */
            static PROPERTY_VALUE_NAME: string;
            /** 获取-值 */
            /** 设置-值 */
            value: string;
            /** 映射的属性名称-描述 */
            static PROPERTY_DESCRIPTION_NAME: string;
            /** 获取-描述 */
            /** 设置-描述 */
            description: string;
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
declare namespace sales {
    namespace bo {
        /** 规格树 */
        class SpecificationTree implements ISpecificationTree {
            constructor();
            /** 模板 */
            template: number;
            /** 名称 */
            name: string;
            /** 备注 */
            remarks: string;
            /** 规格模板-项目集合 */
            items: ibas.IList<ISpecificationTreeItem>;
        }
        /** 规格模板-项目 */
        class SpecificationTreeItem implements ISpecificationTreeItem {
            constructor();
            /** 标记 */
            sign: string;
            /** 描述 */
            description: string;
            /** 内容 */
            content: string;
            /** 备注 */
            note: string;
            /** 可编辑 */
            editable: boolean;
            /** 可选值 */
            vaildValues: ibas.IList<ibas.KeyText>;
            /** 规格模板-项目集合 */
            items: ibas.IList<ISpecificationTreeItem>;
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
declare namespace sales {
    namespace bo {
        /** 数据转换者 */
        class DataConverter extends ibas.DataConverter4j {
            /** 创建业务对象转换者 */
            protected createConverter(): ibas.BOConverter;
            /**
             * 解析业务对象数据
             * @param data 目标类型
             * @param sign 特殊标记
             * @returns 本地类型
             */
            parsing(data: any, sign: string): any;
        }
        /** 模块业务对象工厂 */
        const boFactory: ibas.BOFactory;
    }
    namespace bo4j {
        /** 操作消息 */
        interface IDataDeclaration {
            /** 数据类型 */
            type: string;
        }
        /** 规格树 */
        interface ISpecificationTree extends IDataDeclaration {
            /** 模板 */
            Template: number;
            /** 名称 */
            Name: string;
            /** 备注 */
            Remarks: string;
            /** 规格模板-项目集合 */
            Items: ISpecificationTreeItem[];
        }
        /** 规格模板-项目 */
        interface ISpecificationTreeItem extends IDataDeclaration {
            /** 标记 */
            Sign: string;
            /** 描述 */
            Description: string;
            /** 内容 */
            Content: string;
            /** 备注 */
            Note: string;
            /** 可编辑 */
            Editable: boolean;
            /** 可选值 */
            VaildValues: ibas.KeyText[];
            /** 规格模板-项目集合 */
            Items: ISpecificationTreeItem[];
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
declare namespace sales {
    namespace bo {
        /** 业务对象仓库 */
        class BORepositorySales extends ibas.BORepositoryApplication implements IBORepositorySales {
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
             * 查询 产品规格
             * @param fetcher 查询者
             */
            fetchProductSpecification(fetcher: ibas.IFetchCaller<bo.ProductSpecification>): void;
            /**
             * 保存 产品规格
             * @param saver 保存者
             */
            saveProductSpecification(saver: ibas.ISaveCaller<bo.ProductSpecification>): void;
            /**
             * 查询 产品套装
             * @param fetcher 查询者
             */
            fetchProductSuit(fetcher: ibas.IFetchCaller<bo.ProductSuit>): void;
            /**
             * 保存 产品套装
             * @param saver 保存者
             */
            saveProductSuit(saver: ibas.ISaveCaller<bo.ProductSuit>): void;
            /**
             * 查询 销售交货
             * @param fetcher 查询者
             */
            fetchSalesDelivery(fetcher: ibas.IFetchCaller<bo.SalesDelivery>): void;
            /**
             * 保存 销售交货
             * @param saver 保存者
             */
            saveSalesDelivery(saver: ibas.ISaveCaller<bo.SalesDelivery>): void;
            /**
             * 查询 销售订单
             * @param fetcher 查询者
             */
            fetchSalesOrder(fetcher: ibas.IFetchCaller<bo.SalesOrder>): void;
            /**
             * 保存 销售订单
             * @param saver 保存者
             */
            saveSalesOrder(saver: ibas.ISaveCaller<bo.SalesOrder>): void;
            /**
             * 查询 销售退货
             * @param fetcher 查询者
             */
            fetchSalesReturn(fetcher: ibas.IFetchCaller<bo.SalesReturn>): void;
            /**
             * 保存 销售退货
             * @param saver 保存者
             */
            saveSalesReturn(saver: ibas.ISaveCaller<bo.SalesReturn>): void;
            /**
             * 查询 销售报价
             * @param fetcher 查询者
             */
            fetchSalesQuote(fetcher: ibas.IFetchCaller<bo.SalesQuote>): void;
            /**
             * 保存 销售报价
             * @param saver 保存者
             */
            saveSalesQuote(saver: ibas.ISaveCaller<bo.SalesQuote>): void;
            /**
             * 查询 规格模板
             * @param fetcher 查询者
             */
            fetchSpecification(fetcher: ibas.IFetchCaller<bo.Specification>): void;
            /**
             * 保存 规格模板
             * @param saver 保存者
             */
            saveSpecification(saver: ibas.ISaveCaller<bo.Specification>): void;
            /**
             * 查询 规格树
             * @param fetcher 查询者
             */
            fetchSpecificationTree(fetcher: ibas.IFetchCaller<bo.SpecificationTree>): void;
            /**
             * 查询 产品套装并扩展产品数据
             * @param fetcher 查询者
             */
            fetchProductSuitEx(fetcher: ibas.IFetchCaller<bo.IProductSuitEx>): void;
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
declare namespace sales {
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
declare namespace sales {
    namespace app {
        /** 选择应用-产品套装 */
        class ProductSuitChooseApp extends ibas.BOChooseService<IProductSuitChooseView, bo.ProductSuit> {
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
        /** 视图-产品套装 */
        interface IProductSuitChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.ProductSuit[]): void;
        }
        /** 产品套装选择服务映射 */
        class ProductSuitChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.ProductSuit>>;
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
declare namespace sales {
    namespace app {
        /** 编辑应用-产品套装 */
        class ProductSuitEditApp extends ibas.BOEditApplication<IProductSuitEditView, bo.ProductSuit> {
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
            run(data: bo.ProductSuit): void;
            /** 待编辑的数据 */
            protected editData: bo.ProductSuit;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
            /** 添加产品套装-项目事件 */
            private addProductSuitItem;
            /** 删除产品套装-项目事件 */
            private removeProductSuitItem;
            private chooseProductSuitItemMaterial;
            private chooseProductSuitMaterial;
        }
        /** 视图-产品套装 */
        interface IProductSuitEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showProductSuit(data: bo.ProductSuit): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加产品套装-项目事件 */
            addProductSuitItemEvent: Function;
            /** 删除产品套装-项目事件 */
            removeProductSuitItemEvent: Function;
            /** 显示数据 */
            showProductSuitItems(datas: bo.ProductSuitItem[]): void;
            /** 选择物料主数据事件 */
            chooseProductSuitMaterialEvent: Function;
            /** 选择物料主数据事件 */
            chooseProductSuitItemMaterialEvent: Function;
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
declare namespace sales {
    namespace app {
        class ProductSuitFunc extends ibas.ModuleFunction {
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
declare namespace sales {
    namespace app {
        /** 列表应用-产品套装 */
        class ProductSuitListApp extends ibas.BOListApplication<IProductSuitListView, bo.ProductSuit> {
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
            protected viewData(data: bo.ProductSuit): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.ProductSuit): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.ProductSuit | bo.ProductSuit[]): void;
        }
        /** 视图-产品套装 */
        interface IProductSuitListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.ProductSuit[]): void;
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
declare namespace sales {
    namespace app {
        /** 查看应用-产品套装 */
        class ProductSuitViewApp extends ibas.BOViewService<IProductSuitViewView, bo.ProductSuit> {
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
            run(data: bo.ProductSuit): void;
            protected viewData: bo.ProductSuit;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-产品套装 */
        interface IProductSuitViewView extends ibas.IBOViewView {
        }
        /** 产品套装连接服务映射 */
        class ProductSuitLinkServiceMapping extends ibas.BOLinkServiceMapping {
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
declare namespace sales {
    namespace app {
        /** 选择应用-销售交货 */
        class SalesDeliveryChooseApp extends ibas.BOChooseService<ISalesDeliveryChooseView, bo.SalesDelivery> {
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
        /** 视图-销售交货 */
        interface ISalesDeliveryChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.SalesDelivery[]): void;
        }
        /** 销售交货选择服务映射 */
        class SalesDeliveryChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.SalesDelivery>>;
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
declare namespace sales {
    namespace app {
        /** 编辑应用-销售交货 */
        class SalesDeliveryEditApp extends ibas.BOEditApplication<ISalesDeliveryEditView, bo.SalesDelivery> {
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
            run(data: bo.SalesDelivery): void;
            /** 待编辑的数据 */
            protected editData: bo.SalesDelivery;
            protected lineEditData: bo.SalesDeliveryItem;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
            /** 选择销售交货客户事件 */
            private chooseSalesDeliveryCustomer;
            /** 选择销售交货价格清单事件 */
            private chooseSalesDeliveryPriceList;
            /** 选择销售交货行物料事件 */
            private chooseSalesDeliveryItemMaterial;
            /** 选择销售交货行仓库事件 */
            private chooseSalesDeliveryItemWarehouse;
            /** 添加销售交货-行事件 */
            private addSalesDeliveryItem;
            /** 删除销售交货-行事件 */
            private removeSalesDeliveryItem;
            /** 选择销售交货行批次事件 */
            private chooseSalesDeliveryLineMaterialBatch;
            /** 选择销售交货序列事件 */
            private chooseSalesDeliveryLineMaterialSerial;
            /** 选择销售收货-销售订单事件 */
            private chooseSalesDeliverySalesOrder;
            private receiptSalesDelivery;
            private editShippingAddresses;
        }
        /** 视图-销售交货 */
        interface ISalesDeliveryEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showSalesDelivery(data: bo.SalesDelivery): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加销售交货-行事件 */
            addSalesDeliveryItemEvent: Function;
            /** 删除销售交货-行事件 */
            removeSalesDeliveryItemEvent: Function;
            /** 显示数据 */
            showSalesDeliveryItems(datas: bo.SalesDeliveryItem[]): void;
            /** 选择销售交货客户事件 */
            chooseSalesDeliveryCustomerEvent: Function;
            /** 选择销售交货价格清单事件 */
            chooseSalesDeliveryPriceListEvent: Function;
            /** 选择销售交货物料事件 */
            chooseSalesDeliveryItemMaterialEvent: Function;
            /** 选择销售交货仓库事件 */
            chooseSalesDeliveryItemWarehouseEvent: Function;
            /** 选择销售交货单行物料批次事件 */
            chooseSalesDeliveryItemMaterialBatchEvent: Function;
            /** 选择销售交货行物料序列事件 */
            chooseSalesDeliveryItemMaterialSerialEvent: Function;
            /** 选择销售交货-销售订单事件 */
            chooseSalesDeliverySalesOrderEvent: Function;
            /** 销售交货收款事件 */
            receiptSalesDeliveryEvent: Function;
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
declare namespace sales {
    namespace app {
        class SalesDeliveryFunc extends ibas.ModuleFunction {
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
declare namespace sales {
    namespace app {
        /** 列表应用-销售交货 */
        class SalesDeliveryListApp extends ibas.BOListApplication<ISalesDeliveryListView, bo.SalesDelivery> {
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
            protected viewData(data: bo.SalesDelivery): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.SalesDelivery): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.SalesDelivery | bo.SalesDelivery[]): void;
        }
        /** 视图-销售交货 */
        interface ISalesDeliveryListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.SalesDelivery[]): void;
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
declare namespace sales {
    namespace app {
        /** 查看应用-销售交货 */
        class SalesDeliveryViewApp extends ibas.BOViewService<ISalesDeliveryViewView, bo.SalesDelivery> {
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
            run(data: bo.SalesDelivery): void;
            protected viewData: bo.SalesDelivery;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-销售交货 */
        interface ISalesDeliveryViewView extends ibas.IBOViewView {
            showSalesDelivery(viewData: bo.SalesDelivery): void;
            showSalesDeliveryItems(salesDeliveryItem: bo.SalesDeliveryItem[]): void;
        }
        /** 销售交货连接服务映射 */
        class SalesDeliveryLinkServiceMapping extends ibas.BOLinkServiceMapping {
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
declare namespace sales {
    namespace app {
        /** 选择应用-销售订单 */
        class SalesOrderChooseApp extends ibas.BOChooseService<ISalesOrderChooseView, bo.SalesOrder> {
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
        /** 视图-销售订单 */
        interface ISalesOrderChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.SalesOrder[]): void;
        }
        /** 销售订单选择服务映射 */
        class SalesOrderChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.SalesOrder>>;
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
declare namespace sales {
    namespace app {
        /** 编辑应用-销售订单 */
        class SalesOrderEditApp extends ibas.BOEditApplication<ISalesOrderEditView, bo.SalesOrder> {
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
            run(data: bo.SalesOrder): void;
            /** 待编辑的数据 */
            protected editData: bo.SalesOrder;
            protected lineEditData: bo.SalesOrderItem;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
            /** 选择销售订单客户事件 */
            private chooseSalesOrderCustomer;
            /** 选择销售订单价格清单事件 */
            private chooseSalesOrderPriceList;
            /** 选择销售订单物料事件 */
            private chooseSalesOrderItemMaterial;
            /** 添加销售订单-行事件 */
            private addSalesOrderItem;
            /** 删除销售订单-行事件 */
            private removeSalesOrderItem;
            /** 选择销售交货行仓库事件 */
            private chooseSalesOrderItemWarehouse;
            /** 选择销售交货行批次事件 */
            private chooseSalesOrderItemMaterialBatch;
            /** 选择销售交货序列事件 */
            private chooseSalesOrderItemMaterialSerial;
            /** 选择销售订单-销售报价事件 */
            private chooseSalesOrderSalesQuote;
            private receiptSalesOrder;
            private editShippingAddresses;
            private showSaleOrderItemExtra;
        }
        /** 视图-销售订单 */
        interface ISalesOrderEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showSalesOrder(data: bo.SalesOrder): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加销售订单-行事件 */
            addSalesOrderItemEvent: Function;
            /** 删除销售订单-行事件 */
            removeSalesOrderItemEvent: Function;
            /** 显示数据 */
            showSalesOrderItems(datas: bo.SalesOrderItem[]): void;
            /** 选择销售订单客户事件 */
            chooseSalesOrderCustomerEvent: Function;
            /** 选择销售订单价格清单事件 */
            chooseSalesOrderPriceListEvent: Function;
            /** 选择销售订单行物料事件 */
            chooseSalesOrderItemMaterialEvent: Function;
            /** 选择销售订单仓库事件 */
            chooseSalesOrderItemWarehouseEvent: Function;
            /** 选择销售订单行物料序列事件 */
            chooseSalesOrderItemMaterialSerialEvent: Function;
            /** 选择销售订单行物料批次事件 */
            chooseSalesOrderItemMaterialBatchEvent: Function;
            /** 显示销售订单行额外信息事件 */
            showSalesOrderItemExtraEvent: Function;
            /** 选择销售订单-销售报价事件 */
            chooseSalesOrderSalesQuoteEvent: Function;
            /** 销售订单收款事件 */
            receiptSalesOrderEvent: Function;
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
declare namespace sales {
    namespace app {
        class SalesOrderFunc extends ibas.ModuleFunction {
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
declare namespace sales {
    namespace app {
        /** 列表应用-销售订单 */
        class SalesOrderListApp extends ibas.BOListApplication<ISalesOrderListView, bo.SalesOrder> {
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
            protected viewData(data: bo.SalesOrder): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.SalesOrder): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.SalesOrder | bo.SalesOrder[]): void;
        }
        /** 视图-销售订单 */
        interface ISalesOrderListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.SalesOrder[]): void;
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
declare namespace sales {
    namespace app {
        /** 查看应用-销售订单 */
        class SalesOrderViewApp extends ibas.BOViewService<ISalesOrderViewView, bo.SalesOrder> {
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
            run(data: bo.SalesOrder): void;
            protected viewData: bo.SalesOrder;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-销售订单 */
        interface ISalesOrderViewView extends ibas.IBOViewView {
            showSalesOrder(viewData: bo.SalesOrder): void;
            showSalesOrderItems(salesOrderItems: bo.SalesOrderItem[]): void;
        }
        /** 销售订单连接服务映射 */
        class SalesOrderLinkServiceMapping extends ibas.BOLinkServiceMapping {
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
declare namespace sales {
    namespace app {
        /** 列表应用-销售订单项目-额外 */
        class SalesOrderItemExtraApp extends ibas.Application<ISalesOrderItemExtraView> {
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
            run(data: bo.SalesOrderItem): void;
            private editData;
            /** 添加销售订单-行事件 */
            private addSalesOrderItemExtra;
            /** 删除销售订单-行事件 */
            private removeSalesOrderItemExtra;
            private deleteSalesOrderItemExtra;
            private viewSalesOrderItemExtra;
        }
        /** 视图-销售订单项目-额外 */
        interface ISalesOrderItemExtraView extends ibas.IBOView {
            /** 显示数据 */
            showData(data: bo.SalesOrderItem): void;
            /** 显示额外数据 */
            showExtraDatas(datas: bo.SalesOrderItemExtra[]): void;
            /** 添加销售订单-行额外 事件 */
            addSalesOrderItemExtraEvent: Function;
            /** 移出销售订单-行额外 事件 */
            removeSalesOrderItemExtraEvent: Function;
            /** 删除销售订单-行额外 事件 */
            deleteSalesOrderItemExtraEvent: Function;
            /** 查看销售订单-行额外 事件 */
            viewSalesOrderItemExtraEvent: Function;
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
declare namespace sales {
    namespace app {
        /** 选择应用-销售退货 */
        class SalesReturnChooseApp extends ibas.BOChooseService<ISalesReturnChooseView, bo.SalesReturn> {
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
        /** 视图-销售退货 */
        interface ISalesReturnChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.SalesReturn[]): void;
        }
        /** 销售退货选择服务映射 */
        class SalesReturnChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.SalesReturn>>;
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
declare namespace sales {
    namespace app {
        /** 编辑应用-销售退货 */
        class SalesReturnEditApp extends ibas.BOEditApplication<ISalesReturnEditView, bo.SalesReturn> {
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
            run(data: bo.SalesReturn): void;
            /** 待编辑的数据 */
            protected editData: bo.SalesReturn;
            protected lineEditData: bo.SalesDeliveryItem;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
            /** 选择销售退货客户事件 */
            private chooseSalesReturnCustomer;
            /** 选择销售退货价格清单事件 */
            private chooseSalesReturnPriceList;
            /** 选择销售退货物料事件 */
            private chooseSalesReturnItemMaterial;
            private chooseSalesReturnItemWarehouse;
            /** 添加销售退货-行事件 */
            private addSalesReturnItem;
            /** 删除销售退货-行事件 */
            private removeSalesReturnItem;
            /** 选择物料批次信息 */
            private createSalesReturnLineMaterialBatch;
            /** 选择物料序列信息 */
            private createSalesReturnLineMaterialSerial;
            /** 选择销售退货项目-销售订单事件 */
            private chooseSalesReturnSalesOrder;
            /** 选择销售退货项目-销售收货事件 */
            private chooseSalesReturnSalesDelivery;
            private editShippingAddresses;
        }
        /** 视图-销售退货 */
        interface ISalesReturnEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showSalesReturn(data: bo.SalesReturn): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加销售退货-行事件 */
            addSalesReturnItemEvent: Function;
            /** 删除销售退货-行事件 */
            removeSalesReturnItemEvent: Function;
            /** 显示数据 */
            showSalesReturnItems(datas: bo.SalesReturnItem[]): void;
            /** 选择销售退货客户事件 */
            chooseSalesReturnCustomerEvent: Function;
            /** 选择销售退货价格清单事件 */
            chooseSalesReturnPriceListEvent: Function;
            /** 选择销售退货物料事件 */
            chooseSalesReturnItemMaterialEvent: Function;
            /** 选择销售退货仓库事件 */
            chooseSalesReturnItemWarehouseEvent: Function;
            /** 选择销售退货单行物料批次事件 */
            chooseSalesReturnItemMaterialBatchEvent: Function;
            /** 选择销售退货行物料序列事件 */
            chooseSalesReturnItemMaterialSerialEvent: Function;
            /** 选择销售退货项目-销售订单事件 */
            chooseSalesReturnSalesOrderEvent: Function;
            /** 选择销售退货项目-销售交货事件 */
            chooseSalesReturnSalesDeliveryEvent: Function;
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
declare namespace sales {
    namespace app {
        class SalesReturnFunc extends ibas.ModuleFunction {
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
declare namespace sales {
    namespace app {
        /** 列表应用-销售退货 */
        class SalesReturnListApp extends ibas.BOListApplication<ISalesReturnListView, bo.SalesReturn> {
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
            protected viewData(data: bo.SalesReturn): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.SalesReturn): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.SalesReturn | bo.SalesReturn[]): void;
        }
        /** 视图-销售退货 */
        interface ISalesReturnListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.SalesReturn[]): void;
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
declare namespace sales {
    namespace app {
        /** 查看应用-销售退货 */
        class SalesReturnViewApp extends ibas.BOViewService<ISalesReturnViewView, bo.SalesReturn> {
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
            run(data: bo.SalesReturn): void;
            protected viewData: bo.SalesReturn;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-销售退货 */
        interface ISalesReturnViewView extends ibas.IBOViewView {
            showSalesReturn(viewData: bo.SalesReturn): void;
            showSalesReturnItems(salesOrderItems: bo.SalesReturnItem[]): void;
        }
        /** 销售退货连接服务映射 */
        class SalesReturnLinkServiceMapping extends ibas.BOLinkServiceMapping {
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
declare namespace sales {
    namespace app {
        /** 选择应用-销售报价 */
        class SalesQuoteChooseApp extends ibas.BOChooseService<ISalesQuoteChooseView, bo.SalesQuote> {
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
        /** 视图-销售报价 */
        interface ISalesQuoteChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.SalesQuote[]): void;
        }
        /** 销售报价选择服务映射 */
        class SalesQuoteChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.SalesQuote>>;
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
declare namespace sales {
    namespace app {
        /** 编辑应用-销售报价 */
        class SalesQuoteEditApp extends ibas.BOEditApplication<ISalesQuoteEditView, bo.SalesQuote> {
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
            run(data: bo.SalesQuote): void;
            /** 待编辑的数据 */
            protected editData: bo.SalesQuote;
            protected lineEditData: bo.SalesQuoteItem;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
            /** 选择销售报价客户事件 */
            private chooseSalesQuoteCustomer;
            /** 选择销售报价价格清单事件 */
            private chooseSalesQuotePriceList;
            /** 选择销售报价物料事件 */
            private chooseSalesQuoteItemMaterial;
            /** 添加销售报价-行事件 */
            private addSalesQuoteItem;
            /** 删除销售报价-行事件 */
            private removeSalesQuoteItem;
            /** 选择销售交货行仓库事件 */
            private chooseSalesQuoteItemWarehouse;
            private showSalesQuoteItemExtra;
        }
        /** 视图-销售报价 */
        interface ISalesQuoteEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showSalesQuote(data: bo.SalesQuote): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加销售报价-行事件 */
            addSalesQuoteItemEvent: Function;
            /** 删除销售报价-行事件 */
            removeSalesQuoteItemEvent: Function;
            /** 显示数据 */
            showSalesQuoteItems(datas: bo.SalesQuoteItem[]): void;
            /** 选择销售报价客户事件 */
            chooseSalesQuoteCustomerEvent: Function;
            /** 选择销售报价价格清单事件 */
            chooseSalesQuotePriceListEvent: Function;
            /** 选择销售报价行物料事件 */
            chooseSalesQuoteItemMaterialEvent: Function;
            /** 选择销售报价仓库事件 */
            chooseSalesQuoteItemWarehouseEvent: Function;
            /** 显示销售报价额外信息事件 */
            showSalesQuoteItemExtraEvent: Function;
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
declare namespace sales {
    namespace app {
        class SalesQuoteFunc extends ibas.ModuleFunction {
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
declare namespace sales {
    namespace app {
        /** 列表应用-销售报价 */
        class SalesQuoteListApp extends ibas.BOListApplication<ISalesQuoteListView, bo.SalesQuote> {
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
            protected viewData(data: bo.SalesQuote): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.SalesQuote): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.SalesQuote | bo.SalesQuote[]): void;
        }
        /** 视图-销售报价 */
        interface ISalesQuoteListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.SalesQuote[]): void;
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
declare namespace sales {
    namespace app {
        /** 查看应用-销售报价 */
        class SalesQuoteViewApp extends ibas.BOViewService<ISalesQuoteViewView, bo.SalesQuote> {
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
            run(data: bo.SalesQuote): void;
            protected viewData: bo.SalesQuote;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-销售报价 */
        interface ISalesQuoteViewView extends ibas.IBOViewView {
            showSalesQuote(viewData: bo.SalesQuote): void;
            showSalesQuoteItems(salesQuoteItems: bo.SalesQuoteItem[]): void;
        }
        /** 销售报价连接服务映射 */
        class SalesQuoteLinkServiceMapping extends ibas.BOLinkServiceMapping {
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
declare namespace sales {
    namespace app {
        /** 列表应用-销售报价项目-额外 */
        class SalesQuoteItemExtraApp extends ibas.Application<ISalesQuoteItemExtraView> {
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
            run(data: bo.SalesQuoteItem): void;
            private editData;
            /** 添加销售报价-行事件 */
            private addSalesQuoteItemExtra;
            /** 删除销售报价-行事件 */
            private removeSalesQuoteItemExtra;
            private deleteSalesQuoteItemExtra;
            private viewSalesQuoteItemExtra;
        }
        /** 视图-销售报价项目-额外 */
        interface ISalesQuoteItemExtraView extends ibas.IBOView {
            /** 显示数据 */
            showData(data: bo.SalesQuoteItem): void;
            /** 显示额外数据 */
            showExtraDatas(datas: bo.SalesQuoteItemExtra[]): void;
            /** 添加销售报价-行额外 事件 */
            addSalesQuoteItemExtraEvent: Function;
            /** 移出销售报价-行额外 事件 */
            removeSalesQuoteItemExtraEvent: Function;
            /** 删除销售报价-行额外 事件 */
            deleteSalesQuoteItemExtraEvent: Function;
            /** 查看销售报价-行额外 事件 */
            viewSalesQuoteItemExtraEvent: Function;
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
declare namespace sales {
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
declare namespace sales {
    namespace app {
        class ProductSpecificationFunc extends ibas.ModuleFunction {
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
declare namespace sales {
    namespace app {
        /** 列表应用-产品规格 */
        class ProductSpecificationListApp extends ibas.BOListApplication<IProductSpecificationListView, bo.ProductSpecification> {
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
            protected viewData(data: bo.ProductSpecification): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.ProductSpecification): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.ProductSpecification | bo.ProductSpecification[]): void;
            /** 规格模板 */
            protected specification(): void;
        }
        /** 视图-产品规格 */
        interface IProductSpecificationListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 规格模板事件 */
            specificationEvent: Function;
            /** 显示数据 */
            showData(datas: bo.ProductSpecification[]): void;
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
declare namespace sales {
    namespace app {
        /** 选择应用-产品规格 */
        class ProductSpecificationChooseApp extends ibas.BOChooseService<IProductSpecificationChooseView, bo.ProductSpecification> {
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
        /** 视图-产品规格 */
        interface IProductSpecificationChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.ProductSpecification[]): void;
        }
        /** 产品规格选择服务映射 */
        class ProductSpecificationChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.ProductSpecification>;
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
declare namespace sales {
    namespace app {
        /** 查看应用-产品规格 */
        class ProductSpecificationViewApp extends ibas.BOApplication<IProductSpecificationViewView> {
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
            run(data: bo.ProductSpecification): void;
            run(criteria: ibas.Criteria | string): void;
            protected viewData: bo.ProductSpecification;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
            private save;
        }
        /** 视图-产品规格 */
        interface IProductSpecificationViewView extends ibas.IBOView {
            /** 保存事件 */
            saveEvent: Function;
            /** 显示规格 */
            showSpecificationTree(data: ProductSpecificationTree): void;
        }
        class ProductSpecificationTree implements bo.ISpecificationTree {
            constructor(data: bo.ProductSpecification);
            data: bo.ProductSpecification;
            /** 模板 */
            template: number;
            /** 名称 */
            name: string;
            /** 备注 */
            remarks: string;
            /** 项目集合 */
            items: ibas.IList<bo.ISpecificationTreeItem>;
        }
        class ProductSpecificationTreeItem implements bo.ISpecificationTreeItem {
            constructor(data: bo.ProductSpecificationItem);
            data: bo.ProductSpecificationItem;
            /** 标记 */
            sign: string;
            /** 描述 */
            description: string;
            /** 可编辑 */
            editable: boolean;
            /** 内容 */
            content: string;
            /** 备注 */
            note: string;
            /** 可选值 */
            vaildValues: ibas.IList<ibas.KeyText>;
            /** 项目集合 */
            items: ibas.IList<bo.ISpecificationTreeItem>;
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
declare namespace sales {
    namespace app {
        /** 编辑应用-产品规格 */
        class ProductSpecificationEditApp extends ibas.BOEditApplication<IProductSpecificationEditView, bo.ProductSpecification> {
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
            run(data: bo.ProductSpecification): void;
            /** 待编辑的数据 */
            protected editData: bo.ProductSpecification;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
            /** 添加产品规格-项目事件 */
            protected addProductSpecificationItem(): void;
            /** 删除产品规格-项目事件 */
            protected removeProductSpecificationItem(items: bo.ProductSpecificationItem[]): void;
        }
        /** 视图-产品规格 */
        interface IProductSpecificationEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showProductSpecification(data: bo.ProductSpecification): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加产品规格-项目事件 */
            addProductSpecificationItemEvent: Function;
            /** 删除产品规格-项目事件 */
            removeProductSpecificationItemEvent: Function;
            /** 显示数据 */
            showProductSpecificationItems(datas: bo.ProductSpecificationItem[]): void;
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
declare namespace sales {
    namespace app {
        class SpecificationFunc extends ibas.ModuleFunction {
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
declare namespace sales {
    namespace app {
        /** 列表应用-规格模板 */
        class SpecificationListApp extends ibas.BOListApplication<ISpecificationListView, bo.Specification> {
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
            protected viewData(data: bo.Specification): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.Specification): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.Specification | bo.Specification[]): void;
        }
        /** 视图-规格模板 */
        interface ISpecificationListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.Specification[]): void;
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
declare namespace sales {
    namespace app {
        /** 选择应用-规格模板 */
        class SpecificationChooseApp extends ibas.BOChooseService<ISpecificationChooseView, bo.Specification> {
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
        /** 视图-规格模板 */
        interface ISpecificationChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.Specification[]): void;
        }
        /** 规格模板选择服务映射 */
        class SpecificationChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IBOChooseService<bo.Specification>;
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
declare namespace sales {
    namespace app {
        /** 编辑应用-规格模板 */
        class SpecificationEditApp extends ibas.BOEditApplication<ISpecificationEditView, bo.Specification> {
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
            run(data: bo.Specification): void;
            /** 待编辑的数据 */
            protected editData: bo.Specification;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 */
            protected createData(clone: boolean): void;
            /** 添加规格模板-项目事件 */
            protected addSpecificationItem(parent: bo.SpecificationItem): void;
            /** 删除规格模板-项目事件 */
            protected removeSpecificationItem(items: bo.SpecificationItem[]): void;
            private chooseSpecificationTarget;
            private editSpecificationItemData;
            /** 编辑属性值事件 */
            private editSpecificationItem;
            /** 添加属性值事件 */
            private addSpecificationItemValue;
            /** 删除属性值事件 */
            private removeSpecificationItemValue;
        }
        /** 视图-规格模板 */
        interface ISpecificationEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showSpecification(data: bo.Specification): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加规格模板-项目事件 */
            addSpecificationItemEvent: Function;
            /** 删除规格模板-项目事件 */
            removeSpecificationItemEvent: Function;
            /** 选择规格模板目标事件 */
            chooseSpecificationTargetEvent: Function;
            /** 显示数据 */
            showSpecificationItems(datas: bo.SpecificationItem[]): void;
            /** 编辑规格模事件 */
            editSpecificationItemEvent: Function;
            /** 添加规格模板-项目值事件 */
            addSpecificationItemValueEvent: Function;
            /** 删除规格模板-项目值事件 */
            removeSpecificationItemValueEvent: Function;
            /** 显示数据 */
            showSpecificationItemValues(datas: bo.SpecificationItemValue[]): void;
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
declare namespace sales {
    namespace app {
        /** 查看应用-规格模板 */
        class SpecificationTreeService extends ibas.ServiceWithResultApplication<ISpecificationTreeView, ISpecificationTreeContract, bo.IProductSpecification> {
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
            /** 运行服务 */
            runService(contract: ISpecificationTreeContract): void;
            private remarks;
            private specification;
            private showSpecification;
            private using;
            private save;
        }
        /** 视图-规格模板 */
        interface ISpecificationTreeView extends ibas.IBOView {
            /** 显示规格 */
            showSpecifications(datas: bo.SpecificationTree[]): void;
            /** 使用事件 */
            usingEvent: Function;
            /** 保存事件 */
            saveEvent: Function;
            /** 显示规格 */
            showSpecificationTree(data: bo.SpecificationTree): void;
        }
        /** 规格模板连接服务映射 */
        class SpecificationTreeServiceMapping extends ibas.ServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IServiceContract>;
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
declare namespace sales {
    namespace app {
        /** 附件信息-文档附件 */
        const EXTRA_ATTACHMENT: string;
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

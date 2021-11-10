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
    namespace config {
        /** 配置项目-价格清单改变是否强制刷新价格 */
        const CONFIG_ITEM_FORCE_UPDATE_PRICE_FOR_PRICE_LIST_CHANGED: string;
        /**
         * 获取此模块配置
         * @param key 配置项
         * @param defalut 默认值
         */
        function get<T>(key: string, defalut?: T): T;
    }
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
        /** 业务对象编码-销售贷项 */
        const BO_CODE_SALESCREDITNOTE: string;
        /** 业务对象编码-销售发票 */
        const BO_CODE_SALESINVOICE: string;
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
    namespace app {
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
            /** 产品标识 */
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
            /** 基础数量 */
            basisQuantity: number;
            /** 行标志号 */
            lineSign: string;
            /** 父项行标志号 */
            parentLineSign: string;
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
            /** 产品标识 */
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
            /** 基础数量 */
            basisQuantity: number;
            /** 行标志号 */
            lineSign: string;
            /** 父项行标志号 */
            parentLineSign: string;
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
            /** 销售订单-行-额外信息集合 */
            salesOrderItemExtras: ISalesOrderItemExtras;
            /** 赋值产品 */
            baseProduct(source: materials.bo.IProduct): void;
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
            /** 销售退货-行集合 */
            salesReturnItems: ISalesReturnItems;
            /** 送货地址集合 */
            shippingAddresss: IShippingAddresss;
            /** 基于销售订单 */
            baseDocument(document: ISalesOrder): void;
            /** 基于销售交货 */
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
            /** 产品标识 */
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
            /** 基础数量 */
            basisQuantity: number;
            /** 行标志号 */
            lineSign: string;
            /** 父项行标志号 */
            parentLineSign: string;
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
            /** 产品标识 */
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
            /** 基础数量 */
            basisQuantity: number;
            /** 行标志号 */
            lineSign: string;
            /** 父项行标志号 */
            parentLineSign: string;
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
            /** 销售报价-行-额外信息集合 */
            salesQuoteItemExtras: ISalesQuoteItemExtras;
            /** 赋值产品 */
            baseProduct(source: materials.bo.IProduct): void;
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
        /** 销售贷项 */
        interface ISalesCreditNote extends ibas.IBODocument, ibas.IBOUserFields {
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
            /** 销售贷项-行集合 */
            salesCreditNoteItems: ISalesCreditNoteItems;
            /** 送货地址集合 */
            shippingAddresss: IShippingAddresss;
            /** 基于销售发票 */
            baseDocument(document: ISalesInvoice): void;
            /** 基于销售交货 */
            baseDocument(document: ISalesReturn): void;
            /** 基于地址 */
            baseAddress(address: businesspartner.bo.IAddress): void;
        }
        /** 销售贷项-行 集合 */
        interface ISalesCreditNoteItems extends ibas.IBusinessObjects<ISalesCreditNoteItem> {
            /** 创建并添加子项 */
            create(): ISalesCreditNoteItem;
        }
        /** 销售贷项-行 */
        interface ISalesCreditNoteItem extends ibas.IBODocumentLine, ibas.IBOUserFields {
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
            /** 产品标识 */
            itemSign: string;
            /** 序号管理 */
            serialManagement: ibas.emYesNo;
            /** 批号管理 */
            batchManagement: ibas.emYesNo;
            /** 数量 */
            quantity: number;
            /** 单位 */
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
            /** 基础数量 */
            basisQuantity: number;
            /** 行标志号 */
            lineSign: string;
            /** 父项行标志号 */
            parentLineSign: string;
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
declare namespace sales {
    namespace bo {
        /** 销售发票 */
        interface ISalesInvoice extends ibas.IBODocument, ibas.IBOUserFields {
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
            /** 销售发票-行集合 */
            salesInvoiceItems: ISalesInvoiceItems;
            /** 送货地址集合 */
            shippingAddresss: IShippingAddresss;
            /** 基于销售订单 */
            baseDocument(document: ISalesOrder): void;
            /** 基于销售交货 */
            baseDocument(document: ISalesDelivery): void;
            /** 基于地址 */
            baseAddress(address: businesspartner.bo.IAddress): void;
        }
        /** 销售发票-行 集合 */
        interface ISalesInvoiceItems extends ibas.IBusinessObjects<ISalesInvoiceItem> {
            /** 创建并添加子项 */
            create(): ISalesInvoiceItem;
        }
        /** 销售发票-行 */
        interface ISalesInvoiceItem extends ibas.IBODocumentLine, ibas.IBOUserFields {
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
            /** 产品标识 */
            itemSign: string;
            /** 序号管理 */
            serialManagement: ibas.emYesNo;
            /** 批号管理 */
            batchManagement: ibas.emYesNo;
            /** 数量 */
            quantity: number;
            /** 单位 */
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
            /** 基础数量 */
            basisQuantity: number;
            /** 行标志号 */
            lineSign: string;
            /** 父项行标志号 */
            parentLineSign: string;
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
             * 查询 产品套装并扩展产品数据
             * @param fetcher 查询者
             */
            fetchProductSuitEx(fetcher: ibas.IFetchCaller<bo.IProductSuitEx>): void;
            /**
             * 查询 销售贷项
             * @param fetcher 查询者
             */
            fetchSalesCreditNote(fetcher: ibas.IFetchCaller<bo.ISalesCreditNote>): void;
            /**
             * 保存 销售贷项
             * @param saver 保存者
             */
            saveSalesCreditNote(saver: ibas.ISaveCaller<bo.ISalesCreditNote>): void;
            /**
             * 查询 销售发票
             * @param fetcher 查询者
             */
            fetchSalesInvoice(fetcher: ibas.IFetchCaller<bo.ISalesInvoice>): void;
            /**
             * 保存 销售发票
             * @param saver 保存者
             */
            saveSalesInvoice(saver: ibas.ISaveCaller<bo.ISalesInvoice>): void;
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
            get product(): string;
            /** 设置-产品编码 */
            set product(value: string);
            /** 映射的属性名称-产品描述 */
            static PROPERTY_DESCRIPTION_NAME: string;
            /** 获取-产品描述 */
            get description(): string;
            /** 设置-产品描述 */
            set description(value: string);
            /** 映射的属性名称-版本 */
            static PROPERTY_VERSION_NAME: string;
            /** 获取-版本 */
            get version(): string;
            /** 设置-版本 */
            set version(value: string);
            /** 映射的属性名称-是否激活 */
            static PROPERTY_ACTIVATED_NAME: string;
            /** 获取-是否激活 */
            get activated(): ibas.emYesNo;
            /** 设置-是否激活 */
            set activated(value: ibas.emYesNo);
            /** 映射的属性名称-单位数量 */
            static PROPERTY_UNITQUANTITY_NAME: string;
            /** 获取-单位数量 */
            get unitQuantity(): number;
            /** 设置-单位数量 */
            set unitQuantity(value: number);
            /** 映射的属性名称-计量单位 */
            static PROPERTY_UOM_NAME: string;
            /** 获取-计量单位 */
            get uom(): string;
            /** 设置-计量单位 */
            set uom(value: string);
            /** 映射的属性名称-生效日期 */
            static PROPERTY_VALIDDATE_NAME: string;
            /** 获取-生效日期 */
            get validDate(): Date;
            /** 设置-生效日期 */
            set validDate(value: Date);
            /** 映射的属性名称-失效日期 */
            static PROPERTY_INVALIDDATE_NAME: string;
            /** 获取-失效日期 */
            get invalidDate(): Date;
            /** 设置-失效日期 */
            set invalidDate(value: Date);
            /** 映射的属性名称-总计 */
            static PROPERTY_TOTAL_NAME: string;
            /** 获取-总计 */
            get total(): number;
            /** 设置-总计 */
            set total(value: number);
            /** 映射的属性名称-货币 */
            static PROPERTY_CURRENCY_NAME: string;
            /** 获取-货币 */
            get currency(): string;
            /** 设置-货币 */
            set currency(value: string);
            /** 映射的属性名称-备注 */
            static PROPERTY_REMARKS_NAME: string;
            /** 获取-备注 */
            get remarks(): string;
            /** 设置-备注 */
            set remarks(value: string);
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
            /** 映射的属性名称-审批状态 */
            static PROPERTY_APPROVALSTATUS_NAME: string;
            /** 获取-审批状态 */
            get approvalStatus(): ibas.emApprovalStatus;
            /** 设置-审批状态 */
            set approvalStatus(value: ibas.emApprovalStatus);
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
            /** 映射的属性名称-产品套装-项目集合 */
            static PROPERTY_PRODUCTSUITITEMS_NAME: string;
            /** 获取-产品套装-项目集合 */
            get productSuitItems(): ProductSuitItems;
            /** 设置-产品套装-项目集合 */
            set productSuitItems(value: ProductSuitItems);
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
            get objectKey(): number;
            /** 设置-对象编号 */
            set objectKey(value: number);
            /** 映射的属性名称-对象行号 */
            static PROPERTY_LINEID_NAME: string;
            /** 获取-对象行号 */
            get lineId(): number;
            /** 设置-对象行号 */
            set lineId(value: number);
            /** 映射的属性名称-对象类型 */
            static PROPERTY_OBJECTCODE_NAME: string;
            /** 获取-对象类型 */
            get objectCode(): string;
            /** 设置-对象类型 */
            set objectCode(value: string);
            /** 映射的属性名称-实例号 */
            static PROPERTY_LOGINST_NAME: string;
            /** 获取-实例号 */
            get logInst(): number;
            /** 设置-实例号 */
            set logInst(value: number);
            /** 映射的属性名称-数据源 */
            static PROPERTY_DATASOURCE_NAME: string;
            /** 获取-数据源 */
            get dataSource(): string;
            /** 设置-数据源 */
            set dataSource(value: string);
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
            /** 映射的属性名称-更新日期 */
            static PROPERTY_UPDATEDATE_NAME: string;
            /** 获取-更新日期 */
            get updateDate(): Date;
            /** 设置-更新日期 */
            set updateDate(value: Date);
            /** 映射的属性名称-更新时间 */
            static PROPERTY_UPDATETIME_NAME: string;
            /** 获取-更新时间 */
            get updateTime(): number;
            /** 设置-更新时间 */
            set updateTime(value: number);
            /** 映射的属性名称-创建用户 */
            static PROPERTY_CREATEUSERSIGN_NAME: string;
            /** 获取-创建用户 */
            get createUserSign(): number;
            /** 设置-创建用户 */
            set createUserSign(value: number);
            /** 映射的属性名称-更新用户 */
            static PROPERTY_UPDATEUSERSIGN_NAME: string;
            /** 获取-更新用户 */
            get updateUserSign(): number;
            /** 设置-更新用户 */
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
            /** 映射的属性名称-组件编码 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-组件编码 */
            get itemCode(): string;
            /** 设置-组件编码 */
            set itemCode(value: string);
            /** 映射的属性名称-组件名称 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            /** 获取-组件名称 */
            get itemDescription(): string;
            /** 设置-组件名称 */
            set itemDescription(value: string);
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
            /** 映射的属性名称-总计 */
            static PROPERTY_LINETOTAL_NAME: string;
            /** 获取-总计 */
            get lineTotal(): number;
            /** 设置-总计 */
            set lineTotal(value: number);
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
            /** 映射的属性名称-客户代码 */
            static PROPERTY_CUSTOMERCODE_NAME: string;
            /** 获取-客户代码 */
            get customerCode(): string;
            /** 设置-客户代码 */
            set customerCode(value: string);
            /** 映射的属性名称-客户名称 */
            static PROPERTY_CUSTOMERNAME_NAME: string;
            /** 获取-客户名称 */
            get customerName(): string;
            /** 设置-客户名称 */
            set customerName(value: string);
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
            /** 映射的属性名称-销售交货-行集合 */
            static PROPERTY_SALESDELIVERYITEMS_NAME: string;
            /** 获取-销售交货-行集合 */
            get salesDeliveryItems(): SalesDeliveryItems;
            /** 设置-销售交货-行集合 */
            set salesDeliveryItems(value: SalesDeliveryItems);
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
            protected onItemPropertyChanged(item: SalesDeliveryItem, name: string): void;
        }
        /** 销售交货-行 */
        class SalesDeliveryItem extends ibas.BODocumentLine<SalesDeliveryItem> implements ISalesDeliveryItem {
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
            /** 映射的属性名称-产品编号 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-产品编号 */
            get itemCode(): string;
            /** 设置-产品编号 */
            set itemCode(value: string);
            /** 映射的属性名称-产品/服务描述 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            /** 获取-产品/服务描述 */
            get itemDescription(): string;
            /** 设置-产品/服务描述 */
            set itemDescription(value: string);
            /** 映射的属性名称-产品标识 */
            static PROPERTY_ITEMSIGN_NAME: string;
            /** 获取-产品标识 */
            get itemSign(): string;
            /** 设置-产品标识 */
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
            /** 映射的属性名称-基础数量 */
            static PROPERTY_BASISQUANTITY_NAME: string;
            /** 获取-基础数量 */
            get basisQuantity(): number;
            /** 设置-基础数量 */
            set basisQuantity(value: number);
            /** 映射的属性名称-行标志号 */
            static PROPERTY_LINESIGN_NAME: string;
            /** 获取-行标志号 */
            get lineSign(): string;
            /** 设置-行标志号 */
            set lineSign(value: string);
            /** 映射的属性名称-父项行标志号 */
            static PROPERTY_PARENTLINESIGN_NAME: string;
            /** 获取-父项行标志号 */
            get parentLineSign(): string;
            /** 设置-父项行标志号 */
            set parentLineSign(value: string);
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
            /** 映射的属性名称-客户代码 */
            static PROPERTY_CUSTOMERCODE_NAME: string;
            /** 获取-客户代码 */
            get customerCode(): string;
            /** 设置-客户代码 */
            set customerCode(value: string);
            /** 映射的属性名称-客户名称 */
            static PROPERTY_CUSTOMERNAME_NAME: string;
            /** 获取-客户名称 */
            get customerName(): string;
            /** 设置-客户名称 */
            set customerName(value: string);
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
            /** 映射的属性名称-销售订单-行集合 */
            static PROPERTY_SALESORDERITEMS_NAME: string;
            /** 获取-销售订单-行集合 */
            get salesOrderItems(): SalesOrderItems;
            /** 设置-销售订单-行集合 */
            set salesOrderItems(value: SalesOrderItems);
            /** 映射的属性名称-送货地址集合 */
            static PROPERTY_SHIPPINGADDRESSS_NAME: string;
            /** 获取-送货地址集合 */
            get shippingAddresss(): ShippingAddresss;
            /** 设置-送货地址集合 */
            set shippingAddresss(value: ShippingAddresss);
            /** 基于销售订单 */
            baseDocument(document: ISalesQuote): void;
            /** 基于地址 */
            baseAddress(address: businesspartner.bo.IAddress): void;
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
        /** 销售订单-行 集合 */
        class SalesOrderItems extends ibas.BusinessObjects<SalesOrderItem, SalesOrder> implements ISalesOrderItems {
            /** 创建并添加子项 */
            create(): SalesOrderItem;
            /** 移出项目之后 */
            protected afterRemove(item: SalesOrderItem): void;
            /** 子项属性改变时 */
            protected onItemPropertyChanged(item: SalesOrderItem, name: string): void;
        }
        /** 销售订单-行 */
        class SalesOrderItem extends ibas.BODocumentLine<SalesOrderItem> implements ISalesOrderItem {
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
            /** 映射的属性名称-产品编号 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-产品编号 */
            get itemCode(): string;
            /** 设置-产品编号 */
            set itemCode(value: string);
            /** 映射的属性名称-产品/服务描述 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            /** 获取-产品/服务描述 */
            get itemDescription(): string;
            /** 设置-产品/服务描述 */
            set itemDescription(value: string);
            /** 映射的属性名称-产品标识 */
            static PROPERTY_ITEMSIGN_NAME: string;
            /** 获取-产品标识 */
            get itemSign(): string;
            /** 设置-产品标识 */
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
            /** 映射的属性名称-基础数量 */
            static PROPERTY_BASISQUANTITY_NAME: string;
            /** 获取-基础数量 */
            get basisQuantity(): number;
            /** 设置-基础数量 */
            set basisQuantity(value: number);
            /** 映射的属性名称-行标志号 */
            static PROPERTY_LINESIGN_NAME: string;
            /** 获取-行标志号 */
            get lineSign(): string;
            /** 设置-行标志号 */
            set lineSign(value: string);
            /** 映射的属性名称-父项行标志号 */
            static PROPERTY_PARENTLINESIGN_NAME: string;
            /** 获取-父项行标志号 */
            get parentLineSign(): string;
            /** 设置-父项行标志号 */
            set parentLineSign(value: string);
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
            /** 映射的属性名称-销售订单-行-额外信息集合 */
            static PROPERTY_SALESORDERITEMEXTRAS_NAME: string;
            /** 获取-销售订单-行-额外信息集合 */
            get salesOrderItemExtras(): SalesOrderItemExtras;
            /** 设置-销售订单-行-额外信息集合 */
            set salesOrderItemExtras(value: SalesOrderItemExtras);
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
            /** 映射的属性名称-客户代码 */
            static PROPERTY_CUSTOMERCODE_NAME: string;
            /** 获取-客户代码 */
            get customerCode(): string;
            /** 设置-客户代码 */
            set customerCode(value: string);
            /** 映射的属性名称-客户名称 */
            static PROPERTY_CUSTOMERNAME_NAME: string;
            /** 获取-客户名称 */
            get customerName(): string;
            /** 设置-客户名称 */
            set customerName(value: string);
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
            /** 映射的属性名称-销售订单-行集合 */
            static PROPERTY_SALESQUOTEITEMS_NAME: string;
            /** 获取-销售订单-行集合 */
            get salesQuoteItems(): SalesQuoteItems;
            /** 设置-销售订单-行集合 */
            set salesQuoteItems(value: SalesQuoteItems);
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
        }
        /** 销售订单-行 集合 */
        class SalesQuoteItems extends ibas.BusinessObjects<SalesQuoteItem, SalesQuote> implements ISalesQuoteItems {
            /** 创建并添加子项 */
            create(): SalesQuoteItem;
            /** 移出项目之后 */
            protected afterRemove(item: SalesQuoteItem): void;
            /** 子项属性改变时 */
            protected onItemPropertyChanged(item: SalesQuoteItem, name: string): void;
        }
        /** 销售订单-行 */
        class SalesQuoteItem extends ibas.BODocumentLine<SalesQuoteItem> implements ISalesQuoteItem {
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
            /** 映射的属性名称-产品编号 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-产品编号 */
            get itemCode(): string;
            /** 设置-产品编号 */
            set itemCode(value: string);
            /** 映射的属性名称-产品/服务描述 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            /** 获取-产品/服务描述 */
            get itemDescription(): string;
            /** 设置-产品/服务描述 */
            set itemDescription(value: string);
            /** 映射的属性名称-产品标识 */
            static PROPERTY_ITEMSIGN_NAME: string;
            /** 获取-产品标识 */
            get itemSign(): string;
            /** 设置-产品标识 */
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
            /** 映射的属性名称-基础数量 */
            static PROPERTY_BASISQUANTITY_NAME: string;
            /** 获取-基础数量 */
            get basisQuantity(): number;
            /** 设置-基础数量 */
            set basisQuantity(value: number);
            /** 映射的属性名称-行标志号 */
            static PROPERTY_LINESIGN_NAME: string;
            /** 获取-行标志号 */
            get lineSign(): string;
            /** 设置-行标志号 */
            set lineSign(value: string);
            /** 映射的属性名称-父项行标志号 */
            static PROPERTY_PARENTLINESIGN_NAME: string;
            /** 获取-父项行标志号 */
            get parentLineSign(): string;
            /** 设置-父项行标志号 */
            set parentLineSign(value: string);
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
            /** 映射的属性名称-销售报价-行-额外信息集合 */
            static PROPERTY_SALESQUOTEITEMEXTRAS_NAME: string;
            /** 获取-销售报价-行-额外信息集合 */
            get salesQuoteItemExtras(): SalesQuoteItemExtras;
            /** 设置-销售报价-行-额外信息集合 */
            set salesQuoteItemExtras(value: SalesQuoteItemExtras);
            /** 初始化数据 */
            protected init(): void;
            /** 赋值产品 */
            baseProduct(source: materials.bo.IProduct): void;
            protected registerRules(): ibas.IBusinessRule[];
            /** 重置 */
            reset(): void;
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
            static PROPERTY_RETURNDATE_NAME: string;
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
            /** 映射的属性名称-客户代码 */
            static PROPERTY_CUSTOMERCODE_NAME: string;
            /** 获取-客户代码 */
            get customerCode(): string;
            /** 设置-客户代码 */
            set customerCode(value: string);
            /** 映射的属性名称-客户名称 */
            static PROPERTY_CUSTOMERNAME_NAME: string;
            /** 获取-客户名称 */
            get customerName(): string;
            /** 设置-客户名称 */
            set customerName(value: string);
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
            /** 映射的属性名称-销售退货-行集合 */
            static PROPERTY_SALESRETURNITEMS_NAME: string;
            /** 获取-销售退货-行集合 */
            get salesReturnItems(): SalesReturnItems;
            /** 设置-销售退货-行集合 */
            set salesReturnItems(value: SalesReturnItems);
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
            /** 基于销售订单 */
            baseDocument(document: ISalesOrder): void;
            /** 基于销售交货 */
            baseDocument(document: ISalesDelivery): void;
        }
        /** 销售退货-行 集合 */
        class SalesReturnItems extends ibas.BusinessObjects<SalesReturnItem, SalesReturn> implements ISalesReturnItems {
            /** 创建并添加子项 */
            create(): SalesReturnItem;
            /** 移出项目之后 */
            protected afterRemove(item: SalesReturnItem): void;
            /** 子项属性改变时 */
            protected onItemPropertyChanged(item: SalesReturnItem, name: string): void;
        }
        /** 销售退货-行 */
        class SalesReturnItem extends ibas.BODocumentLine<SalesReturnItem> implements ISalesReturnItem {
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
            /** 映射的属性名称-产品编号 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-产品编号 */
            get itemCode(): string;
            /** 设置-产品编号 */
            set itemCode(value: string);
            /** 映射的属性名称-产品/服务描述 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            /** 获取-产品/服务描述 */
            get itemDescription(): string;
            /** 设置-产品/服务描述 */
            set itemDescription(value: string);
            /** 映射的属性名称-产品标识 */
            static PROPERTY_ITEMSIGN_NAME: string;
            /** 获取-产品标识 */
            get itemSign(): string;
            /** 设置-产品标识 */
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
            static PROPERTY_RETURNDATE_NAME: string;
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
            /** 映射的属性名称-基础数量 */
            static PROPERTY_BASISQUANTITY_NAME: string;
            /** 获取-基础数量 */
            get basisQuantity(): number;
            /** 设置-基础数量 */
            set basisQuantity(value: number);
            /** 映射的属性名称-行标志号 */
            static PROPERTY_LINESIGN_NAME: string;
            /** 获取-行标志号 */
            get lineSign(): string;
            /** 设置-行标志号 */
            set lineSign(value: string);
            /** 映射的属性名称-父项行标志号 */
            static PROPERTY_PARENTLINESIGN_NAME: string;
            /** 获取-父项行标志号 */
            get parentLineSign(): string;
            /** 设置-父项行标志号 */
            set parentLineSign(value: string);
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
declare namespace sales {
    namespace bo {
        /** 销售贷项 */
        class SalesCreditNote extends ibas.BODocument<SalesCreditNote> implements ISalesCreditNote, ibas.IConvertedData {
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
            /** 映射的属性名称-客户代码 */
            static PROPERTY_CUSTOMERCODE_NAME: string;
            /** 获取-客户代码 */
            get customerCode(): string;
            /** 设置-客户代码 */
            set customerCode(value: string);
            /** 映射的属性名称-客户名称 */
            static PROPERTY_CUSTOMERNAME_NAME: string;
            /** 获取-客户名称 */
            get customerName(): string;
            /** 设置-客户名称 */
            set customerName(value: string);
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
            /** 映射的属性名称-销售贷项-行集合 */
            static PROPERTY_SALESCREDITNOTEITEMS_NAME: string;
            /** 获取-销售贷项-行集合 */
            get salesCreditNoteItems(): SalesCreditNoteItems;
            /** 设置-销售贷项-行集合 */
            set salesCreditNoteItems(value: SalesCreditNoteItems);
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
            baseDocument(document: ISalesInvoice): void;
            baseDocument(document: ISalesReturn): void;
            /** 基于地址 */
            baseAddress(address: businesspartner.bo.IAddress): void;
        }
        /** 销售贷项-行 集合 */
        class SalesCreditNoteItems extends ibas.BusinessObjects<SalesCreditNoteItem, SalesCreditNote> implements ISalesCreditNoteItems {
            /** 创建并添加子项 */
            create(): SalesCreditNoteItem;
            /** 移出项目之后 */
            protected afterRemove(item: SalesCreditNoteItem): void;
            /** 子项属性改变时 */
            protected onItemPropertyChanged(item: SalesCreditNoteItem, name: string): void;
        }
        /** 销售贷项-行 */
        class SalesCreditNoteItem extends ibas.BODocumentLine<SalesCreditNoteItem> implements ISalesCreditNoteItem {
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
            /** 映射的属性名称-产品编号 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-产品编号 */
            get itemCode(): string;
            /** 设置-产品编号 */
            set itemCode(value: string);
            /** 映射的属性名称-产品/服务描述 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            /** 获取-产品/服务描述 */
            get itemDescription(): string;
            /** 设置-产品/服务描述 */
            set itemDescription(value: string);
            /** 映射的属性名称-产品标识 */
            static PROPERTY_ITEMSIGN_NAME: string;
            /** 获取-产品标识 */
            get itemSign(): string;
            /** 设置-产品标识 */
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
            /** 映射的属性名称-基础数量 */
            static PROPERTY_BASISQUANTITY_NAME: string;
            /** 获取-基础数量 */
            get basisQuantity(): number;
            /** 设置-基础数量 */
            set basisQuantity(value: number);
            /** 映射的属性名称-行标志号 */
            static PROPERTY_LINESIGN_NAME: string;
            /** 获取-行标志号 */
            get lineSign(): string;
            /** 设置-行标志号 */
            set lineSign(value: string);
            /** 映射的属性名称-父项行标志号 */
            static PROPERTY_PARENTLINESIGN_NAME: string;
            /** 获取-父项行标志号 */
            get parentLineSign(): string;
            /** 设置-父项行标志号 */
            set parentLineSign(value: string);
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
declare namespace sales {
    namespace bo {
        /** 销售发票 */
        class SalesInvoice extends ibas.BODocument<SalesInvoice> implements ISalesInvoice, ibas.IConvertedData {
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
            /** 映射的属性名称-客户代码 */
            static PROPERTY_CUSTOMERCODE_NAME: string;
            /** 获取-客户代码 */
            get customerCode(): string;
            /** 设置-客户代码 */
            set customerCode(value: string);
            /** 映射的属性名称-客户名称 */
            static PROPERTY_CUSTOMERNAME_NAME: string;
            /** 获取-客户名称 */
            get customerName(): string;
            /** 设置-客户名称 */
            set customerName(value: string);
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
            /** 映射的属性名称-销售发票-行集合 */
            static PROPERTY_SALESDELIVERYITEMS_NAME: string;
            /** 获取-销售发票-行集合 */
            get salesInvoiceItems(): SalesInvoiceItems;
            /** 设置-销售发票-行集合 */
            set salesInvoiceItems(value: SalesInvoiceItems);
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
            baseDocument(document: ISalesOrder): void;
            baseDocument(document: ISalesDelivery): void;
            /** 基于地址 */
            baseAddress(address: businesspartner.bo.IAddress): void;
        }
        /** 销售发票-行 集合 */
        class SalesInvoiceItems extends ibas.BusinessObjects<SalesInvoiceItem, SalesInvoice> implements ISalesInvoiceItems {
            /** 创建并添加子项 */
            create(): SalesInvoiceItem;
            /** 移出项目之后 */
            protected afterRemove(item: SalesInvoiceItem): void;
            /** 子项属性改变时 */
            protected onItemPropertyChanged(item: SalesInvoiceItem, name: string): void;
        }
        /** 销售发票-行 */
        class SalesInvoiceItem extends ibas.BODocumentLine<SalesInvoiceItem> implements ISalesInvoiceItem {
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
            /** 映射的属性名称-产品编号 */
            static PROPERTY_ITEMCODE_NAME: string;
            /** 获取-产品编号 */
            get itemCode(): string;
            /** 设置-产品编号 */
            set itemCode(value: string);
            /** 映射的属性名称-产品/服务描述 */
            static PROPERTY_ITEMDESCRIPTION_NAME: string;
            /** 获取-产品/服务描述 */
            get itemDescription(): string;
            /** 设置-产品/服务描述 */
            set itemDescription(value: string);
            /** 映射的属性名称-产品标识 */
            static PROPERTY_ITEMSIGN_NAME: string;
            /** 获取-产品标识 */
            get itemSign(): string;
            /** 设置-产品标识 */
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
            /** 映射的属性名称-行发票日期 */
            static PROPERTY_DELIVERYDATE_NAME: string;
            /** 获取-行发票日期 */
            get deliveryDate(): Date;
            /** 设置-行发票日期 */
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
            /** 映射的属性名称-基础数量 */
            static PROPERTY_BASISQUANTITY_NAME: string;
            /** 获取-基础数量 */
            get basisQuantity(): number;
            /** 设置-基础数量 */
            set basisQuantity(value: number);
            /** 映射的属性名称-行标志号 */
            static PROPERTY_LINESIGN_NAME: string;
            /** 获取-行标志号 */
            get lineSign(): string;
            /** 设置-行标志号 */
            set lineSign(value: string);
            /** 映射的属性名称-父项行标志号 */
            static PROPERTY_PARENTLINESIGN_NAME: string;
            /** 获取-父项行标志号 */
            get parentLineSign(): string;
            /** 设置-父项行标志号 */
            set parentLineSign(value: string);
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
            /** 基于地址 */
            baseAddress(address: businesspartner.bo.IAddress): void;
            /** 初始化数据 */
            protected init(): void;
            protected registerRules(): ibas.IBusinessRule[];
        }
        /** 送货地址 集合 */
        class ShippingAddresss extends ibas.BusinessObjects<ShippingAddress, ISalesQuote | ISalesOrder | ISalesDelivery | ISalesReturn | ISalesInvoice | ISalesCreditNote> implements IShippingAddresss {
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
        function baseDocument(target: ISalesOrder | ISalesDelivery | ISalesReturn | ISalesCreditNote | ISalesInvoice, source: ISalesQuote | ISalesOrder | ISalesDelivery | ISalesReturn | ISalesInvoice): void;
        /**
         * 基于单据
         * @param target 目标
         * @param source 源
         */
        function baseDocumentItem(target: ISalesOrderItem | ISalesDeliveryItem | ISalesReturnItem | ISalesCreditNoteItem | ISalesInvoiceItem, source: ISalesQuoteItem | ISalesOrderItem | ISalesDeliveryItem): void;
        function baseProduct(target: ISalesQuoteItem | ISalesOrderItem | ISalesDeliveryItem | ISalesReturnItem | ISalesInvoiceItem | ISalesCreditNoteItem, source: materials.bo.IProduct): void;
        function baseProductSuit(target: ISalesQuoteItems | ISalesOrderItems | ISalesDeliveryItems, source: bo.IProductSuitEx): ISalesQuoteItem[] | ISalesOrderItem[] | ISalesDeliveryItem[];
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
             * 查询 产品套装并扩展产品数据
             * @param fetcher 查询者
             */
            fetchProductSuitEx(fetcher: ibas.IFetchCaller<bo.IProductSuitEx>): void;
            /**
             * 查询 销售贷项
             * @param fetcher 查询者
             */
            fetchSalesCreditNote(fetcher: ibas.IFetchCaller<bo.SalesCreditNote>): void;
            /**
             * 保存 销售贷项
             * @param saver 保存者
             */
            saveSalesCreditNote(saver: ibas.ISaveCaller<bo.SalesCreditNote>): void;
            /**
             * 查询 销售发票
             * @param fetcher 查询者
             */
            fetchSalesInvoice(fetcher: ibas.IFetchCaller<bo.SalesInvoice>): void;
            /**
             * 保存 销售发票
             * @param saver 保存者
             */
            saveSalesInvoice(saver: ibas.ISaveCaller<bo.SalesInvoice>): void;
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
        class SalesDeliveryEditApp extends ibas.BOEditService<ISalesDeliveryEditView, bo.SalesDelivery> {
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
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 or 导入文件 */
            protected createData(clone: boolean | Blob): void;
            /** 选择销售交货客户事件 */
            private chooseSalesDeliveryCustomer;
            /** 选择销售交货价格清单事件 */
            private chooseSalesDeliveryPriceList;
            /** 更改行价格 */
            private changeSalesDeliveryItemPrice;
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
            /** 选择销售交货-销售订单事件 */
            private chooseSalesDeliverySalesOrder;
            private receiptSalesDelivery;
            /** 选择联系人 */
            private chooseSalesDeliveryContactPerson;
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
            /** 选择销售交货联系人信息 */
            chooseSalesDeliveryContactPersonEvent: Function;
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
            /** 默认税组 */
            defaultTaxGroup: string;
        }
        /** 销售交货编辑服务映射 */
        class SalesDeliveryEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.SalesDelivery>>;
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
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-销售交货 */
        interface ISalesDeliveryViewView extends ibas.IBOViewView {
            showSalesDelivery(viewData: bo.SalesDelivery): void;
            showSalesDeliveryItems(salesDeliveryItem: bo.SalesDeliveryItem[]): void;
            showShippingAddresses(datas: bo.ShippingAddress[]): void;
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
        class SalesOrderEditApp extends ibas.BOEditService<ISalesOrderEditView, bo.SalesOrder> {
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
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 or 导入文件 */
            protected createData(clone: boolean | Blob): void;
            /** 选择销售订单客户事件 */
            private chooseSalesOrderCustomer;
            /** 选择销售订单价格清单事件 */
            private chooseSalesOrderPriceList;
            /** 更改行价格 */
            private changeSalesOrderItemPrice;
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
            /** 选择联系人 */
            private chooseSalesOrderContactPerson;
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
            /** 选择销售订单联系人信息 */
            chooseSalesOrderContactPersonEvent: Function;
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
            /** 默认税组 */
            defaultTaxGroup: string;
        }
        /** 销售订单编辑服务映射 */
        class SalesOrderEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.SalesOrder>>;
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
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-销售订单 */
        interface ISalesOrderViewView extends ibas.IBOViewView {
            showSalesOrder(viewData: bo.SalesOrder): void;
            showSalesOrderItems(salesOrderItems: bo.SalesOrderItem[]): void;
            showShippingAddresses(datas: bo.ShippingAddress[]): void;
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
            run(data: bo.SalesOrderItem, parent?: bo.SalesOrder): void;
            private editData;
            private dataParent;
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
        class SalesReturnEditApp extends ibas.BOEditService<ISalesReturnEditView, bo.SalesReturn> {
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
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 or 导入文件 */
            protected createData(clone: boolean | Blob): void;
            /** 选择销售退货客户事件 */
            private chooseSalesReturnCustomer;
            /** 选择销售退货价格清单事件 */
            private chooseSalesReturnPriceList;
            /** 更改行价格 */
            private changeSalesReturnItemPrice;
            /** 选择销售退货物料事件 */
            private chooseSalesReturnItemMaterial;
            private chooseSalesReturnItemWarehouse;
            /** 添加销售退货-行事件 */
            private addSalesReturnItem;
            /** 删除销售退货-行事件 */
            private removeSalesReturnItem;
            private batches;
            /** 选择物料批次信息 */
            private createSalesReturnLineMaterialBatch;
            private serials;
            /** 选择物料序列信息 */
            private createSalesReturnLineMaterialSerial;
            /** 选择销售退货项目-销售订单事件 */
            private chooseSalesReturnSalesOrder;
            /** 选择销售退货项目-销售交货事件 */
            private chooseSalesReturnSalesDelivery;
            /** 选择联系人 */
            private chooseSalesReturnContactPerson;
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
            /** 选择销售退货联系人信息 */
            chooseSalesReturnContactPersonEvent: Function;
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
        /** 销售退货编辑服务映射 */
        class SalesReturnEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.SalesReturn>>;
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
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-销售退货 */
        interface ISalesReturnViewView extends ibas.IBOViewView {
            showSalesReturn(viewData: bo.SalesReturn): void;
            showSalesReturnItems(salesOrderItems: bo.SalesReturnItem[]): void;
            showShippingAddresses(datas: bo.ShippingAddress[]): void;
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
        class SalesQuoteEditApp extends ibas.BOEditService<ISalesQuoteEditView, bo.SalesQuote> {
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
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 or 导入文件 */
            protected createData(clone: boolean | Blob): void;
            /** 选择销售报价客户事件 */
            private chooseSalesQuoteCustomer;
            /** 选择销售报价价格清单事件 */
            private chooseSalesQuotePriceList;
            /** 更改行价格 */
            private changeSalesQuoteItemPrice;
            /** 选择销售报价物料事件 */
            private chooseSalesQuoteItemMaterial;
            /** 添加销售报价-行事件 */
            private addSalesQuoteItem;
            /** 删除销售报价-行事件 */
            private removeSalesQuoteItem;
            /** 选择销售交货行仓库事件 */
            private chooseSalesQuoteItemWarehouse;
            /** 选择联系人 */
            private chooseSalesQuoteContactPerson;
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
            /** 选择销售报价联系人信息 */
            chooseSalesQuoteContactPersonEvent: Function;
            /** 选择销售报价价格清单事件 */
            chooseSalesQuotePriceListEvent: Function;
            /** 选择销售报价行物料事件 */
            chooseSalesQuoteItemMaterialEvent: Function;
            /** 选择销售报价仓库事件 */
            chooseSalesQuoteItemWarehouseEvent: Function;
            /** 显示销售报价额外信息事件 */
            showSalesQuoteItemExtraEvent: Function;
            /** 默认税组 */
            defaultTaxGroup: string;
        }
        /** 销售报价编辑服务映射 */
        class SalesQuoteEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.SalesQuote>>;
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
            run(data: bo.SalesQuoteItem, parent?: bo.SalesQuote): void;
            private editData;
            private dataParent;
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
        /** 选择应用-销售发票 */
        class SalesInvoiceChooseApp extends ibas.BOChooseService<ISalesInvoiceChooseView, bo.SalesInvoice> {
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
        /** 视图-销售发票 */
        interface ISalesInvoiceChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.SalesInvoice[]): void;
        }
        /** 销售发票选择服务映射 */
        class SalesInvoiceChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.SalesInvoice>>;
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
        /** 编辑应用-销售发票 */
        class SalesInvoiceEditApp extends ibas.BOEditService<ISalesInvoiceEditView, bo.SalesInvoice> {
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
            run(data: bo.SalesInvoice): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 or 导入文件 */
            protected createData(clone: boolean | Blob): void;
            /** 选择销售发票客户事件 */
            private chooseSalesInvoiceCustomer;
            /** 选择销售发票价格清单事件 */
            private chooseSalesInvoicePriceList;
            /** 更改行价格 */
            private changeSalesInvoiceItemPrice;
            /** 选择销售发票行物料事件 */
            private chooseSalesInvoiceItemMaterial;
            /** 选择销售发票行仓库事件 */
            private chooseSalesInvoiceItemWarehouse;
            /** 添加销售发票-行事件 */
            private addSalesInvoiceItem;
            /** 删除销售发票-行事件 */
            private removeSalesInvoiceItem;
            /** 选择销售发票行批次事件 */
            private chooseSalesInvoiceLineMaterialBatch;
            /** 选择销售发票序列事件 */
            private chooseSalesInvoiceLineMaterialSerial;
            /** 选择销售发票-销售订单事件 */
            private chooseSalesInvoiceSalesOrder;
            /** 选择销售发票-销售交货事件 */
            private chooseSalesInvoiceSalesDelivery;
            private receiptSalesInvoice;
            /** 选择联系人 */
            private chooseSalesInvoiceContactPerson;
            private editShippingAddresses;
        }
        /** 视图-销售发票 */
        interface ISalesInvoiceEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showSalesInvoice(data: bo.SalesInvoice): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加销售发票-行事件 */
            addSalesInvoiceItemEvent: Function;
            /** 删除销售发票-行事件 */
            removeSalesInvoiceItemEvent: Function;
            /** 显示数据 */
            showSalesInvoiceItems(datas: bo.SalesInvoiceItem[]): void;
            /** 选择销售发票客户事件 */
            chooseSalesInvoiceCustomerEvent: Function;
            /** 选择销售发票联系人信息 */
            chooseSalesInvoiceContactPersonEvent: Function;
            /** 选择销售发票价格清单事件 */
            chooseSalesInvoicePriceListEvent: Function;
            /** 选择销售发票物料事件 */
            chooseSalesInvoiceItemMaterialEvent: Function;
            /** 选择销售发票仓库事件 */
            chooseSalesInvoiceItemWarehouseEvent: Function;
            /** 选择销售发票单行物料批次事件 */
            chooseSalesInvoiceItemMaterialBatchEvent: Function;
            /** 选择销售发票行物料序列事件 */
            chooseSalesInvoiceItemMaterialSerialEvent: Function;
            /** 选择销售发票-销售订单事件 */
            chooseSalesInvoiceSalesOrderEvent: Function;
            /** 选择销售发票-销售交货事件 */
            chooseSalesInvoiceSalesDeliveryEvent: Function;
            /** 销售发票收款事件 */
            receiptSalesInvoiceEvent: Function;
            /** 编辑地址事件 */
            editShippingAddressesEvent: Function;
            /** 默认仓库 */
            defaultWarehouse: string;
            /** 默认税组 */
            defaultTaxGroup: string;
        }
        /** 销售发票编辑服务映射 */
        class SalesInvoiceEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.SalesInvoice>>;
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
        class SalesInvoiceFunc extends ibas.ModuleFunction {
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
        /** 列表应用-销售发票 */
        class SalesInvoiceListApp extends ibas.BOListApplication<ISalesInvoiceListView, bo.SalesInvoice> {
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
            protected viewData(data: bo.SalesInvoice): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.SalesInvoice): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.SalesInvoice | bo.SalesInvoice[]): void;
        }
        /** 视图-销售发票 */
        interface ISalesInvoiceListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.SalesInvoice[]): void;
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
        /** 查看应用-销售发票 */
        class SalesInvoiceViewApp extends ibas.BOViewService<ISalesInvoiceViewView, bo.SalesInvoice> {
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
            run(data: bo.SalesInvoice): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-销售发票 */
        interface ISalesInvoiceViewView extends ibas.IBOViewView {
            showSalesInvoice(viewData: bo.SalesInvoice): void;
            showSalesInvoiceItems(salesInvoiceItem: bo.SalesInvoiceItem[]): void;
            showShippingAddresses(datas: bo.ShippingAddress[]): void;
        }
        /** 销售发票连接服务映射 */
        class SalesInvoiceLinkServiceMapping extends ibas.BOLinkServiceMapping {
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
        /** 选择应用-销售贷项 */
        class SalesCreditNoteChooseApp extends ibas.BOChooseService<ISalesCreditNoteChooseView, bo.SalesCreditNote> {
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
        /** 视图-销售贷项 */
        interface ISalesCreditNoteChooseView extends ibas.IBOChooseView {
            /** 显示数据 */
            showData(datas: bo.SalesCreditNote[]): void;
        }
        /** 销售贷项选择服务映射 */
        class SalesCreditNoteChooseServiceMapping extends ibas.BOChooseServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOChooseServiceCaller<bo.SalesCreditNote>>;
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
        /** 编辑应用-销售贷项 */
        class SalesCreditNoteEditApp extends ibas.BOEditService<ISalesCreditNoteEditView, bo.SalesCreditNote> {
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
            run(data: bo.SalesCreditNote): void;
            /** 保存数据 */
            protected saveData(): void;
            /** 删除数据 */
            protected deleteData(): void;
            /** 新建数据，参数1：是否克隆 or 导入文件 */
            protected createData(clone: boolean | Blob): void;
            /** 选择销售贷项客户事件 */
            private chooseSalesCreditNoteCustomer;
            /** 选择销售贷项价格清单事件 */
            private chooseSalesCreditNotePriceList;
            /** 更改行价格 */
            private changeSalesCreditNoteItemPrice;
            /** 选择销售贷项行物料事件 */
            private chooseSalesCreditNoteItemMaterial;
            /** 选择销售贷项行仓库事件 */
            private chooseSalesCreditNoteItemWarehouse;
            /** 添加销售贷项-行事件 */
            private addSalesCreditNoteItem;
            /** 删除销售贷项-行事件 */
            private removeSalesCreditNoteItem;
            /** 选择销售贷项行批次事件 */
            private chooseSalesCreditNoteLineMaterialBatch;
            /** 选择销售贷项序列事件 */
            private chooseSalesCreditNoteLineMaterialSerial;
            /** 选择销售贷项-销售退货事件 */
            private chooseSalesCreditNoteSalesReturn;
            /** 选择销售贷项-销售发票事件 */
            private chooseSalesCreditNoteSalesInvoice;
            /** 选择联系人 */
            private chooseSalesCreditNoteContactPerson;
            private editShippingAddresses;
        }
        /** 视图-销售贷项 */
        interface ISalesCreditNoteEditView extends ibas.IBOEditView {
            /** 显示数据 */
            showSalesCreditNote(data: bo.SalesCreditNote): void;
            /** 删除数据事件 */
            deleteDataEvent: Function;
            /** 新建数据事件，参数1：是否克隆 */
            createDataEvent: Function;
            /** 添加销售贷项-行事件 */
            addSalesCreditNoteItemEvent: Function;
            /** 删除销售贷项-行事件 */
            removeSalesCreditNoteItemEvent: Function;
            /** 显示数据 */
            showSalesCreditNoteItems(datas: bo.SalesCreditNoteItem[]): void;
            /** 选择销售贷项客户事件 */
            chooseSalesCreditNoteCustomerEvent: Function;
            /** 选择销售贷项联系人信息 */
            chooseSalesCreditNoteContactPersonEvent: Function;
            /** 选择销售贷项价格清单事件 */
            chooseSalesCreditNotePriceListEvent: Function;
            /** 选择销售贷项物料事件 */
            chooseSalesCreditNoteItemMaterialEvent: Function;
            /** 选择销售贷项仓库事件 */
            chooseSalesCreditNoteItemWarehouseEvent: Function;
            /** 选择销售贷项单行物料批次事件 */
            chooseSalesCreditNoteItemMaterialBatchEvent: Function;
            /** 选择销售贷项行物料序列事件 */
            chooseSalesCreditNoteItemMaterialSerialEvent: Function;
            /** 选择销售贷项-销售退货事件 */
            chooseSalesCreditNoteSalesReturnEvent: Function;
            /** 选择销售贷项-销售发票事件 */
            chooseSalesCreditNoteSalesInvoiceEvent: Function;
            /** 编辑地址事件 */
            editShippingAddressesEvent: Function;
            /** 默认仓库 */
            defaultWarehouse: string;
        }
        /** 销售贷项编辑服务映射 */
        class SalesCreditNoteEditServiceMapping extends ibas.BOEditServiceMapping {
            /** 构造函数 */
            constructor();
            /** 创建服务实例 */
            create(): ibas.IService<ibas.IBOEditServiceCaller<bo.SalesCreditNote>>;
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
        class SalesCreditNoteFunc extends ibas.ModuleFunction {
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
        /** 列表应用-销售贷项 */
        class SalesCreditNoteListApp extends ibas.BOListApplication<ISalesCreditNoteListView, bo.SalesCreditNote> {
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
            protected viewData(data: bo.SalesCreditNote): void;
            /** 编辑数据，参数：目标数据 */
            protected editData(data: bo.SalesCreditNote): void;
            /** 删除数据，参数：目标数据集合 */
            protected deleteData(data: bo.SalesCreditNote | bo.SalesCreditNote[]): void;
        }
        /** 视图-销售贷项 */
        interface ISalesCreditNoteListView extends ibas.IBOListView {
            /** 编辑数据事件，参数：编辑对象 */
            editDataEvent: Function;
            /** 删除数据事件，参数：删除对象集合 */
            deleteDataEvent: Function;
            /** 显示数据 */
            showData(datas: bo.SalesCreditNote[]): void;
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
        /** 查看应用-销售贷项 */
        class SalesCreditNoteViewApp extends ibas.BOViewService<ISalesCreditNoteViewView, bo.SalesCreditNote> {
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
            run(data: bo.SalesCreditNote): void;
            /** 查询数据 */
            protected fetchData(criteria: ibas.ICriteria | string): void;
        }
        /** 视图-销售贷项 */
        interface ISalesCreditNoteViewView extends ibas.IBOViewView {
            showSalesCreditNote(viewData: bo.SalesCreditNote): void;
            showSalesCreditNoteItems(salesCreditNoteItem: bo.SalesCreditNoteItem[]): void;
            showShippingAddresses(datas: bo.ShippingAddress[]): void;
        }
        /** 销售贷项连接服务映射 */
        class SalesCreditNoteLinkServiceMapping extends ibas.BOLinkServiceMapping {
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
declare namespace sales {
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

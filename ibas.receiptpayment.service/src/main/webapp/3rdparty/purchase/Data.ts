/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    /** 模块-标识 */
    export const CONSOLE_ID: string = "de9278d9-4914-45a5-8418-9c609118d03f";
    /** 模块-名称 */
    export const CONSOLE_NAME: string = "Purchase";
    /** 模块-版本 */
    export const CONSOLE_VERSION: string = "0.1.0";

    export namespace bo {
        /** 业务仓库名称 */
        export const BO_REPOSITORY_PURCHASE: string = ibas.strings.format(ibas.MODULE_REPOSITORY_NAME_TEMPLATE, CONSOLE_NAME);
        /** 业务对象编码-采购收货 */
        export const BO_CODE_PURCHASEDELIVERY: string = "${Company}_PH_PURCHDELIVERY";
        /** 业务对象编码-采购订单 */
        export const BO_CODE_PURCHASEORDER: string = "${Company}_PH_PURCHORDER";
        /** 业务对象编码-采购退货 */
        export const BO_CODE_PURCHASERETURN: string = "${Company}_PH_PURCHRETURN";
        /** 业务对象编码-送货地址 */
        export const BO_CODE_SHIPPINGADDRESS: string = "${Company}_PH_SHIPADDRESS";

        /** 运输状态 */
        export enum emShippingStatus {
            /**
             * 等待
             */
            WAITING,
            /**
             * 运输中
             */
            SHIPPING,
            /**
             * 已送达
             */
            SHIPPED,
        }
    }
}
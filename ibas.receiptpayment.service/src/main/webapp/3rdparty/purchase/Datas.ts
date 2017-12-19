/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

// 共享的数据
import {
    strings,
    MODULE_REPOSITORY_NAME_TEMPLATE,
} from "ibas/index";

/** 模块-标识 */
export const CONSOLE_ID: string = "de9278d9-4914-45a5-8418-9c609118d03f";
/** 模块-名称 */
export const CONSOLE_NAME: string = "Purchase";
/** 模块-版本 */
export const CONSOLE_VERSION: string = "0.1.0";
/** 业务仓库名称 */
export const BO_REPOSITORY_PURCHASE: string = strings.format(MODULE_REPOSITORY_NAME_TEMPLATE, CONSOLE_NAME);
/** 业务对象编码-采购交货 */
export const BO_CODE_PURCHASEDELIVERY: string = "${Company}_PH_PURCHDELIVERY";
/** 业务对象编码-采购订单 */
export const BO_CODE_PURCHASEORDER: string = "${Company}_PH_PURCHORDER";
/** 业务对象编码-采购退货 */
export const BO_CODE_PURCHASERETURN: string = "${Company}_PH_PURCHRETURN";

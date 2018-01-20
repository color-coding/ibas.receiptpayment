/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

// 共享的数据
import {
    strings, dates,
    List, ArrayList, ICondition, Condition,
    emConditionOperation, emConditionRelationship, emYesNo,
    MODULE_REPOSITORY_NAME_TEMPLATE,
} from "ibas/index";
import * as mm from "3rdparty/materials/index";

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

/** 查询条件 */
export namespace conditions {
    export namespace material {
        /** 采购物料的查询条件 */
        export function create(): List<ICondition> {
            let condition: ICondition;
            let conditions: List<ICondition> = mm.conditions.material.create();
            // 采购物料
            condition = new Condition();
            condition.relationship = emConditionRelationship.AND;
            condition.alias = "purchaseItem";
            condition.operation = emConditionOperation.EQUAL;
            condition.value = emYesNo.YES.toString();
            conditions.add(condition);
            return conditions;
        }
    }
}
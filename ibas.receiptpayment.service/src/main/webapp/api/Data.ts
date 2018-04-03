/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace receiptpayment {
    /** 模块-标识 */
    export const CONSOLE_ID: string = "77d894db-e7f7-4fdd-910c-7835612407be";
    /** 模块-名称 */
    export const CONSOLE_NAME: string = "ReceiptPayment";
    /** 模块-版本 */
    export const CONSOLE_VERSION: string = "0.1.0";

    export namespace bo {
        /** 业务仓库名称 */
        export const BO_REPOSITORY_RECEIPTPAYMENT: string = ibas.strings.format(ibas.MODULE_REPOSITORY_NAME_TEMPLATE, CONSOLE_NAME);
        /** 业务对象编码-付款 */
        export const BO_CODE_PAYMENT: string = "${Company}_RP_PAYMENT";
        /** 业务对象编码-收款 */
        export const BO_CODE_RECEIPT: string = "${Company}_RP_RECEIPT";
        /** 业务对象编码-资产充值 */
        export const BO_CODE_ASSETRECHARGE: string = "${Company}_RP_ASRECHARGE";
    }
}
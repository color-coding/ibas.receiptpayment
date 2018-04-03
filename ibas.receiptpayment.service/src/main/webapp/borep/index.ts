/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="../3rdparty/ibas/index.d.ts" />
/// <reference path="../3rdparty/businesspartner/index.ts" />
/// <reference path="../3rdparty/purchase/index.ts" />
/// <reference path="../3rdparty/sales/index.ts" />
/// <reference path="../api/index.ts" />
/// <reference path="./bo/Payment.ts" />
/// <reference path="./bo/Receipt.ts" />
/// <reference path="./bo/AssetRecharge.ts" />
/// <reference path="./DataConverter.ts" />
/// <reference path="./BORepository.ts" />

namespace receiptpayment {
    export namespace bo {
        // 注册业务对象仓库到工厂
        boFactory.register(BO_REPOSITORY_RECEIPTPAYMENT, BORepositoryReceiptPayment);
        // 注册业务对象到工厂
        boFactory.register(Payment.BUSINESS_OBJECT_CODE, Payment);
        boFactory.register(Receipt.BUSINESS_OBJECT_CODE, Receipt);
        boFactory.register(AssetRecharge.BUSINESS_OBJECT_CODE, AssetRecharge);
    }
}
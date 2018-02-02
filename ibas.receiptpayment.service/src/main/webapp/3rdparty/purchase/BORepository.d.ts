/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import {
    FetchCaller,
    SaveCaller,
    UploadFileCaller,
    DownloadFileCaller,
    FileData,
    IBORepositoryApplication
} from "ibas/index";
import * as bo from "./bo/index"

/** 业务仓库 */
export interface IBORepositoryPurchase extends IBORepositoryApplication {

    /**
     * 上传文件
     * @param caller 调用者
     */
    upload(caller: UploadFileCaller<FileData>);
    /**
     * 下载文件
     * @param caller 调用者
     */
    download(caller: DownloadFileCaller<Blob>);
    /**
     * 查询 采购收货
     * @param fetcher 查询者
     */
    fetchPurchaseDelivery(fetcher: FetchCaller<bo.IPurchaseDelivery>);
    /**
     * 保存 采购收货
     * @param saver 保存者
     */
    savePurchaseDelivery(saver: SaveCaller<bo.IPurchaseDelivery>);

    /**
     * 查询 采购订单
     * @param fetcher 查询者
     */
    fetchPurchaseOrder(fetcher: FetchCaller<bo.IPurchaseOrder>);
    /**
     * 保存 采购订单
     * @param saver 保存者
     */
    savePurchaseOrder(saver: SaveCaller<bo.IPurchaseOrder>);

    /**
     * 查询 采购退货
     * @param fetcher 查询者
     */
    fetchPurchaseReturn(fetcher: FetchCaller<bo.IPurchaseReturn>);
    /**
     * 保存 采购退货
     * @param saver 保存者
     */
    savePurchaseReturn(saver: SaveCaller<bo.IPurchaseReturn>);


}

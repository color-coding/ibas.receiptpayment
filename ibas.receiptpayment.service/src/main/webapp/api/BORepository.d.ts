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
    IBORepositoryApplication,
} from "ibas/index";
import * as bo from "./bo/index"

/** 业务仓库 */
export interface IBORepositoryReceiptPayment extends IBORepositoryApplication {

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
     * 查询 付款
     * @param fetcher 查询者
     */
    fetchPayment(fetcher: FetchCaller<bo.IPayment>);
    /**
     * 保存 付款
     * @param saver 保存者
     */
    savePayment(saver: SaveCaller<bo.IPayment>);

    /**
     * 查询 收款
     * @param fetcher 查询者
     */
    fetchReceipt(fetcher: FetchCaller<bo.IReceipt>);
    /**
     * 保存 收款
     * @param saver 保存者
     */
    saveReceipt(saver: SaveCaller<bo.IReceipt>);


}

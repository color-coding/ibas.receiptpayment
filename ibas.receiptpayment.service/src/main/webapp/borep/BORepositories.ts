/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import * as bo from "./bo/index";
import { IBORepositoryReceiptPayment, BO_REPOSITORY_RECEIPTPAYMENT } from "../api/index";
import { DataConverter4RP } from "./DataConverters";

/** 业务对象仓库 */
export class BORepositoryReceiptPayment extends ibas.BORepositoryApplication implements IBORepositoryReceiptPayment {

    /** 创建此模块的后端与前端数据的转换者 */
    protected createConverter(): ibas.IDataConverter {
        return new DataConverter4RP;
    }
    /**
     * 上传文件
     * @param caller 调用者
     */
    upload(caller: ibas.UploadFileCaller<ibas.FileData>): void {
        if (!this.address.endsWith("/")) { this.address += "/"; }
        let fileRepository: ibas.FileRepositoryUploadAjax = new ibas.FileRepositoryUploadAjax();
        fileRepository.address = this.address.replace("/services/rest/data/", "/services/rest/file/");
        fileRepository.token = this.token;
        fileRepository.converter = this.createConverter();
        fileRepository.upload("upload", caller);
    }
    /**
     * 下载文件
     * @param caller 调用者
     */
    download(caller: ibas.DownloadFileCaller<Blob>): void {
        if (!this.address.endsWith("/")) { this.address += "/"; }
        let fileRepository: ibas.FileRepositoryDownloadAjax = new ibas.FileRepositoryDownloadAjax();
        fileRepository.address = this.address.replace("/services/rest/data/", "/services/rest/file/");
        fileRepository.token = this.token;
        fileRepository.converter = this.createConverter();
        fileRepository.download("download", caller);
    }
    /**
     * 查询 付款
     * @param fetcher 查询者
     */
    fetchPayment(fetcher: ibas.FetchCaller<bo.Payment>): void {
        super.fetch(bo.Payment.name, fetcher);
    }
    /**
     * 保存 付款
     * @param saver 保存者
     */
    savePayment(saver: ibas.SaveCaller<bo.Payment>): void {
        super.save(bo.Payment.name, saver);
    }

    /**
     * 查询 收款
     * @param fetcher 查询者
     */
    fetchReceipt(fetcher: ibas.FetchCaller<bo.Receipt>): void {
        super.fetch(bo.Receipt.name, fetcher);
    }
    /**
     * 保存 收款
     * @param saver 保存者
     */
    saveReceipt(saver: ibas.SaveCaller<bo.Receipt>): void {
        super.save(bo.Receipt.name, saver);
    }

}
// 注册业务对象仓库到工厂
ibas.boFactory.register(BO_REPOSITORY_RECEIPTPAYMENT, BORepositoryReceiptPayment);

/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace purchase {
    export namespace bo {

        /** 业务仓库 */
        export interface IBORepositoryPurchase extends ibas.IBORepositoryApplication {

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
             * 查询 采购收货
             * @param fetcher 查询者
             */
            fetchPurchaseDelivery(fetcher: ibas.IFetchCaller<bo.IPurchaseDelivery>): void;
            /**
             * 保存 采购收货
             * @param saver 保存者
             */
            savePurchaseDelivery(saver: ibas.ISaveCaller<bo.IPurchaseDelivery>): void;

            /**
             * 查询 采购订单
             * @param fetcher 查询者
             */
            fetchPurchaseOrder(fetcher: ibas.IFetchCaller<bo.IPurchaseOrder>): void;
            /**
             * 保存 采购订单
             * @param saver 保存者
             */
            savePurchaseOrder(saver: ibas.ISaveCaller<bo.IPurchaseOrder>): void;

            /**
             * 查询 采购退货
             * @param fetcher 查询者
             */
            fetchPurchaseReturn(fetcher: ibas.IFetchCaller<bo.IPurchaseReturn>): void;
            /**
             * 保存 采购退货
             * @param saver 保存者
             */
            savePurchaseReturn(saver: ibas.ISaveCaller<bo.IPurchaseReturn>): void;

        }
    }
}

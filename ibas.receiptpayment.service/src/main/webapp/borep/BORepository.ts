/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace receiptpayment {
    export namespace bo {
        /** 业务对象仓库 */
        export class BORepositoryReceiptPayment extends ibas.BORepositoryApplication implements IBORepositoryReceiptPayment {

            /** 创建此模块的后端与前端数据的转换者 */
            protected createConverter(): ibas.IDataConverter {
                return new DataConverter;
            }
            /**
             * 上传文件
             * @param caller 调用者
             */
            upload(caller: ibas.IUploadFileCaller<ibas.FileData>): void {
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
            download(caller: ibas.IDownloadFileCaller<Blob>): void {
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
            fetchPayment(fetcher: ibas.IFetchCaller<bo.Payment>): void {
                super.fetch(bo.Payment.name, fetcher);
            }
            /**
             * 保存 付款
             * @param saver 保存者
             */
            savePayment(saver: ibas.ISaveCaller<bo.Payment>): void {
                super.save(bo.Payment.name, saver);
            }

            /**
             * 查询 收款
             * @param fetcher 查询者
             */
            fetchReceipt(fetcher: ibas.IFetchCaller<bo.Receipt>): void {
                super.fetch(bo.Receipt.name, fetcher);
            }
            /**
             * 保存 收款
             * @param saver 保存者
             */
            saveReceipt(saver: ibas.ISaveCaller<bo.Receipt>): void {
                super.save(bo.Receipt.name, saver);
            }

            /**
             * 查询 资产充值
             * @param fetcher 查询者
             */
            fetchAssetRecharge(fetcher: ibas.IFetchCaller<bo.AssetRecharge>): void {
                super.fetch(bo.AssetRecharge.name, fetcher);
            }
            /**
             * 保存 资产充值
             * @param saver 保存者
             */
            saveAssetRecharge(saver: ibas.ISaveCaller<bo.AssetRecharge>): void {
                super.save(bo.AssetRecharge.name, saver);
            }

            /**
             * 查询 内部对账
             * @param fetcher 查询者
             */
            fetchInternalReconciliation(fetcher: ibas.IFetchCaller<businesspartner.bo.InternalReconciliation>): void {
                super.fetch(businesspartner.bo.InternalReconciliation.name, fetcher);
            }
            /**
             * 保存 内部对账
             * @param saver 保存者
             */
            saveInternalReconciliation(saver: ibas.ISaveCaller<businesspartner.bo.InternalReconciliation>): void {
                super.save(businesspartner.bo.InternalReconciliation.name, saver);
            }
        }
    }
}
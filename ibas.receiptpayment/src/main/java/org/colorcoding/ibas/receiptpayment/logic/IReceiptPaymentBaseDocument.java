package org.colorcoding.ibas.receiptpayment.logic;

import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;

public interface IReceiptPaymentBaseDocument extends IBusinessLogicContract {

    /**
     * 获取-基于类型
     *
     * @return 值
     */
    String getBaseDocumentType();
    /**
     * 获取-基于标识
     *
     * @return 值
     */
    Integer getBaseDocumentEntry();
    /**
     * 获取-基于行号
     *
     * @return 值
     */
}

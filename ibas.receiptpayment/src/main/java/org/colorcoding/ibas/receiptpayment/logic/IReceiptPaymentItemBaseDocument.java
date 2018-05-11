package org.colorcoding.ibas.receiptpayment.logic;

import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;

/**
 * 收款的基于单据
 *
 * @author Niuren.Zhu
 *
 */
public interface IReceiptPaymentItemBaseDocument extends IReceiptPaymentBaseDocument {

    Integer getBaseDocumentLineId();
    /**
     * 获取-订单金额
     *
     * @return 值
     */
}
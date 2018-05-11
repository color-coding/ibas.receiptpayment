package org.colorcoding.ibas.receiptpayment.logic;

import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.data.emDocumentStatus;
import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;

public interface IPaymentArriveContract extends IBusinessLogicContract,IReceiptPaymentItemBaseDocument {

    Decimal getOrderFee();
    /**
     * 获取-支付状态
     *
     * @return 值
     */
    boolean getTradeSuccess();
    /**
     * 获取-单据状态
     *
     * @return 值
     */
    emDocumentStatus getDocumentStatus();
}
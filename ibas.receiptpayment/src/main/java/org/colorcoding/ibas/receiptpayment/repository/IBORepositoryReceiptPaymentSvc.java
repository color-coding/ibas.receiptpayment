package org.colorcoding.ibas.receiptpayment.repository;

import org.colorcoding.ibas.bobas.common.*;
import org.colorcoding.ibas.bobas.repository.*;
import org.colorcoding.ibas.receiptpayment.bo.payment.*;
import org.colorcoding.ibas.receiptpayment.bo.receipt.*;

/**
* ReceiptPayment仓库服务
*/
public interface IBORepositoryReceiptPaymentSvc extends IBORepositorySmartService {


    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-付款
     * @param criteria 查询
     * @param token 口令
     * @return 操作结果
     */
    OperationResult<Payment> fetchPayment(ICriteria criteria, String token);

    /**
     * 保存-付款
     * @param bo 对象实例
     * @param token 口令
     * @return 操作结果
     */
    OperationResult<Payment> savePayment(Payment bo, String token);

    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-收款
     * @param criteria 查询
     * @param token 口令
     * @return 操作结果
     */
    OperationResult<Receipt> fetchReceipt(ICriteria criteria, String token);

    /**
     * 保存-收款
     * @param bo 对象实例
     * @param token 口令
     * @return 操作结果
     */
    OperationResult<Receipt> saveReceipt(Receipt bo, String token);

    //--------------------------------------------------------------------------------------------//

}

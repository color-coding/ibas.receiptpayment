package org.colorcoding.ibas.receiptpayment.repository;

import org.colorcoding.ibas.bobas.common.*;
import org.colorcoding.ibas.bobas.repository.*;
import org.colorcoding.ibas.receiptpayment.bo.payment.*;
import org.colorcoding.ibas.receiptpayment.bo.receipt.*;

/**
* ReceiptPayment仓库应用
*/
public interface IBORepositoryReceiptPaymentApp extends IBORepositoryApplication {

    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-付款
     * @param criteria 查询
     * @return 操作结果
     */
    IOperationResult<IPayment> fetchPayment(ICriteria criteria);

    /**
     * 保存-付款
     * @param bo 对象实例
     * @return 操作结果
     */
    IOperationResult<IPayment> savePayment(IPayment bo);

    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-收款
     * @param criteria 查询
     * @return 操作结果
     */
    IOperationResult<IReceipt> fetchReceipt(ICriteria criteria);

    /**
     * 保存-收款
     * @param bo 对象实例
     * @return 操作结果
     */
    IOperationResult<IReceipt> saveReceipt(IReceipt bo);

    //--------------------------------------------------------------------------------------------//

}

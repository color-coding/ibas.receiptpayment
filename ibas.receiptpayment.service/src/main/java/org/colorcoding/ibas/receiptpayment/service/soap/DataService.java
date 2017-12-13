package org.colorcoding.ibas.receiptpayment.service.soap;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

import org.colorcoding.ibas.bobas.common.*;
import org.colorcoding.ibas.bobas.cxf.WebServicePath;
import org.colorcoding.ibas.receiptpayment.repository.*;
import org.colorcoding.ibas.receiptpayment.bo.payment.*;
import org.colorcoding.ibas.receiptpayment.bo.receipt.*;

/**
* ReceiptPayment 数据服务JSON
*/
@WebService
@WebServicePath("data")
public class DataService extends BORepositoryReceiptPayment {

    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-付款
     * @param criteria 查询
     * @param token 口令
     * @return 操作结果
     */
    @WebMethod
    public OperationResult<Payment> fetchPayment(@WebParam(name = "criteria") Criteria criteria, @WebParam(name = "token") String token) {
        return super.fetchPayment(criteria, token);
    }

    /**
     * 保存-付款
     * @param bo 对象实例
     * @param token 口令
     * @return 操作结果
     */
    @WebMethod
    public OperationResult<Payment> savePayment(@WebParam(name = "bo") Payment bo, @WebParam(name = "token") String token) {
        return super.savePayment(bo, token);
    }

    //--------------------------------------------------------------------------------------------//
    /**
     * 查询-收款
     * @param criteria 查询
     * @param token 口令
     * @return 操作结果
     */
    @WebMethod
    public OperationResult<Receipt> fetchReceipt(@WebParam(name = "criteria") Criteria criteria, @WebParam(name = "token") String token) {
        return super.fetchReceipt(criteria, token);
    }

    /**
     * 保存-收款
     * @param bo 对象实例
     * @param token 口令
     * @return 操作结果
     */
    @WebMethod
    public OperationResult<Receipt> saveReceipt(@WebParam(name = "bo") Receipt bo, @WebParam(name = "token") String token) {
        return super.saveReceipt(bo, token);
    }

    //--------------------------------------------------------------------------------------------//

}

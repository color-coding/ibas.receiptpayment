package org.colorcoding.ibas.receiptpayment.service.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.OperationResult;
import org.colorcoding.ibas.businesspartner.bo.internalreconciliation.InternalReconciliation;
import org.colorcoding.ibas.receiptpayment.MyConfiguration;
import org.colorcoding.ibas.receiptpayment.bo.assetrecharge.AssetRecharge;
import org.colorcoding.ibas.receiptpayment.bo.payment.Payment;
import org.colorcoding.ibas.receiptpayment.bo.receipt.Receipt;
import org.colorcoding.ibas.receiptpayment.repository.BORepositoryReceiptPayment;

/**
 * ReceiptPayment 数据服务JSON
 */
@Path("data")
public class DataService extends BORepositoryReceiptPayment {

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-付款
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchPayment")
	public OperationResult<Payment> fetchPayment(Criteria criteria, @HeaderParam("authorization") String authorization,
			@QueryParam("token") String token) {
		return super.fetchPayment(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-付款
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("savePayment")
	public OperationResult<Payment> savePayment(Payment bo, @HeaderParam("authorization") String authorization,
			@QueryParam("token") String token) {
		return super.savePayment(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-收款
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchReceipt")
	public OperationResult<Receipt> fetchReceipt(Criteria criteria, @HeaderParam("authorization") String authorization,
			@QueryParam("token") String token) {
		return super.fetchReceipt(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-收款
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveReceipt")
	public OperationResult<Receipt> saveReceipt(Receipt bo, @HeaderParam("authorization") String authorization,
			@QueryParam("token") String token) {
		return super.saveReceipt(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-资产充值
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchAssetRecharge")
	public OperationResult<AssetRecharge> fetchAssetRecharge(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchAssetRecharge(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-资产充值
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveAssetRecharge")
	public OperationResult<AssetRecharge> saveAssetRecharge(AssetRecharge bo,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.saveAssetRecharge(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-内部对账
	 * 
	 * @param criteria 查询
	 * @param token    口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("fetchInternalReconciliation")
	public OperationResult<InternalReconciliation> fetchInternalReconciliation(Criteria criteria,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.fetchInternalReconciliation(criteria, MyConfiguration.optToken(authorization, token));
	}

	/**
	 * 保存-内部对账
	 * 
	 * @param bo    对象实例
	 * @param token 口令
	 * @return 操作结果
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("saveInternalReconciliation")
	public OperationResult<InternalReconciliation> saveInternalReconciliation(InternalReconciliation bo,
			@HeaderParam("authorization") String authorization, @QueryParam("token") String token) {
		return super.saveInternalReconciliation(bo, MyConfiguration.optToken(authorization, token));
	}

	// --------------------------------------------------------------------------------------------//

}

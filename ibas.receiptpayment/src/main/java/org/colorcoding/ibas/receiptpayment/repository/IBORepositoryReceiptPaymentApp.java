package org.colorcoding.ibas.receiptpayment.repository;

import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.repository.IBORepositoryApplication;
import org.colorcoding.ibas.businesspartner.bo.internalreconciliation.IInternalReconciliation;
import org.colorcoding.ibas.receiptpayment.bo.assetrecharge.IAssetRecharge;
import org.colorcoding.ibas.receiptpayment.bo.payment.IPayment;
import org.colorcoding.ibas.receiptpayment.bo.receipt.IReceipt;

/**
 * ReceiptPayment仓库应用
 */
public interface IBORepositoryReceiptPaymentApp extends IBORepositoryApplication {

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-付款
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<IPayment> fetchPayment(ICriteria criteria);

	/**
	 * 保存-付款
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<IPayment> savePayment(IPayment bo);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-收款
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<IReceipt> fetchReceipt(ICriteria criteria);

	/**
	 * 保存-收款
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<IReceipt> saveReceipt(IReceipt bo);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-资产充值
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<IAssetRecharge> fetchAssetRecharge(ICriteria criteria);

	/**
	 * 保存-资产充值
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<IAssetRecharge> saveAssetRecharge(IAssetRecharge bo);

	// --------------------------------------------------------------------------------------------//
	/**
	 * 查询-内部对账
	 * 
	 * @param criteria 查询
	 * @return 操作结果
	 */
	IOperationResult<IInternalReconciliation> fetchInternalReconciliation(ICriteria criteria);

	/**
	 * 保存-内部对账
	 * 
	 * @param bo 对象实例
	 * @return 操作结果
	 */
	IOperationResult<IInternalReconciliation> saveInternalReconciliation(IInternalReconciliation bo);
	// --------------------------------------------------------------------------------------------//

}

package org.colorcoding.ibas.receiptpayment.test.bo;

import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.organization.OrganizationFactory;
import org.colorcoding.ibas.receiptpayment.bo.payment.IPaymentItem;
import org.colorcoding.ibas.receiptpayment.bo.payment.Payment;
import org.colorcoding.ibas.receiptpayment.repository.BORepositoryReceiptPayment;
import org.colorcoding.ibas.receiptpayment.repository.IBORepositoryReceiptPaymentApp;

import junit.framework.TestCase;

/**
 * 付款 测试
 * 
 */
public class testPayment extends TestCase {
	/**
	 * 获取连接口令
	 */
	String getToken() {
		return OrganizationFactory.SYSTEM_USER.getToken();
	}

	/**
	 * 基本项目测试
	 * 
	 * @throws Exception
	 */
	public void testBasicItems() throws Exception {
		Payment payment = new Payment();
		System.out.println(String.format("new bo: %s", payment.toString()));
		// 测试属性赋值

		// 测试付款-项目
		IPaymentItem paymentItem = payment.getPaymentItems().create();
		System.out.println(String.format("new item: %s", paymentItem.toString()));
		// 测试属性赋值

		// 测试对象的保存和查询
		IOperationResult<?> operationResult = null;
		ICriteria criteria = null;
		IBORepositoryReceiptPaymentApp boRepository = new BORepositoryReceiptPayment();
		// 设置用户口令
		boRepository.setUserToken(this.getToken());

		// 测试保存
		operationResult = boRepository.savePayment(payment);
		assertEquals(operationResult.getMessage(), operationResult.getResultCode(), 0);
		Payment boSaved = (Payment) operationResult.getResultObjects().firstOrDefault();

		// 测试查询
		criteria = boSaved.getCriteria();
		criteria.setResultCount(10);
		operationResult = boRepository.fetchPayment(criteria);
		assertEquals(operationResult.getMessage(), operationResult.getResultCode(), 0);

	}

}

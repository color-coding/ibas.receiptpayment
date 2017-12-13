package org.colorcoding.ibas.receiptpayment.test.bo;

import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.organization.OrganizationFactory;
import org.colorcoding.ibas.receiptpayment.bo.receipt.IReceiptItem;
import org.colorcoding.ibas.receiptpayment.bo.receipt.Receipt;
import org.colorcoding.ibas.receiptpayment.repository.BORepositoryReceiptPayment;
import org.colorcoding.ibas.receiptpayment.repository.IBORepositoryReceiptPaymentApp;

import junit.framework.TestCase;

/**
 * 收款 测试
 * 
 */
public class testReceipt extends TestCase {
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
		Receipt receipt = new Receipt();
		System.out.println(String.format("new bo: %s", receipt.toString()));
		// 测试属性赋值

		// 测试收款-项目
		IReceiptItem receiptItem = receipt.getReceiptItems().create();
		System.out.println(String.format("new item: %s", receiptItem.toString()));
		// 测试属性赋值

		// 测试对象的保存和查询
		IOperationResult<?> operationResult = null;
		ICriteria criteria = null;
		IBORepositoryReceiptPaymentApp boRepository = new BORepositoryReceiptPayment();
		// 设置用户口令
		boRepository.setUserToken(this.getToken());

		// 测试保存
		operationResult = boRepository.saveReceipt(receipt);
		assertEquals(operationResult.getMessage(), operationResult.getResultCode(), 0);
		Receipt boSaved = (Receipt) operationResult.getResultObjects().firstOrDefault();

		// 测试查询
		criteria = boSaved.getCriteria();
		criteria.setResultCount(10);
		operationResult = boRepository.fetchReceipt(criteria);
		assertEquals(operationResult.getMessage(), operationResult.getResultCode(), 0);

	}

}

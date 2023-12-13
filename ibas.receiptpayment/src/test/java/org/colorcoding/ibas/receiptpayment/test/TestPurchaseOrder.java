package org.colorcoding.ibas.receiptpayment.test;

import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.organization.OrganizationFactory;
import org.colorcoding.ibas.purchase.bo.purchaseorder.IPurchaseOrderItem;
import org.colorcoding.ibas.purchase.bo.purchaseorder.PurchaseOrder;
import org.colorcoding.ibas.purchase.repository.BORepositoryPurchase;
import org.colorcoding.ibas.purchase.repository.IBORepositoryPurchaseApp;
import org.colorcoding.ibas.sales.MyConfiguration;
import org.colorcoding.ibas.sales.bo.salesorder.SalesOrder;

import junit.framework.TestCase;

/**
 * 付款 测试
 * 
 */
public class TestPurchaseOrder extends TestCase {
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
		PurchaseOrder order = new PurchaseOrder();
		order.setSupplierCode("V50000");
		order.setSupplierName("南方计算机系统有限公司");
		// 测试付款-项目
		IPurchaseOrderItem orderItem = order.getPurchaseOrderItems().create();
		orderItem.setBaseDocumentType(MyConfiguration.applyVariables(SalesOrder.BUSINESS_OBJECT_CODE));
		orderItem.setBaseDocumentEntry(1);
		orderItem.setBaseDocumentLineId(2);
		orderItem.setItemCode("P10002");
		orderItem.setItemDescription("PC - P4 2.4G, DDR 1024M, 400G HD");
		orderItem.setQuantity(1);
		orderItem.setWarehouse("WH0001");
		// 测试对象的保存和查询
		IOperationResult<?> operationResult = null;
		IBORepositoryPurchaseApp boRepository = new BORepositoryPurchase();
		// 设置用户口令
		boRepository.setUserToken(this.getToken());

		// 测试保存
		operationResult = boRepository.savePurchaseOrder(order);
		assertEquals(operationResult.getMessage(), operationResult.getResultCode(), 0);
	}

}

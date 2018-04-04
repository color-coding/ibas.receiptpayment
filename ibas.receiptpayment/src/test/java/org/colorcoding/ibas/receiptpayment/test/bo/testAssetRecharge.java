package org.colorcoding.ibas.receiptpayment.test.bo;

import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.organization.OrganizationFactory;
import org.colorcoding.ibas.businesspartner.data.emBusinessPartnerType;
import org.colorcoding.ibas.receiptpayment.bo.assetrecharge.AssetRecharge;
import org.colorcoding.ibas.receiptpayment.bo.assetrecharge.IAssetRechargeItem;
import org.colorcoding.ibas.receiptpayment.repository.BORepositoryReceiptPayment;
import org.colorcoding.ibas.receiptpayment.repository.IBORepositoryReceiptPaymentApp;

import junit.framework.TestCase;

/**
 * 付款 测试
 * 
 */
public class testAssetRecharge extends TestCase {
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
		AssetRecharge recharge = new AssetRecharge();
		recharge.setBusinessPartnerType(emBusinessPartnerType.CUSTOMER);
		recharge.setBusinessPartnerCode("C70000");
		recharge.setServiceCode("9c4eeef1-3a1d-5bf3-f1c9-3bafe51fd91c");
		recharge.setAmount("100");
		System.out.println(String.format("new bo: %s", recharge.toString()));
		// 测试属性赋值

		// 测试付款-项目
		IAssetRechargeItem rechargeItem = recharge.getAssetRechargeItems().create();
		rechargeItem.setMode("CASH");
		rechargeItem.setAmount("100");
		System.out.println(String.format("new item: %s", rechargeItem.toString()));
		// 测试属性赋值

		// 测试对象的保存和查询
		IOperationResult<?> operationResult = null;
		ICriteria criteria = null;
		IBORepositoryReceiptPaymentApp boRepository = new BORepositoryReceiptPayment();
		// 设置用户口令
		boRepository.setUserToken(this.getToken());

		// 测试保存
		operationResult = boRepository.saveAssetRecharge(recharge);
		assertEquals(operationResult.getMessage(), operationResult.getResultCode(), 0);
		AssetRecharge boSaved = (AssetRecharge) operationResult.getResultObjects().firstOrDefault();

		// 测试查询
		criteria = boSaved.getCriteria();
		operationResult = boRepository.fetchAssetRecharge(criteria);
		assertEquals(operationResult.getMessage(), operationResult.getResultCode(), 0);

		// 测试删除
		boSaved = (AssetRecharge) operationResult.getResultObjects().firstOrDefault();
		boSaved.delete();
		operationResult = boRepository.saveAssetRecharge(boSaved);
		assertEquals(operationResult.getMessage(), operationResult.getResultCode(), 0);
	}

}

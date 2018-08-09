package org.colorcoding.ibas.receiptpayment.test;

import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.organization.OrganizationFactory;
import org.colorcoding.ibas.bobas.repository.InvalidTokenException;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.IBusinessPartnerAsset;
import org.colorcoding.ibas.businesspartner.data.emBusinessPartnerType;
import org.colorcoding.ibas.businesspartner.repository.BORepositoryBusinessPartner;
import org.colorcoding.ibas.businesspartner.repository.IBORepositoryBusinessPartnerApp;
import org.colorcoding.ibas.receiptpayment.MyConfiguration;
import org.colorcoding.ibas.receiptpayment.bo.assetrecharge.AssetRecharge;
import org.colorcoding.ibas.receiptpayment.bo.assetrecharge.IAssetRechargeItem;
import org.colorcoding.ibas.receiptpayment.repository.BORepositoryReceiptPayment;
import org.colorcoding.ibas.receiptpayment.repository.IBORepositoryReceiptPaymentApp;

import junit.framework.TestCase;

/**
 * 付款 测试
 * 
 */
public class TestAssetRecharge extends TestCase {
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
		MyConfiguration.addConfigValue(MyConfiguration.CONFIG_ITEM_BO_REFETCH_BEFORE_DELETE, true);
		String assetId = "d5c2cd03-e0d6-a275-4d01-9e55206f9474";
		AssetRecharge recharge = new AssetRecharge();
		recharge.setBusinessPartnerType(emBusinessPartnerType.CUSTOMER);
		recharge.setBusinessPartnerCode("C70000");
		recharge.setServiceCode(assetId);
		recharge.setAmount("100");
		System.out.println(String.format("new bo: %s", recharge.toString()));
		// 测试属性赋值

		// 测试付款-项目
		IAssetRechargeItem rechargeItem = recharge.getAssetRechargeItems().create();
		rechargeItem.setMode("CASH");
		rechargeItem.setAmount("100");
		System.out.println(String.format("new item: %s", rechargeItem.toString()));
		// 测试属性赋值

		Decimal firstValue = this.getBpAssetAmount(assetId);
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

		Decimal secondValue = this.getBpAssetAmount(assetId);
		// 测试查询
		criteria = boSaved.getCriteria();
		operationResult = boRepository.fetchAssetRecharge(criteria);
		assertEquals(operationResult.getMessage(), operationResult.getResultCode(), 0);

		// 测试删除
		boSaved = (AssetRecharge) operationResult.getResultObjects().firstOrDefault();
		boSaved.delete();
		operationResult = boRepository.saveAssetRecharge(boSaved);
		assertEquals(operationResult.getMessage(), operationResult.getResultCode(), 0);

		Decimal thirdValue = this.getBpAssetAmount(assetId);

		System.out.println(String.format("%s  %s  %s", firstValue, secondValue, thirdValue));
	}

	private Decimal getBpAssetAmount(String code) throws InvalidTokenException {
		IBORepositoryBusinessPartnerApp boRepository = new BORepositoryBusinessPartner();
		boRepository.setUserToken(this.getToken());
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias("Code");
		condition.setValue(code);

		IOperationResult<IBusinessPartnerAsset> operationResult = boRepository.fetchBusinessPartnerAsset(criteria);
		assertEquals(operationResult.getMessage(), operationResult.getResultCode(), 0);
		return operationResult.getResultObjects().firstOrDefault().getAmount();
	}
}

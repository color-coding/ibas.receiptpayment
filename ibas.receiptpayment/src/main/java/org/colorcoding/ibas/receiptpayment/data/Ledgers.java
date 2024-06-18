package org.colorcoding.ibas.receiptpayment.data;

public class Ledgers extends org.colorcoding.ibas.materials.data.Ledgers {

	/**
	 * 收付款方式
	 */
	public static final String CONDITION_PROPERTY_PAYMENTMETHOD = "PaymentMethod";
	/**
	 * 交易识别码
	 */
	public static final String CONDITION_PROPERTY_TRADEID = "TradeId";
	/**
	 * 银行
	 */
	public static final String CONDITION_PROPERTY_BANK = "Bank";
	/**
	 * 银行账户
	 */
	public static final String CONDITION_PROPERTY_BANK_ACCOUNT = "BankAccount";
	/**
	 * 业务伙伴资产
	 */
	public static final String CONDITION_PROPERTY_BUSINESS_PARTNER_ASSET = "BPAsset";

	/**
	 * 交易方式-业务伙伴资产
	 */
	public static final String TRADING_MODE_BP_ASSSET = "TM_BPAS";
	/**
	 * 交易方式-银行转账
	 */
	public static final String TRADING_MODE_BANK = "TM_BANK";
}

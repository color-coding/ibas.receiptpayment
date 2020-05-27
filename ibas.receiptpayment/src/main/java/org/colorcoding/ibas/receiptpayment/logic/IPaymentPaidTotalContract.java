package org.colorcoding.ibas.receiptpayment.logic;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;

/**
 * 付款对单据的付款总计契约
 * 
 * @author Niuren.Zhu
 *
 */
public interface IPaymentPaidTotalContract extends IBusinessLogicContract {

	/**
	 * 付款的单据类型
	 * 
	 * @return
	 */
	String getBaseDocumentType();

	/**
	 * 付款的单据编号
	 * 
	 * @return
	 */
	Integer getBaseDocumentEntry();

	/**
	 * 付款金额
	 * 
	 * @return
	 */
	BigDecimal getAmount();

	/**
	 * 付款币种
	 * 
	 * @return
	 */
	String getCurrency();

	/**
	 * 付款汇率
	 * 
	 * @return
	 */
	BigDecimal getRate();
}

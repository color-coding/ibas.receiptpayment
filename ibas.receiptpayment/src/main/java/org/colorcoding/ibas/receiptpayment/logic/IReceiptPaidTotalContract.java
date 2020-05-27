package org.colorcoding.ibas.receiptpayment.logic;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;

/**
 * 收款对单据的付款总计契约
 * 
 * @author Niuren.Zhu
 *
 */
public interface IReceiptPaidTotalContract extends IBusinessLogicContract {

	/**
	 * 收款的单据类型
	 * 
	 * @return
	 */
	String getBaseDocumentType();

	/**
	 * 收款的单据编号
	 * 
	 * @return
	 */
	Integer getBaseDocumentEntry();

	/**
	 * 收款金额
	 * 
	 * @return
	 */
	BigDecimal getAmount();

	/**
	 * 收款币种
	 * 
	 * @return
	 */
	String getCurrency();

	/**
	 * 收款汇率
	 * 
	 * @return
	 */
	BigDecimal getRate();
}

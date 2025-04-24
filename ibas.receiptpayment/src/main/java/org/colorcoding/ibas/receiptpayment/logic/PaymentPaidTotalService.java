package org.colorcoding.ibas.receiptpayment.logic;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.common.Decimals;
import org.colorcoding.ibas.bobas.data.emDocumentStatus;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.logic.LogicContract;
import org.colorcoding.ibas.bobas.message.Logger;
import org.colorcoding.ibas.bobas.message.MessageLevel;
import org.colorcoding.ibas.document.IDocumentPaidTotalOperator;
import org.colorcoding.ibas.receiptpayment.MyConfiguration;
import org.colorcoding.ibas.receiptpayment.bo.receipt.Receipt;

@LogicContract(IPaymentPaidTotalContract.class)
public class PaymentPaidTotalService extends DocumentPaidTotalService<IPaymentPaidTotalContract> {

	@Override
	protected boolean checkDataStatus(Object data) {
		if (data instanceof IPaymentPaidTotalContract) {
			IPaymentPaidTotalContract contract = (IPaymentPaidTotalContract) data;
			if (contract.getBaseDocumentType() == null || contract.getBaseDocumentType().isEmpty()) {
				Logger.log(MessageLevel.DEBUG, MSG_LOGICS_SKIP_LOGIC_EXECUTION, this.getClass().getName(),
						"BaseDocumentType", "NULL or Empty");
				return false;
			}
			if (contract.getBaseDocumentType().equals(MyConfiguration.applyVariables(Receipt.BUSINESS_OBJECT_CODE))) {
				Logger.log(MessageLevel.DEBUG, MSG_LOGICS_SKIP_LOGIC_EXECUTION, this.getClass().getName(),
						"BaseDocumentType", "Receipt");
				return false;
			}
		}
		return super.checkDataStatus(data);
	}

	@Override
	protected IDocumentPaidTotalOperator fetchBeAffected(IPaymentPaidTotalContract contract) {
		return this.fetchBeAffected(contract.getBaseDocumentType(), contract.getBaseDocumentEntry());
	}

	@Override
	protected void impact(IPaymentPaidTotalContract contract) {
		if (contract.getCurrency() != null && !contract.getCurrency().isEmpty()) {
			if (!contract.getCurrency().equals(this.getBeAffected().getDocumentCurrency())) {
				throw new BusinessLogicException(I18N.prop("msg_rp_payment_currency_mismatch", this.getBeAffected()));
			}
		}
		if (contract.getAmount() == null || Decimals.isZero(contract.getAmount())) {
			return;
		}
		BigDecimal total = this.getBeAffected().getPaidTotal();
		if (total == null) {
			total = Decimals.VALUE_ZERO;
		}
		this.getBeAffected().setPaidTotal(total.add(contract.getAmount()));
		if (this.getBeAffected().isSmartDocumentStatus() == true) {
			// 处理单据状态
			if (this.getBeAffected().getDocumentStatus() == emDocumentStatus.RELEASED
					&& this.getBeAffected().getPaidTotal().compareTo(this.getBeAffected().getDocumentTotal()) >= 0) {
				this.getBeAffected().setDocumentStatus(emDocumentStatus.FINISHED);
			}
		}
	}

	@Override
	protected void revoke(IPaymentPaidTotalContract contract) {
		if (contract.getAmount() == null || Decimals.isZero(contract.getAmount())) {
			return;
		}
		BigDecimal total = this.getBeAffected().getPaidTotal();
		if (total == null) {
			total = Decimals.VALUE_ZERO;
		}
		this.getBeAffected().setPaidTotal(total.subtract(contract.getAmount()));
		if (this.getBeAffected().isSmartDocumentStatus() == true) {
			// 处理单据状态
			if (this.getBeAffected().getDocumentStatus() == emDocumentStatus.FINISHED
					&& this.getBeAffected().getPaidTotal().compareTo(this.getBeAffected().getDocumentTotal()) < 0) {
				this.getBeAffected().setDocumentStatus(emDocumentStatus.RELEASED);
			}
		}
	}

}

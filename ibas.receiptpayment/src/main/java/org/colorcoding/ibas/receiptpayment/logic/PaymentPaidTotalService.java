package org.colorcoding.ibas.receiptpayment.logic;

import java.math.BigDecimal;

import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.mapping.LogicContract;
import org.colorcoding.ibas.bobas.message.Logger;
import org.colorcoding.ibas.bobas.message.MessageLevel;
import org.colorcoding.ibas.document.IDocumentPaidTotalOperator;

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
		if (contract.getAmount() == null || Decimal.isZero(contract.getAmount())) {
			return;
		}
		BigDecimal total = this.getBeAffected().getPaidTotal();
		if (total == null) {
			total = Decimal.ZERO;
		}
		this.getBeAffected().setPaidTotal(total.add(contract.getAmount()));
	}

	@Override
	protected void revoke(IPaymentPaidTotalContract contract) {
		if (contract.getAmount() == null || Decimal.isZero(contract.getAmount())) {
			return;
		}
		BigDecimal total = this.getBeAffected().getPaidTotal();
		if (total == null) {
			total = Decimal.ZERO;
		}
		this.getBeAffected().setPaidTotal(total.subtract(contract.getAmount()));

	}

}

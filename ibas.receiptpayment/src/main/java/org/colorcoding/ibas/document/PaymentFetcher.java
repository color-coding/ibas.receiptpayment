package org.colorcoding.ibas.document;

import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.bo.BusinessObjectUnit;
import org.colorcoding.ibas.receiptpayment.bo.payment.Payment;

@BusinessObjectUnit(code = Payment.BUSINESS_OBJECT_CODE)
public class PaymentFetcher extends ReceiptPaymentFetcher<Payment> {

	@Override
	public Payment fetch(Integer docEntry) throws Exception {
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(Payment.PROPERTY_DOCENTRY.getName());
		condition.setValue(docEntry);
		IOperationResult<Payment> operationResult = this.getRepository().fetchPayment(criteria, this.userToken());
		if (operationResult.getError() != null) {
			throw operationResult.getError();
		}
		return operationResult.getResultObjects().firstOrDefault();
	}

}

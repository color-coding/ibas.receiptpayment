package org.colorcoding.ibas.document;

import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.mapping.BusinessObjectUnit;
import org.colorcoding.ibas.receiptpayment.bo.receipt.Receipt;

@BusinessObjectUnit(code = Receipt.BUSINESS_OBJECT_CODE)
public class ReceiptFetcher extends ReceiptPaymentFetcher<Receipt> {

	@Override
	public Receipt fetch(Integer docEntry) throws Exception {
		ICriteria criteria = new Criteria();
		ICondition condition = criteria.getConditions().create();
		condition.setAlias(Receipt.PROPERTY_DOCENTRY.getName());
		condition.setValue(docEntry);
		IOperationResult<Receipt> operationResult = this.getRepository().fetchReceipt(criteria, this.userToken());
		if (operationResult.getError() != null) {
			throw operationResult.getError();
		}
		return operationResult.getResultObjects().firstOrDefault();
	}

}

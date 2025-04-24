package org.colorcoding.ibas.document;

import org.colorcoding.ibas.bobas.organization.OrganizationFactory;
import org.colorcoding.ibas.bobas.repository.ITransaction;
import org.colorcoding.ibas.receiptpayment.repository.BORepositoryReceiptPayment;

public abstract class ReceiptPaymentFetcher<T extends IDocumentOperatingTarget> implements IDocumentFetcher<T> {

	private BORepositoryReceiptPayment repository;

	protected BORepositoryReceiptPayment getRepository() {
		if (this.repository == null) {
			this.repository = new BORepositoryReceiptPayment();
		}
		return this.repository;
	}

	@Override
	public void setTransaction(ITransaction transaction) {
		this.getRepository().setTransaction(transaction);
	}

	protected String userToken() {
		return OrganizationFactory.SYSTEM_USER.getToken();
	}
}

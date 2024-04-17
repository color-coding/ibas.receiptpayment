package org.colorcoding.ibas.receiptpayment.logic.journalentry;

import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.BusinessPartnerAsset;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.IBusinessPartnerAsset;
import org.colorcoding.ibas.businesspartner.repository.BORepositoryBusinessPartner;
import org.colorcoding.ibas.receiptpayment.data.Ledgers;

public class JournalEntrySmartContent
		extends org.colorcoding.ibas.materials.logic.journalentry.JournalEntrySmartContent {

	public JournalEntrySmartContent(Object sourceData) {
		super(sourceData);
	}

	@Override
	public Object getSourceDataPropertyValue(String property) {
		if (Ledgers.CONDITION_PROPERTY_ASSET_ITEM.equals(property)) {
			if (Ledgers.TRADING_MODE_BP_ASSSET.equalsIgnoreCase(
					String.valueOf(super.getSourceDataPropertyValue(Ledgers.CONDITION_PROPERTY_PAYMENTMETHOD)))) {
				String tradeId = String.valueOf(super.getSourceDataPropertyValue(Ledgers.CONDITION_PROPERTY_TRADEID));
				if (!JournalEntrySmartContent.VALUE_NULL.equalsIgnoreCase(tradeId)) {
					Criteria criteria = new Criteria();
					criteria.setResultCount(1);
					ICondition condition = criteria.getConditions().create();
					condition.setAlias(BusinessPartnerAsset.PROPERTY_CODE.getName());
					condition.setValue(tradeId);
					BORepositoryBusinessPartner boRepository = new BORepositoryBusinessPartner();
					boRepository.setRepository(this.getService().getRepository());
					IOperationResult<IBusinessPartnerAsset> operationResult = boRepository
							.fetchBusinessPartnerAsset(criteria);
					if (operationResult.getError() != null) {
						throw new BusinessLogicException(operationResult.getError());
					}
					for (IBusinessPartnerAsset item : operationResult.getResultObjects()) {
						return item.getAssetCode();
					}
				}
			}
		}
		return super.getSourceDataPropertyValue(property);
	}

}

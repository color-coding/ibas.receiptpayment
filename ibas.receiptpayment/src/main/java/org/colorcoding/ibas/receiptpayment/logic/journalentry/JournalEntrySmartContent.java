package org.colorcoding.ibas.receiptpayment.logic.journalentry;

import org.colorcoding.ibas.accounting.bo.bank.BankAccount;
import org.colorcoding.ibas.accounting.bo.bank.IBankAccount;
import org.colorcoding.ibas.accounting.logic.IJECPropertyValueGetter;
import org.colorcoding.ibas.accounting.repository.BORepositoryAccounting;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.IOperationResult;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.message.Logger;
import org.colorcoding.ibas.bobas.message.MessageLevel;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.BusinessPartnerAsset;
import org.colorcoding.ibas.businesspartner.bo.businesspartnerasset.IBusinessPartnerAsset;
import org.colorcoding.ibas.businesspartner.repository.BORepositoryBusinessPartner;
import org.colorcoding.ibas.document.DocumentFetcherManager;
import org.colorcoding.ibas.document.IDocumentFetcher;
import org.colorcoding.ibas.receiptpayment.data.DataConvert;
import org.colorcoding.ibas.receiptpayment.data.Ledgers;

public class JournalEntrySmartContent
		extends org.colorcoding.ibas.materials.logic.journalentry.JournalEntrySmartContent {

	public JournalEntrySmartContent(Object sourceData) {
		super(sourceData);
	}

	@Override
	public Object getSourceDataPropertyValue(String property) {
		if (Ledgers.CONDITION_PROPERTY_ASSET_ITEM.equals(property)
				|| Ledgers.CONDITION_PROPERTY_BANK_ACCOUNT.equals(property)
				|| Ledgers.CONDITION_PROPERTY_BANK.equals(property)) {
			String paymentMethod = String
					.valueOf(this.getSourceDataPropertyValue(Ledgers.CONDITION_PROPERTY_PAYMENTMETHOD));
			if (Ledgers.TRADING_MODE_BP_ASSSET.equalsIgnoreCase(paymentMethod)) {
				String tradeId = String.valueOf(this.getSourceDataPropertyValue(Ledgers.CONDITION_PROPERTY_TRADEID));
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
						if (Ledgers.CONDITION_PROPERTY_ASSET_ITEM.equals(property)) {
							return item.getAssetCode();
						} else if (Ledgers.CONDITION_PROPERTY_BANK_ACCOUNT.equals(property)) {
							return item.getBankAccount();
						} else if (Ledgers.CONDITION_PROPERTY_BANK.equals(property)) {
							criteria = new Criteria();
							criteria.setResultCount(1);
							condition = criteria.getConditions().create();
							condition.setAlias(BankAccount.PROPERTY_CODE.getName());
							condition.setValue(item.getBankAccount());
							BORepositoryAccounting acRepository = new BORepositoryAccounting();
							acRepository.setRepository(this.getService().getRepository());
							IOperationResult<IBankAccount> baOpRslt = acRepository.fetchBankAccount(criteria);
							if (baOpRslt.getError() != null) {
								throw new BusinessLogicException(baOpRslt.getError());
							}
							if (!baOpRslt.getResultObjects().isEmpty()) {
								return baOpRslt.getResultObjects().firstOrDefault().getBank();
							}
						}
					}
				}
			} else if (Ledgers.TRADING_MODE_BANK.equalsIgnoreCase(paymentMethod)) {
				String tradeId = String.valueOf(this.getSourceDataPropertyValue(Ledgers.CONDITION_PROPERTY_TRADEID));
				if (Ledgers.CONDITION_PROPERTY_BANK_ACCOUNT.equals(property)) {
					return tradeId;
				} else if (Ledgers.CONDITION_PROPERTY_BANK.equals(property)) {
					Criteria criteria = new Criteria();
					criteria.setResultCount(1);
					ICondition condition = criteria.getConditions().create();
					condition.setAlias(BankAccount.PROPERTY_CODE.getName());
					condition.setValue(tradeId);
					BORepositoryAccounting acRepository = new BORepositoryAccounting();
					acRepository.setRepository(this.getService().getRepository());
					IOperationResult<IBankAccount> baOpRslt = acRepository.fetchBankAccount(criteria);
					if (baOpRslt.getError() != null) {
						throw new BusinessLogicException(baOpRslt.getError());
					}
					if (!baOpRslt.getResultObjects().isEmpty()) {
						return baOpRslt.getResultObjects().firstOrDefault().getBank();
					}
				}
			}
		} else if (Ledgers.CONDITION_PROPERTY_MATERIAL.equals(property)) {
			String baseType = String
					.valueOf(this.getSourceDataPropertyValue(Ledgers.CONDITION_PROPERTY_BASE_DOCUMENT_TYPE));
			if (!DataConvert.isNullOrEmpty(baseType)) {
				try {
					IDocumentFetcher<?> fetcher = DocumentFetcherManager.create().newFetcher(baseType);
					if (fetcher != null) {
						Integer baseEntry = (Integer) this
								.getSourceDataPropertyValue(Ledgers.CONDITION_PROPERTY_BASE_DOCUMENT_ENTRY);
						if (baseEntry > 0) {
							Object docment = fetcher.fetch(baseEntry);
							if (docment instanceof IJECPropertyValueGetter) {
								return ((IJECPropertyValueGetter) docment).getValue(property);
							}
						}
					}
				} catch (Exception e) {
					Logger.log(MessageLevel.WARN, e);
				}
			}
		}
		return super.getSourceDataPropertyValue(property);
	}

}

package org.colorcoding.ibas.receiptpayment.logic;

import org.colorcoding.ibas.bobas.common.ConditionOperation;
import org.colorcoding.ibas.bobas.common.ConditionRelationship;
import org.colorcoding.ibas.bobas.common.Criteria;
import org.colorcoding.ibas.bobas.common.ICondition;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.logic.BusinessLogic;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;
import org.colorcoding.ibas.document.DocumentFetcherManager;
import org.colorcoding.ibas.document.IDocumentPaidTotalOperator;

public abstract class DocumentPaidTotalService<L extends IBusinessLogicContract>
		extends BusinessLogic<L, IDocumentPaidTotalOperator> {

	protected IDocumentPaidTotalOperator fetchBeAffected(String documentType, Integer docEntry) {
		try {
			ICriteria criteria = new Criteria();
			// 必须查询类型，否则不能唯一
			ICondition condition = criteria.getConditions().create();
			condition.setAlias("ObjectCode");
			condition.setOperation(ConditionOperation.EQUAL);
			condition.setValue(documentType);
			condition = criteria.getConditions().create();
			condition.setRelationship(ConditionRelationship.AND);
			condition.setAlias("DocEntry");
			condition.setOperation(ConditionOperation.EQUAL);
			condition.setValue(docEntry);
			IDocumentPaidTotalOperator document = this.fetchBeAffected(criteria, IDocumentPaidTotalOperator.class);
			if (document == null) {
				document = DocumentFetcherManager.create().newFetcher(documentType).fetch(docEntry);
			}
			if (document == null) {
				throw new BusinessLogicException(I18N.prop("msg_rp_not_found_document", documentType, docEntry));
			}
			if (document instanceof IDocumentPaidTotalOperator) {
				return (IDocumentPaidTotalOperator) document;
			}
			throw new BusinessLogicException(I18N.prop("msg_rp_wrong_type", document));
		} catch (BusinessLogicException e) {
			throw e;
		} catch (Exception e) {
			throw new BusinessLogicException(e);
		}
	}

}

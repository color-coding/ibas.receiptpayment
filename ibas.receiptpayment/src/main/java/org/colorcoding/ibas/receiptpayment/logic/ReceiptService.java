package org.colorcoding.ibas.receiptpayment.logic;

import org.colorcoding.ibas.bobas.common.*;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.logic.BusinessLogic;
import org.colorcoding.ibas.bobas.logic.BusinessLogicException;
import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;
import org.colorcoding.ibas.bobas.message.Logger;
import org.colorcoding.ibas.bobas.message.MessageLevel;
import org.colorcoding.ibas.receiptpayment.bo.receipt.IReceipt;
import org.colorcoding.ibas.receiptpayment.bo.receipt.Receipt;
import org.colorcoding.ibas.receiptpayment.bo.receipt.ReceiptItem;
import org.colorcoding.ibas.receiptpayment.MyConfiguration;
import org.colorcoding.ibas.receiptpayment.repository.BORepositoryReceiptPayment;

/**
 * 收款-服务
 *
 * @author Niuren.Zhu
 *
 */
public abstract class ReceiptService<L extends IBusinessLogicContract> extends BusinessLogic<L, IReceipt> {
    @Override
    protected boolean checkDataStatus(Object data) {
        if (data instanceof IReceiptPaymentBaseDocument) {
            IReceiptPaymentBaseDocument contract = (IReceiptPaymentBaseDocument) data;
            if (!MyConfiguration.applyVariables(Receipt.BUSINESS_OBJECT_CODE)
                    .equals(contract.getBaseDocumentType())) {
                Logger.log(MessageLevel.DEBUG, MSG_LOGICS_SKIP_LOGIC_EXECUTION, this.getClass().getName(),
                        "BaseDocumentType", contract.getBaseDocumentType());
                return false;
            }
        }
        return super.checkDataStatus(data);
    }

    protected IReceipt fetchBeAffected(String docType, Integer docEntry) {
        // 必须要差完整对象，不然业务逻辑会出错
        ICriteria criteria = new Criteria();
        ICondition condition = criteria.getConditions().create();
        condition.setAlias(Receipt.PROPERTY_OBJECTCODE.getName());
        condition.setOperation(ConditionOperation.EQUAL);
        condition.setValue(docType);
        condition = criteria.getConditions().create();
        condition.setRelationship(ConditionRelationship.AND);
        condition.setAlias(Receipt.PROPERTY_DOCENTRY.getName());
        condition.setOperation(ConditionOperation.EQUAL);
        condition.setValue(docEntry);

        IReceipt order = this.fetchBeAffected(criteria, IReceipt.class);
        if (order == null) {
            BORepositoryReceiptPayment boRepository = new BORepositoryReceiptPayment();
            boRepository.setRepository(super.getRepository());
            IOperationResult<IReceipt> operationResult = boRepository.fetchReceipt(criteria);
            if (operationResult.getError() != null) {
                throw new BusinessLogicException(operationResult.getError());
            }
            order = operationResult.getResultObjects().firstOrDefault();
        }
        if (order == null) {
            throw new BusinessLogicException(I18N.prop("msg_sl_not_found_order", docType, docEntry));
        }
        return order;
    }
}

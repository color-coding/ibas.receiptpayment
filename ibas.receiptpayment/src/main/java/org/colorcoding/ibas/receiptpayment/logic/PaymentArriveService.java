package org.colorcoding.ibas.receiptpayment.logic;

import org.colorcoding.ibas.bobas.data.emDocumentStatus;
import org.colorcoding.ibas.bobas.mapping.LogicContract;
import org.colorcoding.ibas.bobas.message.Logger;
import org.colorcoding.ibas.bobas.message.MessageLevel;
import org.colorcoding.ibas.receiptpayment.bo.payment.IPayment;
import org.colorcoding.ibas.receiptpayment.bo.payment.IPaymentItem;

@LogicContract(IPaymentArriveContract.class)
public class PaymentArriveService extends PaymentService<IPaymentArriveContract> {
    @Override
    protected boolean checkDataStatus(Object data) {
        if (data instanceof IPaymentArriveContract) {
            IPaymentArriveContract contract = (IPaymentArriveContract) data;
            if(contract.getDocumentStatus()== emDocumentStatus.PLANNED){
                Logger.log(MessageLevel.DEBUG, MSG_LOGICS_SKIP_LOGIC_EXECUTION, this.getClass().getName(),
                        "DocumentStatus", contract.getDocumentStatus());
                return  false;
            }
            if(!contract.getTradeSuccess()){
                return  false;
            }
        }
        return  super.checkDataStatus(data);
    }
    @Override
    protected IPayment fetchBeAffected(IPaymentArriveContract contract) {
        return this.fetchBeAffected(contract.getBaseDocumentType(), contract.getBaseDocumentEntry());
    }

    @Override
    protected void impact(IPaymentArriveContract contract) {
        if (this.getBeAffected() == null) {
            return;
        }
        for(IPaymentItem item:this.getBeAffected().getPaymentItems()) {
            if(item.getLineId()==contract.getBaseDocumentLineId()){
                item.setLineStatus(emDocumentStatus.CLOSED);
            }
        }
    }

    @Override
    protected void revoke(IPaymentArriveContract contract) {
        if (this.getBeAffected() == null) {
            return;
        }
        for(IPaymentItem item:this.getBeAffected().getPaymentItems()) {
            if(item.getLineId()==contract.getBaseDocumentLineId()){
                // item.setLineStatus(emDocumentStatus.CLOSED);
            }
        }
    }
}
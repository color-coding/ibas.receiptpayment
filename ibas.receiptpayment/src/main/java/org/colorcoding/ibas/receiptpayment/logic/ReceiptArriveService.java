package org.colorcoding.ibas.receiptpayment.logic;

import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.data.emDocumentStatus;
import org.colorcoding.ibas.bobas.mapping.LogicContract;
import org.colorcoding.ibas.bobas.message.Logger;
import org.colorcoding.ibas.bobas.message.MessageLevel;
import org.colorcoding.ibas.receiptpayment.bo.receipt.IReceipt;
import org.colorcoding.ibas.receiptpayment.bo.receipt.IReceiptItem;

@LogicContract(IReceiptArriveContract.class)
public class ReceiptArriveService extends ReceiptService<IReceiptArriveContract> {
    @Override
    protected boolean checkDataStatus(Object data) {
        if (data instanceof IReceiptArriveContract) {
            IReceiptArriveContract contract = (IReceiptArriveContract) data;
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
    protected IReceipt fetchBeAffected(IReceiptArriveContract contract) {
        return this.fetchBeAffected(contract.getBaseDocumentType(), contract.getBaseDocumentEntry());
    }

    @Override
    protected void impact(IReceiptArriveContract contract) {
        if (this.getBeAffected() == null) {
            return;
        }
        for(IReceiptItem item:this.getBeAffected().getReceiptItems()) {
            if(item.getLineId()==contract.getBaseDocumentLineId()){
                item.setLineStatus(emDocumentStatus.CLOSED);
            }
        }
    }

    @Override
    protected void revoke(IReceiptArriveContract contract) {
        if (this.getBeAffected() == null) {
            return;
        }
        for(IReceiptItem item:this.getBeAffected().getReceiptItems()) {
            if(item.getLineId()==contract.getBaseDocumentLineId()){
                // item.setLineStatus(emDocumentStatus.PLANNED);
            }
        }
    }
}

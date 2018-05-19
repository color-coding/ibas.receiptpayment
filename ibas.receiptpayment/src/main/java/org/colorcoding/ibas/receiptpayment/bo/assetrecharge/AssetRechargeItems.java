package org.colorcoding.ibas.receiptpayment.bo.assetrecharge;

import java.beans.PropertyChangeEvent;

import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.bo.BusinessObjects;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.receiptpayment.MyConfiguration;

/**
 * 资产充值-项目 集合
 */
@XmlType(name = AssetRechargeItems.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlSeeAlso({ AssetRechargeItem.class })
public class AssetRechargeItems extends BusinessObjects<IAssetRechargeItem, IAssetRecharge>
		implements IAssetRechargeItems {

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "AssetRechargeItems";

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = -2895375024427265195L;

	/**
	 * 构造方法
	 */
	public AssetRechargeItems() {
		super();
	}

	/**
	 * 构造方法
	 * 
	 * @param parent
	 *            父项对象
	 */
	public AssetRechargeItems(IAssetRecharge parent) {
		super(parent);
	}

	/**
	 * 元素类型
	 */
	public Class<?> getElementType() {
		return AssetRechargeItem.class;
	}

	/**
	 * 创建资产充值-项目
	 * 
	 * @return 资产充值-项目
	 */
	public IAssetRechargeItem create() {
		IAssetRechargeItem item = new AssetRechargeItem();
		if (this.add(item)) {
			return item;
		}
		return null;
	}

	@Override
	protected void afterAddItem(IAssetRechargeItem item) {
		super.afterAddItem(item);
	}

	@Override
	public ICriteria getElementCriteria() {
		ICriteria criteria = super.getElementCriteria();
		return criteria;
	}

	@Override
	public void onParentPropertyChanged(PropertyChangeEvent evt) {
		super.onParentPropertyChanged(evt);
	}
}

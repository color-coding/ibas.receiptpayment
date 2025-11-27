package org.colorcoding.ibas.receiptpayment.rule;

import java.math.BigDecimal;
import java.util.Map;

import org.colorcoding.ibas.bobas.core.IPropertyInfo;
import org.colorcoding.ibas.bobas.i18n.I18N;

/**
 * 属性的绝对值
 */
public class BusinessRuleMaxProperty
		extends org.colorcoding.ibas.bobas.rule.common.BusinessRuleMaxProperty<BigDecimal> {

	@SafeVarargs
	public BusinessRuleMaxProperty(IPropertyInfo<BigDecimal> maxProperty, IPropertyInfo<BigDecimal>... propertyInfos) {
		super(maxProperty, propertyInfos);
	}

	@Override
	protected void execute(BusinessRuleContext context) throws Exception {
		if (this.getMaxProperty() == null) {
			return;
		}
		BigDecimal maxValue = (BigDecimal) context.getInputValues().get(this.getMaxProperty());
		if (maxValue == null) {
			return;
		}
		maxValue = maxValue.abs();
		BigDecimal value = null;
		for (Map.Entry<IPropertyInfo<?>, Object> entry : context.getInputValues().entrySet()) {
			if (entry.getKey() == this.getMaxProperty()) {
				continue;
			}
			if (entry.getValue() == null) {
				throw new Exception(I18N.prop("msg_bobas_business_rule_required_error", entry.getKey().getName()));
			}
			value = (BigDecimal) entry.getValue();
			value = value.abs();
			if (maxValue.compareTo(value) < 0) {
				throw new Exception(I18N.prop("msg_bobas_business_rule_max_property_error", entry.getKey().getName(),
						this.getMaxProperty().getName()));
			}
		}
	}
}

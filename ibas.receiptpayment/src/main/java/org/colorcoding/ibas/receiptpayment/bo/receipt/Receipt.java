package org.colorcoding.ibas.receiptpayment.bo.receipt;

import java.math.BigDecimal;
import java.util.List;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementWrapper;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.accounting.logic.IBranchCheckContract;
import org.colorcoding.ibas.accounting.logic.IJournalEntryCreationContract;
import org.colorcoding.ibas.accounting.logic.JournalEntryContent;
import org.colorcoding.ibas.accounting.logic.JournalEntryContent.Category;
import org.colorcoding.ibas.bobas.approval.IApprovalData;
import org.colorcoding.ibas.bobas.bo.BusinessObject;
import org.colorcoding.ibas.bobas.bo.IBOSeriesKey;
import org.colorcoding.ibas.bobas.bo.IBOTagCanceled;
import org.colorcoding.ibas.bobas.bo.IBOTagDeleted;
import org.colorcoding.ibas.bobas.bo.IBOUserFields;
import org.colorcoding.ibas.bobas.core.IPropertyInfo;
import org.colorcoding.ibas.bobas.data.ArrayList;
import org.colorcoding.ibas.bobas.data.DateTime;
import org.colorcoding.ibas.bobas.data.Decimal;
import org.colorcoding.ibas.bobas.data.emApprovalStatus;
import org.colorcoding.ibas.bobas.data.emBOStatus;
import org.colorcoding.ibas.bobas.data.emDocumentStatus;
import org.colorcoding.ibas.bobas.data.emYesNo;
import org.colorcoding.ibas.bobas.logic.IBusinessLogicContract;
import org.colorcoding.ibas.bobas.logic.IBusinessLogicsHost;
import org.colorcoding.ibas.bobas.mapping.BusinessObjectUnit;
import org.colorcoding.ibas.bobas.mapping.DbField;
import org.colorcoding.ibas.bobas.mapping.DbFieldType;
import org.colorcoding.ibas.bobas.ownership.IDataOwnership;
import org.colorcoding.ibas.bobas.period.IPeriodData;
import org.colorcoding.ibas.bobas.rule.IBusinessRule;
import org.colorcoding.ibas.bobas.rule.common.BusinessRuleDocumentStatus;
import org.colorcoding.ibas.bobas.rule.common.BusinessRuleMaxProperty;
import org.colorcoding.ibas.bobas.rule.common.BusinessRuleMinValue;
import org.colorcoding.ibas.bobas.rule.common.BusinessRuleRequired;
import org.colorcoding.ibas.bobas.rule.common.BusinessRuleRequiredElements;
import org.colorcoding.ibas.bobas.rule.common.BusinessRuleSumElements;
import org.colorcoding.ibas.businesspartner.data.emBusinessPartnerType;
import org.colorcoding.ibas.businesspartner.logic.ICustomerCheckContract;
import org.colorcoding.ibas.businesspartner.logic.ISupplierCheckContract;
import org.colorcoding.ibas.document.IDocumentPaidTotalOperator;
import org.colorcoding.ibas.materials.rules.BusinessRulePreventCancelDocument;
import org.colorcoding.ibas.receiptpayment.MyConfiguration;
import org.colorcoding.ibas.receiptpayment.data.Ledgers;
import org.colorcoding.ibas.receiptpayment.logic.journalentry.JournalEntrySmartContent;
import org.colorcoding.ibas.sales.bo.downpaymentrequest.DownPaymentRequest;

/**
 * 获取-收款
 * 
 */
@XmlAccessorType(XmlAccessType.NONE)
@XmlType(name = Receipt.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlRootElement(name = Receipt.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@BusinessObjectUnit(code = Receipt.BUSINESS_OBJECT_CODE)
public class Receipt extends BusinessObject<Receipt> implements IReceipt, IDataOwnership, IPeriodData, IApprovalData,
		IBOTagDeleted, IBOTagCanceled, IBusinessLogicsHost, IBOSeriesKey, IBOUserFields, IDocumentPaidTotalOperator {

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = -1327140574673436499L;

	/**
	 * 当前类型
	 */
	private static final Class<?> MY_CLASS = Receipt.class;

	/**
	 * 数据库表
	 */
	public static final String DB_TABLE_NAME = "${Company}_RP_ORPT";

	/**
	 * 业务对象编码
	 */
	public static final String BUSINESS_OBJECT_CODE = "${Company}_RP_RECEIPT";

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "Receipt";

	/**
	 * 属性名称-凭证编号
	 */
	private static final String PROPERTY_DOCENTRY_NAME = "DocEntry";

	/**
	 * 凭证编号 属性
	 */
	@DbField(name = "DocEntry", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = true)
	public static final IPropertyInfo<Integer> PROPERTY_DOCENTRY = registerProperty(PROPERTY_DOCENTRY_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-凭证编号
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DOCENTRY_NAME)
	public final Integer getDocEntry() {
		return this.getProperty(PROPERTY_DOCENTRY);
	}

	/**
	 * 设置-凭证编号
	 * 
	 * @param value 值
	 */
	public final void setDocEntry(Integer value) {
		this.setProperty(PROPERTY_DOCENTRY, value);
	}

	/**
	 * 属性名称-单据编码
	 */
	private static final String PROPERTY_DOCNUM_NAME = "DocNum";

	/**
	 * 期间编号 属性
	 */
	@DbField(name = "DocNum", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_DOCNUM = registerProperty(PROPERTY_DOCNUM_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-单据编码
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DOCNUM_NAME)
	public final String getDocNum() {
		return this.getProperty(PROPERTY_DOCNUM);
	}

	/**
	 * 设置-单据编码
	 * 
	 * @param value 值
	 */
	public final void setDocNum(String value) {
		this.setProperty(PROPERTY_DOCNUM, value);
	}

	/**
	 * 属性名称-期间
	 */
	private static final String PROPERTY_PERIOD_NAME = "Period";

	/**
	 * 期间 属性
	 */
	@DbField(name = "Period", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_PERIOD = registerProperty(PROPERTY_PERIOD_NAME, Integer.class,
			MY_CLASS);

	/**
	 * 获取-期间
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_PERIOD_NAME)
	public final Integer getPeriod() {
		return this.getProperty(PROPERTY_PERIOD);
	}

	/**
	 * 设置-期间
	 * 
	 * @param value 值
	 */
	public final void setPeriod(Integer value) {
		this.setProperty(PROPERTY_PERIOD, value);
	}

	/**
	 * 属性名称-取消
	 */
	private static final String PROPERTY_CANCELED_NAME = "Canceled";

	/**
	 * 取消 属性
	 */
	@DbField(name = "Canceled", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<emYesNo> PROPERTY_CANCELED = registerProperty(PROPERTY_CANCELED_NAME,
			emYesNo.class, MY_CLASS);

	/**
	 * 获取-取消
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CANCELED_NAME)
	public final emYesNo getCanceled() {
		return this.getProperty(PROPERTY_CANCELED);
	}

	/**
	 * 设置-取消
	 * 
	 * @param value 值
	 */
	public final void setCanceled(emYesNo value) {
		this.setProperty(PROPERTY_CANCELED, value);
	}

	/**
	 * 属性名称-状态
	 */
	private static final String PROPERTY_STATUS_NAME = "Status";

	/**
	 * 状态 属性
	 */
	@DbField(name = "Status", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<emBOStatus> PROPERTY_STATUS = registerProperty(PROPERTY_STATUS_NAME,
			emBOStatus.class, MY_CLASS);

	/**
	 * 获取-状态
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_STATUS_NAME)
	public final emBOStatus getStatus() {
		return this.getProperty(PROPERTY_STATUS);
	}

	/**
	 * 设置-状态
	 * 
	 * @param value 值
	 */
	public final void setStatus(emBOStatus value) {
		this.setProperty(PROPERTY_STATUS, value);
	}

	/**
	 * 属性名称-审批状态
	 */
	private static final String PROPERTY_APPROVALSTATUS_NAME = "ApprovalStatus";

	/**
	 * 审批状态 属性
	 */
	@DbField(name = "ApvlStatus", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<emApprovalStatus> PROPERTY_APPROVALSTATUS = registerProperty(
			PROPERTY_APPROVALSTATUS_NAME, emApprovalStatus.class, MY_CLASS);

	/**
	 * 获取-审批状态
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_APPROVALSTATUS_NAME)
	public final emApprovalStatus getApprovalStatus() {
		return this.getProperty(PROPERTY_APPROVALSTATUS);
	}

	/**
	 * 设置-审批状态
	 * 
	 * @param value 值
	 */
	public final void setApprovalStatus(emApprovalStatus value) {
		this.setProperty(PROPERTY_APPROVALSTATUS, value);
	}

	/**
	 * 属性名称-单据状态
	 */
	private static final String PROPERTY_DOCUMENTSTATUS_NAME = "DocumentStatus";

	/**
	 * 单据状态 属性
	 */
	@DbField(name = "DocStatus", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<emDocumentStatus> PROPERTY_DOCUMENTSTATUS = registerProperty(
			PROPERTY_DOCUMENTSTATUS_NAME, emDocumentStatus.class, MY_CLASS);

	/**
	 * 获取-单据状态
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DOCUMENTSTATUS_NAME)
	public final emDocumentStatus getDocumentStatus() {
		return this.getProperty(PROPERTY_DOCUMENTSTATUS);
	}

	/**
	 * 设置-单据状态
	 * 
	 * @param value 值
	 */
	public final void setDocumentStatus(emDocumentStatus value) {
		this.setProperty(PROPERTY_DOCUMENTSTATUS, value);
	}

	/**
	 * 属性名称-对象类型
	 */
	private static final String PROPERTY_OBJECTCODE_NAME = "ObjectCode";

	/**
	 * 对象类型 属性
	 */
	@DbField(name = "ObjectCode", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_OBJECTCODE = registerProperty(PROPERTY_OBJECTCODE_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-对象类型
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_OBJECTCODE_NAME)
	public final String getObjectCode() {
		return this.getProperty(PROPERTY_OBJECTCODE);
	}

	/**
	 * 设置-对象类型
	 * 
	 * @param value 值
	 */
	public final void setObjectCode(String value) {
		this.setProperty(PROPERTY_OBJECTCODE, value);
	}

	/**
	 * 属性名称-创建日期
	 */
	private static final String PROPERTY_CREATEDATE_NAME = "CreateDate";

	/**
	 * 创建日期 属性
	 */
	@DbField(name = "CreateDate", type = DbFieldType.DATE, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<DateTime> PROPERTY_CREATEDATE = registerProperty(PROPERTY_CREATEDATE_NAME,
			DateTime.class, MY_CLASS);

	/**
	 * 获取-创建日期
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CREATEDATE_NAME)
	public final DateTime getCreateDate() {
		return this.getProperty(PROPERTY_CREATEDATE);
	}

	/**
	 * 设置-创建日期
	 * 
	 * @param value 值
	 */
	public final void setCreateDate(DateTime value) {
		this.setProperty(PROPERTY_CREATEDATE, value);
	}

	/**
	 * 属性名称-创建时间
	 */
	private static final String PROPERTY_CREATETIME_NAME = "CreateTime";

	/**
	 * 创建时间 属性
	 */
	@DbField(name = "CreateTime", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Short> PROPERTY_CREATETIME = registerProperty(PROPERTY_CREATETIME_NAME,
			Short.class, MY_CLASS);

	/**
	 * 获取-创建时间
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CREATETIME_NAME)
	public final Short getCreateTime() {
		return this.getProperty(PROPERTY_CREATETIME);
	}

	/**
	 * 设置-创建时间
	 * 
	 * @param value 值
	 */
	public final void setCreateTime(Short value) {
		this.setProperty(PROPERTY_CREATETIME, value);
	}

	/**
	 * 属性名称-修改日期
	 */
	private static final String PROPERTY_UPDATEDATE_NAME = "UpdateDate";

	/**
	 * 修改日期 属性
	 */
	@DbField(name = "UpdateDate", type = DbFieldType.DATE, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<DateTime> PROPERTY_UPDATEDATE = registerProperty(PROPERTY_UPDATEDATE_NAME,
			DateTime.class, MY_CLASS);

	/**
	 * 获取-修改日期
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_UPDATEDATE_NAME)
	public final DateTime getUpdateDate() {
		return this.getProperty(PROPERTY_UPDATEDATE);
	}

	/**
	 * 设置-修改日期
	 * 
	 * @param value 值
	 */
	public final void setUpdateDate(DateTime value) {
		this.setProperty(PROPERTY_UPDATEDATE, value);
	}

	/**
	 * 属性名称-修改时间
	 */
	private static final String PROPERTY_UPDATETIME_NAME = "UpdateTime";

	/**
	 * 修改时间 属性
	 */
	@DbField(name = "UpdateTime", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Short> PROPERTY_UPDATETIME = registerProperty(PROPERTY_UPDATETIME_NAME,
			Short.class, MY_CLASS);

	/**
	 * 获取-修改时间
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_UPDATETIME_NAME)
	public final Short getUpdateTime() {
		return this.getProperty(PROPERTY_UPDATETIME);
	}

	/**
	 * 设置-修改时间
	 * 
	 * @param value 值
	 */
	public final void setUpdateTime(Short value) {
		this.setProperty(PROPERTY_UPDATETIME, value);
	}

	/**
	 * 属性名称-版本
	 */
	private static final String PROPERTY_LOGINST_NAME = "LogInst";

	/**
	 * 版本 属性
	 */
	@DbField(name = "LogInst", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_LOGINST = registerProperty(PROPERTY_LOGINST_NAME, Integer.class,
			MY_CLASS);

	/**
	 * 获取-版本
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_LOGINST_NAME)
	public final Integer getLogInst() {
		return this.getProperty(PROPERTY_LOGINST);
	}

	/**
	 * 设置-版本
	 * 
	 * @param value 值
	 */
	public final void setLogInst(Integer value) {
		this.setProperty(PROPERTY_LOGINST, value);
	}

	/**
	 * 属性名称-服务系列
	 */
	private static final String PROPERTY_SERIES_NAME = "Series";

	/**
	 * 服务系列 属性
	 */
	@DbField(name = "Series", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_SERIES = registerProperty(PROPERTY_SERIES_NAME, Integer.class,
			MY_CLASS);

	/**
	 * 获取-服务系列
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_SERIES_NAME)
	public final Integer getSeries() {
		return this.getProperty(PROPERTY_SERIES);
	}

	/**
	 * 设置-服务系列
	 * 
	 * @param value 值
	 */
	public final void setSeries(Integer value) {
		this.setProperty(PROPERTY_SERIES, value);
	}

	/**
	 * 属性名称-数据源
	 */
	private static final String PROPERTY_DATASOURCE_NAME = "DataSource";

	/**
	 * 数据源 属性
	 */
	@DbField(name = "DataSource", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_DATASOURCE = registerProperty(PROPERTY_DATASOURCE_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-数据源
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DATASOURCE_NAME)
	public final String getDataSource() {
		return this.getProperty(PROPERTY_DATASOURCE);
	}

	/**
	 * 设置-数据源
	 * 
	 * @param value 值
	 */
	public final void setDataSource(String value) {
		this.setProperty(PROPERTY_DATASOURCE, value);
	}

	/**
	 * 属性名称-创建用户
	 */
	private static final String PROPERTY_CREATEUSERSIGN_NAME = "CreateUserSign";

	/**
	 * 创建用户 属性
	 */
	@DbField(name = "Creator", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_CREATEUSERSIGN = registerProperty(PROPERTY_CREATEUSERSIGN_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-创建用户
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CREATEUSERSIGN_NAME)
	public final Integer getCreateUserSign() {
		return this.getProperty(PROPERTY_CREATEUSERSIGN);
	}

	/**
	 * 设置-创建用户
	 * 
	 * @param value 值
	 */
	public final void setCreateUserSign(Integer value) {
		this.setProperty(PROPERTY_CREATEUSERSIGN, value);
	}

	/**
	 * 属性名称-修改用户
	 */
	private static final String PROPERTY_UPDATEUSERSIGN_NAME = "UpdateUserSign";

	/**
	 * 修改用户 属性
	 */
	@DbField(name = "Updator", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_UPDATEUSERSIGN = registerProperty(PROPERTY_UPDATEUSERSIGN_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-修改用户
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_UPDATEUSERSIGN_NAME)
	public final Integer getUpdateUserSign() {
		return this.getProperty(PROPERTY_UPDATEUSERSIGN);
	}

	/**
	 * 设置-修改用户
	 * 
	 * @param value 值
	 */
	public final void setUpdateUserSign(Integer value) {
		this.setProperty(PROPERTY_UPDATEUSERSIGN, value);
	}

	/**
	 * 属性名称-创建动作标识
	 */
	private static final String PROPERTY_CREATEACTIONID_NAME = "CreateActionId";

	/**
	 * 创建动作标识 属性
	 */
	@DbField(name = "CreateActId", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_CREATEACTIONID = registerProperty(PROPERTY_CREATEACTIONID_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-创建动作标识
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CREATEACTIONID_NAME)
	public final String getCreateActionId() {
		return this.getProperty(PROPERTY_CREATEACTIONID);
	}

	/**
	 * 设置-创建动作标识
	 * 
	 * @param value 值
	 */
	public final void setCreateActionId(String value) {
		this.setProperty(PROPERTY_CREATEACTIONID, value);
	}

	/**
	 * 属性名称-更新动作标识
	 */
	private static final String PROPERTY_UPDATEACTIONID_NAME = "UpdateActionId";

	/**
	 * 更新动作标识 属性
	 */
	@DbField(name = "UpdateActId", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_UPDATEACTIONID = registerProperty(PROPERTY_UPDATEACTIONID_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-更新动作标识
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_UPDATEACTIONID_NAME)
	public final String getUpdateActionId() {
		return this.getProperty(PROPERTY_UPDATEACTIONID);
	}

	/**
	 * 设置-更新动作标识
	 * 
	 * @param value 值
	 */
	public final void setUpdateActionId(String value) {
		this.setProperty(PROPERTY_UPDATEACTIONID, value);
	}

	/**
	 * 属性名称-数据所有者
	 */
	private static final String PROPERTY_DATAOWNER_NAME = "DataOwner";

	/**
	 * 数据所有者 属性
	 */
	@DbField(name = "DataOwner", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_DATAOWNER = registerProperty(PROPERTY_DATAOWNER_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-数据所有者
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DATAOWNER_NAME)
	public final Integer getDataOwner() {
		return this.getProperty(PROPERTY_DATAOWNER);
	}

	/**
	 * 设置-数据所有者
	 * 
	 * @param value 值
	 */
	public final void setDataOwner(Integer value) {
		this.setProperty(PROPERTY_DATAOWNER, value);
	}

	/**
	 * 属性名称-团队成员
	 */
	private static final String PROPERTY_TEAMMEMBERS_NAME = "TeamMembers";

	/**
	 * 团队成员 属性
	 */
	@DbField(name = "TeamMembers", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_TEAMMEMBERS = registerProperty(PROPERTY_TEAMMEMBERS_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-团队成员
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_TEAMMEMBERS_NAME)
	public final String getTeamMembers() {
		return this.getProperty(PROPERTY_TEAMMEMBERS);
	}

	/**
	 * 设置-团队成员
	 * 
	 * @param value 值
	 */
	public final void setTeamMembers(String value) {
		this.setProperty(PROPERTY_TEAMMEMBERS, value);
	}

	/**
	 * 属性名称-数据所属组织
	 */
	private static final String PROPERTY_ORGANIZATION_NAME = "Organization";

	/**
	 * 数据所属组织 属性
	 */
	@DbField(name = "OrgCode", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_ORGANIZATION = registerProperty(PROPERTY_ORGANIZATION_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-数据所属组织
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_ORGANIZATION_NAME)
	public final String getOrganization() {
		return this.getProperty(PROPERTY_ORGANIZATION);
	}

	/**
	 * 设置-数据所属组织
	 * 
	 * @param value 值
	 */
	public final void setOrganization(String value) {
		this.setProperty(PROPERTY_ORGANIZATION, value);
	}

	/**
	 * 属性名称-过账日期
	 */
	private static final String PROPERTY_POSTINGDATE_NAME = "PostingDate";

	/**
	 * 过账日期 属性
	 */
	@DbField(name = "DocDate", type = DbFieldType.DATE, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<DateTime> PROPERTY_POSTINGDATE = registerProperty(PROPERTY_POSTINGDATE_NAME,
			DateTime.class, MY_CLASS);

	/**
	 * 获取-过账日期
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_POSTINGDATE_NAME)
	public final DateTime getPostingDate() {
		return this.getProperty(PROPERTY_POSTINGDATE);
	}

	/**
	 * 设置-过账日期
	 * 
	 * @param value 值
	 */
	public final void setPostingDate(DateTime value) {
		this.setProperty(PROPERTY_POSTINGDATE, value);
	}

	/**
	 * 属性名称-到期日
	 */
	private static final String PROPERTY_DELIVERYDATE_NAME = "DeliveryDate";

	/**
	 * 到期日 属性
	 */
	@DbField(name = "DocDueDate", type = DbFieldType.DATE, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<DateTime> PROPERTY_DELIVERYDATE = registerProperty(PROPERTY_DELIVERYDATE_NAME,
			DateTime.class, MY_CLASS);

	/**
	 * 获取-到期日
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DELIVERYDATE_NAME)
	public final DateTime getDeliveryDate() {
		return this.getProperty(PROPERTY_DELIVERYDATE);
	}

	/**
	 * 设置-到期日
	 * 
	 * @param value 值
	 */
	public final void setDeliveryDate(DateTime value) {
		this.setProperty(PROPERTY_DELIVERYDATE, value);
	}

	/**
	 * 属性名称-凭证日期
	 */
	private static final String PROPERTY_DOCUMENTDATE_NAME = "DocumentDate";

	/**
	 * 凭证日期 属性
	 */
	@DbField(name = "TaxDate", type = DbFieldType.DATE, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<DateTime> PROPERTY_DOCUMENTDATE = registerProperty(PROPERTY_DOCUMENTDATE_NAME,
			DateTime.class, MY_CLASS);

	/**
	 * 获取-凭证日期
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DOCUMENTDATE_NAME)
	public final DateTime getDocumentDate() {
		return this.getProperty(PROPERTY_DOCUMENTDATE);
	}

	/**
	 * 设置-凭证日期
	 * 
	 * @param value 值
	 */
	public final void setDocumentDate(DateTime value) {
		this.setProperty(PROPERTY_DOCUMENTDATE, value);
	}

	/**
	 * 属性名称-参考1
	 */
	private static final String PROPERTY_REFERENCE1_NAME = "Reference1";

	/**
	 * 参考1 属性
	 */
	@DbField(name = "Ref1", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_REFERENCE1 = registerProperty(PROPERTY_REFERENCE1_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-参考1
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_REFERENCE1_NAME)
	public final String getReference1() {
		return this.getProperty(PROPERTY_REFERENCE1);
	}

	/**
	 * 设置-参考1
	 * 
	 * @param value 值
	 */
	public final void setReference1(String value) {
		this.setProperty(PROPERTY_REFERENCE1, value);
	}

	/**
	 * 属性名称-参考2
	 */
	private static final String PROPERTY_REFERENCE2_NAME = "Reference2";

	/**
	 * 参考2 属性
	 */
	@DbField(name = "Ref2", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_REFERENCE2 = registerProperty(PROPERTY_REFERENCE2_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-参考2
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_REFERENCE2_NAME)
	public final String getReference2() {
		return this.getProperty(PROPERTY_REFERENCE2);
	}

	/**
	 * 设置-参考2
	 * 
	 * @param value 值
	 */
	public final void setReference2(String value) {
		this.setProperty(PROPERTY_REFERENCE2, value);
	}

	/**
	 * 属性名称-备注
	 */
	private static final String PROPERTY_REMARKS_NAME = "Remarks";

	/**
	 * 备注 属性
	 */
	@DbField(name = "Remarks", type = DbFieldType.MEMO, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_REMARKS = registerProperty(PROPERTY_REMARKS_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-备注
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_REMARKS_NAME)
	public final String getRemarks() {
		return this.getProperty(PROPERTY_REMARKS);
	}

	/**
	 * 设置-备注
	 * 
	 * @param value 值
	 */
	public final void setRemarks(String value) {
		this.setProperty(PROPERTY_REMARKS, value);
	}

	/**
	 * 属性名称-已引用
	 */
	private static final String PROPERTY_REFERENCED_NAME = "Referenced";

	/**
	 * 已引用 属性
	 */
	@DbField(name = "Refed", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<emYesNo> PROPERTY_REFERENCED = registerProperty(PROPERTY_REFERENCED_NAME,
			emYesNo.class, MY_CLASS);

	/**
	 * 获取-已引用
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_REFERENCED_NAME)
	public final emYesNo getReferenced() {
		return this.getProperty(PROPERTY_REFERENCED);
	}

	/**
	 * 设置-已引用
	 * 
	 * @param value 值
	 */
	public final void setReferenced(emYesNo value) {
		this.setProperty(PROPERTY_REFERENCED, value);
	}

	/**
	 * 属性名称-已删除
	 */
	private static final String PROPERTY_DELETED_NAME = "Deleted";

	/**
	 * 已删除 属性
	 */
	@DbField(name = "Deleted", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<emYesNo> PROPERTY_DELETED = registerProperty(PROPERTY_DELETED_NAME, emYesNo.class,
			MY_CLASS);

	/**
	 * 获取-已删除
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DELETED_NAME)
	public final emYesNo getDeleted() {
		return this.getProperty(PROPERTY_DELETED);
	}

	/**
	 * 设置-已删除
	 * 
	 * @param value 值
	 */
	public final void setDeleted(emYesNo value) {
		this.setProperty(PROPERTY_DELETED, value);
	}

	/**
	 * 属性名称-业务伙伴类型
	 */
	private static final String PROPERTY_BUSINESSPARTNERTYPE_NAME = "BusinessPartnerType";

	/**
	 * 业务伙伴类型 属性
	 */
	@DbField(name = "CardType", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<emBusinessPartnerType> PROPERTY_BUSINESSPARTNERTYPE = registerProperty(
			PROPERTY_BUSINESSPARTNERTYPE_NAME, emBusinessPartnerType.class, MY_CLASS);

	/**
	 * 获取-业务伙伴类型
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_BUSINESSPARTNERTYPE_NAME)
	public final emBusinessPartnerType getBusinessPartnerType() {
		return this.getProperty(PROPERTY_BUSINESSPARTNERTYPE);
	}

	/**
	 * 设置-业务伙伴类型
	 * 
	 * @param value 值
	 */
	public final void setBusinessPartnerType(emBusinessPartnerType value) {
		this.setProperty(PROPERTY_BUSINESSPARTNERTYPE, value);
	}

	/**
	 * 属性名称-业务伙伴代码
	 */
	private static final String PROPERTY_BUSINESSPARTNERCODE_NAME = "BusinessPartnerCode";

	/**
	 * 业务伙伴代码 属性
	 */
	@DbField(name = "CardCode", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_BUSINESSPARTNERCODE = registerProperty(
			PROPERTY_BUSINESSPARTNERCODE_NAME, String.class, MY_CLASS);

	/**
	 * 获取-业务伙伴代码
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_BUSINESSPARTNERCODE_NAME)
	public final String getBusinessPartnerCode() {
		return this.getProperty(PROPERTY_BUSINESSPARTNERCODE);
	}

	/**
	 * 设置-业务伙伴代码
	 * 
	 * @param value 值
	 */
	public final void setBusinessPartnerCode(String value) {
		this.setProperty(PROPERTY_BUSINESSPARTNERCODE, value);
	}

	/**
	 * 属性名称-业务伙伴名称
	 */
	private static final String PROPERTY_BUSINESSPARTNERNAME_NAME = "BusinessPartnerName";

	/**
	 * 业务伙伴名称 属性
	 */
	@DbField(name = "CardName", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_BUSINESSPARTNERNAME = registerProperty(
			PROPERTY_BUSINESSPARTNERNAME_NAME, String.class, MY_CLASS);

	/**
	 * 获取-业务伙伴名称
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_BUSINESSPARTNERNAME_NAME)
	public final String getBusinessPartnerName() {
		return this.getProperty(PROPERTY_BUSINESSPARTNERNAME);
	}

	/**
	 * 设置-业务伙伴名称
	 * 
	 * @param value 值
	 */
	public final void setBusinessPartnerName(String value) {
		this.setProperty(PROPERTY_BUSINESSPARTNERNAME, value);
	}

	/**
	 * 属性名称-联系人
	 */
	private static final String PROPERTY_CONTACTPERSON_NAME = "ContactPerson";

	/**
	 * 联系人 属性
	 */
	@DbField(name = "CntctCode", type = DbFieldType.NUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<Integer> PROPERTY_CONTACTPERSON = registerProperty(PROPERTY_CONTACTPERSON_NAME,
			Integer.class, MY_CLASS);

	/**
	 * 获取-联系人
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CONTACTPERSON_NAME)
	public final Integer getContactPerson() {
		return this.getProperty(PROPERTY_CONTACTPERSON);
	}

	/**
	 * 设置-联系人
	 * 
	 * @param value 值
	 */
	public final void setContactPerson(Integer value) {
		this.setProperty(PROPERTY_CONTACTPERSON, value);
	}

	/**
	 * 属性名称-单据货币
	 */
	private static final String PROPERTY_DOCUMENTCURRENCY_NAME = "DocumentCurrency";

	/**
	 * 单据货币 属性
	 */
	@DbField(name = "DocCur", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_DOCUMENTCURRENCY = registerProperty(
			PROPERTY_DOCUMENTCURRENCY_NAME, String.class, MY_CLASS);

	/**
	 * 获取-单据货币
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DOCUMENTCURRENCY_NAME)
	public final String getDocumentCurrency() {
		return this.getProperty(PROPERTY_DOCUMENTCURRENCY);
	}

	/**
	 * 设置-单据货币
	 * 
	 * @param value 值
	 */
	public final void setDocumentCurrency(String value) {
		this.setProperty(PROPERTY_DOCUMENTCURRENCY, value);
	}

	/**
	 * 属性名称-单据汇率
	 */
	private static final String PROPERTY_DOCUMENTRATE_NAME = "DocumentRate";

	/**
	 * 单据汇率 属性
	 */
	@DbField(name = "DocRate", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<BigDecimal> PROPERTY_DOCUMENTRATE = registerProperty(PROPERTY_DOCUMENTRATE_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-单据汇率
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DOCUMENTRATE_NAME)
	public final BigDecimal getDocumentRate() {
		return this.getProperty(PROPERTY_DOCUMENTRATE);
	}

	/**
	 * 设置-单据汇率
	 * 
	 * @param value 值
	 */
	public final void setDocumentRate(BigDecimal value) {
		this.setProperty(PROPERTY_DOCUMENTRATE, value);
	}

	/**
	 * 设置-单据汇率
	 * 
	 * @param value 值
	 */
	public final void setDocumentRate(String value) {
		this.setDocumentRate(Decimal.valueOf(value));
	}

	/**
	 * 设置-单据汇率
	 * 
	 * @param value 值
	 */
	public final void setDocumentRate(int value) {
		this.setDocumentRate(Decimal.valueOf(value));
	}

	/**
	 * 设置-单据汇率
	 * 
	 * @param value 值
	 */
	public final void setDocumentRate(double value) {
		this.setDocumentRate(Decimal.valueOf(value));
	}

	/**
	 * 属性名称-单据总计
	 */
	private static final String PROPERTY_DOCUMENTTOTAL_NAME = "DocumentTotal";

	/**
	 * 单据总计 属性
	 */
	@DbField(name = "DocTotal", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<BigDecimal> PROPERTY_DOCUMENTTOTAL = registerProperty(PROPERTY_DOCUMENTTOTAL_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-单据总计
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DOCUMENTTOTAL_NAME)
	public final BigDecimal getDocumentTotal() {
		return this.getProperty(PROPERTY_DOCUMENTTOTAL);
	}

	/**
	 * 设置-单据总计
	 * 
	 * @param value 值
	 */
	public final void setDocumentTotal(BigDecimal value) {
		this.setProperty(PROPERTY_DOCUMENTTOTAL, value);
	}

	/**
	 * 设置-单据总计
	 * 
	 * @param value 值
	 */
	public final void setDocumentTotal(String value) {
		this.setDocumentTotal(Decimal.valueOf(value));
	}

	/**
	 * 设置-单据总计
	 * 
	 * @param value 值
	 */
	public final void setDocumentTotal(int value) {
		this.setDocumentTotal(Decimal.valueOf(value));
	}

	/**
	 * 设置-单据总计
	 * 
	 * @param value 值
	 */
	public final void setDocumentTotal(double value) {
		this.setDocumentTotal(Decimal.valueOf(value));
	}

	/**
	 * 属性名称-项目代码
	 */
	private static final String PROPERTY_PROJECT_NAME = "Project";

	/**
	 * 项目代码 属性
	 */
	@DbField(name = "Project", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_PROJECT = registerProperty(PROPERTY_PROJECT_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-项目代码
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_PROJECT_NAME)
	public final String getProject() {
		return this.getProperty(PROPERTY_PROJECT);
	}

	/**
	 * 设置-项目代码
	 * 
	 * @param value 值
	 */
	public final void setProject(String value) {
		this.setProperty(PROPERTY_PROJECT, value);
	}

	/**
	 * 属性名称-单据类型
	 */
	private static final String PROPERTY_ORDERTYPE_NAME = "OrderType";

	/**
	 * 单据类型 属性
	 */
	@DbField(name = "OrderType", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<String> PROPERTY_ORDERTYPE = registerProperty(PROPERTY_ORDERTYPE_NAME,
			String.class, MY_CLASS);

	/**
	 * 获取-单据类型
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_ORDERTYPE_NAME)
	public final String getOrderType() {
		return this.getProperty(PROPERTY_ORDERTYPE);
	}

	/**
	 * 设置-单据类型
	 * 
	 * @param value 值
	 */
	public final void setOrderType(String value) {
		this.setProperty(PROPERTY_ORDERTYPE, value);
	}

	/**
	 * 属性名称-分支
	 */
	private static final String PROPERTY_BRANCH_NAME = "Branch";

	/**
	 * 分支 属性
	 */
	@DbField(name = "Branch", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<String> PROPERTY_BRANCH = registerProperty(PROPERTY_BRANCH_NAME, String.class,
			MY_CLASS);

	/**
	 * 获取-分支
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_BRANCH_NAME)
	public final String getBranch() {
		return this.getProperty(PROPERTY_BRANCH);
	}

	/**
	 * 设置-分支
	 * 
	 * @param value 值
	 */
	public final void setBranch(String value) {
		this.setProperty(PROPERTY_BRANCH, value);
	}

	/**
	 * 属性名称-预收款
	 */
	private static final String PROPERTY_DOWNPAYMENT_NAME = "DownPayment";

	/**
	 * 预收款 属性
	 */
	@DbField(name = "DownPayment", type = DbFieldType.ALPHANUMERIC, table = DB_TABLE_NAME)
	public static final IPropertyInfo<emYesNo> PROPERTY_DOWNPAYMENT = registerProperty(PROPERTY_DOWNPAYMENT_NAME,
			emYesNo.class, MY_CLASS);

	/**
	 * 获取-预收款
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_DOWNPAYMENT_NAME)
	public final emYesNo getDownPayment() {
		return this.getProperty(PROPERTY_DOWNPAYMENT);
	}

	/**
	 * 设置-预收款
	 * 
	 * @param value 值
	 */
	public final void setDownPayment(emYesNo value) {
		this.setProperty(PROPERTY_DOWNPAYMENT, value);
	}

	/**
	 * 属性名称-已清金额
	 */
	private static final String PROPERTY_CLOSEDAMOUNT_NAME = "ClosedAmount";

	/**
	 * 已清金额 属性
	 */
	@DbField(name = "ClosedAmt", type = DbFieldType.DECIMAL, table = DB_TABLE_NAME, primaryKey = false)
	public static final IPropertyInfo<BigDecimal> PROPERTY_CLOSEDAMOUNT = registerProperty(PROPERTY_CLOSEDAMOUNT_NAME,
			BigDecimal.class, MY_CLASS);

	/**
	 * 获取-已清金额
	 * 
	 * @return 值
	 */
	@XmlElement(name = PROPERTY_CLOSEDAMOUNT_NAME)
	public final BigDecimal getClosedAmount() {
		return this.getProperty(PROPERTY_CLOSEDAMOUNT);
	}

	/**
	 * 设置-已清金额
	 * 
	 * @param value 值
	 */
	public final void setClosedAmount(BigDecimal value) {
		this.setProperty(PROPERTY_CLOSEDAMOUNT, value);
	}

	/**
	 * 属性名称-收款-项目
	 */
	private static final String PROPERTY_RECEIPTITEMS_NAME = "ReceiptItems";

	/**
	 * 收款-项目的集合属性
	 * 
	 */
	public static final IPropertyInfo<IReceiptItems> PROPERTY_RECEIPTITEMS = registerProperty(
			PROPERTY_RECEIPTITEMS_NAME, IReceiptItems.class, MY_CLASS);

	/**
	 * 获取-收款-项目集合
	 * 
	 * @return 值
	 */
	@XmlElementWrapper(name = PROPERTY_RECEIPTITEMS_NAME)
	@XmlElement(name = ReceiptItem.BUSINESS_OBJECT_NAME, type = ReceiptItem.class)
	public final IReceiptItems getReceiptItems() {
		return this.getProperty(PROPERTY_RECEIPTITEMS);
	}

	/**
	 * 设置-收款-项目集合
	 * 
	 * @param value 值
	 */
	public final void setReceiptItems(IReceiptItems value) {
		this.setProperty(PROPERTY_RECEIPTITEMS, value);
	}

	/**
	 * 初始化数据
	 */
	@Override
	protected void initialize() {
		super.initialize();// 基类初始化，不可去除
		this.setReceiptItems(new ReceiptItems(this));
		this.setObjectCode(MyConfiguration.applyVariables(BUSINESS_OBJECT_CODE));
		this.setPostingDate(DateTime.getToday());
		this.setDocumentDate(DateTime.getToday());
		this.setDeliveryDate(DateTime.getToday());
		this.setDocumentStatus(emDocumentStatus.RELEASED);
		this.setBusinessPartnerType(emBusinessPartnerType.CUSTOMER);
	}

	@Override
	protected IBusinessRule[] registerRules() {
		return new IBusinessRule[] { // 注册的业务规则
				new BusinessRuleRequired(PROPERTY_BUSINESSPARTNERTYPE), // 要求有值
				new BusinessRuleRequired(PROPERTY_BUSINESSPARTNERCODE), // 要求有值
				new BusinessRuleMinValue<BigDecimal>(Decimal.ZERO, PROPERTY_DOCUMENTRATE), // 不能低于0
				new BusinessRulePreventCancelDocument(PROPERTY_CANCELED, PROPERTY_DOCUMENTSTATUS), // 阻止取消单据
				new BusinessRuleRequiredElements(PROPERTY_RECEIPTITEMS), // 要求有元素
				new BusinessRuleDocumentStatus(PROPERTY_DOCUMENTSTATUS, PROPERTY_RECEIPTITEMS,
						ReceiptItem.PROPERTY_LINESTATUS), // 使用集合元素状态
				new BusinessRuleSumElements(PROPERTY_DOCUMENTTOTAL, PROPERTY_RECEIPTITEMS, ReceiptItem.PROPERTY_AMOUNT), // 计算单据总计
				new BusinessRuleMinValue<BigDecimal>(Decimal.ZERO, PROPERTY_DOCUMENTTOTAL), // 不能低于0
				new BusinessRuleMaxProperty<BigDecimal>(PROPERTY_DOCUMENTTOTAL, PROPERTY_CLOSEDAMOUNT), // 已清金额不能大过单据总计
		};
	}

	@Override
	public void reset() {
		super.reset();
		this.setDocumentStatus(emDocumentStatus.RELEASED);
		this.setClosedAmount(Decimal.ZERO);
		this.getReceiptItems().forEach(c -> c.setLineStatus(emDocumentStatus.RELEASED));
	}

	@Override
	public void setSeriesValue(Object value) {
		this.setDocNum(String.valueOf(value));
	}

	@Override
	public IBusinessLogicContract[] getContracts() {
		List<IBusinessLogicContract> contracts = new ArrayList<>(4);
		if (this.getBusinessPartnerType() == emBusinessPartnerType.CUSTOMER) {
			contracts.add(new ICustomerCheckContract() {
				@Override
				public String getIdentifiers() {
					return Receipt.this.getIdentifiers();
				}

				@Override
				public String getCustomerCode() {
					return Receipt.this.getBusinessPartnerCode();
				}
			});
		} else if (this.getBusinessPartnerType() == emBusinessPartnerType.SUPPLIER) {
			contracts.add(new ISupplierCheckContract() {
				@Override
				public String getIdentifiers() {
					return Receipt.this.getIdentifiers();
				}

				@Override
				public String getSupplierCode() {
					return Receipt.this.getBusinessPartnerCode();
				}
			});
		}
		// 分支检查
		contracts.add(new IBranchCheckContract() {

			@Override
			public String getIdentifiers() {
				return Receipt.this.toString();
			}

			@Override
			public String getBranch() {
				return Receipt.this.getBranch();
			}
		});
		// 创建分录
		contracts.add(new IJournalEntryCreationContract() {

			@Override
			public boolean isOffsetting() {
				if (Receipt.this.isDeleted()) {
					return true;
				}
				if (Receipt.this instanceof IBOTagCanceled) {
					IBOTagCanceled boTag = (IBOTagCanceled) Receipt.this;
					if (boTag.getCanceled() == emYesNo.YES) {
						return true;
					}
				}
				if (Receipt.this instanceof IBOTagDeleted) {
					IBOTagDeleted boTag = (IBOTagDeleted) Receipt.this;
					if (boTag.getDeleted() == emYesNo.YES) {
						return true;
					}
				}
				return false;
			}

			@Override
			public String getIdentifiers() {
				return Receipt.this.toString();
			}

			@Override
			public String getBranch() {
				return Receipt.this.getBranch();
			}

			@Override
			public String getBaseDocumentType() {
				return Receipt.this.getObjectCode();
			}

			@Override
			public Integer getBaseDocumentEntry() {
				return Receipt.this.getDocEntry();
			}

			@Override
			public DateTime getDocumentDate() {
				return Receipt.this.getDocumentDate();
			}

			@Override
			public String getReference1() {
				return Receipt.this.getReference1();
			}

			@Override
			public String getReference2() {
				return Receipt.this.getReference2();
			}

			@Override
			public JournalEntryContent[] getContents() {
				JournalEntryContent jeContent;
				List<JournalEntryContent> jeContents = new ArrayList<>();
				String DownPaymentRequestCode = MyConfiguration.applyVariables(DownPaymentRequest.BUSINESS_OBJECT_CODE);
				for (IReceiptItem line : Receipt.this.getReceiptItems()) {
					if (line.getDeleted() == emYesNo.YES) {
						continue;
					}
					if (line.getCanceled() == emYesNo.YES) {
						continue;
					}
					if (line.getLineStatus() == emDocumentStatus.PLANNED) {
						continue;
					}
					if (DownPaymentRequestCode.equals(line.getBaseDocumentType())
							|| Receipt.this.getDownPayment() == emYesNo.YES) {
						/** 基于收款申请 或 预收款 **/
						// 收款方式科目
						jeContent = new JournalEntrySmartContent(line);
						jeContent.setCategory(Category.Debit);
						jeContent.setLedger(Ledgers.LEDGER_PAYMENT_RECEIPT_METHOD_ACCOUNT);
						jeContent.setAmount(line.getAmount());// 总计
						jeContent.setCurrency(line.getCurrency());
						jeContent.setRate(line.getRate());
						jeContent.setCashFlow(line.getCashFlow());
						jeContents.add(jeContent);
						// 应收预付款科目
						jeContent = new JournalEntrySmartContent(line);
						jeContent.setCategory(Category.Credit);
						jeContent.setLedger(Ledgers.LEDGER_SALES_DOWN_PAYMENT_RECEIVABLES);
						jeContent.setShortName(Receipt.this.getBusinessPartnerCode());
						jeContent.setAmount(line.getAmount());// 总计
						jeContent.setCurrency(line.getCurrency());
						jeContent.setRate(line.getRate());
						jeContents.add(jeContent);
					} else {
						/** 不基于单据 **/
						// 收款方式科目
						jeContent = new JournalEntrySmartContent(line);
						jeContent.setCategory(Category.Debit);
						jeContent.setLedger(Ledgers.LEDGER_PAYMENT_RECEIPT_METHOD_ACCOUNT);
						jeContent.setAmount(line.getAmount());// 总计
						jeContent.setCurrency(line.getCurrency());
						jeContent.setRate(line.getRate());
						jeContent.setCashFlow(line.getCashFlow());
						jeContents.add(jeContent);
						// 应收款科目
						jeContent = new JournalEntrySmartContent(line);
						jeContent.setCategory(Category.Credit);
						jeContent.setLedger(Ledgers.LEDGER_SALES_DOMESTIC_ACCOUNTS_RECEIVABLE);
						jeContent.setShortName(Receipt.this.getBusinessPartnerCode());
						jeContent.setAmount(line.getAmount());// 总计
						jeContent.setCurrency(line.getCurrency());
						jeContent.setRate(line.getRate());
						jeContents.add(jeContent);
					}
				}
				return jeContents.toArray(new JournalEntryContent[] {});
			}
		});
		return contracts.toArray(new IBusinessLogicContract[] {});
	}

	@Override
	public BigDecimal getPaidTotal() {
		return this.getClosedAmount();
	}

	@Override
	public void setPaidTotal(BigDecimal value) {
		this.setClosedAmount(value);
	}

}

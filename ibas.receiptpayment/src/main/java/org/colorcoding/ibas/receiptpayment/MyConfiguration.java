package org.colorcoding.ibas.receiptpayment;

/**
 * 我的配置项
 */
public class MyConfiguration extends org.colorcoding.ibas.bobas.MyConfiguration {

    /**
    * 模块标识
    */
    public static final String MODULE_ID = "77d894db-e7f7-4fdd-910c-7835612407be";

    /**
    * 命名空间
    */
    public static final String NAMESPACE_ROOT = "http://colorcoding.org/ibas/receiptpayment/";

    /**
    * 数据命名空间
    */
    public static final String NAMESPACE_DATA = NAMESPACE_ROOT + "data";

    /**
    * 业务对象命名空间
    */
    public static final String NAMESPACE_BO = NAMESPACE_ROOT + "bo";

    /**
    * 服务命名空间
    */
    public static final String NAMESPACE_SERVICE = NAMESPACE_ROOT + "service";

    /**
     * 配置项目-文件文件夹
     */
    public final static String CONFIG_ITEM_RECEIPTPAYMENT_FILE_FOLDER = "RPFileFolder";

}

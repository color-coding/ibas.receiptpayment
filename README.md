<div align="center">

# IBAS ReceiptPayment

**收付款模块**

IBAS 系统的收付款模块，提供收款（Receipt）、付款（Payment）与资产充值（Asset Recharge）等资金往来管理功能。

Receipt and payment module for the IBAS system — receipt management, payment management, and asset recharge with full financial transaction support.

[![License](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](LICENSE)
[![Java](https://img.shields.io/badge/Java-1.8+-orange.svg)](https://www.oracle.com/java/)
[![Maven](https://img.shields.io/badge/Maven-3.x-red.svg)](https://maven.apache.org/)
[![Version](https://img.shields.io/badge/version-0.2.0-green.svg)](pom.xml)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#-贡献--contributing)

</div>

---

## 📖 目录 | Table of Contents

- [✨ 特性 | Features](#-特性--features)
- [📦 模块结构 | Modules](#-模块结构--modules)
- [🚀 快速开始 | Quick Start](#-快速开始--quick-start)
- [📋 业务对象 | Business Objects](#-业务对象--business-objects)
- [📚 相关项目 | Related Projects](#-相关项目--related-projects)
- [🤝 贡献 | Contributing](#-贡献--contributing)
- [📄 许可证 | License](#-许可证--license)

---

## ✨ 特性 | Features

- **💰 收款管理** — 收款单（Receipt）与收款明细行管理
- **💸 付款管理** — 付款单（Payment）与付款明细行管理
- **🏦 资产充值** — 资产充值（Asset Recharge）与充值明细行管理
- **🔗 业务联动** — 与销售、采购模块联动，支持单据结算
- **📊 资金追踪** — 收付款与业务伙伴、银行账户关联

---

## 📦 模块结构 | Modules

| 模块 | 类型 | 说明 |
|------|------|------|
| `ibas.receiptpayment` | JAR | **核心模块** — 业务对象定义、仓储层、业务逻辑 |
| `ibas.receiptpayment.service` | WAR | **REST 服务** — Jersey 端点（DataService、FileService） |

---

## 🚀 快速开始 | Quick Start

### 环境要求 | Prerequisites

- **JDK** 1.8+
- **Maven** 3.x
- [ibas-framework](https://github.com/color-coding/ibas-framework)（BOBAS 框架）

### 构建 | Build

```bash
# 克隆仓库
git clone https://github.com/color-coding/ibas.receiptpayment.git
cd ibas.receiptpayment

# 编译全部模块
./compile_packages.sh            # Linux / macOS
compile_packages.bat             # Windows

# 编译单个模块
mvn clean package install -Dmaven.test.skip=true -f ibas.receiptpayment/pom.xml

# 运行测试
mvn test -f ibas.receiptpayment/pom.xml

# 部署
./deploy_packages.sh
```

### Maven 依赖

```xml
<dependency>
    <groupId>org.colorcoding.apps</groupId>
    <artifactId>ibas.receiptpayment</artifactId>
    <version>0.2.0</version>
</dependency>
```

---

## 📋 业务对象 | Business Objects

| 业务对象 | 说明 |
|----------|------|
| `Receipt` / `ReceiptItem` | 收款单与收款明细行 |
| `Payment` / `PaymentItem` | 付款单与付款明细行 |
| `AssetRecharge` / `AssetRechargeItem` | 资产充值与充值明细行 |

---

## 📚 相关项目 | Related Projects

| 项目 | 说明 |
|------|------|
| [ibas-framework](https://github.com/color-coding/ibas-framework) | BOBAS 业务对象框架 |
| [ibas.accounting](https://github.com/color-coding/ibas.accounting) | 财务会计模块 |
| [ibas.sales](https://github.com/color-coding/ibas.sales) | 销售管理模块 |
| [ibas.purchase](https://github.com/color-coding/ibas.purchase) | 采购管理模块 |

---

## 🤝 贡献 | Contributing

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支（`git checkout -b feature/amazing-feature`）
3. 提交更改（`git commit -m 'Add amazing feature'`）
4. 推送到分支（`git push origin feature/amazing-feature`）
5. 发起 Pull Request

---

## 📄 许可证 | License

本项目基于 [Apache License 2.0](LICENSE) 开源。
---

## 🙏 鸣谢 | Thanks

<div align="center">

**[Color-Coding Studio](http://colorcoding.org/)** · 咔啦工作室

</div>

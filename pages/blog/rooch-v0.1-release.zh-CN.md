---
title: Rooch 周报
author: geometryolife
category: Rooch Weekly
date: 2023/06/05
---

## Rooch 的开发进展

### Rooch 系统架构

在 [#11](https://github.com/rooch-network/rooch/issues/11)、[#49](https://github.com/rooch-network/rooch/pull/49)、[#60](https://github.com/rooch-network/rooch/pull/60) 这三个 PR 中，实现了 Rooch 的 RPC 服务功能、Actor 异步计算以及为基本的 CLI 命令提供服务，引入了相关组件并实现了组件之间的通信功能，这几个 PR 完成了 Rooch 系统架构的基本实现。

Rooch 的 RPC 框架使用的是 [`jsonrpsee`](https://github.com/paritytech/jsonrpsee)。

### 反序列化与 Any

在 [#23](https://github.com/rooch-network/rooch/pull/23) 中， 引入了 `bcd` 模块和 `from_bytes` 函数用于实现 `bcs` 的序列化/反序列化功能，为 [`Any` 类型的引入（#18）](https://github.com/rooch-network/rooch/issues/18)提供基础。在 [#24](https://github.com/rooch-network/rooch/pull/24) 引入 `any` 和 `any_copyable` 模块，使得可以用 `Any` 类型来表示任意值。

### 存储抽象

存储抽象（Storage Abstraction）表达了 Move 合约中账户存储的结构，并提供了在合约中直接操作存储的方法。将来，可能会弃用 Move 中与全局存储相关的指令。要实现这个功能，需要实现 [#20](https://github.com/rooch-network/rooch/issues/20) 中的两项功能：（1）引入类型表（Type Table）；（2）实现账户存储。

第一个功能在 [#56](https://github.com/rooch-network/rooch/pull/56) 中引入了 `any_table` 模块，实现了类型表，这个表可以存储任意类型的值。

第二个功能目前还在进行中，关于*账户模块*的任务列表参见：[#16](https://github.com/rooch-network/rooch/issues/16)。

### 基本账户的实现

在 [#50](https://github.com/rooch-network/rooch/pull/50) 实现了4个基础功能，`SignerCapability` 只能存储在其他结构中，不能被删除，资源账户只能由 `SignerCapability` 控制，没有私钥可以控制资源账户。

- 私钥控制的账户
- 由 `ResourceAccount` 控制的帐户
- 以毫秒为单位存储当前 Unix 时间的全局挂钟
- `block`、`transaction_validator` 和 `genesis` 模块的草案实现。

### 账户 API 与 CLI

在 [#68](https://github.com/rooch-network/rooch/pull/68) 中为 jsonrpsee 增加 jsonrpc 实现，目前支持多模块注册 jsonrpc 方法，为 `rooch` CLI 增加了几个账户相关的命令，为其实现了相关的 RPC 方法。

Rooch 当前的账户管理功能实现是在节点服务器端实现账户管理器，CLI 调用账户 API 来管理账户，但账户 API 默认只能通过本地 IP 访问。与以太坊和 Starcoin 一样，这种方式适用于 P2P 节点网络。

在 [#123](https://github.com/rooch-network/rooch/pull/123) 中增加了在 CLI 中通过客户端来管理账户的功能，不过还需要实现服务端和客户端的全局配置功能。关于账户在服务端和客户端管理的相关讨论，参见 [#71](https://github.com/rooch-network/rooch/issues/71)。

### 排序器接口

在 [#41](https://github.com/rooch-network/rooch/issues/41) 有关于排序器设计的相关讨论和任务列表。

#### 排序器抽象接口

在 [#104](https://github.com/rooch-network/rooch/pull/104) 中实现了 `Sequencer` 和 `Proposer` 的抽象接口，trait 的实现交由用户根据实际使用场景来实现。

目前排序器使用的是全局排序，具备一定的灵活性，不但可以保证某一部分交易的顺序，而且没有块的概念。

#### 交易执行器与排序器

在 [#158](https://github.com/rooch-network/rooch/pull/158) 中重构了 `rooch-server`，定义 `rooch-executor` 和 `rooch-sequencer` 两个模块以及定义了存储交易信息的结构 `TransactionInfo`。

### 对象存储与全局存储的混合存储模型

在 [#21](https://github.com/rooch-network/rooch/issues/21) 中构想了对象存储与全局存储混合模型的设计，以博客系统为例子来介绍混合模型的应用场景。

在 [#48](https://github.com/rooch-network/rooch/pull/48) 实现了盒子风格的草案，Box 风格的 Move Object 是一个带着 `ID` 的结构，可以存放资源，而盒子对象能够保存在 Object Store 中。

在 [#28](https://github.com/rooch-network/rooch/pull/28) 完成了 Move 对象的设计实现，在 Rooch 的账户模型中，用户拥有两张表，一张用于存储资源，另一张用于存储模块。全局状态树中的对象，键为 `ObjectID`。每个表都是一个 SMT 树。表对象存储 SMT 的状态根。

### 单元测试

在 [#97](https://github.com/rooch-network/rooch/pull/97) 中，让 `rooch move` 支持运行时，增加了 GitHub 工作流来运行 `moveos-stdlib` 和 `rooch-framework` 的单元测试。

### 私有泛型参数

在 [#172](https://github.com/rooch-network/rooch/pull/172) 实现了私有泛型参数和相应的扩展检查，为开发者提供 `verifier` 注解，而不是 Core Move 的硬编码，提升 Rooch 的开发体验，详细特性请求请参阅 [move-language/move/issues/1043](https://github.com/move-language/move/issues/1043)。

## Rooch 的融资进展

## Rooch 的市场进展

在过去的一个月里，Rooch 在引导其生态系统方面取得了进展。我们已经开发了合作框架的初始版本，目前正在制定合作计划的细节，该计划将很快发布。

我们参与了 30 多个潜在的生态系统和基础设施项目。对于基础设施，它主要关注模块化区块链合作伙伴，例如 Celestia、Avail，以及其他合作伙伴，例如 Layerzero、Polygon、Aptos 等。

生态项目分为三类：Move Based、Web3 Dapp（游戏、社交、DAO）和DeFi。令人兴奋的是，我们在过去几周内获得了大约 10 项软性合作承诺，这些承诺将很快通过新闻稿公布。

此外，我们计划在未来几周内启动 RoochDAO 下的生态系统计划，以鼓励更多参与者加入。

## Rooch 的组织情况

## Rooch 的近期计划

# 什么是 Rooch？

根据[为什么需要 Rooch?](01-why-rooch.md) 的结论，我们需要一个新的 Layer2 方案，所以我们设计了 Rooch。

Rooch 是一个支持多链结算的执行层，用 Move 作为智能合约语言。它目标是连接多链生态与 Web3 DApp，为 Layer1 提供交易与状态的扩容，为 DApp 提供 Move 的执行环境与结算协议。

## 为 Layer1

* 交易扩容：提供更快的交易执行和确认速度，以及更高的交易吞吐（更高的TPS）。
* 状态扩容：将 Layer1 的状态迁移到执行层，释放 Layer1 的智能合约占用的状态空间。

## 为 DApp

* 聚合多链资产
* 提供安全以及即时确认的高速执行环境
* 提供 P2P 网络上的基于状态通道的结算协议

## 关键特性

### 多链结算的执行层（Multi-chain settlement Execution Layer）

Rooch 通过模块化区块链的架构，充分利用当前多链生态的优势，连接多个 Layer1 结算层，专注于构建执行层。通常的模块化区块链的设计方案中，结算层和仲裁层由同一个 Layer1 承担，而 Rooch 的设计中，将二者分开，从而实现了多链结算的支持。

每一层都可以根据不同 Layer1 的特性以及拥堵状态进行选择和调整，详细的技术方案请参看：[模块化区块链架构](04-technology/01-modular-blockchain-architecture/index.md)和[多链结算协议](./04-technology/01-modular-blockchain-architecture/01-multi-chain-settlement-protocol.md)。

而我们有了这样一个多链接算的执行层，就可以安全的将多链资产聚合起来，为 DApp 提供丰富的资产以及统一的结算协议。

### 为 Layer1 实现交易和状态扩容（Transaction & State Scaling for Layer1)

当前主要的分层扩容方案中，主要关注对 Layer1 交易执行的扩容，并没有关注到 Layer1 的状态扩容问题。而我们认为状态爆炸问题未来一定会成为 Layer1 的瓶颈之一，Rooch 同时为 Layer1 提供交易和状态扩容。

* 交易扩容：通过交易的[并行执行](./04-technology/05-parallel-transaction-execution.md)提供更高的吞吐量。
* 状态扩容：Rooch 利用 Move 提供的特性可以将智能合约的状态，从 Layer1 迁移到执行层，从而为 Layer1 实现[状态扩容](04-technology/06-state-scaling.md)。

### 无缝跨层互操作性（Seamless CrossLayer Interoperability）

当前的分层方案中，跨层的交互基本只实现了消息的通信。而我们认为跨层的合约调用对开发者更友好，也更有利于建设多层共享的智能合约生态。

在 Rooch 中，应用的智能合约可以依赖部署在 Move Layer1 中的合约。Move Layer1 是 Rooch 的模块仓库层。

这样可以保证应用之间的依赖和组合的延续性，可以将 DeFi 时代摸索出来的智能合约的可组合性，延伸到跨层的可组合，实现无缝[跨层互操作性](04-technology/07-move-on-rooch/01-cross-layer-interoperability.md)。


### 安全以及即时的交易确认（Secure and Instant transaction confirmation)

Layer2 的方案中并不需要依赖异步的共识机制，确认交易执行结果，所以它可以做到即时的交易确认。但当前的 Layer2 方案中，在交易提交到数据可用层之前，用户需要信任排序服务器的执行结果，而排序服务器可以通过调整用户的交易顺序达到牟利的目的。

而 Rooch 通过提供[交易累加器证明](04-technology/03-transaction-accumulator-proofs.md)机制，保证如果排序服务器一旦改变交易顺序，最终会受到仲裁服务的惩罚，从而保证安全。

同时，Rooch 也设计了随机轮换的[排序服务器的去中心化方案](./04-technology/04-decentralized-validator-network.md)，保证执行层的高可用，同时多个排序服务器之间可以相互制约，保证作弊行为可以及时得到挑战。


### 可执行智能合约的状态通道（SmartContract on State Channel）

状态通道（State Channel） ，或者叫支付通道（Payment Channel），以闪电网络（Lightning Network ）为代表，是一种比较成熟的扩容方案。它的思路是双方各自抵押一部分资产在链上，然后在链下维护一个两个参与方（理论上也可以扩展到多个参与方）的局部共识状态，每次交易只需要双方确认。

但因为当前的状态通道都是架设在 Layer1 之上，创建通道的 Gas 成本和时间成本都很高，无法直接用在 P2P 网络中。而 Rooch 提供了安全以及实时的确认交易的能力，以及低廉的 Gas 费用，使得 P2P 网络中的节点可以在创建网络连接的同时，把这个升级成为一个可执行智能合约的网络连接。

有了这样一个[状态通道](./04-technology/08-state-channel/index.md)，可以在 P2P 网络中实现[高频流式支付](./04-technology/08-state-channel/01-streaming-payment.md)，也让设计 P2P 网络上的 DApp 协议简化许多。



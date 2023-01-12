# 什么是 Rooch？

根据[为什么需要 Rooch？](01-why-rooch.md)的结论，我们需要一个新的基础设施来支撑应用在区块链生态的构建，所以我们设计了 Rooch。

Rooch 是一个支持多链结算的**模块化的 Layer2**，使用 Move 作为智能合约语言，安全受 Ethereum 保证。目标是连接多链生态与 Web3 应用，为公链提供**扩展能力**，为 Web3 应用提供 **Move 执行环境**以及**结算协议**。

![overview](/diagram/rooch-overview.svg)
## 为 Layer1

* 交易扩容：提供更快的交易执行和确认速度，以及更高的交易吞吐（更高的 TPS）。
* 状态扩容：将 Layer1 的状态迁移到执行层，释放智能合约占用的状态空间。

## 为 DApp

* 聚合多链资产。
* 提供安全以及即时确认的高速执行环境。
* 提供模块化应用框架以及 P2P 网络上的基于状态通道的结算协议。

## 关键特性

### 多链结算的 Ethereum Layer2（Ethereum Layer2 with multi-chain settlement）

Rooch 通过模块化的设计，充分利用当前多链生态的优势，连接多个 Layer1 结算层，由仲裁层（Ethereum）保证安全。

通常的模块化区块链的设计方案中，结算层和仲裁层由同一个 Layer1 承担，而 Rooch 将二者分开，从而实现了多链结算。

每一层都可以根据不同 Layer1 的特性以及成本进行选择和调整，详细的技术方案请参看：[模块化架构](04-technology/01-modular-blockchain-architecture/index.md)和[多链结算协议](04-technology/01-modularblockchain-architecture/01-multi-chain-settlement-protocol.md)。

而我们有了这样一个多链结算的 Layer2，就可以安全地将多链资产聚合起来，为 DApp 提供丰富的资产以及统一的结算协议。

### 为 Layer1 实现交易和状态扩容（Transaction and State Scaling for Layer1）

当前主要的分层扩容方案中，主要关注对 Layer1 交易执行的扩容，并没有关注到 Layer1 的状态扩容问题。而我们认为状态爆炸问题未来一定会成为 Layer1 的瓶颈之一，Rooch 同时为 Layer1 提供交易和状态扩容。

* 交易扩容：通过交易的[并行执行](04-technology/05-parallel-transaction-execution.md)提供更高的吞吐量。
* 状态扩容：Rooch 利用 Move 提供的特性可以将智能合约的状态，从 Layer1 迁移到执行层，从而为 Layer1 实现[状态扩容](04-technology/06-state-scaling.md)。

### 在 Layer2 改进性能和安全（Performance & Security improved on Layer2）

Rooch 通过交易 [并行执行](04-technology/05-parallel-transaction-execution.md) 提供了更高的性能，同时在安全方向也做了改进。

Layer2 的方案中并不需要依赖异步的共识机制来确认交易执行结果，所以它可以做到即时的交易确认。但在交易提交到共识以及数据可用层之前，用户需要信任排序服务器的执行结果，因为排序服务器可以通过丢弃用户的交易或者调整用户的交易顺序作弊而牟利。

而 Rooch 通过提供[交易累加器证明](04-technology/03-transaction-accumulator-proofs.md)机制，保证如果排序服务器一旦改变交易顺序，最终会受到仲裁服务的惩罚，从而保证安全。

Rooch 设计了随机轮换的[排序服务器的去中心化方案](04-technology/04-decentralized-validator-network.md)，保证执行层的高可用，同时多个验证节点之间可以相互制约，保证欺诈行为可以及时得到挑战。
### 为 Layer3 提供模块化应用以及 P2P 应用（Modular DApp & P2P DApp for Layer3）

Rooch 在 Layer3 提供了两种构建应用的方式：

1. 模块化应用（Modular DApp）：开发者可以将 Rooch 作为一个模块化应用框架，基于 Rooch 框架构建独立的模块化应用，将 Rooch Layer2 作为结算层。
2. P2P 状态通道应用（P2P state channel DApp）：在 P2P 网络上构建状态通道应用，Rooch Layer2 提供基于状态通道的结算协议。 

## 总结

Rooch 给区块链生态带来的主要价值：

1. 为 Layer1 提供更多的扩容能力
2. 实现更高性能和安全的 Layer2
3. 为 Layer3 创造更多的可能

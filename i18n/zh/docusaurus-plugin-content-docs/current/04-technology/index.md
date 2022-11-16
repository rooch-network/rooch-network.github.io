# 技术架构概览

通过前一个章节，读者大约理解了 Rooch 是什么，以及要做什么。本章节主要用来解答“Rooch 是如何做到的”这个问题。

### 多链结算的执行层

1. [模块化区块链架构](./modular-blockchain-architecture/) : Rooch 作为执行层，在模块化区块链中扮演什么角色，和其他模块层是如何交互的，以及不同的模块层之间的技术选型设计。
2. [多链结算协议](./multi-chain-settlement-protocol) : 多链结算作为 Rooch 的一个关键特性，它的结算协议是如何工作的，以及多链结算协议和跨链的区别。

### 去中心化与安全

1. [欺诈证明](./fraud-proofs)
2. [交易累加证明](./transaction-accumulator-proofs)
3. [去中心化的验证者网络](./decentralized-validator-network)

### 为 Layer1 扩容

1. [并行交易执行](./parallel-transaction-execution)
2. [状态扩容](./state-scaling)

### Move on Rooch

1. [为什么是 Move？](./move-on-rooch/)
2. [跨层的互操作性](./move-on-rooch/cross-layer-interoperability)
3. [账户抽象设计](./move-on-rooch/account-abstraction)
4. [Rooch Move Framework](./move-on-rooch/rooch-framework)
5. [MoveOS](./move-on-rooch/moveos)

### 状态通道

1. [P2P 网络上的状态通道](./state-channel/)
2. [流式支付](./state-channel/streaming-payment)
3. [状态通道上的智能合约](./state-channel/channel-contract)


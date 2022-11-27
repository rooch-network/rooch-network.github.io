# 模块化区块链架构


## 为什么是模块化区块链？

模块化区块链是 Layer2 Rollup 方案的自然演进结果。

通过 Layer2 Rollup 的尝试，我们将交易的执行从 Layer1 迁移到 Layer2，Layer1 上只记录交易，保证数据可用性，并不执行交易。那自然可以想到，数据可用性是不是可以通过其他方式保证，并不需要完全 Rollup 到原始的 Layer1。于是有了模块化区块链运动。

模块化区块链中的模块层如何拆分，业界尚在摸索中。如下图所示，拆分为执行层，结算层，共识和数据可用层。其中结算层也承担仲裁的职责。

![](https://docs.celestia.org/assets/images/monolithic-modular-d2ebbbc814c3338adf1cdd8b91eef221.png)
>（上图来自 https://docs.celestia.org/concepts/how-celestia-works/monolithic-vs-modular）

而 Rooch 在这个基础上进行改进，将仲裁职能从结算层拆分出来，从而支持多个结算层。关于结算协议请参看:[多链结算协议](01-multi-chain-settlement-protocol.md)

## Rooch 的模块化分层

在 Rooch 的模块化架构中，不同的层的职能划分：

![modular](/diagram/rooch-modular.svg)

* **执行层（Execution）**：执行智能合约交易，并保存执行的状态。应用主要和执行层提供的协议和服务交互。
* **模块仓库层（Module Repository）**：在 Rooch 中，应用的合约可以依赖部署在 Move Layer1 上的 Move 合约模块，Move Layer1 可以作为 Move 模块仓库层，这样可以保证应用之间的依赖和组合的延续性。当前 Move Layer1，[Starcoin](https://github.com/starcoinorg/starcoin)，[Aptos](https://github.com/aptos-labs/aptos-core)，[Sui](https://github.com/MystenLabs/sui)。
* **数据可用层（Data Availability）**：保证执行层的交易数据可以通过公开的方式获取，从而保证欺诈证明所依赖的数据可用。
* **共识层（Consensus）**：保证执行层的交易顺序是确定的，不可篡改的。在 Rooch 中，共识层还承担着[交易累加器](../03-transaction-accumulator-proofs.md)的生成以及验证职责。
* **结算层（Settlement）**：实现 Layer1 和执行层之间的状态迁移以及资产结算。结算周期取决于仲裁层的最终确定性周期。可以同时支持多个 Layer1 作为结算层，包括前面提到的 Move 公链以及 Ethereum，BSC 等 EVM 公链，未来会支持所有的具有图灵完备智能合约的 Layer1。
* **仲裁层（Arbitration）**：执行诈证明，并做出裁决。在乐观主义（Optimistic）方案中，仲裁层等待挑战期过后，如果未发生挑战，就认为执行层的交易达到了最终确定，并通知结算层进行结算。
* **链间通信层（CrossChain Message Layer）**：由于以上不同的层会在不同的 Layer1 上，所以需要一个 Layer1 之间的链间通信机制来协同完成结算以及仲裁。





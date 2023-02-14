---
title: Rollup Layer2 的模块化演进之路
---

本文尝试从演化角度讨论 Rollup Layer2 的发展以及演进，主要解答以下几个问题：

1. Rollup 的设计与原理
2. Rollup 的模块化改进
3. Rollup 仲裁机制的改进
4. 模块化带来的可能性
5. 总结

## Rollup 的设计与原理

区块链的“三难问题”一直是困扰业界的一个难题，如果我们认为 Layer1 区块链应该首先保证“去中心化”和“安全”，那将“扩展性”方案从 Layer1 迁移出来就是自然的选择了，于是有了 Layer2。那新的难题就是如何通过 Layer1 来保证 Layer2 的安全。

最初有一种想法是定时将 Layer2 应用的状态树根写到 Layer1，这样可以通过状态证明来校验应用的状态，类似于交易所储备金证明。但这种方式第三方无法通过公开的方式验证两次状态转换是正确的。

为了更深入的探讨这个问题，我们抽象一下，任何程序的状态都可以通过一个状态转换公式表达：
```math
σt+1 ≡ Υ(σt, T)
```
这个公式来自于 Ethereum yellowpaper，但它可以代表任意的程序。在这里 Υ 代表程序，σ 代表状态。状态 σt+1 由程序 Y 通过状态 σt 和交易 T 计算得出。交易 T 代表程序的输入。**任意时候，如果 σt 是确定的，程序 Y 是确定的，T 是确定的，那 σt+1 就是确定的。**

所以要提供公开的可验证性，关键是 Y 要公开可用，历史上所有的 T 要公开可用并且顺序确定，中间的状态可通过 Y 和 T 重新计算得到。而程序的公开可用我们可以通过开源来实现，关键是 T 公开可用如何保证，这就引入了数据可用性（DA）的概念。

**数据可用性** 需要有个公开的不可篡改的账本来记录应用的交易。自然想到，区块链账本就是这样一个系统，于是将 Layer2 的交易写回 Layer1，保证数据可用性，这也就是 Rollup 名称的来源。

所以 Layer2 系统中需要有个角色收集用户的交易，进行排序并写入到 DA，这个角色叫 Sequencer。这里的交易序列叫 Canonical Transaction Chain。

保证了数据的可用性，每个人都可以通过自己运行程序执行交易来得到最终的状态。但这里并没有达成共识，因为每个人不确定自己运行得到的结果是否和其他人的结果一致，毕竟软件或者硬件故障也可能导致数据不一致。所以需要另外一个角色将交易执行后的状态定时公布出来，供大家校验自己的状态，这个角色叫 Proposer。这里梅茨提交的状态也构成了一个链式结构，和交易序列对应，叫 State Commitment Chain。

到这里，我们达到了应用的最终可验证状态。那如果某个人运行的结果和 Proposer 提交的状态不一致，也就是 Proposer 作弊怎么办？那就需要引入仲裁者的角色，而这个仲裁者需要是一个可信第三方，链上合约正好可以承担这个角色。

仲裁有两个方案：

1. Proposer 每次提交状态的时候，同时提供与前一次状态之间的有效证明（validity proof），链上的仲裁合约进行校验。有效证明一般通过 Zero knowledge 技术生成，这种叫 ZK Rollup。
2. 先假定 Proposer 的结果是对的，但如果发现不一致，则提交欺诈证明（fraud proof），由仲裁合约进行判定。如果仲裁合约判定 Proposer 作弊，则对 Proposer 进行惩罚，并将 State Commitment Chain 回滚到欺诈交易之前的状态。当然，为了保证安全，一般会设置一个比较长的挑战周期来达到最终确定性。这种叫 Optimisc Rollup。

有了仲裁合约保证安全，我们还需要实现 Layer1 和 Layer2 之间的资产互通。互通思路是构建一个 Layer1 到 Layer2 之间的桥，Layer1 和 Layer2 之间通过状态证明来资产映射和互通。而 Layer2 的在 Layer1 的状态由 Layer1 的仲裁合约保证，我们可以认为这个桥的安全也受仲裁合约保证。

至此，我们得到了一个由 Layer1 保证安全的，可以和 Layer1 进行资产互通的 Rollup Layer2 方案。

TODO Rollup 方案的图

当然，世界上没有能完全解决三难问题的完美的方案，Rollup 方案也做了一些妥协：

1. 将交易写入 Layer1 ，也就代表 Layer2 的扩展性依然受限于 Layer1 本身区块大小限制的天花板。以 Ethereum 为例，某个 Layer2 完全占据 Ethereum 的所有区块，能提供的平均 TPS 也才数百，扩展性受 DA 限制。
2. 为了节省 Gas 费，Sequencer 会将交易批量写入 DA，而在写入 DA 之前，Sequencer 有可能通过调整交易的顺序作弊。 

这里总结一下 Layer2 的安全以及交易的最终确定性：

1. 如果用户自己运行了一个 Layer2 的节点，并且忠实的按照 DA 的交易顺序执行结果，用户可以认为交易是即时确认并且达到最终确定的，因为如果用户计算的结果和 Proposer 不一样，说明 Proposer 作弊，需要回滚链上的状态链，最终会和用户自己的节点执行的结果一样。 这里主要的风险点在于前面提到的，如果实时从 Sequencer 同步数据，但 Sequencer 尚未写入 DA 的交易带来的风险。
2. 如果用户自己无法运行节点，需要依赖一个 RPC 提供方，用户需要承担一定的信任风险。但这个风险和用户信任 Layer1 的 RPC 节点带来的风险类似。这里额外的风险依然是  Sequencer 丢弃交易或者重排交易带来的风险。

## Rollup 的模块化改进

模块化在这里有两层含义：

1. 通过系统架构的模块化设计，可以让系统可以通过不同模块的组装，满足不同的应用场景需求。
2. 基于 1 提供的能力，和 Layer1 解耦，并不仅仅依赖同一个 Layer1，从而得到更好的扩展性。

而根据前面的分析，DA 是限制当前可扩展性的关键瓶颈，那将 DA 迁移到一个更低成本的链，是一种更好的选择。这也是当前如 Celestia，Polygon Avail 这样的 DA 链的立足点。

我们认为 Sequencer 实际上也属于 DA 方案的一部分，它相当于一个 App-Specific 的 DA。

1. Sequencer 需要提供批量写入 DA 链之前这段时间内的 DA 保证。
2. Sequencer 需要负责交易的验证以及排序，以及最终写入 DA。

于是我们有了以下改进方案：

1. Sequencer 需要给每个交易生成一个 Sequence Proof，证明改交易所在的位置。这个 Sequence Proof 会返回给用户，同时同步给其他节点。如果 Sequencer 在提交给 DA 之前篡改了交易的顺序，用户或者其他节点可以提交 Sequence Proof 给仲裁合约，从而惩罚 Sequencer。
2. Sequencer 只负责验证交易，以及生成 Sequence Proof。Sequencer 允许验证交易所依赖的状态和最新状态之间有一定的延迟，从而保证验证交易不会被交易执行阻塞。我们把这种验证方式叫“交易的柔性验证”。Sequence Proof 是通过 Merkle Accumulator 实现的。
3. Proposer 以及其他节点可以根据自己节点的情况来选择并行方案。只要每个节点保证：只并行没有因果关系的交易，有因果关系的交易需要按 Sequencer 的顺序执行，那最终的结果就是一样的。

于是我们得到了一个低 Gas 费，高 TPS 的模块化 Layer2： Rooch

TODO Rooch 的架构图

* MoveOS：它包含 MoveVM 以及 StateDB。StateDB 由两层的稀疏默克尔树构建，可以提供状态证明。根据前面的分析可得出，状态树以及状态证明是 Rollup 应用不可或缺的组建。
* RPC：
* Sequencer：TODO
* Proposer：TODO
* Challenger： TODO

## Rollup 仲裁机制的改进

1. 交互式欺诈证明 OMO（多链支持）
2. ZK + Optimisc 方案

## 模块化给带来的可能性

### 乐高式拼装

通过模块化，开发者可以通过 Rooch 组合出不同的应用：

* Rooch Ethereum Layer2 = Rooch + Ehtereum(Settlement+Arbitration) + DA  
* XChain Rollup DApp = Rooch + DApp Move Contract + XChain(Settlement + Arbitration) + DA
* Rooch Layer3 Rollup DApp = Rooch + DApp Move Contract + Rooch Ethereum Layer2(Settlement + Arbitration) + DA
* Sovereign Rollup DApp = Rooch + DApp Move Contract + DA

Rooch 的模块化方案可以适应于不同类型以及阶段的应用。比如开发者可以先通过部署合约在 Rooch Ethereum Layer2 上验证自己的想法，等验证成功后，将应用迁移到独立的基于 Rooch 搭建的 App-Specific Rollup 中。

再或者开发者直接通过 Sovereign Rollup 方式启动应用，因为应用早期对安全性要求不高，也没有和其他链互通资产的需求。等应用成长起来，对安全性要求变高，这时候可以启用欺诈证明模块从而保证应用的安全。

### 多链结算

如果我们把 L1ToL2 Bridge 部署到多个链中，我们就得到了一个多链结算的 Layer2。

TODO

## 总结

TODO

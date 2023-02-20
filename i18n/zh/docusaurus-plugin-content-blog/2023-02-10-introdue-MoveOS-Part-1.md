# Introduce Rooch MoveOS part 1

## Where does Rooch MoveOS come from (Rooch MoveOS 从哪里来)

### **区块链的演进**

区块链行业经过10多年的生态发展，从比特币的兴起和以太坊的流行，以区块链为核心的技术引发了 crypto 生态的爆发，各种金融类数字应用和资产已经在加密货币和去中心化金融等方面取得长足的进步，目前区块链进入稳定发展阶段，crypto类似传统的金融业，已经积累了非常好的基础，目前区块链有向更广泛的应用场景发展，Web3 就是其中之一，要满足10亿级以上用户，海量的dApp，能快速响应和高性能，接近 Web2 的体验等。

当前的主要公链都存在不可能三角难题(去中心化，安全性，可扩展性)的困扰，导致了网络拥堵，推高了交易成本。为了适应区块链由 crypto 向 web3 的演进，各大公链也在不断的进化，特别是生态中最活跃的 Ethereum ，其共识也从 PoW 切换为 PoS，Ethereum 定位为 生态中的 Layer1 层，Layer1 提供最终确定性的实现和结算，保证安全性，并在 layer1 基础上构建性能和扩展性更好的 Rollup layer2 层(Arbitrum、Optimism、Starknet等)，Rollup layer2 提供更高的性能和扩展性来满足 web3 的需要，这也是 Ethereum 的扩容方案，最终演变了当下流行的模块化区块链架构。

### **模块化**

模块化区块链架构是相对于之前的单体区块链架构来说的，当前的区块链架构基本都是单体区块链架构，单体区块链是把所有功能都紧密耦合在一条链上，包括执行，通讯，结算以及数据等，而模块化区块链架构却是把每个功能模块分拆为独立的层或链，如下图：

![https://docs.celestia.org/assets/images/monolithic-modular-c078dd91fd68b8e6a168ca8bbccfd3d8.png](https://docs.celestia.org/assets/images/monolithic-modular-c078dd91fd68b8e6a168ca8bbccfd3d8.png)

图片来源: [https://docs.celestia.org/assets/images/monolithic-modular-c078dd91fd68b8e6a168ca8bbccfd3d8.png](https://docs.celestia.org/assets/images/monolithic-modular-c078dd91fd68b8e6a168ca8bbccfd3d8.png)

而 Rooch 在这个基础上进行改进，结合 web2 高性能和扩展性的最佳实践，更细粒度的服务化方式分成：执行层，模块仓库层，数据可用层，共识层，结算层，仲裁层和链间通讯层，并以 Move 为核心构建的高性能 Rollup layer2 ，有关 Rooch 详情请看 📃[Rooch 技术架构](https://rooch.network/zh/docs/technology/) 和 📃[Rooch Rollup Layer2 的模块化演进之路](https://rooch.network/zh/blog/2023/2/14/The-Modular-Evolution-of-Rollup-Layer2/) ，Rooch 架构图如下。

![https://rooch.network/zh/assets/images/rooch-modular-3f38e8dda5bf6149dd1fad2c713aae0f.svg](https://rooch.network/zh/assets/images/rooch-modular-3f38e8dda5bf6149dd1fad2c713aae0f.svg)

## **What is MoveOS (MoveOS 是什么)**

### **MoveOS 是 Rooch 的核心之一**

Rooch 作为主打安全，高性能，可扩展的 Rollup Execution Layer，合约执行能力是核心功能之一，执行的核心就是 MoveOS, 它包含 OMO, MoveVM 以及 StateDB，是系统的执行以及状态存储引擎。StateDB 由两层稀疏默克尔树构建，可以提供状态证明，状态树以及状态证明是 Rollup 应用不可或缺的组件。

MoveOS 是基于 MoveVM 开发的 Move 执行环境，目的是屏蔽不同的 Move Layer1 之间的适配层的差异，对 Move 应用供统一的 Move 运行环境，方便开发者将 Move 集成到不同的应用中，同时，它还会集成 🔖[欺诈证明](https://rooch.network/zh/docs/technology/fraud-proofs) 方案，方便开发者在不同的应用场景中使用欺诈证明机制来保证安。

![https://rooch.network/zh/assets/images/rooch-architecture-9414770217ec12ad7cc101673861c921.svg](https://rooch.network/zh/assets/images/rooch-architecture-9414770217ec12ad7cc101673861c921.svg)

### **MoveOS 的优点(包含MoveVM)**

### **MoveOS functions**

OMO   TODO

MoveVM TODO

StateDB TODO

## **Where does Rooch want to go (Rooch 到哪里去)**

### 应用领域
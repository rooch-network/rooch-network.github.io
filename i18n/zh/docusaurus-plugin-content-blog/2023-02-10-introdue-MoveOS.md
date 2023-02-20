
## Summary of key points

    MoveOS 是 Rooch layer2的核心之一

    Rooch 是基于Move语言的 Layer2

## Where does Rooch come from (Rooch 从哪里来) 

  ### 区块链的演进
    区块链行业经过10多年的生态发展，从比特币的兴起和以太坊的流行，以区块链为核心的技术引发了 crypto 生态的爆发，各种金融类数字应用和资产已经在加密货币和去中心化金融等方面取得长足的进步，目前区块链进入稳定发展阶段，crypto类似传统的金融业，已经积累了非常好的基础，目前区块链有向更广泛的应用场景发展，Web3 就是其中之一，要满足10亿级以上用户，海量的dApp，能快速响应和高性能，接近 Web2 的体验等。

    当前的主要公链都存在不可能三角难题(去中心化，安全性，可扩展性)的困扰，导致了网络拥堵，推高了交易成本。为了适应区块链由 crypto 向 web3 的演进，各大公链也在不断的进化，特别是生态中最活跃的 Ethereum ，其共识也从 PoW 切换为 PoS，Ethereum 定位为 生态中的 Layer1 层，Layer1 提供最终确定性的实现和结算，保证安全性，并在 layer1 基础上构建性能和扩展性更好的 layer2 层(Arbitrum、Optimism、Starknet等)，layer2 提供更高的性能和扩展性来满足 web3 的需要，这也是 Ethereum 的扩容方案，最终演变了当下流行的模块化区块链架构，

  ### 模块化
    模块化区块链架构是相对于之前的单体区块链架构来说的，当前的区块链架构基本都是单体区块链架构，单体区块链是把所有功能都紧密耦合在一条链上，包括执行，通讯，结算以及数据等，而模块化区块链架构却是把每个功能模块分拆为独立的层或链，如下图：
    ![](https://docs.celestia.org/assets/images/monolithic-modular-c078dd91fd68b8e6a168ca8bbccfd3d8.png)
    > (Above figure is from: https://docs.celestia.org/concepts/how-celestia-works/monolithic-vs-modular)

    而 Rooch 在这个基础上进行改进，结合 web2 高性能和扩展性的最佳实践，更细粒度的服务化方式分成：执行层，模块仓库层，数据可用层，共识层，结算层，仲裁层和链间通讯层，并以 Move 为核心构建的高性能 layer2 ，详情请看 [Rooch 技术文档](https://rooch.network/zh/docs/what-is-rooch) 和 [Rooch 技术博客](https://rooch.network/zh/blog/2023/2/14/The-Modular-Evolution-of-Rollup-Layer2/)


### What is MoveOS (Rooch是什么)

  ### MoveOS 是 Rooch 的核心之一
    MoveOS 是基于 MoveVM 开发的 Move 执行环境，目的是屏蔽不同的 Move Layer1 之间的适配层的差异，对 Move 应用供统一的 Move 运行环境，方便开发者将 Move 集成到不同的应用中。

    在 Rooch 的技术架构中，MoveOS 作为 Rooch 的执行层核心，
    ![概览图](./rooch-moveos.svg)
    
  ### Move 的优点(包含MoveVM)

  ### MoveOS functions

  ### MoveOS Advantages

### Where does Rooch want to go (Rooch 到哪里去)

  ### 应用领域

### Summury

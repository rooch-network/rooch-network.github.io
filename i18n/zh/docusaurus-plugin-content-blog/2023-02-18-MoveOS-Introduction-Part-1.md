# Introduce Rooch MoveOS part 1

## Where does Rooch MoveOS come from (Rooch MoveOS 从哪里来)

### 区块链的演进

区块链行业经过10多年的生态发展，从比特币的兴起和以太坊的流行，以区块链为核心的技术引发了 crypto 生态的爆发，各种金融类数字应用和资产已经在加密货币和去中心化金融等方面取得长足的进步，目前区块链进入稳定发展阶段，crypto类似传统的金融业，已经积累了非常好的基础，目前区块链有向更广泛的应用场景发展，Web3 就是其中之一，要满足10亿级以上用户，海量的dApp，能快速响应和高性能，接近 Web2 的体验等。

当前的主要公链都存在不可能三角难题(去中心化，安全性，可扩展性)的困扰，导致了网络拥堵，推高了交易成本。为了适应区块链由 crypto 向 Web3 的演进，在公链成为提供交易最终确定性、结算能力，安全性保证的 Layer1 层，并在 Layer1 基础上构建性能和扩展性更好的 Rollup Layer2 层(Arbitrum、Optimism、Starknet等)，Rollup Layer2 提供更高的性能和扩展性来满足 Web3 的需要，最终演变了当下流行的模块化区块链架构。

![https://docs.celestia.org/assets/images/monolithic-modular-c078dd91fd68b8e6a168ca8bbccfd3d8.png](https://docs.celestia.org/assets/images/monolithic-modular-c078dd91fd68b8e6a168ca8bbccfd3d8.png)

图片来源: [https://docs.celestia.org/assets/images/monolithic-modular-c078dd91fd68b8e6a168ca8bbccfd3d8.png](https://docs.celestia.org/assets/images/monolithic-modular-c078dd91fd68b8e6a168ca8bbccfd3d8.png)

而 Rooch 在这个基础上进行改进，结合 web2 高性能和扩展性的最佳实践，更细粒度的服务化方式分成：执行层，模块仓库层，数据可用层，共识层，结算层，仲裁层和链间通讯层，并以 Move 为核心构建的高性能 Rollup layer2 ，有关 Rooch 详情请看 📃[Rooch 技术架构](https://rooch.network/zh/docs/technology/) 和 📃[Rooch Rollup Layer2 的模块化演进之路](https://rooch.network/zh/blog/2023/2/14/The-Modular-Evolution-of-Rollup-Layer2/) ，Rooch 架构图如下。

![https://rooch.network/zh/assets/images/rooch-modular-3f38e8dda5bf6149dd1fad2c713aae0f.svg](https://rooch.network/zh/assets/images/rooch-modular-3f38e8dda5bf6149dd1fad2c713aae0f.svg)

## What is MoveOS (MoveOS 是什么)

### MoveOS 是 Rooch 的核心之一

Rooch 作为主打安全，高性能，可扩展的 Rollup Execution Layer，合约执行能力是核心功能之一，执行的核心就是 MoveOS, 它包含 OMO, MoveVM 以及 StateDB，是系统的执行以及状态存储引擎。StateDB 由两层稀疏默克尔树构建，可以提供状态证明，状态树以及状态证明是 Rollup 应用不可或缺的组件。

MoveOS 是基于 MoveVM 开发的 Move 执行环境，目的是屏蔽不同的 Move Layer1 之间的适配层的差异，对 Move dApp 供统一的 Move 运行环境，方便开发者将 MoveVM 集成到不同的应用中，同时，它还会集成 🔖[欺诈证明](https://rooch.network/zh/docs/technology/fraud-proofs) 方案，方便开发者在不同的应用场景中使用欺诈证明机制来保证安。

![https://rooch.network/zh/assets/images/rooch-architecture-9414770217ec12ad7cc101673861c921.svg](https://rooch.network/zh/assets/images/rooch-architecture-9414770217ec12ad7cc101673861c921.svg)

### MoveOS 的优点

MoveOS的底层使用Move语言及MoveVM，Move 语言的特性尤其适合对资产类进行编程：

- 资产是一等公民
- 安全性
- 可验证
- 易用性

MoveOS 在充分利用 Move 和 MoveVM 特性的基础上进一步扩展，目标是打造Web3时代的通用智能合约开发语言和运行时。

### MoveOS Features

> OMO
> OMO是一个拥有单步状态证明能力的通用字节码模拟器，为多链执行环境设计。有了 OMO 的支持，可以实现仲裁层的模块化。任意支持图灵完备合约的链，都可以在合约中模拟 OMO 的指令，作为仲裁层：
> 
1.  为多链执行环境设计：拥有丰富的指令与系统调用实现。
2. 多平台支持：对 CPU 与操作系统进行了抽象。
3. 清晰准确的单步状态证明通用方案：拥有进程指令级别的运行状态。

OMO 主要有以下四个关键组件：

- Loader: c加载可执行文件。
- CPU Emulator: 在宿主机上模拟执行指令。
- Registers and Stack: 寄存器与栈模拟。
- OS Interface: 在宿主机上模拟执行系统调用

![https://github.com/rooch-network/omo/raw/main/docs/imgs/arch.png](https://github.com/rooch-network/omo/raw/main/docs/imgs/arch.png)

详情请查看：[OMO 文档](https://github.com/rooch-network/omo/blob/main/docs/guidelines.md)

> MoveVM
> 为了更好达成Move 语言作为区块链智能合约标准语言，MoveVM也在根本上设计为一个可嵌入的运行时，更方便集成的同时，也从安全性和高性能进行设计。Move 语言采用的可执行格式是一种类型化的字节码，它比汇编高级，但比源语言低，保留大量源代码类型信息的格式，同时配合内置的安全算法和字节码验证器来保证代码正确性，确保每个Module是安全可信的：
> 
- 资源安全
- 内存安全
- 类型安全
- 并行能力

详情请参看: Move 语言文档及 MoveVM 规范

[Move language](https://github.com/move-language/move/tree/main/language)

[MoveVM Specification](https://github.com/move-language/move/blob/main/language/documentation/spec/vm.md)

> StateDB
> 
> 
> MoveOS 中的 StateDB (状态存储)主要使用 Sparse Merkle Tree(简称SMT)技术为基础，通过两层SMT结构对状态数据进行组织，在增加极小寻址时间的情况下，极大的提高存储空间和状态证明，较好的解决状态爆炸。
> 
> SMT 是在 Merkle Tree 在的变体，SMT 是一颗预定大小的Merkle tree，能快速识别数据变更和证明的基础上，也可以提供不存在证明(proof of non-inclusion)，同时通过设置默认值的方式解决占用大量容量的问题，即使 Ethereum 中 2¹⁶⁰ 的海量账户也可以保存在 SMT 中。
> 

SMT 参考资料和代码实现：

[Sparse Merkle Tree Introduction](https://medium.com/newcryptoblock/sparse-merkle-tree-introduction-a267f3a29223)

[Diem paper](https://diem-developers-components.netlify.app/papers/the-diem-blockchain/2020-05-26.pdf)

[Diem SMT implement](https://github.com/diem/diem/tree/latest/storage/jellyfish-merkle)

## MoveOS 总结展望

Move OS 作为 Rooch 的执行层的核心，具有安全、高效，资产亲和，并行执行，灵活易用的特点，不仅仅能应用也 Rooch 网络中，也能当成一个独立执行组件和其他 Rollup layer2，Layer3 或 Layer1 结合，可以通过以下3种方式进行集成：

1.  Rollup Layer2 层模块功能 或 Layer1 链中直接集成 MoveOS 功能(需要 Rust 环境)。
2.  MoveOS 编译成 WebAssembly ，再与 Rollup Layer2 或 Layer1 交互。
3. MoveOS 做成独立的GRPC服务，Rollup Layer2 或 Layer1 通过 GRPC 接口通讯。
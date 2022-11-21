# Move 与 Rooch

## 为什么是 Move？

Move 是一种用于编写安全智能合约的编程语言。Move 被设计成一种平台无关（platform-agnostic）的语言，以便在状态和执行模型不同的区块链上实现共同的库、工具和开发者社区。

它有几个关键特性，非常适合作为执行层以及状态通道中的合约编程语言。

1. 比较容易实现[账户抽象（Account Abstraction）](02-account-abstraction.md)。而账户抽象对于支持多链的账户模型，以及 Web3 的接入都有重要的意义。
2. 它通过线性类型实现的面向资源编程模式，可以将智能合约的状态从 Layer1 迁移到执行层，从而为 Layer1 实现[状态扩容](../06-state-scaling.md)。
3. 它的无状态合约模型，可以实现智能合约的跨层复用，从而实现无缝的[跨层互操作](01-cross-layer-interoperability.md)。 
4. 它的状态模型对[并行执行](../05-parallel-transaction-execution.md)友好，可以提供吞吐量更高的执行层。

## MoveOS 与 Rooch Framework

* [MoveOS](04-moveos.md) 提供兼容多链的 Move 执行环境。
* [RoochFramework](03-rooch-framework.md) 提供账户抽象以及跨层交互实现，在合约层兼容不同的 Move Layer1 的实现。
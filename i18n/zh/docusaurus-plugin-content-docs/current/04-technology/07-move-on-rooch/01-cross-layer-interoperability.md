# 跨层的互操作性（Cross Layer Interoperability）

在 Rooch 中，应用的智能合约可以依赖部署在 Move Layer1 中的合约，Move Layer1 是 Rooch 的模块仓库层。这给跨层的互操作性带来了改进的可能，同时也有利于构建统一的 Move 应用生态。

## 跨层消息通信

跨层的消息通讯只传递消息，并不依赖状态，比较容易实现，在当前的 Layer2 的方案中都有实践。

## 跨层合约依赖

由于应用合约实际上是部署在 Move Layer1，我们叫做[模块仓库层](../01-modular-blockchain-architecture/index.md)。

因此，Rooch 上的应用可以直接依赖已经部署在 Layer1 上的合约。而 [Rooch Framework](03-rooch-framework.md) 会同时部署在 Layer1 以及 Rooch 中，并且实现上有差异，屏蔽应用在 Layer1 和 Rooch 中的差异。

## 跨层方法调用

既然我们实现了跨层的合约依赖，当应用运行在执行层或者状态通道的时候，可以直接调用 Layer1 的方法。

![cross layer invoke](/diagram/rooch-cross-layer-invoke.svg)

* 如果该方法中没有读取链上状态，则相当于在链下虚拟机中运行链上合约的字节码，返回结果只取决于输出参数。
* 如果该方法中读取了链上状态，则相当于以 Layer1 的某个高度做状态快照，在状态快照之上运行该方法。
* 如果该方法中修改了链上状态，则该调用相当于一个跨层的调用，需要通过[状态迁移](../06-state-scaling.md)或者异步调用方案实现跨层的方法调用。具体的方案还需要进一步设计。

## 状态标志的延续性

在 Move 中，状态通过类型来标志。由于 Rooch 中的应用的状态类型都在 Layer1 定义，所以可以保证状态从 Layer1 到执行层类型标志的延续，降低用户的认知成本。如果 Layer1 是 EVM 链，我们可以在 Solidity 中模拟 EVM 状态的方式，保证合约地址从 Layer1 到执行层的延续性。具体方案参看[状态迁移](../06-state-scaling.md)。


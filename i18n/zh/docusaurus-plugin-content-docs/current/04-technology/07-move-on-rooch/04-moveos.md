# MoveOS

MoveOS 是基于 MoveVM 的 Move 执行环境封装，目的是屏蔽不同的 Move Layer1 之间的适配层的差异，对外提供统一的 Move 虚拟机接口，给 Rooch 的执行层以及状态通道合约提供 Move 应用的执行环境，也方便开发者将 Move 运行环境集成到不同的应用中。

![modular](/diagram/rooch-moveos.svg)

同时，它还会集成[欺诈证明](../02-fraud-proofs.md)方案，方便开发者在不同的应用场景中使用欺诈证明机制来保证安全。
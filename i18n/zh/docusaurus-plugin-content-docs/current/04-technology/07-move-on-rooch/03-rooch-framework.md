# Rooch Framework

Rooch Framework 是 Rooch 的 Move 基础框架，它主要有以下模块：

## 账户模块

实现[账户抽象](./02-account-abstraction.md)，映射多链账户，维护用户在执行层的状态空间，给应用层提供和用户状态和资产交互的接口。

## 状态迁移模块

实现 Layer1 和执行层之间的[状态迁移](../06-state-scaling.md)。

## Layer1 兼容模块

尽量屏蔽不同的 Move Layer1 之间的差异，降低开发者的开发成本。
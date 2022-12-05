# 欺诈证明（Fraud Proofs）

欺诈证明是 Layer2 项目保证安全的最关键一环。只有实现了欺诈证明，保证 Layer2 上的作弊行为可以在仲裁层得到惩罚，我们才能保证用户的资产安全。

![modular](/diagram/rooch-omo.svg)

## OMO

OMO 是一个拥有单步状态证明能力的通用字节码模拟器：

1. 为多链执行环境设计：拥有丰富的指令与系统调用实现。
2. 多平台支持：对 CPU 与操作系统进行了抽象。
3. 清晰准确的单步状态证明通用方案：拥有进程指令级别的运行状态。

[文档](https://github.com/starcoinorg/omo/blob/main/docs/guidelines.md)
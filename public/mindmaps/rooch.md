---
markmap:
  colorFreezeLevel: 0
  initialExpandLevel: 3
---

<!-- markdown-link-check-disable -->

# Rooch

## 是什么

### ==多链执行层==

- Rooch 是 ==Root & Branch== 的缩写
  - Chain → Root
  - DApp → Branch
- Layer2
  - [Rooch 的角色示意图](https://rooch.network/zh/diagram/rooch-root-branch.svg)
- 连接
  - 多个公链
  - Web3 应用
- Move 执行环境
- 结算协议

### 服务目标

- Layer1 扩容
  - 交易
    - 执行速度
    - 确认速度
    - 吞吐量
  - 状态
    - L1 状态 → 执行层 → 释放状态空间

- DApp
  - 聚合多链资产
  - 执行环境
    - 高速
    - 即时
  - P2P 结算协议
    - 状态通道

### 关键特性

- ==多链结算==执行层
  - 架构
  - 生态
  - 拆分
    - 仲裁层
    - 结算层
  - 安全
  - 统一
- ==交易&状态==扩容
- ==无缝跨层==互操作性
  - 当前
    - 仅消息通信
  - Rooch
    - 开发者友好
    - 合约可跨层调用
    - 多层共享合约生态
    - Move Layer1
      - 模块仓库层
- ==安全&即时==的交易确认
  - 交易累加器
  - 排序服务器
    - 无须异步共识
    - 随机轮换
    - 高可用
- ==可执行==智能合约的状态通道
  - 支付通道
    - 当前
      - L1 上
    - Rooch
      - 节点升级
  - 闪电网络
  - 局部共识
  - 高频交易

## 为什么

### 大规模用户

#### Layer1

- 去中心化
- 无准入
- 自举
  - 最终确定性
    - ==导致扩容难题==

#### 扩容

- (1) 构建新的 L1
  - 取舍：去中心化、安全、扩展性
    - 共识
    - 分片
    - 多链框架
    - 并行执行
- (2) 迁移交易执行
  - 模块化区块链
    - 单体 → 职能模块
- (3) 结合 (1) 和 (2)
  - ==Rooch==

### 应用构建

#### 叙事：CryptoCurrency → Web3

#### Web3

- 去中心化
  - 区块链
    - 结算
    - 仲裁

#### 如何构建 DApp

- Layer1
  - 竞争容量
- 应用链
  - 成本高
  - 扩容难题
- P2P：去中心化网络协议
  - 难点
    - L1 异步 → 难以为 P2P 提供结算能力
    - DApp 构建在链上 → 生态割裂

#### 解决方案

- Rooch
  - 分层模块化
  - 连接多链 L1
  - 统一的==执行环境==和==结算协议==

## 架构

### [技术架构图](https://rooch.network/zh/assets/images/rooch-overview-ac8cf84f2cdcfadfa59b1340a281d1d4.svg)

### 模块化区块链

#### L2 Rollup 自然演进

#### L2 Rollup

- 交易执行 L1 → L2
- L1 保证数据可用性
- L2 执行交易

#### 其他方式保证数据可用性

- 模块化区块链运动

#### [Rooch 的模块化分层（图）](https://rooch.network/zh/assets/images/rooch-modular-63a2ec541b5ba2125ffc8290f6a09600.svg)

- 执行层
- 模块仓库层
- 数据可用层
- 共识层
- 结算层
- 仲裁层
- 链间通信层

### 多链结算协议

#### 结算层

- 位于 L1 和 执行层之间
- 回滚交易

#### [结算层与仲裁层通讯协议图](https://rooch.network/zh/assets/images/rooch-multi-chain-settlement-2bcfe2fb4f4b28b0e9a73e1890767ee6.svg)

#### 多链结算与跨链的区别

- 多链结算
  - 更安全
  - 继承仲裁保护
  - 通用跨层方案

### 欺诈证明

#### [OMO](https://rooch.network/zh/assets/images/rooch-omo-50d659ffdd3c6dc7d0ce214221792776.svg)：通用字节码模拟器

- 多链执行环境
- 多平台支持
- 单步状态证明
  - 通用
  - 清晰
  - 准确
- 进程指令级别
  - 运行状态

#### 交互式仲裁

### 交易累加器证明

#### 作用

- 提供交易证明
- 向仲裁层发起仲裁
  - 防止排序器作弊

#### 原理

- [默克尔累加器](https://cookbook.starcoin.org/zh/docs/concepts/accumulator/)

#### [交互流程](https://rooch.network/zh/assets/images/rooch-secure-txn-confirmation-eb608efc0447e6f1c24799dc65f6c191.svg)

- 排序器
  - 执行结果
  - 累加器的根
    - 记录在共识层
  - 当前交易的位置

- 用户
  - 交易顺序与共识层
    - 一致
    - 不一致
      - 发起仲裁

### 去中心化的验证者网络

#### 中心化排序器弊端

- 单点风险
  - 宕机 → 整个网络不可用
- 排序器作弊
  - 丢弃交易
  - 调整交易顺序

#### 验证者角色说明

- 排序器（Sequencer）
  - 排序交易
  - 计算状态树的根
  - 计算交易累加器的根
- 校验者（Verifier）
  - 获取交易
    - 共识层
    - 数据可用层
  - 执行
  - 校验
  - 申请仲裁

#### 去中心化方案

- L2 共识
  - 保证交易顺序
- 设计思路
  - 抵押 Token 注册为验证者
  - 每个 Epoch 随机选择验证者作为排序器
  - 未被选上的验证者自动成为校验者
  - 验证者构成 P2P 网络
    - 转发交易 → 排序器
    - 排序器执行并转发 → 其他验证者

#### 激励机制

- 其他 L2 方案
  - 校验者节点无收益
  - 发现欺诈，挑战成功 → 有收益
- Rooch
  - 验证者有概率成为排序器
  - 获取交易 gas

### 并行交易执行

- 在多个 CPU 上执行
  - 更高的单机吞吐量
- Move 的状态模型
  - 业界范例 Aptos、Sui
- 排序器在周期内确定
  - 发挥并行优势
  - 吞吐量只受限于单机

### 为 L1 状态扩容

#### 状态爆炸

- Token 时代
  - 不明显
- NFT 时代
  - 明显
- 未来 Web3 时代
  - 新型数字资产
  - 应用状态
- 解决方法
  - 状态计费
    - 延缓状态爆炸
  - Rooch 方案
    - ==状态跨层迁移==

#### 状态迁移

#### [RST](https://rooch.network/zh/assets/images/rooch-state-move-500da3f0c022e7eb642efdb17ac25277.svg)

- Rollup State Tree
- 稀疏默克尔树
- 不存在证明
  - 插入
- 存在证明
  - 更新
  - 删除
- 使用场景
  - 状态存储方案
  - 状态迁移方案
- Move 链的状态迁移
  - 自由状态
- EVM 链的状态迁移
  - 每个合约维护一个 RST

### 为什么是 Move

#### 优势

- 平台无关
- 线性类型
- 面向资源
- 账户抽象
- 无状态合约
- 并行执行友好

#### [MoveOS](https://rooch.network/zh/assets/images/rooch-moveos-217eb2afcd791c8d90a4540a71615692.svg)

- 兼容多链的执行环境

#### Rooch Framework

- 账户抽象
- 跨层合约

#### 跨层互操作性

- 消息通信
- 合约依赖
  - Move Layer1
  - 统一 Move 生态
- 方法调用
  - 没有读取链上状态
  - 读取链上状态
  - 修改链上状态
- 状态类型的延续性
  - 降低用户认知成本
  - 在 Solidity 模拟 Move 状态

#### 账户抽象

- 用于支持多链结算
- 多链地址映射
  - Rooch 账户 : 多链账户 = 1 : n
- 多链状态映射
  - 保存用户状态

#### Rooch Framework

- Move 实现的基础框架
- 模块
  - 账户模块
  - 状态迁移模块
  - Layer1 兼容模块

### P2P 网络上的状态通道

- [Rooch 与 P2P](https://rooch.network/zh/assets/images/rooch-p2p-92625200fe69329ede8221118eb0d5e7.svg)
  - 简化 P2P 协议实现
  - 高频流式支付
- 状态通道的表达
  - 开启
  - 使用
  - 关闭
    - 协作式
    - 超时
    - 欺诈
- 流式支付
  - 网络带宽只首先于参与方
  - 细粒度付费
    - 字节
    - 请求
  - 降低信任风险
  - 按需付费
- 智能合约
  - 通用
  - 可执行
  - 简化 P2P 协议设计
  - 探索
    - 五子棋游戏

## 使用场景

### DEX/Swap/DeFi

### 多链资产初始化发行

### 状态通道应用

## L2 项目概览

<!-- markdown-link-check-enable -->

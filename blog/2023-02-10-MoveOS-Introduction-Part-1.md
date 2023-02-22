---
title: "MoveOS Introduction Part 1"
authors: [lshoo, geometryolife]
slug: moveos-introduction-part-1
---

## Where does Rooch MoveOS come from

### Blockchain evolution

After more than 10 years of ecological development in the blockchain industry, from the rise of Bitcoin and the popularity of Ethereum, the blockchain-centric technology has triggered the outbreak of the crypto ecosystem. Various financial digital applications and assets have been used in cryptocurrencies and Decentralized finance and other aspects have made great progress. At present, the blockchain has entered a stable development stage. Crypto is similar to the traditional financial industry and has accumulated a very good foundation. At present, the blockchain is developing towards a wider range of application scenarios. Web3 is One of them is to meet the needs of more than 1 billion users, a large number of DApps, fast response and high performance, and an experience close to Web2.

当前的主要公链都存在不可能三角难题(去中心化，安全性，可扩展性)的困扰，导致了网络拥堵，推高了交易成本。为了适应区块链由 crypto 向 Web3 的演进，在公链成为提供交易最终确定性、结算能力，安全性保证的 Layer1 层，并在 Layer1 基础上构建性能和扩展性更好的 Rollup Layer2 层(Arbitrum、Optimism、Starknet等)，Rollup Layer2 提供更高的性能和扩展性来满足 Web3 的需要，最终演变了当下流行的模块化区块链架构。

The current major public chains are troubled by the impossible triangle problem (decentralization, security, scalability), which leads to network congestion and pushes up transaction costs. In order to adapt to the evolution of the blockchain from crypto to Web3, the public chain has become a Layer1 layer that provides transaction finality, settlement capabilities, and security guarantees, and builds a Rollup Layer2 layer (Arbitrum) with better performance and scalability on the basis of Layer1. , Optimism, Starknet, etc.), Rollup Layer2 provides higher performance and scalability to meet the needs of Web3, and finally evolved the current popular modular blockchain architecture.

![https://docs.celestia.org/assets/images/monolithic-modular-c078dd91fd68b8e6a168ca8bbccfd3d8.png](https://docs.celestia.org/assets/images/monolithic-modular-c078dd91fd68b8e6a168ca8bbccfd3d8.png)

Image source: [https://docs.celestia.org/assets/images/monolithic-modular-c078dd91fd68b8e6a168ca8bbccfd3d8.png](https://docs.celestia.org/assets/images/monolithic-modular-c078dd91fd68b8e6a168ca8bbccfd3d8.png)

And Rooch improves on this basis, combining the best practices of Web2 high performance and scalability, the more fine-grained service method is divided into: execution layer, module warehouse layer, data availability layer, consensus layer, settlement layer, arbitration layer and Inter-chain communication layer, and a high-performance Rollup Layer2 built with Move as the core. For details about Rooch, please refer to 📃Rooch Technical Architecture and 📃Rooch Rollup Layer2's modular evolution path. The Rooch architecture diagram is as follows:

![https://rooch.network/zh/assets/images/rooch-modular-3f38e8dda5bf6149dd1fad2c713aae0f.svg](https://rooch.network/zh/assets/images/rooch-modular-3f38e8dda5bf6149dd1fad2c713aae0f.svg)

## What is MoveOS

### MoveOS is one of Rooch's core

Rooch is a secure, high-performance, and scalable Rollup Execution Layer. Contract execution capability is one of its core functions. The core of execution is MoveOS, which includes OMO, MoveVM, and StateDB, which are the system’s execution and state storage engines. StateDB is constructed from two layers of sparse Merkle trees, which can provide state proofs. State trees and state proofs are indispensable components of Rollup applications.

MoveOS is a Move execution environment developed based on MoveVM. The purpose is to shield the differences in the adaptation layers between different Move Layer1, and provide a unified Move operating environment for Move dApps, which is convenient for developers to integrate MoveVM into different applications. At the same time, It will also integrate 🔖fraud proof schemes to facilitate developers to use fraud proof mechanisms in different application scenarios to ensure security.

![https://rooch.network/zh/assets/images/rooch-architecture-9414770217ec12ad7cc101673861c921.svg](https://rooch.network/zh/assets/images/rooch-architecture-9414770217ec12ad7cc101673861c921.svg)

### Advantages of MoveOS

The bottom layer of MoveOS uses the Move language and MoveVM. The features of the Move language are especially suitable for programming asset classes:

- Assets are first class citizens
- Safety
- Verifiable
- Usability

In order to better achieve the Move language as a standard language for blockchain smart contracts, MoveVM is also fundamentally designed as an embeddable runtime, which is more convenient for integration and also designed for security and high performance. The executable format adopted by the Move language is a typed bytecode, which is higher than assembly but lower than source language. It retains a large amount of source code type information, and cooperates with built-in security algorithms and bytecode verifiers to Ensure the correctness of the code and ensure that each Module is safe and reliable:

- Resource security
- Memory safety
- Type safety
- Parallel capability

MoveOS further expands on the basis of making full use of the features of Move and MoveVM, with the goal of creating a general-purpose smart contract development language and runtime in the Web3 era.

### MoveOS functions

OMO   TODO

MoveVM TODO

StateDB TODO

## Where does Rooch want to go

### Application field

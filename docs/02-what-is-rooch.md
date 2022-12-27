# What is Rooch

Following the conclusion of [Why Rooch?](01-why-rooch.md), we needed a new layered modular blockchain solution, so we designed Rooch.

Rooch is the first **execution layer** that supports **multi-chain settlement**, using **Move** as the smart contract language. It aims to connect the multi-chain ecosystem to Web3 DApp, provide **transaction and state scaling** for Layer1, and provide the **execution environment** and **settlement protocol** for DApp.

![overview](/diagram/rooch-overview.svg)

## For Layer1

* Transaction Scaling: Provide faster transaction execution and confirmation, and higher transaction throughput (higher TPS).
* State Scaling: Migrate Layer1 state to the execution layer, freeing up the state space consumed by smart contracts.

## For DApp

* Aggregate multi-chain assets.
* Provide secure and instant confirmed high-speed execution environment.
* Provide a state-channel-based settlement protocol on P2P networks.

## Key Features

### Multi-chain settlement Execution Layer

Rooch takes benefit of the current multi-chain ecosystem through a modular blockchain architecture that connects multiple Layer1 settlement layers and focuses on building an execution layer. 

Normally, the modular blockchain solution has the settlement layer and arbitration layer in the same Layer1, but Rooch separates the two, thus enabling multi-chain settlement.

Each layer can be selected and adapted according to the features and cost of different Layer1. For detailed technical solutions, please refer to: [modular blockchain architecture](04-technology/01-modular-blockchain-architecture/index.md) and [multi-chain settlement protocol](04-technology/01-modular-blockchain-architecture/01-multi-chain-settlement-protocol.md).

And with such an implementation layer for multi-chain computing, we can securely aggregate multi-chain assets to provide DApps with rich assets as well as a unified settlement protocol.

And with such an execution layer for multi-chain settlement, we can securely aggregate multi-chain assets to DApps, provide a unified settlement protocol to DApps.

### Transaction and State Scaling for Layer1

The current major layered scaling solutions mainly focus on scaling Layer1 transaction execution, but not on Layer1 state scaling. We believe that the state explosion problem will become one of the bottlenecks of Layer1 in the future, and Rooch provides both transaction and state scaling for Layer1.

* Transaction scaling: through the [parallel transaction execution](04-technology/05-parallel-transaction-execution.md) to provide higher throughput.
* State Scaling: Rooch uses the features provided by Move to migrate the state of smart contract, from Layer1 to the execution layer, thus enabling [state scaling](04-technology/06-state-scaling.md) for Layer1.

### Seamless CrossLayer Interoperability

In current layered solution, cross-layer interaction is basically implemented only for message communication. We believe that cross-layer contract invocation are more developer-friendly and helpful for building a cross-layer smart contract ecosystem.

In Rooch, an application's smart contracts can depend on and invoke contracts deployed in Move Layer1. The Move Layer1 is the module repository layer of Rooch.

This ensures the continuity of dependencies and combinations between applications, and extends the combinability of smart contracts figured out in the DeFi era to cross-layer combinability, enabling seamless [cross-layer interoperability](04-technology/07-move-on-rooch/01-cross-layer-interoperability.md). .

This bring the composability of smart contracts that was figured out in the DeFi era to cross-layer composability, ensuring [seamless cross-layer interoperability](04-technology/07-move-on-rooch/01-cross-layer-interoperability.md).


### Secure and Instant transaction confirmation

The Layer2 solution does not rely on an asynchronous consensus mechanism to confirm transaction execution results, so it can achieve instant transaction confirmation. 

However, before the transaction is submitted to the consensus and data availability layer, the user needs to trust the execution result of the sequencer, because the sequencer can make profits by dropping the user's transaction or adjusting the order of the user's transaction.


And Rooch ensures security by providing [transaction accumulator proofs](04-technology/03-transaction-accumulator-proofs.md) mechanism to guarantee that if the sequencer ever changes the order of transactions, it will eventually be punished by the arbitration service.

At the same time, Rooch also designed a randomly [rotating sequencer solution](04-technology/04-decentralized-validator-network.md) to ensure high availability of the execution layer, while multiple validators can constrain each other to ensure that fraud can be challenged just in time.


### SmartContract on State Channel

The State Channel, or Payment Channel, represented by the Lightning Network, is a proven scaling solution. The idea is that each participant pledges a certain amount of assets on the chain, and then maintains a local consensus state off-chain that contains only the participants, and each transaction only needs to be confirmed by the participants together，so it can support high frequency transactions in the channel.

However, current state channels are built on Layer1, the costs of Gas and time to create a channel is high and cannot be directly used in P2P networks. 

Rooch provides secure and instant transaction confirmation and low transaction costs, allowing nodes in a P2P network to create a network connection and upgrade it to a [state channel](04-technology/08-state-channel/index.md), thus enabling [high-frequency streaming payment](04-technology/08-state-channel/01-streaming-payment.md) in P2P networks.

Also, Rooch supports [smart contract in state channel](04-technology/08-state-channel/02-channel-contract.md) through the feature of Move, simplifying the design of game and DApp protocol on P2P networks.

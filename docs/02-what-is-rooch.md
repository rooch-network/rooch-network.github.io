# What is Rooch

Following the conclusion of [Why Rooch?](01-why-rooch.md), 
we need a new infrastructure to support the building of applications in the blockchain ecosystem, so we designed Rooch.

Rooch is a **modular layer2** that supports multi-chain settlement, using Move as the smart contract language and security guaranteed by Ethereum. It aims to connect the multi-chain ecosystem with Web3, provides **scalability** for public chains, **Move execution environment** and **settlement protocol** for Web3 DApp.

![overview](/static/diagram/rooch-overview.svg)

## For Layer1

* Transaction Scaling: Provide faster transaction execution and confirmation, and higher transaction throughput (higher TPS).
* State Scaling: Migrate Layer1 state to the execution layer, freeing up the state space consumed by smart contracts.

## For DApp

* Aggregate multi-chain assets.
* Provide secure and instant confirmed high-speed execution environment.
* Provide Modular DApp framework and state-channel-based settlement protocol on P2P networks.

## Key Features

### Ethereum Layer2 with multi-chain settlement

Rooch takes benefit of the current multi-chain ecosystem through a modular architecture that connects multiple Layer1 as settlement layers and the arbitration layer (Ethereum) guarantees security. 

Normally, the modular blockchain solution has the settlement layer and arbitration layer in the same Layer1, but Rooch separates the two, thus enabling multi-chain settlement.

Each layer can be selected and adapted according to the features and cost of different Layer1. For detailed technical solutions, please refer to: [modular blockchain architecture](04-technology/01-modular-blockchain-architecture/index.md) and [multi-chain settlement protocol](04-technology/01-modular-blockchain-architecture/01-multi-chain-settlement-protocol.md).

With such a multi-chain settlement Layer2, we can securely aggregate multi-chain assets and provide DApp with rich assets and a unified settlement protocol.

### Transaction and State Scaling for Layer1

The current major layered scaling solutions mainly focus on scaling Layer1 transaction execution, but not on Layer1 state scaling. We believe that the state explosion problem will become one of the bottlenecks of Layer1 in the future, and Rooch provides both transaction and state scaling for Layer1.

* Transaction scaling: through [parallel transaction execution](04-technology/05-parallel-transaction-execution.md) to provide higher throughput.
* State Scaling: Rooch uses the features provided by Move to migrate the state of smart contract, from Layer1 to the execution layer, thus enabling [state scaling](04-technology/06-state-scaling.md) for Layer1.

### Performance & Security improved on Layer2

Rooch provides higher performance through [parallel transaction execution](04-technology/05-parallel-transaction-execution.md), and also improves security.

The Layer2 solution does not rely on an asynchronous consensus mechanism to confirm transaction execution results, so it can achieve instant transaction confirmation. 

However, before the transaction is submitted to the consensus and data availability layer, the user needs to trust the execution result of the sequencer, because the sequencer can make profits by dropping the user's transaction or adjusting the order of the user's transaction.


And Rooch ensures security by providing [transaction accumulator proofs](04-technology/03-transaction-accumulator-proofs.md) mechanism to guarantee that if the sequencer ever changes the order of transactions, it will eventually be punished by the arbitration service.

At the same time, Rooch also designed a randomly [rotating sequencer solution](04-technology/04-decentralized-validator-network.md) to ensure high availability of the execution layer, while multiple validators can constrain each other to ensure that fraud can be challenged just in time.


### Modular DApp & P2P DApp for Layer3

Rooch provides two ways to build applications at Layer3:

1. Modular DApp: Developers can use Rooch as a modular DApp framework, build dedicated modular DApp based on the Rooch framework, and use Rooch Layer2 as the settlement layer.
2. P2P state channel DApp: Build DApp on a P2P network, and Rooch Layer2 provides a state-channel-based settlement protocol.

## Summarize

The main value Rooch brings to the blockchain ecosystem:

1. More Scaling For Layer1
2. High performance & security On Layer2
3. More Possibility For Layer3

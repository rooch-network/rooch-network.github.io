# Why Rooch


After all these years of development, the blockchain industry has achieved initial proof in the fields of Cryptocurrency and DeFi, and the prototypes of applications are already present, but how to make blockchain technology adopted by massive users is the most important challenge that the industry needs to solve at present.

We can deconstruct the challenge into two questions:

1. How can blockchain support massive users? That is the blockchain scaling problem.
2. How can the blockchain support the building of applications? That is the relationship between blockchain and Web3 application.

## How can blockchain support massive users

The most critical goal of blockchain is to achieve decentralization, ensure **Permissionless**, and make a "bootstrap" infrastructure system to serve everyone without distinction, and we call such a system **Layer1**.

The key feature of Layer1 is "bootstrap", and its **Finality** only relies on its own internal consensus system, not on external arbitrators. This design also brings scalability problems.

There are two key ideas to solve the scaling problem:

1. Adopt new technologies, try to build a new Layer1, such as improving consensus, sharding, multi-chain framework, parallel execution, etc., and make different trade-offs in decentralization, security, and scalability.
2. Migrate the execution of transactions from Layer1 to other layers to achieve scaling. The idea of modular blockchain is evolved further to split the blockchain from a monolithic architecture into multiple functional modules, which are provided by different systems.

There is no consensus in the industry as to how the "Layer" of a blockchain should be divided.

But we can give a broad definition here:

**Layer2** is a blockchain scaling technology solution that achieves **finality** through Layer1, to ensure **security**. It can contain its own internal consensus or rely on external systems to implement consensus, and the key is that its execution results can be reversed on Layer1 through an **arbitration** mechanism. 

And the achievements of the above two directions of exploration can be combined.

## How blockchain can support the building of applications

If we solve the blockchain scaling problem, we also need applications to attract massive users into the decentralized world, which is the main reason why the industry has shifted from Cryptocurrency story to Web3 story.

The relationship between Web3 and blockchain is still debated, but we believe that if Web3 applications are decentralized, it must require the settlement and arbitration capabilities provided by blockchain.

There are several major directions to explore how decentralized applications (DApps) can be built on the chain.

1. The application is directly implemented through smart contracts, running on the generic smart contract Layer1, so that it can also be migrated to the Layer2 execution layer.
2. The application is implemented through a dedicated application chain, which implements the application logic on the chain and contains a internal consensus mechanisms.
3. The application is built on a P2P network and is represented as a decentralized protocol.

All applications in Option 1 run in the same global smart contract world, with no isolation between applications, easily ensuring **composability**, but competing for the capacity of the same Layer1.

Option 2 achieves application isolation, but has higher startup costs and still has Layer1 scaling problem.

We believe that the Web3 application will be built out as Option 3, and there are two difficulties in combining P2P networks and chains:

1. The asynchronous confirmation mechanism of Layer1 makes it difficult to provide settlement capability to P2P networks directly.
2. In a multi-chain ecosystem, applications built directly on the chain will cause fragmentation of the application ecosystem.

### Solution

Based on the above discussion, we found that there is a need for such a protocol:

1. It is a layered modular scaling solution.
2. It can connect multiple Layer1 to take full benefit of the multi-chain ecosystem and provide scaling capacity for multiple Layer1. 
3. It bridges the gap between multiple chains through a layer of abstraction to provide a unified execution environment and settlement protocol for Web3 applications.

And this is the goal of **Rooch**.


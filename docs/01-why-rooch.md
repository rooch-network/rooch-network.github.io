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

Option 1，all applications run in the same global smart contract world, with no isolation between applications, easily ensuring **composability**, but competing for the throughput and state capacity of the same Layer1.

Option 2 achieves application isolation, but it has to be responsible for security by itself, and the startup costs are higher. At the same time, it still has Layer1 scaling problem.

Option 3 has a mature application pattern and no scaling challenges, but how to combine with the chain is a challenge.

Therefore, how to support the building of DApp in the blockchain ecosystem, realize the isolation of applications, and reduce the startup cost of applications is the main task of the current Web3 infrastructure, which is also the goal of Rooch.
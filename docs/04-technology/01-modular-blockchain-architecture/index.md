# Modular Blockchain Architecture

## Why Modular Blockchain?

Modular blockchain is a natural evolution of the Layer2 Rollup solution.

With the Layer2 Rollup experiment, we migrate the execution of transactions from Layer1 to Layer2, where only transactions are recorded on Layer1 to guarantee data availability, and no transactions are executed on Layer2. So it is natural to think that data availability should can be guaranteed in other ways, and it is not necessary to Rollup transactions to the original Layer1.

The industry is still figuring out how to split the module layer in the modular blockchain. As shown in the figure below, it is split into an execution layer, a settlement layer, a consensus and a data availability layer. Where the settlement layer also takes on the role of arbitration.

! [](https://docs.celestia.org/assets/images/monolithic-modular-d2ebbbc814c3338adf1cdd8b91eef221.png)
> (https://docs.celestia.org/concepts/how-celestia-works/monolithic-vs-modular)

Rooch improves on this by splitting the arbitration role from the settlement layer, thus can supporting multiple settlement layers. For the settlement protocol, please refer to:[Multi-chain settlement protocol](01-multi-chain-settlement-protocol.md)

## Rooch's modular layering

In the modular architecture of Rooch, the roles of the different layers are split as follows

! [modular](/diagram/rooch-modular.svg)

* **Execution Layer**: executes smart contract transactions and keeps the state of the execution. The application mainly interoperates with the protocols and services provided by the execution layer.
* **Module Repository Layer**: In Rooch, the application's contracts can depend on the Move contract modules deployed on Move Layer1. The Move Layer1 can be used as a Move module repository layer, thus ensuring the continuation of dependencies and combinations between applications. Current Move Layer1, [Starcoin](https://github.com/starcoinorg/starcoin), [Aptos](https://github.com/aptos-labs/aptos-core), [Sui](https://) github.com/MystenLabs/sui).
* **Data Availability Layer**: ensures that the transaction data of the execution layer is publicly available, thus ensuring the availability of the data on which the fraud proof relies.
* **Consensus Layer**: guarantees that the order of transactions in the execution layer is deterministic and non-tamperable. in Rooch, the consensus layer also takes responsibility for the [transaction accumulator](../03-transaction-accumulator-proofs.md) generation and validation.
* **Settlement layer**: performs [state migration](../06-state-scaling.md) and asset settlement between Layer1 and the execution layer. Settlement period depends on the final deterministic period of the arbitration layer. Multiple Layer1s can be supported simultaneously as settlement layer, including the previously mentioned Move public chain and EVM public chains such as Ethereum and BSC, and all Layer1s with Turing-complete smart contracts will be supported in the future.
* **Arbitration layer**: performs fraud proofs and makes arbitrations. In the Optimistic scenario, the Arbitration layer waits for the challenge period to pass. If no challenge occurs, it considers the execution layer's transactions to have reached finality and notifies the settlement layer for settlement.
* **CrossChain Message Layer**: Since the above different layers will be on different Layer1, an inter-chain communication mechanism between Layer1 is needed to collaborate to complete the settlement as well as arbitration.

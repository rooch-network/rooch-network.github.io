# Decentralized validator network

In the current Layer2 solution, it is a challenge how to decentralize the sequencer. If the sequencer cannot be decentralized, on the one hand, there is a single point of risk that the whole network will be unavailable when the sequencer is down, and on the other hand, there is also the risk of sequencer fraud. Before transactions are written in batches to the data availability layer and the consensus layer, the sequencer can fraud by dropping transactions or adjusting the order of transactions.

Rooch was designed at the beginning with this in mind, trying to build a decentralized validator network.

## Validator Role Definition

* **Sequencer**: order and executes transactions, compute the root of the state tree, and the root of the transaction accumulator.
* **Verifier**: Fetches transactions from the consensus and data availability layers, executes and verifies them, and initiates fraud proofs to the arbitration layer if the results are found to be incorrect.
  
The Sequencer and Verifier are called Validator in Rooch.


## Decentralized Solutions

Since Layer2 consensus only needs to determine the order of transactions, the correctness of transaction execution can be guaranteed by challenge deterrence. To ensure the order of transactions, it is only necessary to write the transactions (or the transaction hash) to Layer1, which has the role of consensus layer.

Therefore, Layer2 or execution layer does not need to build a PBFT consensus network to decide the transaction order and execution results to achieve decentralization, but only needs to design a rotation mechanism of the sequencer and a data synchronization protocol on the P2P network.

The initial design idea is as follows.

1. Anyone can register as a validator on the chain by pledging a certain amount of Token. 
2. Each Epoch, the smart contract on the chain randomly selects a validator as a sequencer.
3. Nodes that are not selected as sequencer automatically become verifier.
4. All the verifiers form a P2P network, and the transactions received by the verifier will be forwarded to the sequencer, which will be ordered and executed and forwarded to the other verifiers with the root of the state tree after the transaction execution and the [transaction accumulator proof](./03-transaction-accumulator-proofs.md).

## Incentives

In the current Layer2 solution, there is no gain for the verifier to run the node, unless the fraud of the sequencer is detected and the challenge is successful. But this probability is too small to be an incentive to run a verifier node.

In Rooch, any verifier has the probability of being a sequencer and can earn user transaction fees, and the verifier has an incentive to keep running the node and play the role of a verifier.

:::note

TODO The need for a dedicated verifier reward requires further design

:::

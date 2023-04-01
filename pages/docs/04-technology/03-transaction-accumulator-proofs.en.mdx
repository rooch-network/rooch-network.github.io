# Transaction Accumulator Proofs

Transaction accumulator proofs provide proof that a transaction is in a certain position. Suppose the sequencer tampered with the order of a transaction or dropped a transaction. In that case, the user or verifier can initiate arbitration with the arbitration layer contract via the transaction accumulator proof.

## How accumulators work

The accumulator used in Rooch is the MerkleAccumulator, an accumulator implemented through the Merkle Tree. It has the proof ability of a Merkle Tree, providing proof of the position of a leaf node under a certain root node, and is used in Rooch to implement transaction position proofs.

The Merkle accumulator has been used in Starcoin to provide position proofs for transactions and blocks. For a detailed technical implementation refer to the [Starcoin Cookbook Accumulator chapter](https://cookbook.starcoin.org/zh/docs/concepts/accumulator/).

## Interaction flow for transaction accumulator proofs

When the user submits a transaction to the sequencer, the sequencer returns to the user the result of the execution, as well as the root of the accumulator and the proof of the position of the transaction after it is added to the accumulator, with sequencer‘s signature.

The root of the accumulator is recorded in the consensus layer and verified by the consensus layer. Suppose the user finds that the order of the transactions recorded in the consensus layer does not match the order of the transactions when he submits them. In that case, he can initiates arbitration with the arbitration layer via the transaction accumulator proof.

![secure txn confirmation](/diagram/rooch-secure-txn-confirmation.svg)

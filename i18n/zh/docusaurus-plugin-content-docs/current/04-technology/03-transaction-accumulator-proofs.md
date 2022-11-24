# 交易类累加器证明（Transaction Accumulator Proofs）

交易累加器证明可以提供交易在某个位置的证明，如果排序器篡改交易的顺序或者丢弃交易，用户或验证者可以通过交易累加器证明向仲裁层合约发起仲裁。

## 累加器的原理

Rooch 中使用的累加器是默克尔累加器（MerkleAccumulator），一种通过默克尔树（Merkle Tree）实现的累加器。它具有默克尔树的证明能力，可以提供在一个确定的根节点下，某个叶子节点的位置证明。Rooch 中用它来实现交易位置证明。

默克尔累加器已经在 Starcoin 中使用，提供交易以及区块的位置证明。详细的技术实现参看[Starcoin Cookbook Accumulator 章节](https://cookbook.starcoin.org/zh/docs/concepts/accumulator/)。

## 交易累加器证明的交互流程

当用户给排序器提交交易后，排序器返回给用户执行结果的同时，也返回该交易增加到累加器后，累加器的根以及该交易的位置证明，并带上自己的签名。

累加器的根会记录在 Rollup Chain 的区块头中，如果用户发现最后共识层记录的交易顺序和自己提交时到交易顺序不一致，可以通过交易位置证明向仲裁层发起仲裁。



![secure txn confirmation](/diagram/rooch-secure-txn-confirmation.svg)
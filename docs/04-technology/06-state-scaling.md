# State Scaling for Layer1

Blockchain wants to carry massive users, in addition to solving the throughput problem of transaction execution, there is also a problem that the industry has not yet generally concerned about is the state expansion. Obviously, if hundreds of millions of users hold many types of assets and application states on the chain, the state explosion problem will soon have to be faced.

This problem was not obvious in the Token era, after all, Tokens can be split and merged, and only need to be represented by a number. In the era of NFT explosion, this problem is obvious, a large number of NFT issuers want to save the NFT metadata and even images on the chain. When the next Web3 applications explode, new assets or application states created by various applications will have to solve the problem of state explosion if they all want to be saved on the chain.

The main idea of solving the state explosion on Layer1 is to charge fee for the state, forcing users to use the state on the chain carefully through the cost, and motivate them to delete useless states. However, this approach cannot fundamentally solve the state explosion problem, but can only delay the problem.

Rooch uses the state feature of Move to design a cross-layer state migration solution, which can migrate state from Layer1 to Layer2 and thus scale the Layer1 state.

## State Migration

The idea of state migration is to maintain a state tree on the chain that only records the root on the chain and stores the whole data off-chain, which we can call **Rollup State Tree**, or RST for short.

![state move](/static/diagram/rooch-state-move.svg)

When the user state on the chain is migrated into RST, the state disappears from the chain, as NFT1 in the above figure. the Validate node of Rooch will apply the state tree operation off-chain, NFT1 appears in the state tree off-chain, and the user can retrieve it from the state tree off-chain to achieve state migration.

When the off-chain state needs to be migrated back to the chain, it is necessary to take the proof of inclusion of the RST leaf node and perform the operation on the chain.

### Rollup State Tree

RST is a Sparse Merkle Tree. A Sparse Merkle Tree can provide proof of non-inclusion, and with a proof of non-inclusion, on-chain updates can be implemented without global data.

If we want to insert a non-inclusion leaf node in RST, we need to provide the non-inclusion proof of that leaf node at the current root, and the value of the new node, and the contract can verify the non-inclusion proof and compute the new root.

```
non-inclusion proof + new value = inclusion proof => new root
```

If we want to update a leaf node, we need to provide the proof of inclusion of the node, and the new value, and the new root can be computed by replacing the leaf node in the proof with the new value.

If we want to delete a leaf node, we need to provide the proof of inclusion of that node, and replace the value of that node with the default value of Sparse Merkle Tree, and we can computed the new root.

Scenarios of RST usage.

1. If all update operations occur on the chain, the RST can be used as an off-chain state storage solution that is fully secured by the contract.
2. If a function is provided to update the RST root hash directly, but with the condition that the finalized root is achieved through a challenge period, then it can be used as an execution layer state migration solution.
3. If a function is provided to update the RST root hash directly, but with the condition that the root is signed by all participants, then it can be used as a state migration solution in the state channel.


Since the state mechanisms of Move and EVM are different, this solution is used differently on the two different chains.

### Move chain state migration

:::note

A diagram is needed here

:::

Move allows state to be moved between contracts through the resource-oriented programming pattern implemented by linear types, which we call "free state", and the most common "free state" is mainly asset-based state, Token and NFT.

If Layer1 is a Move chain, we can also take advantage of this feature to achieve "free state" migration cross layers. The application simply transfers state to the RST in the Rooch Framework, and the Rooch Framework provides the contract to migrate the state cross layer.

### EVM chain state migration

The state in EVM cannot be moved cross contracts, but each contract can maintain an internal RST to enable state migration. Once the state is mapped to the execution layer, it can be changed to "free state" by Move.

:::note

Here is another diagram

:::

But this approach is only suitable for new contracts, how to support already deployed contracts needs further research.

:::note

TODO need some Solidity code example 

:::

### Related links

* [RollupMap](https://github.com/movefuns/movefuns/issues/10)
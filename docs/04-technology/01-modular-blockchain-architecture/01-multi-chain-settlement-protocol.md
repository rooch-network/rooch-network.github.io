# Multi-chain Settlement protocol

Multi-chain settlement is the most important feature of Rooch, and this chapter details the protocols and challenges to be solved for multi-chain settlement. 

## Responsibilities of the settlement layer

In [Modular Blockchain Architecture](index.md), we specify that the responsibility of the settlement layer is to perform state migration and asset settlement between Layer1 and the execution layer.

Rooch deploys a settlement smart contract each settlement Layer1, which maintains an off-chain state tree, with only the root of the state tree recorded on the chain, through which users migrate state between Layer1 and Rooch. For the specific migration protocol, refer to: [state scaling](../06-state-scaling.md). 

1. When a user migrates state from Layer1 to Rooch, the state appears in the state tree of Rooch after the transactions in Layer1 are finalized.
2. When a user migrates state from Rooch to Layer1, the state is first locked and waits for the challenge period to pass before being moved out of the state tree for settlement.
3. When the settlement layer receives a notification from the arbitration layer that fraud has occurred, it rolls back the root of the off-chain state tree to before the fraud occurred, discarding any state tree changes made during that period.


## Communication protocols between multiple settlement layers and the arbitration layer

! [multi chain settlement](/diagram/rooch-multi-chain-settlement.svg)

:::note

TODO this chapter needs to be improved

:::

## The difference between multi-chain settlement and cross-chain

If a single-chain Layer2 is connected to multiple Layer1 by cross-chain, what is the difference between it and multi-chain settlement?

1. Multi-chain settlement is more secure. The security of the cross-layer bridge in a multi-chain settlement solution is protected by the arbitration layer, and the execution layer inherit the security of the arbitration layer.
2. More generic cross-layer solution. In Rooch's multi-chain settlement solution, cross-layer is achieved through a generic state migration pattern where states can be used to represent Token, NFT, digital contracts, and other future application states, without the need to design specialized protocols for new state types.
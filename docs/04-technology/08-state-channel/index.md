# State Channel on P2P Network

The State Channel, or Payment Channel, represented by the Lightning Network, is a proven scaling solution. The idea is that each participant pledges a certain amount of assets on the chain, and then maintains a local consensus state off-chain that contains only the participants, and each transaction only needs to be confirmed by the participants together，so it can support high frequency transactions in the channel.

However, current state channels are built on Layer1, the costs of Gas and time to create a channel is high and cannot be directly used in P2P networks. 

Rooch provides secure and instant transaction confirmation and low transaction costs, allowing nodes in a P2P network to create a network connection and upgrade it to a state channel, thus enabling [high-frequency streaming payment](./01-streaming-payment.md) in P2P networks.

Also, Rooch supports [smart contract in state channel](./02-channel-contract.md) through the feature of Move, simplifying the design of game and DApp protocol on P2P networks.

![p2p](/diagram/rooch-p2p.svg)

## Representation of a state channel

Each state channel is actually an RST maintained at the execution level by the participants of the channel, so it can also use the [state migration](./06-state-scaling.md) pattern to migrate state from the execution layer to the state channel.

:::note

TODO Representation via the Move contract

:::

## Opening the channel

The channel participants (typically both participants, but can be extended to multiple participants), commit funds to a smart contract on the Rooch execution layer, initialize the RST, and open the state channel.

Since transactions at the Rooch execution layer are confirmed instantly, the user can open a state channel for each scenario, e.g. one state channel per game.

## Using the channel

Transactions on state channel execute a smart contract method, just like transactions on the execution layer, and then trigger a change in state. The key difference is that a contract on a state channel can only modify the state in the channel, but a contract on a state channel can still read the state in Layer1 and the execution layer to implement some complex logic. For example, participants can swap in the state channel based on the prices in Layer1 Oracle.


## Closing the channel

Closing the channel can be done in three scenarios.

1. Collaborative closing, where it is settled from the execution layer instantly, if all participants agree.
2. Passive closure by waiting for a timeout, where the state tree root is settled with the last common confirmation of the participants. The timeout duration can be set by agreement between the participants when opening the channel.
3. One participant frauds, and the other participant can use [fraud-proofs] (../02-fraud-proofs.md) to initiate an arbitration request at the Rooch execution layer for settlement by the arbitration contract.


* [streaming-payment](01-streaming-payment.md)
* [state channel contract](02-channel-contract.md)
# SmartContract on State Channel

The current state channel solutions all only enable payments through the state channel. If a new asset type is invented and wants to be applied in state channel, the solution of the state channel needs to be redesigned. It has been a challenge to implement a universal state channel that can execute smart contracts.

We believe that Web3 applications will be implemented as protocols over P2P, and running generic smart contracts on state channels will simplify the design of protocols at the P2P network layer, such as billing protocols and exchange protocols.

Thanks to Move's state model, we can execute application contracts deployed in Layer1 or Rooch execution layers directly on the state channel, see [Cross-Layer Invocation](.../07-move-on-rooch/01-cross-layer-interoperability.md).


For example, if there is a game written in Move, two users can create a dedicated state channel for this game and play on the state channel. The state of the game is actually only stored in the state channel, and when the game is over, both players clear out and the state of the game is discarded (or backed up in the user's device, of course), while the game's smart contract is still in Layer1 or the Rooch execution layer.

Related explores for applications on the state channel.

1. [Thor](https://github.com/starcoinorg/thor): Implement a WASM-based smart contract engine on Lightning Network, through a third-party arbitration service, players can play Gobang games on Lightning Network.
2. [Gobang game on Move State Channel](https://github.com/starcoinorg/stargate/tree/master/demo/Gobang): a proof-of-concept solution for Move state channel that implements a Gobang game on the state channel, with the game implemented via Move.
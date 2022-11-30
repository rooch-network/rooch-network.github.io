# Cross Layer Interoperability

Cross-layer interoperability is one of the challenges in a layered solution, and the following solutions for cross-layer interaction are provided in Rooch.

## Cross-layer message communication

Cross-layer message communication only passes messages and does not rely on state, which is easier to implement and is practiced in current Layer2 solutions.

## Cross-layer contract dependencies

In Rooch, an application's smart contracts can depend on contracts deployed in Move Layer1, Move Layer1 is Rooch's [Module Repository Layer](../01-modular-blockchain-architecture/index.md). This brings the potential for improving cross-layer interoperability , as well as building a unified Move application ecosystem.

## Cross-layer function invoke

Now that we have implemented cross-layer contract dependencies, we can directly invoke Layer1 function when the application is running in the execution layer or state channel.

![cross layer invoke](/diagram/rooch-cross-layer-invoke.svg)

* If the function does not read the on-chain state, it is equivalent to running the bytecode of the on-chain contract in the off-chain virtual machine, and the result depends only on the input parameters.
* If the function reads the on-chain state, it is equivalent to taking a snapshot of the state at the height of Layer1, reading the state from the state snapshot, and computing the result.
*  If the function modifies the on-chain state, it needs to use [state migration](../06-state-scaling.md) and an asynchronous call to achieve cross-layer method invocation. Further research is needed on how to achieve a seamless developer experience.

## Continuation of state types

In Move, state is identified by type, and Rooch's cross-layer state migration solution ensures continuation of state types and reduces user awareness costs. If Layer1 is an EVM chain, we can simulate the Move state in Solidity to ensure the continuation of contract addresses, this needs further researc. Refer to [State Migration](../06-state-scaling.md) for the solution.


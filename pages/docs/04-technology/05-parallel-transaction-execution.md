# Parallel Transaction Execution

Parallel transaction execution allows transactions to be executed on multiple CPU cores simultaneously, leading to higher single-host throughput, this is a common optimization approach in the Web2 infrastructure area.

Move's state pattern is more advantageous in achieving parallel transaction execution and has been attempted in the industry, such as Aptos, Sui.

Rooch's sequencer is deterministic within an Epoch, and its throughput is limited only by the efficiency of single-host transaction execution, making it easier to take advantage of parallel execution.

### Reference Links
1. [Optimistic concurrency control](https://en.wikipedia.org/wiki/Optimistic_concurrency_control)
2. [Block-STM: How We Execute Over 160k Transactions Per Second on the Aptos Blockchain](https://medium.com/aptoslabs/block-stm-how-we-execute-over-160k-transactions-per-second-on-the-aptos-blockchain-3b003657e4ba)
3. [Sui consensus](https://docs.sui.io/learn/architecture/consensus)


:::note

This document needs further improvement

:::
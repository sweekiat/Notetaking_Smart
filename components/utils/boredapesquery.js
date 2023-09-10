

const boredapesquery = `
query  MyQuery($_eq: Address, $blockchain: TokenBlockchain!, $limit: Int) {
  Ethereum: TokenTransfers(
    input: {filter: {tokenAddress: {_eq: $_eq}}, blockchain: $blockchain, limit: $limit}
  ) {
    TokenTransfer {
      from {
        identity
      }
      to {
        identity
      }
      amount
      tokenAddress
      tokenId
      tokenType
      transactionHash
      blockTimestamp
      blockNumber
    }
    pageInfo {
      nextCursor
      prevCursor
    }
  }
}`
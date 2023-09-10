import Link from "next/link";
import {init,useQuery} from "@airstack/airstack-react";
import { Button } from "flowbite-react";


const API_KEY = process.env.Airstack_API_KEY;
init("ba6c253c5847422d8252178b4aa919a3"); // just exposing it as its a default key



export default function Findingdata(address,blockchain,limit=50) {


const query = `
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
}`;
 

    const {data,loading,error} = useQuery(query,{$_eq:address,$blockchain:blockchain,$limit:limit},{cache:false});
  
 
  
  return (
    {loading}
  );
}


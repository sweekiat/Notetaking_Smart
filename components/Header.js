import { Button } from "flowbite-react";
import Link from "next/link";
import { useContext, useState } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

export default function Header({ connect, isConnected, execute }) {
  const [account, setAccount] = useState(null);
  const [running, setRunning] = useState(false);

  return (
    <header className="flex flex-row items-center justify-between bg-slate-800 p-4 text-white">
      <h1 className="text-3xl font-bold">hi</h1>
      <Link href="/">MyNotes</Link>
      {isConnected ? (
        <Button
          onClick={() => {
            execute();
            setRunning(true);
          }}
          disabled={running}
        >
          {running ? "running" : "run contract?"}
        </Button>
      ) : (
        <Button onClick={connect} disabled={isConnected}>
          {isConnected ? "You are connected" : "Connect to metamask"}
        </Button>
      )}
    </header>
  );
}

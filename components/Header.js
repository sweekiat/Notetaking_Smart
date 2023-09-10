import { Button } from "flowbite-react";
import Link from "next/link";
import { useContext, useState } from "react";

import { ethers } from "ethers";

export default function Header({ connect, isConnected,}) {

  const [running, setRunning] = useState(false);

  return (
    <header className="flex flex-row items-center justify-between bg-slate-800 p-4 text-white">
      <h1 className="text-xs font-bold">{isConnected?window.ethereum.selectedAddress:"hi"}</h1>
      <Link href="/">MyNotes</Link>
      {isConnected ? (
        <Button
          onClick={() => {
            setRunning(true);
          }}
          disabled={running||isConnected}
        >
          {running ? "running" : "Connected"}
        </Button>
      ) : (
        <Button onClick={connect} disabled={isConnected}>
          {isConnected ? "You are connected" : "Connect to metamask"}
        </Button>
      )}
    </header>
  );
}

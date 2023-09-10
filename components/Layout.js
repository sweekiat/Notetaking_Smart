import Header from "./Header";

import { ethers } from "ethers";
import { useEffect, useState, cloneElement } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const [isConnected, setIsConnected] = useState(false);
  const [signer, setSigner] = useState(null);
  console.log(isConnected);

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await ethereum.request({ method: "eth_requestAccounts" });
        setIsConnected(true);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setSigner(provider.getSigner());
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  }

  return (
    <>
      <title>Notey</title>
      <Header connect={connect} isConnected={isConnected} />
      <div className="flex flex-row">
        <div className="w-40 border-r"><Sidebar/></div>
        <div className="min-h-screen flex-grow mt-6 ml-6">{children}</div>
      </div>
    </>
  );
}

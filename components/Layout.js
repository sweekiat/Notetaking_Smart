import Header from "./Header";
import Sidebar from "./Sidebar";
import { ethers } from "ethers";
import { useEffect, useState, cloneElement } from "react";
import { noteyABI } from "../notey";

export default function Layout({ children }) {
  const [isConnected, setIsConnected] = useState(false);
  const [signer, setSigner] = useState(null);
  const [data, setData] = useState([]);
  const CONTRACT_ADDRESS = "0x7EF2e0048f5bAeDe046f6BF797943daF4ED8CB47";
  const [contract, setContract] = useState(null);
  // const [contract,setContract] = useState(null);
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
  async function execute() {
    if (typeof window.ethereum !== "undefined") {
      const contract = new ethers.Contract(CONTRACT_ADDRESS, noteyABI, signer);

      try {
        setContract(contract);
        const data = await contract.getNotes(); // should return a list of note objects created by smart contract
        setData(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("install metamask");
    }
  }

  async function addNote(noteId, content, title) {
    if (contract) {
      await contract.addNote(noteId, content, title);
    }
  }
  async function deleteNote(noteId) {
    if (contract) {
      await contract.deleteNote(noteId);
    }
  }
  async function getNote(noteId) {
    if (contract) {
      await contract.getNoteId(noteId);
    }
  }
  return (
    <>
      <title>Notey</title>
      <div className="min-h-screen w-full ">
        <Header connect={connect} isConnected={isConnected} execute={execute} />
        <div className="flex items-stretch w-full h-screen">
          <div className="w-80 ">
            <Sidebar data={data} />
          </div>

          {/* <main className="w-full p-6">{children}</main> */}
          <main className="w-full p-6">
            {cloneElement(children, { addNote, deleteNote, getNote })}
          </main>
        </div>
      </div>
    </>
  );
}

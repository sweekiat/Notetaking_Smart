import Header from "./Header";
import Sidebar from "./Sidebar";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { noteyABI } from "../notey";

export default function Layout({ children }) {
  const [isConnected, setIsConnected] = useState(false);
  const [signer, setSigner] = useState(null);
  const [data, setData] = useState([]);
  const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
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
  useEffect(async () => {
    if (typeof window.ethereum !== "undefined") {
      const contract = new ethers.Contract(CONTRACT_ADDRESS, noteyABI, signer);
      try {
        const data = await contract.getNotes(); // should return a list of note objects created by smart contract
        setData(data);
      } catch (error) {
        console.log(error);
      }

      async function addNote(noteId, content, title) {
        await contract.addNotes(noteId, content, title);
      }
      async function deleteNote(noteId) {
        await contract.deleteNote(noteId);
      }
      async function getNote(noteId) {
        await contract.getNoteId(noteId);
      }
    } else {
      alert("install metamask");
    }
  });

  return (
    <>
      <title>Notey</title>
      <div className="min-h-screen w-full ">
        <Header connect={connect} isConnected={isConnected} />
        <div className="flex items-stretch w-full h-screen">
          <div className="w-80 ">
            <Sidebar data={data} />
          </div>
          <main className="w-full p-6">{children}</main>
        </div>
      </div>
    </>
  );
}

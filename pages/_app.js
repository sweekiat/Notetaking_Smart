import Layout from "../components/Layout";
import "/styles/globals.css";
import {init, useQuery} from "@airstack/airstack-react";
require('dotenv').config()
const API_KEY = process.env.Airstack_API_KEY;
init("ba6c253c5847422d8252178b4aa919a3"); // just exposing it as its a default key


export default function App({ Component, pageProps }) {
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

'use client'

import { Web3Auth } from "@web3auth/modal";
import { useEffect } from "react";


export default  function Home() {
  useEffect(() => {
  const web3auth = new Web3Auth({
    clientId:
      "BLD4sm22z-C7ChD8Nfbn_q9oA1K8NLjmNjV9hMbp1wKOmwvXEAtQ-LzKnTGyHkiA0vwIEx5FTLWJ1jtMc_Rf9ms", // Get your Client ID from the Web3Auth Dashboard
    web3AuthNetwork: "sapphire_mainnet", // Web3Auth Network
    chainConfig: {
      chainNamespace: "eip155",
      chainId: "0x1",
      rpcTarget: "https://rpc.ankr.com/eth",
      displayName: "Ethereum Mainnet",
      blockExplorer: "https://goerli.etherscan.io",
      ticker: "ETH",
      tickerName: "Ethereum",
    },
  });
})
  return 
}

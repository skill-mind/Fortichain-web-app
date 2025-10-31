"use client";
import React from "react";

import { mainnet, sepolia } from "@starknet-react/chains";
import {
  StarknetConfig,
  publicProvider,
  voyager,
  InjectedConnector,
  paymasterRpcProvider,
} from "@starknet-react/core";
// import { WebWalletConnector } from "starknetkit/webwallet";
// import { ArgentMobileConnector } from "starknetkit/argentMobile";

const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  const connectors = [
    new InjectedConnector({
      options: { id: "argentX", name: "Ready" },
    }),
    new InjectedConnector({
      options: { id: "braavos", name: "Braavos" },
    }),
    // new InjectedConnector({
    //   options: { id: "metamask", name: "MetaMask" },
    // }),
    // new InjectedConnector({
    //   options: { id: "keplr", name: "Keplr" },
    // }),
    // new InjectedConnector({
    //   options: { id: "okxwallet", name: "OKX" },
    // }),
    // new WebWalletConnector({ url: "https://web.argent.xyz" }),
    // ArgentMobileConnector.init({
    //   options: {
    //     dappName: "Fortichain", // Replace with your app's name
    //     url: "https://web.argent.xyz",
    //   },
    // }),
  ];

  return (
    <StarknetConfig
      paymasterProvider={paymasterRpcProvider({
        rpc: () => {
          return {
            // nodeUrl: "https://sepolia.paymaster.avnu.fi",
            nodeUrl: "https://starknet.paymaster.avnu.fi",
            headers: {
              "x-paymaster-api-key":
                process.env.NEXT_PUBLIC_PAYMASTER_API ?? "",
            },
          };
        },
      })}
      chains={[mainnet]}
      provider={publicProvider()}
      connectors={[...connectors]}
      explorer={voyager}
    >
      {children}
    </StarknetConfig>
  );
};

export default WalletProvider;

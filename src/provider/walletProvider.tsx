// "use client";
// import { mainnet, sepolia } from "@starknet-react/chains";
// import {
//   StarknetConfig,
//   publicProvider,
//   voyager,
//   Connector,
//   jsonRpcProvider,
// } from "@starknet-react/core";
// import { InjectedConnector } from "starknetkit/injected";
// import { WebWalletConnector } from "starknetkit/webwallet";
// import { ArgentMobileConnector } from "starknetkit/argentMobile";

// export function StarknetProvider({ children }: { children: React.ReactNode }) {
// const connectors = [
//   new InjectedConnector({
//     options: { id: "argentX", name: "Argent X" },
//   }),
//   new InjectedConnector({
//     options: { id: "braavos", name: "Braavos" },
//   }),
//   new InjectedConnector({
//     options: { id: "metamask", name: "MetaMask" },
//   }),
//   new InjectedConnector({
//     options: { id: "keplr", name: "Keplr" },
//   }),
//   new InjectedConnector({
//     options: { id: "okxwallet", name: "OKX" },
//   }),
//   new WebWalletConnector({ url: "https://web.argent.xyz" }),
//   ArgentMobileConnector.init({
//     options: {
//       dappName: "Fortichain",
//       url: "https://forti-chain.xyz",
//     },
//   }),
// ];

// return (
//   <StarknetConfig
//     chains={[sepolia]}
//     provider={publicProvider()}
//     connectors={connectors as Connector[]}
//     explorer={voyager}
//     autoConnect={true}
//     // provider={jsonRpcProvider({
//     //   rpc: () => ({ nodeUrl: process.env.NEXT_PUBLIC_RPC_URL }),
//     // })}
//   >
//     {children}
//   </StarknetConfig>
// );
// }

// export default StarknetProvider;

// "use client";
// import { mainnet, sepolia } from "@starknet-react/chains";
// import {
//   StarknetConfig,
//   publicProvider,
//   voyager,
//   Connector,
//   jsonRpcProvider,
// } from "@starknet-react/core";
// import { InjectedConnector } from "starknetkit/injected";
// import { WebWalletConnector } from "starknetkit/webwallet";
// import { ArgentMobileConnector } from "starknetkit/argentMobile";

// export function StarknetProvider({ children }: { children: React.ReactNode }) {
// const connectors = [
//   new InjectedConnector({
//     options: { id: "argentX", name: "Argent X" },
//   }),
//   new InjectedConnector({
//     options: { id: "braavos", name: "Braavos" },
//   }),
//   new InjectedConnector({
//     options: { id: "metamask", name: "MetaMask" },
//   }),
//   new InjectedConnector({
//     options: { id: "keplr", name: "Keplr" },
//   }),
//   new InjectedConnector({
//     options: { id: "okxwallet", name: "OKX" },
//   }),
//   new WebWalletConnector({ url: "https://web.argent.xyz" }),
//   ArgentMobileConnector.init({
//     options: {
//       dappName: "Fortichain",
//       url: "https://forti-chain.xyz",
//     },
//   }),
// ];

// return (
//   <StarknetConfig
//     chains={[sepolia]}
//     provider={publicProvider()}
//     connectors={connectors as Connector[]}
//     explorer={voyager}
//     autoConnect={true}
//     // provider={jsonRpcProvider({
//     //   rpc: () => ({ nodeUrl: process.env.NEXT_PUBLIC_RPC_URL }),
//     // })}
//   >
//     {children}
//   </StarknetConfig>
// );
// }

// export default StarknetProvider;

"use client";
import { sepolia, mainnet } from "@starknet-react/chains";
import React from "react";
import {
  StarknetConfig,
  publicProvider,
  ready,
  braavos,
  useInjectedConnectors,
  voyager,
  InjectedConnector,
  Connector,
  paymasterRpcProvider,
  jsonRpcProvider,
} from "@starknet-react/core";
import { WebWalletConnector } from "starknetkit/webwallet";
import { ArgentMobileConnector } from "starknetkit/argentMobile";

export function StarknetProvider({ children }: { children: React.ReactNode }) {
  const connectors = [
    new InjectedConnector({
      options: { id: "argentX", name: "Argent X" },
    }),
    new InjectedConnector({
      options: { id: "braavos", name: "Braavos" },
    }),
    new InjectedConnector({
      options: { id: "metamask", name: "MetaMask" },
    }),
    new InjectedConnector({
      options: { id: "keplr", name: "Keplr" },
    }),
    new InjectedConnector({
      options: { id: "okxwallet", name: "OKX" },
    }),
    new WebWalletConnector({ url: "https://web.argent.xyz" }),
    ArgentMobileConnector.init({
      options: {
        dappName: "Fortichain",
        url: "https://forti-chain.xyz",
      },
    }),
  ];

  return (
    <StarknetConfig
      paymasterProvider={paymasterRpcProvider({
        rpc: () => {
          return {
            nodeUrl: "https://sepolia.paymaster.avnu.fi",
            headers: {
              "x-paymaster-api-key":
                process.env.NEXT_PUBLIC_PAYMASTER_API ?? "",
            },
          };
        },
      })}
      chains={[sepolia]}
      connectors={connectors as Connector[]}
      explorer={voyager}
      autoConnect={true}
      provider={jsonRpcProvider({
        rpc: () => ({ nodeUrl: process.env.NEXT_PUBLIC_RPC_URL }),
      })}
    >
      {children}
    </StarknetConfig>
  );
}

"use client";
import Image from "next/image";
import wallet from "../../../public/Ellipse 1.svg";
import ready from "../../../public/Argent.svg";
import bravoos from "../../../public/braavos_icon.jpeg.svg";
import metamask from "../../../public/metamask_icon.jpeg.svg";
import okxwallet from "../../../public/okx-logo.svg"
import keplr from "../../../public/66a8b2095086e8b326351bd3_logo-icon.svg";

import { useConnect,Connector } from "@starknet-react/core";

export default function WalletModal({close}:{close:()=>void}) {
  const { connect, error, connectors } = useConnect({});

//   console.log(connectors);
//   console.log(error);
    return (
      <div className="sticky top-1/2 left-1/2">
        <div
          className="absolute -translate-y-1/2 w-full h-screen bg-black/75 "
          onClick={close}
        />
        <div className="bg-dark-gray max-w-xl min-w-[462px] min-h-[500px]  mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-4 rounded-lg">
          <ul className="flex justify-between flex-col" role="list">
            {connectors.map((connecter, i) => {
              return (
                <li
                  className="border-b border-dark-border-gray py-4 last:border-none flex justify-between items-center"
                  key={i}
                >
                  <div className="flex gap-2 justify-between items-center">
                    {connecter.name == "Ready" && (
                      <Image src={ready} alt="ready wallet" />
                    )}
                    {connecter.name == "Braavos" && (
                      <Image src={bravoos} alt="Braavos wallet" />
                    )}
                    {connecter.name == "MetaMask" && (
                      <Image src={metamask} alt="MetaMask wallet" />
                    )}
                    {connecter.name == "OKX" && (
                      <Image
                        className="bg-white-text rounded-full w-10"
                        src={okxwallet}
                        alt="okxwallet wallet"
                      />
                    )}
                    {connecter.name == "Keplr" && (
                      <Image
                        className="bg-white-text rounded-full w-10"
                        src={keplr}
                        alt="Keplr wallet"
                      />
                    )}
                    <div className="flex flex-col justify-between items-center">
                      <span>{connecter.name} Wallet</span>
                      {connecter.name === "Braavos" && (
                        <span className="text-gray-text">Recommended</span>
                      )}
                      {connecter.name === "Ready" && (
                        <span className="text-gray-text">Recommended</span>
                      )}
                    </div>
                  </div>
                  <button
                    className="min-w-157 min-h-50 p-0.5 group             
                  hover:from-sky-blue-border hover:to-sky-blue-border
                  bg-gradient-to-r group to-[#312F2F] from-[#212121]
              rounded-full group"
                    onClick={() => {
                      connect({ connector: connecter });
                      close();
                    }}
                  >
                    <span
                      className="px-6 py-3
                      group-hover:from-sky-from group-hover:to-sky-to
                      group-hover:bg-gradient-to-r bg-[#1C1C1C]
                  flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-full w-full"
                    >
                      Connect Wallet
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
}

"use client";

import { formatAddress } from "@/util/helper";
import {
  Connector,
  useAccount,
  useConnect,
  useDisconnect,
} from "@starknet-react/core";
import Image from "next/image";
import { StarknetkitConnector, useStarknetkitConnectModal } from "starknetkit";
import ready from "../../public/Argent.svg";
import bravoos from "../../public/braavos_icon.jpeg.svg";
import { useState } from "react";


export function WalletConnectorModal({ isDisconnectOpen }: { isDisconnectOpen:boolean}) {
  const { disconnect } = useDisconnect();
  const { connect, connectors } = useConnect();
  const [connector, setConnector] = useState<StarknetkitConnector | string>("");
  const { starknetkitConnectModal } = useStarknetkitConnectModal({
    connectors: connectors as StarknetkitConnector[],
  });

  async function connectWallet() {
    const { connector } = await starknetkitConnectModal();
    if (!connector) {
      return;
    }
    setConnector(connector);
    await connect({ connector: connector as Connector });
  }

  const { address } = useAccount();
  if (!address) {
    return (
      <button
        className="min-w-157 min-h-50 p-0.5 group
               bg-sky-blue-border
               hover:bg-sky-blue-border
           rounded-full group"
        onClick={connectWallet}
      >
        <span
          className="px-6 py-3
                   from-sky-from to-sky-to
                   bg-gradient-to-r
               flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-full w-full"
        >
          Connect Wallet
        </span>
      </button>
    );
  }
  return (
    <>
      {isDisconnectOpen && (
        <div className="bg-dark-gray fixed top-16 right-3 translate-y-1/12 max-w-xl p-6 border border-dark-border-gray rounded-[8px] mt-7 w-4/5">
          <ul className="flex gap-2 justify-between items-center flex-col">
            <button
              className="w-full  min-h-16 p-1 sm:p-0.5 group             
  from-[#10273E] to-sky-blue-border
  bg-gradient-to-r group 
rounded-full group"
            >
              <span
                className="sm:px-6 sm:py-3
        bg-dark-gray
  flex items-center gap-2.5 p-1 justify-center cursor-pointer  rounded-full h-[60px] w-full"
              >
                {connector == "argentX" && (
                  <Image className="w-5" src={ready} alt="ready wallet" />
                )}
                {connector == "braavos" && (
                  <Image className="w-5" src={bravoos} alt="Braavos wallet" />
                )}
                <span className="">{formatAddress(address)}</span>
              </span>
            </button>
            <button
              className="w-full min-h-16 p-0.5 group             
   hover:from-sky-blue-border hover:to-sky-blue-border
   bg-gradient-to-r group to-[#312F2F] from-[#212121]
rounded-full group"
              onClick={() => disconnect()}
              type="button"
            >
              <span
                className="px-6 py-3
       group-hover:from-sky-from group-hover:to-sky-to
       group-hover:bg-gradient-to-r bg-[#1C1C1C]
   flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-[60px] w-full"
              >
                Disconnect Wallet
              </span>
            </button>
          </ul>
        </div>
      )}
    </>
  );
}

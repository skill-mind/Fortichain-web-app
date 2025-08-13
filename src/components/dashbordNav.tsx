"use client";
import { route } from "@/types/types";
// import avatar from "../../public/Ellipse 1.svg";
// import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import WalletModal from "./modals/walletModal";
import { useState } from "react";
import { EllipsisVertical } from "lucide-react";
import { useAccount, useDisconnect } from "@starknet-react/core";
import { formatAddress } from "@/util/helper";
import Image from "next/image";
import ready from "../../public/Argent.svg";
import bravoos from "../../public/braavos_icon.jpeg.svg";


export default function DashboardNavBar({ routeType, routes }: route) {
  const path = usePathname();
  const [isConnectorOpen, setIsConnectorOpen] = useState<boolean>(false);
  const [isDisconnectOpen, setIsDisconnectOpen] = useState<boolean>(false);
  const { address, isConnected,connector} = useAccount()
  const {disconnect} = useDisconnect()

  console.log(connector?.id)
  function connectorHandler() {
    setIsConnectorOpen((isConnect) => !isConnect);
  }
  return (
    <>
      <nav className="capitalize font-normal py-5 mx-auto max-w-sit-screen text-md flex justify-between items-center">
        <ul className="flex justify-between items-center gap-4">
          <li className="bg-dark-gray px-6 py-3 rounded-full">FortiChain</li>
          <li className="bg-dark-gray px-6 py-3 rounded-full">{routeType}</li>
        </ul>
        <ul className="flex justify-between items-center gap-4">
          <li className="bg-dark-gray px-6 py-3 rounded-full">Notification</li>
          {isConnected && address && (
            <div className="relative flex ">
              <button
                className="min-w-157 min-h-50 p-0.5 group             
                 from-[#10273E] to-sky-blue-border
                 bg-gradient-to-r group 
             rounded-full group"
              >
                <span
                  className="px-6 py-3
                       bg-main-bg
                 flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-full w-full"
                >
                  {connector?.id == "argentX" && (
                    <Image className="w-5" src={ready} alt="ready wallet" />
                  )}
                  {connector?.id == "braavos" && (
                    <Image className="w-5" src={bravoos} alt="Braavos wallet" />
                  )}
                  {formatAddress(address)}
                </span>
              </button>
              <button
                onClick={() => setIsDisconnectOpen((prev) => !prev)}
                className="bg-dark-gray  p-2.5 rounded-full grid place-content-center"
              >
                <EllipsisVertical />
              </button>
              {isDisconnectOpen && (
                <button
                  onClick={() => {
                    disconnect();
                    setIsDisconnectOpen(false);
                  }}
                  className="bg-dark-gray px-6 py-3 rounded-sm absolute right-0 -bottom-14"
                >
                  Disconnect
                </button>
              )}
            </div>
          )}
          {!isConnected && (
            <button
              className="min-w-157 min-h-50 p-0.5 group             
                 bg-sky-blue-border
                 hover:bg-sky-blue-border
             rounded-full group"
              onClick={connectorHandler}
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
          )}
        </ul>
      </nav>
      <span className="border-b border-dark-border-gray h-1px w-full block" />
      <nav className="bg-dark-gray mx-auto max-w-fit  p-1 rounded-full mt-7">
        <ul className="flex justify-between items-center">
          {routes.map((route, i) => {
            return (
              <li
                key={i}
                className={`min-w-157 min-h-50 p-0.5 group ${
                  path.includes(route.url)
                    ? "bg-sky-blue-border"
                    : "hover:bg-sky-blue-border"
                } rounded-full group`}
              >
                <Link
                  href={route.url}
                  className={`px-6 py-3 ${
                    path.includes(route.url)
                      ? " bg-gradient-to-r from-sky-from to-sky-to"
                      : "group-hover:from-sky-from group-hover:to-sky-to bg-gradient-to-r"
                  }   flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-full w-full`}
                >
                  {route.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {isConnectorOpen && <WalletModal close={connectorHandler} />}
    </>
  );
}

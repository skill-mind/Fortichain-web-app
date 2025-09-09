"use client";
import { route } from "@/types/types";
import Logo from "../../public/Logo.svg";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import WalletModal from "./modals/walletModal";
import { useContext, useState } from "react";
import { MenuIcon } from "lucide-react";
import { useAccount, useDisconnect } from "@starknet-react/core";
import { formatAddress } from "@/util/helper";
import Image from "next/image";
import ready from "../../public/Argent.svg";
import bravoos from "../../public/braavos_icon.jpeg.svg";
import { BellIcon } from "@/icons/bellIcon";
import Notification from "./notification";
import { WalletConnectorModal } from "@/provider/wallet-connector";
import { Router } from "@/provider/route-provider";
import { WalletConnect } from "@/connect";

export default function DashboardNavBar({ routeType, routes }: route) {
  const path = usePathname();
  const [isConnectorOpen, setIsConnectorOpen] = useState<boolean>(false);
  const [isDisconnectOpen, setIsDisconnectOpen] = useState<boolean>(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const { address, isConnected, connector } = useAccount();
  const { setter } = useContext(Router);
  // console.log(path);
  function connectorHandler() {
    setIsConnectorOpen((isConnect) => !isConnect);
    setSubMenu(false);
  }
  return (
    <div className="fixed w-full top-0 z-50">
      <nav className="capitalize xl:px-20 px-10 font-normal py-5 mx-auto max-w-sit-screen text-md flex justify-between items-center">
        <ul className="flex justify-between items-center gap-4">
          <div
            onClick={() => {
              setter((prev) => {
                return { ...prev, isComplete: false, route: "none" };
              });
              redirect("/");
            }}
          >
            <Image src={Logo} alt="Forticahin Logo" />
          </div>
          <li className="bg-dark-gray px-6 py-3 rounded-full md:block hidden">
            {routeType}
          </li>
        </ul>
        <ul className="flex justify-between items-center gap-4">
          <button
            onClick={() => {
              setIsNotificationOpen((prev) => !prev);
              setIsDisconnectOpen(false);
              setSubMenu(false);
            }}
            className="bg-dark-gray px-6 py-3 rounded-full md:block hidden"
          >
            Notification
          </button>
          <button
            onClick={() => {
              setIsNotificationOpen((prev) => !prev);
              setIsDisconnectOpen(false);
              setSubMenu(false);
            }}
            className="bg-dark-gray text-2xl px-3 py-3 rounded-full text-white-text md:hidden"
          >
            <BellIcon />
          </button>
          {isConnected && address && (
            <div className="relative flex">
              <button
                className="w-fit sm:min-w-157 sm:min-h-50 p-1 sm:p-0.5 group             
                 from-[#10273E] to-sky-blue-border
                 bg-gradient-to-r group 
             rounded-full group "
                onClick={() => {
                  setIsDisconnectOpen((prev) => !prev);
                  setSubMenu(false);
                  setIsNotificationOpen(false);
                }}
              >
                <span
                  className="sm:px-6 sm:py-3
                       bg-main-bg
                 flex items-center sm:gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-full w-full"
                >
                  {connector?.id == "argentX" && (
                    <Image className="w-5" src={ready} alt="ready wallet" />
                  )}
                  {connector?.id == "braavos" && (
                    <Image className="w-5" src={bravoos} alt="Braavos wallet" />
                  )}
                  <span className="sm:block hidden">
                    {formatAddress(address)}
                  </span>
                </span>
              </button>
            </div>
          )}
          {/* <WalletConnect /> */}
          <WalletConnectorModal isDisconnectOpen={isDisconnectOpen} />

          <button
            onClick={() => {
              setSubMenu((prev) => !prev);
              setIsConnectorOpen(false);
              setIsDisconnectOpen(false);
            }}
            className="bg-dark-gray px-3 py-3 rounded-full block xl:hidden"
          >
            <MenuIcon />
          </button>
        </ul>
      </nav>
      <span className="border-b border-dark-border-gray h-1px w-full block" />
      {/* sub nav Desktop */}
      <nav className="bg-dark-gray mx-auto max-w-fit  p-1 rounded-full mt-7 hidden xl:block">
        <ul className="flex justify-between items-center">
          {routes &&
            routes.map((route, i) => {
              return (
                <li
                  key={i}
                  className={`min-w-157 min-h-50 p-0.5 group ${
                    path === route.url
                      ? "bg-sky-blue-border"
                      : "hover:bg-sky-blue-border"
                  } rounded-full group mx-1`}
                >
                  <Link
                    href={route.url}
                    className={`px-6 py-3 ${
                      path === route.url
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
      {/*sub nav mobile */}
      {subMenu && (
        <nav className="bg-dark-gray fixed top-10 left-5 translate-x-1/12 translate-y-1/12 w-4/5 xl:hidden p-6 border border-dark-border-gray rounded-[8px] mt-7">
          <ul className="flex gap-2 justify-between items-center flex-col">
            {routes &&
              routes.map((route, i) => {
                return (
                  <li
                    key={i}
                    className={`min-w-full min-h-16 p-0.5 group ${
                      path === route.url
                        ? "bg-sky-blue-border"
                        : "hover:bg-sky-blue-border bg-dark-gray-bt border border-dark-border-gray"
                    } rounded-full group`}
                    onClick={() => {
                      setSubMenu(false);
                    }}
                  >
                    <Link
                      href={route.url}
                      className={`px-6 py-3 h-[60px] ${
                        path === route.url
                          ? " bg-gradient-to-r from-sky-from to-sky-to"
                          : "group-hover:from-sky-from group-hover:to-sky-to bg-gradient-to-r"
                      }   flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full  w-full`}
                    >
                      {route.label}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </nav>
      )}
      {/* notification */}
      {isNotificationOpen && <Notification />}
      {isConnectorOpen && <WalletModal close={connectorHandler} />}
    </div>
  );
}

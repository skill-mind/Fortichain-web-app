"use client";
import { useContext } from "react";
import LauchAppNav from "./launch-app-nav";
import { Router } from "@/provider/route-provider";
import logo from "../../public/Logo.svg";
import Image from "next/image";

export default function Header() {
  const { setter, launchModal } = useContext(Router);
  return (
    <header className="bg-[url(../../public/Hero.svg)] h-[815px] border-b border-dark-border-gray">
      <div className="px-7 fixed w-full top-0 py-5 border-b border-dark-border-gray">
        <nav className="max-w-sit-screen mx-auto flex justify-between items-center">
          <Image src={logo} alt="forticahin" />
          <ul className="flex justify-between items-center gap-2">
            <li className="bg-dark-gray px-6 py-3 rounded-full md:block hidden">
              About
            </li>
            <li className="bg-dark-gray px-6 py-3 rounded-full md:block hidden">
              Documentation
            </li>
            <li className="bg-dark-gray px-6 py-3 rounded-full md:block hidden">
              Blog
            </li>
          </ul>
          <button
            className="min-w-157 min-h-50 p-0.5 group
           bg-sky-blue-border
           hover:bg-sky-blue-border
       rounded-full group"
            type="button"
            onClick={() => {
              setter((prev) => {
                return { ...prev, launchModal: !launchModal };
              });
            }}
          >
            <span
              className="px-6 py-3
               from-sky-from to-sky-to
               bg-gradient-to-r
           flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-full w-full"
            >
              Launch app
            </span>
          </button>
        </nav>
      </div>

      <div className="flex h-11/12 md:h-full justify-center items-center flex-col gap-5 max-w-fix text-center mx-auto px-5">
        <span className="w-fit bg-dark-gray px-6 py-3 rounded-full ">
          Powered by Starknet
        </span>
        <h1 className="text-4xl md:text-6xl max-w-3xl">
          Empowering Decentralized Vulnerability Disclosure
        </h1>
        <p className="text-gray-text text-18">
          Join a trustless, transparent bounty platform connecting researchers
          and projects with seamless on-chain payouts.
        </p>
        <LauchAppNav />
      </div>
    </header>
  );
}

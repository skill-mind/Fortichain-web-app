"use client";
import { Router } from "@/provider/route-provider";
import Image from "next/image";
import { useContext } from "react";
import logo from "../../public/Logo.svg";
import Link from "next/link";
import LaunchAppNavModal from "./modals/lauch-app-modal";

export default function Nav() {
  const { setter, launchModal } = useContext(Router);
  function handleCloseAppLouncher() {
    setter((prev) => {
      return { ...prev, launchModal: !launchModal };
    });
  }
  return (
    <div className="fixed w-full top-0 py-5 border-b border-dark-border-gray xl:px-20 px-5 z-50">
      <nav className="max-w-sit-screen mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src={logo} alt="forticahin" />
        </Link>
        <ul className="flex justify-between items-center gap-2">
          <li className="bg-dark-gray px-6 py-3 rounded-full md:block hidden">
            <Link href="/about">About</Link>
          </li>
          <Link
            href="https://forti-chain.gitbook.io/fortichain-docs/"
            target="_blank"
            className="bg-dark-gray px-6 py-3 rounded-full md:block hidden"
          >
            Documentation
          </Link>
          {/* <li className="bg-dark-gray px-6 py-3 rounded-full md:block hidden">
            Blog
          </li> */}
        </ul>
        <button
          className="min-w-157 min-h-50 p-0.5 group
     bg-sky-blue-border
     hover:bg-sky-blue-border
 rounded-full group"
          type="button"
          onClick={handleCloseAppLouncher}
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
      {launchModal && <LaunchAppNavModal closeModal={handleCloseAppLouncher} />}
    </div>
  );
}

"use client";
import { ArrowUp } from "@/icons/arrowUp";
import logo from "../../public/Logo.svg";
import Image from "next/image";
import { Link } from "lucide-react";
import LauchAppNav from "@/components/launch-app-nav";
import LaunchAppNavModal from "@/components/modals/lauch-app-modal";
import LaunchAppUi from "@/components/ui/launch-app";
import { Router } from "@/provider/route-provider";
import { useContext } from "react";
export default function Page() {
  const { route, launchModal, setter } = useContext(Router);

  if (route !== "none") {
    return <LaunchAppUi />;
  }
  return (
    <div className="">
      <section className="bg-[url(../../public/Hero.svg)] h-[815px]">
        <div className="px-3 py-5 border-b border-dark-border-gray">
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

        <div className="flex h-11/12 md:h-4/5 justify-center items-center flex-col gap-5 max-w-fix text-center mx-auto">
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
      </section>
      {launchModal && <LaunchAppNavModal />}
    </div>
  );
}

{
  /* <button className="p-[2px] min-w-[157px] min-h-[50px] text-white-text bg-sky-blue-border rounded-full mx-8 font-walsheim font-extralight">
  <div className="bg-gradient-to-r from-[#1D74F9] flex items-center gap-2.5 p-2 justify-end to-[#092650] rounded-full h-full w-full">
    <span>Launch app </span>
    <span className="bg-[#0073E6] rounded-full w-9 h-9 font-normal grid place-content-center">
      <ArrowUp />
    </span>
  </div>
</button>;  */
}

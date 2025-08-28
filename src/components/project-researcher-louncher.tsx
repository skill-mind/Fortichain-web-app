"use client";
import { WalletCards } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Router } from "@/provider/route-provider";
import { redirect } from "next/navigation";

export default function ProjectResearcherLauncher() {
  const { isComplete, route, setter } = useContext(Router);
  const [connector, setConnector] = useState(true);
  const [userName, setUserName] = useState("");

  function Handler() {
    setter((prev) => {
      return { ...prev, isComplete: true };
    });
  }

  useEffect(() => {
    if (isComplete && route == "researcher") {
      redirect("/researcher");
    }
  }, [isComplete, route]);
  return (
    <div className="flex h-4/5 justify-center items-center gap-10 flex-col">
      <div className="text-center grid gap-10">
        <div>
          <h2 className="text-xl sm:text-28">
            Welcome to Fortichain’s Security Researchers Dashboard
          </h2>
          <span className="text-gray-text text-sm sm:text-18">
            Connect your wallet and GitHub to get started
          </span>
        </div>
        {!connector && (
          <div className="flex items-itceb justify-center p-6 gap-6 flex-wrap ">
            <div className="p-6 gap-6 flex flex-col items-center max-w-80 border bg-black/80 border-dark-border-gray rounded-[8px] justify-between">
              <div className="w-fit bg-pririty-low-bg p-4 rounded-full">
                <WalletCards className="text-blue-ball" />
              </div>
              <div>
                <h2 className="text-18">Connect Wallet</h2>

                <span className="text-sm text-gray-text">
                  Effortlessly connect your wallet to securely manage and
                  oversee your projects.
                </span>
              </div>
              <button
                className="w-full min-h-11 p-0.5 group             
              hover:from-sky-blue-border hover:to-sky-blue-border
              bg-gradient-to-r group to-[#312F2F] from-[#212121] text-base
          rounded-full group"
                type="button"
              >
                <span
                  className="px-6 py-3
                  group-hover:from-sky-from group-hover:to-sky-to
                  group-hover:bg-gradient-to-r bg-[#1C1C1C]
              flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full"
                >
                  Connect Wallet
                </span>
              </button>
            </div>
          </div>
        )}
        {connector && (
          <div className="border border-dark-border-gray p-6 grid gap-6 rounded-[12px]">
            <label htmlFor="username" className="text-center text-18">
              Enter Preferred Username{" "}
            </label>
            <Input
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              value={userName}
              className="w-full rounded-full border border-dark-border-gray px-6 py-3 h-60"
            />
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <button
          className={`min-w-72  min-h-11 p-0.5 group             
              hover:from-sky-blue-border hover:to-sky-blue-border
              bg-gradient-to-r group to-[#312F2F] from-[#212121] text-base
          rounded-full group ${
            userName.length > 3 ? "to-sky-blue-border from-sky-blue-border" : ""
          }`}
          type="button"
          onClick={Handler}
        >
          <span
            className={`px-6 py-3 h-60
                  group-hover:from-sky-from group-hover:to-sky-to
                  group-hover:bg-gradient-to-r 
              flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full w-full ${
                userName.length > 3
                  ? "from-sky-from to-sky-to bg-gradient-to-r"
                  : "bg-[#1C1C1C]"
              }`}
          >
            Proceed to dashboard
          </span>
        </button>
      </div>
    </div>
  );
}

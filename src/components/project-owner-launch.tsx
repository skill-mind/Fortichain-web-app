"use client";
import { Router } from "@/provider/route-provider";
import { Connector, useAccount, useConnect } from "@starknet-react/core";
import { Github, WalletCards } from "lucide-react";
import { redirect } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { StarknetkitConnector, useStarknetkitConnectModal } from "starknetkit";

export default function ProjectOwnerLauncher() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const [connector, setConnector] = useState<StarknetkitConnector | string>("");
  const { starknetkitConnectModal } = useStarknetkitConnectModal({
    connectors: connectors as StarknetkitConnector[],
  });
  const { isComplete, route, setter } = useContext(Router);
  function Handler() {
    setter((prev) => {
      return { ...prev, isComplete: true };
    });
  }

  async function connectWallet() {
    const { connector } = await starknetkitConnectModal();
    if (!connector) {
      return;
    }
    setConnector(connector);
    await connect({ connector: connector as Connector });
  }

  useEffect(() => {
    if (isComplete && route == "owner") {
      redirect("/overview");
    }
  }, [isComplete, route]);

  return (
    <div className="flex h-4/5 justify-center items-center flex-col">
      <div className="text-center grid gap-10">
        <div>
          <h2 className="text-xl sm:text-28">
            Welcome to Fortichain’s Project Owners Dashboard
          </h2>
          <span className="text-gray-text text-sm sm:text-18">
            Connect your wallet and GitHub to get started
          </span>
        </div>
        <div className="flex items-itceb justify-center p-6 gap-6 flex-wrap ">
          <div className="p-6 gap-6 flex flex-col items-center max-w-80 border bg-black/80 border-dark-border-gray rounded-[8px] justify-between">
            <div className="w-fit bg-pririty-low-bg p-4 rounded-full">
              <WalletCards className="text-blue-ball" />
            </div>
            <div>
              <h2 className="text-18">Connect Wallet</h2>

              <span className="text-sm text-gray-text">
                Effortlessly connect your wallet to securely manage and oversee
                your projects.
              </span>
            </div>
            <button
              className={`w-full min-h-11 p-0.5 group             
              hover:from-sky-blue-border hover:to-sky-blue-border
              bg-gradient-to-r group ${
                isConnected
                  ? "from-sky-blue-border bg-gradient-to-r to-sky-blue-border"
                  : ""
              } to-[#312F2F] from-[#212121] text-base
          rounded-full group`}
              type="button"
              onClick={connectWallet}
            >
              <span
                className={`px-6 py-3 ${
                  isConnected ? "from-sky-from bg-gradient-to-r to-sky-to" : ""
                }
                  group-hover:from-sky-from group-hover:to-sky-to
                  group-hover:bg-gradient-to-r bg-[#1C1C1C]
              flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full`}
              >
                {isConnected ? "Connected" : "Connect Wallet"}
              </span>
            </button>
          </div>
          {/* no use case for github app at the moment */}
          {/* <div className="p-6 gap-6 flex flex-col items-center max-w-80 border bg-black/80 border-dark-border-gray rounded-[8px] justify-between">
            <div className="w-fit bg-[#BB00C133] p-4 rounded-full">
              <Github className="text-[#BB00C1] " />
            </div>
            <div>
              <h2 className="text-18">Link GitHub to Fortichain</h2>

              <span className="text-sm text-gray-text leading-none">
                Link your GitHub to grant access to fortichain, and securely
                manage projects.
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
                Link GitHub
              </span>
            </button>
          </div> */}
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className={`min-w-72  min-h-11 p-0.5 group     ${
            isConnected
              ? "from-sky-blue-border to-sky-blue-border bg-gradient-to-r"
              : "disabled:cursor-not-allowed"
          }           
              hover:from-sky-blue-border hover:to-sky-blue-border
              bg-gradient-to-r group to-[#312F2F] from-[#212121] text-base
          rounded-full group`}
          type="button"
          disabled={!isConnected}
          onClick={Handler}
        >
          <span
            className={`px-6 py-3 ${
              isConnected
                ? "from-sky-from to-sky-to bg-gradient-to-r"
                : "group-disabled:cursor-not-allowed"
            }
                  group-hover:from-sky-from group-hover:to-sky-to
                  group-hover:bg-gradient-to-r bg-[#1C1C1C]
              flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full`}
          >
            Proceed to dashboard
          </span>
        </button>
      </div>
    </div>
  );
}

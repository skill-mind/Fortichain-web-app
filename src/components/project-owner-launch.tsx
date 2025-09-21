"use client";
import { Router } from "@/provider/route-provider";
import { type Connector, useAccount, useConnect } from "@starknet-react/core";
import { WalletCards } from "lucide-react";
import { redirect } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import {
  type StarknetkitConnector,
  useStarknetkitConnectModal,
} from "starknetkit";
import { motion } from "framer-motion";
import { WalletConnectionCard } from "./wallet-connection-card";

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
      <motion.div
        className="text-center grid gap-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2
            className="text-xl sm:text-28"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Welcome to Fortichain`&apos;s Project Owners Dashboard
          </motion.h2>
          <motion.span
            className="text-gray-text text-sm sm:text-18"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Connect your wallet and GitHub to get started
          </motion.span>
        </motion.div>
        <motion.div
          key="wallet-section"
          className="flex items-center justify-center p-6 gap-6 flex-wrap"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          <WalletConnectionCard
            isConnected={isConnected ?? false}
            onConnect={connectWallet}
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.button
          className={`min-w-72 min-h-11 p-0.5 group
            ${
              isConnected
                ? "from-sky-blue-border to-sky-blue-border bg-gradient-to-r"
                : "disabled:cursor-not-allowed"
            } hover:from-sky-blue-border hover:to-sky-blue-border bg-gradient-to-r to-[#312F2F] from-[#212121]
           group text-base
            rounded-full group`}
          type="submit"
          onClick={Handler}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          animate={
            isConnected
              ? {
                  boxShadow: [
                    "0 0 0 rgba(0, 150, 255, 0)",
                    "0 0 20px rgba(0, 150, 255, 0.3)",
                    "0 0 0 rgba(0, 150, 255, 0)",
                  ],
                }
              : {}
          }
        >
          <span
            className={`px-6 py-3 h-60
              ${
                isConnected
                  ? "from-sky-from to-sky-to bg-gradient-to-r"
                  : "group-disabled:cursor-not-allowed"
              } group-hover:from-sky-from group-hover:to-sky-to group-hover:bg-gradient-to-r bg-[#1C1C1C] 
              flex items-center gap-2.5 p-2 justify-center cursor-pointer rounded-full w-full
             `}
          >
            Proceed to dashboard
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
}

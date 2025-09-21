"use client";
import { WalletCards } from "lucide-react";
import { motion } from "framer-motion";

interface WalletConnectionCardProps {
  isConnected: boolean;
  onConnect: () => void;
}

export function WalletConnectionCard({
  isConnected,
  onConnect,
}: WalletConnectionCardProps) {
  return (
    <motion.div
      className="p-6 gap-6 flex flex-col items-center max-w-80 border bg-black/80 border-dark-border-gray rounded-[8px] justify-between"
      whileHover={{
        scale: 1.02,
        rotateY: 5,
        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        className="w-fit bg-pririty-low-bg p-4 rounded-full"
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
      >
        <WalletCards className="text-blue-ball" />
      </motion.div>
      <div>
        <h2 className="text-18">Connect Wallet</h2>
        <span className="text-sm text-gray-text">
          Effortlessly connect your wallet to securely manage and oversee your
          projects.
        </span>
      </div>
      <motion.button
        className={`w-full min-h-11 p-0.5 group
          hover:from-sky-blue-border hover:to-sky-blue-border
          bg-gradient-to-r ${
            isConnected
              ? "from-sky-blue-border to-sky-blue-border bg-gradient-to-r"
              : ""
          } to-[#312F2F] from-[#212121] text-base rounded-full`}
        type="button"
        onClick={onConnect}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <span
          className={`px-6 py-3 ${
            isConnected ? "from-sky-from to-sky-to bg-gradient-to-r" : ""
          } group-hover:from-sky-from group-hover:to-sky-to group-hover:bg-gradient-to-r bg-[#1C1C1C] flex items-center gap-2.5 p-2 justify-center cursor-pointer rounded-full h-10 w-full`}
        >
          {isConnected ? "Connected" : "Connect Wallet"}
        </span>
      </motion.button>
    </motion.div>
  );
}

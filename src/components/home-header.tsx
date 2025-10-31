"use client";
import { motion } from "framer-motion";
import LauchAppNav from "./launch-app-nav";
import Nav from "./nav";
import WalletModal from "./modals/walletModal";
import { useState } from "react";

export default function Header() {
  const [isConnectorOpen, setIsConnectorOpen] = useState<boolean>(false);
  function connectorHandler() {
    setIsConnectorOpen((isConnect) => !isConnect);
  }
  return (
    <header className="bg-[url(../../public/Hero.svg)] h-[815px] border-b border-dark-border-gray">
      <Nav />
      <div className="flex h-11/12 md:h-full justify-center items-center flex-col gap-5 max-w-fix text-center mx-auto px-5 md:mt-0 mt-36">
        <motion.span
          className="w-fit bg-dark-gray px-6 py-3 rounded-full"
          initial={{ opacity: 0, x: -50, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
          }}
        >
          Powered by Starknet
        </motion.span>

        <motion.h1
          className="text-4xl md:text-6xl max-w-3xl"
          initial={{ opacity: 0, x: 50, y: 30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.4,
            type: "spring",
            stiffness: 80,
          }}
        >
          Empowering Decentralized Vulnerability Disclosure
        </motion.h1>

        <motion.p
          className="text-gray-text text-18"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            type: "spring",
            stiffness: 100,
          }}
        >
          Join a trustless, transparent bounty platform connecting researchers
          and projects with seamless on-chain payouts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            type: "spring",
            stiffness: 200,
            damping: 10,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <LauchAppNav connectorHandler={connectorHandler} />
        </motion.div>
      </div>
      <div className="absolute top-[10%] left-1/2">
        {isConnectorOpen && <WalletModal close={connectorHandler} />}
      </div>
    </header>
  );
}

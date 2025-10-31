"use client";
import type React from "react";
import { useContext, useEffect, useState } from "react";
import { Router } from "@/provider/route-provider";
import { redirect } from "next/navigation";
import { useAccount } from "@starknet-react/core";

import { create_resercher_profile } from "@/hook/blockchainWriteFunction";
import { motion, AnimatePresence } from "framer-motion";
import { ResearcherFormNavigationButtons } from "./researcher-form";
import { UsernameInputSection } from "./user-name-input";
import { ProgressNavigation } from "./launcher-progress-navigation";
import { WalletConnectionCard } from "./wallet-connection-card";
import { UseUser } from "@/hook/useUser";
import WalletModal from "./modals/walletModal";

export default function ProjectResearcherLauncher() {
  const { setter } = useContext(Router);
  const { address, isConnected, account } = useAccount();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formsection, setFormSection] = useState(1);
  const [isConnectorOpen, setIsConnectorOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    address: "",
    userName: "",
  });

  const progressSteps = [
    {
      label: "Connect Wallet",
      isActive: formsection === 1,
      isCompleted: formsection > 1,
    },
    {
      label: "Enter Username",
      isActive: formsection === 2,
      isCompleted: formsection > 2,
    },
  ];

  UseUser();

  useEffect(() => {
    if (address) {
      setFormData((prev) => {
        return { ...prev, address };
      });
    }
    if (formData.address && formData.userName) {
      setter((prev) => {
        return { ...prev, isComplete: true };
      });
    }
    if (isSuccess) {
      setter((prev) => {
        return { ...prev, isComplete: true };
      });
      redirect("/researcher");
    }
  }, [formsection, isSuccess]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await create_resercher_profile(
      account,
      setIsSubmitting,
      formData,
      setIsSuccess,
      setter
    );
  }
  function connectorHandler() {
    setIsConnectorOpen((isConnect) => !isConnect);
  }

  const handleBack = () => {
    setFormSection((prev) => Math.max(1, prev - 1));
  };

  const handleContinue = () => {
    setFormSection((prev) => Math.min(2, prev + 1));
  };

  return (
    <motion.div
      className="flex h-4/5 justify-center items-center gap-10 flex-col"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="text-center grid gap-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-xl sm:text-28">
              Welcome to Fortichain`&apos;s Security Researchers Dashboard
            </h2>
          </motion.div>

          <div className="grid gap-10">
            <ProgressNavigation steps={progressSteps} />

            <AnimatePresence mode="wait">
              {formsection === 1 && (
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
                    onConnect={connectorHandler}
                  />
                </motion.div>
              )}

              {formsection === 2 && (
                <UsernameInputSection
                  key="username-section"
                  value={formData.userName}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, userName: value }))
                  }
                />
              )}
            </AnimatePresence>
          </div>
        </div>

        <ResearcherFormNavigationButtons
          currentStep={formsection}
          totalSteps={2}
          isConnected={isConnected ?? false}
          canContinue={formData.userName.length > 4}
          isSubmitting={isSubmitting}
          onBack={handleBack}
          onContinue={handleContinue}
          onSubmit={() => {}}
        />
      </form>
      {isConnectorOpen && <WalletModal close={connectorHandler} />}
    </motion.div>
  );
}

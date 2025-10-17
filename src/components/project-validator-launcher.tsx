"use client";
import type React from "react";
import { useContext, useEffect, useState } from "react";
import { Router } from "@/provider/route-provider";
import { redirect } from "next/navigation";
import { type Connector, useAccount, useConnect } from "@starknet-react/core";
import toast from "react-hot-toast";
import {
  type StarknetkitConnector,
  useStarknetkitConnectModal,
} from "starknetkit";
import { create_validator_profile } from "@/hook/blockchainWriteFunction";
import { motion, AnimatePresence } from "framer-motion";
import { ProgressNavigation } from "./launcher-progress-navigation";
import { WalletConnectionCard } from "./wallet-connection-card";
import { UsernameInputSection } from "./user-name-input";
import { ResearcherFormNavigationButtons } from "./researcher-form";
import { GitHubIntegrationSection } from "./validator-github-inputs";
import { UseUser } from "@/hook/useUser";

export interface validatorType {
  address: string;
  userName: string;
  githubLink: string;
  passworks: string[];
}

export default function ProjectValidatorLauncher() {
  const { setter } = useContext(Router);
  const { address, isConnected, account } = useAccount();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formsection, setFormSection] = useState(1);
  const { connect, connectors } = useConnect();
  const { starknetkitConnectModal } = useStarknetkitConnectModal({
    connectors: connectors as StarknetkitConnector[],
  });
  const [_, setConnector] = useState<StarknetkitConnector | string>("");

  const [formData, setFormData] = useState({
    address: "",
    userName: "",
    githubLink: "",
    passworks: [""],
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
    {
      label: "Link GitHub",
      isActive: formsection === 3,
      isCompleted: formsection > 3,
    },
  ];

  UseUser();
  useEffect(() => {
    if (address) {
      setFormData((prev) => {
        return { ...prev, address };
      });
    }
    if (
      formData.address &&
      formData.githubLink &&
      formData.passworks.length > 0 &&
      formData.userName
    ) {
      setter((prev) => {
        return { ...prev, isComplete: true };
      });
    }
    if (isSuccess) {
      setter((prev) => {
        return { ...prev, isComplete: true };
      });
      console.log("redirect");
      redirect("/validator");
    }
  }, [formsection, isSuccess]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(formData);
    await create_validator_profile(
      account,
      setIsSubmitting,
      formData,
      setIsSuccess,
      setter,
      redirect
    );
  }

  async function connectWallet() {
    const { connector } = await starknetkitConnectModal();
    if (!connector) {
      return;
    }
    setConnector(connector);
    await connect({ connector: connector as Connector });
  }

  const handleBack = () => {
    setFormSection((prev) => Math.max(1, prev - 1));
  };

  const handleContinue = () => {
    if (!isConnected) {
      toast.error("connect your wallet");
      return;
    }
    setFormSection((prev) => Math.min(3, prev + 1));
  };

  const handleAddPasswork = () => {
    setFormData((prev) => ({
      ...prev,
      passworks: [...prev.passworks, ""],
    }));
  };

  const handleRemovePasswork = (indexToRemove: number) => {
    setFormData((prev) => ({
      ...prev,
      passworks: prev.passworks.filter((_, index) => index !== indexToRemove),
    }));
  };

  const handlePassworkChange = (index: number, value: string) => {
    const updatedPassworks = [...formData.passworks];
    updatedPassworks[index] = value;
    setFormData((prev) => ({
      ...prev,
      passworks: updatedPassworks,
    }));
  };

  return (
    <motion.div
      className="flex h-fit justify-center items-center gap-10 flex-col"
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
              Welcome to Fortichain`&apos;s Validator`&apos;s Dashboard
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
                    onConnect={connectWallet}
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

              {formsection === 3 && (
                <GitHubIntegrationSection
                  key="github-section"
                  githubLink={formData.githubLink}
                  passworks={formData.passworks}
                  onGithubChange={(value) =>
                    setFormData((prev) => ({ ...prev, githubLink: value }))
                  }
                  onPassworkChange={handlePassworkChange}
                  onAddPasswork={handleAddPasswork}
                  onRemovePasswork={handleRemovePasswork}
                  maxPassworks={5}
                />
              )}
            </AnimatePresence>
          </div>
        </div>

        <ResearcherFormNavigationButtons
          currentStep={formsection}
          totalSteps={3}
          isConnected={isConnected ?? false}
          canContinue={formData.userName.length > 4}
          isSubmitting={isSubmitting}
          onBack={handleBack}
          onContinue={handleContinue}
          onSubmit={() => {}}
        />
      </form>
    </motion.div>
  );
}

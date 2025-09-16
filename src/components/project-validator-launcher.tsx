"use client";
import { Github, WalletCards } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Router } from "@/provider/route-provider";
import { redirect } from "next/navigation";
import { Connector, useAccount, useConnect } from "@starknet-react/core";
import toast from "react-hot-toast";
import { StarknetkitConnector, useStarknetkitConnectModal } from "starknetkit";
import { create_validator_profile } from "@/hook/blockchainWriteFunction";

export interface validatorType {
  address: string;
  userName: string;
  githubLink: string;
  passworks: string[];
}
export default function ProjectValidatorLauncher() {
  const { isComplete, route, setter } = useContext(Router);
  const { address, isConnected, account } = useAccount();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formsection, setFormSection] = useState(1);
  const [passWork, setPassWork] = useState(1);
  const { connect, connectors } = useConnect();
  const { starknetkitConnectModal } = useStarknetkitConnectModal({
    connectors: connectors as StarknetkitConnector[],
  });
  const [connector, setConnector] = useState<StarknetkitConnector | string>("");
  const style1 = formsection >= 2 ? "bg-blue-ball" : "bg-dark-gray-pop";
  const style2 = formsection == 3 ? "bg-blue-ball" : "bg-dark-gray-pop";

  const [formData, setFormData] = useState({
    address: "",
    userName: "",
    githubLink: "",
    passworks: [""],
  });
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
  }, [formsection]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(formData);
    await create_validator_profile(
      account,
      setIsSubmitting,
      formData,
      setIsOpen,
      setIsError
    );
    if (isComplete && route === "validator") {
      redirect("/validator");
    }
  }
  async function connectWallet() {
    const { connector } = await starknetkitConnectModal();
    if (!connector) {
      return;
    }
    setConnector(connector);
    await connect({ connector: connector as Connector });
  }
  return (
    <div className="flex h-4/5 justify-center items-center gap-10 flex-col">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="text-center grid gap-10">
          <div>
            <h2 className="text-xl sm:text-28">
              Welcome to Fortichain’s Validator’s Dashboard
            </h2>
          </div>

          <div className="grid gap-10">
            <nav className="flex justify-center max-w-fit mx-auto gap-6 list-none  items-center text-base">
              <li className="grid gap-4">
                <span>Connect Wallet</span>
                <span
                  className={`bg-blue-ball h-1.5 w-full block rounded-full`}
                />
              </li>
              <li className="grid gap-4">
                <span>Enter Username</span>
                <span className={`${style1} h-1.5 w-full block rounded-full`} />
              </li>
              <li className="grid gap-4">
                <span>Link GitHub</span>
                <span className={`${style2} h-1.5 w-full block rounded-full`} />
              </li>
            </nav>
            {formsection == 1 && (
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
                    className={`w-full min-h-11 p-0.5 group
              hover:from-sky-blue-border hover:to-sky-blue-border
              bg-gradient-to-r ${
                isConnected
                  ? "from-sky-blue-border to-sky-blue-border bg-gradient-to-r"
                  : ""
              } to-[#312F2F] from-[#212121] text-base rounded-full`}
                    type="button"
                    onClick={connectWallet}
                  >
                    <span
                      className={`px-6 py-3 ${
                        isConnected
                          ? "from-sky-from to-sky-to bg-gradient-to-r"
                          : ""
                      } group-hover:from-sky-from group-hover:to-sky-to group-hover:bg-gradient-to-r bg-[#1C1C1C] flex items-center gap-2.5 p-2 justify-center cursor-pointer rounded-full h-10 w-full`}
                    >
                      {isConnected ? "Connected" : "Connect Wallet"}
                    </span>
                  </button>
                </div>
              </div>
            )}
            {formsection == 2 && (
              <div className="border border-dark-border-gray p-6 grid gap-6 rounded-[12px]">
                <label htmlFor="username" className="text-center text-18">
                  Enter Preferred Username{" "}
                </label>
                <Input
                  onChange={(e) => {
                    setFormData((prev) => {
                      return { ...prev, userName: e.target.value };
                    });
                  }}
                  value={formData.userName}
                  className="w-full rounded-full border border-dark-border-gray px-6 py-3 h-60"
                />
              </div>
            )}
            {formsection == 3 && (
              <div className="bg-dark-gray w-full xl:min-w-900px p-6 grid gap-6 rounded-[8px]">
                <div className="flex gap-3 items-center">
                  <div className="bg-pririty-low-bg w-fit p-2.5 rounded-full">
                    <Github className="text-blue-ball" />
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="text-base">GitHub Repository</h3>
                    <span className="text-12 text-gray-text">
                      Link to your professional GitHub profile
                    </span>
                  </div>
                </div>
                <div className="text-start mt-4">
                  <label htmlFor="github url">GitHub Profile URL</label>
                  <Input
                    type="text"
                    placeholder="www.github.com/username"
                    className="border-b border-dark-border-gray"
                  />
                </div>
                {Array.from({ length: passWork }).map((data, idx) => (
                  <div key={idx} className="text-start mt-4">
                    <label htmlFor="pass work">Pass Work</label>
                    <Input
                      type="text"
                      onChange={(e) => {
                        const data = formData.passworks;
                        data[idx] = e.target.value;
                        setFormData((prev) => {
                          return { ...prev, passworks: data };
                        });
                      }}
                      placeholder="www.github.com/"
                      className="border-b border-dark-border-gray"
                    />
                  </div>
                ))}
                <div className="flex justify-end items-center gap-3 flex-col-reverse xl:flex-row">
                  <span className="text-gray-text">5 links max</span>
                  <button
                    disabled={passWork == 5}
                    onClick={() => {
                      if (passWork == 5) {
                        toast.error("Pass work links is 5 links max ");
                        return;
                      }
                      setPassWork((prev) => prev + 1);
                    }}
                    className={`w-full xl:w-40  min-h-11 p-0.5 group             
              hover:from-sky-blue-border hover:to-sky-blue-border
              bg-gradient-to-r group to-[#312F2F] from-[#212121] text-base
          rounded-full group ${passWork == 5 ? "cursor-not-allowed" : ""} ${
                      formData.userName.length > 3
                        ? "to-sky-blue-border from-sky-blue-border"
                        : ""
                    }`}
                    type="button"
                  >
                    <span
                      className={`px-6 py-3 h-50
                  group-hover:from-sky-from group-hover:to-sky-to
                  group-hover:bg-gradient-to-r group-disabled:cursor-not-allowed
              flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full w-full ${
                formData.userName.length > 3
                  ? "from-sky-from to-sky-to bg-gradient-to-r"
                  : "bg-[#1C1C1C]"
              }`}
                    >
                      Add Link
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center mt-7 gap-4">
          <button
            className={`min-w-72  min-h-11 p-0.5 group             
              hover:from-sky-blue-border hover:to-sky-blue-border
              bg-gradient-to-r group to-[#312F2F] from-[#212121] text-base
          rounded-full group ${formsection == 1 ? "hidden" : "block"}`}
            type="button"
            onClick={() => {
              setFormSection((prev) => {
                if (prev === 4) return prev;
                return prev - 1;
              });
            }}
          >
            <span
              className={`px-6 py-3 h-60
                  group-hover:from-sky-from group-hover:to-sky-to
                  group-hover:bg-gradient-to-r 
              flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full w-full bg-[#1C1C1C]`}
            >
              Back
            </span>
          </button>
          <button
            disabled={!isConnected}
            className={`min-w-72 disabled:cursor-not-allowed  min-h-11 p-0.5 group             
              hover:from-sky-blue-border hover:to-sky-blue-border
              bg-gradient-to-r group to-[#312F2F] from-[#212121] text-base
          rounded-full group ${formsection == 3 ? "hidden" : "block"} ${
              formData.userName.length > 4
                ? "block to-sky-blue-border from-sky-blue-border"
                : ""
            }`}
            type="button"
            onClick={() => {
              if (!isConnected) {
                toast.error("connect your wallet");
                return;
              }
              // if (formData.userName.length < 5 && formsection === 2) {
              //   toast.error("username lenght has to be 5 character min");
              //   return;
              // }
              setFormSection((prev) => {
                if (prev === 4) return prev;
                return prev + 1;
              });
            }}
          >
            <span
              className={`px-6 py-3 h-60 group-disabled:cursor-not-allowed
                  group-hover:from-sky-from group-hover:to-sky-to
                  group-hover:bg-gradient-to-r 
              flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full w-full ${
                formData.userName.length > 4
                  ? " from-sky-from to-sky-to bg-gradient-to-r"
                  : "bg-[#1C1C1C]"
              }`}
            >
              Continue
            </span>
          </button>
          <button
            className={`min-w-72  min-h-11 p-0.5 group             
              hover:from-sky-blue-border hover:to-sky-blue-border
              bg-gradient-to-r group to-[#312F2F] from-[#212121] text-base
          rounded-full group ${
            formsection > 2
              ? "block to-sky-blue-border from-sky-blue-border"
              : "hidden"
          }`}
            type="submit"
            onClick={() => {}}
          >
            <span
              className={`px-6 py-3 h-60
                  group-hover:from-sky-from group-hover:to-sky-to
                  group-hover:bg-gradient-to-r 
              flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full w-full
                  from-sky-from to-sky-to bg-gradient-to-r
              `}
            >
              {isSubmitting ? "submitting...." : " Proceed to dashboard"}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

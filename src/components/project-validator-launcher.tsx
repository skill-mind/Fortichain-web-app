"use client";
import { Github, WalletCards } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Router } from "@/provider/route-provider";
import { redirect } from "next/navigation";

export default function ProjectValidatorLauncher() {
  const { isComplete, route, setter } = useContext(Router);
  const [userName, setUserName] = useState("");
  const [formsection, setFormSection] = useState(1);
  const style1 = formsection >= 2 ? "bg-blue-ball" : "bg-dark-gray-pop";
  const style2 = formsection == 3 ? "bg-blue-ball" : "bg-dark-gray-pop";
  if (isComplete && route === "validator") {
    redirect("/validator");
  }
  useEffect(() => {
    if (formsection == 3) {
      setter((prev) => {
        return { ...prev, isComplete: true };
      });
    }
  }, [formsection]);
  return (
    <div className="flex h-4/5 justify-center items-center gap-10 flex-col">
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
          {formsection == 2 && (
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
              <div className="text-start mt-4">
                <label htmlFor="pass work">Pass Work</label>
                <Input
                  type="text"
                  placeholder="www.github.com/"
                  className="border-b border-dark-border-gray"
                />
              </div>
              <div className="flex justify-end items-center gap-3 flex-col-reverse xl:flex-row">
                <span className="text-gray-text">5 links max</span>
                <button
                  className={`w-full xl:w-40  min-h-11 p-0.5 group             
              hover:from-sky-blue-border hover:to-sky-blue-border
              bg-gradient-to-r group to-[#312F2F] from-[#212121] text-base
          rounded-full group ${
            userName.length > 3 ? "to-sky-blue-border from-sky-blue-border" : ""
          }`}
                  type="button"
                >
                  <span
                    className={`px-6 py-3 h-50
                  group-hover:from-sky-from group-hover:to-sky-to
                  group-hover:bg-gradient-to-r 
              flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full w-full ${
                userName.length > 3
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
      <div className="flex justify-center">
        <button
          className={`min-w-72  min-h-11 p-0.5 group             
              hover:from-sky-blue-border hover:to-sky-blue-border
              bg-gradient-to-r group to-[#312F2F] from-[#212121] text-base
          rounded-full group ${
            userName.length > 3 ? "to-sky-blue-border from-sky-blue-border" : ""
          }`}
          type="button"
          onClick={() => {
            setFormSection((prev) => {
              if (prev === 3) return prev;
              return prev + 1;
            });
          }}
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
            {formsection <= 2 ? "Continue" : " Proceed to dashboard"}
          </span>
        </button>
      </div>
    </div>
  );
}

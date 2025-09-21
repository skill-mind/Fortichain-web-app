"use client";
import { ArrowUp } from "@/icons/arrowUp";
import { Router } from "@/provider/route-provider";
import { X } from "lucide-react";
import { useContext, useEffect, useState } from "react";

export default function LaunchAppNavModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const { setter } = useContext(Router);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      closeModal();
    }, 300);
  };

  function handler(data: "owner" | "validator" | "researcher") {
    setter((prev) => {
      return { ...prev, launchModal: false, route: data };
    });
  }
  return (
    <>
      <div
        className={`bg-main-bg/75 fixed top-0 h-screen w-full left-0 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      ></div>
      <div
        className={`bg-dark-gray border border-dark-border-gray min-w-80 z-[400] xl:min-w-6xl max-w-6xl mx-auto rounded-[8px] p-10 gap-10 flex flex-col mt-6 items-center absolute top-24 left-1/2 -translate-x-[50%] transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <button
          type="button"
          onClick={handleClose}
          className="bg-dark-gray-pop p-1.5 rounded-full fixed right-10 top-5"
        >
          <X />
        </button>
        <div className="text-center">
          <h4 className="text- capitalize text-2xl">Launch App</h4>
          <span className="text-gray-text text-18">
            Choose how you access Fortichain
          </span>
        </div>
        <div className="flex justify-between items-center gap-6 flex-col xl:flex-row">
          <div className="bg-dark-gray border border-dark-border-gray flex flex-col gap-6 rounded-[8px] p-6 text-center">
            <div>
              <h3 className="text-18">Project Owner</h3>
              <span className="text-gray-text text-base">
                Built for project owners. Manage your projects.
              </span>
            </div>
            <button
              className="p-[2px] w-full min-h-[50px] text-white-text group
hover:from-sky-blue-border hover:to-sky-blue-border
bg-gradient-to-r 
                  
                 to-[#312F2F] from-[#212121] rounded-full font-walsheim font-extralight"
              type="button"
              onClick={() => {
                handler("owner");
              }}
            >
              <div className="pl-4  group-hover:from-sky-from group-hover:to-sky-to group-hover:bg-gradient-to-r bg-[#1C1C1C]  flex items-center gap-2.5 p-2 justify-between to-[#092650] rounded-full h-full w-full">
                <span>Launch app </span>
                <span className=" group-hover:from-sky-from group-hover:to-sky-to group-hover:bg-gradient-to-r bg-[#1C1C1C] border border-[#312F2F]  group-hover:border-none  rounded-full w-9 h-9 font-normal grid place-content-center">
                  <ArrowUp />
                </span>
              </div>
            </button>
          </div>
          <div className="bg-dark-gray border border-dark-border-gray flex flex-col gap-6 rounded-[8px] p-6 text-center">
            <div>
              <h3 className="text-18">Security Researcher</h3>
              <span className="text-gray-text text-base">
                Built for project owners. Manage your projects.
              </span>
            </div>
            <button
              className="p-[2px] w-full min-h-[50px] text-white-text group
hover:from-sky-blue-border hover:to-sky-blue-border
bg-gradient-to-r 
                  
                 to-[#312F2F] from-[#212121] rounded-full font-walsheim font-extralight"
              type="button"
              onClick={() => {
                handler("researcher");
              }}
            >
              <div className="pl-4  group-hover:from-sky-from group-hover:to-sky-to group-hover:bg-gradient-to-r bg-[#1C1C1C]  flex items-center gap-2.5 p-2 justify-between to-[#092650] rounded-full h-full w-full">
                <span>Launch app </span>
                <span className=" group-hover:from-sky-from group-hover:to-sky-to group-hover:bg-gradient-to-r bg-[#1C1C1C] border border-[#312F2F] group-hover:border-none  rounded-full w-9 h-9 font-normal grid place-content-center">
                  <ArrowUp />
                </span>
              </div>
            </button>
          </div>
          <div className="bg-dark-gray border border-dark-border-gray flex flex-col gap-6 rounded-[8px] p-6 text-center">
            <div>
              <h3 className="text-18">Validator</h3>
              <span className="text-gray-text text-base">
                Built for project owners. Manage your projects.
              </span>
            </div>
            <button
              className="p-[2px] w-full min-h-[50px] text-white-text group
hover:from-sky-blue-border hover:to-sky-blue-border
bg-gradient-to-r 
                  
                 to-[#312F2F] from-[#212121] rounded-full font-walsheim font-extralight"
              type="button"
              onClick={() => {
                handler("validator");
              }}
            >
              <div className="pl-4  group-hover:from-sky-from group-hover:to-sky-to group-hover:bg-gradient-to-r bg-[#1C1C1C]  flex items-center gap-2.5 p-2 justify-between to-[#092650] rounded-full h-full w-full">
                <span>Launch app </span>
                <span className=" group-hover:from-sky-from group-hover:to-sky-to group-hover:bg-gradient-to-r bg-[#1C1C1C] border border-[#312F2F] group-hover:border-none  rounded-full w-9 h-9 font-normal grid place-content-center">
                  <ArrowUp />
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

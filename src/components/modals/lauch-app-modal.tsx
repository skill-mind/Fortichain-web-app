"use client";
import { ArrowUp } from "@/icons/arrowUp";
import { Router } from "@/provider/route-provider";
import { useContext } from "react";

export default function LaunchAppNavModal() {
  const { setter } = useContext(Router);
  function handler(data: "owner" | "validator" | "researcher") {
    setter((prev) => {
      return { ...prev, launchModal: false, route: data };
    });
  }
  return (
    <div className="bg-dark-gray border border-dark-border-gray min-w-80 xl:min-w-6xl max-w-6xl mx-auto rounded-[8px] p-10 gap-10 flex flex-col mt-6 items-center absolute top-24 left-1/2 -translate-x-[50%]">
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
            className="p-[2px] w-full min-h-[50px] text-white-text bg-sky-blue-border rounded-full font-walsheim font-extralight"
            type="button"
            onClick={() => {
              handler("owner");
            }}
          >
            <div className="bg-gradient-to-r pl-4 from-[#1D74F9] flex items-center gap-2.5 p-2 justify-between to-[#092650] rounded-full h-full w-full">
              <span>Launch app </span>
              <span className="bg-[#0073E6] rounded-full w-9 h-9 font-normal grid place-content-center">
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
            className="p-[2px] w-full min-h-[50px] text-white-text bg-sky-blue-border rounded-full font-walsheim font-extralight"
            type="button"
            onClick={() => {
              handler("researcher");
            }}
          >
            <div className="bg-gradient-to-r pl-4 from-[#1D74F9] flex items-center gap-2.5 p-2 justify-between to-[#092650] rounded-full h-full w-full">
              <span>Launch app </span>
              <span className="bg-[#0073E6] rounded-full w-9 h-9 font-normal grid place-content-center">
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
            className="p-[2px] w-full min-h-[50px] text-white-text bg-sky-blue-border rounded-full font-walsheim font-extralight"
            type="button"
            onClick={() => {
              handler("validator");
            }}
          >
            <div className="bg-gradient-to-r pl-4 from-[#1D74F9] flex items-center gap-2.5 p-2 justify-between to-[#092650] rounded-full h-full w-full">
              <span>Launch app </span>
              <span className="bg-[#0073E6] rounded-full w-9 h-9 font-normal grid place-content-center">
                <ArrowUp />
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

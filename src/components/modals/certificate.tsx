"use client";
"use client";
import { BadgeCheck, X } from "lucide-react";
import { useState } from "react";
import { FORTICHAINABI } from "@/contract/abi";
import { useAccount } from "@starknet-react/core";
import { assign_validator } from "@/hook/blockchainWriteFunction";
import ValidatorModal from "./validator-details-modal";
import {
  useContractFetch,
  UseGetUnassignedValidators,
  useValidators,
} from "@/hook/useBlockchain";
import { formatAddress } from "@/util/helper";
import Image from "next/image";
import logo from "../../../public/Logo.svg";

export default function CertificateModal({
  handler,
  id,
}: {
  handler: () => void;
  id: number;
}) {
  return (
    <div className="">
      <div
        className=" bg-main-bg/75 z-50 fixed top-0 h-screen w-full left-0"
        onClick={handler}
      ></div>
      <div className="p-6 max-w-[900px] md:min-w-[600px] w-full bg-dark-gray rounded-[8px] mx-auto grid gap-5 fixed top-[30%] z-50 left-1/2 -translate-x-[50%] border text-center border-dark-border-gray m-">
        <div className="mx-auto">
          <Image src={logo} alt="forticahin" />
        </div>
        <div className="border-2  p-6 text-3xl rounded-3xl text-center border-dark-border-gray max-w-[500px] w-full mx-auto">
          <h2>Audit Certification</h2>
        </div>
        <div className="grid gap-3">
          <h3 className="text-gray-text">Project</h3>
          <h2>Smart Contract Report</h2>
        </div>
        <div className="grid md:gap-0 gap-4 grid-cols-1 sm:grid-cols-3 items-center">
          <div>
            <h3 className="text-gray-text">Certification ID</h3>
            <h2>AUDIT-1755201024223</h2>
          </div>
          <div>
            <div className="px-10 mb-2 mx-auto py-5 text-[#0073E6] bg-[#10273E] w-fit border border-[#114171] rounded-full flex gap-2 items-center">
              <BadgeCheck />
              Valid Report
            </div>
            <h5 className="text-gray-text sm:text-start text-12">
              The badge above certifies that a comprehensive security audit has
              been successfully completed, fully meeting all required compliance
              standards.
            </h5>
          </div>
          <div>
            <h3 className="text-gray-text">Audit Date</h3>
            <h2>17th - Aug - 2025</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

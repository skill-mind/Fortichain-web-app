"use client";
import Image from "next/image";
import avatar from "../../../../..//public/Ellipse 1.svg";
import ValidatorResearcherCard from "./component/validator-researcher-card";
import CertificateModal from "@/components/modals/certificate";
import { useState } from "react";
export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  function handler() {
    setIsOpen((prev) => !prev);
  }

  if (1) {
    return (
      <div className=" w-full flex h-screen justify-center items-center text-center text-gray-text text-2xl md:text-[32px] border border-dark-border-gray rounded-[8px] bg-dark-gray">
        <h2 className="mx-auto h-fit md:p-28 p-2.5 max-w-3xl ">
          No complete Adit on a project
        </h2>
      </div>
    );
  }
  return (
    <div className="text-white-text">
      <div className="mt-6">
        <h3>Certificates</h3>
        <span className="text-gray-text">
          Note: You are viewing only certificate of your completed projects
        </span>
        <div className="mt-3 justify-between flex-wrap gap-3 grid grid-cols-1 md:grid-cols-2">
          <ValidatorResearcherCard handler={handler} />
          <ValidatorResearcherCard handler={handler} />
          <ValidatorResearcherCard handler={handler} />
          <ValidatorResearcherCard handler={handler} />
        </div>
      </div>
      {isOpen && <CertificateModal handler={handler} id={4} />}
    </div>
  );
}

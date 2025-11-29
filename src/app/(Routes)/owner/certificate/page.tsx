"use client";
import Image from "next/image";
import avatar from "../../../../..//public/Ellipse 1.svg";
import CertificateCard from "./component/cerificate-card";
import {CertificateModal} from "@/components/modals/certificate";
import { useState } from "react";
import { useAccount } from "@starknet-react/core";
import { useFetchUserCompletedProjectDetails } from "@/hook/fetch-requests";
import { CertificateResponse } from "@/util/types";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const { address } = useAccount()
  const [certificateId, setCertificateId] = useState("");
  const {data} = useFetchUserCompletedProjectDetails(address??"");
  const showCertificate = isOpen ? data?.find(data => data?.certificate_id == certificateId) : undefined;
  function handler() {
    setIsOpen((prev) => !prev);
  }

  function setCertificate(id:string) {
    setCertificateId(id)
  }
  console.log(data)
  if (!data || data?.length <= 0 ) {
    return (
      <div className=" w-full flex h-screen justify-center items-center text-center text-gray-text text-2xl md:text-[32px] border border-dark-border-gray rounded-[8px] bg-dark-gray">
        <h2 className="mx-auto h-fit md:p-28 p-2.5 max-w-3xl ">
          No complete Audit on a project
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
          {data?.map((certificate, key) => {
            return (
              <CertificateCard
                key={key}
                certificate={certificate}
                handler={handler}
                setCertificate={setCertificate}
              />
            );
          })}
        </div>
      </div>
      {isOpen && (
        <CertificateModal certificate={showCertificate} handler={handler} />
      )}
    </div>
  );
}

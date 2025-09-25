"use client";
import { useState } from "react";
import {
  ApproveReport,
  Earnings,
  SubmitReport,
} from "./component/dashboard-cards";
import { useAccount } from "@starknet-react/core";
import { useResearcherByAddress } from "@/hook/useBlockchain";
import Loader from "@/app/loading";

export default function Page() {
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [isApproveOpen, setIsApproveOpen] = useState(false);
  const [isEarningOpen, setIsEarningOpen] = useState(false);
  const { address } = useAccount();
  const researcher = useResearcherByAddress(address ?? "");
  console.log(researcher);
  if (researcher === undefined) {
    return <Loader />;
  }
  function handleOpenSubmit() {
    setIsSubmitOpen((prev) => !prev);
    setIsApproveOpen(false);
    setIsEarningOpen(false);
  }
  function handleOpenEarning() {
    setIsSubmitOpen(false);
    setIsApproveOpen(false);
    setIsEarningOpen((prev) => !prev);
  }
  function handleOpenApprove() {
    setIsSubmitOpen(false);
    setIsApproveOpen((prev) => !prev);
    setIsEarningOpen(false);
  }
  return (
    <section className="grid gap-3 grid-1 md:grid-cols-2 xl:grid-cols-3">
      <SubmitReport
        researcher={researcher}
        handdleClick={handleOpenSubmit}
        isSubmitOpen={isSubmitOpen}
      />
      <ApproveReport
        researcher={researcher}
        handdleClick={handleOpenApprove}
        isApproveOpen={isApproveOpen}
      />
      <Earnings
        researcher={researcher}
        handdleClick={handleOpenEarning}
        isEarningOpen={isEarningOpen}
      />
    </section>
  );
}

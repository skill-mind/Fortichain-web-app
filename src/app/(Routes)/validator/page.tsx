"use client";
import { useState } from "react";
import {
  ApproveReport,
  Earnings,
  SubmitReport,
} from "./component/dashboard-cards";
import { useValidatorDetail } from "@/hook/useBlockchain";
import { useAccount } from "@starknet-react/core";
import Loader from "@/app/loading";

export default function Validator() {
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [isApproveOpen, setIsApproveOpen] = useState(false);
  const [isEarningOpen, setIsEarningOpen] = useState(false);
  const { address } = useAccount();
  const validatorDetail = useValidatorDetail(address ?? "");
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
  if (!validatorDetail) {
    return <Loader />;
  }
  return (
    <section className="grid gap-3 grid-1 md:grid-cols-2 xl:grid-cols-3">
      <SubmitReport
        handdleClick={handleOpenSubmit}
        isSubmitOpen={isSubmitOpen}
        validator={validatorDetail}
      />
      <ApproveReport
        handdleClick={handleOpenApprove}
        isApproveOpen={isApproveOpen}
        validator={validatorDetail}
      />
      <Earnings
        handdleClick={handleOpenEarning}
        isEarningOpen={isEarningOpen}
        validator={validatorDetail}
      />
    </section>
  );
}

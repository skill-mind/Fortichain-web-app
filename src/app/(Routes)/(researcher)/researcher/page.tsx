"use client"
import { Badge } from "@/icons/github";
import { dashboardData } from "@/util/mock-data";
import { ArrowRight, CircleDollarSign, FileText, FolderOpen, Timer } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ApproveReport, Earnings, SubmitReport } from "./component/dashboard-cards";

export default function Page() {
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [isApproveOpen, setIsApproveOpen] = useState(false);
  const [isEarningOpen, setIsEarningOpen] = useState(false);

  function handleOpenSubmit() {
    setIsSubmitOpen(prev => !prev)
    setIsApproveOpen(false)
    setIsEarningOpen(false)
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
        handdleClick={handleOpenSubmit}
        isSubmitOpen={isSubmitOpen}
      />
      <ApproveReport
        handdleClick={handleOpenApprove}
        isApproveOpen={isApproveOpen}
      />
      <Earnings handdleClick={handleOpenEarning} isEarningOpen={isEarningOpen} />
    </section>
  );
}

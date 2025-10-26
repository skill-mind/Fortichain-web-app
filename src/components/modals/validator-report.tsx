"use client";
import { X } from "lucide-react";
import { Editor } from "../editor/editor";
import { useRef, useState } from "react";
import { voteOnValidation } from "@/hook/blockchainWriteFunction";
import { useAccount } from "@starknet-react/core";
import { SetShowReport } from "@/app/(Routes)/projects/component/validator-report-editor";
import { useVoteReport } from "@/hook/fetch-requests";
import toast from "react-hot-toast";

export default function ValidatorReportModal({
  reportId,
  handler,
  voteType,
  researcherId,
  setShowReport,
}: {
  reportId: number;
  handler: (x: string | null) => void;
  voteType: string | null;
  researcherId: string;
  setShowReport: SetShowReport;
}) {
  const { address } = useAccount();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { account } = useAccount();
  const reportRef = useRef<HTMLDivElement>(null);
  const { voteReport, isLoading, error, data } = useVoteReport();
  return (
    <>
      <div
        className="bg-main-bg/75 fixed top-0 h-screen w-full z-[300]"
        onClick={() => {
          handler(null);
        }}
      ></div>
      <div className="p-6  w-fit bg-dark-gray rounded-[8px] mx-auto grid gap-5 fixed top-50 sm:top-40 left-1/2 -translate-x-[50%] z-[400]">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-18">{voteType} Report</h3>
            <h5 className="text-gray-text text-base">
              State why the report is invalid
            </h5>
          </div>
          <button
            type="button"
            onClick={() => {
              handler(null);
            }}
            className="bg-dark-gray-pop p-1.5 rounded-full"
          >
            <X />
          </button>
        </div>
        <div className="border border-dark-border-gray rounded-[4px] min-h-[600px]">
          <Editor ref={reportRef} />
        </div>
        <div>
          <button
            onClick={async () => {
              if (!address) return;
              //@ts-expect-error parmas can be undefined getText(),
              const reportText = reportRef?.current?.getText().length;
              if (reportText < 50) {
                toast.error("character length is less than 50");
                return;
              }
              await voteOnValidation(
                account,
                researcherId,
                voteType ?? "",
                reportRef.current,
                setIsSubmitting,
                address,
                setShowReport,
                async (reportData) => {
                  voteReport(reportData);
                },
                reportId
              );
              // handler(null);
            }}
            className="min-h-50 p-0.5 group   w-fit          
              from-sky-blue-border to-sky-blue-border
              bg-gradient-to-r group hover:to-[#312F2F] hover:from-[#212121]
          rounded-full group"
            type="button"
          >
            <span
              className="px-6 py-3
                  from-sky-from to-sky-to
                   bg-gradient-to-r group-hover:bg-[#1C1C1C]
              flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-full w-full"
            >
              {isSubmitting ? "Submitting...." : "Submit"}
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

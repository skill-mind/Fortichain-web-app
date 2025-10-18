import { Editor } from "@/components/editor/editor";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useRef } from "react";
import { useParams } from "next/navigation";
import { useAccount } from "@starknet-react/core";
import { validateReport } from "@/hook/blockchainWriteFunction";
import { useValidatorValidation } from "@/hook/fetch-requests";

export type ValdatorViewHandler = (isSubmitting: string) => void;
export type SetShowReport = (setShowReport: string) => void;

export default function ValidatorReportEditor({
  researcherId,
  valdatorViewHandler,
  setShowReport,
}: {
  researcherId: string;
  valdatorViewHandler: ValdatorViewHandler;
  setShowReport: SetShowReport;
}) {
  const { account, address } = useAccount();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reportDetails, setReportDetails] = useState({
    severity_level: "",
    audit_report: "",
    status: "",
  });
  const { id } = useParams();
  const issueDescriptionRef = useRef<HTMLDivElement>(null);
  const {
    validateReport: writeReport,
    isLoading,
    error,
    data,
  } = useValidatorValidation();

  function handleSubmit() {
    if (!researcherId) return;
    const data = {
      id: researcherId,
      status: reportDetails.status,
      severity_level: reportDetails.severity_level,
      audit_report: reportDetails.audit_report,
      //@ts-expect-error parmas can be undefined
      description: issueDescriptionRef.current?.getText(),
    };
    if (!id || !address) return;
    validateReport(
      account,
      data,
      setIsSubmitting,
      +id,
      address,
      valdatorViewHandler,
      setShowReport,
      async (reportData) => {
        writeReport(reportData);
      }
    );
  }

  return (
    <section className="bg-dark-gray border border-dark-border-gray rounded-[8px] p-3 flex flex-col md:grid gap-5">
      <div className="border-b border-dark-border-gray pb-5 pt-3">
        <h2 className="text-xl">Fortichain Security Vulnerability Report</h2>
        <h4 className="text-gray-text text-base">
          Submit your security findings and vulnerability reports
        </h4>
      </div>
      <div className="bg-dark-gray-pop rounded-[8px] w-fit p-3 flex gap-1 items-center">
        <span className="text-gray-text border-r border-gray-text pr-2 text-sm">
          Section 1
        </span>
        <span className="text-base">Review Decision</span>
      </div>
      <div className="flex flex-col items-start md:grid md:grid-cols-[1fr_1fr_1fr] sm:items-center gap-2">
        <div className="border-dark-border-gray border rounded-full py-2 w-full">
          <Select
            onValueChange={(data) => {
              setReportDetails((prev) => {
                return { ...prev, status: data };
              });
            }}
          >
            <SelectTrigger className="rounded-full w-full border-none pl-7">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="bg-main-bg text-white-text">
              <SelectItem value="Approve">Approve</SelectItem>
              <SelectItem value="Reject">Reject</SelectItem>
              <SelectItem value="Needs More Info">Needs More Info</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* <div className="border-dark-border-gray border rounded-full py-2 w-full">
          <Select
            onValueChange={(data) => {
              setReportDetails((prev) => {
                return { ...prev, severity_level: data };
              });
            }}
          >
            <SelectTrigger className="rounded-full w-full border-none pl-7">
              <SelectValue placeholder="Select severity level" />
            </SelectTrigger>
            <SelectContent className="bg-main-bg text-white-text">
              <SelectItem value="High">High</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div> */}
        <div className="border-dark-border-gray border rounded-full py-2 w-full">
          <Select
            onValueChange={(data) => {
              setReportDetails((prev) => {
                return { ...prev, severity_level: data };
              });
            }}
          >
            <SelectTrigger className="rounded-full w-full border-none pl-7">
              <SelectValue placeholder="Severity level confirmation" />
            </SelectTrigger>
            <SelectContent className="bg-main-bg text-white-text">
              <SelectItem value="High">High</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="bg-dark-gray-pop rounded-[8px] w-fit p-3 flex gap-1 items-center">
        <span className="text-gray-text border-r border-gray-text pr-2 text-sm">
          Section 2
        </span>
        <span className="text-base">Validator Notes</span>
      </div>
      <div className="border border-dark-border-gray rounded-[4px] h-[600px]">
        <Editor ref={issueDescriptionRef} />
      </div>
      <div className="bg-dark-gray-pop rounded-[8px] w-fit p-3 flex gap-1 items-center">
        <span className="text-gray-text border-r border-gray-text pr-2 text-sm">
          Section 3
        </span>
        <span className="text-base">Final Outcome</span>
      </div>
      <div className="border-dark-border-gray border rounded-full py-2 w-[300px]">
        <Select
          onValueChange={(data) => {
            setReportDetails((prev) => {
              return { ...prev, audit_report: data };
            });
          }}
        >
          <SelectTrigger className="rounded-full w-full border-none pl-7">
            <SelectValue placeholder="Audit Report" />
          </SelectTrigger>
          <SelectContent className="bg-main-bg text-white-text">
            <SelectItem value="Valid">Valid Badge</SelectItem>
            <SelectItem value="Invalid">Invalid Badge</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <button
        className="hover:bg-dark-gray w-[250px] min-h-50 p-0.5 group             
    from-sky-blue-border to-sky-blue-border
      bg-gradient-to-r group text-base
  rounded-full group"
        onClick={handleSubmit}
      >
        <span
          className="px-6 py-3
          from-sky-from to-sky-to
          bg-gradient-to-r 
      flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-full w-full"
        >
          {isSubmitting ? "sending report ...." : "Submit Report"}
        </span>
      </button>
    </section>
  );
}

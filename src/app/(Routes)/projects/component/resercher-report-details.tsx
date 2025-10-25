"use client";
import ValidatorReportModal from "@/components/modals/validator-report";
import { Report, useContractFetch } from "@/hook/useBlockchain";
import { BadgeCheck } from "lucide-react";
import { useState } from "react";
import ValidatorReportEditor from "./validator-report-editor";
import { useAccount } from "@starknet-react/core";
import { FORTICHAINABI } from "@/contract/abi";
import img from "../../../../../public/Ellipse 1.svg";
import Image from "next/image";
import TiptapRenderer from "@/components/editor/editor-render";
import { useCheckWalletInValidators } from "@/hook/fetch-requests";
import { useParams } from "next/navigation";
import ComingSoon from "@/components/coming-soon";
import {
  Project,
  ResearcherReport,
  ValidationVote,
  ValidatorValidation,
} from "@/util/types";
export default function ResearcherReportDetails({
  reports,
  researchers,
  validatedReport,
  votes,
  project,
}: {
  reports: Report[];
  researchers: ResearcherReport[];
  validatedReport: ValidatorValidation[];
  votes: ValidationVote[];
  project: Project;
}) {
  const { id } = useParams();
  const { address } = useAccount();
  const [validatorView, setValidatorView] = useState("none"); // audit , edit chat
  const [openValidatorRepor, setOpenValidatorRepor] = useState(false);
  const [showReport, setShowReport] = useState("");
  const [voteType, setVoteType] = useState<null | string>(null);
  // const { readData: isValidator } = useContractFetch(
  //   FORTICHAINABI,
  //   "is_validator",
  //   [address ?? ""]
  // );
  const { readData: admin } = useContractFetch(FORTICHAINABI, "owner", []);

  function validatorHandler(type: string | null) {
    setOpenValidatorRepor((prev) => !prev);
    setVoteType(type);
  }
  function valdatorViewHandler(section: string) {
    setValidatorView(section);
  }
  const { isIncluded, isAssignedValidator } = useCheckWalletInValidators(
    address ?? "",
    id ? +id : 0
  );
  const has_report = researchers?.filter((data) => {
    return (
      data.researcher_wallet_address?.toLocaleLowerCase() ===
      address?.toLocaleLowerCase()
    );
  });
  const isOwner = project?.project_owner === address;
  const isAdmin = admin && address === `0x0${admin?.toString(16)}`;

  const reportToValidate =
    isIncluded || isOwner || isAdmin || isAssignedValidator
      ? researchers
      : has_report;

  return (
    <>
      {reportToValidate?.map((data, id) => {
        const reportValidationInfo = validatedReport.find((report) => {
          return report.report_id === data.id;
        });
        const reportValidated = validatedReport.some(
          (report) => report.report_id == data.id
        );
        const voteReport = votes.some(
          (report) =>
            report.voter_address === address && report.report_id == data.id
        );
        const date = `${new Date(data?.created_at).getDate()}/${
          new Date(researchers[0]?.created_at).getUTCMonth() + 1
        }/${new Date(researchers[0]?.created_at).getFullYear()}`;

        const validateDate = `${new Date(data?.created_at).getDate()}/${
          new Date(researchers[0]?.created_at).getUTCMonth() + 1
        }/${new Date(researchers[0]?.created_at).getFullYear()}`;

        const bg =
          data.severity.toLocaleUpperCase() === "Low".toLocaleUpperCase() ||
          data.severity.toLocaleUpperCase() == "low".toLocaleUpperCase()
            ? "bg-pririty-low-bg text-blue-ball"
            : data.severity.toLocaleUpperCase() === "Medium".toLocaleUpperCase()
            ? "bg-warning-bg text-warning"
            : "bg-pririty-high-bg text-pririty-high-text";

        const vbg =
          reportValidationInfo?.severity_level_confirmation?.toLocaleUpperCase() ===
          "Low".toLocaleUpperCase()
            ? "bg-pririty-low-bg text-blue-ball"
            : reportValidationInfo?.severity_level_confirmation?.toLocaleUpperCase() ===
              "Medium".toLocaleUpperCase()
            ? "bg-warning-bg text-warning"
            : "bg-pririty-high-bg text-pririty-high-text";
        const availableToVote = reportValidationInfo?.report_id === data.id;

        return (
          <div key={id} className="grid gap-2">
            <div className="bg-dark-gray p-6 rounded-[8px] border border-dark-border-gray gap-3 grid">
              <div className="flex items-center gap-1">
                <h5>Researcher</h5>
              </div>
              <div className="border-b border-dark-border-gray pb-6 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <Image src={img} alt="pririty type" />
                  <div>
                    <h5 className="text-gray-text text-[13px] break-all">
                      {data?.researcher_wallet_address}
                    </h5>
                  </div>
                </div>
                <div className="flex justify-start md:justify-between md:items-center gap-3 flex-wrap">
                  <div className="bg-dark-gray-pop rounded-full w-fit py-2 px-3 flex gap-1 items-center">
                    <span className="text-gray-text border-r border-gray-text pr-2">
                      Rank
                    </span>
                    <span className="text-[12px]">2</span>
                  </div>
                  <div className="bg-dark-gray-pop rounded-full w-fit py-2 px-3 flex gap-1 items-center">
                    <span className="text-gray-text border-r border-gray-text pr-2">
                      researcher
                    </span>
                    <span className="text-[12px]">10</span>
                  </div>
                  <div className="bg-dark-gray-pop rounded-full w-fit py-2 px-3 flex gap-1 items-center">
                    <span className="text-gray-text border-r border-gray-text pr-2">
                      Reputation
                    </span>
                    <span className="text-[12px]">12%</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center my-3 bg-dark-gray-bt py-3 px-6 rounded-[8px]">
                <h3>View Report</h3>

                <button
                  onClick={() => {
                    if (showReport == data.id) {
                      setShowReport("");
                    } else {
                      setShowReport(data.id);
                    }
                  }}
                  className="w-fit min-h-11 p-0.5 group             
     hover:from-sky-blue-border hover:to-sky-blue-border
     bg-gradient-to-r group to-[#312F2F] from-[#212121]
 rounded-full group"
                  type="button"
                >
                  <span
                    className="px-6 py-3
         group-hover:from-sky-from group-hover:to-sky-to
         group-hover:bg-gradient-to-r bg-[#1C1C1C]
     flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full"
                  >
                    {showReport != data.id ? "View details" : "Collapse"}
                  </span>
                </button>
              </div>
            </div>
            {showReport === data.id && (
              <>
                {openValidatorRepor && (
                  <ValidatorReportModal
                    handler={validatorHandler}
                    voteType={voteType}
                    researcherId={data.id}
                    setShowReport={setShowReport}
                  />
                )}
                {availableToVote &&
                  !voteReport &&
                  !isAssignedValidator &&
                  isIncluded && (
                    <div className="border border-dark-border-gray rounded-[8px] p-5 bg-dark-gray w-full">
                      <div className="bg-dark-gray-bt rounded-[14px] flex items-center justify-between gap-5 py-3 px-6">
                        <div>
                          <h3>Validators Vote</h3>
                          <h5 className="text-gray-text">
                            Click valid or invalid to vote on vulnerability
                          </h5>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              validatorHandler("Valid");
                            }}
                            className="px-10 py-3 bg-good-bg text-good rounded-full flex gap-2 items-center"
                          >
                            <BadgeCheck />
                            Valid Report
                          </button>
                          <button
                            onClick={() => {
                              validatorHandler("Invalid");
                            }}
                            className="px-10 py-3 bg-pririty-high-bg text-pririty-high-text rounded-full flex gap-2 items-center"
                          >
                            <BadgeCheck />
                            Invalid Report
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                <>
                  <section
                    key={data.id}
                    className="bg-dark-gray border border-dark-border-gray rounded-[8px] p-6 grid gap-14 "
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex gap-4 capitalize">
                        <h2>{data.title} Report</h2>
                        <span className="bg-white-text flex h-[25px] w-[1px]" />
                        <h3 className="text-gray-text">{date}</h3>
                      </div>
                      <button className={`rounded-full ${bg} py-2 px-4`}>
                        Priority: {data.severity}
                      </button>
                    </div>
                    <div>
                      <h1 className="text-2xl">Description</h1>
                      <TiptapRenderer content={data.description} />
                    </div>
                    <div>
                      <h1 className="text-2xl">Potential Risk</h1>
                      <TiptapRenderer content={data.potential_risk} />
                    </div>
                    <div>
                      <h1 className="text-2xl">Recommendations</h1>

                      <TiptapRenderer content={data.recommendation} />
                    </div>
                    {!validateDate && (
                      <div className="flex justify-between items-center">
                        <div className="flex gap-1 items-center ">
                          <span className="text-gray-text ">Audited:</span>
                          <span className="py-1 px-3 bg-dark-gray-pop rounded-full">
                            {validateDate}
                          </span>
                        </div>
                        <div className="flex gap-1 items-center ">
                          <span className="text-gray-text ">Researcher:</span>
                          <span className="py-1 px-3 bg-dark-gray-pop rounded-full">
                            Ebube
                          </span>
                        </div>
                        <div className="flex gap-1 items-center">
                          <span className="text-gray-text ">Validator:</span>
                          <span className="py-1 px-3 bg-dark-gray-pop rounded-full">
                            Yunus
                          </span>
                        </div>
                      </div>
                    )}
                  </section>
                  {reportValidationInfo && (
                    <section
                      key={data.id}
                      className="bg-dark-gray border border-dark-border-gray rounded-[8px] p-6 grid gap-14 "
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex gap-4 items-center capitalize">
                          <h2>{data.title} Audit</h2>
                          <span
                            className={`px-10 w-fit py-1 ${
                              reportValidationInfo?.category_confirmation ===
                              "Reject"
                                ? "bg-pririty-high-bg text-pririty-high-text "
                                : "bg-good-bg text-good"
                            } rounded-full flex gap-2 items-center`}
                          >
                            {reportValidationInfo?.category_confirmation}
                          </span>
                          <span className="bg-white-text flex h-[25px] w-[1px]" />
                          <h3 className="text-gray-text">{validateDate}</h3>
                        </div>
                        <span className={`rounded-full ${vbg} py-2 px-4`}>
                          Priority:
                          {reportValidationInfo?.severity_level_confirmation}
                        </span>
                      </div>
                      <div>
                        <h1 className="text-base">Validator Note</h1>
                        <TiptapRenderer
                          content={reportValidationInfo?.reason}
                        />
                      </div>
                      <div className="grid gap-2">
                        <h1 className="text-base">Final Outcome</h1>
                        <span
                          className={`px-10 w-fit py-3 ${
                            reportValidationInfo?.validation_status ===
                            "Invalid"
                              ? "bg-pririty-high-bg text-pririty-high-text "
                              : "bg-good-bg text-good"
                          } rounded-full flex gap-2 items-center`}
                        >
                          <BadgeCheck />
                          {reportValidationInfo?.validation_status} Report
                        </span>
                      </div>
                      {/* <div className="flex justify-between items-center">
                        <div className="flex gap-1 items-center ">
                          <span className="text-gray-text ">Audited:</span>
                          <span className="py-1 px-3 bg-dark-gray-pop rounded-full">
                            {validateDate}
                          </span>
                        </div>
                        <div className="flex gap-1 items-center ">
                          <span className="text-gray-text ">Researcher:</span>
                          <span className="py-1 px-3 bg-dark-gray-pop rounded-full">
                            Ebube
                          </span>
                        </div>
                        <div className="flex gap-1 items-center">
                          <span className="text-gray-text ">Validator:</span>
                          <span className="py-1 px-3 bg-dark-gray-pop rounded-full">
                            Yunus
                          </span>
                        </div>
                      </div> */}
                    </section>
                  )}
                </>
                {validatorView == `audit-${id}` && !reportValidated && (
                  <ValidatorReportEditor
                    researcherId={data.id}
                    valdatorViewHandler={valdatorViewHandler}
                    setShowReport={setShowReport}
                  />
                )}
                {validatorView == `edit-${id}` && <ComingSoon />}
                {isAssignedValidator && (
                  <div
                    className={`flex flex-wrap gap-4 text-sm  xl:flex-nowrap `}
                  >
                    {!reportValidated && (
                      <div className="border border-dark-border-gray rounded-[8px] p-5 bg-dark-gray w-full">
                        <div className="bg-dark-gray-bt rounded-[14px] flex items-center justify-between gap-5 py-3 px-6">
                          <h3>Audit Report</h3>
                          <button
                            className="w-fit min-h-11 p-0.5 group             
                  hover:from-sky-blue-border hover:to-sky-blue-border
                  bg-gradient-to-r group to-[#312F2F] from-[#212121]
              rounded-full group"
                            type="button"
                            onClick={() => {
                              if (validatorView == `audit-${id}`) {
                                return valdatorViewHandler("none");
                              }
                              valdatorViewHandler(`audit-${id}`);
                            }}
                          >
                            <span
                              className="px-12 py-6
                      group-hover:from-sky-from group-hover:to-sky-to text-sm
                      group-hover:bg-gradient-to-r bg-[#1C1C1C]
                  flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full"
                            >
                              {validatorView == `audit-${id}`
                                ? " close"
                                : " Start"}
                            </span>
                          </button>
                        </div>
                      </div>
                    )}

                    <div className="border border-dark-border-gray rounded-[8px] p-5 bg-dark-gray w-full">
                      <div className="bg-dark-gray-bt rounded-[14px] flex items-center justify-between gap-5 py-3 px-6">
                        <h3>Edit Audit</h3>
                        <button
                          className="w-fit min-h-11 p-0.5 group             
                  hover:from-sky-blue-border hover:to-sky-blue-border
                  bg-gradient-to-r group to-[#312F2F] from-[#212121]
              rounded-full group"
                          onClick={() => {
                            if (validatorView == `edit-${id}`) {
                              return valdatorViewHandler("none");
                            }
                            valdatorViewHandler(`edit-${id}`);
                          }}
                          type="button"
                        >
                          <span
                            className="px-12 py-6
                      group-hover:from-sky-from group-hover:to-sky-to text-sm
                      group-hover:bg-gradient-to-r bg-[#1C1C1C]
                  flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full"
                          >
                            {validatorView == `edit-${id}` ? " Close" : "Edit"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        );
      })}
    </>
  );
}

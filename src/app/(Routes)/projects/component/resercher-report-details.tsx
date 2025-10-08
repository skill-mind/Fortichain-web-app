"use client";
import ValidatorReportModal from "@/components/modals/validator-report";
import { Report, useContractFetch } from "@/hook/useBlockchain";
import { BadgeCheck } from "lucide-react";
import { useState } from "react";
import ValidatorReportEditor from "./validator-report-editor";
import { useAccount } from "@starknet-react/core";
import { FORTICHAINABI } from "@/contract/abi";
import ProjectReviewCard from "./projectReviewCard";
import img from "../../../../../public/Ellipse 1.svg";
import Image from "next/image";
export default function ResearcherReportDetails({
  reports,
}: {
  reports: Report[];
}) {
  const { address } = useAccount();
  const [validatorView, setValidatorView] = useState("none"); // audit , edit chat
  const [openValidatorRepor, setOpenValidatorRepor] = useState(false);
  const [showReport, setShowReport] = useState(0);
  const { readData: isValidator } = useContractFetch(
    FORTICHAINABI,
    "is_validator",
    [address ?? ""]
  );
  function validatorHandler() {
    setOpenValidatorRepor((prev) => !prev);
  }
  function valdatorViewHandler(section: string) {
    setValidatorView(section);
  }
  console.log(isValidator);
  return (
    <>
      {reports?.map((data, id) => {
        const bg =
          data.category.toLocaleUpperCase() === "Low".toLocaleUpperCase() ||
          data.category.toLocaleUpperCase() == "low".toLocaleUpperCase()
            ? "bg-pririty-low-bg text-blue-ball"
            : data.category.toLocaleUpperCase() === "Medium".toLocaleUpperCase()
            ? "bg-warning-bg text-warning"
            : "bg-pririty-high-bg text-pririty-high-text";
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
                      {data?.researcher_address?.toString(0)}
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
                      setShowReport(0);
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
                  <ValidatorReportModal handler={validatorHandler} />
                )}
                {isValidator && (
                  <div className="border border-dark-border-gray rounded-[8px] p-5 bg-dark-gray w-full">
                    <div className="bg-dark-gray-bt rounded-[14px] flex items-center justify-between gap-5 py-3 px-6">
                      <div>
                        <h3>Validators Vote</h3>
                        <h5 className="text-gray-text">
                          Click valid or invalid to vote on vulnerability
                        </h5>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-10 py-3 bg-good-bg text-good rounded-full flex gap-2 items-center">
                          <BadgeCheck />
                          Valid Report
                        </button>
                        <button
                          onClick={validatorHandler}
                          className="px-10 py-3 bg-pririty-high-bg text-pririty-high-text rounded-full flex gap-2 items-center"
                        >
                          <BadgeCheck />
                          Invalid Report
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                <section
                  key={data.id}
                  className="bg-dark-gray border border-dark-border-gray rounded-[8px] p-6 grid gap-14 "
                >
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4 ">
                      <h2>{data.title}</h2>
                      <span className="bg-white-text flex h-[25px] w-[1px]" />
                      <h3 className="text-gray-text">{data.created_at}</h3>
                    </div>
                    <button className={`rounded-full ${bg} py-2 px-4`}>
                      Priority: {data.category}
                    </button>
                  </div>
                  <div>
                    <h1>Description</h1>
                    <p>{data.description}</p>
                  </div>
                  <div>
                    <h1>Potential Risk</h1>
                    <p>{data.potential_risk}</p>
                  </div>
                  <div>
                    <h1>Recommendations</h1>
                    <p>{data.recommendation}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1 items-center ">
                      <span className="text-gray-text ">Audited:</span>
                      <span className="py-1 px-3 bg-dark-gray-pop rounded-full">
                        17th - Aug - 2025
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
                </section>
                <div className="flex flex-wrap gap-4 text-sm xl:grid xl:grid-cols-3">
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
                          Start
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="border border-dark-border-gray rounded-[8px] p-5 bg-dark-gray w-full">
                    <div className="bg-dark-gray-bt rounded-[14px] flex items-center justify-between gap-5 py-3 px-6">
                      <h3>Discussions</h3>
                      <button
                        className="w-fit min-h-11 p-0.5 group             
                  hover:from-sky-blue-border hover:to-sky-blue-border
                  bg-gradient-to-r group to-[#312F2F] from-[#212121]
              rounded-full group"
                        type="button"
                        onClick={() => {
                          valdatorViewHandler("chat");
                        }}
                      >
                        <span
                          className="px-12 py-6
                      group-hover:from-sky-from group-hover:to-sky-to text-sm
                      group-hover:bg-gradient-to-r bg-[#1C1C1C]
                  flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full"
                        >
                          Chat with validator
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="border border-dark-border-gray rounded-[8px] p-5 bg-dark-gray w-full">
                    <div className="bg-dark-gray-bt rounded-[14px] flex items-center justify-between gap-5 py-3 px-6">
                      <h3>Edit Audit</h3>
                      <button
                        className="w-fit min-h-11 p-0.5 group             
                  hover:from-sky-blue-border hover:to-sky-blue-border
                  bg-gradient-to-r group to-[#312F2F] from-[#212121]
              rounded-full group"
                        onClick={() => {
                          valdatorViewHandler("edit");
                        }}
                        type="button"
                      >
                        <span
                          className="px-12 py-6
                      group-hover:from-sky-from group-hover:to-sky-to text-sm
                      group-hover:bg-gradient-to-r bg-[#1C1C1C]
                  flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full"
                        >
                          Edit
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                {validatorView == `audit-${id}` && (
                  <ValidatorReportEditor researcherId={data.id} />
                )}
              </>
            )}
          </div>
        );
      })}
    </>
  );
}

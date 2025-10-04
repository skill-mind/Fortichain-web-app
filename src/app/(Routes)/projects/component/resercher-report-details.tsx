"use client";
import ValidatorReportModal from "@/components/modals/validator-report";
import { Report } from "@/hook/useBlockchain";
import { BadgeCheck } from "lucide-react";
import { useState } from "react";

export default function ResearcherReportDetails({
  reports,
  isValidator,
}: {
  reports: Report[];
  isValidator: boolean;
}) {
  const [openValidatorRepor, setOpenValidatorRepor] = useState(false);

  function validatorHandler() {
    setOpenValidatorRepor((prev) => !prev);
  }
  console.log(isValidator);
  return (
    <>
      {reports?.map((data) => {
        const bg =
          data.category.toLocaleUpperCase() === "Low".toLocaleUpperCase() ||
          data.category.toLocaleUpperCase() == "low".toLocaleUpperCase()
            ? "bg-pririty-low-bg text-blue-ball"
            : data.category.toLocaleUpperCase() === "Medium".toLocaleUpperCase()
            ? "bg-warning-bg text-warning"
            : "bg-pririty-high-bg text-pririty-high-text";

        return (
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
          </>
        );
      })}
    </>
  );
}

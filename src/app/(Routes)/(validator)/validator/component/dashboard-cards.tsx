import { server, useValidatorCount } from "@/hook/fetch-requests";
import { useAllProjects, validatorType } from "@/hook/useBlockchain";
import { Badge, WaveIcon } from "@/icons/github";
import { dashboardData } from "@/util/mock-data";
import {
  ArrowRight,
  CircleDollarSign,
  FileText,
  FolderOpen,
  Timer,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function SubmitReport({
  isSubmitOpen,
  handdleClick,
  validator,
}: {
  isSubmitOpen: boolean;
  handdleClick: () => void;
  validator: validatorType;
}) {
  const projects = useAllProjects()?.slice().reverse().slice(0, 3) ?? [];
  return (
    <div className="bg-dark-gray roundd-[8px] p-6 grid gap-3">
      <div className="bg-dark-gray rounded-[8px] flex flex-col gap-3 w-full sm:min-w-80">
        <div className="flex justify-between items-center text-18">
          <h3>Reports Available</h3>
          <FolderOpen className="text-gray-text" />
        </div>
        <h2 className="text-2xl">4</h2>
        <span
          className={`bg-good-bg text-good rounded-full px-3 py-1 w-fit text-12`}
        >
          +2 this month
        </span>
      </div>
      {/* mobile */}
      {isSubmitOpen && (
        <div className="sm:hidden flex flex-col gap-3">
          <h2 className="text-sm mt-3 ">New Project Alerts</h2>
          {projects?.map((data) => {
            return (
              <div
                key={data.id}
                className="bg-dark-gray-pop p-6 grid gap-3 rounded-[8px]"
              >
                <div className="flex justify-between items-center border-b border-[#343434] pb-6">
                  <h3>{data.name}</h3>
                  <span
                    className={`${
                      data.priority.toLocaleLowerCase() ===
                      "High".toLocaleLowerCase()
                        ? "bg-pririty-high-bg text-pririty-high-text"
                        : data.priority.toLocaleLowerCase() ===
                          "Medium".toLocaleLowerCase()
                        ? "bg-warning-bg text-warning"
                        : "bg-pririty-low-bg text-blue-ball"
                    } rounded-full px-3 py-1 w-fit text-12`}
                  >
                    Priority: {data.priority}
                  </span>
                </div>
                <div className="text-sm text-gray-text flex items-center ">
                  <Timer />
                  <span>{data.created_at.replace("1970", "2025")}</span>
                </div>
              </div>
            );
          })}

          <Link
            className="w-full mt-3 min-h-11 p-0.5 group             
      hover:from-sky-blue-border hover:to-sky-blue-border
      bg-gradient-to-r group to-[#312F2F] from-[#212121]
  rounded-full group"
            href="/assigned-projects"
          >
            <span
              className="px-6 py-3 text-sm
          group-hover:from-sky-from group-hover:to-sky-to
          group-hover:bg-gradient-to-r bg-[#1C1C1C]
      flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full"
            >
              Go to Projects
            </span>
          </Link>
        </div>
      )}
      <div className="text-gray-text flex flex-col gap-1 items-center  justify-center mt-3 sm:hidden">
        Click to expand
        <button
          type="button"
          onClick={handdleClick}
          className={`${isSubmitOpen ? "rotate-180" : "rotate-0"}`}
        >
          <WaveIcon />
        </button>
      </div>
      {/* desktop */}
      <h2 className="text-sm mt-3 hidden sm:block">New Project Alerts</h2>
      {projects?.map((data) => {
        return (
          <div
            key={data.id}
            className="bg-dark-gray-pop p-6  gap-3 rounded-[8px] hidden sm:block"
          >
            <div className="flex justify-between items-center border-b border-[#343434] pb-6 mb-4">
              <h3>{data.name}</h3>
              <span
                className={`${
                  data.priority.toLocaleLowerCase() ===
                  "High".toLocaleLowerCase()
                    ? "bg-pririty-high-bg text-pririty-high-text"
                    : data.priority.toLocaleLowerCase() ===
                      "Medium".toLocaleLowerCase()
                    ? "bg-warning-bg text-warning"
                    : "bg-pririty-low-bg text-blue-ball"
                } rounded-full px-3 py-1 w-fit text-12`}
              >
                Priority: {data.priority}
              </span>
            </div>
            <div className="text-sm text-gray-text flex items-center">
              <Timer />
              <span>{data.created_at.replace("1970", "2025")}</span>
            </div>
          </div>
        );
      })}

      <Link
        className="w-full mt-3 min-h-11 p-0.5 group             
      hover:from-sky-blue-border hover:to-sky-blue-border
      bg-gradient-to-r group to-[#312F2F] from-[#212121]
  rounded-full group hidden sm:block"
        href="/assigned-projects"
      >
        <span
          className="px-6 py-3 text-sm
          group-hover:from-sky-from group-hover:to-sky-to
          group-hover:bg-gradient-to-r bg-[#1C1C1C]
      flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full"
        >
          Go to Projects
        </span>
      </Link>
    </div>
  );
}

export function ApproveReport({
  isApproveOpen,
  handdleClick,
  validator,
}: {
  isApproveOpen: boolean;
  handdleClick: () => void;
  validator: validatorType;
}) {
  return (
    <div className="bg-dark-gray roundd-[8px] p-6  flex flex-col gap-3">
      <div className="bg-dark-gray rounded-[8px] flex flex-col gap-3 w-full sm:min-w-80">
        <div className="flex justify-between items-center text-18">
          <h3>Audits Made</h3>
          <FileText className="text-gray-text" />
        </div>
        <h2 className="text-2xl">3</h2>
        <span
          className={`bg-pririty-low-bg text-blue-ball rounded-full px-3 py-1 w-fit text-12`}
        >
          Good
        </span>
      </div>
      {/* mobile */}
      {isApproveOpen && (
        <>
          <h2 className="text-sm mt-3">Audit Stats</h2>
          <div className="min-h-[150px] bg-dark-gray-pop p-6 grid gap-3 rounded-[8px]">
            <h3>Overall Accuracy</h3>

            <div>
              <h3 className="text-2xl">0%</h3>
              <span className="w-full h-1.5 rounded-full bg-percentage-bg block mt-2">
                <span className="bg-blue-ball rounded-full w-[0%] block h-1.5" />
              </span>
            </div>
          </div>
          <div className="min-h-[150px] bg-dark-gray-pop p-6 grid gap-3 rounded-[8px]">
            <h3>Total Votes</h3>

            <div>
              <h3 className="text-2xl">0</h3>
              <span className="text-gray-text text-sm">
                1 Report in progress
              </span>
            </div>
          </div>
          <div className="min-h-[150px] bg-dark-gray-pop p-6 grid gap-3 rounded-[8px]">
            <h3>Success Rate</h3>

            <div>
              <h3 className="text-2xl">0/0</h3>
            </div>
          </div>
        </>
      )}
      <div className="text-gray-text flex flex-col gap-1 items-center  justify-center mt-3 sm:hidden">
        Click to expand
        <button
          type="button"
          onClick={handdleClick}
          className={`${isApproveOpen ? "rotate-180" : "rotate-0"}`}
        >
          <WaveIcon />
        </button>
      </div>
      {/* desktop */}
      <h2 className="text-sm mt-3 hidden sm:block">Report Stats</h2>
      <div className="min-h-[150px] bg-dark-gray-pop p-6 grid gap-3 rounded-[8px] sm:block">
        <h3>Overall Accuracy</h3>

        <div>
          <h3 className="text-2xl">0%</h3>
          <span className="w-full h-1.5 rounded-full bg-percentage-bg block mt-2">
            <span className="bg-blue-ball rounded-full w-[0%] block h-1.5" />
          </span>
        </div>
      </div>
      <div className="min-h-[150px] bg-dark-gray-pop p-6  gap-3 rounded-[8px] hidden sm:grid">
        <h3>Total Votes</h3>

        <div>
          <h3 className="text-2xl">0</h3>
          <span className="text-gray-text text-sm">1 Report in progress</span>
        </div>
      </div>
      <div className="min-h-[150px] bg-dark-gray-pop p-6 gap-3 rounded-[8px] hidden sm:grid">
        <h3>Success Rate</h3>

        <div>
          <h3 className="text-2xl">0/0</h3>
        </div>
      </div>
    </div>
  );
}

export function Earnings({
  isEarningOpen,
  handdleClick,
  validator,
}: {
  isEarningOpen: boolean;
  handdleClick: () => void;
  validator: validatorType;
}) {
  const count = useValidatorCount();
  console.log(count, "--44");
  return (
    <div className="bg-dark-gray roundd-[8px] p-6 flex flex-col gap-3">
      <div className="bg-dark-gray rounded-[8px] flex flex-col gap-3 w-full sm:min-w-80">
        <div className="flex justify-between items-center text-18">
          <h3>Token Earnings</h3>
          <CircleDollarSign className="text-gray-text" />
        </div>
        <h2 className="text-2xl">${validator.total_bounty_won.toFixed(2)}</h2>
        <span
          className={`bg-[#320D35] text-[#BB00C1] rounded-full px-3 py-1 w-fit text-12`}
        >
          Total rewards
        </span>
      </div>
      {isEarningOpen && (
        <>
          <h2 className="text-sm mt-3">Performance Snapshot</h2>
          <div className="min-h-[150px] bg-dark-gray-pop p-6 grid gap-3 rounded-[8px]">
            <h3>Rank</h3>

            <div>
              <h3 className="text-2xl">#4</h3>
              <span className="text-gray-text text-sm">
                Out of {count?.validatorCount} validators
              </span>
            </div>
          </div>
          <div className="min-h-[150px] bg-dark-gray-pop p-6 grid gap-3 rounded-[8px]">
            <h3>Reputation</h3>

            <div>
              <h3 className="text-2xl">0%</h3>
              <span className="w-full h-1.5 rounded-full bg-percentage-bg block mt-2">
                <span className="bg-blue-ball rounded-full w-[0%] block h-1.5" />
              </span>
            </div>
          </div>
          <div className="min-h-[150px] bg-dark-gray-pop p-6 grid gap-3 rounded-[8px]">
            <div className="flex justify-between items-center">
              <h3>Achievements</h3>
              <div className="flex justify-between items-center text-gray-text">
                <span>View All</span>
                <ArrowRight className="h-4" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-pririty-low-bg rounded-full p-2 grid place-content-center">
                <Badge />
              </div>
              <div className="grid text-sm gap-2">
                <h3>Accuracy Badge</h3>
                <span className="text-gray-text">
                  85%+ accuracy for 3 months
                </span>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="text-gray-text flex flex-col gap-1 items-center  justify-center mt-3 sm:hidden">
        Click to expand
        <button
          type="button"
          onClick={handdleClick}
          className={`${isEarningOpen ? "rotate-180" : "rotate-0"}`}
        >
          <WaveIcon />
        </button>
      </div>
      <h2 className="text-sm mt-3 sm:block hidden">Performance Snapshot</h2>
      <div className="min-h-[150px] bg-dark-gray-pop p-6 gap-3 rounded-[8px] sm:grid hidden">
        <h3>Rank</h3>
        <div>
          <h3 className="text-2xl">#0</h3>
          <span className="text-gray-text text-sm">
            Out of {count?.validatorCount} validators
          </span>
        </div>
      </div>
      <div className="min-h-[150px] bg-dark-gray-pop p-6 hidden gap-3 rounded-[8px] sm:grid">
        <h3>Reputation</h3>

        <div>
          <h3 className="text-2xl">0%</h3>
          <span className="w-full h-1.5 rounded-full bg-percentage-bg block mt-2">
            <span className="bg-blue-ball rounded-full w-[0%] block h-1.5" />
          </span>
        </div>
      </div>
      {/* <div className="min-h-[150px] bg-dark-gray-pop p-6 gap-3 rounded-[8px] sm:grid hidden">
        <div className="flex justify-between items-center">
          <h3>Achievements</h3>
          <div className="flex justify-between items-center text-gray-text">
            <span>View All</span>
            <ArrowRight className="h-4" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-pririty-low-bg rounded-full p-2 grid place-content-center">
            <Badge />
          </div>
          <div className="grid text-sm gap-2">
            <h3>Accuracy Badge</h3>
            <span className="text-gray-text">85%+ accuracy for 3 months</span>
          </div>
        </div>
      </div> */}
    </div>
  );
}

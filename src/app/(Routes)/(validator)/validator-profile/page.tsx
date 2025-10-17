"use client";
import { useAccount, useDisconnect } from "@starknet-react/core";
import { WidthrawTable } from "../../../../components/WidthrawTable";
import Loader from "@/app/loading";
import { useValidatorDetail } from "@/hook/useBlockchain";
import Link from "next/link";
import { useState } from "react";
import WidthrawModal from "@/components/modals/widthraw-modal";

export default function Page() {
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const validatorDetail = useValidatorDetail(address ?? "");
  const [isOpen, setIsOpen] = useState(false);
  if (!validatorDetail) {
    return <Loader />;
  }
  function handler() {
    setIsOpen((prev) => !prev);
  }
  return (
    <>
      {isOpen && <WidthrawModal handler={handler} />}
      <section className="grid gap-3">
        <div className=" grid md:grid-cols-2 grid-cols-1 xl:grid-cols-3 gap-3">
          <div className="rounded-[8px] p-6 border border-dark-border-gray bg-dark-gray flex flex-col gap-3">
            <h3>Bounty Reward</h3>
            <div className="grid gap-3  bg-dark-gray-pop rounded-[8px] p-6">
              <h4 className="text-gray-text text-base">
                Total amount made from bounty
              </h4>
              <h2 className="text-2xl">
                ${validatorDetail.total_bounty_won.toFixed(2)}
              </h2>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <h3 className="text-base">{validatorDetail.username}</h3>
              <span className="bg-pririty-low-bg text-blue-ball rounded-full px-3 py-1 w-fit text-12">
                {validatorDetail.is_open_for_work ? "Active" : "unavailable"}
              </span>
            </div>
            <span className="break-all text-gray-text">
              0x4A7d5cB67eA4F6e4B7cC3B3aE3f8fD9bB2cF9a1B
            </span>
            <button
              className="w-fit min-h-11 p-0.5 group             
                  hover:from-sky-blue-border hover:to-sky-blue-border
                  bg-gradient-to-r group to-[#312F2F] from-[#212121]
              rounded-full group"
              onClick={() => {
                disconnect();
              }}
              type="button"
            >
              <span
                className="px-6 py-3
                      group-hover:from-sky-from group-hover:to-sky-to
                      group-hover:bg-gradient-to-r bg-[#1C1C1C] text-sm font-normal
                  flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full"
              >
                Disconnect Wallet
              </span>
            </button>
          </div>

          <div className="">
            <div className="rounded-[8px] p-6 border border-dark-border-gray h-full bg-dark-gray flex flex-col gap-3">
              <h3>Paid Out</h3>
              <div className="grid gap-3  bg-dark-gray-pop rounded-[8px] p-6">
                <h4 className="text-gray-text text-base">
                  Total amount withdrawn
                </h4>
                <h2 className="text-2xl">
                  ${validatorDetail.total_amount_withdrawn.toFixed(2)}
                </h2>
              </div>
              <div className="flex items-center gap-2 mt-2 capitalize">
                <h3 className="text-base capitalize">Work Availability</h3>
                <span className="bg-pririty-low-bg text-blue-ball rounded-full px-3 py-1 w-fit text-12">
                  {validatorDetail.is_open_for_work ? "Active" : "unavailabe"}
                </span>
              </div>
              <div className="bg-dark-gray-pop max-w-fit   p-1 rounded-full mt-7 hidden xl:block">
                <div className="flex justify-between items-center capitalize">
                  <button
                    className={`w-fit ${
                      validatorDetail.is_open_for_work
                        ? "from-sky-blue-border to-sky-blue-border"
                        : "bg-inherit"
                    } min-h-11 p-0.5 group             
                  hover:from-sky-blue-border hover:to-sky-blue-border
                  bg-gradient-to-r group 
              rounded-full group`}
                    type="button"
                  >
                    <span
                      className={`px-6 py-3 capitalize ${
                        validatorDetail.is_open_for_work
                          ? "bg-gradient-to-r from-sky-from to-sky-to"
                          : "bg-inherit"
                      }
                      group-hover:from-sky-from group-hover:to-sky-to
                      group-hover:bg-gradient-to-r bg-[#1C1C1C] text-sm font-normal
                  flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full`}
                    >
                      available
                    </span>
                  </button>
                  <button
                    className={`w-fit ${
                      !validatorDetail.is_open_for_work
                        ? "from-sky-blue-border to-sky-blue-border"
                        : "bg-inherit"
                    } min-h-11 p-0.5 group             
                  hover:from-sky-blue-border hover:to-sky-blue-border
                  bg-gradient-to-r group 
              rounded-full group`}
                    type="button"
                  >
                    <span
                      className={`px-6 py-3 capitalize ${
                        !validatorDetail.is_open_for_work
                          ? "bg-gradient-to-r from-sky-from to-sky-to"
                          : "bg-inherit"
                      }
                      group-hover:from-sky-from group-hover:to-sky-to
                      group-hover:bg-gradient-to-r bg-[#1C1C1C] text-sm font-normal
                  flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full`}
                    >
                      unavailable
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div></div>
          </div>

          <div className="grid w-full ">
            <div className="rounded-[8px] p-6 border border-dark-border-gray bg-dark-gray flex flex-col gap-3 justify-between">
              <div className="grid gap-3">
                <h3>Available Bounty for Withdrawal</h3>
                <div className="grid gap-3  bg-dark-gray-pop rounded-[8px] p-6">
                  <h4 className="text-gray-text text-base">
                    Available to withdraw
                  </h4>
                  <h2 className="text-2xl">
                    ${validatorDetail.available_amount_to_widthdraw.toFixed(2)}
                  </h2>
                </div>
              </div>
              <button
                onClick={handler}
                className={`min-w-157 min-h-50 p-0.5 group 
             
                bg-sky-blue-border
                 
               rounded-full group`}
              >
                <span
                  className={`px-6 py-3
              
                     bg-gradient-to-r from-sky-from to-sky-to

                  flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-full w-full`}
                >
                  Withdraw
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className=" grid md:grid-cols-2 grid-cols-1 xl:grid-cols-[1fr_2fr] gap-3">
          <div className="rounded-[8px] p-6 border border-dark-border-gray bg-dark-gray flex flex-col gap-3 justify-between">
            <div className="gap-5  grid h-fit xl:h-full">
              <h3 className="text-18">
                KYC
                <span className="bg-good-bg px-2 py-1 text-good rounded-full text-sm ml-2">
                  Verified
                </span>
              </h3>
              <div className="flex items-center gap-2 border-b border-dark-border-gray pb-3">
                <div className="bg-good-bg text-good rounded-full w-8 h-8 grid place-content-center text-18">
                  ✓
                </div>
                <div>
                  <h3>GitHub</h3>
                  <p className="text-gray-text">Https://github.com/ebube</p>
                </div>
              </div>
              <div className="grid gap-3">
                <h2>Pass Work</h2>
                {validatorDetail.passwork.map((data, i) => {
                  return (
                    <div
                      key={i}
                      className="w-full border-b border-dark-border-gray pb-2"
                    >
                      <Link href={data} target="_blank">
                        {data}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <button
                className="min-h-11 p-0.5 group             
                  hover:from-sky-blue-border hover:to-sky-blue-border
                  bg-gradient-to-r group to-[#312F2F] from-[#212121]
              rounded-full group w-full"
                type="button"
              >
                <span
                  className="px-6 py-3 h-full
                      group-hover:from-sky-from group-hover:to-sky-to
                      group-hover:bg-gradient-to-r bg-[#1C1C1C] text-sm font-normal
                  flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full  w-full"
                >
                  Edit
                </span>
              </button>
            </div>
          </div>

          <div className="rounded-[8px] p-6 border border-dark-border-gray h-full bg-dark-gray flex flex-col xl:flex-row gap-3 ">
            <div className="gap-3 grid w-full">
              <div className="min-h-[150px] bg-dark-gray-pop p-2 gap-3 rounded-[8px] flex">
                <div className="bg-dark-gray p-3 flex flex-col w-full justify-between rounded-[4px]">
                  <h2 className="text-18">Total Votes</h2>
                  <div>
                    <h2 className="text-2xl">4</h2>
                    <span className="text-gray-text text-sm">
                      1 pending review
                    </span>
                  </div>
                </div>
                <div className="bg-dark-gray p-3 flex flex-col w-full justify-between rounded-[4px]">
                  <h2 className="text-18">Success Rate</h2>
                  <div>
                    <h2 className="text-2xl">3/4</h2>
                    <span className="text-gray-text text-sm">
                      Correct predictions
                    </span>
                  </div>
                </div>
              </div>
              <div className="min-h-[150px] bg-dark-gray-pop p-6 grid gap-3 rounded-[8px]">
                <h3>Overall Accuracy</h3>

                <div>
                  <h3 className="text-2xl">70%</h3>
                  <span className="w-full h-1.5 rounded-full bg-percentage-bg block mt-2">
                    <span className="bg-blue-ball rounded-full w-[70%] block h-1.5" />
                  </span>
                </div>
              </div>
            </div>
            <div className="gap-3 grid w-full">
              <div className="min-h-[150px] bg-dark-gray-pop p-6 grid gap-3 rounded-[8px]">
                <h3>Reputation Score</h3>

                <div>
                  <h3 className="text-2xl">70</h3>
                </div>
                <span
                  className={`bg-good-bg text-good rounded-full px-3 py-1 w-fit text-12`}
                >
                  +6 this month
                </span>
              </div>
              <div className="min-h-[150px] bg-dark-gray-pop p-6 hidden gap-3 rounded-[8px] sm:grid">
                <h3>Participation</h3>

                <div>
                  <h3 className="text-2xl">90%</h3>
                  <span className="w-full h-1.5 rounded-full bg-percentage-bg block mt-2">
                    <span className="bg-blue-ball rounded-full w-[90%] block h-1.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WidthrawTable />
      </section>
    </>
  );
}

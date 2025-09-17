"use client";
import { X } from "lucide-react";
import { mockUserAccountData } from "@/app/(Routes)/(admin)/suspension/component/suspention-table";
import { useState } from "react";
import ValidatorModal from "./validator-details-modal";
import { FORTICHAINABI } from "@/contract/abi";
import { useContractFetch, useValidators } from "@/hook/useBlockchain";
import { formatAddress } from "@/util/helper";
import Link from "next/link";
import { useAccount } from "@starknet-react/core";
import { assign_validator } from "@/hook/blockchainWriteFunction";

export default function AsignValidorModal({
  handler,
  id,
}: {
  handler: () => void;
  id: number;
}) {
  const [isExpand, setIsExpand] = useState(false);
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const { account } = useAccount();
  const validators = useValidators();
  function validatorDetailhandler() {
    setIsShowDetail((prev) => !prev);
  }
  const [validatorID, setValidatorId] = useState<number | null>(0);
  const { readData: project } = useContractFetch(
    FORTICHAINABI,
    "view_project",
    typeof id !== "undefined" ? [+id] : []
  );
  console.log(validators);
  return (
    <>
      {validatorID &&
        isShowDetail &&
        validators &&
        validators[validatorID - 1] && (
          <ValidatorModal
            handler={validatorDetailhandler}
            selectedValidator={validators[validatorID - 1]}
          />
        )}
      <div
        className=" bg-main-bg/75 z-50 fixed top-0 h-screen w-full"
        onClick={handler}
      ></div>
      <div className="p-6 max-w-[950px] w-full bg-dark-gray rounded-[8px] mx-auto grid gap-5 fixed top-50 sm:top-20 z-50 left-1/2 -translate-x-[50%]">
        <div className="flex justify-between">
          <h3>Project Details</h3>
          <button
            type="button"
            onClick={handler}
            className="bg-dark-gray-pop p-1.5 rounded-full"
          >
            <X />
          </button>
        </div>

        <div className="flex sm:flex-row gap-1 flex-col justify-between">
          <div className="text-sm">
            <span className="text-gray-text"> Project Name:</span>
            <span>{project?.name}</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-text"> Owner:</span>
            <span>
              {" "}
              {project?.project_owner &&
                `0x0${formatAddress(project?.project_owner?.toString(16))}`}
            </span>
          </div>
        </div>
        <div className="flex justify-between flex-col sm:flex-row gap-1">
          <div className="text-sm">
            <span className="text-gray-text">Vulnerabilities Found:</span>
            <span>3</span>
          </div>
          <div className="text-sm flex items-center gap-2">
            <span className="text-gray-text">Status:</span>
            <span
              className={`${
                project?.is_completed
                  ? "bg-good-bg text-good"
                  : "bg-pririty-low-bg text-blue-ball"
              } px-3 py-1.5 text-12 rounded-full w-full block text-center`}
            >
              {project?.is_active ? "Available" : "Validated"}
            </span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-sm">
            <span className="text-gray-text">Repository:</span>
            <Link
              href={project?.repository_url ?? "#"}
              target="_blank"
              className="text-blue-ball break-all"
            >
              {project?.repository_url}
            </Link>
          </div>
        </div>
        <div className="flex rounded-[8px] justify-between items-center my-3 bg-dark-gray-bt py-3 px-6">
          <h3>Assign Validator</h3>

          <button
            onClick={() => {
              setIsExpand((prev) => !prev);
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
              {isExpand ? "Collapse" : " Expand"}
            </span>
          </button>
        </div>
        {isExpand && (
          <div className="border h-[400px] bg-dark-gray p-6 border-dark-border-gray rounded-[8px] overflow-scroll scrollbar-hide max-h-[750px] font-walsheim">
            <div className="overflow-x-auto scrollbar-hide">
              <table
                className="w-full min-w-[600px] sticky text-base"
                role="table"
                aria-label="list of Project"
              >
                <thead className="border-b border-dark-border-gray text-gray-text text-base">
                  <tr>
                    <th
                      className="sticky left-0 z-20 px-4 py-3 text-left"
                      scope="col"
                      aria-label="date"
                    >
                      Validators
                    </th>
                    <th
                      className="sticky left-[60px] z-20 px-4 py-3 text-left "
                      scope="col"
                      aria-label="project name"
                    >
                      Reputation
                    </th>
                    <th
                      className="px-4 py-3 text-left"
                      scope="col"
                      aria-label="Projects"
                    >
                      Assignment
                    </th>
                    <th
                      className="px-4 py-3 text-left"
                      scope="col"
                      aria-label="Wallet address transfer to"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {validators?.map((user, key) => {
                    return (
                      <tr
                        key={key}
                        className={`border-b text-sm border-dark-border-gray last:border-b-0 transition-colors `}
                        role="row"
                      >
                        <td
                          className="sticky left-0 z-10 bg-inherit px-4 py-4"
                          role="gridcell"
                          aria-label={`${user?.username}`}
                        >
                          <span className="w-fit h-6 rounded-full flex items-center justify-start">
                            {user.username}
                          </span>
                          <span className="text-gray-text">
                            {formatAddress(
                              user?.validator_address?.toString(16),
                              15,
                              12
                            )}
                          </span>
                        </td>
                        <td
                          className="sticky left-[60px] z-10 px-4 py-4 font-medium"
                          role="gridcell"
                          aria-label=""
                        >
                          80
                        </td>

                        <td
                          className="px-4 py-4 text-xs md:text-sm"
                          role="gridcell"
                          aria-label={`transfer to ${user.status}`}
                        >
                          <button
                            className={`relative p-1 bg-gradient-to-r rounded-full from-[#2AA479] to-[#103E13]`}
                            type="button"
                            onClick={() => {
                              assign_validator(
                                id,
                                user?.validator_address.toString(16),
                                account,
                                setIsSubmitting,
                                setIsOpen,
                                setIsError
                              );
                            }}
                          >
                            <span
                              className={`bg-gradient-to-r px-6 py-2  to-[#2AA479] from-[#103E13] rounded-full w-full h-full grid place-content-center`}
                            >
                              Assign
                            </span>
                          </button>
                        </td>
                        <td
                          className="px-4 py-4 text-center"
                          role="gridcell"
                          aria-label={`button`}
                        >
                          <button
                            className="w-fit min-h-11 p-0.5 group             
                        hover:from-sky-blue-border hover:to-sky-blue-border
                        bg-gradient-to-r group to-[#312F2F] from-[#212121]
                    rounded-full group my-auto"
                            type="button"
                            onClick={() => {
                              setValidatorId(Number(user.id));
                              validatorDetailhandler();
                            }}
                          >
                            <span
                              className="px-6 py-3 text-sm
                            group-hover:from-sky-from group-hover:to-sky-to
                            group-hover:bg-gradient-to-r bg-[#1C1C1C]
                        flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full"
                            >
                              View Profile
                            </span>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

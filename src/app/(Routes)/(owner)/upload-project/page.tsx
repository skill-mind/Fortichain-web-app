"use client";
import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import SubmitReport from "./component/submit-reprt";
import FundProject from "./component/fund-project";
import Summary from "./component/summary";
import { UploadProjectProps } from "@/util/types";
import { useAccount } from "@starknet-react/core";
import { uploadProjectHandle } from "@/hook/blockchainWriteFunction";
import SuccessModal from "@/components/modals/succesful-upload-project-model";
import { FORTICHAINADDRESS, myProvider, ONE_STK } from "@/contract/address";
import { byteArray, cairo, CallData, PaymasterDetails } from "starknet";
import toast from "react-hot-toast";

export default function Page() {
  const { account } = useAccount();

  const [formsection, setFormSection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState<UploadProjectProps>({
    projectName: "",
    description: "",
    projectType: "",
    deadline: null,
    repoUrl: "",
    contractAddress: "",
    amount: null,
    priority: "",
  });
  const style1 = formsection >= 2 ? "bg-blue-ball" : "bg-dark-gray-pop";
  const style2 = formsection == 3 ? "bg-blue-ball" : "bg-dark-gray-pop";
  const style2 = formsection == 3 ? "bg-blue-ball" : "bg-dark-gray-pop";

  const header =
    formsection == 1
      ? "Submit New Project for Audit"
      : formsection == 2
      ? "Fund project for audit"
      : "Summary";

  const handleSubmit = async () => {
    if (!account) {
      return toast.error("Connect Wallet to continue");
    }
    uploadProjectHandle(
      account,
      setIsSubmitting,
      formData,
      setIsOpen,
      handler,
      setIsError
    );
  };
  function handler() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div>
      {isOpen && (
        <SuccessModal
          handler={handler}
          isSubmitting={isSubmitting}
          isError={isError}
          setIsError={setIsError}
        />
      )}
      <nav className="flex justify-center max-w-fit mx-auto gap-6 list-none  items-center text-base">
        <li className="grid gap-4">
          <span>Submit New Project</span>
          <span className={`bg-blue-ball h-1.5 w-full block rounded-full`} />
        </li>
        <li className="grid gap-4">
          <span>Fund project</span>
          <span className={`${style1} h-1.5 w-full block rounded-full`} />
        </li>
        <li className="grid gap-4">
          <span>Summary & Upload</span>
          <span className={`${style2} h-1.5 w-full block rounded-full`} />
        </li>
      </nav>

      <div className="max-w-[750px] mx-auto mt-7 p-6 rounded-[8px] border border-dark-border-gray grid gap-5">
      <div className="max-w-[750px] mx-auto mt-7 p-6 rounded-[8px] border border-dark-border-gray grid gap-5">
        <div className="mb-3 text-18 grid gap-3">
          <h2>{header}</h2>
          {formsection == 2 && (
            <p className="text-gray-text text-base">
              Add funds to your bounty escrow account to pay for audit.
            </p>
          )}
        </div>

        {formsection == 1 && (
          <SubmitReport setFormData={setFormData} data={formData} />
        )}
        {formsection == 2 && (
          <FundProject setFormData={setFormData} data={formData} />
        )}
        {formsection == 3 && <Summary {...formData} />}
        <div className="flex sm:flex-row flex-col justify-between items-center gap-6 my-2">
          {formsection != 1 && (
            <button
              className="w-full min-h-50 p-0.5 group             
          {formsection != 1 && (
            <button
              className="w-full min-h-50 p-0.5 group             
                  hover:from-sky-blue-border hover:to-sky-blue-border
                  bg-gradient-to-r group to-[#312F2F] from-[#212121]
              rounded-full group"
              type="button"
              onClick={() => {
                if (formsection > 1) {
                  setFormSection((prev) => prev - 1);
                }
                console.log(formData);
              }}
            >
              <span
                className="px-6 py-3
              type="button"
              onClick={() => {
                if (formsection > 1) {
                  setFormSection((prev) => prev - 1);
                }
                console.log(formData);
              }}
            >
              <span
                className="px-6 py-3
                      group-hover:from-sky-from group-hover:to-sky-to
                      group-hover:bg-gradient-to-r bg-[#1C1C1C]
                  flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-full w-full"
              >
                Back
              </span>
            </button>
          )}
              >
                Back
              </span>
            </button>
          )}

          <button
            className={`${
              isSubmitting ? "disabled:cursor-not-allowed" : ""
            }  w-full min-h-50 p-0.5 group             
                  from-sky-blue-border to-sky-blue-border
                  bg-gradient-to-r group hover:to-[#312F2F] hover:from-[#212121]
              rounded-full group`}
            type="submit"
            disabled={isSubmitting}
            onClick={(e) => {
              if (formsection < 3) {
                setFormSection((prev) => prev + 1);
              }
              if (formsection === 3) {
                console.log("kk");
                handleSubmit();
              }
            }}
          >
            <span
              className="px-6 py-3
                      from-sky-from to-sky-to group-disabled:cursor-not-allowed
                       bg-gradient-to-r group-hover:bg-[#1C1C1C]
                  flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-full w-full"
            >
              {isSubmitting ? "submitting...." : "next"}
              {isSubmitting ? "submitting...." : "next"}
            </span>
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}

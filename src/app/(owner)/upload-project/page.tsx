"use client";
import { useState } from "react";
import SubmitReport from "./component/submit-reprt";
import FundProject from "./component/fund-project";
import Summary from "./component/summary";
import { UploadProjectProps } from "@/util/types";

export default function Page() {
    const [formsection, setFormSection] = useState(1);
    const [formData, setFormData] = useState<UploadProjectProps>({
      projectName: "",
      description: "",
      projectType: "",
      deadline: new Date(),
      repoUrl: "",
      contractAddress: "",
      amount: 0,
      tokenType: "",
    });
  const style1 = formsection >= 2 ? "bg-blue-ball" : "bg-dark-gray-pop";
    const style2 = formsection == 3 ? "bg-blue-ball" : "bg-dark-gray-pop";

    const header =
      formsection == 1
        ? "Submit New Project for Audit"
        : formsection == 2
        ? "Fund project for audit"
        : "Summary";
  return (
    <div>
      <nav className="flex justify-center max-w-fit mx-auto gap-6 list-none  items-center">
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

      <form className="max-w-[750px] mx-auto mt-7 p-6 rounded-[8px] border border-dark-border-gray grid gap-5">
        <div className="mb-3 grid gap-3">
          <h2>{header}</h2>
          {formsection == 2 && (
            <p className="text-gray-text">
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
         {formsection !=1 && <button
            className="w-full min-h-50 p-0.5 group             
                  hover:from-sky-blue-border hover:to-sky-blue-border
                  bg-gradient-to-r group to-[#312F2F] from-[#212121]
              rounded-full group"
            type="button"
            onClick={() => {
              if (formsection > 1) {
                setFormSection((prev) => prev - 1);
              }
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
          </button>}

          <button
            className="w-full min-h-50 p-0.5 group             
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
              onClick={() => {
                if (formsection < 3) {
                  setFormSection((prev) => prev + 1);
                }
              }}
            >
              Next
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

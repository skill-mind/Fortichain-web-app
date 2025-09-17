import { validatorType } from "@/hook/useBlockchain";
import { X } from "lucide-react";
import Link from "next/link";

export default function ValidatorModal({
  handler,
  selectedValidator,
}: {
  handler: () => void;
  selectedValidator: validatorType;
}) {
  console.log(selectedValidator);
  return (
    <>
      <div
        className="bg-main-bg/75 fixed top-0 h-screen w-full z-[300]"
        onClick={handler}
      ></div>
      <div className="p-6 max-w-[700px] w-full bg-dark-gray rounded-[8px] mx-auto grid gap-5 fixed top-50 sm:top-40 left-1/2 -translate-x-[50%] z-[400]">
        <div className="flex justify-between">
          <h3>Researchers Details</h3>
          <button
            type="button"
            onClick={handler}
            className="bg-dark-gray-pop p-1.5 rounded-full"
          >
            <X />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text">{selectedValidator?.username}</span>
            <span className="bg-pririty-low-bg text-blue-ball rounded-full py-1 px-2 text-">
              Active
            </span>
          </div>
          <div>
            <span className="text-gray-text">Reputation: </span>
            <span>91</span>
          </div>
        </div>

        <div className="py-3 px-6 bg-dark-gray-pop rounded-[8px] grid gap-4">
          <span className="text-gray-text text-base">Total Money Earned</span>
          <h2 className="text-18">$9,650</h2>
        </div>

        <div className="flex items-center justify-between gap-3 flex-col sm:flex-row">
          <div className="border border-dark-border-gray w-full rounded-[8px] py-6  px-7  flex-col gap-4 flex">
            <span className="text-base text-gray-text border-b border-dark-border-gray pb-4">
              Projects Validated
            </span>
            <span className="text-xl ">5</span>
          </div>
          <div className="border border-dark-border-gray w-full rounded-[8px] py-6  px-7  flex-col gap-4 flex">
            <span className="text-base text-gray-text border-b border-dark-border-gray pb-4">
              Approval Rate
            </span>
            <span className="text-xl ">5</span>
          </div>
        </div>
        <div className="grid gap-3 mt-3 text-base">
          <span className="text-gray-text">GitHub Profile URL</span>
          <Link
            href={selectedValidator.github_profile_url ?? " "}
            className="text-blue-ball"
          >
            {/* {selectedValidator?.github_profile_url} */}
          </Link>
        </div>

        <div className="grid gap-6 mt-3 text-base">
          <span className="text-gray-text">Pass Work</span>
          <span className="text-blue-ball break-all">
            https://github.com/fortichain/smartcontractaudit
          </span>
          <span className="text-blue-ball break-all">
            https://github.com/fortichain/smartcontractaudit
          </span>
        </div>
        {/* <div>
          <div className="flex sm:flex-row flex-col justify-between items-center gap-6 my-2">
            <button
              className="w-full min-h-50 p-0.5 group             
              hover:from-sky-blue-border hover:to-sky-blue-border
              bg-gradient-to-r group to-[#312F2F] from-[#212121]
          rounded-full group"
              type="button"
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
              >
                View Profile
              </span>
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
}

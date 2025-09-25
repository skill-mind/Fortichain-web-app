import { SecurityResearcher } from "@/hook/useBlockchain";
import { X } from "lucide-react";

export default function ResearcherModal({
  handler,
  selectedResearcher,
}: {
  handler: () => void;
  selectedResearcher: SecurityResearcher;
}) {
  const approval_rate =
    (selectedResearcher?.reports_approved_count /
      selectedResearcher?.reports_submitted_count) *
    100;
  return (
    <>
      <div
        className="bg-main-bg/75 fixed top-0 h-screen w-full"
        onClick={handler}
      ></div>
      <div className="p-6 max-w-[700px] w-full bg-dark-gray rounded-[8px] mx-auto grid gap-5 fixed top-50 sm:top-40 left-1/2 -translate-x-[50%]">
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
            <span className="capitalize">{selectedResearcher?.username}</span>
            <span className="bg-pririty-low-bg text-blue-ball rounded-full py-1 px-2 text-">
              Active
            </span>
          </div>
          <div>
            <span className="text-gray-text">Reputation: </span>
            <span>{selectedResearcher?.reputation}</span>
          </div>
        </div>

        <div className="py-3 px-6 bg-dark-gray-pop rounded-[8px] grid gap-4">
          <span className="text-gray-text text-base">Total Money Earned</span>
          <h2 className="text-18">
            ${selectedResearcher?.total_bounty_won.toFixed()}
          </h2>
        </div>

        <div className="flex items-center justify-between gap-3 flex-col sm:flex-row">
          <div className="border border-dark-border-gray w-full rounded-[8px] py-6  px-7  flex-col gap-4 flex">
            <span className="text-base text-gray-text border-b border-dark-border-gray pb-4">
              Projects Reports
            </span>
            <span className="text-xl ">
              {selectedResearcher.reports_submitted_count}
            </span>
          </div>
          <div className="border border-dark-border-gray w-full rounded-[8px] py-6  px-7  flex-col gap-4 flex">
            <span className="text-base text-gray-text border-b border-dark-border-gray pb-4">
              Total Vulnerabilities
            </span>
            <span className="text-xl ">{selectedResearcher.vulnerability}</span>
          </div>
          <div className="border border-dark-border-gray w-full rounded-[8px] py-6  px-7  flex-col gap-4 flex">
            <span className="text-base text-gray-text border-b border-dark-border-gray pb-4">
              Approval Rate
            </span>
            <span className="text-xl ">
              {approval_rate ? approval_rate : 0}%
            </span>
          </div>
        </div>
        <div className="grid gap-3 mt-3 text-base">
          <span className="text-gray-text">GitHub Profile URL</span>
          <span className="text-blue-ball">Https://github.com/ebube</span>
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
      </div>
    </>
  );
}

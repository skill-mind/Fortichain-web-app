"use client";
import { useProjectOwner } from "@/hook/useBlockchain";
import Card from "./component/card";
import { ReportHistoryChart } from "./component/chart";
import { useAccount } from "@starknet-react/core";
import Loader from "@/app/loading";

export default function Page() {
  const { address } = useAccount();
  const projectOwner = useProjectOwner(address ?? "");
  // if (projectOwner === undefined) {
  //   return <Loader />;
  // }
  return (
    <div className="text-white-text">
      <div className="flex flex-wrap justify-between items-center sm:grid sm:grid-cols-2 xl:flex xl:flex-nowrap gap-3">
        <Card type="total" ownerData={projectOwner ?? undefined} />
        <Card type="progress" ownerData={projectOwner ?? undefined} />
        <Card type="complete" ownerData={projectOwner ?? undefined} />
        <Card type="active" ownerData={projectOwner ?? undefined} />
      </div>
      <div className="w-fit gap-3 mt-3 grid-cols-1 grid md:grid-cols-2">
        <div className="bg-dark-gray rounded-[8px] order-1">
          <h3 className="text-18 p-6"> Report History</h3>
          <ReportHistoryChart />
        </div>
        <div className="bg-dark-gray h-full rounded-[8px] md:order-1 p-6 self-end">
          <h3 className="text-18">Note:</h3>
          <span className="text-gray-text">Quick tips to get you started.</span>
          <ul className="list-disc grid gap-3 mt-3 pl-3 text-base">
            <li>Please fund the audit with USDC on Starknet chain.</li>
            <li>
              Security researchers and validators can proceed with the audit
              once there’s an adequate bounty amount.
            </li>
            <li>
              It would be helpful to set a reasonable timeframe for the audit.
            </li>
            <li>
              After the audit is completed, reports will be shared to guide the
              developers of the audited project in making any necessary changes.
            </li>
            <li>You can download the audit certificate on successful audit</li>
            <li>Make your audit smart contract github repo public</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

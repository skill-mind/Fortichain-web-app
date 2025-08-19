import Card from "./component/card";
import { ReportHistoryChart } from "./component/chart";

export default function Page() {
  return (
    <div className="text-white-text">
      <div className="flex flex-wrap justify-between items-center sm:grid sm:grid-cols-2 xl:grid-cols-4 gap-3">
        <Card type="total" />
        <Card type="progress" />
        <Card type="complete" />
        <Card type="active" />
      </div>
      <div className="w-fit gap-3 mt-3 grid-cols-1 grid md:grid-cols-2">
        <div className="bg-dark-gray rounded-[8px] order-1">
          <h3 className="p-3"> Report History</h3>
          <ReportHistoryChart />
        </div>
        <div className="bg-dark-gray h-full rounded-[8px] md:order-1 p-6 self-end">
          <h3>Note:</h3>
          <span className="text-gray-text">Quick tips to get you started.</span>
          <ul className="list-disc grid gap-3 pl-3">
            <li>Please fund the audit with USDT or USDC on Starknet chain.</li>
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

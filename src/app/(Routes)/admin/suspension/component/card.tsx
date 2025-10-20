import { CircleDollarSign, FileText, FolderOpen } from "lucide-react";

export default function SuspensionCard() {
  return (
    <div className="flex flex-wrap justify-between items-center sm:grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
      <div className="bg-dark-gray p-6 min-h-[150px] rounded-[8px] flex flex-col gap-3 w-full sm:min-w-80 justify-between">
        <div className="flex justify-between items-center text-18">
          <h3>Active Suspensions</h3>
          <FolderOpen className="text-gray-text" />
        </div>
        <h2 className="text-2xl">12</h2>
      </div>
      <div className="bg-dark-gray p-6 min-h-[150px] rounded-[8px] flex flex-col gap-3 w-full sm:min-w-80 justify-between">
        <div className="flex justify-between items-center text-18">
          <h3>This Month</h3>
          <FileText className="text-gray-text" />
        </div>
        <h2 className="text-2xl">3</h2>
      </div>
      <div className="bg-dark-gray p-6 min-h-[150px] rounded-[8px] flex flex-col gap-3 w-full sm:min-w-80 justify-between">
        <div className="flex justify-between items-center text-18">
          <h3>Total Resolved</h3>
          <CircleDollarSign className="text-gray-text" />
        </div>
        <h2 className="text-2xl">14</h2>
      </div>
    </div>
  );
}

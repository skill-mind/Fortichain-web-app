import Image from "next/image";

export default function HelpReportCard() {
  const bg = true
    ? "bg-pririty-low-bg text-blue-ball"
    : true
    ? "bg-warning-bg text-warning"
    : "bg-pririty-high-bg text-pririty-high-text";
  return (
    <div
      className={`border border-dark-border-gray w-full
       bg-dark-gray rounded-[8px] h-fit  p-4 grid gap-3.5  font-walsheim font-medium`}
    >
      <span className="rounded-full py-1.5 px-3 bg-pririty-high-bg text-pririty-high-text w-fit">
        Open
      </span>

      <div className="border-b border-dark-border-gray pb-6 flex items-center justify-between">
        <h3 className="text-18 ">
          Unable to upload project files to the platform
        </h3>
      </div>
      <div className="flex justify-between items-center my-3 flex-wrap gap-5">
        <div className="flex items-center gap-1">
          <span className="text-gray-text base">Email Address</span>
          <span className="text-12 bg-dark-gray-pop rounded-full px-3 py-1">
            ebube@gmail.com
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-gray-text base">Date</span>
          <span className="text-12 bg-dark-gray-pop rounded-full px-3 py-1">
            12th - 08 - 2025
          </span>
        </div>
      </div>
    </div>
  );
}

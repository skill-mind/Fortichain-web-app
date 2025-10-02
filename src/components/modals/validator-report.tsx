import { X } from "lucide-react";
import { Editor } from "../editor/editor";
import { useRef } from "react";

export default function ValidatorReportModal({
  handler,
}: {
  handler: () => void;
}) {
  const reportRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div
        className="bg-main-bg/75 fixed top-0 h-screen w-full z-[300]"
        onClick={handler}
      ></div>
      <div className="p-6  w-fit bg-dark-gray rounded-[8px] mx-auto grid gap-5 fixed top-50 sm:top-40 left-1/2 -translate-x-[50%] z-[400]">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-18">Invalid Report</h3>
            <h5 className="text-gray-text text-base">
              State why the report is invalid
            </h5>
          </div>
          <button
            type="button"
            onClick={handler}
            className="bg-dark-gray-pop p-1.5 rounded-full"
          >
            <X />
          </button>
        </div>
        <div className="border border-dark-border-gray rounded-[4px] min-h-[600px]">
          <Editor ref={reportRef} />
        </div>
        <div>
          <button
            className="min-h-50 p-0.5 group   w-fit          
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
              Submit
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

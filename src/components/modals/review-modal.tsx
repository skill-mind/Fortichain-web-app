import { X } from "lucide-react";
import Rating from "../rating";
import { epocTime, useContractFetch } from "@/hook/useBlockchain";
import { FORTICHAINABI } from "@/contract/abi";
import { formatAddress } from "@/util/helper";
import Link from "next/link";

export default function ReviewModal({
  handler,
  id,
}: {
  handler: () => void;
  id: number;
}) {
  const { readData: project } = useContractFetch(
    FORTICHAINABI,
    "view_project",
    typeof id !== "undefined" ? [+id] : []
  );
  return (
    <>
      <div
        className="bg-main-bg/75 fixed top-0 h-screen w-full"
        onClick={handler}
      ></div>
      <div className="p-6 max-w-[700px] w-full bg-dark-gray rounded-[8px] mx-auto grid gap-5 fixed top-50 sm:top-40 left-1/2 -translate-x-[50%]">
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
            <span className="text-gray-text">Deadline:</span>
            <span>{epocTime(project?.deadline?.toString())}</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-text">Status:</span>
            <span
              className={`ml-1 ${
                project?.is_completed
                  ? "text-good bg-good-bg"
                  : "bg-warning-bg text-warning"
              }  rounded-full py-1.5 px-3`}
            >
              {project?.is_completed ? "Validated" : "In Progress"}
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
        {project?.is_completed && (
          <>
            <div className="">
              <h3>Project Team</h3>
              <div className="flex gap-1 items-center flex-wrap">
                <span className="text-gray-text">Researchers:</span>
                <span className="bg-dark-gray-pop rounded-full py-1 px-3">
                  Ebube
                </span>
                <span className="bg-dark-gray-pop rounded-full py-1 px-3">
                  Oshioke
                </span>
                <span className="text-gray-text">Validators:</span>
                <span className="bg-dark-gray-pop rounded-full py-1 px-3">
                  Yunus
                </span>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-6">
                <h3 className="text-base">Project Owner Researchers Rating</h3>
                <Rating />
              </div>
              <div className="grid gap-6">
                <h3 className="text-base">Project Owner Validator Rating</h3>
                <Rating />
              </div>
            </div>
          </>
        )}
        <div>
          <div className="flex sm:flex-row flex-col justify-between items-center gap-6 my-2">
            <button
              className="w-full min-h-50 p-0.5 group             
              hover:from-sky-blue-border hover:to-sky-blue-border
              bg-gradient-to-r group to-[#312F2F] from-[#212121]
          rounded-full group"
              type="button"
              onClick={handler}
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

            <Link
              href={`projects/${project?.id.toString()}`}
              className="w-full min-h-50 p-0.5 group             
              from-sky-blue-border to-sky-blue-border
              bg-gradient-to-r group hover:to-[#312F2F] hover:from-[#212121]
          rounded-full group"
            >
              <span
                className="px-6 py-3
                  from-sky-from to-sky-to
                   bg-gradient-to-r group-hover:bg-[#1C1C1C]
              flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-full w-full"
              >
                View project
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

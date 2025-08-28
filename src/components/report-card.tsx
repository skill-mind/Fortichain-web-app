import { DetailedProjectCard } from "@/util/mock-data";
import Image from "next/image";
import avatar from "../../public/Ellipse 1.svg"
import { Message } from "@/icons/github";

export default function ReportCard({ project }: { project: DetailedProjectCard}) {
      const bg =
    project.priority === "Low"
      ? "bg-pririty-low-bg text-blue-ball"
      : project.priority === "Medium"
      ? "bg-warning-bg text-warning"
      : "bg-pririty-high-bg text-pririty-high-text";
  return (
    <div
      className={`border ${
        project.status == "Audited" || project.status == "In Progress"
          ? "border-pririty-low-bg"
          : "border-dark-border-gray"
      } bg-dark-gray rounded-[8px] min-h-52 p-4 grid gap-3.5  font-walsheim font-medium`}
    >
      <div className="flex items-center gap-1">
        <span
          className={`text-12 rounded-full  w-1 h-1 ${
            project.status == "In Progress" ? "bg-warning" : "bg-blue-ball"
          } `}
        />
        <h5>{project.status}</h5>
      </div>
      <div className="border-b border-dark-border-gray pb-6 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <Image src={avatar} alt="pririty type" />
          <h3 className="text-base ">Smart contract audit</h3>
        </div>
        <div className="flex gap-2 items-center text-sm w-full sm:w-fit justify-end">
          <div className="flex gap-1 items-center">
            <Message />
            <span>{project.commentCount}</span>
          </div>
          <span
            className={` ${bg} rounded-full py-1.5 px-3 text-12 sm:text-base`}
          >
            Priority: {project.priority}
          </span>
        </div>
      </div>
      <div className="text-base border-b border-dark-border-gray pb-6">
        <h3 className="text-gray-text text-sm">Detail</h3>
        <p>{project.description}</p>
      </div>
      <div className="flex justify-between items-center my-3 flex-wrap gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1">
            <span className="text-gray-text base">Deadline:</span>
            <span className="text-12 bg-dark-gray-pop rounded-full px-3 py-1">
              {project.deadline}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-text base">Submitted:</span>
            <span className="text-12 bg-dark-gray-pop rounded-full px-3 py-1">
              {project.submittedDate}
            </span>
          </div>
        </div>
        <button
          className="w-full sm:w-fit min-h-11 p-0.5 group             
          hover:from-sky-blue-border hover:to-sky-blue-border
          bg-gradient-to-r group to-[#312F2F] from-[#212121]
      rounded-full group"
          type="button"
        >
          <span
            className="px-6 py-3 text-sm
              group-hover:from-sky-from group-hover:to-sky-to
              group-hover:bg-gradient-to-r bg-[#1C1C1C]
          flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full"
          >
            {project.status == "Audited" ? "Go to Project" : "Edit Report"}
          </span>
        </button>
      </div>
    </div>
  );
}
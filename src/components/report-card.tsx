import Image from "next/image";
import avatar from "../../public/Ellipse 1.svg";
import { Message } from "@/icons/github";
import { Project } from "@/hook/useBlockchain";
import { truncateString } from "@/util/types";
import Link from "next/link";

export default function ReportCard({ project }: { project: Project }) {
  const bg =
    project.priority.toLocaleUpperCase() == "low"
      ? "bg-pririty-low-bg text-blue-ball"
      : project.priority.toLocaleLowerCase() == "medium"
      ? "bg-warning-bg text-warning"
      : "bg-pririty-high-bg text-pririty-high-text";
  return (
    <div
      className={`border ${
        project.is_completed
          ? "border-pririty-low-bg"
          : "border-dark-border-gray"
      } bg-dark-gray rounded-[8px] min-h-52 p-4 grid gap-3.5  font-walsheim font-medium`}
    >
      <div className="flex items-center gap-1">
        <span
          className={`text-12 rounded-full  w-1 h-1 ${
            project.is_active ? "bg-warning" : "bg-blue-ball"
          } `}
        />
        <h5>{project.is_completed ? "audited" : "in-progress"}</h5>
      </div>
      <div className="border-b border-dark-border-gray pb-6 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <Image src={avatar} alt="pririty type" />
          <h3 className="text-base capitalize">{project.name}</h3>
        </div>
        <div className="flex gap-2 items-center text-sm w-full sm:w-fit justify-end">
          <span
            className={` ${bg} rounded-full py-1.5 px-3 text-12 sm:text-base`}
          >
            Priority: {project.priority}
          </span>
        </div>
      </div>
      <div className="text-base border-b border-dark-border-gray pb-6">
        <h3 className="text-gray-text text-sm">Detail</h3>
        <p>{truncateString(project.description, 150)}</p>
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
              {project.created_at.replace("1970", "2025")}
            </span>
          </div>
        </div>
        <Link
          href={`/projects/${project.id}`}
          className="w-full sm:w-fit min-h-11 p-0.5 group             
          hover:from-sky-blue-border hover:to-sky-blue-border
          bg-gradient-to-r group to-[#312F2F] from-[#212121]
      rounded-full group"
        >
          <span
            className="px-6 py-3 text-sm
              group-hover:from-sky-from group-hover:to-sky-to
              group-hover:bg-gradient-to-r bg-[#1C1C1C]
          flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full"
          >
            {project.is_completed ? "Go to Project" : "View Report"}
          </span>
        </Link>
      </div>
    </div>
  );
}

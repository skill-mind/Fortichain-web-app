import Image from "next/image";
import avatar from "../../../../../public/Ellipse 1.svg";
import { Project } from "@/util/types";



export default function ProjectCard({project}:{project:Project}) {
  return (
    <div className={`border ${project.status=="audited"?"border-pririty-low-bg":"border-dark-border-gray"} bg-dark-gray rounded-[8px] min-h-52 p-4 grid gap-3.5`}>
      <div className="flex items-center gap-1">
        <span className="rounded-full bg-blue-ball w-1 h-1" />
        <h5>{project.status}</h5>
      </div>
      <div className="border-b border-dark-border-gray pb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src={avatar} alt="pririty type" />
          <h3>{project.name}</h3>
        </div>
        <span
          className={` ${project.priority=="low"?"text-blue-ball bg-pririty-low-bg":"text-pririty-high-text bg-pririty-high-bg"} rounded-full py-1.5 px-3 text-sm`}
        >
          Priority: {project.priority}
        </span>
      </div>
      <div className="flex justify-between items-center my-3">
        <div className="flex items-center gap-1">
          <span className="text-gray-text">Deadline:</span>
          <span className="bg-dark-gray-pop rounded-full px-3 py-1">
            {project.deadline}
          </span>
        </div>
        <button
          className="w-fit min-h-11 p-0.5 group             
          hover:from-sky-blue-border hover:to-sky-blue-border
          bg-gradient-to-r group to-[#312F2F] from-[#212121]
      rounded-full group"
          type="button"
        >
          <span
            className="px-6 py-3
              group-hover:from-sky-from group-hover:to-sky-to
              group-hover:bg-gradient-to-r bg-[#1C1C1C]
          flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full"
          >
            View details
          </span>
        </button>
      </div>
    </div>
  );
}

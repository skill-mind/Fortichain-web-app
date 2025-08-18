"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { mockProjects } from "@/util/mock-data";
import ProjectCard from "./component/project-card";
import { useState } from "react";
import { Project } from "@/util/types";
import { FileCode, FileMinus, X } from "lucide-react";
import Image from "next/image";
import avatar from "../../../../public/Ellipse 1.svg";
import { ArrowGray, GithubIcon } from "@/icons/github";
import ProjectReviewCard from "./component/projectReviewCard";

export default function Page() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    mockProjects[0]
  );
  return (
    <section className="flex flex-col xl:grid xl:grid-cols-[1fr_2fr] gap-2">
      <div>
        <div className="grid gap-3">
          <div className="h-11 border-dark-border-gray border rounded-full py-1">
            <Select
            // value={data.projectType}
            // onValueChange={(data) => {
            //   setFormData((userData: UploadProjectProps) => {
            //     return {
            //       ...userData,
            //       projectType: data,
            //     };
            //   });
            // }}
            >
              <SelectTrigger className="rounded-full w-full border-none pl-7">
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent className="bg-main-bg text-white-text">
                <SelectItem value="ALL">ALL</SelectItem>
                <SelectItem value="AUDIT">AUDIT</SelectItem>
                <SelectItem value="IN PROGRESS">IN PROGRESS</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {mockProjects.map((data) => {
            return <ProjectCard key={data.id} project={data} />;
          })}
        </div>
      </div>
      <aside className="md:grid gap-3 flex flex-col">
        {!selectedProject && (
          <h2 className=" grid place-content-center h-full text-gray-text text-xl">
            Nothing to show. Preview project to see details
          </h2>
        )}
        {selectedProject && (
          <>
            <div className="md:grid flex flex-col gap-y-3 bg-dark-gray border border-dark-border-gray rounded-[8px] h-fit px-6 py-3 w-full">
              <div className="flex justify-between items-center capitalize">
                <div className="flex items-center gap-1">
                  <span className="rounded-full bg-blue-ball w-1 h-1" />
                  <h5>{selectedProject.status}</h5>
                </div>

                <div className="rounded-full bg-dark-gray-pop w-fit p-1">
                  <X />
                </div>
              </div>
              <div className="pb-6 flex flex-wrap gap-y-3 md:gap-y-0 items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image src={avatar} alt="pririty type" />
                  <h3>{selectedProject.name}</h3>
                </div>
                <div className="bg-dark-gray-pop rounded-[8px] max-w-56 py-3 px-6 flex gap-1">
                  <span className="text-gray-text border-r border-gray-text pr-2">
                    Bounty amount
                  </span>
                  <span className="">${selectedProject.bountyAmount}</span>
                </div>
              </div>
              <div className=" border-b border-dark-border-gray flex items-center gap-1 pb-8">
                <span className="text-gray-text">Deadline:</span>
                <span className="bg-dark-gray-pop rounded-full px-3 py-1">
                  {selectedProject.deadline}
                </span>
              </div>
              <div className="grid gap-3">
                <h3 className="text-gray-text">Details</h3>
                <p>{selectedProject.description}</p>
              </div>
              <div className="grid gap-3">
                <h3 className="text-gray-text">Links</h3>
                <div className="flex flex-wrap gap-3 items-center">
                  <button className="w-fit bg-dark-border-gray py-1 px-3 rounded-full flex items-center gap-2 border border-[#312F2F]">
                    <GithubIcon />
                    <span className="text-base">GitHub Repo</span>
                    <ArrowGray />
                  </button>
                  <button className="w-fit bg-dark-border-gray py-1 px-3 rounded-full flex items-center gap-2 border border-[#312F2F]">
                    <FileCode className="text-gray-text w-5" />
                    <span className="text-base">Contract Address</span>
                    <ArrowGray />
                  </button>
                  <button className="w-fit bg-dark-border-gray py-1 px-3 rounded-full flex items-center gap-2 border border-[#312F2F]">
                    <FileMinus className="text-gray-text w-5" />
                    <span className="text-base">View Certificate</span>
                  </button>
                </div>
              </div>

              <div className="grid gap-3">
                <h3 className="text-gray-text">Rewards</h3>
                <p>
                  Rewards would be paid on successful completion by validator
                </p>
              </div>
            </div>
            <ProjectReviewCard report={selectedProject} type="researcher" />
            {/* <ProjectReviewCard report={selectedProject} type="validator" /> */}
          </>
        )}
      </aside>
    </section>
  );
}

"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { mockProjects } from "@/util/mock-data";
import ProjectCard from "../../../../components/project-card";
import { useState } from "react";
import { Project } from "@/util/types";
import { FileCode, FileMinus, X } from "lucide-react";
import Image from "next/image";
import avatar from "../../../../../public/Ellipse 1.svg";
import { ArrowGray, GithubIcon } from "@/icons/github";
import { Input } from "@/components/ui/input";

export default function PrjoectDetails() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    mockProjects[0]
  );
  return (
    <section className="grid gap-4">
      <div className="md:grid flex flex-col gap-y-3 bg-dark-gray border border-dark-border-gray rounded-[8px] h-fit px-6 py-3 w-full">
        <div className="flex justify-between items-center capitalize">
          <div className="flex items-center gap-1 text-base">
            <span className="rounded-full bg-blue-ball w-1 h-1" />
            <h5>{selectedProject?.status}</h5>
          </div>
        </div>
        <div className="pb-6 flex flex-wrap gap-y-3 md:gap-y-0 items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src={avatar} alt="pririty type" />
            <h3 className="text-18">{selectedProject?.title}</h3>
          </div>
          <div className="bg-dark-gray-pop rounded-[8px] max-w-56 py-3 px-6 flex gap-1 items-center">
            <span className="text-gray-text border-r border-gray-text pr-2 text-sm">
              Bounty amount
            </span>
            <span className="text-18">${selectedProject?.bountyAmount}</span>
          </div>
        </div>
        <div className=" border-b text-sm border-dark-border-gray flex items-center gap-1 pb-8">
          <span className="text-gray-text">Deadline:</span>
          <span className="bg-dark-gray-pop rounded-full px-3 py-1">
            {selectedProject?.deadline}
          </span>
        </div>
        <div className="grid gap-3">
          <h3 className="text-gray-text text-base">Details</h3>
          <p className="text-sm">{selectedProject?.description}</p>
        </div>
        <div className="grid gap-3">
          <h3 className="text-gray-text">Links</h3>
          <div className="flex flex-wrap gap-3 items-center">
            <button className="text-sm w-fit bg-dark-border-gray py-1 px-3 rounded-full flex items-center gap-2 border border-[#312F2F]">
              <GithubIcon />
              <span>GitHub Repo</span>
              <ArrowGray />
            </button>
            <button className="w-fit bg-dark-border-gray py-1 px-3 rounded-full flex items-center gap-2 border border-[#312F2F]">
              <FileCode className="text-gray-text w-5" />
              <span>Contract Address</span>
              <ArrowGray />
            </button>
            <button className="w-fit bg-dark-border-gray py-1 px-3 rounded-full flex items-center gap-2 border border-[#312F2F]">
              <FileMinus className="text-gray-text w-5" />
              <span>View Certificate</span>
            </button>
          </div>
        </div>

        <div className="grid gap-3">
          <h3 className="text-gray-text text-base">Rewards</h3>
          <p className="text-sm">
            Rewards would be paid on successful completion by validator
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-3 text-sm">
        <div className="border w-full border-dark-border-gray rounded-[8px] p-3 bg-dark-gray">
          <div className="bg-dark-gray-bt p-3 rounded-[8px] flex items-center justify-between">
            <span> Write Report </span>
            <button
              className="w-fit min-h-11 p-0.5 group             
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
                Start
              </span>
            </button>
          </div>
        </div>
        <div className="border w-full border-dark-border-gray rounded-[8px] p-3 bg-dark-gray">
          <div className="bg-dark-gray-bt p-3 rounded-[8px] flex items-center justify-between">
            <span> Discussions </span>
            <button
              className="w-fit min-h-11 p-0.5 group             
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
                Chat with validator
              </span>
            </button>
          </div>
        </div>
        <div className="border w-full border-dark-border-gray rounded-[8px] p-3 bg-dark-gray">
          <div className="bg-dark-gray-bt p-3 rounded-[8px] flex items-center justify-between">
            <span>Edit Report </span>
            <button
              className="w-fit min-h-11 p-0.5 group             
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
                Edit
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-dark-gray p-6 rounded-[8px] grid gap-5">
        <div className="border-b border-dark-border-gray pb-6 grid gap-1">
          <h2 className="text-xl">Fortichain Security Vulnerability Report</h2>
          <span className="text-gray-text text-sm">
            Submit your security findings and vulnerability reports
          </span>
        </div>
        <div className="bg-dark-gray-pop rounded-[8px] max-w-56 py-3 px-6 flex gap-1 items-center">
          <span className="text-gray-text border-r border-gray-text pr-2 text-sm">
            Section 1
          </span>
          <span className="text-18">Description</span>
        </div>
        <div className="grid grid-cols-[2fr_1fr_1fr] items-center gap-2">
          <Input
            type="text"
            className="border border-dark-border-gray rounded-full p-6"
          />
          <div className="border-dark-border-gray border rounded-full py-2">
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
                <SelectValue placeholder="Select severity level" />
              </SelectTrigger>
              <SelectContent className="bg-main-bg text-white-text">
                <SelectItem value="ALL">ALL</SelectItem>
                <SelectItem value="Re-entrancy">Re-entrancy</SelectItem>
                <SelectItem value="Access-Control">Access Control</SelectItem>
                <SelectItem value="Logic-Error">Logic Error</SelectItem>
                <SelectItem value="Gas-Optimization">
                  Gas Optimization
                </SelectItem>
                <SelectItem value="Best-Practice">Best Practice</SelectItem>
                <SelectItem value="Others">Others</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="border-dark-border-gray border rounded-full py-2">
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
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent className="bg-main-bg text-white-text">
                <SelectItem value="ALL">ALL</SelectItem>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Medium">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </section>
  );
}

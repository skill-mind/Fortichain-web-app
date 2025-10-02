"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { mockProjects } from "@/util/mock-data";
import ProjectCard from "../../../components/project-card";
import { useContext, useEffect, useState } from "react";
import { useAccount } from "@starknet-react/core";
import { Project, useAllProjects, useUserProject } from "@/hook/useBlockchain";
import Loader from "@/app/loading";
import { Router } from "@/provider/route-provider";

export default function Page() {
  const { address } = useAccount();
  const { route } = useContext(Router);
  const allProjects = useAllProjects();
  const [viewProjects, setViewProjects] = useState<Project[] | undefined>();
  const userProjects = useUserProject(address ?? "");
  useEffect(() => {
    if (route !== "owner") {
      setViewProjects(allProjects);
    } else {
      setViewProjects(userProjects);
    }
  }, [route, userProjects, allProjects]);

  if (viewProjects == undefined) {
    return <Loader />;
  }

  if (viewProjects.length == 0) {
    return (
      <div className=" w-full flex h-screen justify-center items-center text-center text-gray-text text-2xl md:text-[32px] border border-dark-border-gray rounded-[8px] bg-dark-gray">
        <h2 className="mx-auto h-fit md:p-28 p-2.5 max-w-3xl ">
          Nothing to show. Created project will show here
        </h2>
      </div>
    );
  }
  console.log(viewProjects);
  return (
    <div className=" font-walsheim">
      <div className="h-11 border-dark-border-gray border rounded-full py-1 md:max-w-[450px] mb-3">
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
            <SelectItem value="Available">AUDIT</SelectItem>
            <SelectItem value="Completed">IN PROGRESS</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-3 grid-cols-1">
        {viewProjects?.map((data) => {
          return <ProjectCard project={data} key={data.id} />;
        })}
      </section>
    </div>
  );
}

"use client";
import ProjectCard from "@/components/project-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUserProject } from "@/hook/useBlockchain";
import { mockResercher } from "@/util/mock-data";
import { useAccount } from "@starknet-react/core";

export default function Page() {
  const { address } = useAccount();
  const projects = useUserProject(address ?? "");
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
        {projects?.map((data) => {
          return <ProjectCard project={data} key={data.id} />;
        })}
      </section>
    </div>
  );
}

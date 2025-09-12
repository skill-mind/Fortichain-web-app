"use client";
import { mockProjects } from "@/util/mock-data";
import { useEffect, useState } from "react";
import { Project as Data } from "@/util/types";
import { ArrowLeftIcon, FileCode, FileMinus, X } from "lucide-react";
import Image from "next/image";
import avatar from "../../../../../../public/Ellipse 1.svg";
import { ArrowGray, GithubIcon } from "@/icons/github";
import { useAccount } from "@starknet-react/core";
import {
  epocTime,
  getTimeFromEpoch,
  Project,
  useContractFetch,
  useUserProject,
} from "@/hook/useBlockchain";
import ProjectReviewCard from "../component/projectReviewCard";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { FORTICHAINABI } from "@/contract/abi";
import { shortString } from "starknet";
import Link from "next/link";
import Loader from "@/app/loading";

export default function Page() {
  const { id } = useParams();
  const router = useRouter();
  const [selectedProject, setSelectedProject] = useState<Data | null>(
    mockProjects[0]
  );
  const [projectDetail, setProjectDetail] = useState<Project | null>();
  const { readData: project } = useContractFetch(
    FORTICHAINABI,
    "view_project",
    // @ts-expect-error parmas can be undefined
    [+id]
  );
  const handleBack = () => {
    router.back();
  };
  useEffect(() => {
    if (project) {
      setProjectDetail({
        validator_paid: project.validator_paid,
        researchers_paid: project.researchers_paid,
        repository_url: project.repository_url,
        smart_contract_address: `https://sepolia.voyager.online/contract/0x0${project[
          "smart_contract_address"
        ].toString(16)}`,
        name: project.name,
        id: +project.id.toString(),
        description: project.description,
        is_active: project.is_active,
        is_completed: project.is_completed,
        created_at: getTimeFromEpoch(project.created_at.toString()),
        deadline: getTimeFromEpoch(project.deadline.toString()),
        priority: shortString.decodeShortString(project.priority),
        project_type: project.project_type,
        updated_at: epocTime(project.deadline.toString()),
        project_owner: `0x0${project["project_owner"].toString(16)}`,
      });
    }
  }, [project]);
  if (project == undefined) {
    return <Loader />;
  }
  return (
    <section className="flex gap-2">
      <aside className="md:grid gap-3 flex flex-col w-full">
        <button
          className="bg-dark-gray-pop rounded-[8px] max-w-56 py-3 px-6 flex gap-1 items-center"
          onClick={handleBack}
          //   className="flex items-center gap-2 cursor-pointer text-gray-300 hover:text-white transition-colors"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          <span className="">Back to Groups</span>
        </button>
        {selectedProject && (
          <>
            <div className="md:grid flex flex-col gap-y-3 bg-dark-gray border border-dark-border-gray rounded-[8px] h-fit px-6 py-3 w-full">
              <div className="flex justify-between items-center capitalize">
                <div className="flex items-center gap-1 text-base">
                  <span className="rounded-full bg-blue-ball w-1 h-1" />
                  <h5>{project?.is_active ? "Available" : "audited"}</h5>
                </div>
              </div>
              <div className="pb-6 flex flex-wrap gap-y-3 md:gap-y-0 items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image src={avatar} alt="pririty type" />
                  <h3 className="text-18">{project?.name}</h3>
                </div>
                <div className="bg-dark-gray-pop rounded-[8px] max-w-56 py-3 px-6 flex gap-1 items-center">
                  <span className="text-gray-text border-r border-gray-text pr-2 text-sm">
                    Bounty amount
                  </span>
                  <span className="text-18">
                    ${selectedProject.bountyAmount}
                  </span>
                </div>
              </div>
              <div className=" border-b text-sm border-dark-border-gray flex items-center gap-1 pb-8">
                <span className="text-gray-text">Deadline:</span>
                <span className="bg-dark-gray-pop rounded-full px-3 py-1">
                  {project?.deadline}
                </span>
              </div>
              <div className="grid gap-3">
                <h3 className="text-gray-text text-base">Details</h3>
                <p className="text-sm">{project?.description}</p>
              </div>
              <div className="grid gap-3">
                <h3 className="text-gray-text">Links</h3>
                <div className="flex flex-wrap gap-3 items-center">
                  <Link
                    href={`${project?.repository_url}`}
                    target="_blank"
                    className="text-sm w-fit bg-dark-border-gray py-1 px-3 rounded-full flex items-center gap-2 border border-[#312F2F]"
                  >
                    <GithubIcon />
                    <span>GitHub Repo</span>
                    <ArrowGray />
                  </Link>
                  <Link
                    href={`${projectDetail?.smart_contract_address}`}
                    target="_blank"
                    className="w-fit bg-dark-border-gray py-1 px-3 rounded-full flex items-center gap-2 border border-[#312F2F]"
                  >
                    <FileCode className="text-gray-text w-5" />
                    <span>Contract Address</span>
                    <ArrowGray />
                  </Link>
                  <Link
                    href="#"
                    // target="_blank"
                    className="w-fit bg-dark-border-gray py-1 px-3 rounded-full flex items-center gap-2 border border-[#312F2F]"
                  >
                    <FileMinus className="text-gray-text w-5" />
                    <span>View Certificate</span>
                  </Link>
                </div>
              </div>

              <div className="grid gap-3">
                <h3 className="text-gray-text text-base">Rewards</h3>
                <p className="text-sm">
                  Rewards would be paid on successful completion by validator
                </p>
              </div>
            </div>
            {/* <ProjectReviewCard report={selectedProject} type="researcher" /> */}
            {/* <ProjectReviewCard report={selectedProject} type="validator" /> */}
          </>
        )}
      </aside>
    </section>
  );
}

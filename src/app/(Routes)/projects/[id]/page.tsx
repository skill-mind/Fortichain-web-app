"use client";
import { mockProjects } from "@/util/mock-data";
import { useEffect, useState } from "react";
import { Project as Data } from "@/util/types";
import { ArrowLeftIcon, BadgeCheck } from "lucide-react";
import { useAccount } from "@starknet-react/core";
import {
  epocTime,
  Project,
  useContractFetch,
  useResearchers,
  useValidators,
} from "@/hook/useBlockchain";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { FORTICHAINABI } from "@/contract/abi";
import { shortString } from "starknet";
import Loader from "@/app/loading";
import EditProjectModal from "@/components/modals/edit-project";
import Description from "../component/project-description";
import ResearcherReportEditor from "../component/resercher-report-editors";
import ViewReport from "../component/view-report";
import Chat from "../component/chat";
import { compareAddresses } from "@/util/helper";
import ValidatorReportModal from "@/components/modals/validator-report";

export default function Page() {
  const { address } = useAccount();
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [viewSection, setViewSection] = useState("none"); // none resercher-report, validator-report , view-report
  const [selectedProject] = useState<Data | null>(mockProjects[0]);
  const [reporterChecker, setReporterChecker] = useState(false);
  const [openValidatorRepor, setOpenValidatorRepor] = useState(false);
  const researchers = useResearchers();
  const [projectDetail, setProjectDetail] = useState<Project | null>();
  const platformValidators = useValidators();
  const [isValidator, setIsValidator] = useState(false);
  const { readData: project } = useContractFetch(
    FORTICHAINABI,
    "view_project",
    typeof id !== "undefined" ? [+id] : []
  );
  const handleBack = () => {
    router.back();
  };

  useEffect(() => {
    if (!platformValidators) return;
    const checker = platformValidators?.filter((data) =>
      compareAddresses(String(data?.validator_address), String(address))
    );
    if (checker.length > 0) {
      setIsValidator(true);
    }
  }, [platformValidators, address]);

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
        created_at: epocTime(project.created_at.toString()),
        deadline: epocTime(project.deadline.toString()),
        priority: shortString.decodeShortString(project.priority),
        project_type: project.project_type,
        updated_at: epocTime(project.deadline.toString()),
        project_owner: `0x0${project["project_owner"].toString(16)}`,
        amount: +project?.amount.toString(),
        validator_assigned: project.validator_assigned,
      });
    }
  }, [project]);

  useEffect(() => {
    if (!researchers) return;
    const checker = researchers?.filter((data) =>
      compareAddresses(String(data), String(address))
    );
    setReporterChecker(checker.length > 0);
  }, [researchers, address]);
  if (project == undefined) {
    return <Loader />;
  }
  function handler() {
    setIsOpen((prev) => !prev);
  }
  function viewHandler(section: string) {
    setViewSection(section);
  }
  function validatorHandler() {
    setOpenValidatorRepor((prev) => !prev);
  }
  return (
    <>
      {openValidatorRepor && (
        <ValidatorReportModal handler={validatorHandler} />
      )}
      {isOpen && (
        <EditProjectModal handler={handler} projectDetail={projectDetail} />
      )}
      <div className="md:grid gap-3 flex flex-col w-full">
        <button
          className="bg-dark-gray-pop rounded-[8px] max-w-56 py-3 px-6 flex gap-1 items-center"
          onClick={handleBack}
          //   className="flex items-center gap-2 cursor-pointer text-gray-300 hover:text-white transition-colors"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          <span className="">Back to Groups</span>
        </button>
        {selectedProject && (
          <Description
            projectOwner={project?.project_owner}
            projectDetail={projectDetail}
            editHandler={handler}
          />
        )}
        {reporterChecker && (
          <div className="flex flex-wrap gap-4 text-sm xl:grid xl:grid-cols-3">
            <div className="border border-dark-border-gray rounded-[8px] p-5 bg-dark-gray w-full">
              <div className="bg-dark-gray-bt rounded-[14px] flex items-center justify-between gap-5 py-3 px-6">
                <h3>Write Report</h3>
                <button
                  className="w-fit min-h-11 p-0.5 group             
                  hover:from-sky-blue-border hover:to-sky-blue-border
                  bg-gradient-to-r group to-[#312F2F] from-[#212121]
              rounded-full group"
                  type="button"
                  onClick={() => {
                    viewHandler("resercher-report");
                  }}
                >
                  <span
                    className="px-12 py-6
                      group-hover:from-sky-from group-hover:to-sky-to text-sm
                      group-hover:bg-gradient-to-r bg-[#1C1C1C]
                  flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full"
                  >
                    Start
                  </span>
                </button>
              </div>
            </div>
            <div className="border border-dark-border-gray rounded-[8px] p-5 bg-dark-gray w-full">
              <div className="bg-dark-gray-bt rounded-[14px] flex items-center justify-between gap-5 py-3 px-6">
                <h3>Discussions</h3>
                <button
                  className="w-fit min-h-11 p-0.5 group             
                  hover:from-sky-blue-border hover:to-sky-blue-border
                  bg-gradient-to-r group to-[#312F2F] from-[#212121]
              rounded-full group"
                  type="button"
                  onClick={() => {
                    viewHandler("chat-report");
                  }}
                >
                  <span
                    className="px-12 py-6
                      group-hover:from-sky-from group-hover:to-sky-to text-sm
                      group-hover:bg-gradient-to-r bg-[#1C1C1C]
                  flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full"
                  >
                    Chat with validator
                  </span>
                </button>
              </div>
            </div>
            <div className="border border-dark-border-gray rounded-[8px] p-5 bg-dark-gray w-full">
              <div className="bg-dark-gray-bt rounded-[14px] flex items-center justify-between gap-5 py-3 px-6">
                <h3>Edit Report</h3>
                <button
                  className="w-fit min-h-11 p-0.5 group             
                  hover:from-sky-blue-border hover:to-sky-blue-border
                  bg-gradient-to-r group to-[#312F2F] from-[#212121]
              rounded-full group"
                  onClick={() => {
                    viewHandler("view-report");
                  }}
                  type="button"
                >
                  <span
                    className="px-12 py-6
                      group-hover:from-sky-from group-hover:to-sky-to text-sm
                      group-hover:bg-gradient-to-r bg-[#1C1C1C]
                  flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full"
                  >
                    Edit
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
        {isValidator && (
          <div className="border border-dark-border-gray rounded-[8px] p-5 bg-dark-gray w-full">
            <div className="bg-dark-gray-bt rounded-[14px] flex items-center justify-between gap-5 py-3 px-6">
              <div>
                <h3>Validators Vote</h3>
                <h5 className="text-gray-text">
                  Click valid or invalid to vote on vulnerability
                </h5>
              </div>
              <div className="flex gap-2">
                <button className="px-10 py-3 bg-good-bg text-good rounded-full flex gap-2 items-center">
                  <BadgeCheck />
                  Valid Report
                </button>
                <button
                  onClick={validatorHandler}
                  className="px-10 py-3 bg-pririty-high-bg text-pririty-high-text rounded-full flex gap-2 items-center"
                >
                  <BadgeCheck />
                  Invalid Report
                </button>
              </div>
            </div>
          </div>
        )}
        {viewSection === "resercher-report" && <ResearcherReportEditor />}
        {viewSection === "view-report" && <ViewReport />}
        {viewSection === "chat-report" && <Chat />}
      </div>
    </>
  );
}

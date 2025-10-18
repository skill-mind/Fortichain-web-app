"use client";
import { useEffect, useState } from "react";
import { ArrowLeftIcon } from "lucide-react";
import { useAccount } from "@starknet-react/core";
import {
  epocTime,
  Project,
  useContractFetch,
  useReportsOnProject,
  useResearchers,
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
import ResearcherReportDetails from "../component/resercher-report-details";
import ValidatorReportEditor from "../component/validator-report-editor";
import { useFetchProjectDetails } from "@/hook/fetch-requests";
import ComingSoon from "@/components/coming-soon";

export default function Page() {
  const { address } = useAccount();
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [viewSection, setViewSection] = useState("none"); // none resercher-report, validator-report , view-report
  const [reporterChecker, setReporterChecker] = useState(false);
  const researchers = useResearchers();
  const [projectDetail, setProjectDetail] = useState<Project | null>();
  const reports = useReportsOnProject(id ? +id : 0);
  const { readData: project } = useContractFetch(
    FORTICHAINABI,
    "view_project",
    typeof id !== "undefined" ? [+id] : []
  );

  const handleBack = () => {
    router.back();
  };

  const data = useFetchProjectDetails(id ? +id : 0);
  const hasReport =
    data && address
      ? data?.data?.researcher_reports.some((data) =>
          compareAddresses(data.researcher_wallet_address, address)
        )
      : false;

  const hasVotes = (data?.data?.validation_votes?.length ?? 0) > 0;

  useEffect(() => {
    if (project) {
      setProjectDetail({
        validator_paid: project.validator_paid,
        researchers_paid: project.researchers_paid,
        repository_url: project.repository_url,
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

  if (data.loading) {
    return <Loader />;
  }
  return (
    <div className="grid gap-3">
      {isOpen && (
        <EditProjectModal handler={handler} projectDetail={projectDetail} />
      )}
      <div className="md:grid gap-3 flex flex-col w-full">
        <button
          className="bg-dark-gray-pop rounded-[8px] w-fit py-3 px-6 flex gap-1 items-center"
          onClick={handleBack}
          //   className="flex items-center gap-2 cursor-pointer text-gray-300 hover:text-white transition-colors"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          <span>Back</span>
        </button>
        {data?.data?.project && (
          <Description
            projectOwner={project?.project_owner}
            projectDetail={data?.data?.project}
            editHandler={handler}
            hasVote={hasVotes}
          />
        )}
      </div>
      {viewSection === "resercher-report" && (
        <ResearcherReportEditor setViewSection={setViewSection} />
      )}
      {reports && data?.data?.project && (
        <ResearcherReportDetails
          reports={reports}
          researchers={data?.data?.researcher_reports}
          validatedReport={data?.data?.validator_validations}
          votes={data?.data?.validation_votes}
          project={data?.data?.project}
        />
      )}
      {viewSection === "view-report" && <ComingSoon />}
      {viewSection === "chat-report" && <ComingSoon />}
      {data.data !== undefined && reporterChecker && (
        <div className="flex flex-wrap gap-4 text-sm  xl:flex-nowrap">
          {!hasReport && (
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
                    if (viewSection == "resercher-report") {
                      return viewHandler("none");
                    }
                    viewHandler("resercher-report");
                  }}
                >
                  <span
                    className="px-12 py-6
                    group-hover:from-sky-from group-hover:to-sky-to text-sm
                    group-hover:bg-gradient-to-r bg-[#1C1C1C]
                flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full"
                  >
                    {viewSection == "resercher-report" ? " close" : " Start"}
                  </span>
                </button>
              </div>
            </div>
          )}

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
                  if (viewSection === "chat-report") {
                    return viewHandler("none");
                  }
                  viewHandler("chat-report");
                }}
              >
                <span
                  className="px-12 py-6
                      group-hover:from-sky-from group-hover:to-sky-to text-sm
                      group-hover:bg-gradient-to-r bg-[#1C1C1C]
                  flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full"
                >
                  {viewSection === "chat-report"
                    ? " close"
                    : "  Chat with validator"}
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
                  if (viewSection === "chat-report") {
                    return viewHandler("none");
                  }
                  viewHandler("chat-report");
                }}
                type="button"
              >
                <span
                  className="px-12 py-6
                      group-hover:from-sky-from group-hover:to-sky-to text-sm
                      group-hover:bg-gradient-to-r bg-[#1C1C1C]
                  flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full"
                >
                  {viewSection === "chat-report" ? " close" : "  Edit"}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

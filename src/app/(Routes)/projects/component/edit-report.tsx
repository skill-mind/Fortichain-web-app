import { useEffect, useState } from "react";
import FileUploadComponent, { UploadedFile } from "./upload-file";
import { useAccount } from "@starknet-react/core";
import { useResearcherEditReports } from "@/hook/fetch-requests";
import { ResearcherReport } from "@/util/types";
import { compareAddresses, getTextFromTiptapJSON } from "@/util/helper";
import { TiptapEditRenderer } from "@/components/editor/editor-render";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";

export type ViewSection = (viewSection: string) => void;
export default function ResearcherReportEditEditor({
  setViewSection,
  researchers,
}: {
  setViewSection: ViewSection;
  researchers: ResearcherReport[];
}) {
  const { account, address } = useAccount();
  const reportInfo = researchers.find((report) =>
    compareAddresses(report.researcher_wallet_address, address ?? "")
  );
  const [reportDetails, setReportDetails] = useState({
    title: reportInfo?.title ?? "",
    severity_level: reportInfo?.severity ?? "",
  });
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const [editorContent, setEditorContent] = useState({
    description: reportInfo?.description
      ? JSON.parse(reportInfo.description)
      : { type: "doc", content: [{ type: "paragraph" }] },
    potential_risk: reportInfo?.potential_risk
      ? JSON.parse(reportInfo.potential_risk)
      : { type: "doc", content: [{ type: "paragraph" }] },
    recommendation: reportInfo?.recommendation
      ? JSON.parse(reportInfo.recommendation)
      : { type: "doc", content: [{ type: "paragraph" }] },
  });
  const {
    createReport: editReport,
    isLoading,
    data,
  } = useResearcherEditReports();

  useEffect(() => {
    //@ts-expect-errorno property exist,
    if (data?.status === "success") {
      setViewSection("");
      toast.success("report edited successful");
    }
  }, [data]);
  function handleSubmit() {
    const desc = getTextFromTiptapJSON(editorContent.description)?.length;
    const risk = getTextFromTiptapJSON(editorContent.potential_risk)?.length;
    const recommend = getTextFromTiptapJSON(
      editorContent.recommendation
    )?.length;

    if (desc < 50) {
      toast.error("description is less than 50 character");
      return;
    }
    if (risk < 50) {
      toast.error("risk is less than 50 character");
      return;
    }
    if (recommend < 50) {
      toast.error("recommendation is less than 50 character");
      return;
    }
    if (!reportInfo?.id) return;
    console.log(reportDetails.severity_level);
    const data = {
      project_id: reportInfo?.id ? reportInfo?.id : "",
      title: reportDetails.title,
      severity: reportDetails.severity_level,
      category: "",
      potential_risk: JSON.stringify(editorContent.potential_risk),
      recommendation: JSON.stringify(editorContent.recommendation),
      description: JSON.stringify(editorContent.description),
      wallet_address: "",
    };
    editReport(data);
  }

  const handleFilesChange = (files: UploadedFile[]) => {
    setUploadedFiles(files);
  };
  //@ts-expect-errorno data type,
  const updateEditorContent = (field: string, content) => {
    setEditorContent((prev) => ({ ...prev, [field]: content }));
  };

  return (
    <section className="bg-dark-gray border border-dark-border-gray rounded-[8px] p-3 flex flex-col md:grid gap-5">
      <div className="border-b border-dark-border-gray pb-5 pt-3">
        <h2 className="text-xl">
          Fortichain Security Vulnerability Edit Report
        </h2>
        <h4 className="text-gray-text text-base">
          Submit your security findings and vulnerability reports
        </h4>
      </div>
      <div className="bg-dark-gray-pop rounded-[8px] w-fit p-3 flex gap-1 items-center">
        <span className="text-gray-text border-r border-gray-text pr-2 text-sm">
          Section 1
        </span>
        <span className="text-base">Description</span>
      </div>
      <div className="flex flex-col items-start md:grid md:grid-cols-[2fr_1fr_1fr] sm:items-center gap-2">
        <div className="flex pl-5 w-full items-center border border-dark-border-gray rounded-full">
          <Input
            onChange={(data) => {
              const value = data.target.value;
              setReportDetails((prev) => {
                return { ...prev, title: value };
              });
            }}
            value={
              reportDetails.title ? reportDetails.title : reportInfo?.title
            }
            type="text"
            className="p-6 pl-0"
            placeholder="Enter title"
          />
        </div>
        <div className="border-dark-border-gray border rounded-full py-2 w-full">
          <Select
            onValueChange={(data) => {
              setReportDetails((prev) => {
                return { ...prev, severity_level: data };
              });
            }}
            value={
              reportDetails.severity_level
                ? reportDetails.severity_level
                : reportInfo?.severity
            }
            defaultValue={reportDetails.severity_level}
          >
            <SelectTrigger className="rounded-full w-full border-none pl-7">
              <SelectValue placeholder="Select severity level" />
            </SelectTrigger>
            <SelectContent className="bg-main-bg text-white-text">
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {reportInfo && (
        <>
          <div className="border border-dark-border-gray rounded-[4px] min-h-[400px]">
            <TiptapEditRenderer
              content={JSON.stringify(editorContent.description)}
              onUpdate={(content) =>
                updateEditorContent("description", content)
              }
            />
          </div>
          <div className="bg-dark-gray-pop rounded-[8px] w-fit p-3 flex gap-1 items-center">
            <span className="text-gray-text border-r border-gray-text pr-2 text-sm">
              Section 2
            </span>
            <span className="text-base">Potential Risk</span>
          </div>
          <div className="border border-dark-border-gray rounded-[4px] min-h-[400px]">
            <TiptapEditRenderer
              content={JSON.stringify(editorContent.potential_risk)}
              onUpdate={(content) =>
                updateEditorContent("potential_risk", content)
              }
            />
          </div>
          <div className="bg-dark-gray-pop rounded-[8px] w-fit p-3 flex gap-1 items-center">
            <span className="text-gray-text border-r border-gray-text pr-2 text-sm">
              Section 3
            </span>
            <span className="text-base">Recommendation</span>
          </div>
          <div className="border border-dark-border-gray rounded-[4px] min-h-[400px]">
            <TiptapEditRenderer
              content={JSON.stringify(editorContent.recommendation)}
              onUpdate={(content) =>
                updateEditorContent("recommendation", content)
              }
            />
          </div>
        </>
      )}
      <button
        className="hover:bg-dark-gray w-fit min-h-50 p-0.5 group from-sky-blue-border to-sky-blue-border bg-gradient-to-r group text-base rounded-full"
        onClick={handleSubmit}
      >
        <span className="px-6 py-3 from-sky-from to-sky-to bg-gradient-to-r flex items-center gap-2.5 p-2 justify-center cursor-pointer rounded-full h-full w-full">
          {isLoading ? "sending report ...." : "Submit Report"}
        </span>
      </button>
    </section>
  );
}

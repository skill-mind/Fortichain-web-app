import { useState } from "react";
import FileUploadComponent, { UploadedFile } from "./upload-file";
import { useParams } from "next/navigation";
import { useAccount } from "@starknet-react/core";
import { useResearcherReports } from "@/hook/fetch-requests";
import { ResearcherReport } from "@/util/types";
import { compareAddresses } from "@/util/helper";
import { TiptapEditRenderer } from "@/components/editor/editor-render";
import { useEffect } from "react";

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { id } = useParams();
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

  console.log(editorContent, "editor");
  function handleSubmit() {
    if (!id) return;
    const parsedId =
      typeof id === "string"
        ? parseInt(id, 10)
        : Array.isArray(id) && id.length > 0
        ? parseInt(id[0], 10)
        : NaN;

    const data = {
      id: parsedId,
      potential_risk: JSON.stringify(editorContent.potential_risk),
      recommendation: JSON.stringify(editorContent.recommendation),
      description: JSON.stringify(editorContent.description),
    };
    // writeReport(
    //   account,
    //   data,
    //   address??"",
    //   setIsSubmitting,
    //   setViewSection,
    //   createReport
    // );
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
      <div className="bg-dark-gray-pop rounded-[8px] w-fit p-3 flex gap-1 items-center">
        <span className="text-gray-text border-r border-gray-text pr-2 text-sm">
          Section 1
        </span>
        <span className="text-base">Description</span>
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
          {isSubmitting ? "sending report ...." : "Submit Report"}
        </span>
      </button>
    </section>
  );
}

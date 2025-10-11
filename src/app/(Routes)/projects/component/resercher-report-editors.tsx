import { Editor } from "@/components/editor/editor";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useRef } from "react";
import FileUploadComponent, { UploadedFile } from "./upload-file";
import { useParams } from "next/navigation";
import { writeReport } from "@/hook/blockchainWriteFunction";
import { useAccount } from "@starknet-react/core";

export default function ResearcherReportEditor() {
  const { account, address } = useAccount();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reportDetails, setReportDetails] = useState({
    title: "",
    severity_level: "",
    category: "",
  });
  const { id } = useParams();
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const issueDescriptionRef = useRef<HTMLDivElement>(null);
  const potentialRiskRef = useRef<HTMLDivElement>(null);
  const recommendationRef = useRef<HTMLDivElement>(null);

  function handleSubmit() {
    // console.log({
    //   // @ts-expect-error parmas can be undefined
    //   recommendationRef: recommendationRef.current?.getText(),
    //   potentialRiskRef: potentialRiskRef.current?.getText(),
    //   issueDescriptionRef: issueDescriptionRef.current?.getText(),
    // });
    // console.log(reportDetails);
    if (!id) return;
    const data = {
      id: id,
      title: reportDetails.title,
      severity_level: reportDetails.severity_level,
      category: reportDetails.category,
      //@ts-expect-error parmas can be undefined getText(),
      potential_risk: potentialRiskRef.current?.getJSON(),
      //@ts-expect-error parmas can be undefined
      recommendation: recommendationRef.current?.getJSON(),
      //@ts-expect-error parmas can be undefined
      description: issueDescriptionRef.current?.getJSON(),
    };
    console.log(data);
    if (!id) return;
    writeReport(
      account,
      //@ts-expect-error parmas can be undefined
      data,
      address,
      setIsSubmitting
      // recommendationRef.current?.getText(),
      // potentialRiskRef.current?.getText(),
      // issueDescriptionRef.current?.getHTML()
    );
  }
  const handleFilesChange = (files: UploadedFile[]) => {
    setUploadedFiles(files);
    console.log("Files updated:", files);
  };

  return (
    <section className="bg-dark-gray border border-dark-border-gray rounded-[8px] p-3 flex flex-col md:grid gap-5">
      <div className="border-b border-dark-border-gray pb-5 pt-3">
        <h2 className="text-xl">Fortichain Security Vulnerability Report</h2>
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
          >
            <SelectTrigger className="rounded-full w-full border-none pl-7">
              <SelectValue placeholder="Select severity level" />
            </SelectTrigger>
            <SelectContent className="bg-main-bg text-white-text">
              <SelectItem value="ALL">ALL</SelectItem>
              <SelectItem value="Re-entrancy">Re-entrancy</SelectItem>
              <SelectItem value="Access-Control">Access Control</SelectItem>
              <SelectItem value="Logic-Error">Logic Error</SelectItem>
              <SelectItem value="Gas-Optimization">Gas Optimization</SelectItem>
              <SelectItem value="Best-Practice">Best Practice</SelectItem>
              <SelectItem value="Others">Others</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="border-dark-border-gray border rounded-full py-2 w-full">
          <Select
            onValueChange={(data) => {
              setReportDetails((prev) => {
                return { ...prev, category: data };
              });
            }}
          >
            <SelectTrigger className="rounded-full w-full border-none pl-7">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent className="bg-main-bg text-white-text">
              <SelectItem value="ALL">ALL</SelectItem>
              <SelectItem value="High">High</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="border border-dark-border-gray rounded-[4px] min-h-[400px]">
        <Editor ref={issueDescriptionRef} />
      </div>
      <div className="bg-dark-gray-pop rounded-[8px] w-fit p-3 flex gap-1 items-center">
        <span className="text-gray-text border-r border-gray-text pr-2 text-sm">
          Section 2
        </span>
        <span className="text-base">Potential Risk</span>
      </div>
      <div className="border border-dark-border-gray rounded-[4px] min-h-[400px]">
        <Editor ref={potentialRiskRef} />
      </div>
      <div className="bg-dark-gray-pop rounded-[8px] w-fit p-3 flex gap-1 items-center">
        <span className="text-gray-text border-r border-gray-text pr-2 text-sm">
          Section 3
        </span>
        <span className="text-base">Recommendation</span>
      </div>
      <div className="border border-dark-border-gray rounded-[4px] min-h-[400px]">
        <Editor ref={recommendationRef} />
      </div>
      <div className="bg-dark-gray-pop rounded-[8px] w-fit p-3 flex gap-1 items-center">
        <span className="text-gray-text border-r border-gray-text pr-2 text-sm">
          Section 4
        </span>
        <span className="text-base">Attachments</span>
      </div>
      <div>
        <h3 className="text-gray-text mb-4 text-sm">
          Upload vulnerability assessments, pen test results, and compliance
          reports
        </h3>
        <FileUploadComponent
          onFilesChange={handleFilesChange}
          maxFileSize={10}
          maxFiles={5}
        />
      </div>
      <button
        className="hover:bg-dark-gray w-fit min-h-50 p-0.5 group             
    from-sky-blue-border to-sky-blue-border
      bg-gradient-to-r group text-base
  rounded-full group"
        onClick={handleSubmit}
      >
        <span
          className="px-6 py-3
          from-sky-from to-sky-to
          bg-gradient-to-r 
      flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-full w-full"
        >
          {isSubmitting ? "sending report ...." : "Submit Report"}
        </span>
      </button>
    </section>
  );
}

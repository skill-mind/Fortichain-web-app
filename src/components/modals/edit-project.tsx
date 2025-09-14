"use client";
import { X } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useAccount } from "@starknet-react/core";
import toast from "react-hot-toast";
import { EditProjectHandle } from "@/hook/blockchainWriteFunction";
import { Project } from "@/hook/useBlockchain";
import SuccessModal from "./succesful-upload-project-model";

export type EditProjectProps = {
  description: string;
  projectId: string;
  repoUrl: string;
};

export default function EditProjectModal({
  handler,
  projectDetail,
}: {
  handler: () => void;
  projectDetail: Project | undefined | null;
}) {
  const { account } = useAccount();
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<EditProjectProps>({
    description: projectDetail?.description ?? "",
    repoUrl: projectDetail?.repository_url ?? "",
    projectId: `${projectDetail?.id}`,
  });
  const handleSubmit = async () => {
    if (!account) {
      return toast.error("Connect Wallet to continue");
    }
    EditProjectHandle(
      account,
      setIsSubmitting,
      formData,
      setIsOpen,
      handler,
      setIsError
    );
  };
  return (
    <>
      {isSubmitting && (
        <SuccessModal
          handler={handler}
          isSubmitting={isSubmitting}
          isError={isError}
          setIsError={setIsError}
        />
      )}
      <div
        className="bg-main-bg/75 fixed top-0 h-screen w-full"
        onClick={handler}
      ></div>
      <form className="p-6 max-w-[700px] w-full bg-dark-gray rounded-[8px] mx-auto grid gap-5 fixed top-50 sm:top-40 left-1/2 -translate-x-[50%]">
        <div className="flex justify-between">
          <h3>Edit Project Details</h3>
          <button
            type="button"
            onClick={handler}
            className="bg-dark-gray-pop p-1.5 rounded-full"
          >
            <X />
          </button>
        </div>
        <div className="grid gap-3">
          <h2 className="text-18">Detailed Reason</h2>
          <Textarea
            maxLength={1000}
            required
            value={formData.description}
            onChange={(data) => {
              const value = data.target.value;
              setFormData((userData: EditProjectProps) => {
                return {
                  ...userData,
                  description: value,
                };
              });
            }}
            className="border-dark-border-gray min-h-72 py-3 px-6"
            placeholder="enter reason for suspension..."
          />
          <div className="w-full grid gap-2 ">
            <label htmlFor="">Repository URL</label>
            <Input
              required
              value={formData.repoUrl}
              placeholder="Repository URL"
              className="border border-dark-border-gray rounded-full h-14 pl-7 outline:border-blue-ball"
              onChange={(data) => {
                const value = data.target.value;
                setFormData((userData: EditProjectProps) => {
                  return {
                    ...userData,
                    repoUrl: value,
                  };
                });
              }}
            />
          </div>
        </div>
        <div>
          <div className="flex sm:flex-row flex-col justify-between items-center gap-6 my-2">
            <button
              onClick={handler}
              className="w-full min-h-50 p-0.5 group             
              hover:from-sky-blue-border hover:to-sky-blue-border
              bg-gradient-to-r group to-[#312F2F] from-[#212121]
          rounded-full group"
              type="button"
            >
              <span
                className="px-6 py-3
                  group-hover:from-sky-from group-hover:to-sky-to
                  group-hover:bg-gradient-to-r bg-[#1C1C1C]
              flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-full w-full"
              >
                Cancle
              </span>
            </button>

            <button
              className="w-full min-h-50 p-0.5 group             
              from-sky-blue-border to-sky-blue-border
              bg-gradient-to-r group hover:to-[#312F2F] hover:from-[#212121]
          rounded-full group"
              onClick={handleSubmit}
              type="button"
            >
              <span
                className="px-6 py-3
                  from-sky-from to-sky-to
                   bg-gradient-to-r group-hover:bg-[#1C1C1C]
              flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-full w-full"
              >
                {isSubmitting ? "submitting...." : " Edit"}
              </span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

import { X } from "lucide-react";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function SuspensionModal({ handler }: { handler: () => void }) {
  return (
    <>
      <div
        className="bg-main-bg/75 fixed top-0 h-screen w-full"
        onClick={handler}
      ></div>
      <div className="p-6 max-w-[700px] w-full bg-dark-gray rounded-[8px] mx-auto grid gap-5 fixed top-50 sm:top-40 left-1/2 -translate-x-[50%]">
        <div className="flex justify-between">
          <h3>Suspend User</h3>
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
            className="border-dark-border-gray min-h-72 py-3 px-6"
            placeholder="enter reason for suspension..."
          />
          <div className="border-dark-border-gray border rounded-full py-2">
            <Select>
              <SelectTrigger className="rounded-full w-full border-none pl-7">
                <SelectValue placeholder="Select severity level" />
              </SelectTrigger>
              <SelectContent className="bg-main-bg text-white-text">
                <SelectItem value="All">All Status</SelectItem>
                <SelectItem value="Re-entrancy">
                  Fraudulent Activities
                </SelectItem>
                <SelectItem value="Access-Control">Spam</SelectItem>
                <SelectItem value="Logic-Error">
                  Violation of Terms & Condition
                </SelectItem>
                <SelectItem value="Gas-Optimization">
                  Breach of User Agreement
                </SelectItem>
                <SelectItem value="Best-Practice">
                  Non-compliance with Platform Policies
                </SelectItem>
                <SelectItem value="Others">
                  Infringement of Service Terms
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <div className="flex sm:flex-row flex-col justify-between items-center gap-6 my-2">
            <button
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
                Back
              </span>
            </button>

            <button
              className="w-full min-h-50 p-0.5 group             
              from-sky-blue-border to-sky-blue-border
              bg-gradient-to-r group hover:to-[#312F2F] hover:from-[#212121]
          rounded-full group"
              type="button"
            >
              <span
                className="px-6 py-3
                  from-sky-from to-sky-to
                   bg-gradient-to-r group-hover:bg-[#1C1C1C]
              flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-full w-full"
              >
                Suspend User
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

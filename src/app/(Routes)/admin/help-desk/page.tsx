"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import HelpCard from "./component/card";
import HelpReportCard from "./component/report-card";
import { useState } from "react";
import { X } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export default function HelpCenter() {
  const [isOpen, setIsOpen] = useState(true);
  function handler() {
    setIsOpen((prev) => !prev);
  }
  return (
    <section className="grid gap-5">
      <HelpCard />
      <div className="h-11 border-dark-border-gray border rounded-full py-1 md:max-w-[450px] ">
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
      <div className="grid xl:grid-cols-[1.5fr_2.5fr] gap-2.5 items-start">
        <div className="grid gap-2">
          <HelpReportCard />
          <HelpReportCard />
        </div>
        <aside
          className={`border p-6 border-dark-border-gray rounded-[8px] ${
            !isOpen ? "text-center place-content-center" : ""
          } `}
        >
          {!isOpen && (
            <h2 className="text-2xl text-gray-text">
              Select a ticket to view details and respond
            </h2>
          )}
          {isOpen && (
            <div className="grid gap-2">
              <div className="flex justify-between">
                <span className="rounded-full py-1.5 px-3 bg-pririty-high-bg text-pririty-high-text w-fit">
                  Open
                </span>
                <button
                  type="button"
                  onClick={handler}
                  className="bg-dark-gray-pop p-1.5 rounded-full"
                >
                  <X />
                </button>
              </div>
              <div className="grid gap-4 mt-4">
                <h3>Unable to upload project files to the platform</h3>
                <div className="flex items-center my-3 flex-wrap gap-5 border-b border-dark-border-gray pb-6">
                  <div className="flex items-center gap-1">
                    <span className="text-gray-text base">Name</span>
                    <span className="text-12 bg-dark-gray-pop rounded-full px-3 py-1">
                      Ebube One
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-text base">Email Address</span>
                    <span className="text-12 bg-dark-gray-pop rounded-full px-3 py-1">
                      ebube@gmail.com
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <h3 className="text-base text-gray-text">Compliant</h3>
                <p className="text-sm">
                  I&apos;m super frustrated because I can&apos;t upload my
                  project files to the platform at all. This has been going on
                  for about a week now—I&apos;ve tried uploading PDFs, images,
                  docs, you name it, but it either throws an error or just
                  doesn&apos;t go through. Switched browsers, cleared cache,
                  checked my internet... nothing helps. It&apos;s messing up my
                  deadlines and wasting my time big time. I pay for this service
                  [or use it regularly], so I&apos;d expect basic stuff like
                  uploads to actually work. Please check this out right away and
                  let me know how to fix it or if there&apos;s a quick
                  workaround. Would appreciate some kind of heads-up on when
                  it&apos;ll be sorted. Thanks,
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-base text-gray-text">Response</h3>
                <Textarea
                  className="border border-dark-border-gray rounded-[8px] min-h-[185px] px-6 py-3"
                  placeholder="Type your response..."
                />
              </div>
              <button
                className="max-w-80 py-0.5 mt-3 min-h-11 group             
          hover:from-sky-blue-border hover:to-sky-blue-border
          bg-gradient-to-r group to-[#312F2F] from-[#212121]
      rounded-full group my-auto"
                type="button"
                onClick={handler}
              >
                <span
                  className="px-6 py-3 h-14 text-sm
              group-hover:from-sky-from group-hover:to-sky-to
              group-hover:bg-gradient-to-r bg-[#1C1C1C]
          flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full  w-full"
                >
                  Send Response
                </span>
              </button>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}

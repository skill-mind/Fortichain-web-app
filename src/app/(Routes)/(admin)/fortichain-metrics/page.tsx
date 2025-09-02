"use client";
import { useState } from "react";
import MetricsCard from "../admin/component/metrics-card";
import { ReportHistoryChart } from "../../(owner)/overview/component/chart";
import { Github } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Metrics() {
  const [type, setType] = useState("owner");
  return (
    <section className="flex flex-col gap-7">
      <div className="flex flex-wrap justify-between  md:grid md:grid-cols-2 xl:grid-cols-4 gap-3 xl:h-48 ">
        <MetricsCard
          value="$700K"
          title="Total Revenue 
Generated"
          metric="+12% from last month"
          icon="folder"
        />
        <MetricsCard
          value="94.2%"
          title="Average Project
Success Rate"
          metric="+8% from last month"
          icon="file"
        />
        <MetricsCard
          value="87.5%"
          title="User Retention
Rate"
          metric="+5.4% from yesterday"
          icon="token"
        />
        <MetricsCard
          value="23.8%"
          title="Platform Growth
Rate"
          metric="+5.4% from yesterday"
          icon="token"
        />
      </div>

      <div className="bg-dark-gray rounded-full p-1 w-fit text-base hidden md:block">
        <button
          onClick={() => {
            setType("owner");
          }}
          className={`${
            type === "owner"
              ? " bg-dark-gray-pop border border-dark-gray-border"
              : ""
          } py-2 px-[18px] rounded-full `}
        >
          Project Owners Analytics
        </button>
        <button
          onClick={() => {
            setType("researcher");
          }}
          className={`${
            type === "researcher"
              ? " bg-dark-gray-pop border border-dark-gray-border"
              : ""
          } py-2 px-[18px] rounded-full `}
        >
          Researchers Analytics
        </button>
        <button
          onClick={() => {
            setType("validator");
          }}
          className={`${
            type === "validator"
              ? " bg-dark-gray-pop border border-dark-gray-border"
              : ""
          } py-2 px-[18px] rounded-full `}
        >
          Validators Analytics
        </button>
      </div>
      <div className="border-dark-border-gray max-w-[400px] md:hidden border rounded-full py-2">
        <Select>
          <SelectTrigger className="rounded-full w-full border-none pl-7">
            <SelectValue placeholder="Select severity level" />
          </SelectTrigger>
          <SelectContent className="bg-main-bg text-white-text">
            <SelectItem value="h">Project Owners Analytics</SelectItem>
            <SelectItem value="Re-entrancy">Researchers Analytics</SelectItem>
            <SelectItem value="Access-Control">Validators Analytics</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="gap-3 flex flex-col md:grid  md:grid-cols-2">
        <div className="h-full flex-col flex gap-2 ">
          <div className="flex flex-col md:grid grid-cols-2 gap-2 w-full h-full">
            <div className="rounded-[8px] w-full bg-dark-gray border border-dark-border-gray p-6 flex items-center gap-7 justify-between">
              <div className="grid gap-2 w-4/5">
                <h2 className="text-sm pb-3 text-gray-text border-b border-dark-border-gray">
                  Total Projects Submitted
                </h2>
                <span className="text-18">45</span>
              </div>
              <div className="bg-pririty-low-bg rounded-full p-1.5 w-fit">
                <Github className="text-blue-ball" />
              </div>
            </div>
            <div className="rounded-[8px] bg-dark-gray border border-dark-border-gray p-6 flex items-center gap-7 justify-between">
              <div className="grid gap-2 w-4/5">
                <h2 className="text-sm pb-3 text-gray-text border-b border-dark-border-gray">
                  Average Rating Given
                </h2>
                <span className="text-18">7/10</span>
              </div>
              <div className="bg-pririty-low-bg rounded-full p-1.5 w-fit">
                <Github className="text-blue-ball" />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:grid grid-cols-2 gap-2 h-full">
            <div className="rounded-[8px] bg-dark-gray border border-dark-border-gray p-6 flex items-center gap-7 justify-between">
              <div className="grid gap-2 w-4/5">
                <h2 className="text-sm pb-3 text-gray-text border-b border-dark-border-gray">
                  Returning Workers
                </h2>
                <span className="text-18">67%</span>
              </div>
              <div className="bg-pririty-low-bg rounded-full p-1.5 w-fit">
                <Github className="text-blue-ball" />
              </div>
            </div>
            <div className="rounded-[8px] bg-dark-gray border border-dark-border-gray p-6 flex items-center gap-7 justify-between">
              <div className="grid gap-2 w-4/5">
                <h2 className="text-sm pb-3 text-gray-text border-b border-dark-border-gray">
                  Average Project Value
                </h2>
                <span className="text-18">$2,850</span>
              </div>
              <div className="bg-pririty-low-bg rounded-full p-1.5 w-fit">
                <Github className="text-blue-ball" />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:grid grid-cols-2 gap-2 h-full">
            <div className="rounded-[8px] bg-dark-gray border border-dark-border-gray p-6 flex items-center gap-7 justify-between">
              <div className="grid gap-2 w-4/5">
                <h2 className="text-sm pb-3 text-gray-text border-b border-dark-border-gray">
                  Monthly Active Users
                </h2>
                <span className="text-18">73</span>
              </div>
              <div className="bg-pririty-low-bg rounded-full p-1.5 w-fit">
                <Github className="text-blue-ball" />
              </div>
            </div>
            <div className="rounded-[8px] bg-dark-gray border border-dark-border-gray p-6 flex items-center gap-7 justify-between">
              <div className="grid gap-2 w-4/5">
                <h2 className="text-sm pb-3 text-gray-text border-b border-dark-border-gray">
                  Platform Uptime
                </h2>
                <span className="text-18">90%</span>
              </div>
              <div className="bg-pririty-low-bg rounded-full p-1.5 w-fit">
                <Github className="text-blue-ball" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-dark-gray rounded-[8px] w-ful">
          <h3 className="text-18 p-6"> Report History</h3>
          <ReportHistoryChart />
        </div>
      </div>
    </section>
  );
}

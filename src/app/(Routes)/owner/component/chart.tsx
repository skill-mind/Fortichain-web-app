"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";

// Mock data matching the chart in the image
const reportData = [
  { month: "Jan", projects: 1 },
  { month: "Feb", projects: 2.5 },
  { month: "Mar", projects: 1 },
  { month: "Apr", projects: 0 },
  { month: "May", projects: 2 },
  { month: "Jun", projects: 2.5 },
];

const chartConfig = {
  reports: {
    label: "Projectss",
    color: "hsl(var(--chart-1))",
  },
};

import type { TooltipProps } from "recharts";
import { useEffect, useState } from "react";
import { MonthCount, MonthData, useAllProjects } from "@/hook/useBlockchain";
import { useAccount } from "@starknet-react/core";
import { compareAddresses } from "@/util/helper";

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-dark-border-gray border-dark-gray-border p-2 shadow-sm">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col">
            <span className="text-[0.70rem] uppercase">Month</span>
            <span className="font-bold ">{label}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[0.70rem] uppercase">Reports</span>
            <span
              className="font-bold"
              style={{ color: "hsl(var(--chart-1))" }}
            >
              {payload[0].value}
            </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export function ReportHistoryChart() {
  const projects = useAllProjects();
  const { address } = useAccount();
  const [monthCounts, setMonthCounts] = useState<MonthData[]>([]);
  useEffect(() => {
    if (!address || !projects) return;

    const counts: Record<string, MonthCount> = {};

    projects
      .filter((project) => {
        const ownerAddress =
          typeof project.project_owner === "string"
            ? project.project_owner
            : project.project_owner.toString(16);

        return compareAddresses(ownerAddress, address);
      })
      .forEach((project) => {
        const timestamp = parseInt(project.created_at);
        const date = new Date(timestamp);
        console.log(date);
        const monthOnly = date.toLocaleDateString("en-US", { month: "short" });
        console.log({
          d: +date,
          monthOnly,
          at: project.created_at,
        });

        if (!counts[monthOnly]) {
          counts[monthOnly] = {
            month: monthOnly,
            projects: 0,
            timestamp: date.getMonth(),
          };
        }
        counts[monthOnly].projects += 1;
      });

    const dataArray: MonthData[] = Object.values(counts)
      .sort((a, b) => a.timestamp - b.timestamp)
      .map(({ month, projects }) => ({ month, projects }));

    setMonthCounts(dataArray);
  }, [projects, address]);

  if (monthCounts.length === 0) {
    return (
      <div className="p-8 text-center text-2xl">
        <h2>No project upload for Audit yet</h2>
      </div>
    );
  }
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[400px] w-full text-white-text p-0 m-0"
    >
      <ResponsiveContainer className="p-0 m-0" width="100%" height="100%">
        <BarChart
          data={monthCounts}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 20,
          }}
          barCategoryGap="20%"
        >
          <XAxis
            dataKey="month"
            axisLine={true}
            tickLine={true}
            tick={{ fontSize: 14 }}
          />
          <YAxis
            axisLine={true}
            tickLine={true}
            tick={{ color: "#E2E2E2", fontSize: 14 }}
            domain={[0, 6]}
            ticks={[0, 1, 2, 3, 4, 5, 6]}
          />
          <ChartTooltip
            content={<CustomTooltip />}
            cursor={{ fill: "#1C1C1C", opacity: 0.1 }}
          />
          <Bar
            dataKey="projects"
            fill="#0073E6"
            radius={[4, 4, 0, 0]}
            maxBarSize={60}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

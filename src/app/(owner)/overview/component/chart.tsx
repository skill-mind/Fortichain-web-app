"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";

// Mock data matching the chart in the image
const reportData = [
  { month: "Jan", reports: 1 },
  { month: "Feb", reports: 2.5 },
  { month: "Mar", reports: 1 },
  { month: "Apr", reports: 0 },
  { month: "May", reports: 2 },
  { month: "Jun", reports: 2.5 },
];

const chartConfig = {
  reports: {
    label: "Reports",
    color: "hsl(var(--chart-1))",
  },
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-dark-border-gray border-dark-gray-border p-2 shadow-sm">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col">
            <span className="text-[0.70rem] uppercase">
              Month
            </span>
            <span className="font-bold ">{label}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[0.70rem] uppercase">
              Reports
            </span>
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
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[400px] w-full text-white-text p-0 m-0"
    >
      <ResponsiveContainer className="p-0 m-0" width="100%" height="100%">
        <BarChart
          data={reportData}
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
            cursor={{ fill: "hsl(var(--muted))", opacity: 0.1 }}
          />
          <Bar
            dataKey="reports"
            fill="#0073E6"
            radius={[4, 4, 0, 0]}
            maxBarSize={60}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

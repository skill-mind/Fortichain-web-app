"use client";

import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ChartTooltip } from "@/components/ui/chart";

const data = [
  { month: "Jan", projectOwners: 15, researchers: 25, validators: 20 },
  { month: "Feb", projectOwners: 18, researchers: 28, validators: 25 },
  { month: "Mar", projectOwners: 22, researchers: 35, validators: 30 },
  { month: "Apr", projectOwners: 35, researchers: 66, validators: 43 },
  { month: "May", projectOwners: 28, researchers: 45, validators: 38 },
  { month: "Jun", projectOwners: 32, researchers: 58, validators: 48 },
];

export function UserGrowthChart() {
  return (
    <ResponsiveContainer>
      <BarChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
        {/* <CartesianGrid
          strokeDasharray="3 3"
          stroke="hsl(var(--muted-foreground))"
          opacity={0.3}
        /> */}
        <XAxis
          dataKey="month"
          axisLine={true}
          tickLine={true}
          tick={{ fontSize: 18 }}
        />
        <YAxis tick={{ fill: "#6C6C6C", fontSize: 18 }} />
        <ChartTooltip
          cursor={{ fill: "#1C1C1C" }}
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className="bg-dark-gray border border-dark-border-gray rounded-lg p-3 shadow-lg">
                  <p className="text-sm font-medium mb-2">{label}</p>
                  {payload.map((entry, index) => (
                    <p
                      key={index}
                      className="text-sm"
                      style={{ color: entry.color }}
                    >
                      {entry.dataKey === "projectOwners"
                        ? "Project Owners"
                        : entry.dataKey === "researchers"
                        ? "Researchers"
                        : "Validators"}
                      : {entry.value}
                    </p>
                  ))}
                </div>
              );
            }
            return null;
          }}
        />
        <Bar
          dataKey="projectOwners"
          fill="#0073E6"
          radius={[6, 6, 0, 0]}
          widths={"20%"}
        />
        <Bar dataKey="researchers" fill="#00E6B0" radius={[6, 6, 0, 0]} />
        <Bar dataKey="validators" fill="#00C0E6" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

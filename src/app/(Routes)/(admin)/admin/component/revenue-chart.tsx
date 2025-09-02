"use client";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function RevenueData() {
  const revenueData = [
    { name: "Jan", revenue: 0 },
    { name: "Feb", revenue: 28 }, // Approximated to match visual slope
    { name: "Mar", revenue: 55 },
    { name: "Apr", revenue: 53 },
    { name: "May", revenue: null },
    { name: "Jun", revenue: null },
  ];

  return (
    <ResponsiveContainer className="h-full">
      <LineChart
        data={revenueData}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.3} />
        <XAxis
          dataKey="name"
          stroke="#fff"
          tick={{ fill: "#6C6C6C", fontSize: 18 }}
        />
        <YAxis
          domain={[0, 100]}
          stroke="#fff"
          tick={{ fill: "#6C6C6C", fontSize: 18 }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#000",
            border: "1px solid #333",
            color: "#fff",
          }}
          formatter={(value: number) => `${value}%`}
          labelFormatter={(label: string) =>
            label === "Apr" ? `${label} Accuracy: 83` : label
          }
        />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#00FFFF"
          dot={false}
          connectNulls={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

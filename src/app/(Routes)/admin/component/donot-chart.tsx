"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SeverityData {
  name: string;
  value: number;
  color: string;
}

const data: SeverityData[] = [
  { name: "High", value: 25, color: "#ef4444" }, // red-500
  { name: "Medium", value: 35, color: "#f59e0b" }, // amber-500
  { name: "Low", value: 40, color: "#3b82f6" }, // blue-500
];

const ringLayers = [
  { innerRadius: 45, outerRadius: 55, opacity: 0.1 },
  { innerRadius: 60, outerRadius: 70, opacity: 0.1 },
  { innerRadius: 75, outerRadius: 85, opacity: 0.1 },
  { innerRadius: 90, outerRadius: 100, opacity: 0.0 },
];

export function SeverityChart() {
  return (
    <Card className="bg-inherit border-none">
      <CardHeader>
        <CardTitle className="text-white text-lg font-medium">
          Project Severity Distribution
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-12">
          <div className="relative w-64 h-64 flex-shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                {/* Background rings */}
                {ringLayers.map((ring, index) => (
                  <Pie
                    key={`ring-${index}`}
                    data={[{ value: 100 }]}
                    cx="50%"
                    cy="50%"
                    innerRadius={ring.innerRadius}
                    outerRadius={ring.outerRadius}
                    startAngle={0}
                    endAngle={360}
                    dataKey="value"
                    stroke="none"
                  >
                    <Cell fill={`rgba(75, 85, 99, ${ring.opacity})`} />
                  </Pie>
                ))}

                {/* Main data rings */}
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={55}
                  startAngle={90}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`inner-${index}`} fill="#ef4444" />
                  ))}
                </Pie>

                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={70}
                  startAngle={90}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`middle-${index}`} fill="#FBB10F" />
                  ))}
                </Pie>

                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={75}
                  outerRadius={85}
                  startAngle={300}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`outer-${index}`} fill="#0073E6" />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="flex flex-col gap-8 flex-1">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex items-center border-b border-dark-border-gray py-3 last:border-none justify-between"
              >
                <div className="flex items-center gap-4 ">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-white text-lg font-medium">
                    {item.name}
                  </span>
                </div>
                <span className="text-gray-400 text-xl font-light">
                  {item.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

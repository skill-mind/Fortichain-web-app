import { Group } from "@/icons/github";
import { CircleDollarSign, FileText } from "lucide-react";

export default function Card({ type }: { type: string }) {
    const text = type === "total" ? "Total Allocated Bounty" : type === "progress" ? "In Progress Audit" : type === "complete" ? "Completed Audit" : "Active Researchers"
    const value = type === "total" ? 12 : type === "progress" ? 1 : type === "complete" ? 2 : 2
    const bg =
      type === "total"
        ? "bg-good-bg text-good"
        : type === "progress"
        ? "bg-warning-bg text-warning"
        : type === "complete"
        ? "bg-pririty-low-bg text-blue-ball"
                    : "bg-good-bg text-good";
                    const btText =
                      type === "total"
                        ? "+2 this month"
                        : type === "progress"
                        ? "Requires attention"
                        : type === "complete"
                        ? "Closed"
                                    : "+1 this month";
                                    const icon =
                                      type === "total" ? (
                                        <CircleDollarSign className="text-gray-text" />
                                      ) : type === "progress" ? (
                                        <FileText className="text-gray-text" />
                                      ) : type === "complete" ? (
                                        <FileText className="text-gray-text" />
                                      ) : (
                                        <Group />
                                      );
    return (
      <div className="bg-dark-gray p-6 rounded-[8px] flex flex-col gap-3 w-full">
        <div className="flex justify-between items-center text-18">
          <h3>{text}</h3>
{icon}
        </div>
        <h2 className="text-2xl">{value}</h2>
        <span className={`${bg} bg-good-bg rounded-full px-3 py-1 w-fit text-12`}>
          {btText}
        </span>
      </div>
    );
}
import { CircleDollarSign, FileText, FolderOpen } from "lucide-react";

export default function MetricsCard({
  title,
  value,
  metric,
  icon,
}: {
  title: string;
  value: string;
  metric: string;
  icon: string;
}) {
  return (
    <div className="bg-dark-gray p-6 rounded-[8px] flex flex-col gap-3 w-full sm:min-w-80 justify-between">
      <div className="flex justify-between items-center text-18">
        <h3>{title}</h3>
        {icon == "file" ? (
          <FileText className="text-gray-text" />
        ) : icon == "token" ? (
          <CircleDollarSign className="text-gray-text" />
        ) : (
          <FolderOpen className="text-gray-text" />
        )}
      </div>
      <h2 className="text-2xl">{value}</h2>
      <span
        className={`text-good bg-good-bg rounded-full px-3 py-1 w-fit text-12`}
      >
        {metric}
      </span>
    </div>
  );
}

import { withdrawalData } from "@/util/mock-data";
import { use } from "react";
interface Project {
  id: string;
  name: string;
  owner: string;
  severity: "High" | "Medium" | "Low";
  payout: number;
  status: "Available" | "Validated";
  deadline: string;
  vulnerabilities?: number;
  repository?: string;
  researchers?: string[];
  validators?: string[];
  researcherRating?: number;
  validatorRating?: number;
}

const mockProjects: Project[] = [
  {
    id: "1",
    name: "Smart Contract Audit",
    owner: "Saun Jerry",
    severity: "High",
    payout: 7000,
    status: "Available",
    deadline: "2024-04-05",
    vulnerabilities: 3,
    repository: "https://github.com/fortichain/smartcontractaudit",
    researchers: ["Ebube", "Oshioke"],
    validators: ["Yunus"],
    researcherRating: 6,
    validatorRating: 6,
  },
  {
    id: "2",
    name: "Smart Contract Audit",
    owner: "Saun Jerry",
    severity: "Low",
    payout: 7000,
    status: "Available",
    deadline: "2024-04-05",
  },
  {
    id: "3",
    name: "Smart Contract Audit",
    owner: "Saun Jerry",
    severity: "Medium",
    payout: 7000,
    status: "Validated",
    deadline: "2024-04-05",
  },
  {
    id: "4",
    name: "Smart Contract Audit",
    owner: "Saun Jerry",
    severity: "Low",
    payout: 7000,
    status: "Validated",
    deadline: "2024-04-05",
  },
  {
    id: "5",
    name: "Smart Contract Audit",
    owner: "Saun Jerry",
    severity: "High",
    payout: 7000,
    status: "Validated",
    deadline: "2024-04-05",
  },
  {
    id: "6",
    name: "Smart Contract Audit",
    owner: "Saun Jerry",
    severity: "Medium",
    payout: 7000,
    status: "Validated",
    deadline: "2024-04-05",
  },
  {
    id: "7",
    name: "Smart Contract Audit",
    owner: "Saun Jerry",
    severity: "Low",
    payout: 7000,
    status: "Validated",
    deadline: "2024-04-05",
  },
];

export function ProjectTable() {
  return (
    <div className="border bg-dark-gray p-6 border-dark-border-gray rounded-[8px] overflow-scroll scrollbar-hide max-h-[750px] font-walsheim">
      <div className="overflow-x-auto scrollbar-hide">
        <table
          className="w-full min-w-[600px] sticky text-base"
          role="table"
          aria-label="list of Project"
        >
          <thead className="border-b border-dark-border-gray text-gray-text text-base">
            <tr>
              <th
                className="sticky left-0 z-20 px-4 py-3 text-left"
                scope="col"
                aria-label="date"
              >
                Project
              </th>
              <th
                className="sticky left-[60px] z-20 px-4 py-3 text-left "
                scope="col"
                aria-label="project name"
              >
                Owner
              </th>
              <th
                className="px-4 py-3 text-left"
                scope="col"
                aria-label="Wallet address transfer to"
              >
                Severity
              </th>
              <th
                className="px-4 py-3 text-center text-sm"
                scope="col"
                aria-label="amount widthraw"
              >
                Payout
              </th>
              <th
                className="px-4 py-3 text-center"
                scope="col"
                aria-label="status"
              >
                Status
              </th>
              <th
                className="px-4 py-3 text-center"
                scope="col"
                aria-label="status"
              >
                Deadline
              </th>
              <th
                className="px-4 py-3 text-center"
                scope="col"
                aria-label="status"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {mockProjects.map((user) => (
              <tr
                key={user.id}
                className={`border-b text-sm border-dark-border-gray last:border-b-0 transition-colors `}
                role="row"
              >
                <td
                  className="sticky left-0 z-10 bg-inherit px-4 py-4"
                  role="gridcell"
                  aria-label={`${user.name}`}
                >
                  <span className="w-fit h-6 rounded-full flex items-center justify-start">
                    {user.name}
                  </span>
                </td>
                <td
                  className="sticky left-[60px] z-10 px-4 py-4 font-medium"
                  role="gridcell"
                  aria-label={`${user.owner}`}
                >
                  {user.owner}
                </td>
                <td
                  className="px-4 py-4 text-xs md:text-sm"
                  role="gridcell"
                  aria-label={`transfer to ${user.severity}`}
                >
                  <span
                    className={`${
                      user.severity === "Medium"
                        ? "bg-warning-bg text-warning-text"
                        : user.severity === "High"
                        ? "bg-pririty-high-bg text-pririty-high-text"
                        : "bg-pririty-low-bg text-blue-ball"
                    } px-3 py-1.5 text-12 rounded-full w-full block text-center`}
                  >
                    {user.severity}
                  </span>
                </td>
                <td
                  className="px-4 py-4 text-center"
                  role="gridcell"
                  aria-label={`${user.payout} widthraw`}
                >
                  {user.payout}
                </td>
                <td
                  className={`px-4 py-4 text-center `}
                  role="gridcell"
                  aria-label={`${user.status}`}
                >
                  <span
                    className={`${
                      user.status === "Validated"
                        ? "bg-good-bg text-good"
                        : "bg-pririty-low-bg text-blue-ball"
                    } px-3 py-1.5 text-12 rounded-full w-full block text-center`}
                  >
                    {user.status}
                  </span>
                </td>
                <td
                  className="px-4 py-4 text-center"
                  role="gridcell"
                  aria-label={`${user.deadline} widthraw`}
                >
                  {user.deadline}
                </td>

                <td
                  className="px-4 py-4 text-center"
                  role="gridcell"
                  aria-label={`${user.deadline} widthraw`}
                >
                  <button
                    className="w-fit min-h-11 p-0.5 group             
          hover:from-sky-blue-border hover:to-sky-blue-border
          bg-gradient-to-r group to-[#312F2F] from-[#212121]
      rounded-full group my-auto"
                    type="button"
                  >
                    <span
                      className="px-6 py-3 text-sm
              group-hover:from-sky-from group-hover:to-sky-to
              group-hover:bg-gradient-to-r bg-[#1C1C1C]
          flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full"
                    >
                      View Details
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

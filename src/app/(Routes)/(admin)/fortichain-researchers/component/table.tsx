interface Researcher {
  id: string;
  name: string;
  address: string;
  reputation: number;
  projects: number;
  vulnerabilities: number;
  approvalRate: number;
}

const mockResearchers: Researcher[] = [
  {
    id: "1",
    name: "Ebube One",
    address: "0x4A7d5cB67eAhF6e4B7cC3B3aE3f8fD9bB2cF9a1B",
    reputation: 91,
    projects: 12,
    vulnerabilities: 23,
    approvalRate: 83,
  },
  {
    id: "2",
    name: "Martin",
    address: "0x4A7d5cB67eAhF6e4B7cC3B3aE3f8fD9bB2cF9a1B",
    reputation: 91,
    projects: 12,
    vulnerabilities: 23,
    approvalRate: 73,
  },
  {
    id: "3",
    name: "Emmanuel",
    address: "0x4A7d5cB67eAhF6e4B7cC3B3aE3f8fD9bB2cF9a1B",
    reputation: 91,
    projects: 12,
    vulnerabilities: 23,
    approvalRate: 83,
  },
  {
    id: "4",
    name: "Flora",
    address: "0x4A7d5cB67eAhF6e4B7cC3B3aE3f8fD9bB2cF9a1B",
    reputation: 91,
    projects: 12,
    vulnerabilities: 23,
    approvalRate: 83,
  },
  {
    id: "5",
    name: "Saun",
    address: "0x4A7d5cB67eAhF6e4B7cC3B3aE3f8fD9bB2cF9a1B",
    reputation: 91,
    projects: 12,
    vulnerabilities: 23,
    approvalRate: 83,
  },
  {
    id: "6",
    name: "Alex Chen",
    address: "0x8B2e9fD34cE5A7b8F1d6C9e2A4f7B3c8E5d9A2f1",
    reputation: 87,
    projects: 8,
    vulnerabilities: 18,
    approvalRate: 76,
  },
  {
    id: "7",
    name: "Sarah Kim",
    address: "0x3F8a1B5c9E2d7A4f6C8b3E9a2D5f8C1b4E7a9D2c",
    reputation: 94,
    projects: 15,
    vulnerabilities: 31,
    approvalRate: 89,
  },
  {
    id: "8",
    name: "David Rodriguez",
    address: "0x7C4e2A8f1B5d9E3a6F2c8B5e1A4d7F9c2E5a8B1f",
    reputation: 78,
    projects: 6,
    vulnerabilities: 12,
    approvalRate: 68,
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
                Researcher
              </th>
              <th
                className="sticky left-[60px] z-20 px-4 py-3 text-left "
                scope="col"
                aria-label="project name"
              >
                Reputation
              </th>
              <th
                className="px-4 py-3 text-left"
                scope="col"
                aria-label="Projects"
              >
                Projects
              </th>
              <th
                className="px-4 py-3 text-left"
                scope="col"
                aria-label="Wallet address transfer to"
              >
                Vulnerabilities
              </th>
              <th
                className="px-4 py-3 text-center text-sm"
                scope="col"
                aria-label="amount widthraw"
              >
                Approval Rate
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
            {mockResearchers.map((user) => {
              return (
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
                    <span className="text-gray-text">{user.address}</span>
                  </td>
                  <td
                    className="sticky left-[60px] z-10 px-4 py-4 font-medium"
                    role="gridcell"
                    aria-label={`${user.reputation}`}
                  >
                    {user.reputation}
                  </td>
                  <td
                    className="px-4 py-4 text-xs md:text-sm"
                    role="gridcell"
                    aria-label={`transfer to ${user.projects}`}
                  >
                    {user.projects}
                  </td>
                  <td
                    className="px-4 py-4 text-xs md:text-sm"
                    role="gridcell"
                    aria-label={`transfer to ${user.vulnerabilities}`}
                  >
                    {user.vulnerabilities}
                  </td>
                  <td
                    className="px-4 py-4 my-4 flex items-center justify-center gap-1 text-center"
                    role="gridcell"
                    aria-label={`${user.approvalRate} widthraw`}
                  >
                    <div className="bg-dark-gray-pop h-1.5 w-[100px] rounded-full">
                      <span
                        className="h-full bg-blue-ball  block rounded-full"
                        style={{ width: `${user.approvalRate}%` }}
                      />
                    </div>
                    {user.approvalRate}%
                  </td>
                  <td
                    className="px-4 py-4 text-center"
                    role="gridcell"
                    aria-label={`button`}
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
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

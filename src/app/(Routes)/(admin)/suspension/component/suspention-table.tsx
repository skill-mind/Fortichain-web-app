interface UserAccountData {
  id: string; // The long hash identifier
  user: string;
  accountType: "Project Owner" | "Researcher" | "Validator";
  reason: string;
  duration: string;
  date: string; // Format: YYYY-MM-DD
  status: "Suspended" | "Resolved";
  actions: "Resolve" | "Suspend";
}

// Mock data array
export const mockUserAccountData: UserAccountData[] = [
  {
    id: "0x4A7d5cB67eA4F6e4B76C3B3aE3f8fD9bB2cF9afB",
    user: "Martin",
    accountType: "Project Owner",
    reason: "Spamming",
    duration: "30 days",
    date: "2024-04-05",
    status: "Suspended",
    actions: "Resolve",
  },
  {
    id: "0x4A7d5cB67eA4F6e4B76C3B3aE3f8fD9bB2cF9afB",
    user: "Martin",
    accountType: "Researcher",
    reason: "Fake reports",
    duration: "14 days",
    date: "2024-04-05",
    status: "Suspended",
    actions: "Resolve",
  },
  {
    id: "0x4A7d5cB67eA4F6e4B76C3B3aE3f8fD9bB2cF9afB",
    user: "Martin",
    accountType: "Validator",
    reason: "Fraud",
    duration: "Permanent",
    date: "2024-04-05",
    status: "Suspended",
    actions: "Resolve",
  },
  {
    id: "0x4A7d5cB67eA4F6e4B76C3B3aE3f8fD9bB2cF9afB",
    user: "Martin",
    accountType: "Project Owner",
    reason: "Scam",
    duration: "2 days",
    date: "2024-04-05",
    status: "Resolved",
    actions: "Suspend",
  },
  {
    id: "0x4A7d5cB67eA4F6e4B76C3B3aE3f8fD9bB2cF9afB",
    user: "Martin",
    accountType: "Project Owner",
    reason: "Scam",
    duration: "2 days",
    date: "2024-04-05",
    status: "Resolved",
    actions: "Suspend",
  },
];
export function SuspensionTable({ handler }: { handler: () => void }) {
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
                User
              </th>
              <th
                className="sticky left-[60px] z-20 px-4 py-3 text-left "
                scope="col"
                aria-label="project name"
              >
                Account Type
              </th>
              <th
                className="px-4 py-3 text-left"
                scope="col"
                aria-label="Projects"
              >
                Reason
              </th>
              <th
                className="px-4 py-3 text-left"
                scope="col"
                aria-label="Wallet address transfer to"
              >
                Duration
              </th>
              <th
                className="px-4 py-3 text-center text-sm"
                scope="col"
                aria-label="amount widthraw"
              >
                Date
              </th>
              <th
                className="px-4 py-3 text-center text-sm"
                scope="col"
                aria-label="amount widthraw"
              >
                Status
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
            {mockUserAccountData.map((user, key) => {
              return (
                <tr
                  key={key}
                  className={`border-b text-sm border-dark-border-gray last:border-b-0 transition-colors `}
                  role="row"
                >
                  <td
                    className="sticky left-0 z-10 bg-inherit px-4 py-4"
                    role="gridcell"
                    aria-label={`${user.user}`}
                  >
                    <span className="w-fit h-6 rounded-full flex items-center justify-start">
                      {user.user}
                    </span>
                    <span className="text-gray-text">{user.id}</span>
                  </td>
                  <td
                    className="sticky left-[60px] z-10 px-4 py-4 font-medium"
                    role="gridcell"
                    aria-label={`${user.accountType}`}
                  >
                    {user.accountType}
                  </td>
                  <td
                    className="px-4 py-4 text-xs md:text-sm"
                    role="gridcell"
                    aria-label={`${user.reason}`}
                  >
                    {user.reason}
                  </td>
                  <td
                    className="px-4 py-4 text-xs md:text-sm"
                    role="gridcell"
                    aria-label={`transfer to ${user.duration}`}
                  >
                    {user.duration}
                  </td>
                  <td
                    className="px-4 py-4 my-4 flex items-center justify-center gap-1 text-center"
                    role="gridcell"
                    aria-label={`${user.date}`}
                  >
                    {user.date}
                  </td>
                  <td
                    className="px-4 py-4 text-xs md:text-sm"
                    role="gridcell"
                    aria-label={`transfer to ${user.status}`}
                  >
                    <span
                      className={`text-center block rounded-full py-1.5 px-3 ${
                        user.status === "Suspended"
                          ? "bg-pririty-high-bg text-pririty-high-text"
                          : "bg-good-bg text-good"
                      }`}
                    >
                      {user.status}
                    </span>
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
                      onClick={handler}
                    >
                      <span
                        className="px-6 py-3 text-sm
              group-hover:from-sky-from group-hover:to-sky-to
              group-hover:bg-gradient-to-r bg-[#1C1C1C]
          flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full"
                      >
                        Resolve
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

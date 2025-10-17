import { withdrawalData } from "@/util/mock-data";

export function WidthrawTable() {
  return (
    <div className="border bg-dark-gray p-6 border-dark-border-gray rounded-[8px] overflow-scroll scrollbar-hide max-h-[650px]">
      <div className="mb-6">
        <h3>Withdrawal History</h3>
        <h5 className="text-gray-text">view Total amount withdrawn</h5>
      </div>
      <div className=" w-full flex h-1/2 justify-center items-center text-center text-gray-text text-2xl md:text-[32px] border border-dark-border-gray rounded-[8px] bg-dark-gray">
        <h2 className="mx-auto h-fit md:p-28 p-2.5 max-w-3xl ">Coming Soon</h2>
      </div>
      {/* <div className="overflow-x-auto scrollbar-hide">
          <table
            className="w-full min-w-[600px] sticky text-base"
            role="table"
            aria-label="Withdrawal History"
          >
            <thead className="border-b border-dark-border-gray text-gray-text text-base">
              <tr>
                <th
                  className="sticky left-0 z-20 px-4 py-3 text-left"
                  scope="col"
                  aria-label="date"
                >
                  Date
                </th>
                <th
                  className="sticky left-[60px] z-20 px-4 py-3 text-left "
                  scope="col"
                  aria-label="project name"
                >
                  Project
                </th>
                <th
                  className="px-4 py-3 text-left"
                  scope="col"
                  aria-label="Wallet address transfer to"
                >
                  To
                </th>
                <th
                  className="px-4 py-3 text-center text-sm"
                  scope="col"
                  aria-label="amount widthraw"
                >
                  Amount
                </th>
                <th
                  className="px-4 py-3 text-center"
                  scope="col"
                  aria-label="status"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {withdrawalData.map((user) => (
                <tr
                  key={user.id}
                  className={`border-b text-sm border-dark-border-gray last:border-b-0 transition-colors `}
                  role="row"
                >
                  <td
                    className="sticky left-0 z-10 bg-inherit px-4 py-4"
                    role="gridcell"
                    aria-label={`${user.date}`}
                  >
                    <span className="w-fit h-6 rounded-full flex items-center justify-start">
                      {user.date}
                    </span>
                  </td>
                  <td
                    className="sticky left-[60px] z-10 px-4 py-4 font-medium"
                    role="gridcell"
                    aria-label={`${user.project}`}
                  >
                    {user.project}
                  </td>
                  <td
                    className="px-4 py-4 font-mono text-xs md:text-sm"
                    role="gridcell"
                    aria-label={`transfer to ${user.to}`}
                  >
                    <span className="md:hidden">{user.to.slice(0, 8)}...</span>
                    <span className="hidden md:inline">{user.to}</span>
                  </td>
                  <td
                    className="px-4 py-4 text-center"
                    role="gridcell"
                    aria-label={`${user.amount} widthraw`}
                  >
                    {user.amount}
                  </td>
                  <td
                    className={`px-4 py-4 text-center `}
                    role="gridcell"
                    aria-label={`${user.status}`}
                  >
                    <span
                      className={`${
                        user.status === "Pending"
                          ? "bg-warning-bg text-warning-text"
                          : "bg-pririty-low-bg text-blue-ball"
                      } px-3 py-1.5 text-12 rounded-full`}
                    >
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
    </div>
  );
}

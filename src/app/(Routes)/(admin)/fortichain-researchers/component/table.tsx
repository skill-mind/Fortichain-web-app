import { SecurityResearcher } from "@/hook/useBlockchain";
import { formatAddress } from "@/util/helper";

type SetResearcherId = (num: number) => void;
export function ProjectTable({
  handler,
  researchers,
  setResearcherId,
}: {
  handler: () => void;
  researchers: SecurityResearcher[];
  setResearcherId: SetResearcherId;
}) {
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
            {researchers.map((user) => {
              const approval_rate =
                (user?.reports_approved_count / user?.reports_submitted_count) *
                100;
              return (
                <tr
                  key={user?.id}
                  className={`border-b text-sm border-dark-border-gray last:border-b-0 transition-colors `}
                  role="row"
                >
                  <td
                    className="sticky left-0 z-10 bg-inherit px-4 py-4 capitalize"
                    role="gridcell"
                    aria-label={`${user?.username}`}
                  >
                    <span className="w-fit h-6 rounded-full flex items-center justify-start">
                      {user.username}
                    </span>
                    <span className="text-gray-text">
                      {" "}
                      {formatAddress(
                        user?.researcher_address?.toString(16),
                        15,
                        12
                      )}
                    </span>
                  </td>
                  <td
                    className="sticky left-[60px] z-10 px-4 py-4 font-medium"
                    role="gridcell"
                    aria-label={`${user?.reputation}`}
                  >
                    {user.reputation}
                  </td>
                  <td
                    className="px-4 py-4 text-xs md:text-sm"
                    role="gridcell"
                    aria-label=""
                  >
                    {user?.reports_submitted_count}
                  </td>
                  <td
                    className="px-4 py-4 text-xs md:text-sm"
                    role="gridcell"
                    aria-label=""
                  >
                    {user?.vulnerability}
                  </td>
                  <td
                    className="px-4 py-4 my-4 flex items-center justify-center gap-1 text-center"
                    role="gridcell"
                    aria-label=""
                  >
                    <div className="bg-dark-gray-pop h-1.5 w-[100px] rounded-full">
                      <span
                        className="h-full bg-blue-ball  block rounded-full"
                        style={{
                          width: `${approval_rate ? approval_rate : 0}%`,
                        }}
                      />
                    </div>
                    {approval_rate ? approval_rate : 0}%
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
                      onClick={() => {
                        handler();
                        setResearcherId(Number(user?.id));
                      }}
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

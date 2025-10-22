import { validatorType } from "@/hook/useBlockchain";
import { formatAddress } from "@/util/helper";

type SetValidatorId = (isSubmitting: number) => void;
export function ProjectTable({
  handler,
  validators,
  setValidatorId,
}: {
  handler: () => void;
  validators: validatorType[];
  setValidatorId: SetValidatorId;
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
                Validators
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
                Projects Validated
              </th>
              <th
                className="px-4 py-3 text-left"
                scope="col"
                aria-label="Wallet address transfer to"
              >
                Approval Rate
              </th>
              <th
                className="px-4 py-3 text-center text-sm"
                scope="col"
                aria-label="amount widthraw"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {validators.map((user) => {
              return (
                <tr
                  key={user.id}
                  className={`border-b text-sm border-dark-border-gray last:border-b-0 transition-colors `}
                  role="row"
                >
                  <td
                    className="sticky left-0 z-10 bg-inherit px-4 py-4"
                    role="gridcell"
                    aria-label=""
                  >
                    <span className="w-fit h-6 rounded-full flex items-center justify-start">
                      {user.username}
                    </span>
                    <span className="text-gray-text">
                      {" "}
                      {formatAddress(
                        user?.validator_address?.toString(16),
                        15,
                        12
                      )}
                    </span>
                  </td>
                  <td
                    className="sticky left-[60px] z-10 px-4 py-4 font-medium"
                    role="gridcell"
                    aria-label={``}
                  >
                    {user.reputation}
                  </td>

                  <td
                    className="px-4 py-4 text-xs md:text-sm"
                    role="gridcell"
                    aria-label={`transfer to `}
                  >
                    {user.number_project_validated}
                  </td>
                  <td
                    className="px-4 py-4 my-4 flex items-center justify-center gap-1 text-center"
                    role="gridcell"
                    aria-label={` widthraw`}
                  >
                    <div className="bg-dark-gray-pop h-1.5 w-[100px] rounded-full">
                      <span
                        className="h-full bg-blue-ball  block rounded-full"
                        style={{ width: `${user.approval_rate}%` }}
                      />
                    </div>
                    {user.approval_rate}%
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
                        setValidatorId(Number(user.id));
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

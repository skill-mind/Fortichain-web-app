import {
  useFetchAllReserchersDetails,
  useFetchAllValidatorsDetails,
} from "@/hook/fetch-requests";
import { formatAddress } from "@/util/helper";

export default function Table({ type }: { type: string }) {
  const { data: validators, loading: validatorsIsLoading } =
    useFetchAllReserchersDetails();
  const { data: researchers, loading: researchersIsLoading } =
    useFetchAllValidatorsDetails();
  const user = type === "validator" ? validators : researchers;
  return (
    <div className="border px-6 border-dark-border-gray rounded-[8px] overflow-scroll scrollbar-hide max-h-[650px]">
      <div className="overflow-x-auto scrollbar-hide">
        <table
          className="w-full min-w-[600px] sticky text-base"
          role="table"
          aria-label="Researchers ranking table"
        >
          <thead className="border-b border-dark-border-gray text-gray-text">
            <tr>
              <th
                className="sticky left-0 z-20 px-4 py-3 text-left"
                scope="col"
                aria-label="Researcher rank"
              >
                Rank
              </th>
              <th
                className="px-4 py-3 text-left"
                scope="col"
                aria-label="Wallet address"
              >
                <span className="hidden md:inline">Address</span>
                <span className="md:hidden">Addr</span>
              </th>
              <th
                className="px-4 py-3 text-center text-sm"
                scope="col"
                aria-label="Number of audits completed"
              >
                {type === "validator" ? "Audits" : "Reports"}
              </th>
              <th
                className="px-4 py-3 text-center"
                scope="col"
                aria-label="Reputation percentage"
              >
                Reputation
              </th>
              <th
                className="px-4 py-3 text-right text-sm"
                scope="col"
                aria-label="Total earnings"
              >
                Earned
              </th>
            </tr>
          </thead>
          <tbody>
            {user?.map((researcher, key) => (
              <tr
                key={key}
                className={`border-b border-dark-border-gray last:border-b-0 transition-colors `}
                role="row"
              >
                <td
                  className="sticky left-0 z-10 bg-inherit px-4 py-4"
                  role="gridcell"
                  aria-label="Rank"
                >
                  <span className="w-6 h-6 rounded-full flex items-center justify-center">
                    {key + 1}
                  </span>
                </td>
                <td
                  className="px-4 py-4 font-mono text-xs md:text-sm"
                  role="gridcell"
                  aria-label="Wallet address"
                >
                  <span className="md:hidden">
                    {formatAddress(researcher.wallet_address)}
                  </span>
                  <span className="hidden md:inline">
                    {formatAddress(researcher.wallet_address)}
                  </span>
                </td>
                <td
                  className="px-4 py-4 text-center"
                  role="gridcell"
                  aria-label={`audits/reports completed`}
                >
                  {researcher.reports_submitted_count}
                </td>
                <td
                  className="px-4 py-4 text-center"
                  role="gridcell"
                  aria-label={`${researcher.reputation} reputation`}
                >
                  {researcher.reputation}
                </td>
                <td
                  className="px-4 py-4 text-right font-medium"
                  role="gridcell"
                  aria-label="total earned"
                >
                  ${Number(researcher.total_bounty_won).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

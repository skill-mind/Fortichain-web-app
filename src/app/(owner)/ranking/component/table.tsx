// Mock data for the researchers ranking
const researchersData = [
  {
    rank: 1,
    name: "Ebube",
    address: "0x4E6b6c4a...",
    audits: 8,
    reputation: "99%",
    earned: "$10,000",
  },
  {
    rank: 2,
    name: "Chika",
    address: "0x8E9b6c4a...",
    audits: 12,
    reputation: "95%",
    earned: "$12,500",
  },
  {
    rank: 3,
    name: "Uche",
    address: "0x7C9b6c4a...",
    audits: 15,
    reputation: "92%",
    earned: "$18,000",
  },
  {
    rank: 4,
    name: "Adaora",
    address: "0x6D9b6c4a...",
    audits: 10,
    reputation: "98%",
    earned: "$14,200",
  },
  {
    rank: 5,
    name: "Ify",
    address: "0x5E9b6c4a...",
    audits: 20,
    reputation: "91%",
    earned: "$19,000",
  },
  {
    rank: 6,
    name: "Nnamdi",
    address: "0x4F9b6c4a...",
    audits: 6,
    reputation: "93%",
    earned: "$11,000",
  },
  {
    rank: 7,
    name: "Chioma",
    address: "0x3G9b6c4a...",
    audits: 9,
    reputation: "96%",
    earned: "$13,750",
  },
  {
    rank: 8,
    name: "Kelechi",
    address: "0x2H9b6c4a...",
    audits: 14,
    reputation: "89%",
    earned: "$17,000",
  },
  {
    rank: 9,
    name: "Chiamara",
    address: "0x1I9b6c4a...",
    audits: 7,
    reputation: "94%",
    earned: "$12,300",
  },
];

export default function Table({type}:{type:string}) {
  return (
    <div className="border px-6 border-dark-border-gray rounded-[8px] overflow-scroll scrollbar-hide max-h-[650px]">
      <div className="overflow-x-auto scrollbar-hide">
        <table
          className="w-full min-w-[600px] sticky"
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
                className="sticky left-[60px] z-20 px-4 py-3 text-left "
                scope="col"
                aria-label="Researcher username"
              >
                User name
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
            {researchersData.map(researcher => (
              <tr
                key={researcher.rank}
                className={`border-b border-dark-border-gray last:border-b-0 transition-colors `}
                role="row"
              >
                <td
                  className="sticky left-0 z-10 bg-inherit px-4 py-4"
                  role="gridcell"
                  aria-label={`Rank ${researcher.rank}`}
                >
                  <span className="w-6 h-6 rounded-full flex items-center justify-center">
                    {researcher.rank}
                  </span>
                </td>
                <td
                  className="sticky left-[60px] z-10 px-4 py-4 font-medium"
                  role="gridcell"
                  aria-label={`Researcher ${researcher.name}`}
                >
                  {researcher.name}
                </td>
                <td
                  className="px-4 py-4 font-mono text-xs md:text-sm"
                  role="gridcell"
                  aria-label={`Wallet address ${researcher.address}`}
                >
                  <span className="md:hidden">
                    {researcher.address.slice(0, 8)}...
                  </span>
                  <span className="hidden md:inline">{researcher.address}</span>
                </td>
                <td
                  className="px-4 py-4 text-center"
                  role="gridcell"
                  aria-label={`${researcher.audits} audits completed`}
                >
                  {researcher.audits}
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
                  aria-label={`${researcher.earned} total earned`}
                >
                  {researcher.earned}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
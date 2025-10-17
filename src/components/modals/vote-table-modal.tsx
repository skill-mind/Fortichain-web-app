"use client";
import { BadgeCheck, X } from "lucide-react";
import { useState } from "react";

export default function VoteTableModal({ handler }: { handler: () => void }) {
  const [type, setType] = useState("valid"); // valid, invalid
  return (
    <>
      <div
        className=" bg-main-bg/75 z-50 fixed top-0 h-screen w-full left-0"
        onClick={handler}
      ></div>
      <div className="p-6 max-w-[950px] w-full bg-dark-gray-bt rounded-[8px] mx-auto grid gap-5 fixed top-50 sm:top-20 z-50 left-1/2 -translate-x-[50%]">
        <div className="flex justify-between">
          <h3>Validators Voting</h3>
          <button
            type="button"
            onClick={handler}
            className="bg-dark-gray-pop p-1.5 rounded-full"
          >
            <X />
          </button>
        </div>
        <div className="bg-dark-gray rounded-full p-1 w-fit mb-8 text-base">
          <button
            onClick={() => {
              setType("valid");
            }}
            className={`${
              type === "valid"
                ? " bg-dark-gray-pop border border-dark-gray-border"
                : ""
            } py-2 px-[18px] rounded-full `}
          >
            Valid Report
          </button>
          <button
            onClick={() => {
              setType("invalid");
            }}
            className={`${
              type === "invalid"
                ? " bg-dark-gray-pop border border-dark-gray-border"
                : ""
            } py-2 px-[18px] rounded-full `}
          >
            Invalid Report
          </button>
        </div>

        <Table type={type} />
      </div>
    </>
  );
}

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

function Table({ type }: { type: string }) {
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
                User name
              </th>
              <th
                className="sticky left-[60px] z-20 px-4 py-3 text-left "
                scope="col"
                aria-label="Researcher username"
              >
                Address
              </th>
              <th
                className="px-4 py-3 text-center"
                scope="col"
                aria-label="Wallet address"
              >
                <span className="">Reputation</span>
              </th>

              <th
                className="px-4 py-3 text-center"
                scope="col"
                aria-label="Reputation percentage"
              >
                Votes
              </th>
            </tr>
          </thead>
          <tbody>
            {researchersData.map((researcher) => (
              <tr
                key={researcher.rank}
                className={`border-b border-dark-border-gray last:border-b-0 transition-colors `}
                role="row"
              >
                <td
                  className="sticky left-[0px] z-10 px-4 py-4 font-medium"
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
                  className=" py-4 text-center flex justify-center"
                  role="gridcell"
                  aria-label={`${researcher.reputation} reputation`}
                >
                  {type === "valid" ? (
                    <button className="px-10 py-3 bg-good-bg text-good rounded-full flex gap-2 items-center">
                      <BadgeCheck />
                      Valid Report
                    </button>
                  ) : (
                    <button
                      onClick={() => {}}
                      className="px-10 py-3 bg-pririty-high-bg text-pririty-high-text rounded-full flex gap-2 items-center"
                    >
                      <BadgeCheck />
                      Invalid Report
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

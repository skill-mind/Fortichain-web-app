"use client";
import { SecurityResearcher } from "@/hook/useBlockchain";
import { useAccount, useDisconnect } from "@starknet-react/core";

export function UserFinance({
  researcher,

  handler,
}: {
  researcher: SecurityResearcher;
  handler: () => void;
}) {
  const { disconnect } = useDisconnect();
  const { address } = useAccount();

  return (
    <div className=" grid md:grid-cols-2 grid-cols-1 xl:grid-cols-3 gap-3">
      <div className="rounded-[8px] p-6 border border-dark-border-gray bg-dark-gray flex flex-col gap-3">
        <h3>Bounty Reward</h3>
        <div className="grid gap-3  bg-dark-gray-pop rounded-[8px] p-6">
          <h4 className="text-gray-text text-base">
            Total amount made from bounty
          </h4>
          <h2 className="text-2xl">
            ${(researcher.total_bounty_won / 10 ** 18).toFixed(2)}
          </h2>
        </div>
        <div className="flex items-center gap-2 mt-2 capitalize">
          <h3 className="text-base capitalize">{researcher.username}</h3>
          <span className="bg-pririty-low-bg text-blue-ball rounded-full px-3 py-1 w-fit text-12">
            {researcher.is_active ? "Active" : "unavailabe"}
          </span>
        </div>
        <span className="break-all text-gray-text">{address}</span>
        <button
          className="w-fit min-h-11 p-0.5 group             
                  hover:from-sky-blue-border hover:to-sky-blue-border
                  bg-gradient-to-r group to-[#312F2F] from-[#212121]
              rounded-full group"
          onClick={() => {
            disconnect();
          }}
          type="button"
        >
          <span
            className="px-6 py-3
                      group-hover:from-sky-from group-hover:to-sky-to
                      group-hover:bg-gradient-to-r bg-[#1C1C1C] text-sm font-normal
                  flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full"
          >
            Disconnect Wallet
          </span>
        </button>
      </div>

      <div className="">
        <div className="rounded-[8px] p-6 border border-dark-border-gray h-full bg-dark-gray flex flex-col gap-3">
          <h3>Paid Out</h3>
          <div className="grid gap-3  bg-dark-gray-pop rounded-[8px] p-6">
            <h4 className="text-gray-text text-base">Total amount withdrawn</h4>
            <h2 className="text-2xl">
              ${(researcher.total_amount_withdrawn / 10 ** 18).toFixed()}
            </h2>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>

      <div className="grid">
        <div className="rounded-[8px] p-6 border border-dark-border-gray bg-dark-gray flex flex-col gap-3 justify-between">
          <div className="grid gap-3">
            <h3>Available Bounty for Withdrawal</h3>
            <div className="grid gap-3  bg-dark-gray-pop rounded-[8px] p-6">
              <h4 className="text-gray-text text-base">
                Available to withdraw
              </h4>
              <h2 className="text-2xl">
                $
                {(researcher.available_amount_to_withdraw / 10 ** 18).toFixed(
                  2
                )}
              </h2>
            </div>
          </div>
          <button
            onClick={handler}
            className={`min-w-157 min-h-50 p-0.5 group 
         
            bg-sky-blue-border
             
           rounded-full group`}
          >
            <span
              className={`px-6 py-3
          
                 bg-gradient-to-r from-sky-from to-sky-to

              flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-full w-full`}
            >
              Withdraw
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

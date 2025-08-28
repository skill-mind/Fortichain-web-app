import { withdrawalData } from "@/util/mock-data";
import { WidthrawTable } from "../../../../components/WidthrawTable";

export default function Page() {
  return (
    <section className="grid gap-3">
      <div className=" grid md:grid-cols-2 grid-cols-1 xl:grid-cols-3 gap-3">
        <div className="rounded-[8px] p-6 border border-dark-border-gray bg-dark-gray flex flex-col gap-3">
          <h3>Bounty Reward</h3>
          <div className="grid gap-3  bg-dark-gray-pop rounded-[8px] p-6">
            <h4 className="text-gray-text text-base">
              Total amount made from bounty
            </h4>
            <h2 className="text-2xl">$9,650</h2>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <h3 className="text-base">Ebube</h3>
            <span className="bg-pririty-low-bg text-blue-ball rounded-full px-3 py-1 w-fit text-12">
              Active
            </span>
          </div>
          <span className="break-all text-gray-text">
            0x4A7d5cB67eA4F6e4B7cC3B3aE3f8fD9bB2cF9a1B
          </span>
          <button
            className={`
           w-fit
                 bg-dark-gray-pop border border-dark-border-gray py-2 px-[18px] rounded-full `}
          >
            Disconnect Wallet
          </button>
        </div>

        <div className="">
          <div className="rounded-[8px] p-6 border border-dark-border-gray h-full bg-dark-gray flex flex-col gap-3">
            <h3>Paid Out</h3>
            <div className="grid gap-3  bg-dark-gray-pop rounded-[8px] p-6">
              <h4 className="text-gray-text text-base">
                Total amount withdrawn
              </h4>
              <h2 className="text-2xl">$9,650</h2>
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
                <h2 className="text-2xl">$9,650</h2>
              </div>
            </div>
            <button
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
      <WidthrawTable />
    </section>
  );
}

import { Badge } from "@/icons/github";
import { badgesData } from "@/util/mock-data";
import Table from "../../ranking/component/table";

export default function Page() {
  return (
    <section className="grid gap-3">
      <div className=" grid grid-cols-3 gap-3">
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
            <h3>Bounty Reward</h3>
            <div className="grid gap-3  bg-dark-gray-pop rounded-[8px] p-6">
              <h4 className="text-gray-text text-base">
                Total amount made from bounty
              </h4>
              <h2 className="text-2xl">$9,650</h2>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>

        <div className="grid">
          <div className="rounded-[8px] p-6 border border-dark-border-gray bg-dark-gray flex flex-col gap-3 justify-between">
            <div>
              <h3>Bounty Reward</h3>
              <div className="grid gap-3  bg-dark-gray-pop rounded-[8px] p-6">
                <h4 className="text-gray-text text-base">
                  Total amount made from bounty
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
      <div className="bg-dark-gray p-6 rounded-[8px] grid gap-3">
        <h3 className="text-18">Badges and Achievements</h3>
        <div className="grid grid-cols-4 gap-3">
          {badgesData.map((data) => {
            const percentage = `w-[${data.progress}%]`;
            console.log(percentage)
            return (
              <div key={data.id}  className="bg-dark-gray-pop border border-dark-border-gray p-6 flex items-center gap-2 flex-col rounded-[8px]">
                <div className="bg-pririty-low-bg rounded-full p-2 grid place-content-center w-fit">
                  <Badge />
                </div>
                <h3>{data.title}</h3>

                {data.status !== "In Progress" && (
                  <span
                    className={`bg-good-bg text-good rounded-full px-3 py-1 w-fit text-12`}
                  >
                    {data.status}
                  </span>
                )}
                {data.status !== "In Progress" && (
                  <h3 className="text-gray-text text-sm mt-6">
                    {data.description}
                  </h3>
                )}
                {data.status === "In Progress" && (
                  <div className="w-full text-gray-text">
                    <span className="text-sm"> {data.description}</span>
                    <span className="w-full h-1.5 rounded-full bg-percentage-bg block mt-2">
                      <span
                        className={`bg-blue-ball rounded-full w-[40%] block h-1.5`}
                      />
                    </span>
                    <span className="text-12">{data.progress}% Completed</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Table type=""/>
    </section>
  );
}

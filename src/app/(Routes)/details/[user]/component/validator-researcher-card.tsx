export default function ValidatorResearcherCard() {
    return (
      <div
        className="border 
         border-dark-border-gray
        bg-dark-gray rounded-[8px] min-h-52 p-4 grid gap-3"
      >
        <div className="flex justify-between items-center sm:items-start">
          <div className="flex items-center gap-1">
            <span className="rounded-full bg-blue-ball w-1 h-1" />
            <h5>Audited</h5>
          </div>
          <span
            className={` sm:hidden ${
              true
                ? "text-blue-ball bg-pririty-low-bg"
                : "text-pririty-high-text bg-pririty-high-bg"
            } rounded-full py-1.5 px-3 text-sm`}
          >
            Priority: Low
          </span>
        </div>
        <div className="pb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h3>DeFi Protocol Smart Contract Audit</h3>
          </div>
          <span
            className={`hidden sm:block ${
              true
                ? "text-blue-ball bg-pririty-low-bg"
                : "text-pririty-high-text bg-pririty-high-bg"
            } rounded-full py-1.5 px-3 text-sm`}
          >
            Priority: Low
          </span>
        </div>
        <div className="border-b border-dark-border-gray pb-4">
          <h3 className="text-gray-text mb-1">Details</h3>
          <h3>
            Comprehensive security audit of DeFi lending protocol smart
            contracts
          </h3>
        </div>
        <div className="flex justify-between items-center my-3 flex-wrap gap-3">
          <div className="flex flex-wrap items-center gap-1">
            <span className="text-gray-text">Submitted:</span>
            <span className="bg-dark-gray-pop rounded-full px-3 py-1">
              10th - Aug - 2025
            </span>
            <span className="flex gap-1 items-center">
              <span className="text-gray-text">Findings</span>
              <span className="bg-dark-gray-pop rounded-full px-3 py-1">2</span>
            </span>
          </div>
          <div className="w-full grid place-content-end xl:w-fit">
            <button
              className="w-fit min-h-11 p-0.5 group             
        hover:from-sky-blue-border hover:to-sky-blue-border
        bg-gradient-to-r group to-[#312F2F] from-[#212121]
    rounded-full group "
              type="button"
            >
              <span
                className="px-6 py-3
            group-hover:from-sky-from group-hover:to-sky-to
            group-hover:bg-gradient-to-r bg-[#1C1C1C]
        flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full"
              >
                View details
              </span>
            </button>
          </div>
        </div>
      </div>
    );
}
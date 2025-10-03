export default function ResearcherReportDetails() {
  return (
    <section className="bg-dark-gray border border-dark-border-gray rounded-[8px] p-6 grid gap-14 ">
      <div className="flex items-center justify-between">
        <div className="flex gap-4 ">
          <h2>Smart Contract Report</h2>
          <span className="bg-white-text flex h-[25px] w-[1px]" />
          <h3 className="text-gray-text">17th - Aug - 2025</h3>
        </div>
        <button className="rounded-full text-warning-text bg-warning-bg py-2 px-4">
          Priority: Medium
        </button>
      </div>
      <div>
        <h1>Description</h1>
      </div>
      <div>
        <h1>Potential Risk</h1>
      </div>
      <div>
        <h1>Recommendations</h1>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center ">
          <span className="text-gray-text ">Audited:</span>
          <span className="py-1 px-3 bg-dark-gray-pop rounded-full">
            17th - Aug - 2025
          </span>
        </div>
        <div className="flex gap-1 items-center ">
          <span className="text-gray-text ">Researcher:</span>
          <span className="py-1 px-3 bg-dark-gray-pop rounded-full">Ebube</span>
        </div>
        <div className="flex gap-1 items-center">
          <span className="text-gray-text ">Validator:</span>
          <span className="py-1 px-3 bg-dark-gray-pop rounded-full">Yunus</span>
        </div>
      </div>
    </section>
  );
}

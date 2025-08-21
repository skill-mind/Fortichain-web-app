export default function Notification() {
    return (
      <div className="bg-dark-gray fixed top-16 right-3 translate-y-1/12 max-w-xl p-6 border border-dark-border-gray rounded-[8px] mt-7">
        <div className="flex justify-between items-center">
          <h2>Notifications</h2>
          <button className="bg-dark-gray-pop rounded-full py-3 px-6">
            Mark all as read
          </button>
        </div>

        <section className="mt-12 flex flex-col justify-between gap-3">
          <div className="flex justify-between items-center gap-4 bg-dark-gray-bt rounded-[12px] p-3">
            <span className="rounded-full bg-blue-ball w-3 h-3" />
            <div>
              <h3 className="text-gray-text">Tuesday, July 1, 2025 - 8:00AM</h3>
              <h1 className="text-xl">Report Approved</h1>
              <h2 className="text-gray-text">
                Your report on reentrancy vulnerability has been approved by
                validator
              </h2>
            </div>
          </div>
        </section>
      </div>
    );
}
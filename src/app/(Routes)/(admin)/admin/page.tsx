import MetricsCard from "./component/metrics-card";
import { UserGrowthChart } from "./component/user-growth-chart";
// import TypeScriptRadialBars from "./component/donot-chart";
import { SeverityChart } from "./component/donot-chart";
import RevenueData from "./component/revenue-chart";

export default function Admin() {
  return (
    <section className="grid gap-4">
      <div className="flex flex-wrap justify-between items-center sm:grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
        <MetricsCard
          value="24"
          title="Total Projects"
          metric="+12% from last month"
          icon="folder"
        />
        <MetricsCard
          value="18,429"
          title="Active Validators"
          metric="+8% from last month"
          icon="file"
        />
        <MetricsCard
          value="247"
          title="Active Researchers"
          metric="+5.4% from yesterday"
          icon="token"
        />
        <MetricsCard
          value="$700K"
          title="Total Revenue"
          metric="+0.2% this quarter"
          icon="token"
        />
        <MetricsCard
          value="24"
          title="Vulnerabilities Found"
          metric="+12% from last month"
          icon="folder"
        />
        <MetricsCard
          value="24"
          title="Avg Completion Time"
          metric="+12% from last month"
          icon="folder"
        />
      </div>
      <div className="flex gap-4 justify-between flex-col md:flex-row">
        <div className="bg-dark-gray w-full max-h-[480px] rounded-[8px] p-6 pb-10">
          <h2 className="text-18 mb-3">Revenue Over Time</h2>
          <RevenueData />
        </div>
        <div className="bg-dark-gray w-full max-h-[480px] rounded-[8px] p-6 pb-10">
          <h2 className="text-18 mb-3">Revenue Over Time</h2>
          <UserGrowthChart />
        </div>
      </div>
      <div className="flex gap-4 justify-between flex-col md:flex-row">
        <div className="bg-dark-gray w-full min-h-[400px] rounded-[8px] p-6">
          <SeverityChart />
        </div>
        <div className="bg-dark-gray w-full min-[400px] rounded-[8px] p-6">
          <h2 className="text-18">Recent Activity</h2>
          <div className="flex items-center gap-3 mt-4 border-b border-dark-border-gray py-3">
            <span className="bg-blue-ball rounded-full h-2 w-2" />
            <div className="">
              <h4>Smart contract update deployed</h4>
              <span className="text-gray-text">2 hours ago</span>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-4 border-b border-dark-border-gray py-3">
            <span className="bg-blue-ball rounded-full h-2 w-2" />
            <div className="">
              <h4>High dispute resolution queue</h4>
              <span className="text-gray-text">15 minutes ago</span>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-4 border-b border-dark-border-gray py-3">
            <span className="bg-blue-ball rounded-full h-2 w-2" />
            <div className="">
              <h4>Token issuance completed</h4>
              <span className="text-gray-text">5 minutes ago</span>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-4 py-3">
            <span className="bg-blue-ball rounded-full h-2 w-2" />
            <div className="">
              <h4>Scheduled maintenance planned</h4>
              <span className="text-gray-text">1 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

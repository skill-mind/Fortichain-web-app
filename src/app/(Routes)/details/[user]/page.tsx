import Image from "next/image";
import avatar from "../../../../..//public/Ellipse 1.svg";
import ValidatorResearcherCard from "./component/validator-researcher-card";
export default function Page() {
  return (
    <div className="text-white-text">
      <span className="bg-dark-gray-pop rounded-full px-3 py-1 ">
        Researcher Profile
      </span>
      <div className="mt-3 md:grid md:grid-cols-3 gap-3 flex flex-col">
        <div className="border border-dark-border-gray rounded-[8px] p-6 grid gap-6">
          <h3>Researcher</h3>
          <div className="flex items-center gap-3">
            <Image src={avatar} alt="pririty type" />
            <div>
              <h3>Ebube</h3>
              <h5 className="text-gray-text text-[12px] break-all">
                0x4A7d5cB67eA4F6e4B7cC3B3aE3f8fD9bB2cF9a1B
              </h5>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-3">
          <div className="border w-1/2 border-dark-border-gray rounded-[8px] p-6 grid gap-6">
            <h3>Ranking</h3>
            <h3>2</h3>
          </div>
          <div className="border w-1/2 border-dark-border-gray rounded-[8px] p-6 grid gap-6">
            <h3>Reports</h3>
            <h3>2</h3>
          </div>
        </div>
        <div className="border border-dark-border-gray rounded-[8px] p-6 grid gap-6">
          <h3>Researcher</h3>

          <div>
            <h3>92.42%</h3>
            <span className="w-full h-1.5 rounded-full bg-percentage-bg block mt-2">
              <span className="bg-blue-ball rounded-full w-[92.4%] block h-1.5" />
            </span>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h3>Reports</h3>
        <span className="text-gray-text">
          Note: You are viewing only reports on your project
        </span>
        <div className="mt-3 justify-between flex-wrap gap-3 grid grid-cols-1 md:grid-cols-2">
          <ValidatorResearcherCard />
          <ValidatorResearcherCard />
          <ValidatorResearcherCard />
          <ValidatorResearcherCard />
        </div>
      </div>
    </div>
  );
}

import { ArrowUp } from "@/icons/arrowUp";

export default function Explore() {
  return (
    <section className="py-28 px-5 border-y border-dark-border-gray text-center flex items-center flex-col gap-9">
      <div className=" md:w-1/2 mx-auto">
        <h2 className="text-[32px]">Explore FortiChain In Three Ways</h2>
        <span className="text-gray-text text-18">
          Choose your path, whether you&lsquo;re launching a project, validating
          disclosures, or hunting for bugs, FortiChain provides the tools you
          need to collaborate, secure, and earn on-chain.
        </span>
      </div>
      <div className="xl:w-4/5  mx-auto rounded-[8px] md:p-10 gap-10 flex flex-col mt-6 items-center">
        <div className="flex justify-between items-center gap-6 flex-col xl:flex-row">
          <div className=" border border-dark-border-gray flex flex-col gap-6 rounded-[8px] min-h-[420px] justify-end text-start p-10">
            <div className="grid gap-3">
              <h3 className="text-2xl">Project Owner</h3>
              <span className="text-gray-text text-18">
                Submit your project, set bounty parameters, and manage
                vulnerability reports through a transparent, decentralized
                system designed to keep your code secure.
              </span>
            </div>
            <button
              className="p-[2px] w-full min-h-[50px] text-white-text bg-sky-blue-border rounded-full font-walsheim font-extralight"
              type="button"
            >
              <div className="bg-gradient-to-r pl-4 from-[#1D74F9] flex items-center gap-2.5 p-2 justify-between to-[#092650] rounded-full h-full w-full">
                <span>Launch app </span>
                <span className="bg-[#0073E6] rounded-full w-9 h-9 font-normal grid place-content-center">
                  <ArrowUp />
                </span>
              </div>
            </button>
          </div>
          <div className=" border border-dark-border-gray flex flex-col gap-6 rounded-[8px] min-h-[420px] justify-end text-start p-10">
            <div className="grid gap-3">
              <h3 className="text-2xl">Security Researcher</h3>
              <span className="text-gray-text text-18">
                Review and validate disclosed vulnerabilities, contributing to
                an ecosystem of credibility and security while earning rewards
                for accurate assessments.
              </span>
            </div>
            <button
              className="p-[2px] w-full min-h-[50px] text-white-text bg-sky-blue-border rounded-full font-walsheim font-extralight"
              type="button"
            >
              <div className="bg-gradient-to-r pl-4 from-[#1D74F9] flex items-center gap-2.5 p-2 justify-between to-[#092650] rounded-full h-full w-full">
                <span>Launch app </span>
                <span className="bg-[#0073E6] rounded-full w-9 h-9 font-normal grid place-content-center">
                  <ArrowUp />
                </span>
              </div>
            </button>
          </div>
          <div className=" border border-dark-border-gray flex flex-col gap-6 rounded-[8px] min-h-[420px] justify-end text-start p-10">
            <div className="grid gap-3">
              <h3 className="text-2xl">Validator</h3>
              <span className="text-gray-text text-18">
                Discover bugs, claim bounties. Report real vulnerabilities
                directly to projects, build your reputation on-chain, and earn
                fair, fast rewards for your critical finding
              </span>
            </div>
            <button
              className="p-[2px] w-full min-h-[50px] text-white-text bg-sky-blue-border rounded-full font-walsheim font-extralight"
              type="button"
            >
              <div className="bg-gradient-to-r pl-4 from-[#1D74F9] flex items-center gap-2.5 p-2 justify-between to-[#092650] rounded-full h-full w-full">
                <span>Launch app </span>
                <span className="bg-[#0073E6] rounded-full w-9 h-9 font-normal grid place-content-center">
                  <ArrowUp />
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

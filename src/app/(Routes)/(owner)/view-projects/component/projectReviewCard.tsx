import { Project } from "@/util/types";
import Image from "next/image";
import avatar from "../../../../../../public/Ellipse 1.svg";
import AuditRating from "./rating";

export default function ProjectReviewCard({
  report,
  type,
}: {
  report: Project;
  type: string;
}) {
  return (
    <div
      className="border
       border-dark-border-gray
  bg-dark-gray rounded-[8px] min-h-52 p-4 flex flex-col md:grid gap-3.5"
    >
      <div className="flex items-center gap-1">
        <h5>{type === "researcher" ? "Researcher" : "Validator"}</h5>
      </div>
      <div className="border-b border-dark-border-gray pb-6 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <Image src={avatar} alt="pririty type" />
          <div>
            <h3>{report.researcher?.name}</h3>
            <h5 className="text-gray-text text-[12px] break-all">
              {report.researcher?.address}
            </h5>
          </div>
        </div>
        <div className="flex justify-start md:justify-between md:items-center gap-3 flex-wrap">
          <div className="bg-dark-gray-pop rounded-full w-fit py-2 px-3 flex gap-1 items-center">
            <span className="text-gray-text border-r border-gray-text pr-2">
              Rank
            </span>
            <span className="text-[12px]">
              {report.researcher?.validationsMade}
            </span>
          </div>
          <div className="bg-dark-gray-pop rounded-full w-fit py-2 px-3 flex gap-1 items-center">
            <span className="text-gray-text border-r border-gray-text pr-2">
              {type === "researcher" ? "Audits Made" : "Validations Made"}
            </span>
            <span className="text-[12px]">
              {report.researcher?.totalAudits}
            </span>
          </div>
          <div className="bg-dark-gray-pop rounded-full w-fit py-2 px-3 flex gap-1 items-center">
            <span className="text-gray-text border-r border-gray-text pr-2">
              Reputation
            </span>
            <span className="text-[12px]">
              {report.researcher?.reputation}%
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center my-3 bg-dark-gray-bt py-3 px-6">
        <h3>View Report</h3>

        <button
          className="w-fit min-h-11 p-0.5 group             
     hover:from-sky-blue-border hover:to-sky-blue-border
     bg-gradient-to-r group to-[#312F2F] from-[#212121]
 rounded-full group"
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
      <section className="flex flex-col  md:grid gap-7 bg-dark-gray-bt rounded-[8px] h-fit p-6">
        <div className="flex justify-center md:justify-between items-center flex-col md:flex-row gap-2">
          <div className="flex-col-reverse md:flex-row flex justify-between items-stretch gap-2 md:w-fit  w-full">
            <h3>Smart Contract Report</h3>
            <span className="hidden md:block w-0.5 bg-white" />
            <h4 className="text-gray-text md:border-0 border-b border-dark-border-gray md:p-0 pb-3">
              17th - Aug - 2025
            </h4>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`text-blue-ball bg-pririty-low-bg rounded-full py-1.5 px-3 text-sm`}
            >
              Priority: Low
            </span>
            <span
              className={`text-warning-text bg-warning-bg rounded-full py-1.5 px-3 text-sm`}
            >
              Priority: Medium
            </span>
            <span
              className={`text-pririty-high-text bg-pririty-high-bg rounded-full py-1.5 px-3 text-sm`}
            >
              Priority: High
            </span>
          </div>
        </div>
        <p>
          This report presents the findings of a security audit conducted on the
          Fortichain smart contracts. Fortichain is a decentralized platform
          aimed at enhancing blockchain security through streamlined
          vulnerability disclosure and bug bounty programs. The audit focused on
          the core smart contracts responsible for bug submission, validation,
          bounty distribution, and patch verification.
        </p>
        <ul className="list-disc pl-4">
          <li>
            Audit Scope: Core contracts including BugBounty.sol,
            ValidatorConsensus.sol, and BountyEscrow.sol.
          </li>
          <li>
            Audit Duration: Simulated over 2 weeks (based on typical audit
            timelines).
          </li>
          <li>
            Overall Security Posture: Medium-High. The contracts demonstrate
            good adherence to best practices, but improvements are recommended
            for robustness.
          </li>
        </ul>

        <div>
          <h4 className="text-gray-text">
            The following contracts were reviewed:
          </h4>
          <ul className="mt-4 list-disc pl-4">
            <li>
              BugBounty.sol: Handles vulnerability submissions and initial
              encryption.
            </li>
            <li>
              ValidatorConsensus.sol: Manages validator reviews, voting, and
              consensus on bug validity.
            </li>
          </ul>
        </div>
        <div>
          <h3>Methodology</h3>
          <h4 className="text-gray-text">
            The audit followed a structured approach:
          </h4>
          <ul className="mt-4 list-disc pl-4">
            <li>
              BugBounty.sol: Handles vulnerability submissions and initial
              encryption.
            </li>
            <li>
              Static Analysis: Using tools like Slither to detect patterns.
            </li>
            <li>
              Dynamic Testing: Fuzzing and unit tests to simulate edge cases.
            </li>
            <li>
              Threat Modeling: Considering attacker models such as malicious
              validators or submitters.
            </li>
            <li>
              Best Practices Check: Alignment with SWC (Smart Contract Weakness
              Classification) registry.
            </li>
          </ul>
        </div>
        <div>
          <h3>Findings</h3>
          <h4 className="text-gray-text">
            Findings are categorized by severity:
          </h4>
          <ul className="mt-4">
            <div className="flex items-center gap-2">
              <span className="bg-pririty-high-text h-2 w-0.5" />
              <li>
                High: Potential for exploitation under certain conditions.
              </li>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-warning h-2 w-0.5" />
              <li>
                Medium: Issues that could lead to inefficiencies or minor risks.
              </li>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-blue-ball h-2 w-0.5" />
              <li>Low: Optimization suggestions or informational notes.</li>
            </div>
          </ul>
        </div>
        <div className="gap-6 border border-dark-border-gray px-6 overflow-x-scroll scrollbar-hide">
          <table className="min-w-[600px]">
            <thead>
              <tr className="text-gray-text grid grid-cols-[1fr_2fr_3fr] items-start border-b border-dark-border-gray py-3">
                <th className="text-start">Severity</th>

                <th className="text-start">Title</th>

                <th className="text-start">Description</th>
              </tr>
            </thead>
            <tbody className="odd:border-b odd:border-dark-border-gray text-white-text">
              <tr className="border-b border-dark-border-gray py-3 gap-2 p-3 grid grid-cols-[1fr_2fr_3fr]">
                <td className="flex items-center h-fit gap-1 ">
                  <span className="bg-pririty-high-text h-2 w-0.5" />
                  <span>High</span>
                </td>
                <td>Potential Reentrancy in Bounty Payout</td>
                <td>
                  In BountyEscrow.sol, the payout function calls external
                  contracts before updating state, risking reentrancy.
                  Recommendation: Implement Checks-Effects-Interactions pattern.
                  No exploits found in testing, but fixed in v1.1.
                </td>
              </tr>
              <tr className="border-b border-dark-border-gray py-3 gap-2 p-3 grid grid-cols-[1fr_2fr_3fr]">
                <td className="flex items-center h-fit gap-1">
                  <span className="bg-warning h-2 w-0.5" />
                  <span>Medium</span>
                </td>
                <td>Insufficient Access Control for Validator Registration</td>
                <td>
                  ValidatorConsensus.sol allows self-registration without strict
                  KYC or reputation checks, potentially allowing sybil attacks.
                  Suggestion: Integrate reputation scores or staking
                  requirements.
                </td>
              </tr>
              <tr className="border-b border-dark-border-gray py-3 gap-2 p-3 grid grid-cols-[1fr_2fr_3fr]">
                <td className="flex items-center h-fit gap-1">
                  <span className="bg-warning h-2 w-0.5" />
                  <span>Medium</span>
                </td>
                <td>Gas Inefficiency in Consensus Voting Loop</td>
                <td>
                  Looping over large validator sets in on-chain voting could
                  exceed gas limits. Optimize by using off-chain aggregation or
                  pagination.
                </td>
              </tr>
              <tr className="border-b border-dark-border-gray py-3 gap-2 p-3 grid grid-cols-[1fr_2fr_3fr]">
                <td className="flex items-center h-fit gap-1">
                  <span className="bg-blue-ball h-2 w-0.5" />
                  <span>Low</span>
                </td>
                <td>Unused Variables in Bug Submission</td>
                <td>
                  BugBounty.sol has redundant variables for timestamp logging,
                  increasing deployment costs. Remove or repurpose.
                </td>
              </tr>
              <tr className="gap-2 p-3 grid grid-cols-[1fr_2fr_3fr]">
                <td className="flex items-center h-fit gap-1">
                  <span className="bg-blue-ball h-2 w-0.5" />
                  <span>Low</span>
                </td>
                <td>Lack of Event Emissions in Key Functions</td>
                <td>
                  Several state-changing functions (e.g., patch verification) do
                  not emit events, reducing traceability. Add events for better
                  monitoring.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3 className="text-gray-text">Findings summary:</h3>
          <div className="grid grid-cols-3 gap-3 mt-3">
            <div className="flex flex-col py-3 items-center justify-between h-24 rounded-[8px] bg-pririty-high-bg">
              <span>High</span>
              <span className="text-pririty-high-text">1</span>
            </div>
            <div className="flex flex-col py-3  items-center justify-between h-24 rounded-[8px] bg-warning-bg">
              <span>Medium</span>
              <span className="text-warning-text">2</span>
            </div>
            <div className="flex flex-col  py-3  items-center justify-between h-24 rounded-[8px] bg-pririty-low-bg">
              <span>Low</span>
              <span className="text-blue-ball">2</span>
            </div>
          </div>
        </div>
        <div>
          <h3>Recommendationss</h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-3">
              <span className="text-good text-lg ">✓</span>
              <span>
                Conduct Follow-Up Audit: After addressing findings, perform a
                re-audit to verify fixes.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-good text-lg">✓</span>
              <span>
                Implement Formal Verification: Use tools like Certora for
                mathematical proofs on critical functions.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-good text-lg">✓</span>
              <span>
                Bug Bounty Program: Ironically, leverage Fortichain&apos;s own
                platform for ongoing security incentives.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-good text-lg">✓</span>
              <span>
                Gas Optimization: Profile contracts under high load to ensure
                scalability.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-good text-lg ">✓</span>
              <span>
                Documentation: Enhance code comments and provide a security
                whitepaper.
              </span>
            </li>
          </ul>
        </div>
        <div className="grid gap-3">
          <h3>Conclusion</h3>
          <p>
            The Fortichain smart contracts are well-designed with a focus on
            decentralization and automation, aligning with the platform&apos;s
            mission to improve Web3 security. While no critical issues were
            found, addressing the medium and low-severity findings will further
            strengthen the system. The team demonstrated responsiveness during
            the audit process. This report is generic and based on typical smart
            contract patterns observed in similar projects. For a real audit,
            access to actual source code and deployment details is required.
          </p>
        </div>
        <div className="flex justify-between items-center text-sm flex-wrap gap-3 md:gap-0">
          <div className="flex items-center gap-1">
            <span className="text-gray-text">Audited:</span>
            <span className="bg-dark-gray-pop rounded-full px-3 py-1 ">
              17th - Aug - 2025
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-text">Researcher:</span>
            <span className="bg-dark-gray-pop rounded-full px-3 py-1">
              Ebube
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-text">Validator:</span>
            <span className="bg-dark-gray-pop rounded-full px-3 py-1">
              Yunus
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-text">Tools Used:</span>
            <span className="bg-dark-gray-pop rounded-full px-3 py-1">
              Slither
            </span>
            <span className="bg-dark-gray-pop rounded-full px-3 py-1">
              Mythril
            </span>
          </div>
        </div>
        <AuditRating />
      </section>
    </div>
  );
}

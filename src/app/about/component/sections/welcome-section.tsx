import { Shield, DollarSign, Eye } from "lucide-react";

export function WelcomeSection() {
  return (
    <div className="max-w-4xl space-y-12">
      <div className="space-y-6">
        <h1 className="text-4xl lg:text-5xl font-bold text-balance leading-tight">
          Welcome to FortiChain: Powering a Decentralized Future
        </h1>

        <p className="text-lg text-gray-300 leading-relaxed">
          In a world increasingly defined by decentralized systems, smart
          contracts, and Web3 innovation, one challenge remains critically
          under-addressed: vulnerability disclosure and responsible security
          collaboration. Enter FortiChain — a decentralized vulnerability
          disclosure and bounty platform built to empower Project Owners,
          Security Researchers, and Validators in a trustless, transparent, and
          incentivized ecosystem.
        </p>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Why FortiChain?</h2>

        <div className="space-y-6">
          <p className="text-gray-300 leading-relaxed">
            Too often, ethical hackers are ignored or underpaid. Projects delay
            or avoid fixing reported bugs. And there's no universally trusted
            way to validate a submission without compromising security.
          </p>

          <p className="text-gray-300 italic">FortiChain bridges that gap.</p>

          <p className="text-gray-300 leading-relaxed">
            By leveraging smart contracts, ZK verification, and an ecosystem of
            independent validators, FortiChain offers:
          </p>

          <div className="space-y-4 ml-6">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
              <span className="text-gray-300">
                Trustless security disclosures
              </span>
            </div>

            <div className="flex items-start gap-3">
              <DollarSign className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
              <span className="text-gray-300">Incentivized bug bounties</span>
            </div>

            <div className="flex items-start gap-3">
              <Eye className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
              <span className="text-gray-300">
                Transparent validation and rewards
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

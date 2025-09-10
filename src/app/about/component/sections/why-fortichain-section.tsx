export function WhyFortiChainSection() {
  return (
    <div className="max-w-4xl space-y-8">
      <h1 className="text-4xl lg:text-5xl font-bold">Why FortiChain?</h1>

      <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed">
          Too often, ethical hackers are ignored or underpaid. Projects delay or
          avoid fixing reported bugs. And there's no universally trusted way to
          validate a submission without compromising security.
        </p>

        <p className="text-gray-300 italic">FortiChain bridges that gap.</p>

        <p className="text-gray-300 leading-relaxed">
          By leveraging smart contracts, ZK verification, and an ecosystem of
          independent validators, FortiChain offers:
        </p>

        <div className="space-y-4 ml-6">
          <div className="flex items-start gap-3">
            <span className="text-red-400">🛡️</span>
            <span className="text-gray-300">
              Trustless security disclosures
            </span>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-yellow-400">💰</span>
            <span className="text-gray-300">Incentivized bug bounties</span>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-orange-400">👁️</span>
            <span className="text-gray-300">
              Transparent validation and rewards
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WhoIsFortiChainSection() {
  return (
    <div className="max-w-4xl space-y-12">
      <h1 className="text-4xl lg:text-5xl font-bold">Who Is FortiChain For?</h1>

      <div className="space-y-12">
        {/* Project Owners */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Project Owners</h2>
          <p className="text-gray-300 leading-relaxed">
            Want to keep your smart contracts safe and compliant? Post your
            project, define bounty tiers, and receive validated vulnerability
            reports — all on-chain and secure.
          </p>
          <blockquote className="border-l-4 border-gray-600 pl-4 italic text-gray-400">
            "We no longer need to rely on private emails or trust third parties.
            FortiChain brings clarity, accountability, and real-time response to
            our security process." — DeFi Protocol Founder
          </blockquote>
        </div>

        {/* Security Researchers */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Security Researchers</h2>
          <p className="text-gray-300 leading-relaxed">
            Submit vulnerabilities anonymously, track progress transparently,
            and earn rewards — with cryptographic proof of submission and
            validation.
          </p>
          <blockquote className="border-l-4 border-gray-600 pl-4 italic text-gray-400">
            "Finally, a platform that values ethical hackers and ensures we get
            paid fairly — without legal threats or ghosting." — Top 10 Web3
            Whitehat
          </blockquote>
        </div>

        {/* Validators */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Validators</h2>
          <p className="text-gray-300 leading-relaxed">
            Join as a trusted node to review disclosures, vote on validity, and
            earn a share of rewards for maintaining the network's integrity.
          </p>
          <blockquote className="border-l-4 border-gray-600 pl-4 italic text-gray-400">
            "Validation is no longer politics or closed-door — it's
            decentralized and verifiable by all." — Validator Node Operator
          </blockquote>
        </div>
      </div>
    </div>
  );
}

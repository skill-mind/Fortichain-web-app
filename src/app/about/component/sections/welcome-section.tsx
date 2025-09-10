export function WelcomeSection() {
  return (
    <div className="max-w-4xl space-y-12">
      <div className="space-y-6">
        <h1 className="text-xl lg:text-2xl font-bold text-balance">
          Welcome to FortiChain: Powering a Decentralized Future
        </h1>

        <p className="text-base">
          In a world increasingly defined by decentralized systems, smart
          contracts, and Web3 innovation, one challenge remains critically
          under-addressed: vulnerability disclosure and responsible security
          collaboration. Enter FortiChain — a decentralized vulnerability
          disclosure and bounty platform built to empower Project Owners,
          Security Researchers, and Validators in a trustless, transparent, and
          incentivized ecosystem.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl xl:text-2xl font-bold">Why FortiChain?</h2>

        <div className="space-y-2">
          <p className="text-base">
            Too often, ethical hackers are ignored or underpaid. Projects delay
            or avoid fixing reported bugs. And there&apos;s no universally
            trusted way to validate a submission without compromising security.
          </p>

          <p className="text-base text-gray-text">
            FortiChain bridges that gap.
          </p>

          <p className="text-base">
            By leveraging smart contracts, ZK verification, and an ecosystem of
            independent validators, FortiChain offers:
          </p>

          <ul className="space-y-4 ml-6  list-decimal">
            <li className="flex items-center gap-3">
              <span className="bg-white-text h-2 w-2 rounded-full" />
              <span className="text-2xl">🛡️</span>
              <span className="">Trustless security disclosures</span>
            </li>

            <li className="flex items-center gap-3">
              <span className="bg-white-text h-2 w-2 rounded-full" />
              <span className="text-2xl"> 💰</span>
              <span className="">Incentivized bug bounties</span>
            </li>

            <li className="flex items-center gap-3">
              <span className="bg-white-text h-2 w-2 rounded-full" />
              <span className="text-2xl"> 🧑‍⚖️ </span>
              <span className="">Transparent validation and rewards</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

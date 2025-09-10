export function WhyStarknetSection() {
  return (
    <div className="max-w-4xl space-y-3">
      <h1 className="text-xl lg:text-2xl font-bold">Why Starknet?</h1>

      <div className="space-y-8">
        <p className="text-18">
          We chose to build on Starknet for several compelling reasons:
        </p>

        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-gray-300 leading-relaxed">
              <span className=" text-xl font-semibold ">1.</span>
              <span className="text-xl font-semibold ">Scalability: </span>
              Starknet&lsquo;s Layer 2 solution provides the high throughput
              needed for a robust ecosystem of security activities without
              prohibitive gas fees.
            </p>
          </div>

          <p className="text-gray-300 leading-relaxed">
            <span className=" text-xl font-semibold ">2.</span>
            <span className="text-xl font-semibold ">Security: </span>
            As a ZK-Rollup, Starknet inherits Ethereum&lsquo;s security while
            enabling the complex operations required for our platform.
          </p>

          <p className="text-gray-300 leading-relaxed">
            <span className=" text-xl font-semibold ">3.</span>
            <span className="text-xl font-semibold ">Developer Focus: </span>
            Starknet has a strong focus on developer tools and smart contract
            security, making it an ideal ecosystem for a security-focused
            platform.
          </p>

          <p className="text-gray-300 leading-relaxed">
            <span className=" text-xl font-semibold ">4.</span>
            <span className="text-xl font-semibold ">Growing Ecosystem: </span>
            Starknet&lsquo;s ecosystem is rapidly expanding, creating an
            opportunity to establish security best practices early in its
            evolution.
          </p>

          <p className="text-gray-300 leading-relaxed">
            <span className=" text-xl font-semibold ">5.</span>
            <span className="text-xl font-semibold ">
              Cairo Programming Language:
            </span>
            Cairo&lsquo;s provable computation model offers unique advantages
            for verifiability and security that align with our platform&apos;s
            goals.
          </p>
        </div>

        <blockquote className="text-gray-text">
          &quot;We no longer need to rely on private emails or trust third
          parties. FortiChain brings clarity, accountability, and real-time
          response to our security process.&quot; — DeFi Protocol Founder
        </blockquote>

        <div className="space-y-3">
          <h2 className="text-xl lg:text-2xl font-bold">
            Explore FortiChain in Three Ways
          </h2>
          <p className="text-base">
            Whether you&lsquo;re building, securing, or validating the future —
            FortiChain gives you the tools to do it your way.
          </p>

          <div className="space-y-3 ml-3">
            <div>
              <a
                href="#"
                className="text-blue-ball hover:text-blue-300 transition-colors"
              >
                • Launch Your Bounty Program
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-blue-ball hover:text-blue-300 transition-colors"
              >
                • Start Reporting Vulnerabilities
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-blue-ball hover:text-blue-300 transition-colors"
              >
                • Become a FortiChain Validator
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

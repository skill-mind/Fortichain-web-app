export function WhyStarknetSection() {
  return (
    <div className="max-w-4xl space-y-12">
      <h1 className="text-4xl lg:text-5xl font-bold">Why Starknet?</h1>

      <div className="space-y-8">
        <p className="text-gray-300 leading-relaxed">
          We chose to build on Starknet for several compelling reasons:
        </p>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">
              <span className="text-blue-400">1.</span> Scalability:
            </h3>
            <p className="text-gray-300 leading-relaxed ml-6">
              Starknet's Layer 2 solution provides the high throughput needed
              for a robust ecosystem of security activities without prohibitive
              gas fees.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">
              <span className="text-blue-400">2.</span> Security:
            </h3>
            <p className="text-gray-300 leading-relaxed ml-6">
              As a ZK-Rollup, Starknet inherits Ethereum's security while
              enabling the complex operations required for our platform.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">
              <span className="text-blue-400">3.</span> Developer Focus:
            </h3>
            <p className="text-gray-300 leading-relaxed ml-6">
              Starknet has a strong focus on developer tools and smart contract
              security, making it an ideal ecosystem for a security-focused
              platform.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">
              <span className="text-blue-400">4.</span> Growing Ecosystem:
            </h3>
            <p className="text-gray-300 leading-relaxed ml-6">
              Starknet's ecosystem is rapidly expanding, creating an opportunity
              to establish security best practices early in its evolution.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">
              <span className="text-blue-400">5.</span> Cairo Programming
              Language:
            </h3>
            <p className="text-gray-300 leading-relaxed ml-6">
              Cairo's provable computation model offers unique advantages for
              verifiability and security that align with our platform's goals.
            </p>
          </div>
        </div>

        <blockquote className="border-l-4 border-gray-600 pl-4 italic text-gray-400">
          "We no longer need to rely on private emails or trust third parties.
          FortiChain brings clarity, accountability, and real-time response to
          our security process." — DeFi Protocol Founder
        </blockquote>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold">
            Explore FortiChain in Three Ways
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Whether you're building, securing, or validating the future —
            FortiChain gives you the tools to do it your way.
          </p>

          <div className="space-y-3 ml-6">
            <div>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                • Launch Your Bounty Program
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                • Start Reporting Vulnerabilities
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors"
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

export function WhatsNextSection() {
  return (
    <div className="max-w-4xl space-y-12">
      <h1 className="text-4xl lg:text-5xl font-bold">What's Next?</h1>

      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            This is just the beginning. Our roadmap includes:
          </p>

          <ul className="space-y-2 ml-6 text-gray-300">
            <li>• NFT-based whitehat credentials</li>
            <li>• AI-powered vulnerability triaging</li>
            <li>• Cross-chain disclosure support</li>
            <li>• Native DAO governance</li>
          </ul>

          <p className="text-gray-300 leading-relaxed">
            Join the FortiChain movement. Let's make security open, fair, and
            decentralized — together.
          </p>
        </div>

        <blockquote className="border-l-4 border-gray-600 pl-4 italic text-gray-400">
          "The Starknet Foundation supports projects like FortiChain because
          they push the boundaries of what's possible in decentralized security
          infrastructure." — Starknet Foundation Representative
        </blockquote>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Learn More:</h2>
          <p className="text-gray-300 leading-relaxed">
            FortiChain — The future of decentralized cybersecurity starts here.
          </p>

          <div className="space-y-3 ml-6">
            <div>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                • Read Our Documentation
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                • Join the community on X
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                • Api licensing
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

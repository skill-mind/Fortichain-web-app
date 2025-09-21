import Link from "next/link";

export function WhatsNextSection() {
  return (
    <div className="max-w-4xl space-y-3">
      <h1 className="text-xl lg:text-2xl font-bold">What&apos;s Next?</h1>

      <div className="space-y-8">
        <div className="space-y-2">
          <p className="text-base">
            This is just the beginning. Our roadmap includes:
          </p>

          <ul className="space-y-2 ml-6 text-gray-300">
            <li>• NFT-based whitehat credentials</li>
            <li>• AI-powered vulnerability triaging</li>
            <li>• Cross-chain disclosure support</li>
            <li>• Native DAO governance</li>
          </ul>

          <p className="text-gray-300 leading-relaxed">
            Join the FortiChain movement. Let&apos;s make security open, fair,
            and decentralized — together.
          </p>
        </div>

        <blockquote className="text-gray-text">
          &quot;The Starknet Foundation supports projects like FortiChain
          because they push the boundaries of what&apos;s possible in
          decentralized security infrastructure.&quot; — Starknet Foundation
          Representative
        </blockquote>

        <div className="space-y-2">
          <h2 className="text-xl lg:text-2xl font-bold">Learn More:</h2>
          <p className="text-base">
            FortiChain — The future of decentralized cybersecurity starts here.
          </p>

          <div className="space-y-3 ml-6">
            <div>
              <a
                href="#"
                className="text-blue-ball hover:text-blue-300 transition-colors"
              >
                • Read Our Documentation
              </a>
            </div>
            <div>
              <Link
                className="text-blue-ball hover:text-blue-300 transition-colors"
                href="https://x.com/Fortichain3"
                target="_blank"
              >
                • Join the community on X
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

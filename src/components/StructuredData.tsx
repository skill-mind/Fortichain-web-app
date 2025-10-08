export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "FortiChain",
    description:
      "Enhance blockchain security through automated vulnerability disclosure and bug bounty processes. Trustless, transparent, and secure smart contract auditing on FortiChain.",
    url: "https://forti-chain.xyz/",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web Browser",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

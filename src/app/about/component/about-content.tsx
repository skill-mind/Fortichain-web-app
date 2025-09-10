import { WelcomeSection } from "./sections/welcome-section";
import { WhoIsFortiChainSection } from "./sections/who-is-fortichain-section";
import { WhyStarknetSection } from "./sections/why-starknet-section";
import { WhatsNextSection } from "./sections/whats-next-section";

interface AboutContentProps {
  currentSection: number;
}

export function AboutContent({ currentSection }: AboutContentProps) {
  const sections = [
    <WelcomeSection key="welcome" />,
    <WhoIsFortiChainSection key="why-fortichain" />,
    <WhyStarknetSection key="why-starknet" />,
    <WhatsNextSection key="whats-next" />,
  ];

  return <div className="p-6 lg:p-12 pb-24">{sections[currentSection]}</div>;
}

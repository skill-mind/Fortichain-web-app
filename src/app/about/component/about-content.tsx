import { WelcomeSection } from "./sections/welcome-section";
import { WhyFortiChainSection } from "./sections/why-fortichain-section";
import { WhoIsFortiChainSection } from "./sections/who-is-fortichain-section";
import { WhyStarknetSection } from "./sections/why-starknet-section";
import { WhatsNextSection } from "./sections/whats-next-section";

interface AboutContentProps {
  currentSection: number;
}

export function AboutContent({ currentSection }: AboutContentProps) {
  const sections = [
    <WelcomeSection key="welcome" />,
    <WhyFortiChainSection key="why-fortichain" />,
    <WhoIsFortiChainSection key="who-is-fortichain" />,
    <WhyStarknetSection key="why-starknet" />,
    <WhatsNextSection key="whats-next" />,
  ];

  return <div className="p-6 lg:p-12 pb-24">{sections[currentSection]}</div>;
}

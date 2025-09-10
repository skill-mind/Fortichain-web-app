"use client";

import { useState } from "react";
import { AboutNavigation } from "./about-navigation";
import { AboutContent } from "./about-content";

const sections = [
  "Welcome",
  "Why FortiChain?",
  "Who Is FortiChain For?",
  "Why Starknet?",
  "What's Next?",
];

export function AboutUsPage({
  currentSection,
  setCurrentSection,
}: {
  currentSection: number;
  setCurrentSection: (section: number) => void;
}) {
  return (
    <div className="flex gap-10 h-[550px] scrollbar-hide">
      <AboutNavigation
        sections={sections}
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
      />
      <main className="overflow-y-scroll scrollbar-hide">
        <div className="relative">
          <AboutContent currentSection={currentSection} />
        </div>
      </main>
    </div>
  );
}

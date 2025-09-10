"use client";

import { cn } from "@/lib/utils";

interface AboutNavigationProps {
  sections: string[];
  currentSection: number;
  onSectionChange: (index: number) => void;
}

export function AboutNavigation({
  sections,
  currentSection,
  onSectionChange,
}: AboutNavigationProps) {
  const navigationItems = [
    {
      title: "Welcome",
      items: ["Why FortiChain?"],
    },
    {
      title: "Who Is FortiChain For?",
      items: ["Project Owners", "Security Researchers", "Validators"],
    },
    {
      title: "Why Starknet",
      items: ["Project Owners", "Security Researchers", "Validators"],
    },
    {
      title: "What's Next",
      items: ["Learn More"],
    },
  ];

  return (
    <aside className="w-fit overflow-y-auto lg:block hidden">
      <nav className="p-6 space-y-8">
        {navigationItems.map((section, sectionIndex) => (
          <div key={section.title} className="space-y-4">
            <button
              onClick={() => onSectionChange(sectionIndex)}
              className={cn(
                "block text-left text-lg font-medium transition-colors hover:text-white",
                currentSection === sectionIndex
                  ? "text-white border-b border-white pb-1"
                  : "text-gray-400"
              )}
            >
              {section.title}
            </button>

            <div className="space-y-2 ml-4">
              {section.items.map((item, itemIndex) => (
                <button
                  key={item}
                  onClick={() => onSectionChange(sectionIndex)}
                  className={cn(
                    "block text-left text-sm transition-colors hover:text-gray-300",
                    currentSection === sectionIndex
                      ? "text-gray-300"
                      : "text-gray-500"
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}

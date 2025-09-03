"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Section {
  id: string;
  title: string;
}

interface SidebarProps {
  sections: Section[];
  activeSection: string;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  scrollToSection: (sectionId: string) => void;
}

export function Sidebar({
  sections,
  activeSection,
  sidebarOpen,
  setSidebarOpen,
  scrollToSection,
}: SidebarProps) {
  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="border border-dark-border-gray"
        >
          {sidebarOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed h-fit left-0 w-80 z-40 transform bg-main-bg transition-transform duration-300 ease-in-out lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6 h-full overflow-y-auto">
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-2">
              Fortichain Privacy Policy
            </h2>
            <h3 className="text-18 font-medium text-muted-foreground mb-6">
              Table of contents
            </h3>

            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    "block w-full text-left text-sm py-2 px-3 rounded-md transition-colors hover:text-accent-foreground",
                    activeSection === section.id
                      ? "underline text-primary-foreground font-medium"
                      : "text-muted-foreground"
                  )}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}

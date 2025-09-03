"use client";

import { usePrivacyNavigation } from "@/hooks/privacy-hook";
import { Sidebar } from "./component/sidebar";
import { PrivacyContent } from "./component/content";
import Image from "next/image";
import logo from "../../../public/Logo (2).svg";
export default function PrivacyPolicyPage() {
  const {
    sections,
    sidebarOpen,
    setSidebarOpen,
    activeSection,
    scrollToSection,
  } = usePrivacyNavigation();

  return (
    <section className="relative max-w-sit-screen mx-auto">
      <div className="px-3 py-5 border-t w-full text-center h-fit border-dark-border-gray items-center border-b flex justify-center">
        <Image src={logo} alt="fortichain" />
      </div>
      <div className="min-h-screen">
        <div className="flex text-white-text">
          <Sidebar
            sections={sections}
            activeSection={activeSection}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            scrollToSection={scrollToSection}
          />

          <main className="flex-1  px-4 sm:px-6 lg:px-8 py-8 max-w-4xl mx-auto">
            <PrivacyContent />
          </main>
        </div>
      </div>
    </section>
  );
}

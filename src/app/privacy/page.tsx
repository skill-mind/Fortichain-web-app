"use client";

import { usePrivacyNavigation } from "@/hooks/privacy-hook";
import { Sidebar } from "./component/sidebar";
import { PrivacyContent } from "./component/content";
import Image from "next/image";
import logo from "../../../public/Logo (2).svg";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
export default function PrivacyPolicyPage() {
  const {
    sections,
    sidebarOpen,
    setSidebarOpen,
    activeSection,
    scrollToSection,
  } = usePrivacyNavigation();

  return (
    <>
      <Nav />
      <section className="relative px-6 max-w-sit-screen mx-auto mt-36 ">
        <div className="min-h-screen">
          <div className="flex text-white-text justify-between">
            <Sidebar
              sections={sections}
              activeSection={activeSection}
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
              scrollToSection={scrollToSection}
            />

            <main className="px-6 sm:px-6 lg:pl-28 py-8 max-w-4xl mx-auto">
              <PrivacyContent />
            </main>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

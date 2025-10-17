"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "information-we-collect", title: "1. Information We Collect" },
  { id: "how-we-use-information", title: "2. How We Use Your Information" },
  { id: "sharing-information", title: "3. Sharing of Information" },
  { id: "data-security", title: "4. Data Security" },
  { id: "your-rights-choices", title: "5. Your Rights and Choices" },
  { id: "international-transfers", title: "6. International Data Transfers" },
  { id: "childrens-privacy", title: "7. Children's Privacy" },
  { id: "third-party-links", title: "8. Third-Party Links and Services" },
  { id: "changes-policy", title: "9. Changes to This Privacy Policy" },
  { id: "contact-us", title: "10. Contact Us" },
];

export function usePrivacyNavigation() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial active section
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Offset for fixed header/better positioning
      const elementTop = element.offsetTop + yOffset;

      window.scrollTo({
        top: elementTop,
        behavior: "smooth",
      });
    } else {
    }
    setSidebarOpen(false); // Close sidebar on mobile after clicking
  };

  return {
    sections,
    sidebarOpen,
    setSidebarOpen,
    activeSection,
    scrollToSection,
  };
}

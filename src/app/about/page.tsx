"use client";
import Image from "next/image";
import logo from "../../../public/Logo (2).svg";
import folder from "../../../public/data_informationv2_7 1.svg";
import { MoveLeft, MoveRight } from "lucide-react";
import Footer from "@/components/footer";
import { AboutUsPage } from "./component/about-us-page";
import { useState } from "react";
import Nav from "@/components/nav";

const sections = [
  "Welcome",
  "Who Is FortiChain For?",
  "Why Starknet?",
  "What's Next?",
];

export default function About() {
  const [currentSection, setCurrentSection] = useState(0);

  const handlePrevious = () => {
    setCurrentSection((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentSection((prev) => Math.min(sections.length - 1, prev + 1));
  };
  return (
    <>
      <Nav />
      <section className="relative max-w-sit-screen mx-auto xl:px-20 px-10 pt-20 grid gap-8">
        <div className="w-full bg-dark-gray mx-auto border border-dark-border-gray mt-20 rounded-[8px] py-14 flex items-center  justify-around p-6">
          <div className="space-y- grid gap-5 w-full md:max-w-80">
            <div className="bg-dark-gray px-6 py-3 rounded-full md:block hidden w-fit">
              Powered by Starknet
            </div>
            <h2 className="font-medium text-[48px]">FortiChain</h2>
            <p className="text-18 text-gray-text">
              Join a trustless, transparent bounty platform connecting
              researchers and projects with seamless on-chain payouts.
            </p>
          </div>
          <div className=" md:block hidden">
            <Image src={folder} alt="folder" />
          </div>
        </div>
        <AboutUsPage
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
        <div className="flex my-10 justify-end gap-6">
          <button
            className={`${
              currentSection === 0 ? "cursor-not-allowed" : ""
            } w-full sm:w-fit min-h-11 p-0.5 group             
          hover:from-sky-blue-border hover:to-sky-blue-border
          bg-gradient-to-r group to-[#312F2F] from-[#212121]
      rounded-full group`}
            type="button"
            onClick={handlePrevious}
            disabled={currentSection === 0}
          >
            <span
              className={`px-6 py-3 text-sm
              group-hover:from-sky-from group-hover:to-sky-to
              group-hover:bg-gradient-to-r bg-[#1C1C1C]
          flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full group-disabled:cursor-not-allowed`}
            >
              <MoveLeft />
              Previous
            </span>
          </button>
          <button
            className={`w-full sm:w-fit min-h-11 p-0.5 group             
          hover:from-sky-blue-border hover:to-sky-blue-border
          bg-gradient-to-r group to-[#312F2F] from-[#212121]
      rounded-full group ${
        currentSection === sections.length - 1 ? "cursor-not-allowed" : ""
      }`}
            type="button"
            onClick={handleNext}
            disabled={currentSection === sections.length - 1}
          >
            <span
              className="px-6 py-3 text-sm
              group-hover:from-sky-from group-hover:to-sky-to
              group-hover:bg-gradient-to-r bg-[#1C1C1C]
          flex items-center gap-2.5 p-2 group-disabled:cursor-not-allowed justify-center cursor-pointer  rounded-full h-10 w-full"
            >
              Next
              <MoveRight />
            </span>
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}

"use client";
import Image from "next/image";
import logo from "../../../public/Logo (2).svg";
import ProjectResearcherLauncher from "../project-researcher-louncher";
import ProjectValidatorLauncher from "../project-validator-launcher";
import { useContext } from "react";
import { Router } from "@/provider/route-provider";
import ProjectOwnerLauncher from "../project-owner-launch";
import { redirect } from "next/navigation";

export default function LaunchAppUi() {
  const { route, setter } = useContext(Router);
  return (
    <section className="bg-[url(../../public/Hero.svg)] min-h-screen p-4">
      <div
        className="px-3 py-5 border-t w-full text-center h-fit border-dark-border-gray items-center border-b flex justify-center"
        onClick={() => {
          setter((prev) => {
            return { ...prev, isComplete: false, route: "none" };
          });
          redirect("/");
        }}
      >
        <Image src={logo} alt="fortichain" />
      </div>
      <div className="pt-9 min-h-screen flex items-center flex-col justify-center">
        {route === "owner" && <ProjectOwnerLauncher />}
        {route === "researcher" && <ProjectResearcherLauncher />}
        {route === "validator" && <ProjectValidatorLauncher />}
      </div>
    </section>
  );
}

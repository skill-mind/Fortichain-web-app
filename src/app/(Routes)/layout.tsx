"use client";
import DashboardNavBar from "@/components/dashbordNav";
import { Router } from "@/provider/route-provider";
import { route } from "@/types/types";
import {
  adminRoute,
  ownerRoute,
  researcherRoute,
  validatorRoute,
} from "@/util/route";
import { useContext } from "react";

export default function Layou({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { route } = useContext(Router);
  const location =
    route === "owner"
      ? ownerRoute
      : route === "researcher"
      ? researcherRoute
      : route === "validator"
      ? validatorRoute
      : null;
  const description =
    route === "owner"
      ? "Project Owner Dashboard"
      : route === "researcher"
      ? "Security Researcher Dashboard"
      : route === "validator"
      ? "Validator Dashboard"
      : null;
  return (
    <>
      {/* <DashboardNavBar routeType={description} routes={location} /> */}
      <DashboardNavBar routeType="Admin Dashboard" routes={adminRoute} />
      <main className="max-w-sit-screen mx-auto py-7 px-3 mt-[120px] xl:mt-[180px]">
        {children}
      </main>
    </>
  );
}

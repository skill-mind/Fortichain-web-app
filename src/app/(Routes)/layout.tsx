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
import { useAccount } from "@starknet-react/core";
import { redirect } from "next/navigation";
import { useContext, useEffect } from "react";

export default function Layou({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { account, address, isConnected } = useAccount();
  const { route, setter } = useContext(Router);
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
  useEffect(() => {
    if (!isConnected) {
      setter((prev) => {
        return { ...prev, isComplete: false, route: "none" };
      });
      redirect("/");
    }
  }, [account]);
  return (
    <>
      <DashboardNavBar routeType={description} routes={location} />
      {/* <DashboardNavBar routeType="Admin Dashboard" routes={adminRoute} /> */}
      <main className="xl:px-20 px-10 max-w-sit-screen mx-auto py-7 mt-[120px] xl:mt-[180px]">
        {children}
      </main>
    </>
  );
}

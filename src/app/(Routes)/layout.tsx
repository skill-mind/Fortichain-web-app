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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
      : route == "admin"
      ? adminRoute
      : null;
  const description =
    route === "owner"
      ? "Project Owner Dashboard"
      : route === "researcher"
      ? "Security Researcher Dashboard"
      : route === "validator"
      ? "Validator Dashboard"
      : route == "admin"
      ? "Admin Dashboard"
      : null;
  useEffect(() => {
    if (!isConnected) {
      setter((prev) => {
        return { ...prev, isComplete: false, route: "none" };
      });
      redirect("/");
    }
  }, [account, isConnected]);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <DashboardNavBar routeType={description} routes={location} />

      <main className="xl:px-20 px-10 max-w-sit-screen mx-auto py-7 mt-[120px] xl:mt-[180px]">
        {children}
      </main>
    </QueryClientProvider>
  );
}

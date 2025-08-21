import DashboardNavBar from "@/components/dashbordNav"
import { ownerRoute, researcherRoute } from "@/util/route";

export default function Layou({
  children,
}: Readonly<{
  children: React.ReactNode
}>){
    return (
      <>
        <DashboardNavBar
          routeType="Project Owner Dashboard"
          routes={researcherRoute}
        />
        <main className="max-w-sit-screen mx-auto py-7 px-3">{children}</main>
      </>
    );
}

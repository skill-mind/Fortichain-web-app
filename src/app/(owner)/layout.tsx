import DashboardNavBar from "@/components/dashbordNav"
import { ownerRoute } from "@/util/route";

export default function Layou({
  children,
}: Readonly<{
  children: React.ReactNode
}>){
    return (
      <>
        <DashboardNavBar
          routeType="Project Owner Dashboard"
          routes={ownerRoute}
        />
        <main>{children}</main>
      </>
    );
}

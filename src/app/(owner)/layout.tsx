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
        <main className="max-w-sit-screen mx-auto py-7 sm:px-0 px-3">{children}</main>
      </>
    );
}

import DashboardNavBar from "@/components/dashbordNav"
import { researcherRoute } from "@/util/route";

// Helper function to convert hex to decimal and format it

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>){
    return (
      <>
        <DashboardNavBar
          routeType="Security Researcher Dashboard"
          routes={researcherRoute}
        />
        <main className="max-w-sit-screen mx-auto py-7 px-6">{children}</main>
      </>
    );
}

import DashboardNavBar from "@/components/dashbordNav"
import { adminRoute } from "@/util/route";

export default function Layout() {
    return (
      <>
        <DashboardNavBar routeType="Admin Dashboard" routes={adminRoute} />
        <main></main>
      </>
    );
}

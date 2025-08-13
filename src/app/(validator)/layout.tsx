import DashboardNavBar from "@/components/dashbordNav"
import { validatorRoute } from "@/util/route";

export default function Layout() {
    return (
      <>
        <DashboardNavBar routeType="Validator Dashboard" routes={validatorRoute} />
        <main></main>
      </>
    );
}

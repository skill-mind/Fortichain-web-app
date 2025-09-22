import { UserFinance } from "@/components/user-finance";
import { WidthrawTable } from "../../../../components/WidthrawTable";

export default function Page() {
  return (
    <section className="grid gap-3">
      <UserFinance />
      <WidthrawTable />
    </section>
  );
}

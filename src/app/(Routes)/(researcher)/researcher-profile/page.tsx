"use client";
import { UserFinance } from "@/components/user-finance";
import { WidthrawTable } from "../../../../components/WidthrawTable";
import { useResearcherByAddress } from "@/hook/useBlockchain";
import { useAccount } from "@starknet-react/core";
import Loader from "@/app/loading";
import WidthrawModal from "@/components/modals/widthraw-modal";
import { useState } from "react";

export default function Page() {
  const { address } = useAccount();
  const researcher = useResearcherByAddress(address ?? "");
  const [isOpen, setIsOpen] = useState(false);
  if (researcher === undefined) {
    return <Loader />;
  }
  function handler() {
    setIsOpen((prev) => !prev);
  }
  return (
    <>
      {isOpen && <WidthrawModal handler={handler} />}
      <section className="grid gap-3">
        <UserFinance researcher={researcher} handler={handler} />
        <WidthrawTable />
      </section>
    </>
  );
}

"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ProjectTable } from "./component/table";
import { useState } from "react";
import ResearcherModal from "@/components/modals/researcher-details-modal";
import Loader from "@/app/loading";
import { useAllResearchers } from "@/hook/useBlockchain";

export default function Researcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [researcherID, setResearcherId] = useState<number | null>(0);
  const researchers = useAllResearchers();
  function handler() {
    setIsOpen((prev) => !prev);
  }
  if (researchers == undefined) {
    return <Loader />;
  }
  return (
    <section className="grid gap-5">
      <div className="flex pl-5 max-w-96 items-center border border-dark-border-gray rounded-full">
        <Search className="text-gray-text " />
        <Input type="text" className="p-6 pl-0" placeholder="Search Projects" />
      </div>
      <ProjectTable
        researchers={researchers}
        handler={handler}
        setResearcherId={setResearcherId}
      />
      {isOpen &&
        researcherID &&
        researchers &&
        researchers[researcherID - 1] && (
          <ResearcherModal
            handler={handler}
            selectedResearcher={researchers[researcherID - 1]}
          />
        )}
    </section>
  );
}

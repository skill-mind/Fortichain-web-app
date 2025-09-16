"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ProjectTable } from "./component/table";
import { useState } from "react";
import ValidatorModal from "@/components/modals/validator-details-modal";

export default function Researcher() {
  const [isOpen, setIsOpen] = useState(false);
  function handler() {
    setIsOpen((prev) => !prev);
  }
  return (
    <section className="grid gap-5">
      <div className="flex pl-5 max-w-96 items-center border border-dark-border-gray rounded-full">
        <Search className="text-gray-text " />
        <Input type="text" className="p-6 pl-0" placeholder="Search Projects" />
      </div>
      <ProjectTable handler={handler} />
      {isOpen && <ValidatorModal handler={handler} />}
    </section>
  );
}

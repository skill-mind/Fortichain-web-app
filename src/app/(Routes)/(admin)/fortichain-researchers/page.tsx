"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, X } from "lucide-react";
import { ProjectTable } from "./component/table";
import ReviewModal from "@/components/modals/review-modal";
import { useState } from "react";
import ResearcherModal from "@/components/modals/researcher-details-modal";

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
      {isOpen && <ResearcherModal handler={handler} />}
    </section>
  );
}

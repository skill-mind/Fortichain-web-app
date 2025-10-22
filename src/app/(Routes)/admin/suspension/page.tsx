"use client";
import { Search } from "lucide-react";
import SuspensionCard from "./component/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SuspensionTable } from "./component/suspention-table";
import { useState } from "react";
import SuspensionModal from "@/components/modals/suspension-modal";

export default function Suspension() {
  const [isOpen, setIsOpen] = useState(false);
  function handler() {
    setIsOpen((prev) => !prev);
  }
  return (
    <section className="grid gap-3">
      <SuspensionCard />
      <div className="grid grid-cols-[2fr_1fr_1fr] items-center gap-2 w-1/2">
        <div className="flex pl-5 items-center border border-dark-border-gray rounded-full">
          <Search className="text-gray-text " />
          <Input
            type="text"
            className="p-6 pl-0"
            placeholder="Search Suspensions"
          />
        </div>
        <div className="border-dark-border-gray border rounded-full py-2">
          <Select>
            <SelectTrigger className="rounded-full w-full border-none pl-7">
              <SelectValue placeholder="Select severity level" />
            </SelectTrigger>
            <SelectContent className="bg-main-bg text-white-text">
              <SelectItem value="All">All Status</SelectItem>
              <SelectItem value="Re-entrancy">Fraudulent Activities</SelectItem>
              <SelectItem value="Access-Control">Spam</SelectItem>
              <SelectItem value="Logic-Error">
                Violation of Terms & Condition
              </SelectItem>
              <SelectItem value="Gas-Optimization">
                Breach of User Agreement
              </SelectItem>
              <SelectItem value="Best-Practice">
                Non-compliance with Platform Policies
              </SelectItem>
              <SelectItem value="Others">
                Infringement of Service Terms
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <SuspensionTable handler={handler} />
      {isOpen && <SuspensionModal handler={handler} />}
    </section>
  );
}

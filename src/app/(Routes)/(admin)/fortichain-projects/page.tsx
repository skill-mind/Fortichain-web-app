"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { ProjectTable } from "./component/table";
import { useState } from "react";
import ReviewModal from "@/components/modals/review-modal";

export default function Projests() {
  const [isOpen, setIsOpen] = useState(false);
  function handler() {
    setIsOpen((prev) => !prev);
  }
  return (
    <section className="grid gap-5">
      <div className="grid grid-cols-[2fr_1fr_1fr] items-center gap-2 w-1/2">
        <div className="flex pl-5 items-center border border-dark-border-gray rounded-full">
          <Search className="text-gray-text " />
          <Input
            type="text"
            className="p-6 pl-0"
            placeholder="Search Projects"
          />
        </div>
        <div className="border-dark-border-gray border rounded-full py-2">
          <Select>
            <SelectTrigger className="rounded-full w-full border-none pl-7">
              <SelectValue placeholder="Select severity level" />
            </SelectTrigger>
            <SelectContent className="bg-main-bg text-white-text">
              <SelectItem value="ALL">ALL</SelectItem>
              <SelectItem value="Re-entrancy">Re-entrancy</SelectItem>
              <SelectItem value="Access-Control">Access Control</SelectItem>
              <SelectItem value="Logic-Error">Logic Error</SelectItem>
              <SelectItem value="Gas-Optimization">Gas Optimization</SelectItem>
              <SelectItem value="Best-Practice">Best Practice</SelectItem>
              <SelectItem value="Others">Others</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="border-dark-border-gray border rounded-full py-2">
          <Select>
            <SelectTrigger className="rounded-full w-full border-none pl-7">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent className="bg-main-bg text-white-text">
              <SelectItem value="ALL">ALL</SelectItem>
              <SelectItem value="High">High</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <ProjectTable handler={handler} />
      {isOpen && <ReviewModal handler={handler} />}
    </section>
  );
}

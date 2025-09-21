"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ProjectTable } from "./component/table";
import { useState } from "react";
import ValidatorModal from "@/components/modals/validator-details-modal";
import { useValidators } from "@/hook/useBlockchain";
import Loader from "@/app/loading";

export default function Researcher() {
  const validators = useValidators();

  const [validatorID, setValidatorId] = useState<number | null>(0);
  const [isOpen, setIsOpen] = useState(false);
  function handler() {
    setIsOpen((prev) => !prev);
  }
  console.log(validators);
  if (validators == undefined) {
    return <Loader />;
  }
  return (
    <section className="grid gap-5">
      <div className="flex pl-5 max-w-96 items-center border border-dark-border-gray rounded-full">
        <Search className="text-gray-text " />
        <Input type="text" className="p-6 pl-0" placeholder="Search Projects" />
      </div>
      <ProjectTable
        handler={handler}
        validators={validators}
        setValidatorId={setValidatorId}
      />
      {validatorID && isOpen && validators && validators[validatorID - 1] && (
        <ValidatorModal
          handler={handler}
          selectedValidator={validators[validatorID - 1]} //Todos
        />
      )}
    </section>
  );
}

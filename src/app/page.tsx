import { ArrowUpRight } from "lucide-react";
import { myCustomFont } from "./layout";
import { ArrowUp } from "@/icons/arrowUp";

export default function Page() {
  return (
    <div className="font-mono mx-[89px]">
      <h1 className="text-6xl font-medium">
        Empowering Decentralized Vulnerability Disclosure
      </h1>
      <h1 className="text-6xl font-medium font-walsheim">
        Empowering Decentralized Vulnerability Disclosure
      </h1>
      <p className={`w-2xl mx-auto font-walsheim`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam autem
        nostrum minus dolor excepturi dolores fuga hic tenetur qui vitae
        quaerat, ex sint natus repudiandae quod? Explicabo velit possimus iure.
      </p>
      <button className="p-[2px] min-w-[157px] min-h-[50px] text-white-text bg-sky-blue-border rounded-full mx-8 font-walsheim font-extralight">
        <div className="bg-gradient-to-r from-[#1D74F9] flex items-center gap-2.5 p-2 justify-end to-[#092650] rounded-full h-full w-full">
          <span>Launch app </span>
          <span className="bg-[#0073E6] rounded-full w-9 h-9 font-normal grid place-content-center">
            <ArrowUp />
          </span>
        </div>
      </button>
    </div>
  );
}
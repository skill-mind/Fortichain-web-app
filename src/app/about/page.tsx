import Image from "next/image";
import logo from "../../../public/Logo (2).svg";
import folder from "../../../public/data_informationv2_7 1.svg";
import { MoveLeft, MoveRight } from "lucide-react";
import Footer from "@/components/footer";

export default function About() {
  return (
    <>
      <div className="px-3 py-5 border-t w-full text-center h-fit border-dark-border-gray items-center border-b flex justify-center">
        <Image src={logo} alt="fortichain" />
      </div>
      <section className="relative max-w-sit-screen mx-auto">
        <div className=" mx-auto border border-dark-border-gray mt-20 rounded-[8px] py-14 flex items-center  justify-around">
          <div className="space-y- grid gap-5 max-w-80">
            <button
              type="button"
              className="bg-dark-gray px-6 py-3 rounded-full md:block hidden w-fit"
            >
              Powered by Starknet
            </button>
            <h2 className="font-medium text-[48px]">FortiChain</h2>
            <p className="text-18 text-gray-text">
              Join a trustless, transparent bounty platform connecting
              researchers and projects with seamless on-chain payouts.
            </p>
          </div>
          <div>
            <Image src={folder} alt="folder" />
          </div>
        </div>
        <div className="gap-4 min-h-[400px] mt-10 grid grid-cols-[1fr_5fr]">
          <div className="border"></div>
          <aside className="border"></aside>
        </div>
        <div className="flex my-10 justify-end gap-6">
          <button
            className="w-full sm:w-fit min-h-11 p-0.5 group             
          hover:from-sky-blue-border hover:to-sky-blue-border
          bg-gradient-to-r group to-[#312F2F] from-[#212121]
      rounded-full group"
            type="button"
          >
            <span
              className="px-6 py-3 text-sm
              group-hover:from-sky-from group-hover:to-sky-to
              group-hover:bg-gradient-to-r bg-[#1C1C1C]
          flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full"
            >
              <MoveLeft />
              Previous
            </span>
          </button>
          <button
            className="w-full sm:w-fit min-h-11 p-0.5 group             
          hover:from-sky-blue-border hover:to-sky-blue-border
          bg-gradient-to-r group to-[#312F2F] from-[#212121]
      rounded-full group"
            type="button"
          >
            <span
              className="px-6 py-3 text-sm
              group-hover:from-sky-from group-hover:to-sky-to
              group-hover:bg-gradient-to-r bg-[#1C1C1C]
          flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full"
            >
              Next
              <MoveRight />
            </span>
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}

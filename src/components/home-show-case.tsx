import { ArrowUp } from "@/icons/arrowUp";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import image1 from "../../public/Image1.svg";
import image2 from "../../public/image2.svg";
import image3 from "../../public/image3.svg";
import image4 from "../../public/image4.svg";

export default function ShowCase() {
  return (
    <section className="pb-28 mt-28 border-b border-dark-border-gray xl:px-20 px-10">
      <div className="flex items-stretch border h-fit md:h-[610px] max-w-[660px] border-dark-border-gray flex-col md:flex-row mx-auto md:max-w-sit-screen rounded-l-3xl rounded-[8px] ">
        <Image
          src={image1}
          alt=""
          className="h-full w-full bg-dark-gray rounded-l-3xl md:w-2/5 xl:w-fit "
        />
        <div className="p-6 sm:py-2 xl:py-6">
          <div className="pb-10 grid gap-6 border-b border-dark-border-gray">
            <h2 className="text-2xl">Tired of Broken Systems? So Were We.</h2>
            <p className="text-gray-text text-18">
              Built on Starknet for maximum security, transparency, and
              community collaboration
            </p>
            <button
              className="w-fit p-[2px] min-h-[50px] text-white-text bg-sky-blue-border rounded-full font-walsheim font-extralight"
              type="button"
            >
              <div className="bg-gradient-to-r pl-4 from-[#1D74F9] flex items-center gap-2.5 p-2 justify-between to-[#092650] rounded-full h-full w-full">
                <span>Open Docs</span>
                <span className="bg-[#0073E6] rounded-full w-9 h-9 font-normal grid place-content-center">
                  <ArrowUp />
                </span>
              </div>
            </button>
          </div>

          <div className="text-base flex flex-col justify-between gap-2 xl:gap-8">
            <div className="flex items-center border-b border-dark-border-gray pt-8 py-3 gap-6">
              <div className="bg-pririty-low-bg rounded-full p-2 grid place-content-center">
                <CheckCircle2 className="text-blue-ball" />
              </div>
              <div className="grid text-sm gap-2">
                <h3>Secure</h3>
                <span className="text-gray-text">
                  Smart contracts protect funds in escrow until verified,
                  ensuring fair and secure transactions for all parties.
                </span>
              </div>
            </div>
            <div className="flex items-center border-b border-dark-border-gray py-3 gap-6">
              <div className="bg-pririty-low-bg rounded-full p-2 grid place-content-center">
                <CheckCircle2 className="text-blue-ball" />
              </div>
              <div className="grid text-sm gap-2">
                <h3>Transparent</h3>
                <span className="text-gray-text">
                  All reports and rewards verified on-chain, providing complete
                  transparency and immutable audit trails.
                </span>
              </div>
            </div>
            <div className="flex items-center  py-3 gap-6">
              <div className="bg-pririty-low-bg rounded-full p-2 grid place-content-center">
                <CheckCircle2 className="text-blue-ball" />
              </div>
              <div className="grid text-sm gap-2">
                <h3>Community-Driven</h3>
                <span className="text-gray-text">
                  Researchers, validators, and project owners collaborate
                  transparently in a decentralized ecosystem.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 grid gap-8 w-[90%] xl:w-fit mx-auto">
        <div className="md:p-3 md:h-[374px] flex-col md:flex-row p-6  md:pl-10 flex justify-between items-start md:items-center border border-dark-border-gray mx-auto rounded-[8px] max-w-6xl">
          <div className="flex flex-col gap-3 mb-3 md:mb-0 md:max-w-2/5">
            <h2 className="text-sky-from text-18 md:text-2xl">
              For Project Owners
            </h2>
            <h3 className="md:text-3xl text-2xl">
              Launch and Manage Impact Projects with Confidence
            </h3>
            <span className="text-gray-text text-base md:text-18">
              Create verifiable campaigns, track real-time funding, and build
              trust through transparent blockchain records.
            </span>
          </div>
          <div className="bg-dark-gray md:w-1/2 w-full flex justify-end h-full items-end pl-8">
            <Image src={image2} alt="" />
          </div>
        </div>
        <div className="md:p-3 md:h-[374px] flex-col md:flex-row p-6  md:pl-10 flex justify-between items-start md:items-center border border-dark-border-gray mx-auto rounded-[8px] max-w-6xl">
          <div className="flex flex-col gap-3 mb-3 md:mb-0 md:max-w-2/5">
            <h2 className="text-sky-from text-18 md:text-2xl">
              For Validators
            </h2>
            <h3 className="md:text-3xl text-2xl">
              Validate Projects, Empower Communities
            </h3>
            <span className="text-gray-text text-base md:text-18">
              Review, approve, or flag Projects based on legitimacy, ensuring
              only credible causes go live on-chain.
            </span>
          </div>
          <div className="bg-dark-gray md:w-1/2 w-full flex justify-end h-full items-end pl-8">
            <Image src={image3} alt="" />
          </div>
        </div>
        <div className="md:p-3 md:h-[374px] flex-col md:flex-row p-6  md:pl-10 flex justify-between items-start md:items-center border border-dark-border-gray mx-auto rounded-[8px] max-w-6xl">
          <div className="flex flex-col gap-3 mb-3 md:mb-0 md:max-w-2/5">
            <h2 className="text-sky-from text-18 md:text-2xl">
              For Security Researchers
            </h2>
            <h3 className="md:text-3xl text-2xl">
              Strengthen the Chain, One Audit at a Time
            </h3>
            <span className="text-gray-text text-base md:text-18">
              Detect vulnerabilities, report issues, and safeguard project
              integrity to uphold the network’s security
            </span>
          </div>
          <div className="bg-dark-gray md:w-1/2 w-full flex justify-end h-full items-end pl-8">
            <Image src={image4} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

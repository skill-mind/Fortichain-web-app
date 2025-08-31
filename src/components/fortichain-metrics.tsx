import Image from "next/image";
import logo from "../../public/Logo.svg";
import starknetLogo from "../../public/starknetLogo.svg";
export default function Metrics() {
  return (
    <section className="py-28  border-b border-dark-border-gray text-center flex items-center flex-col gap-9 px-5">
      <div className="flex flex-col gap-3 items-center max-w-[703px]">
        <div className="bg-dark-gray py-3 px-6 w-fit rounded-full">
          <Image src={logo} alt="fortichain" />
        </div>
        <p className="text-base md:text-18 text-gray-text">
          Real-time metrics showcasing the growing FortiChain ecosystem and its
          contribution to Web3 security.
        </p>
      </div>
      <div className="py-10 px-6 bg-dark-gray justify-between sm:w-4/5  xl:max-w-sit-screen flex items-center  rounded-[8px] flex-col xl:flex-row">
        <div className="flex flex-col items-center w-full px-[60px] py-3 border-b xl:border-b-0 xl:border-r border-dark-border-gray">
          <span className="text-[38px]">1,247+</span>
          <span className="text-sm text-gray-text">
            Vulneabilities Submitted
          </span>
        </div>
        <div className="flex flex-col items-center w-full px-[60px] py-3 border-b xl:border-b-0 xl:border-r border-dark-border-gray">
          <span className="text-[38px]">1,247+</span>
          <span className="text-sm text-gray-text">Bounties Paid Out</span>
        </div>
        <div className="flex flex-col items-center w-full px-[60px] py-3 border-b xl:border-b-0 xl:border-r border-dark-border-gray">
          <span className="text-[38px]">$100K+</span>
          <span className="text-sm text-gray-text">Projects Onboarded</span>
        </div>
        <div className="flex flex-col items-center w-full px-[60px] py-3  border-dark-border-gray">
          <span className="text-[38px]">321+</span>
          <span className="text-sm text-gray-text">Achieve Researchers</span>
        </div>
      </div>
      <div className="grid gap-8">
        <span className="text-2xl">Sponsor</span>
        <div className="w-fit rounded-full bg-dark-gray p-3">
          <div className="bg-white-text rounded-full py-5 px-10">
            <Image src={starknetLogo} alt="starknet" />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import logo from "../../public/Logo.svg";
import Image from "next/image";
import LaunchAppNavModal from "@/components/modals/lauch-app-modal";
import LaunchAppUi from "@/components/ui/launch-app";
import { Router } from "@/provider/route-provider";
import { useContext } from "react";
import avatar from "../../public/dylan.svg";
import { Quote, QuoteRight } from "@/icons/github";
import { Input } from "@/components/ui/input";
import Header from "@/components/home-header";
import ShowCase from "@/components/home-show-case";
import Metrics from "@/components/fortichain-metrics";
import Explore from "@/components/explore-fortichain";
import Footer from "@/components/footer";

export default function Page() {
  const { route, launchModal, setter } = useContext(Router);

  if (route !== "none") {
    return <LaunchAppUi />;
  }
  return (
    <div className="">
      <Header />
      <ShowCase />
      <Metrics />
      {/* fortichain testimonies */}
      <div className="my-20">
        <div className="flex sm:w-[90%] flex-col items-start gap-5 justify-center px-5 xl:min-w-6xl max-w-6xl mx-auto">
          <div className="flex justify-between w-full">
            <Quote />
            <QuoteRight />
          </div>
          <p className="text-xl md:text-2xl px-9 text-center">
            At the Starknet Foundation, we’re excited to see platforms like
            FortiChain push the boundaries of decentralized collaboration and
            security. By empowering researchers and developers to work together
            in trustless environments, FortiChain strengthens the integrity of
            the Starknet ecosystem and sets a new standard for vulnerability
            disclosure.
          </p>
          <div className="flex items-center gap-3 justify-center mx-auto">
            <Image src={avatar} alt="avatar" />
            <h3 className="text-gray-text md:text-2xl text-18">
              Dylan Kugler, Starknet Foundation
            </h3>
          </div>
        </div>
      </div>
      <Explore />
      {/* subscribers input */}
      <section className=" my-36 px-5">
        <div className="gap-2 border p-2 border-dark-border-gray rounded-full flex max-w-[600px] mx-auto justify-between items-center text-center">
          <Input
            type="text"
            placeholder="Enter email address"
            className="pl-4"
          />
          <button
            className="p-[2px] w-fit min-h-[50px] text-white-text bg-sky-blue-border rounded-full font-walsheim font-extralight"
            type="button"
          >
            <div className="bg-gradient-to-r py-3 px-6 from-[#1D74F9] flex items-center  justify-between to-[#092650] rounded-full h-full w-full">
              Subscribe
            </div>
          </button>
        </div>
        <div className="text-gray-text text-center mt-2">
          Subscribe to get updates on bounties, project launches, and security
          insights.
          <div className="text-gray-text text-center mt-2">
            Subscribe to get updates on bounties, project launches, and security
            insights.
          </div>
        </div>
      </section>
      {/* home footer */}
      <Footer />
      {launchModal && <LaunchAppNavModal />}
    </div>
  );
}

{
  /* <button className="p-[2px] min-w-[157px] min-h-[50px] text-white-text bg-sky-blue-border rounded-full mx-8 font-walsheim font-extralight">
  <div className="bg-gradient-to-r from-[#1D74F9] flex items-center gap-2.5 p-2 justify-end to-[#092650] rounded-full h-full w-full">
    <span>Launch app </span>
    <span className="bg-[#0073E6] rounded-full w-9 h-9 font-normal grid place-content-center">
      <ArrowUp />
    </span>
  </div>
</button>;  */
}

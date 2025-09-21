"use client";
import { useUserProject } from "@/hook/useBlockchain";
import { ArrowGray, GithubIcon } from "@/icons/github";
import { useAccount, useDisconnect } from "@starknet-react/core";
import Link from "next/link";

export default function Profile() {
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const projects = useUserProject(address ?? "");
  return (
    <section className="flex justify-between items-stretch flex-col md:flex-row gap-3">
      <div className=" w-full md:w-1/2 bg-dark-gray p-6 flex flex-col justify-between gap-10 rounded-[8px]">
        <div className="bg-dark-gray-pop grid gap-3 px-6 py-3 border border-dark-border-gray rounded-[8px]">
          <h3 className="text-gray-text text-base">Wallet Balance</h3>
          <h2 className="text-2xl">$9,650</h2>
        </div>
        <div className="flex justify-between items-center gap-3 md:gap-0 flex-wrap">
          <div className="grid gap-3">
            <h3 className="text-base">Organization</h3>
            <h5 className="text-gray-text text-sm break-all">{address}</h5>
          </div>
          <button
            className="w-fit min-h-11 p-0.5 group             
                  hover:from-sky-blue-border hover:to-sky-blue-border
                  bg-gradient-to-r group to-[#312F2F] from-[#212121]
              rounded-full group"
            onClick={() => {
              disconnect();
            }}
            type="button"
          >
            <span
              className="px-6 py-3
                      group-hover:from-sky-from group-hover:to-sky-to
                      group-hover:bg-gradient-to-r bg-[#1C1C1C] text-sm font-normal
                  flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full"
            >
              Disconnect Wallet
            </span>
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-dark-gray p-6 flex flex-col justify-between gap-3 rounded-[8px]">
        <div className="grid gap-3">
          <h3 className="text-base">GitHub</h3>
          <h5 className="text-gray-text text-base">
            Your github links on fortichain
          </h5>
        </div>
        <div className="grid gap-2">
          <h3 className="text-gray-text text-base">Links</h3>
          <div className="flex flex-wrap gap-3">
            {projects?.map((data, index) => (
              <Link
                key={index}
                href={data.repository_url}
                target="_blank"
                className="w-fit bg-dark-border-gray py-1 px-3 rounded-full flex items-center gap-2"
              >
                <GithubIcon />
                <span className="text-sm">GitHub Repo</span>
                <ArrowGray />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

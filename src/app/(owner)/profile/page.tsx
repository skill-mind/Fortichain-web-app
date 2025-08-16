"use client"
import { ArrowGray, GithubIcon } from "@/icons/github";
import { useDisconnect } from "@starknet-react/core";


export default function Profile() {
    const { disconnect } = useDisconnect();
    return (
      <section className="flex justify-between items-stretch flex-col md:flex-row gap-3">
        <div className=" w-full md:w-1/2 bg-dark-gray p-6 flex flex-col justify-between gap-3 rounded-[8px]">
          <div className="bg-dark-gray-pop grid gap-3 px-6 py-3 border border-dark-border-gray rounded-[8px]">
            <h3 className="text-gray-text">Wallet Balance</h3>
            <h2>$9,650</h2>
          </div>
          <div className="flex justify-between items-center gap-3 md:gap-0 flex-wrap">
            <div className="grid gap-3">
              <h3>Organization</h3>
              <h5 className="text-gray-text break-all">
                0x4A7d5cB67eA4F6e4B7cC3B3aE3f8fD9bB2cF9a1B
              </h5>
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
                      group-hover:bg-gradient-to-r bg-[#1C1C1C]
                  flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full"
              >
                Disconnect Wallet
              </span>
            </button>
          </div>
          <div className="grid gap-2">
            <h3 className="text-gray-text">Links</h3>
            <button className="w-fit bg-dark-border-gray py-1 px-3 rounded-full flex items-center gap-2">
              <GithubIcon />
              <span className="text-base">GitHub Repo</span>
              <ArrowGray />
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-dark-gray p-6 flex flex-col justify-between gap-3 rounded-[8px]">
          <div className="grid gap-3">
            <h3>GitHub Integration</h3>
            <h5 className="text-gray-text">
              Connect your repositories for automated security monitoring
            </h5>
          </div>
          <div className="flex justify-start gap-3 items-center border-b border-dark-border-gray py-3">
            <GithubIcon />
            <div className="flex justify-between w-full items-center  gap-3 md:gap-0 flex-wrap">
              <div className="grid gap-1">
                <h3>GitHub</h3>
                <h5 className="text-gray-text">mycompany/ecommerce-platform</h5>
                <h5 className="text-gray-text">Last sync: 2 hours ago</h5>
              </div>
              <div className="flex md:justify-between justify-end md:w-fit w-full items-center gap-3">
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
                      group-hover:bg-gradient-to-r bg-[#10273E]
                  flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full"
                  >
                    Connected
                  </span>
                </button>
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
                      group-hover:bg-gradient-to-r bg-[#1C1C1C]
                  flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full"
                  >
                    Configure
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-start gap-3 items-center py-3">
            <GithubIcon />
            <div className="flex justify-between w-full items-center">
              <div className="grid gap-1">
                <h3>GitLab</h3>
                <h5 className="text-gray-text">Not Connected</h5>
              </div>
              <div className="flex justify-between items-center gap-3">
                <button
                  className="w-fit min-h-11 p-0.5 group             
                  hover:from-sky-blue-border hover:to-sky-blue-border
                  bg-gradient-to-r group to-[#312F2F] from-[#212121]
              rounded-full group"
                  type="button"
                >
                  <span
                    className="px-6 py-3
                      group-hover:from-sky-from group-hover:to-sky-to
                      group-hover:bg-gradient-to-r bg-[#1C1C1C]
                  flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full"
                  >
                    Configure
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
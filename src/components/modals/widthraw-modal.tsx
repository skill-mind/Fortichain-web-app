"use client";
import { useValidatorDetail, validatorType } from "@/hook/useBlockchain";
import { X } from "lucide-react";
import { Input } from "../ui/input";
import WidthrawMessageModal from "./widthraw-message";
import { useState } from "react";
import { useAccount } from "@starknet-react/core";
import { WithdrawaBounty } from "@/hook/blockchainWriteFunction";

export default function WidthrawModal({ handler }: { handler: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [details, setDetails] = useState({
    address: "",
    amount: 0,
  });
  const [isError, setIsError] = useState(false);
  const { address, account } = useAccount();
  const validatorDetail = useValidatorDetail(address ?? "");
  async function handleWithdral() {
    await WithdrawaBounty(account, details, setIsSubmitting);
    handler();
  }
  return (
    <>
      {isSubmitting && (
        <WidthrawMessageModal
          handler={handler}
          isSubmitting={isSubmitting}
          setIsError={setIsError}
          isError
        />
      )}
      <div
        className="bg-main-bg/75 fixed top-0 h-screen w-full z-[300]"
        onClick={handler}
      ></div>
      <div className="p-6 max-w-[500px] w-full bg-dark-gray rounded-[8px] mx-auto grid gap-6 fixed top-50 sm:top-40 left-1/2 -translate-x-[50%] z-[400]">
        <div className="flex text-18 justify-between items-center">
          <div className="grid gap-3">
            <h3>Withdraw to wallet</h3>
            <span className="text-gray-text text-base">
              Transfer your funds to an external wallet address
            </span>
          </div>
          <button
            type="button"
            onClick={handler}
            className="bg-dark-gray-pop p-1.5 rounded-full"
          >
            <X />
          </button>
        </div>

        <div className="flex items-center justify-between"></div>

        <div className="py-10 px-6 bg-dark-gray-pop rounded-[8px] flex justify-between items-center ">
          <span className="text-gray-text text-base">
            Available to withdraw
          </span>
          <h2 className="text-2xl">
            ${validatorDetail?.available_amount_to_widthdraw.toFixed(2)}
          </h2>
        </div>
        <div className="w-full grid gap-2 capitalize">
          <label htmlFor="">wallet Address</label>
          <Input
            required
            onChange={(data) => {
              const value = data.target.value;
              setDetails((prev) => {
                return { ...prev, address: value };
              });
            }}
            placeholder="0x0ece324ca23...."
            className="border border-dark-border-gray rounded-full h-14 pl-7 outline:border-blue-ball"
          />
        </div>
        <div className="grid gap-2 capitalize">
          <label htmlFor="">Amount (USD)</label>
          <Input
            required
            min={10}
            type="number"
            placeholder="0.00"
            className="border border-dark-border-gray rounded-full h-14 pl-7 outline:border-blue-ball"
            onChange={(data) => {
              const value = Number(data.target.value);
              setDetails((prev) => {
                return { ...prev, amount: value };
              });
            }}
          />
          <span className="text-gray-text">Minimum withdrawal is $10</span>
        </div>
        <div className="border border-dark-border-gray rounded-[8px] p-6 font-light">
          Verify your connected wallet address is correct. Transactions cannot
          be reversed.
        </div>
        <button
          onClick={handleWithdral}
          className="w-full min-h-50 p-0.5 group             
              from-sky-blue-border to-sky-blue-border
              bg-gradient-to-r group hover:to-[#312F2F] hover:from-[#212121]
          rounded-full group"
          type="button"
        >
          <span
            className="px-6 py-4
                  from-sky-from to-sky-to
                 bg-gradient-to-r group-hover:from-[#1C1C1C] group-hover:to-[#1C1C1C]
              flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-full w-full"
          >
            Withdraw
          </span>
        </button>
      </div>
    </>
  );
}

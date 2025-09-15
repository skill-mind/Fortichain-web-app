"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UploadProjectProps } from "@/util/types";
import { useAccount } from "@starknet-react/core";

export default function FundProject({
  setFormData,
  data,
}: {
  setFormData: React.Dispatch<React.SetStateAction<UploadProjectProps>>;
  data: UploadProjectProps;
}) {
  const { address } = useAccount();
  return (
    <section className="grid gap-5 text-base">
      <div className="bg-dark-gray border border-dark-border-gray rounded-[8px] p-6 grid gap-2.5">
        <h3>Connected Wallet</h3>
        <h5 className="text-gray-text text-sm">{address}</h5>
      </div>
      <div className="grid gap-2">
        <label htmlFor="">Amount (USD)</label>
        <Input
          value={data.amount ?? ""}
          min={100}
          type="number"
          placeholder="1000"
          className="border border-dark-border-gray rounded-full h-14 pl-7 outline:border-blue-ball"
          onChange={(data) => {
            const value = Number(data.target.value);
            setFormData((userData: UploadProjectProps) => {
              return {
                ...userData,
                amount: value,
              };
            });
          }}
        />
        <span className="text-gray-text">Minimum deposit: $1000</span>
      </div>
      <div className="w-full grid gap-2 ">
        <label htmlFor="">Priority</label>
        <div className="h-14 border-dark-border-gray border rounded-full">
          <Select
            value={data.priority}
            onValueChange={(data) => {
              setFormData((userData: UploadProjectProps) => {
                return {
                  ...userData,
                  priority: data,
                };
              });
            }}
          >
            <SelectTrigger className="rounded-full w-full mt-2 border-none pl-7">
              <SelectValue placeholder="Select priority level" />
            </SelectTrigger>
            <SelectContent className="bg-main-bg text-white-text">
              <SelectItem value="HIGH">High</SelectItem>
              <SelectItem value="MEDIUM">Medium</SelectItem>
              <SelectItem value="LOW">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="rounded-[8px] p-6 grid gap-2.5 bg-dark-gray ">
        <h3>Escrow Protection</h3>
        <h5 className="text-gray-text text-base">
          Funds are held securely in escrow and only released when valid
          vulnerabilities are confirmed and bounties are awarded.
        </h5>
      </div>
    </section>
  );
}

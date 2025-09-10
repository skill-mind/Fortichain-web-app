"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { UploadProjectProps } from "@/util/types";
import { CalendarDays } from "lucide-react";
import { useState } from "react";

export default function SubmitReport({
  setFormData,
  data,
}: {
  setFormData: React.Dispatch<React.SetStateAction<UploadProjectProps>>;
  data: UploadProjectProps;
}) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  {
    isSubmitting && data.projectName.length <= 0 && (
      <span>This field is required</span>
    );
  }
  return (
    <div className="grid text-base gap-4">
      <div className="grid gap-2">
        <label htmlFor="">Project Name</label>
        <Input
          value={data.projectName}
          placeholder="Enter project name"
          className="border border-dark-border-gray rounded-full h-14 pl-7 outline:border-blue-ball"
          onChange={(data) => {
            const value = data.target.value;
            setFormData((userData: UploadProjectProps) => {
              return {
                ...userData,
                projectName: value,
              };
            });
          }}
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="">Description</label>
        <Textarea
          value={data.description}
          placeholder="Describe your project and its security requirements"
          className="border border-dark-border-gray rounded-[8px] min-h-28 pl-7 outline:border-blue-ball"
          onChange={(data) => {
            const value = data.target.value;
            setFormData((userData: UploadProjectProps) => {
              return {
                ...userData,
                description: value,
              };
            });
          }}
        />
        {isSubmitting && data.description.length <= 0 && (
          <span>This field is required</span>
        )}
      </div>
      <div className="grid gap-6">
        <div className="flex gap-6 sm:flex-row flex-col justify-between items-center">
          <div className="w-full grid gap-2 ">
            <label htmlFor="">Project Type</label>
            <div className="h-14 border-dark-border-gray border rounded-full">
              <Select
                value={data.projectType}
                onValueChange={(data) => {
                  setFormData((userData: UploadProjectProps) => {
                    return {
                      ...userData,
                      projectType: data,
                    };
                  });
                }}
              >
                <SelectTrigger className="rounded-full w-full mt-2 border-none pl-7">
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent className="bg-main-bg text-white-text">
                  <SelectItem value="Escrow">Escrow</SelectItem>
                  <SelectItem value="Security">Security</SelectItem>
                  <SelectItem value="Finace">Finace</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="w-full grid gap-2 ">
            <label htmlFor="">Project Deadline</label>

            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  //   variant="outline"
                  id="date"
                  className={`w-full ${
                    !data.deadline ? "text-gray-text" : ""
                  } bg-main-bg border pl-7 h-14 rounded-full border-dark-border-gray justify-between font-normal`}
                >
                  {data.deadline
                    ? typeof data.deadline === "string"
                      ? data.deadline
                      : `${new Date(data.deadline).getDate()}-${
                          new Date(data.deadline).getMonth() + 1
                        }-${new Date(data.deadline).getFullYear()}`
                    : "Select date"}
                  <CalendarDays className="text-gray-text mr-2" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={data.deadline}
                  captionLayout="dropdown"
                  onSelect={(date) => {
                    setFormData((userData: UploadProjectProps) => {
                      return {
                        ...userData,
                        deadline: date ?? userData.deadline,
                      };
                    });

                    setOpen(false);
                  }}
                  className=""
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="flex gap-6 justify-between items-center sm:flex-row flex-col">
          <div className="w-full grid gap-2 ">
            <label htmlFor="">Repository URL</label>
            <Input
              value={data.repoUrl}
              placeholder="Repository URL"
              className="border border-dark-border-gray rounded-full h-14 pl-7 outline:border-blue-ball"
              onChange={(data) => {
                const value = data.target.value;
                setFormData((userData: UploadProjectProps) => {
                  return {
                    ...userData,
                    repoUrl: value,
                  };
                });
              }}
            />
          </div>
          <div className="w-full grid gap-2 ">
            <label htmlFor="">Contract Address</label>
            <Input
              onChange={(data) => {
                const value = data.target.value;
                setFormData((userData: UploadProjectProps) => {
                  return {
                    ...userData,
                    contractAddress: value,
                  };
                });
              }}
              value={data.contractAddress}
              placeholder="0x0ece324ca23...."
              className="border border-dark-border-gray rounded-full h-14 pl-7 outline:border-blue-ball"
            />
            {isSubmitting && data.contractAddress.length <= 66 && (
              <span>This field is required</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

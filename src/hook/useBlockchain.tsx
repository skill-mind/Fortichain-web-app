"use client";

import { FORTICHAINABI } from "@/contract/abi";
import { FORTICHAINADDRESS } from "@/contract/address";
import { useReadContract } from "@starknet-react/core";
import { useEffect, useState } from "react";
import { Abi, shortString } from "starknet";

export function useContractFetch(
  abi: Abi,
  functionName: string,
  args: [string | number]
) {
  const {
    data: readData,
    refetch: dataRefetch,
    isError: readIsError,
    isLoading: readIsLoading,
    error: readError,
    isFetching: readRefetching,
  } = useReadContract({
    abi: abi,
    functionName: functionName,
    address: FORTICHAINADDRESS,
    args: args,
    refetchInterval: 600000,
  });

  return {
    readData,
    dataRefetch,
    readIsError,
    readIsLoading,
    readError,
    readRefetching,
  };
}

export interface Project {
  created_at: string;
  deadline: string;
  description: string;
  id: number;
  is_active: boolean; //
  is_completed: boolean; //
  name: string;
  priority: string;
  project_owner: { toString: (radix: number) => string };
  project_type: string;
  repository_url: string;
  researchers_paid: boolean; //
  smart_contract_address: { toString: (radix: number) => string };
  updated_at: string;
  validator_paid: boolean; //
  amount: number;
}

export function useUserProject(address: string) {
  const [projectsData, setProjectsData] = useState<Project[] | undefined>();
  const { readData: projectList } = useContractFetch(
    FORTICHAINABI,
    "get_user_projects",
    [address]
  );
  console.log(projectList);
  useEffect(() => {
    if (!projectList || !address) return; //
    const projectData: Project[] = [];
    projectList.forEach((data: Project) => {
      projectData.push({
        validator_paid: data.validator_paid,
        researchers_paid: data.researchers_paid,
        repository_url: data.repository_url,
        smart_contract_address: `0x0${data["smart_contract_address"].toString(
          16
        )}`,
        name: data.name,
        id: +data.id.toString(),
        description: data.description,
        is_active: data.is_active,
        is_completed: data.is_completed,
        created_at: epocTime(data.created_at.toString()),
        deadline: epocTime(data.deadline.toString()),
        priority: shortString.decodeShortString(data.priority),
        project_type: data.project_type,
        updated_at: epocTime(data.deadline.toString()),
        project_owner: `0x0${data["project_owner"].toString(16)}`,
        amount: +data.amount?.toString(), //
      });
    });
    // console.log(projectData);
    setProjectsData(projectData);
  }, [projectList, address]);

  return projectsData;
}

export function getTimeFromEpoch(time: string) {
  const epochSeconds = time.replace("n", "");
  const date = new Date(+epochSeconds * 1000);
  return `${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;
}
export function epocTime(time: string) {
  const epochSeconds = time.replace("n", "");

  const date = new Date(+epochSeconds); // multiply by 1000 to convert to milliseconds
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

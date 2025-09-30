"use client";

import { FORTICHAINABI } from "@/contract/abi";
import { FORTICHAINADDRESS } from "@/contract/address";
import { useReadContract } from "@starknet-react/core";
import { useEffect, useState } from "react";
import { Abi, shortString } from "starknet";

export function useContractFetch(
  abi: Abi,
  functionName: string,
  args: Array<string | number>
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
  validator_assigned: number;
}

export interface ProjectOwner {
  address: { toString: (radix: number) => string };
  total_allocated_bounty: number;
  in_progress_audits: number;
  completed_audits: number;
  active_researchers: number;
}

export function useProjectOwner(address: string) {
  const [owner, setOwner] = useState<ProjectOwner | undefined>();
  // console.log(owner);
  const { readData: ownerData } = useContractFetch(
    FORTICHAINABI,
    "get_project_owner",
    [address]
  );
  // console.log(ownerData);
  useEffect(() => {
    if (!ownerData || !address) return; //

    // console.log(projectData);
    setOwner({
      total_allocated_bounty: +ownerData?.id?.toString(),
      address: `0x0${ownerData?.address?.toString(16)}`,
      in_progress_audits: +ownerData?.amount?.toString(),
      completed_audits: +ownerData?.amount?.toString(),
      active_researchers: +ownerData?.amount?.toString(),
    });
  }, [ownerData, address]);

  return ownerData;
}

export function useUserProject(address: string) {
  const [projectsData, setProjectsData] = useState<Project[] | undefined>();
  const { readData: projectList } = useContractFetch(
    FORTICHAINABI,
    "get_user_projects",
    [address]
  );
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
        validator_assigned: data.validator_assigned,
      });
    });
    // console.log(projectData);
    setProjectsData(projectData);
  }, [projectList, address]);

  return projectsData;
}

export function useAllProjects() {
  const [projectsData, setProjectsData] = useState<Project[] | undefined>();
  const { readData: projectList } = useContractFetch(
    FORTICHAINABI,
    "get_all_projects",
    []
  );
  useEffect(() => {
    if (!projectList) return; //
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
        validator_assigned: data.validator_assigned,
      });
    });
    // console.log(projectData);
    setProjectsData(projectData);
  }, [projectList]);

  return projectsData;
}

export function UseGetAssignableProjects() {
  const [projectsData, setProjectsData] = useState<Project[] | undefined>();
  const { readData: projectList } = useContractFetch(
    FORTICHAINABI,
    "get_assignable_projects",
    []
  );
  console.log(projectList);
  useEffect(() => {
    if (!projectList) return; //
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
        validator_assigned: data.validator_assigned,
      });
    });
    // console.log(projectData);
    setProjectsData(projectData);
  }, [projectList]);

  return projectsData;
}
export interface validatorType {
  id: number;
  validator_data_uri: string;
  created_at: string;
  updated_at: string;
  status: string;
  kyc_uri: string;
  kyc_approved: string;
  username: string;
  github_profile_url: string;
  is_open_for_work: boolean;
  validator_address: { toString: (radix: number) => string };
  approval_rate: number;
  available_amount_to_widthdraw: number;
  number_project_validated: number;
  reputation: number;
  total_amount_withdrawn: number;
  total_bounty_won: number;
  passwork: string[];
}

export function useValidators() {
  const [validators, setValidators] = useState<validatorType[]>();

  const { readData: validatorsData } = useContractFetch(
    FORTICHAINABI,
    "get_all_validators",
    []
  );
  console.log(validatorsData);
  useEffect(() => {
    if (!validatorsData) return; //
    const rawValidatorData: validatorType[] = [];
    validatorsData.forEach((data: validatorType) => {
      rawValidatorData.push({
        validator_data_uri: data.validator_data_uri.toString(),
        validator_address: `0x0${data.validator_address.toString(16)}`,
        username: data.username,
        id: +data.id.toString(),
        is_open_for_work: data.is_open_for_work,
        created_at: epocTime(data.created_at.toString()),
        status: shortString.decodeShortString(data.status),
        kyc_uri: data.kyc_uri.toString(),
        updated_at: epocTime(data.updated_at.toString()),
        kyc_approved: data.kyc_approved.toString(),
        github_profile_url: data.github_profile_url,
        total_bounty_won: +data.total_bounty_won.toString(),
        approval_rate: +data.approval_rate.toString(),
        total_amount_withdrawn: +data.total_amount_withdrawn.toString(),
        reputation: data.reputation,
        available_amount_to_widthdraw: data.available_amount_to_widthdraw,
        number_project_validated: +data.number_project_validated.toString(),
        passwork: [""],
      });
    });
    // console.log();
    setValidators(rawValidatorData);
  }, [validatorsData]);

  return validators;
}

export function UseGetUnassignedValidators() {
  const [validators, setValidators] = useState<validatorType[]>();

  const { readData: validatorsData } = useContractFetch(
    FORTICHAINABI,
    "get_unassigned_validators",
    []
  );
  console.log(validatorsData);
  useEffect(() => {
    if (!validatorsData) return; //
    const rawValidatorData: validatorType[] = [];
    validatorsData.forEach((data: validatorType) => {
      rawValidatorData.push({
        validator_data_uri: data.validator_data_uri.toString(),
        validator_address: `0x0${data.validator_address.toString(16)}`,
        username: data.username,
        id: +data.id.toString(),
        is_open_for_work: data.is_open_for_work,
        created_at: epocTime(data.created_at.toString()),
        status: shortString.decodeShortString(data.status),
        kyc_uri: data.kyc_uri.toString(),
        updated_at: epocTime(data.updated_at.toString()),
        kyc_approved: data.kyc_approved.toString(),
        github_profile_url: data.github_profile_url,
        total_bounty_won: +data.total_bounty_won.toString(),
        approval_rate: +data.approval_rate.toString(),
        total_amount_withdrawn: +data.total_amount_withdrawn.toString(),
        reputation: data.reputation,
        available_amount_to_widthdraw: data.available_amount_to_widthdraw,
        number_project_validated: +data.number_project_validated.toString(),
        passwork: [""],
      });
    });
    // console.log();
    setValidators(rawValidatorData);
  }, [validatorsData]);

  return validators;
}

export function useResearchers() {
  const [researchers, setResearchers] = useState<string[]>();

  const { readData: researchersData } = useContractFetch(
    FORTICHAINABI,
    "get_security_researchers",
    []
  );
  console.log(researchersData);
  useEffect(() => {
    if (!researchersData) return; //
    const rawResearchers: string[] = [];
    researchersData.forEach((data: string) => {
      // @ts-expect-error parmas can be undefined
      rawResearchers.push(`0x0${data.toString(16)}`);
    });
    console.log(rawResearchers);
    setResearchers(rawResearchers);
  }, [researchersData]);

  return researchers;
}

export interface SecurityResearcher {
  id: number;
  researcher_address: { toString: (radix: number) => string };
  username: string;
  created_at: string;
  updated_at: string;
  status: string;
  is_active: boolean;
  reputation: number;
  total_projects_worked_on: number;
  vulnerability: number;
  reports_submitted_count: number;
  reports_approved_count: number;
  total_bounty_won: number;
  total_amount_withdrawn: number;
  available_amount_to_withdraw: number;
}

export function useResearcherByAddress(address: string) {
  const [researchers, setResearcher] = useState<SecurityResearcher>();

  const { readData: researchersData } = useContractFetch(
    FORTICHAINABI,
    "get_researcher_by_address",
    [address]
  );
  console.log(researchersData);
  useEffect(() => {
    if (!researchersData) return; //
    setResearcher({
      vulnerability: +researchersData?.vulnerability.toString(),
      username: researchersData?.username,
      updated_at: epocTime(researchersData?.updated_at.toString()),
      total_projects_worked_on:
        +researchersData?.total_projects_worked_on.toString(),
      status: researchersData?.status.toString(),
      researcher_address: `0x0${researchersData?.researcher_address.toString(
        16
      )}`,
      reputation: +researchersData?.reputation.toString(),
      is_active: researchersData?.is_active,
      id: +researchersData?.id?.toString(),
      created_at: epocTime(researchersData?.created_at.toString()),

      reports_submitted_count:
        +researchersData?.reports_submitted_count?.toString(),
      reports_approved_count:
        +researchersData?.reports_approved_count?.toString(),
      total_bounty_won: +researchersData?.total_bounty_won?.toString(),
      total_amount_withdrawn:
        +researchersData?.total_amount_withdrawn?.toString(),
      available_amount_to_withdraw:
        +researchersData?.available_amount_to_withdraw?.toString(),
    });
  }, [researchersData]);

  return researchers;
}

export function useAllResearchers() {
  const [researchers, setResearcher] = useState<SecurityResearcher[]>();

  const { readData: researchersData } = useContractFetch(
    FORTICHAINABI,
    "get_all_researchers_detailed",
    []
  );
  console.log(researchersData);
  useEffect(() => {
    if (!researchersData) return; //
    console.log(researchersData.vulnerability);
    const rawResercherData: SecurityResearcher[] = [];
    researchersData.forEach((data: SecurityResearcher) => {
      rawResercherData.push({
        vulnerability: +data?.vulnerability?.toString(),
        username: data?.username,
        updated_at: epocTime(data?.updated_at?.toString()),
        total_projects_worked_on: +data?.total_projects_worked_on?.toString(),
        status: data?.status?.toString(),
        researcher_address: `0x0${data?.researcher_address?.toString(16)}`,
        reputation: +data?.reputation?.toString(),
        is_active: data?.is_active,
        id: +data?.id?.toString(),
        created_at: epocTime(data?.created_at?.toString()),

        reports_submitted_count: +data?.reports_submitted_count?.toString(),
        reports_approved_count: +data?.reports_approved_count?.toString(),
        total_bounty_won: +data?.total_bounty_won?.toString(),
        total_amount_withdrawn: +data?.total_amount_withdrawn?.toString(),
        available_amount_to_withdraw:
          +data?.available_amount_to_withdraw?.toString(),
      });
    });
    setResearcher(rawResercherData);
  }, [researchersData]);

  return researchers;
}

export function useValidatorDetail(address: string) {
  const [validators, setValidators] = useState<validatorType>();

  const { readData: validatorsData } = useContractFetch(
    FORTICHAINABI,
    "get_validator",
    [address]
  );

  useEffect(() => {
    if (!validatorsData) return; //
    console.log(validatorsData["0"]);
    const rawValidatorData: validatorType = {
      validator_data_uri: validatorsData["0"]?.validator_data_uri?.toString(),
      validator_address: `0x0${validatorsData["0"]?.validator_address?.toString(
        16
      )}`,
      username: validatorsData["0"]?.username,
      id: +validatorsData["0"]?.id?.toString(),
      is_open_for_work: validatorsData["0"]?.is_open_for_work,
      created_at: epocTime(validatorsData["0"]?.created_at?.toString()),
      status: shortString?.decodeShortString(validatorsData["0"]?.status),
      kyc_uri: validatorsData["0"]?.kyc_uri?.toString(),
      updated_at: epocTime(validatorsData["0"]?.updated_at?.toString()),
      kyc_approved: validatorsData["0"]?.kyc_approved?.toString(),
      github_profile_url: validatorsData["0"]?.github_profile_url,
      total_bounty_won: Number(validatorsData["0"]?.total_bounty_won),
      approval_rate: Number(validatorsData["0"]?.approval_rate),
      total_amount_withdrawn: Number(
        validatorsData["0"]?.total_amount_withdrawn
      ),
      reputation: Number(validatorsData["0"]?.reputation),
      available_amount_to_widthdraw: Number(
        validatorsData["0"]?.available_amount_to_withdraw
      ),
      number_project_validated: Number(
        validatorsData["0"]?.number_project_validated
      ),
      passwork: validatorsData["1"],
    };

    setValidators(rawValidatorData);
  }, [validatorsData]);

  return validators;
}

export function getTimeFromEpoch(time: string) {
  if (!time) return "";
  const epochSeconds = time.replace("n", "");
  const date = new Date(+epochSeconds * 1000);
  return `${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;
}
export function epocTime(time: string) {
  if (!time) return "";
  const epochSeconds = time.replace("n", "");

  const date = new Date(+epochSeconds); // multiply by 1000 to convert to milliseconds
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

"use client";

import { FORTICHAINABI } from "@/contract/abi";
import { FORTICHAINADDRESS } from "@/contract/address";
import { useAccount, useReadContract } from "@starknet-react/core";
import { useCallback, useEffect, useState } from "react";
import { Abi, shortString, uint256 } from "starknet";

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
  updated_at: string;
  validator_paid: boolean; //
  amount: number;
  validator_assigned: number;
}

export interface Report {
  title: string; //
  description: string; //
  category: string; //
  id: number; //
  status: string; //
  validation_status: string; //w
  severity_level: string; //
  potential_risk: string; //
  researcher_address: { toString: (radix: number) => string }; //
  recommendation: string; //
  project_id: number; //
  validator_report_id: number;
  created_at: string;
  updated_at: string;
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

export interface ProjectOwner {
  address: { toString: (radix: number) => string };
  total_allocated_bounty: number;
  in_progress_audits: number;
  completed_audits: number;
  active_researchers: number;
}

export interface ValidatorValidation {
  report_id: number;
  validator: { toString: (radix: number) => string };
  is_valid: boolean;
  reason: string;
  validated_at: number;
}
export interface ValidatorReport {
  id: number;
  researcher_report_id: number;
  validator_address: { toString: (radix: number) => string };
  project_id: number;
  title: string;
  category: string;
  severity_level: string;
  description: string;
  potential_risk: string;
  recommendation: string;
  is_valid: boolean;
  validation_reason: string;
  created_at: number;
  updated_at: number;
}

export interface ValidatorVoteOnValidation {
  report_id: number;
  voter: { toString: (radix: number) => string };
  agrees_with_validation: boolean;
  reason: string;
  voted_at: number;
}

export interface ProjectDetails {
  project: Project;
  researcher: Report[];
  validator_reports: ValidatorReport[];
  assigned_validator: validatorType;
  validator_validations: ValidatorValidation[];
  validation_votes: ValidatorVoteOnValidation[];
}

export function useCompleteProjectDetails(id: number) {
  const [projectsData, setProjectsData] = useState<
    ProjectDetails | undefined
  >();

  const { readData: data } = useContractFetch(
    FORTICHAINABI,
    "get_complete_project_details",
    [id]
  );

  useEffect(() => {
    if (!data || !id) return;

    const projectDetails: ProjectDetails = {
      project: {
        validator_paid: data.project.validator_paid,
        researchers_paid: data.project.researchers_paid,
        repository_url: data.project.repository_url,
        name: data.project.name,
        id: +data.project.id?.toString(),
        description: data.project.description,
        is_active: data.project.is_active,
        is_completed: data.project.is_completed,
        created_at: epocTime(data.project.created_at?.toString()),
        deadline: epocTime(data.project.deadline?.toString()),
        priority: shortString.decodeShortString(data.project.priority),
        project_type: data.project.project_type,
        updated_at: epocTime(data.project.deadline?.toString()),
        project_owner: `0x0${data.project["project_owner"].toString(16)}`,
        amount: +data.project.amount?.toString(),
        validator_assigned: data.project.validator_assigned,
      },

      researcher:
        data?.researcher_reports?.map((report: Report) => {
          return {
            title: report.title,
            category: report.category,
            validation_status: report.validation_status,
            researcher_address: `0x0${report["researcher_address"].toString(
              16
            )}`,
            severity_level: report.severity_level,
            id: +report.id?.toString(),
            project_id: +report.project_id?.toString(),
            description: report.description,
            potential_risk: report.potential_risk,
            created_at: epocTime(report.created_at?.toString()),
            validator_report_id: +report.validator_report_id?.toString(),
            status: shortString.decodeShortString(report.status),
            recommendation: report.recommendation,
            updated_at: epocTime(report.updated_at?.toString()),
          };
        }) || [],

      assigned_validator: {
        id: +data.assigned_validator.id?.toString(),
        validator_data_uri:
          data.assigned_validator.validator_data_uri?.toString(),
        created_at: epocTime(data.assigned_validator.created_at?.toString()),
        updated_at: epocTime(data.assigned_validator.updated_at?.toString()),
        status: data.assigned_validator.status?.toString(),
        kyc_uri: data.assigned_validator.kyc_uri?.toString(),
        kyc_approved: data.assigned_validator.kyc_approved?.toString(),
        username: data.assigned_validator.username?.toString(),
        github_profile_url:
          data.assigned_validator.github_profile_url?.toString(),
        is_open_for_work: data.assigned_validator.is_open_for_work,
        validator_address:
          data.assigned_validator.validator_address?.toString(16),
        approval_rate: +data.assigned_validator.approval_rate?.toString(),
        available_amount_to_widthdraw:
          +data.assigned_validator.available_amount_to_widthdraw?.toString(),
        number_project_validated:
          +data.assigned_validator.number_project_validated?.toString(),
        reputation: +data.assigned_validator.reputation?.toString(),
        total_amount_withdrawn:
          +data.assigned_validator.total_amount_withdrawn?.toString(),
        total_bounty_won: +data.assigned_validator.total_bounty_won?.toString(),
        passwork: data.assigned_validator.passwork,
      },

      validation_votes:
        data.validation_votes?.map((vote: ValidatorVoteOnValidation) => {
          return {
            report_id: +vote.report_id?.toString(),
            voter: `0x0${vote["voter"]?.toString(16)}`,
            agrees_with_validation: vote.agrees_with_validation,
            reason: vote.reason,
            voted_at: epocTime(vote.voted_at.toString()),
          };
        }) || [],

      validator_validations:
        data.validator_validations?.map((validation: ValidatorValidation) => {
          return {
            report_id: +validation.report_id?.toString(),
            validator_address: `0x0${validation["validator"]?.toString(16)}`,
            is_valid: validation.is_valid,
            reason: validation.reason,
            validated_at: epocTime(validation.validated_at?.toString()),
          };
        }) || [],

      validator_reports:
        data?.validator_reports?.map((validatorReport: ValidatorReport) => {
          return {
            id: +validatorReport.id.toString(),
            researcher_report_id:
              +validatorReport.researcher_report_id.toString(),
            validator_address: `0x0${validatorReport[
              "validator_address"
            ]?.toString(16)}`,
            project_id: +validatorReport.project_id.toString(),
            title: validatorReport.title,
            category: validatorReport.category,
            severity_level: validatorReport.severity_level,
            description: validatorReport.description,
            potential_risk: validatorReport.potential_risk,
            recommendation: validatorReport.recommendation,
            is_valid: validatorReport.is_valid,
            validation_reason: validatorReport.validation_reason,
            created_at: epocTime(validatorReport.created_at.toString()),
            updated_at: epocTime(validatorReport.updated_at.toString()),
          };
        }) || [],
    };

    setProjectsData(projectDetails);
  }, [data, id]);

  return projectsData;
}
export function useProjectOwner(address: string) {
  const [owner, setOwner] = useState<ProjectOwner | undefined>();
  const { readData: ownerData } = useContractFetch(
    FORTICHAINABI,
    "get_project_owner",
    [address]
  );
  useEffect(() => {
    if (!ownerData || !address) return; //

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
  useEffect(() => {
    if (!projectList) return; //
    const projectData: Project[] = [];
    projectList.forEach((data: Project) => {
      projectData.push({
        validator_paid: data.validator_paid,
        researchers_paid: data.researchers_paid,
        repository_url: data.repository_url,
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
    setProjectsData(projectData);
  }, [projectList]);

  return projectsData;
}

export function useValidators() {
  const [validators, setValidators] = useState<validatorType[]>();

  const { readData: validatorsData } = useContractFetch(
    FORTICHAINABI,
    "get_all_validators",
    []
  );
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
    setValidators(rawValidatorData);
  }, [validatorsData]);

  return validators;
}

export function useResearcherProjectsWorkedOn(address: string) {
  const [projectsData, setProjectsData] = useState<Project[] | undefined>();
  const { readData: projectList } = useContractFetch(
    FORTICHAINABI,
    "get_researcher_projects_worked_on",
    [address]
  );
  useEffect(() => {
    if (!projectList) return; //
    const projectData: Project[] = [];
    projectList.forEach((data: Project) => {
      projectData.push({
        validator_paid: data.validator_paid,
        researchers_paid: data.researchers_paid,
        repository_url: data.repository_url,
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
    setProjectsData(projectData);
  }, [projectList]);

  return projectsData;
}

export function useValidatorProjectsWorkedOn(address: string) {
  const [projectsData, setProjectsData] = useState<Project[] | undefined>();
  const { readData: projectList } = useContractFetch(
    FORTICHAINABI,
    // "",
    "get_assigned_projects_for_validator",
    [address]
  );
  useEffect(() => {
    if (!projectList) return; //
    const projectData: Project[] = [];
    projectList.forEach((data: Project) => {
      projectData.push({
        validator_paid: data.validator_paid,
        researchers_paid: data.researchers_paid,
        repository_url: data.repository_url,
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
    setProjectsData(projectData);
  }, [projectList]);

  return projectsData;
}

export function useReportsOnProject(id: number) {
  const [projectsData, setProjectsData] = useState<Report[] | undefined>();
  const { readData: reportList } = useContractFetch(
    FORTICHAINABI,
    // "get_all_reports_on_project",
    "get_pending_reports_for_validation",
    [id]
  );
  useEffect(() => {
    if (!reportList) return; //
    const projectData: Report[] = [];
    reportList.forEach((data: Report) => {
      projectData.push({
        title: data.title,
        category: data.category,
        validation_status: data.validation_status,
        researcher_address: `0x0${data["researcher_address"].toString(16)}`,
        severity_level: data.severity_level,
        id: +data.id.toString(),
        project_id: +data.project_id.toString(),
        description: data.description,
        potential_risk: data.potential_risk,
        created_at: epocTime(data.created_at.toString()),
        validator_report_id: +data.validator_report_id.toString(),
        status: shortString.decodeShortString(data.status),
        recommendation: data.recommendation,
        updated_at: epocTime(data.updated_at.toString()),
      });
    });
    setProjectsData(projectData);
  }, [reportList]);
  return projectsData;
}
export function UseGetUnassignedValidators() {
  const [validators, setValidators] = useState<validatorType[]>();

  const { readData: validatorsData } = useContractFetch(
    FORTICHAINABI,
    "get_unassigned_validators",
    []
  );
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
  useEffect(() => {
    if (!researchersData) return; //
    const rawResearchers: string[] = [];
    researchersData.forEach((data: string) => {
      // @ts-expect-error parmas can be undefined
      rawResearchers.push(`0x0${data.toString(16)}`);
    });
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
  useEffect(() => {
    if (!researchersData) return; //
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

// export function useProjectValidator(id: number) {
//   const [validators, setValidators] = useState<validatorType>();

//   const { readData: validatorsData } = useContractFetch(
//     FORTICHAINABI,
//     "get_assigned_project_validator",
//     [id]
//   );
//   useEffect(() => {
//     if (!validatorsData) return; //
//     const rawValidatorData: validatorType = {
//       validator_data_uri: validatorsData?.validator_data_uri?.toString(),
//       validator_address: `0x0${validatorsData?.validator_address?.toString(
//         16
//       )}`,
//       username: validatorsData?.username,
//       id: +validatorsData?.id?.toString(),
//       is_open_for_work: validatorsData?.is_open_for_work,
//       created_at: epocTime(validatorsData?.created_at?.toString()),
//       status: shortString?.decodeShortString(validatorsData?.status),
//       kyc_uri: validatorsData?.kyc_uri?.toString(),
//       updated_at: epocTime(validatorsData?.updated_at?.toString()),
//       kyc_approved: validatorsData?.kyc_approved?.toString(),
//       github_profile_url: validatorsData?.github_profile_url,
//       total_bounty_won: Number(validatorsData?.total_bounty_won),
//       approval_rate: Number(validatorsData?.approval_rate),
//       total_amount_withdrawn: Number(validatorsData?.total_amount_withdrawn),
//       reputation: Number(validatorsData?.reputation),
//       available_amount_to_widthdraw: Number(
//         validatorsData?.available_amount_to_withdraw
//       ),
//       number_project_validated: Number(
//         validatorsData?.number_project_validated
//       ),
//       passwork: validatorsData["1"],
//     };

//     setValidators(rawValidatorData);
//   }, [validatorsData]);

//   return validators;
// }

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

// Simplified ERC-20 ABI for USDC (includes balanceOf function)
const USDC_ABI = [
  {
    name: "balanceOf",
    type: "function",
    inputs: [
      {
        name: "account",
        type: "felt",
      },
    ],
    outputs: [
      {
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
  },
];

const USDC_CONTRACT_ADDRESS =
  "0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8"; // e.g., '0x05a...'

export const useUSDCBalance = () => {
  // Get the connected account and chain ID from Starknet React
  const { account, address } = useAccount();
  const [balance, setBalance] = useState(0);

  // Initialize the USDC contract
  const { readData: contract } = useContractFetch(
    USDC_ABI,
    USDC_CONTRACT_ADDRESS,
    []
  );

  const fetchBalance = useCallback(async () => {
    if (!account || !address || !contract) {
      console.error("Wallet not connected or contract not initialized");
      return null;
    }

    try {
      // Call the balanceOf function on the USDC contract
      const balanceResult = await contract.call("balanceOf", [address]);

      // Extract low and high parts of uint256 balance
      const balanceUint256 = uint256.uint256ToBN({
        low: balanceResult.balance.low,
        high: balanceResult.balance.high,
      });

      // Convert to human-readable format (USDC has 6 decimals)
      const balanceInUSDC = Number(balanceUint256) / 10 ** 6;
      setBalance(balanceInUSDC);
      console.log(`USDC Balance: ${balanceInUSDC}`);
      return balanceInUSDC.toString();
    } catch (error) {
      console.error("Error fetching USDC balance:", error);
      return null;
    }
  }, [account, address, contract]);

  return {
    fetchBalance,
    isLoading: !account || !contract, // Loading state if account or contract is not ready
    error: !account ? "Wallet not connected" : null,
    balance,
  };
};

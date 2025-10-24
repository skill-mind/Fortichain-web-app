import { AssignedValidator, ProjectData } from "@/util/types";
import { useState, useEffect, useCallback } from "react";
import { compareAddresses } from "./blockchainWriteFunction";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export interface ReportInput {
  category: string;
  description: string;
  potential_risk: string;
  project_id: number | string;
  recommendation: string;
  severity: string;
  title: string;
  wallet_address: string;
}

interface ReportResponse {
  id?: number;
  message?: string;
}

export interface ValidationInput {
  category_confirmation: string;
  reason: string;
  severity_level_confirmation: string;
  status: string;
  report_id: string;
  validator_wallet_address: string;
}
interface ValidationResponse {
  id?: string;
  message?: string;
}

export interface VoteInput {
  report_id: string;
  is_valid: boolean;
  reason: string;
  voter_wallet_address: string;
}
interface VoteResponse {
  id?: string;
  message?: string;
}

export const server = process.env.NEXT_PUBLIC_FORTICHAIN_API ?? "";
export function useFetchProjectDetails(id: number) {
  const fetchProjectDetails = async (): Promise<ProjectData> => {
    const response = await fetch(`${server}/projects/${id}/complete`);
    if (!response.ok) {
      throw new Error("Failed to fetch project details");
    }
    return response.json();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["projectDetails", id], // Unique key for caching
    queryFn: fetchProjectDetails,
    refetchInterval: 5000,
    retry: 2,
  });

  return {
    data: data?.data, // Extract the `data` property from the response
    loading: isLoading,
    error: error as Error | null,
  };
}

export function useResearcherReports() {
  const queryClient = useQueryClient();

  const mutation = useMutation<ReportResponse, Error, ReportInput>({
    mutationFn: async ({
      category,
      description,
      potential_risk,
      project_id,
      recommendation,
      severity,
      title,
      wallet_address,
    }) => {
      const response = await fetch(`${server}/reports`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category,
          description,
          potential_risk,
          project_id: +project_id,
          recommendation,
          severity,
          title,
          wallet_address,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `HTTP error! Status: ${response.status}, Body: ${errorText}`
        );
      }

      return response.json();
    },
    onSuccess: (data, variables) => {
      // Optionally invalidate related queries to refetch data
      queryClient.invalidateQueries({
        queryKey: ["projectDetails"],
      });
    },
    onError: (error) => {
      console.error("Error uploading project:", error);
    },
  });

  return {
    createReport: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
    data: mutation.data,
  };
}

export function useValidatorValidation() {
  const queryClient = useQueryClient();

  const mutation = useMutation<ValidationResponse, Error, ValidationInput>({
    mutationFn: async ({
      category_confirmation,
      reason,
      severity_level_confirmation,
      status,
      report_id,
      validator_wallet_address,
    }) => {
      const response = await fetch(`${server}/reports/${report_id}/validate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category_confirmation,
          reason,
          severity_level_confirmation,
          status,
          validator_wallet_address,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `HTTP error! Status: ${response.status}, Body: ${errorText}`
        );
      }

      return response.json();
    },
    onSuccess: (data, variables) => {
      console.log("Response:", data);
      // Optionally invalidate related queries to refetch data
      queryClient.invalidateQueries({
        queryKey: ["projectDetails" /* project_id */], // Add project_id if available
      });
    },
    onError: (error) => {
      console.error("Error uploading project:", error);
    },
  });

  return {
    validateReport: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
    data: mutation.data,
  };
}
export function useCheckWalletInValidators(
  walletAddress: string,
  projectId: number
) {
  const [isIncluded, setIsIncluded] = useState<boolean>(false);
  const [isAssignedValidator, setIsAssignedValidator] =
    useState<boolean>(false);
  const [assignedValidator, setAssignedValidator] =
    useState<AssignedValidator | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const checkWallet = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch validators list
      const validatorsResponse = await fetch(`${server}/validators`);
      if (!validatorsResponse.ok) {
        throw new Error("Failed to fetch validators");
      }
      const validatorsData = await validatorsResponse.json();

      // Check if wallet is in validators list
      const isFound = validatorsData.data.some((validator: AssignedValidator) =>
        compareAddresses(
          validator.wallet_address.toLowerCase(),
          walletAddress.toLowerCase()
        )
      );
      setIsIncluded(isFound);

      // Fetch project details
      const projectResponse = await fetch(
        `${server}/projects/${projectId}/complete`
      );
      if (!projectResponse.ok) {
        throw new Error("Failed to fetch project details");
      }
      const projectData: ProjectData = await projectResponse.json();

      // Check if wallet is the assigned validator for this project
      const assigned = projectData.data.assigned_validator;
      setAssignedValidator(assigned);
      console.log("isAss", assigned && assigned.wallet_address);
      if (assigned && assigned.wallet_address) {
        const isAssigned = compareAddresses(
          assigned.wallet_address.toLowerCase(),
          walletAddress.toLowerCase()
        );
        console.log("is_list", isAssigned);
        setIsAssignedValidator(isAssigned);
      } else {
        setIsAssignedValidator(false);
      }
    } catch (err) {
      console.error("Error checking wallet:", err);
      // setError(err.message || "Failed to check wallet");
      setIsIncluded(false);
      setIsAssignedValidator(false);
      setAssignedValidator(null);
    } finally {
      setLoading(false);
    }
  }, [walletAddress, projectId]);

  useEffect(() => {
    if (walletAddress && projectId) {
      checkWallet();
    }
  }, [walletAddress, projectId, checkWallet]);

  return {
    isIncluded,
    isAssignedValidator,
    assignedValidator,
    loading,
    error,
    refetch: checkWallet,
  };
}

export function useVoteReport() {
  const queryClient = useQueryClient();

  const mutation = useMutation<VoteResponse, Error, VoteInput>({
    mutationFn: async ({
      report_id,
      is_valid,
      reason,
      voter_wallet_address,
    }) => {
      const response = await fetch(`${server}/reports/${report_id}/vote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          is_valid,
          reason,
          voter_wallet_address,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `HTTP error! Status: ${response.status}, Body: ${errorText}`
        );
      }

      return response.json();
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["projectDetails"],
      });
    },
    onError: (error) => {
      console.error("Error uploading project:", error);
    },
  });

  return {
    voteReport: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
    data: mutation.data,
  };
}

// export function useValidatorCount() {
//   const [validatorCount, setValidatorCount] = useState<number>(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const controller = new AbortController();

//     const fetchValidatorCount = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const req = await fetch(`${server}/validators/count`);
//         if (!req.ok) throw new Error("Failed to fetch");

//         const count = await req.json();
//         setValidatorCount(count?.data?.count);
//       } catch (err) {
//         if (err !== "AbortError") {
//           setError(err instanceof Error ? err.message : "An error occurred");
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchValidatorCount();

//     return () => controller.abort();
//   }, [server]);

//   return { validatorCount, loading, error };
// }

// export function useProjectCount() {
//   const [projectCount, setProjectCount] = useState<number>(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const controller = new AbortController();

//     const fetchValidatorCount = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const req = await fetch(`${server}/projects/count`);
//         if (!req.ok) throw new Error("Failed to fetch");

//         const count = await req.json();
//         setProjectCount(count?.data?.count);
//       } catch (err) {
//         if (err !== "AbortError") {
//           setError(err instanceof Error ? err.message : "An error occurred");
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchValidatorCount();

//     return () => controller.abort();
//   }, [server]);

//   return { projectCount, loading, error };
// }

export function useResearcherEditReports() {
  const queryClient = useQueryClient();

  const mutation = useMutation<ReportResponse, Error, ReportInput>({
    mutationFn: async ({
      category,
      description,
      potential_risk,
      project_id: report_id,
      recommendation,
      severity,
      title,
      wallet_address,
    }) => {
      console.log({
        blockchain_tx_hash: "",
        category: category,
        description: description,
        potential_risk: potential_risk,
        recommendation: recommendation,
        report_id: report_id,
        severity: severity,
        title: title,
      });
      const response = await fetch(`${server}/reports/${report_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          blockchain_tx_hash: "",
          category: category,
          description: description,
          potential_risk: potential_risk,
          recommendation: recommendation,
          report_id: report_id,
          severity: severity,
          title: title,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `HTTP error! Status: ${response.status}, Body: ${errorText}`
        );
      }

      return response.json();
    },
    onSuccess: (data, variables) => {
      // Optionally invalidate related queries to refetch data
      queryClient.invalidateQueries({
        queryKey: ["projectDetails"],
      });
    },
    onError: (error) => {
      console.error("Error uploading project:", error);
    },
  });

  return {
    createReport: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
    data: mutation.data,
  };
}

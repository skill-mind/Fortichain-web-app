import { AssignedValidator, ProjectData } from "@/util/types";
import { useState, useEffect, useCallback } from "react";

// const server = "http://127.0.0.1:3001/api";
const server =
  process.env.NEXT_PUBLIC_FORTICHAIN_API ?? "http://127.0.0.1:3001/api";
export function useFetchProjectDetails(id: number) {
  const [data, setData] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Reset state when id changes
    setLoading(true);
    setError(null);

    async function fetchData() {
      try {
        const response = await fetch(`${server}/projects/${id}/complete`);

        if (!response.ok) {
          throw new Error("Failed to fetch project details");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]); // Only re-run when id changes

  return { data: data?.data, loading, error };
}

export const resercherReports = async (
  category: string,
  description: string,
  potential_risk: string,
  project_id: number,
  recommendation: string,
  severity: string,
  title: string,
  wallet_address: string
) => {
  try {
    const response = await fetch(`${server}/reports`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: category,
        description: description,
        potential_risk: potential_risk,
        project_id: +project_id,
        recommendation: recommendation,
        severity: severity,
        title: title,
        wallet_address: wallet_address,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text(); // Capture response body
      throw new Error(
        `HTTP error! Status: ${response.status}, Body: ${errorText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error uploading project:", error);
  }
};
// interface AssignedValidator {
//   wallet_address: string;
//   username: string;
//   status: string;
//   reputation: number;
//   // ... other fields
// }

// interface ProjectData {
//   approved_researchers: any[];
//   assigned_validator: AssignedValidator | null;
// }

// interface ProjectResponse {
//   status: string;
//   message: string;
//   data: ProjectData;
// }
export const validatorValidation = async (
  category_confirmation: string,
  reason: string,
  severity_level_confirmation: string,
  status: string,
  report_id: string,
  validator_wallet_address: string
) => {
  try {
    const response = await fetch(`${server}/reports/${report_id}/validate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        category_confirmation: category_confirmation,
        reason: reason,
        severity_level_confirmation: severity_level_confirmation,
        status: status,
        validator_wallet_address: validator_wallet_address,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text(); // Capture response body
      throw new Error(
        `HTTP error! Status: ${response.status}, Body: ${errorText}`
      );
    }

    const data = await response.json();
    console.log("Response:", data);
    return data;
  } catch (error) {
    console.log("Error uploading project:", error);
  }
};

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
      const isFound = validatorsData.data.some(
        (validator: AssignedValidator) =>
          validator.wallet_address.toLowerCase() === walletAddress.toLowerCase()
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

      if (assigned && assigned.wallet_address) {
        const isAssigned =
          assigned.wallet_address.toLowerCase() === walletAddress.toLowerCase();
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

export const voteReport = async (
  report_id: string,
  is_valid: boolean,
  reason: string,
  voter_wallet_address: string
) => {
  try {
    const response = await fetch(`${server}/reports/${report_id}/vote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        is_valid: is_valid,
        reason: reason,
        voter_wallet_address: voter_wallet_address,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text(); // Capture response body
      throw new Error(
        `HTTP error! Status: ${response.status}, Body: ${errorText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error uploading project:", error);
  }
};

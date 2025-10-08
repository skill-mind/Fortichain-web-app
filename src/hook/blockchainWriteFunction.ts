import { EditProjectProps } from "@/components/modals/edit-project";
import { validatorType } from "@/components/project-validator-launcher";
import { FORTICHAINADDRESS, myProvider, ONE_STK } from "@/contract/address";
import { RouterContextType, RouteState } from "@/provider/route-provider";
import { UploadProjectProps } from "@/util/types";
import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";
import {
  AccountInterface,
  byteArray,
  cairo,
  CallData,
  PaymasterDetails,
  shortString,
} from "starknet";

type SetIsSubmitting = (isSubmitting: boolean) => void;
type SetIsOpen = (isSubmitting: boolean) => void;
type SetIsError = (isSubmitting: boolean) => void;

export const uploadProjectHandle = async (
  account: AccountInterface | undefined,
  setIsSubmitting: SetIsSubmitting,
  formData: UploadProjectProps,
  setIsOpen: SetIsOpen,
  handler: () => void,
  setIsError: SetIsError
): Promise<void> => {
  const {
    amount,
    contractAddress,
    deadline,
    description,
    priority,
    projectName,
    projectType,
    repoUrl,
  } = formData;
  const minimun_amount =
    projectType === "L1 (Layer 1 Protocols)"
      ? 50000
      : projectType === "L2 (Layer 2 Protocols)"
      ? 20000
      : projectType === "dApps (Decentralized Applications)"
      ? 2000
      : 1000;

  if (!projectName) {
    toast.error("project name is required!");
    return;
  }
  if (!projectType) {
    toast.error("project type/category is required!");
    return;
  }
  if (!description) {
    toast.error("project description is required!");
    return;
  }
  if (!deadline) {
    toast.error("project deadline is required!");
    return;
  }
  if (!repoUrl) {
    toast.error("project  is required!");
    return;
  }

  if (contractAddress.length > 1 && contractAddress.length != 66) {
    toast.error("input a valid contract address");
    return;
  }
  if (amount == null || amount < minimun_amount) {
    toast.error(
      `minimum baounty amount for ${projectType} is ${minimun_amount}`
    );
    return;
  }
  if (!priority) {
    toast.error("project severity level is required!");
    return;
  }
  handler();
  try {
    setIsSubmitting(true);

    if (account != undefined && formData.amount && formData.deadline) {
      const Call = {
        contractAddress: FORTICHAINADDRESS,
        entrypoint: "upload_project",
        calldata: CallData.compile({
          name: byteArray.byteArrayFromString(formData.projectName),
          description: byteArray.byteArrayFromString(formData.description),
          project_type: byteArray.byteArrayFromString(formData.projectType),
          deadline: +formData.deadline,
          repository_url: byteArray.byteArrayFromString(formData.repoUrl),
          priority: formData.priority,
          smart_contract_address: formData.contractAddress,
          amount: cairo.uint256(10),
        }),
      };
      const approveCall = {
        contractAddress:
          "0x4718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d", // strk address // api i licencing comment out
        entrypoint: "approve",
        calldata: CallData.compile({
          spender: FORTICHAINADDRESS,
          amount: cairo.uint256(+formData?.amount * ONE_STK),
        }),
        // calldata: [
        //   FORTICHAINADDRESS, // spender
        //   cairo.uint256(+formData?.amount * ONE_STK),
        // ],
      };
      const multicallData = [approveCall, Call];
      // const feeDetails: PaymasterDetails = {
      //   feeMode: {
      //     mode: "sponsored",
      //   },
      // };

      // const feeEstimation = await account?.estimatePaymasterTransactionFee(
      //   [...multicallData],
      //   feeDetails
      // );

      // const result = await account?.executePaymasterTransaction(
      //   [...multicallData],
      //   feeDetails,
      //   feeEstimation?.suggested_max_fee_in_gas_token
      // );
      const result = await account.execute(multicallData);

      const status = await myProvider.waitForTransaction(
        result?.transaction_hash as string
      );
      setIsOpen(true);
      console.log(result);

      console.log(status);
    }
  } catch (error) {
    console.error("Error:", error);
    setIsError(true);
    toast.error("error uploading project");
  } finally {
    setIsSubmitting(false);
  }
};

export const EditProjectHandle = async (
  account: AccountInterface | undefined,
  setIsSubmitting: SetIsSubmitting,
  formData: EditProjectProps,
  setIsOpen: SetIsOpen,
  handler: () => void,
  setIsError: SetIsError
): Promise<void> => {
  const { projectId, description, repoUrl } = formData;

  if (!description) {
    toast.error("project description is required!");
    return;
  }
  if (!repoUrl) {
    toast.error("project  is required!");
    return;
  }
  // handler();
  try {
    setIsOpen(true);
    setIsSubmitting(true);

    if (account != undefined) {
      const Call = {
        contractAddress: FORTICHAINADDRESS,
        entrypoint: "edit_project",
        calldata: CallData.compile({
          project_id: cairo.uint256(formData.projectId),
          description: byteArray.byteArrayFromString(formData.description),
          repository_url: byteArray.byteArrayFromString(formData.repoUrl),
        }),
      };

      const multicallData = [Call];
      const feeDetails: PaymasterDetails = {
        feeMode: {
          mode: "sponsored",
        },
      };

      // const feeEstimation = await account?.estimatePaymasterTransactionFee(
      //   [...multicallData],
      //   feeDetails
      // );

      // const result = await account?.executePaymasterTransaction(
      //   [...multicallData],
      //   feeDetails,
      //   feeEstimation?.suggested_max_fee_in_gas_token
      // );
      const result = await account.execute(multicallData);

      const status = await myProvider.waitForTransaction(
        result?.transaction_hash as string
      );
      setIsOpen(true);
      console.log(result);

      console.log(status);
    }
  } catch (error) {
    console.error("Error:", error);
    setIsError(true);
    toast.error("error editing project");
  } finally {
    setIsSubmitting(false);
  }
};

export const writeReport = async (
  account: AccountInterface | undefined,
  data: {
    id: number;
    title: string;
    severity_level: string;
    category: string;
    potential_risk: string | null | undefined;
    recommendation: string | null | undefined;
    description: string | null | undefined;
  },
  setIsSubmitting: SetIsSubmitting
  // formData: EditProjectProps,
  // setIsOpen: SetIsOpen,
  // handler: () => void,
  // setIsError: SetIsError
): Promise<void> => {
  // const { projectId, description, repoUrl } = formData;

  // if (!description) {
  //   toast.error("project description is required!");
  //   return;
  // }
  // if (!repoUrl) {
  //   toast.error("project  is required!");
  //   return;
  // }
  // handler();
  try {
    // setIsOpen(true);
    setIsSubmitting(true);
    console.log("hey", data.description);
    if (
      account != undefined &&
      data.potential_risk &&
      data.recommendation &&
      data.description
    ) {
      console.log("hey");
      const Call = {
        contractAddress: FORTICHAINADDRESS,
        entrypoint: "write_report",
        calldata: CallData.compile({
          project_id: cairo.uint256(data.id),
          title: byteArray.byteArrayFromString(data.title),
          description: byteArray.byteArrayFromString(
            "smart contracts can interact with user private keys in various ways to facilitate secure transactions, authentication, or asset management. However"
          ),
          category: byteArray.byteArrayFromString(data.category),
          severity_level: byteArray.byteArrayFromString(data.severity_level),
          potential_risk: byteArray.byteArrayFromString(data.potential_risk),
          recommendation: byteArray.byteArrayFromString(data.recommendation),
          // title: byteArray.byteArrayFromString("hello world"),
          // description: byteArray.byteArrayFromString("sam"),
          // category: byteArray.byteArrayFromString("kelv"),
          // severity_level: byteArray.byteArrayFromString("High"),
          // potential_risk: byteArray.byteArrayFromString("user lose some"),
          // recommendation: byteArray.byteArrayFromString(
          //   "no recommendation yet"
          // ),
        }),
      };

      console.log(Call);
      const multicallData = [Call];
      const feeDetails: PaymasterDetails = {
        feeMode: {
          mode: "sponsored",
        },
      };

      // const feeEstimation = await account?.estimatePaymasterTransactionFee(
      //   [...multicallData],
      //   feeDetails
      // );

      // const result = await account?.executePaymasterTransaction(
      //   [...multicallData],
      //   feeDetails,
      //   feeEstimation?.suggested_max_fee_in_gas_token
      // );
      const result = await account.execute(multicallData);

      const status = await myProvider.waitForTransaction(
        result?.transaction_hash as string
      );
      // setIsOpen(true);
      console.log(result);

      console.log(status);
    }
  } catch (error) {
    console.error("Error:", error);
    // setIsError(true);
    toast.error("error editing project");
  } finally {
    setIsSubmitting(false);
  }
};

export const validateReport = async (
  account: AccountInterface | undefined,
  data: {
    id: number;
    status: string;
    severity_level: string;
    audit_report: string;
    description: string | null | undefined;
  },
  setIsSubmitting: SetIsSubmitting
  // formData: EditProjectProps,
  // setIsOpen: SetIsOpen,
  // handler: () => void,
  // setIsError: SetIsError
): Promise<void> => {
  // const { projectId, description, repoUrl } = formData;

  // if (!description) {
  //   toast.error("project description is required!");
  //   return;
  // }
  // if (!repoUrl) {
  //   toast.error("project  is required!");
  //   return;
  // }
  // handler();
  try {
    // setIsOpen(true);
    setIsSubmitting(true);
    console.log("hey", data.description);
    if (account != undefined && data.description) {
      console.log("hey");
      const Call = {
        contractAddress: FORTICHAINADDRESS,
        entrypoint: "validate_report",
        calldata: CallData.compile({
          project_id: cairo.uint256(data.id),
          status: byteArray.byteArrayFromString(data.status),
          severity_level_confirmation: byteArray.byteArrayFromString(
            data.severity_level
          ),
          category_confirmation: byteArray.byteArrayFromString(
            data.audit_report
          ),
          reason: byteArray.byteArrayFromString(data.description),
          // reason: byteArray.byteArrayFromString(
          //   "smart contracts can interact with user private keys in various ways to facilitate secure transactions, authentication, or asset management. However"
          // ),
          // title: byteArray.byteArrayFromString("hello world"),
          // description: byteArray.byteArrayFromString("sam"),
          // category: byteArray.byteArrayFromString("kelv"),
          // severity_level: byteArray.byteArrayFromString("High"),
          // potential_risk: byteArray.byteArrayFromString("user lose some"),
          // recommendation: byteArray.byteArrayFromString(
          //   "no recommendation yet"
          // ),
        }),
      };

      console.log(Call);
      const multicallData = [Call];
      const feeDetails: PaymasterDetails = {
        feeMode: {
          mode: "sponsored",
        },
      };

      // const feeEstimation = await account?.estimatePaymasterTransactionFee(
      //   [...multicallData],
      //   feeDetails
      // );

      // const result = await account?.executePaymasterTransaction(
      //   [...multicallData],
      //   feeDetails,
      //   feeEstimation?.suggested_max_fee_in_gas_token
      // );
      const result = await account.execute(multicallData);

      const status = await myProvider.waitForTransaction(
        result?.transaction_hash as string
      );
      // setIsOpen(true);
      console.log(result);

      console.log(status);
    }
  } catch (error) {
    console.error("Error:", error);
    // setIsError(true);
    toast.error("error editing project");
  } finally {
    setIsSubmitting(false);
  }
};

export const validatorWithdrawal = async (
  account: AccountInterface | undefined,
  data: {
    amount: number;
    address: string;
  }
  // setIsSubmitting: SetIsSubmitting
  // formData: EditProjectProps,
  // setIsOpen: SetIsOpen,
  // handler: () => void,
  // setIsError: SetIsError
): Promise<void> => {
  // const { projectId, description, repoUrl } = formData;

  // if (!description) {
  //   toast.error("project description is required!");
  //   return;
  // }
  // if (!repoUrl) {
  //   toast.error("project  is required!");
  //   return;
  // }
  // handler();
  try {
    // setIsOpen(true);
    // setIsSubmitting(true);
    if (account != undefined) {
      console.log("hey");
      const Call = {
        contractAddress: FORTICHAINADDRESS,
        entrypoint: "withdraw_validator_bounty",
        calldata: CallData.compile({
          address: data.address,
          amount: cairo.uint256(data.amount),
        }),
      };

      console.log(Call);
      const multicallData = [Call];
      const feeDetails: PaymasterDetails = {
        feeMode: {
          mode: "sponsored",
        },
      };

      // const feeEstimation = await account?.estimatePaymasterTransactionFee(
      //   [...multicallData],
      //   feeDetails
      // );

      // const result = await account?.executePaymasterTransaction(
      //   [...multicallData],
      //   feeDetails,
      //   feeEstimation?.suggested_max_fee_in_gas_token
      // );
      const result = await account.execute(multicallData);

      const status = await myProvider.waitForTransaction(
        result?.transaction_hash as string
      );
      // setIsOpen(true);
      console.log(result);

      console.log(status);
    }
  } catch (error) {
    console.error("Error:", error);
    // setIsError(true);
    toast.error("error editing project");
  } finally {
    // setIsSubmitting(false);
  }
};

export const create_validator_profile = async (
  account: AccountInterface | undefined,
  setIsSubmitting: SetIsSubmitting,
  formData: validatorType,
  setIsOpen: SetIsOpen,
  // handler: () => void,
  setIsError: SetIsError,
  setter: Dispatch<SetStateAction<RouteState>>,
  redirect: (url: string) => void
): Promise<void> => {
  const { userName, address, githubLink, passworks } = formData;

  if (!githubLink.startsWith("https://github.com/")) {
    toast.error("A valid github link is required");
    return;
  }
  if (passworks.length < 0) {
    toast.error("passwork link is required");
    return;
  }
  const wrongPassWorkLink: string[] = passworks.filter(
    (m: string) => !m.startsWith("https://github.com/")
  );
  if (wrongPassWorkLink.length > 0) {
    toast.error("A valid github link is required for passworks");
    return;
  }
  // handler();
  try {
    setIsOpen(true);
    setIsSubmitting(true);
    const pass = passworks.filter((data) => data !== "");
    console.log(pass);
    if (account != undefined) {
      const Call = {
        contractAddress: FORTICHAINADDRESS,
        entrypoint: "create_validator",
        calldata: CallData.compile({
          validator_address: address,
          username: byteArray.byteArrayFromString(userName),
          github_profile_url: byteArray.byteArrayFromString(githubLink),
          pass_work: pass,
        }),
      };
      console.log(Call);
      const multicallData = [Call];
      // const feeDetails: PaymasterDetails = {
      //   feeMode: {
      //     mode: "sponsored",
      //   },
      // };

      // const feeEstimation = await account?.estimatePaymasterTransactionFee(
      //   [...multicallData],
      //   feeDetails
      // );

      // const result = await account?.executePaymasterTransaction(
      //   [...multicallData],
      //   feeDetails,
      //   feeEstimation?.suggested_max_fee_in_gas_token
      // );
      const result = await account.execute(multicallData);

      const status = await myProvider.waitForTransaction(
        result?.transaction_hash as string
      );
      setter((prev) => {
        return { ...prev, isComplete: true };
      });
      console.log(result);

      console.log(status);
      redirect("/validator");
      setIsOpen(true);
    }
  } catch (error) {
    console.error("Error:", error);
    setIsError(true);
    toast.error("error creating validator profile");
  } finally {
    setIsSubmitting(false);
  }
};

export const create_resercher_profile = async (
  account: AccountInterface | undefined,
  setIsSubmitting: SetIsSubmitting,
  formData: { userName: string; address: string },
  setIsOpen: SetIsOpen,
  // handler: () => void,
  setIsError: SetIsError,
  setter: Dispatch<SetStateAction<RouteState>>,
  redirect: (url: string) => void
): Promise<void> => {
  const { userName, address } = formData;
  if (!address) {
    toast.error("connect your wallet");
    return;
  }
  if (!userName) {
    toast.error("user name with minimum 5 charcter is required");
    return;
  }
  // handler();
  try {
    setIsOpen(true);
    setIsSubmitting(true);

    if (account != undefined) {
      const Call = {
        contractAddress: FORTICHAINADDRESS,
        entrypoint: "create_security_researcher",
        calldata: CallData.compile({
          validator_address: address,
          username: byteArray.byteArrayFromString(userName),
        }),
      };
      console.log(Call);
      const multicallData = [Call];
      // const feeDetails: PaymasterDetails = {
      //   feeMode: {
      //     mode: "sponsored",
      //   },
      // };

      // const feeEstimation = await account?.estimatePaymasterTransactionFee(
      //   [...multicallData],
      //   feeDetails
      // );

      // const result = await account?.executePaymasterTransaction(
      //   [...multicallData],
      //   feeDetails,
      //   feeEstimation?.suggested_max_fee_in_gas_token
      // );
      const result = await account.execute(multicallData);

      const status = await myProvider.waitForTransaction(
        result?.transaction_hash as string
      );
      setIsOpen(true);
      console.log(result);

      console.log(status);
      setter((prev) => {
        return { ...prev, isComplete: true };
      });
      redirect("/researcher");
    }
  } catch (error) {
    console.error("Error:", error);
    setIsError(true);
    toast.error("error editing project");
  } finally {
    setIsSubmitting(false);
  }
};

export const assign_validator = async (
  projectId: number,
  address: string,
  account: AccountInterface | undefined,
  setIsSubmitting: SetIsSubmitting,
  setIsOpen: SetIsOpen,
  // handler: () => void,
  setIsError: SetIsError
): Promise<void> => {
  // handler();
  console.log(address);
  try {
    setIsOpen(true);
    setIsSubmitting(true);

    if (account != undefined) {
      const Call = {
        contractAddress: FORTICHAINADDRESS,
        entrypoint: "assign_validator",
        calldata: CallData.compile({
          project_id: cairo.uint256(projectId),
          validator_address: address,
        }),
      };
      const approve_validator_call = {
        contractAddress: FORTICHAINADDRESS,
        entrypoint: "approve_validator",
        calldata: CallData.compile({
          validator_address: address,
        }),
      };

      console.log(Call);
      const multicallData = [approve_validator_call, Call];
      // const feeDetails: PaymasterDetails = {
      //   feeMode: {
      //     mode: "sponsored",
      //   },
      // };

      // const feeEstimation = await account?.estimatePaymasterTransactionFee(
      //   [...multicallData],
      //   feeDetails
      // );

      // const result = await account?.executePaymasterTransaction(
      //   [...multicallData],
      //   feeDetails,
      //   feeEstimation?.suggested_max_fee_in_gas_token
      // );
      const result = await account.execute(multicallData);

      const status = await myProvider.waitForTransaction(
        result?.transaction_hash as string
      );
      setIsOpen(true);
      console.log(result);

      console.log(status);
    }
  } catch (error) {
    console.error("Error:", error);
    setIsError(true);
    toast.error("error editing project");
  } finally {
    setIsSubmitting(false);
  }
};

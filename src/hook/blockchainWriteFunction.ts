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
import {
  resercherReports,
  validatorValidation,
  voteReport,
} from "./fetch-requests";
import { ViewSection } from "@/app/(Routes)/projects/component/resercher-report-editors";
import {
  SetShowReport,
  ValdatorViewHandler,
} from "@/app/(Routes)/projects/component/validator-report-editor";

type SetIsSubmitting = (isSubmitting: boolean) => void;
type SetIsOpen = (isSubmitting: boolean) => void;
type SetIsSuccess = (isSubmitting: boolean) => void;

export const uploadProjectHandle = async (
  account: AccountInterface | undefined,
  setIsSubmitting: SetIsSubmitting,
  formData: UploadProjectProps,
  setIsOpen: SetIsOpen,
  handler: () => void,
  setIsError: SetIsSuccess
): Promise<void> => {
  const {
    amount,
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

  if (amount == null || amount <= 0) {
    toast.error(`minimum baounty amount for ${projectType} is 1 STRK`);
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
          amount: cairo.uint256(formData.amount),
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
  setIsError: SetIsSuccess
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
  address: string,
  setIsSubmitting: SetIsSubmitting,
  setViewSection: ViewSection
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
    if (
      account != undefined &&
      data.potential_risk &&
      data.recommendation &&
      data.description
    ) {
      const description = JSON.stringify(data.description);
      const risk = JSON.stringify(data.potential_risk);
      const recommendation = JSON.stringify(data.recommendation);

      const Call = {
        contractAddress: FORTICHAINADDRESS,
        entrypoint: "write_report",
        calldata: CallData.compile({
          project_id: cairo.uint256(data.id),
          title: byteArray.byteArrayFromString(""),
          description: byteArray.byteArrayFromString(""),
          category: byteArray.byteArrayFromString(""),
          severity_level: byteArray.byteArrayFromString(""),
          potential_risk: byteArray.byteArrayFromString(""),
          recommendation: byteArray.byteArrayFromString(""),
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
      await resercherReports(
        data.category,
        description,
        risk,
        data.id,
        recommendation,
        data.severity_level,
        data.title,
        address
      );
      // setIsOpen(true);
      console.log(result);

      console.log(status);
      setViewSection("none");
      toast.success("report submitted");
    }
  } catch (error) {
    console.error("Error:", error);
    // setIsError(true);
    toast.error("error editing project");
  } finally {
    setIsSubmitting(false);
  }
};

export const voteOnValidation = async (
  account: AccountInterface | undefined,
  report_id: string,
  voteType: string,
  reason: HTMLDivElement | null,
  setIsSubmitting: SetIsSubmitting,
  address: string,
  setShowReport: SetShowReport
): Promise<void> => {
  try {
    // setIsOpen(true);
    setIsSubmitting(true);
    if (account != undefined) {
      //@ts-expect-error parmas can be undefined
      const voteReason = JSON.stringify(reason?.getJSON());

      // const Call = {
      //   contractAddress: FORTICHAINADDRESS,
      //   entrypoint: "vote_on_validation",
      //   calldata: CallData.compile({
      //     report_id: cairo.uint256(report_id),
      //     agrees_with_validation: voteType === "Invalid" ? false : true,
      //     reason: byteArray.byteArrayFromString(""),
      //   }),
      // };

      // const multicallData = [Call];
      // const feeDetails: PaymasterDetails = {
      //   feeMode: {
      //     mode: "sponsored",
      //   },
      // };

      // // const feeEstimation = await account?.estimatePaymasterTransactionFee(
      // //   [...multicallData],
      // //   feeDetails
      // // );

      // // const result = await account?.executePaymasterTransaction(
      // //   [...multicallData],
      // //   feeDetails,
      // //   feeEstimation?.suggested_max_fee_in_gas_token
      // // );
      // const result = await account.execute(multicallData);

      // const status = await myProvider.waitForTransaction(
      //   result?.transaction_hash as string
      // );
      await voteReport(
        report_id,
        voteType === "Invalid" ? false : true,
        voteReason,
        address
      );
      // setIsOpen(true);
      // console.log(result);

      // console.log(status);
      setShowReport("");
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
    id: string;
    status: string;
    severity_level: string;
    audit_report: string;
    description: string | null | undefined;
  },
  setIsSubmitting: SetIsSubmitting,
  project_id: number,
  address: string,
  valdatorViewHandler: ValdatorViewHandler,
  setShowReport: SetShowReport
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
    if (account != undefined && data.description) {
      const reason = JSON.stringify(data.description);
      // let add = `0x${normalizeAddress(address).slice(1)}`;
      // console.log(add);
      // const Call = {
      //   contractAddress: FORTICHAINADDRESS,
      //   entrypoint: "validate_report",
      //   calldata: CallData.compile({
      //     validator_address: add,
      //     project_id: cairo.uint256(project_id),
      //     status: byteArray.byteArrayFromString(""),
      //     severity_level_confirmation: byteArray.byteArrayFromString(""),
      //     category_confirmation: byteArray.byteArrayFromString(""),
      //     reason: byteArray.byteArrayFromString(""),
      //   }),
      // };

      // const multicallData = [Call];
      // const feeDetails: PaymasterDetails = {
      //   feeMode: {
      //     mode: "sponsored",
      //   },
      // };

      // // const feeEstimation = await account?.estimatePaymasterTransactionFee(
      // //   [...multicallData],
      // //   feeDetails
      // // );

      // // const result = await account?.executePaymasterTransaction(
      // //   [...multicallData],
      // //   feeDetails,
      // //   feeEstimation?.suggested_max_fee_in_gas_token
      // // );
      // const result = await account.execute(multicallData);

      // const status = await myProvider.waitForTransaction(
      //   result?.transaction_hash as string
      // );
      console.log(data);
      await validatorValidation(
        data.status,
        reason,
        data.severity_level,
        data.audit_report,
        data.id.toString(),
        address
      );
      // setIsOpen(true);
      // console.log(result);

      // console.log(status);
    }
  } catch (error) {
    console.error("Error:", error);
    // setIsError(true);
    toast.error("error editing project");
    valdatorViewHandler("none");
    setShowReport("");
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
      const Call = {
        contractAddress: FORTICHAINADDRESS,
        entrypoint: "withdraw_validator_bounty",
        calldata: CallData.compile({
          address: data.address,
          amount: cairo.uint256(data.amount),
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

export const normalizeAddress = (address: string): string => {
  // Remove 0x prefix if present
  if (address.length === 66) {
    // console.log("man-2",address.slice(2))
    return `${address.slice(2)}`;
  }
  const cleanAddress = address.startsWith("0x") ? address.slice(2) : address;

  // Pad with zeros to make it 64 characters (standard length)
  const paddedAddress = cleanAddress.padStart(64, "0");
  // console.log("man-",paddedAddress);
  // Add back 0x prefix
  return `${paddedAddress.slice()}`;
};

export const compareAddresses = (addr1: string, addr2: string): boolean => {
  const normalized1 = normalizeAddress(addr1.toLowerCase());
  const normalized2 = normalizeAddress(addr2.toLowerCase());
  console.log(normalized1 === normalized2);
  return normalized1 === normalized2;
};

export const create_validator_profile = async (
  account: AccountInterface | undefined,
  setIsSubmitting: SetIsSubmitting,
  formData: validatorType,
  setIsSuccess: SetIsSuccess,
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
  try {
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

      const _ = await myProvider.waitForTransaction(
        result?.transaction_hash as string
      );
      setter((prev) => {
        return { ...prev, isComplete: true };
      });
      redirect("/validator");
    }
  } catch (error) {
    console.error("Error:", error);
    // toast.error("error creating validator profile");
  } finally {
    setIsSubmitting(false);
    setIsSuccess(true);
  }
};

export const create_resercher_profile = async (
  account: AccountInterface | undefined,
  setIsSubmitting: SetIsSubmitting,
  formData: { userName: string; address: string },
  setIsSuccess: SetIsSuccess,
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
  try {
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
      redirect("/researcher");
    }
  } catch (error) {
    console.error("Error:", error);
    // toast.error("error creating resercher profile");
  } finally {
    setIsSubmitting(false);
    setIsSuccess(true);
  }
};

export const assign_validator = async (
  projectId: number,
  address: string,
  account: AccountInterface | undefined,
  setIsSubmitting: SetIsSubmitting,
  setIsOpen: SetIsOpen,
  // handler: () => void,
  setIsSuccess: SetIsSuccess
): Promise<void> => {
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
    setIsSuccess(true);
    toast.error("error editing project");
  } finally {
    setIsSubmitting(false);
  }
};

import { EditProjectProps } from "@/components/modals/edit-project";
import { FORTICHAINADDRESS, myProvider, ONE_STK } from "@/contract/address";
import { UploadProjectProps } from "@/util/types";
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

  if (contractAddress.length != 66) {
    toast.error("input a valid contract address");
    return;
  }
  if (amount == null || amount < 2) {
    toast.error("minimum baounty amount is $100");
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
          amount: cairo.uint256(formData.amount),
        }),
      };
      console.log(Call);
      const approveCall = {
        contractAddress:
          "0x4718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d", // strk address
        entrypoint: "approve",
        calldata: [
          FORTICHAINADDRESS, // spender
          cairo.uint256(+formData?.amount * ONE_STK),
        ],
      };
      const multicallData = [approveCall, Call];
      const feeDetails: PaymasterDetails = {
        feeMode: {
          mode: "sponsored",
        },
      };

      const feeEstimation = await account?.estimatePaymasterTransactionFee(
        [...multicallData],
        feeDetails
      );

      const result = await account?.executePaymasterTransaction(
        [...multicallData],
        feeDetails,
        feeEstimation?.suggested_max_fee_in_gas_token
      );
      // const result = await account.execute(multicallData);

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
      console.log(Call);
      const multicallData = [Call];
      const feeDetails: PaymasterDetails = {
        feeMode: {
          mode: "sponsored",
        },
      };

      const feeEstimation = await account?.estimatePaymasterTransactionFee(
        [...multicallData],
        feeDetails
      );

      const result = await account?.executePaymasterTransaction(
        [...multicallData],
        feeDetails,
        feeEstimation?.suggested_max_fee_in_gas_token
      );
      // const result = await account.execute(multicallData);

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

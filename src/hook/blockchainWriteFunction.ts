import { FORTICHAINADDRESS, myProvider, ONE_STK } from "@/contract/address";
import { UploadProjectProps } from "@/util/types";
import { AccountInterface, byteArray, cairo, CallData } from "starknet";

type SetIsSubmitting = (isSubmitting: boolean) => void;

export const uploadProjectHandle = async (
  account: AccountInterface | undefined,
  setIsSubmitting: SetIsSubmitting,
  formData: UploadProjectProps
): Promise<void> => {
  try {
    setIsSubmitting(true);
    console.log(+formData.deadline);
    if (account != undefined && formData.amount) {
      const Call = {
        contractAddress: FORTICHAINADDRESS,
        entrypoint: "upload_project",
        calldata: CallData.compile({
          name: byteArray.byteArrayFromString(formData.projectName),
          description: byteArray.byteArrayFromString(formData.description),
          project_type: byteArray.byteArrayFromString(formData.projectType),
          deadline: +formData.deadline,
          repository_url: byteArray.byteArrayFromString(formData.repoUrl),
          priority: 1751738216,
          smart_contract_address: formData.contractAddress,
          amount: cairo.uint256(formData.amount),
        }),
      };
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
      const result = await account.execute(multicallData);

      const status = await myProvider.waitForTransaction(
        result?.transaction_hash as string
      );

      console.log(result);

      console.log(status);
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    setIsSubmitting(false);
  }
};

// "use client";

// import { UploadProjectProps } from "@/util/types";
// import { useAccount } from "@starknet-react/core";

// const handleSubmit = async ({ formData }: { formData: UploadProjectProps }) => {
//   // e.preventDefault();

//   // Basic validation
//   if (!formData.projectName.trim()) {
//     console.error("Group name is required");
//     return;
//   }

//   try {
//     // const amount = parseFloat(formData.amount);

//     if (account != undefined && formData.usage) {
//       const swiftpayCall = {
//         contractAddress: PAYMESH_ADDRESS,
//         entrypoint: "create_group",
//         calldata: CallData.compile({
//           name: byteArray.byteArrayFromString(formData.name),
//           members: formData.members,
//           usage_count: cairo.uint256(+formData?.usage),
//         }),
//       };
//       const approveCall = {
//         contractAddress: strkTokenAddress,
//         entrypoint: "approve",
//         calldata: [
//           PAYMESH_ADDRESS, // spender
//           cairo.uint256(+formData?.usage * ONE_STK),
//           // "1000000000000000000",
//           // "0"
//         ],
//       };

//       const multicallData = [approveCall, swiftpayCall];
//       // const result = await account.execute(multicallData)

//       const feeDetails: PaymasterDetails = {
//         feeMode: {
//           mode: "sponsored",
//         },
//       };

//       const feeEstimation = await account?.estimatePaymasterTransactionFee(
//         [...multicallData],
//         feeDetails
//       );

//       const result = await account?.executePaymasterTransaction(
//         [...multicallData],
//         feeDetails,
//         feeEstimation?.suggested_max_fee_in_gas_token
//       );

//       const status = await myProvider.waitForTransaction(
//         result?.transaction_hash as string
//       );

//       console.log(result);
//       setResultHash(result.transaction_hash);
//       console.log(status);
//     }

//     // Reset form
//     setFormData({
//       name: "",
//       usage: null,
//       tokenAddress: "",
//       members: [
//         { addr: "", percentage: 0 },
//         { addr: "", percentage: 0 },
//       ],
//     });
//     setIsCheckboxChecked(false);
//   } catch (error) {
//     console.error("Error creating group:", error);
//   } finally {
//     setIsSubmitting(false);
//   }
// };

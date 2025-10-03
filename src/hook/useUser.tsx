import { useAccount } from "@starknet-react/core";
import {
  useContractFetch,
  useResearchers,
  useValidators,
} from "./useBlockchain";
import { Router } from "@/provider/route-provider";
import { useContext, useEffect } from "react";
import { FORTICHAINABI } from "@/contract/abi";
import { redirect } from "next/navigation";
import { compareAddresses } from "@/util/helper";

export function UseUser() {
  const { address, account } = useAccount();
  const researchers = useResearchers();
  const platformValidators = useValidators();
  const { setter, launchModal } = useContext(Router);

  const { readData: owner } = useContractFetch(FORTICHAINABI, "owner", []);

  useEffect(() => {
    if (!account) return;
    const researcherChecker = researchers?.filter((data) =>
      compareAddresses(String(data), String(address))
    );
    const validatorChecker = platformValidators?.filter((data) =>
      compareAddresses(String(data?.validator_address), String(address))
    );

    console.log(researcherChecker, validatorChecker);
    if (
      owner &&
      address != `0x0${owner?.toString(16)}` &&
      validatorChecker?.length == 0 &&
      researcherChecker?.length === 0
    )
      setter((prev) => {
        return { ...prev, launchModal: true };
      });
  }, [address, researchers, platformValidators]);

  useEffect(() => {
    if (!researchers) return;
    const checker = researchers?.filter((data) =>
      compareAddresses(String(data), String(address))
    );
    if (checker.length > 0) {
      setter((prev) => {
        return { ...prev, isComplete: true, route: "researcher" };
      });
      redirect("/researcher");
    }
  }, [researchers, address]);
  useEffect(() => {
    if (owner && address === `0x0${owner?.toString(16)}`) {
      setter((prev) => {
        return { ...prev, isComplete: true, route: "admin" };
      });
      redirect("/admin");
    }
  }, [address, owner]);

  useEffect(() => {
    if (!platformValidators) return;
    const checker = platformValidators?.filter((data) =>
      compareAddresses(String(data?.validator_address), String(address))
    );
    if (checker.length > 0) {
      setter((prev) => {
        return { ...prev, isComplete: true, route: "validator" };
      });
      redirect("/validator");
    }
  }, [platformValidators, address]);
}

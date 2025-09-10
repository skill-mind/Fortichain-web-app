import { RpcProvider } from "starknet";

export const FORTICHAINADDRESS =
  "0x05885250a8c218ae396281965daf8ab011c3e5ca12d4d8ac12e46199cd5e432a";
// "0x008c46c6442a61c5e61e5a5353b42394db7fb2e627e73250109368a0beb0fc2d";
// "0x00b33437d7d836069f3446addc9f150017f2d6d5f0b23e2eec9fac12cd72323e";
// "0x76ff3f9fb2242a63d6fca83f8034969cc344b0da2e7a289594027cfeb08fe60";
// "0x3cfcd8cd65e9c06a768bc0d428f7b53c5e10290449f6ee7eff1f877fddde165";

export const myProvider = new RpcProvider({
  nodeUrl: process.env.NEXT_PUBLIC_RPC_URL,
});
export const ONE_STK = 1000000000000000000;

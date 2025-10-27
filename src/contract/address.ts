import { RpcProvider } from "starknet";

export const FORTICHAINADDRESS =
  "0x00d2a9ced61a6cc2d16ab71f557171c91ac1fe1fb6e0911899fafa25707379da"; // -- MAINNET ADDRESS
// "0x012240995cf3916aed785097ef2d2083afb9943fa6f2458faf8f7aa7554146fe";
// "0x063d333c889af0e58a2d68d6d90f41ef11d3ab0b941b18eda875d91f23573609"; // latest testing
// "0x00cd136b659ab7909b4af0f9aee472ea3ad7e683703b57c5c10aee051496c61f";
// "0x0031569ae81b445f1c5e4e4a7d98a4cf1e867faa74c5daae95efdb2b0c7b04a2"; // live with skillnet
// "0x061f6c77582ee3343467a4cf5a60dbf772dfb0334124fde3b1dd979287e57554";
// "0x046fc883bf2c2b3a0eaa22b6a94e63c435031653dcb32f099d5f9aa763658729"; -- before smart contract remove from upload
// "0x03f7d8ac843c559e2916c0377a8b884d6d31b1931a5d06b1d9a94617e7214103"; -- before indexer
// "0x01f1f1aff4ce8999569c1d3d2b444167bd26cb3693888b3fed8c139b73976baf";  // most work is here
// "0x04351b83499c4635a81ab633a6021ff4c8a9d4ca8dee4d6d3b206a1c1f582156"; // with role
// "0x05e3ab4a07dd45237cb6eef2b7cb572c22aaf9a1bac7d5845affc273156cd0a9"; // updated with upgrade capability ------
// "0x04554dca71a6227d3933d01d42c96fa1e2e85281ff528a0d1a9dbcc686e4c34a"; // latest with validator creating currect flow
// "0x04f8730d129390eb7c0c2f86a1949e0701f1fe930f8f54acd37d31a16661fcd7"; // latest ca woith project bounty
// "0x3b97fd08a4c09446276618dfee6ef13f223aab50c135e86b871962b8369e36"; //latest working ca by gideon
// "0x05885250a8c218ae396281965daf8ab011c3e5ca12d4d8ac12e46199cd5e432a"; // the one i deploy that work
// "0x008c46c6442a61c5e61e5a5353b42394db7fb2e627e73250109368a0beb0fc2d";
// "0x00b33437d7d836069f3446addc9f150017f2d6d5f0b23e2eec9fac12cd72323e";
// "0x76ff3f9fb2242a63d6fca83f8034969cc344b0da2e7a289594027cfeb08fe60";
// "0x3cfcd8cd65e9c06a768bc0d428f7b53c5e10290449f6ee7eff1f877fddde165";

export const myProvider = new RpcProvider({
  nodeUrl: process.env.NEXT_PUBLIC_RPC_URL,
});
export const ONE_STK = 1000000000000000000;

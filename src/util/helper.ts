import { useBalance } from "@starknet-react/core";

export const formatAddress = (address: string, len = 6, lenRight = 4) => {
  return `${address.slice(0, len)}...${address.slice(-lenRight)}`;
};

export const normalizeAddress = (address: string): string => {
  // Remove 0x prefix if present
  if (address.length === 66) {
    return `${address.slice(2)}`;
  }
  const cleanAddress = address.startsWith("0x") ? address.slice(2) : address;

  // Pad with zeros to make it 64 characters (standard length)
  const paddedAddress = cleanAddress.padStart(64, "0");
  // Add back 0x prefix
  return `${paddedAddress}`;
};

export const compareAddresses = (addr1: string, addr2: string): boolean => {
  const normalized1 = normalizeAddress(addr1.toLowerCase());
  const normalized2 = normalizeAddress(addr2.toLowerCase());

  return normalized1 === normalized2;
};

interface TiptapNode {
  type: string; //
  content?: TiptapNode[];
  text?: string;
  attrs?: Record<string, string>;
}

interface TiptapJSON {
  type: "doc";
  content: TiptapNode[];
}

// Utility function to convert Tiptap JSON to plain text
export const getTextFromTiptapJSON = (
  json: TiptapJSON | null | undefined
): string => {
  if (!json || !json.content) return "";

  let text = "";

  const processNode = (node: TiptapNode): void => {
    if (node.type === "text" && node.text) {
      text += node.text;
    }
    if (node.content && Array.isArray(node.content)) {
      node.content.forEach((child) => processNode(child));
    }
  };

  json.content.forEach((node) => processNode(node));

  return text.trim();
};

export const useGetBalance = (userAddress: string) => {
  const { data: balance } = useBalance({
    token:
      "0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d" as `0x${string}`,
    address: userAddress
      ? (userAddress as `0x${string}`)
      : ("0x0" as `0x${string}`),
  });

  return balance;
};

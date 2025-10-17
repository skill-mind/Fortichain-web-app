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

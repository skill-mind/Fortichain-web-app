export const formatAddress = (address: string, len = 6, lenRight = 4) => {
  return `${address.slice(0, len)}...${address.slice(-lenRight)}`;
};

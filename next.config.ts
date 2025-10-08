import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["https://forti-chain.xyz/"],
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
};

export default nextConfig;

import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
// Example: app/layout.tsx or a component file
import localFont from "next/font/local";
import { StarknetProvider } from "@/provider/walletProvider";
import logo from "../../public/Logo (2).svg";
import RouteProvider from "@/provider/route-provider";

const myCustomFont = localFont({
  src: "../../public/fonts/GT-Walsheim-Medium-Trial-BF651b7fc728fb3.otf", // Relative path from the current file
  display: "swap", // Recommended for better performance
  weight: "500",
  style: "medieum",
  variable: "--font-walsheim",
});

export const metadata: Metadata = {
  title: "FortiChain - Decentralized Blockchain Security Platform",
  description:
    "Enhance blockchain security through automated vulnerability disclosure and bug bounty processes. Trustless, transparent, and secure smart contract auditing on FortiChain.",
  keywords: [
    "blockchain security",
    "smart contract auditing",
    "bug bounty",
    "vulnerability disclosure",
    "decentralized security",
    "FortiChain",
    "DeFi security",
    "smart contract vulnerabilities",
    "security researchers",
    "automated rewards",
    "trustless auditing",
    "Web3 security",
  ],
  authors: [{ name: "FortiChain Team" }],
  creator: "FortiChain",
  publisher: "FortiChain",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://fortichain.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fortichain.io",
    title: "FortiChain - Decentralized Blockchain Security Platform",
    description:
      "Enhance blockchain security through automated vulnerability disclosure and bug bounty processes. Trustless, transparent, and secure smart contract auditing.",
    siteName: "FortiChain",
    images: [
      {
        url: "/favicon.svg",
        width: 1200,
        height: 630,
        alt: "FortiChain - Decentralized Blockchain Security Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FortiChain - Decentralized Blockchain Security Platform",
    description:
      "Enhance blockchain security through automated vulnerability disclosure and bug bounty processes.",
    images: ["/favicon.svg"],
    creator: "@fortichain",
    site: "@fortichain",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg" },
      {
        url: "/favicon.svg",
        sizes: "192x192",
        type: "image/svg+xml",
      },
      {
        url: "/favicon.svg",
        sizes: "512x512",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "/favicon.svg",
        sizes: "180x180",
        type: "image/svg+xml",
      },
    ],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date();
  return (
    <html lang="en">
      <head></head>
      <body
        className={`text-white-text font-walsheim relative mx-auto bg-main-bg ${myCustomFont.variable}`}
        suppressHydrationWarning={true}
      >
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              padding: "20px 20px",
              background: "#101011",
              color: "#E2E2E2",
              border: "1px solid #1F1F1F",
            },
          }}
        />
        <StarknetProvider>
          <RouteProvider>
            <div className="min-h-screen">{children}</div>
          </RouteProvider>
        </StarknetProvider>
          </RouteProvider>
        </StarknetProvider>

        <footer className="px-3 py-5 border-t w-full bottom-0 text-center h-fit  border-dark-border-gray ">
          <span className="text-gray-text text-base">
            © {year.getFullYear()} FortiChain. All rights reserved. Built on
            Starknet.
          </span>
        </footer>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import { ScrollManager } from "@/components/scroll-manager";
import "./globals.css";

const switzer = localFont({
  src: [
    {
      path: "./fonts/Switzer-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Switzer-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Switzer-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Switzer-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Switzer-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-switzer",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: [
    {
      path: "./fonts/JetBrainsMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/JetBrainsMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Root14",
  description:
    "Zero-knowledge state transition infrastructure for the Stellar Soroban VM. Private transfers, shielded balances, verifiable computation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${switzer.variable} ${jetbrainsMono.variable} antialiased`}>
        <ScrollManager />
        {children}
      </body>
    </html>
  );
}

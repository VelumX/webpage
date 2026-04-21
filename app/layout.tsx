import type { Metadata } from "next";
import { Inter, Bungee } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bungee",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://velumx.xyz"),
  title: "VelumX — Gasless Bitcoin DeFi on Stacks",
  description:
    "VelumX is the gas abstraction protocol for Stacks (Bitcoin L2). Bridge, swap, and transact using only USDCx — no STX required.",
  icons: {
    icon: "/velumx-icon.svg",
  },
  alternates: {
    canonical: "https://velumx.xyz",
  },
  openGraph: {
    title: "VelumX — Gasless Bitcoin DeFi on Stacks",
    description:
      "Bridge, swap, and transact on Bitcoin L2 without holding STX. Powered by the VelumX gas abstraction protocol.",
    url: "https://velumx.xyz",
    siteName: "VelumX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bungee.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

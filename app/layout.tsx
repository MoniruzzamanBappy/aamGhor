import type { Metadata, Viewport } from "next";
import { Hind_Siliguri } from "next/font/google";
import { siteConfig } from "../lib/data";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${siteConfig.brandNameBn} | রাজশাহীর আম`,
  description:
    "আম ঘর - রাজশাহীর তাজা আম্রপালি আম অর্ডার করুন। মাত্র ১৩০ টাকা/কেজি, সর্বনিম্ন ৫ কেজি। পিকআপ পয়েন্ট ভুট্টো চত্বর, ডেমরা, ঢাকা।",
  keywords: [
    "আম ঘর",
    "AamGhor",
    "Aam Ghor",
    "রাজশাহীর আম",
    "আম্রপালি আম",
    "ম্যাংগো অর্ডার",
  ],
  openGraph: {
    title: `${siteConfig.brandNameBn} | রাজশাহীর আম্রপালি আম`,
    description:
      "মাত্র ১৩০ টাকা/কেজি। সর্বনিম্ন অর্ডার ৫ কেজি। পিকআপ: ভুট্টো চত্বর।",
    type: "website",
    locale: "bn_BD",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d2415",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bn">
      <body className={`${hindSiliguri.variable} antialiased`}>{children}</body>
    </html>
  );
}

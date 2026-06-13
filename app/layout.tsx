import type { Metadata, Viewport } from "next";
import { Hind_Siliguri } from "next/font/google";
import { siteConfig } from "../lib/data";
import "./globals.css";

const siteUrl = "https://aam-ghor.vercel.app";

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.brandNameBn} | রাজশাহীর আম`,
    template: `%s | ${siteConfig.brandNameBn}`,
  },
  description:
    "রাজশাহীর তাজা আম্রপালি আম অর্ডার করুন। মাত্র ৳১৩০/কেজি, সর্বনিম্ন ৫ কেজি। পিকআপ পয়েন্ট ভুট্টো চত্বর, ডেমরা, ঢাকা।",
  keywords: [
    "আম ঘর",
    "Aam Ghor",
    "AamGhor",
    "রাজশাহীর আম",
    "আম্রপালি আম",
    "ম্যাংগো অর্ডার",
    "mango order Bangladesh",
    "আম ঘর",
    "রাজশাহীর আম",
    "আম্রপালি আম",
    "আম অর্ডার ঢাকা",
    "Aam Ghor",
    "Rajshahi mango",
    "Aam",
    "am",
    "mango",
    "amrapali",
    "Rajshahi",
    "আম্রপালি",
    "mngo",
    "আম",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "আম ঘর | রাজশাহীর তাজা আম্রপালি",
    description:
      "৳১৩০/কেজি রাজশাহীর আম্রপালি। সর্বনিম্ন অর্ডার ৫ কেজি। পিকআপ: ভুট্টো চত্বর, ডেমরা, ঢাকা।",
    url: "/",
    siteName: "আম ঘর",
    type: "website",
    locale: "bn_BD",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "আম ঘর - রাজশাহীর আম্রপালি আম",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "আম ঘর | রাজশাহীর তাজা আম্রপালি",
    description: "৳১৩০/কেজি রাজশাহীর আম্রপালি। সর্বনিম্ন অর্ডার ৫ কেজি।",
    images: ["/og-image.jpg"],
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

import type { Metadata } from "next";
import { Geist, Azeret_Mono as Geist_Mono } from "next/font/google";
import "./globals.css";
import type React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kisanji Enterprises - Reliable Temperature-Controlled Logistics Across Kenya",
  description:
    "Kisanji Enterprises specializes in temperature-controlled road transport, ensuring safe and timely delivery of perishable goods across Kenya. Our modern fleet of refrigerated trucks and advanced tracking systems deliver reliable logistics solutions for food, pharmaceutical, and other temperature-sensitive industries.",
  keywords:
    "cold chain logistics, temperature-controlled transport, refrigerated trucks, perishable goods delivery, Kenya logistics, food logistics, pharmaceutical logistics, quality assurance, Kisanji Enterprises, reliable delivery",
  authors: [{ name: "Kisanji Enterprises" }],
  creator: "Kisanji Enterprises",
  publisher: "Kisanji Enterprises",
  openGraph: {
    title: "Kisanji Enterprises - Reliable Temperature-Controlled Logistics Across Kenya",
    description:
      "Providing safe and timely delivery of perishable goods with a modern fleet and state-of-the-art tracking systems. Trusted by the food, pharmaceutical, and temperature-sensitive industries across Kenya.",
    url: "https://www.kisanjienterprise.com",
    siteName: "Kisanji Enterprises",
    images: [
      {
        url: "https://www.kisanjienterprise.com/og-image.jpg", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Kisanji Enterprises - Temperature-Controlled Logistics",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kisanji Enterprises - Reliable Temperature-Controlled Logistics",
    description:
      "Safe, timely, and efficient delivery of perishable goods across Kenya with our modern refrigerated fleet and advanced tracking systems.",
    images: ["https://www.kisanjienterprise.com/twitter-image.jpg"], // Replace with your actual Twitter image URL
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
  verification: {
    google: "your-google-site-verification-code", // Replace with your actual Google verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

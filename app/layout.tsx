import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Navigations/Header";
import Footer from "@/Components/Navigations/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://swiftcoders.dev";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "SwiftCoders — Modern Web Development Studio",
    template: "%s | SwiftCoders",
  },
  description:
    "SwiftCoders builds fast, modern, and scalable websites that help businesses grow. React, Next.js, and Tailwind — shipped in weeks, not months.",
  keywords: ["web development", "Next.js", "React", "Tailwind", "frontend studio", "SwiftCoders"],
  authors: [{ name: "SwiftCoders", url: BASE_URL }],
  creator: "SwiftCoders",
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "SwiftCoders",
    title: "SwiftCoders — Modern Web Development Studio",
    description:
      "We build fast, modern websites that scale with your business. React, Next.js, Tailwind — shipped in weeks.",
    images: [
      {
        url: "/og-image.JPG",
        width: 1200,
        height: 630,
        alt: "SwiftCoders — Modern Web Development Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SwiftCoders — Modern Web Development Studio",
    description:
      "We build fast, modern websites that scale with your business. React, Next.js, Tailwind — shipped in weeks.",
    images: ["/og-image.JPG"],
    creator: "@swiftcoders",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="pt-15">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

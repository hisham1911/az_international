import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";

import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import WhatsAppButton from "@/components/whatsapp-button";

import SpinnerLoader from "./components/spinner-loader";
import Loading from "./loading";

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Use swap to prevent FOIT (Flash of Invisible Text)
});

export const metadata: Metadata = {
  title: "AZ INTERNATIONAL - Engineering & Technical Consulting",
  description:
    "Engineering inspection, technical consultancy, and engineering training services",
  // Add cache control headers
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://azinternational.com"
  ),
  alternates: {
    canonical: "/",
  },
  generator: "v0.dev",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to domains for faster loading */}
        <link
          rel="preconnect"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com"
        />

        {/* Preload critical assets */}
        <link
          rel="preload"
          href="/images/az-logo.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/images/engineer-industrial.png"
          as="image"
          type="image/png"
          fetchPriority="high"
        />
      </head>
      <body className="font-sans">
        {/* Navigation loading spinner */}
        <SpinnerLoader />

        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
          <Footer />
          {/* Floating WhatsApp Button */}
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}

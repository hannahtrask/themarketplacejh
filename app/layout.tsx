import type { Metadata } from "next";
import { Orelega_One, Work_Sans } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const orelegaOne = Orelega_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display"
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://themarketplacejh.com"),
  title: "The Marketplace JH",
  description: "The Marketplace: Marketplace for Jackson freelancers and small business owners.",
  openGraph: {
    title: "The Marketplace JH",
    description: "Connect with the right people. Build sustainable work. Join the community.",
    url: "https://themarketplacejh.com",
    siteName: "The Marketplace JH",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orelegaOne.variable} ${workSans.variable}`}>
      <body className="font-body antialiased">
        <div className="min-h-screen bg-market-glow">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

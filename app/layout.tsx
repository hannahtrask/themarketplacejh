import type { Metadata } from "next";
import { Orelega_One, Work_Sans } from "next/font/google";
import Script from "next/script";
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
  title: {
    default: "The Marketplace JH | Jackson Freelancer Directory",
    template: "%s | The Marketplace JH"
  },
  description:
    "A community-powered directory and event hub for Jackson, WY freelancers and small business owners.",
  applicationName: "The Marketplace JH",
  keywords: [
    "Jackson WY freelancers",
    "Jackson Wyoming small business",
    "freelancer directory",
    "local creative community",
    "The Marketplace JH"
  ],
  authors: [{ name: "The Marketplace JH" }],
  creator: "The Marketplace JH",
  publisher: "The Marketplace JH",
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: "The Marketplace JH | Jackson Freelancer Directory",
    description:
      "Connect with freelancers and small business owners in Jackson, WY. Browse the directory, join events, and get listed.",
    url: "https://themarketplacejh.com",
    siteName: "The Marketplace JH",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/workspace.jpg",
        width: 1200,
        height: 630,
        alt: "The Marketplace JH community"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "The Marketplace JH | Jackson Freelancer Directory",
    description:
      "Connect with freelancers and small business owners in Jackson, WY. Browse the directory, join events, and get listed.",
    images: ["/images/workspace.jpg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Marketplace JH",
    url: "https://themarketplacejh.com",
    logo: "https://themarketplacejh.com/icon.svg",
    sameAs: ["https://www.instagram.com/themarketplacejh/"]
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "The Marketplace JH",
    url: "https://themarketplacejh.com",
    description:
      "A community-powered directory and event hub for Jackson, WY freelancers and small business owners."
  };

  return (
    <html lang="en" className={`${orelegaOne.variable} ${workSans.variable}`}>
      <body className="font-body antialiased">
        <Script id="organization-jsonld" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(organizationJsonLd)}
        </Script>
        <Script id="website-jsonld" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(websiteJsonLd)}
        </Script>
        <div className="min-h-screen bg-market-glow">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

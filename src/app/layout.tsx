import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { BRAND, SEO } from "@/lib/constants";
import { asset, IS_PREVIEW } from "@/lib/asset";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const display = localFont({
  src: "../fonts/norwester.woff",
  variable: "--font-display-raw",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body-raw",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.siteUrl),
  title: {
    default: SEO.home.title,
    template: "%s | MSU Entrepreneurship Association",
  },
  description: SEO.home.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BRAND.siteUrl,
    siteName: BRAND.name,
    title: SEO.home.title,
    description: SEO.home.description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: BRAND.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.home.title,
    description: SEO.home.description,
    images: ["/og-image.jpg"],
  },
  // The subpath preview must never be indexed; canonicals already point
  // at msuea.org, and an indexed preview would compete with it at launch.
  robots: IS_PREVIEW
    ? { index: false, follow: false, nocache: true }
    : { index: true, follow: true },
  icons: { icon: asset("/favicon.svg") },
};

export const viewport: Viewport = {
  themeColor: "#18453b",
  width: "device-width",
  initialScale: 1,
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BRAND.siteUrl}/#org`,
  name: BRAND.name,
  alternateName: BRAND.short,
  url: BRAND.siteUrl,
  logo: `${BRAND.siteUrl}/images/ea-mark.svg`,
  email: BRAND.email,
  foundingDate: String(BRAND.founded),
  sameAs: [BRAND.instagram, BRAND.linkedin],
  parentOrganization: {
    "@type": "CollegeOrUniversity",
    name: BRAND.university,
    url: "https://msu.edu",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "East Lansing",
    addressRegion: "MI",
    addressCountry: "US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-forest"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </body>
    </html>
  );
}

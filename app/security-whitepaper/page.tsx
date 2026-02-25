import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { WhitepaperHero } from "@/components/sections/security-whitepaper/Hero";
import { WhitepaperDownloads } from "@/components/sections/security-whitepaper/WhitepaperDownloads";
import { WhatsNewInV11 } from "@/components/sections/security-whitepaper/WhatsNewInV11";
import { WhitepaperTrustBadges } from "@/components/sections/security-whitepaper/TrustBadges";
import { WhitepaperExecutiveSummary } from "@/components/sections/security-whitepaper/ExecutiveSummary";
import { WhitepaperProtocolStandards } from "@/components/sections/security-whitepaper/ProtocolStandards";
import { WhitepaperTokenSecurityModel } from "@/components/sections/security-whitepaper/TokenSecurityModel";
import { WhitepaperOwaspMitigationTable } from "@/components/sections/security-whitepaper/OwaspMitigationTable";
import { WhitepaperZeroTrustSection } from "@/components/sections/security-whitepaper/ZeroTrustSection";
import { WhitepaperComplianceMapping } from "@/components/sections/security-whitepaper/ComplianceMapping";
import { WhitepaperSecurityRoadmap } from "@/components/sections/security-whitepaper/SecurityRoadmap";
import { siteConfig } from "@/content/site";
import { whitepaperSeo } from "@/content/whitepaper";

export const metadata: Metadata = {
  title: whitepaperSeo.title,
  description: whitepaperSeo.description,
  keywords: whitepaperSeo.keywords,
  openGraph: {
    title: whitepaperSeo.title,
    description: whitepaperSeo.description,
    url: `${siteConfig.url}/security-whitepaper`,
  },
  twitter: {
    card: "summary_large_image",
    title: whitepaperSeo.title,
    description: whitepaperSeo.description,
  },
  robots: "index, follow",
};

function WhitepaperJsonLd() {
  const baseUrl = siteConfig.url;
  const techArticle = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    name: "Zentra Security Whitepaper — Version 1.1",
    description: whitepaperSeo.description,
    datePublished: "2026-02-01",
    author: { "@type": "Organization", name: siteConfig.companyFull },
    publisher: { "@type": "Organization", name: siteConfig.companyFull },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${baseUrl}/security-whitepaper` },
  };
  const softwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    description: "Evidence-based identity infrastructure. OAuth 2.0 & OpenID Connect, STRIDE-modeled, RFC-compliant.",
    provider: { "@type": "Organization", name: siteConfig.companyFull },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApp) }} />
    </>
  );
}

export default function SecurityWhitepaperPage() {
  return (
    <>
      <WhitepaperJsonLd />
      <Header />
      <main id="main" role="main">
        <WhitepaperHero />
        <WhitepaperDownloads />
        <WhatsNewInV11 />
        <WhitepaperTrustBadges />
        <WhitepaperExecutiveSummary />
        <WhitepaperProtocolStandards />
        <WhitepaperTokenSecurityModel />
        <WhitepaperOwaspMitigationTable />
        <WhitepaperZeroTrustSection />
        <WhitepaperComplianceMapping />
        <WhitepaperSecurityRoadmap />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { WhitepaperHero } from "@/components/sections/security-whitepaper/Hero";
import { WhitepaperExecutiveSummary } from "@/components/sections/security-whitepaper/ExecutiveSummary";
import { WhitepaperTrustBadges } from "@/components/sections/security-whitepaper/TrustBadges";
import { WhitepaperProtocolStandards } from "@/components/sections/security-whitepaper/ProtocolStandards";
import { WhitepaperTokenSecurityModel } from "@/components/sections/security-whitepaper/TokenSecurityModel";
import { WhitepaperOwaspMitigationTable } from "@/components/sections/security-whitepaper/OwaspMitigationTable";
import { WhitepaperZeroTrustSection } from "@/components/sections/security-whitepaper/ZeroTrustSection";
import { WhitepaperComplianceMapping } from "@/components/sections/security-whitepaper/ComplianceMapping";
import { WhitepaperSecurityRoadmap } from "@/components/sections/security-whitepaper/SecurityRoadmap";
import { WhitepaperGatedDownloadForm } from "@/components/sections/security-whitepaper/GatedDownloadForm";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Zentra Security Whitepaper | Enterprise OAuth 2.0 & OpenID Connect",
  description:
    "Download the official Zentra Security Whitepaper covering Zero Trust Architecture, OAuth 2.0, OIDC, OWASP mitigation, and enterprise compliance readiness.",
  keywords: [
    "OAuth 2.0 identity provider",
    "OpenID Connect server",
    "Enterprise SSO whitepaper",
    "Self-hosted identity provider",
    "JWT security architecture",
  ],
  openGraph: {
    title: "Zentra Security Whitepaper | Enterprise OAuth 2.0 & OpenID Connect",
    description:
      "Download the official Zentra Security Whitepaper covering Zero Trust Architecture, OAuth 2.0, OIDC, OWASP mitigation, and enterprise compliance readiness.",
    url: `${siteConfig.url}/security-whitepaper`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Zentra Security Whitepaper | Enterprise OAuth 2.0 & OpenID Connect",
    description:
      "Download the official Zentra Security Whitepaper covering Zero Trust Architecture, OAuth 2.0, OIDC, OWASP mitigation, and enterprise compliance readiness.",
  },
  robots: "index, follow",
};

function WhitepaperJsonLd() {
  const baseUrl = siteConfig.url;
  const techArticle = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    name: "Zentra Security Whitepaper — Version 1.0",
    description:
      "Enterprise Identity Platform — Security Architecture & Compliance. Zero Trust, OAuth 2.0, OpenID Connect, OWASP mitigation, and compliance readiness.",
    datePublished: "2026-02-01",
    author: {
      "@type": "Organization",
      name: siteConfig.companyFull,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.companyFull,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/security-whitepaper`,
    },
  };

  const softwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    description:
      "Security-first identity infrastructure designed for SaaS and distributed systems. Enterprise-grade OAuth 2.0 & OpenID Connect without vendor lock-in.",
    provider: {
      "@type": "Organization",
      name: siteConfig.companyFull,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApp) }}
      />
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
        <WhitepaperTrustBadges />
        <WhitepaperExecutiveSummary />
        <WhitepaperProtocolStandards />
        <WhitepaperTokenSecurityModel />
        <WhitepaperOwaspMitigationTable />
        <WhitepaperZeroTrustSection />
        <WhitepaperComplianceMapping />
        <WhitepaperSecurityRoadmap />
        <WhitepaperGatedDownloadForm />
      </main>
      <Footer />
    </>
  );
}

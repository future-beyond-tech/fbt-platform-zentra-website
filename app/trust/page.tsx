import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { TrustHero } from "@/components/sections/trust/TrustHero";
import { TrustSecurityOverview } from "@/components/sections/trust/TrustSecurityOverview";
import { TrustWhitepapers } from "@/components/sections/trust/TrustWhitepapers";
import { TrustSecurityControls } from "@/components/sections/trust/TrustSecurityControls";
import { TrustGovernance } from "@/components/sections/trust/TrustGovernance";
import { TrustVulnerabilityDisclosure } from "@/components/sections/trust/TrustVulnerabilityDisclosure";
import { TrustSecurityRoadmap } from "@/components/sections/trust/TrustSecurityRoadmap";
import { siteConfig } from "@/content/site";
import { trustSeo } from "@/content/trust";

export const metadata: Metadata = {
  title: trustSeo.title,
  description: trustSeo.description,
  keywords: trustSeo.keywords,
  openGraph: {
    title: trustSeo.title,
    description: trustSeo.description,
    url: `${siteConfig.url}/trust`,
  },
  twitter: {
    card: "summary_large_image",
    title: trustSeo.title,
    description: trustSeo.description,
  },
  robots: "index, follow",
};

export default function TrustPage() {
  return (
    <>
      <Header />
      <main id="main" role="main">
        <TrustHero />
        <TrustSecurityOverview />
        <TrustWhitepapers />
        <TrustSecurityControls />
        <TrustGovernance />
        <TrustVulnerabilityDisclosure />
        <TrustSecurityRoadmap />
      </main>
      <Footer />
    </>
  );
}

import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { WhatZentraSolves } from "@/components/sections/WhatZentraSolves";
import { SecurityHighlights } from "@/components/sections/SecurityHighlights";
import { ProtocolComplianceMatrix } from "@/components/sections/ProtocolComplianceMatrix";
import { CoreCapabilities } from "@/components/sections/CoreCapabilities";
import { ArchitectureOverview } from "@/components/sections/ArchitectureOverview";
import { EnterpriseTrust } from "@/components/sections/EnterpriseTrust";
import { UseCases } from "@/components/sections/UseCases";
import { Comparison } from "@/components/sections/Comparison";
import { Roadmap } from "@/components/sections/Roadmap";
import { SecurityCommitment } from "@/components/sections/SecurityCommitment";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { CTA } from "@/components/sections/CTA";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" role="main">
        <Hero />
        <Problem />
        <WhatZentraSolves />
        <SecurityHighlights />
        <ProtocolComplianceMatrix />
        <CoreCapabilities />
        <ArchitectureOverview />
        <EnterpriseTrust />
        <UseCases />
        <Comparison />
        <Roadmap />
        <SecurityCommitment />
        <TrustSignals />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

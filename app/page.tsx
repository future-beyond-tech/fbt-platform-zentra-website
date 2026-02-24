import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { WhatZentraSolves } from "@/components/sections/WhatZentraSolves";
import { CoreCapabilities } from "@/components/sections/CoreCapabilities";
import { UseCases } from "@/components/sections/UseCases";
import { Comparison } from "@/components/sections/Comparison";
import { Roadmap } from "@/components/sections/Roadmap";
import { SecurityCommitment } from "@/components/sections/SecurityCommitment";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { ArchitectureViz } from "@/components/sections/ArchitectureViz";
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
        <CoreCapabilities />
        <UseCases />
        <Comparison />
        <Roadmap />
        <SecurityCommitment />
        <TrustSignals />
        <ArchitectureViz />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

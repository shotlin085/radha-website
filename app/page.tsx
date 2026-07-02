import { RadhaRevealHero } from "@/components/sections/RadhaRevealHero";
import { ConnectedPlatformIntro } from "@/components/sections/ConnectedPlatformIntro";
import { ScanProductTruth } from "@/components/sections/ScanProductTruth";
import { LabelIntelligence } from "@/components/sections/LabelIntelligence";
import { PersonalisedProductSafety } from "@/components/sections/PersonalisedProductSafety";
import { RetailOperationsEngine } from "@/components/sections/RetailOperationsEngine";
import { BusinessPulse } from "@/components/sections/BusinessPulse";
import { PrivateByDesign } from "@/components/sections/PrivateByDesign";
import { CompleteEcosystem } from "@/components/sections/CompleteEcosystem";
import { AudienceOverview } from "@/components/sections/AudienceOverview";
import { CapabilityMatrix } from "@/components/sections/CapabilityMatrix";
import { Faq } from "@/components/sections/Faq";
import { FinalDemoCta } from "@/components/sections/FinalDemoCta";
import { ProgressRailProvider } from "@/components/motion/ProgressRailContext";
import { VerifyProgressRail } from "@/components/motion/VerifyProgressRail";
import { MarqueeBand } from "@/components/motion/MarqueeBand";
import { ManifestoBand } from "@/components/sections/ManifestoBand";

export default function Home() {
  return (
    <ProgressRailProvider>
      <main id="main-content">
        <RadhaRevealHero />
        <ConnectedPlatformIntro />
        <ScanProductTruth />
        <LabelIntelligence />
        <PersonalisedProductSafety />
        <RetailOperationsEngine />
        <BusinessPulse />
        <PrivateByDesign />
        <CompleteEcosystem />
        <ManifestoBand />
        <AudienceOverview />
        <CapabilityMatrix />
        <Faq />
        <MarqueeBand />
        <FinalDemoCta />
      </main>
      <VerifyProgressRail />
    </ProgressRailProvider>
  );
}

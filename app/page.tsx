import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { ProtocolStats } from "@/components/sections/protocol-stats";
import { ThreatModelSection } from "@/components/sections/threat-model-section";
import { Architecture } from "@/components/sections/architecture";
import { ProtocolComparisonSection } from "@/components/sections/protocol-comparison-section";
import { UseCasesSection } from "@/components/sections/use-cases-section";
import { Standards } from "@/components/sections/standards";
import ImageFooter from "@/components/sections/imageFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <ProtocolStats />
      <ThreatModelSection />
      <Architecture />
      <ProtocolComparisonSection />
      <UseCasesSection />
      <Standards />
      <ImageFooter/>
    </div>
  );
}

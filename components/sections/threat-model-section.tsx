"use client";

import { SectionHeader } from "@/components/section-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { StripedPattern } from "@/components/striped-pattern";
import { ThreatModel } from "@/components/threat-model";

export function ThreatModelSection() {
  return (
    <section id="threat-model" className="relative px-6 md:px-16 lg:px-24 py-24 border-t border-foreground/10 overflow-hidden">
      <StripedPattern opacity={0.05} spacing={32} angle={45} />

      <div className="relative z-10 max-w-4xl mx-auto">
        <ScrollReveal>
          <SectionHeader
            title="What's Hidden"
            subtitle="Observer view vs reality"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <p className="text-xs leading-relaxed text-foreground/40 uppercase tracking-wider mb-8 max-w-lg">
            A chain observer sees proof data — enough to verify correctness,
            nothing more. Sender, receiver, and amount stay hidden behind
            zero-knowledge proofs.
          </p>
        </ScrollReveal>

        <ThreatModel />
      </div>
    </section>
  );
}

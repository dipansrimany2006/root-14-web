"use client";

import { SectionHeader } from "@/components/section-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { DotPattern } from "@/components/dot-pattern";
import { ProtocolComparison } from "@/components/protocol-comparison";

export function ProtocolComparisonSection() {
  return (
    <section id="protocol-comparison" className="relative px-6 md:px-16 lg:px-24 py-24 border-t border-foreground/10 overflow-hidden">
      <DotPattern opacity={0.08} spacing={20} radius={0.8} />

      <div className="relative z-10 max-w-4xl mx-auto">
        <ScrollReveal>
          <SectionHeader
            title="Protocol Comparison"
            subtitle="Root14 vs established privacy protocols"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <p className="text-xs leading-relaxed text-foreground/40 uppercase tracking-wider mb-8 max-w-lg">
            Root14 brings proven privacy primitives to Stellar. Here&apos;s how
            it compares to established protocols in the space.
          </p>
        </ScrollReveal>

        <ProtocolComparison />

        <ScrollReveal delay={0.3}>
          <div className="mt-8 border border-foreground/20 p-6 bg-background/80 backdrop-blur-sm card-elevated">
            <p className="text-xs leading-relaxed text-foreground/50 uppercase tracking-wider">
              <span className="text-foreground/70 font-bold">Verdict:</span>{" "}
              Root14 combines Groth16&apos;s minimal proof size with BLS12-381&apos;s
              full 128-bit security — deployed natively on Stellar. Same
              cryptographic foundations as Zcash, purpose-built for Soroban.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

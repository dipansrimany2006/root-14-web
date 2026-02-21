"use client";

import { DotLeader } from "@/components/dot-leader";
import { SectionHeader } from "@/components/section-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { DotPattern } from "@/components/dot-pattern";

export function ProtocolStats() {
  return (
    <section className="relative px-6 md:px-16 lg:px-24 py-24 border-t border-foreground/10 overflow-hidden">
      <DotPattern opacity={0.1} spacing={28} />

      <div className="relative z-10 max-w-4xl mx-auto">
        <ScrollReveal>
          <SectionHeader
            title="Built for Production"
            subtitle="Core cryptographic configuration"
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal delay={0.1}>
            <div className="space-y-3">
              <DotLeader label="Proof System" value="GROTH16" />
              <DotLeader label="Curve" value="BLS12-381" />
              <DotLeader label="Merkle Depth" value="20" />
              <DotLeader label="Security Bits" value="128" />
              <DotLeader label="Instruction Budget" value="100M" />
              <DotLeader label="Proof Size" value="192 BYTES" />
              <DotLeader label="Verification Time" value="~1MS" />
              <DotLeader label="State Model" value="UTXO + NULLIFIER" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="text-xs leading-relaxed text-foreground/50 uppercase tracking-wider space-y-4">
              <p>
                Root14 is production-grade privacy infrastructure for Stellar.
                Every parameter is chosen to fit within Soroban&apos;s 100M
                instruction budget while maintaining full 128-bit security.
              </p>
              <p>
                The UTXO + nullifier model ensures private state transitions
                without revealing sender, receiver, or amount — while the
                chain validates correctness cryptographically.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

"use client";

import { SectionHeader } from "@/components/section-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { StripedPattern } from "@/components/striped-pattern";
import { Cpu, CircuitBoard, Radio } from "lucide-react";

export function Architecture() {
  return (
    <section
      id="architecture"
      className="relative px-6 md:px-16 lg:px-24 py-24 border-t border-foreground/10 overflow-hidden"
    >
      <StripedPattern opacity={0.06} spacing={36} angle={-45} />

      <div className="relative z-10 max-w-4xl mx-auto">
        <ScrollReveal>
          <SectionHeader
            title="How It's Built"
            subtitle="Three-layer proof infrastructure"
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              layer: "L1",
              name: "Kernel",
              icon: Cpu,
              desc: "Soroban smart contract. Verifies Groth16 proofs on-chain. Manages the Merkle tree of commitments and nullifier set.",
              benefit:
                "Deploy once — all proof verification happens trustlessly on-chain.",
            },
            {
              layer: "L2",
              name: "Circuit",
              icon: CircuitBoard,
              desc: "Off-chain proof generation. Groth16 circuits over BLS12-381. Proves commitment validity, Merkle membership, and balance conservation.",
              benefit:
                "Generate proofs client-side — no trusted third party required.",
            },
            {
              layer: "L3",
              name: "Indexer",
              icon: Radio,
              desc: "Event listener and state reconstructor. Watches Soroban events. Builds local Merkle tree replica for witness data.",
              benefit:
                "Always in sync — real-time state reconstruction from on-chain events.",
            },
          ].map((item, i) => (
            <ScrollReveal key={item.layer} delay={i * 0.1}>
              <div className="border border-foreground/20 p-6 h-full flex flex-col bg-background/80 backdrop-blur-sm card-elevated">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-accent text-background px-2 py-0.5 text-[10px] font-bold">
                    {item.layer}
                  </span>
                  <item.icon size={14} className="text-foreground/40" />
                  <span className="text-sm font-bold uppercase tracking-wider">
                    {item.name}
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-foreground/50 uppercase tracking-wider flex-1">
                  {item.desc}
                </p>
                <p className="mt-4 text-[10px] leading-relaxed text-foreground/30 uppercase tracking-wider border-t border-foreground/10 pt-3">
                  {item.benefit}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

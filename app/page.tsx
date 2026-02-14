"use client";

import { DotLeader } from "@/components/dot-leader";
import { CornerAnnotation } from "@/components/corner-annotation";
import { SectionHeader } from "@/components/section-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DotPattern } from "@/components/dot-pattern";
import { StripedPattern } from "@/components/striped-pattern";
import { ProtocolComparison } from "@/components/protocol-comparison";
import { ThreatModel } from "@/components/threat-model";
import { UseCases } from "@/components/use-cases";
import { EncryptedText } from "@/components/encrypted-text";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Github,
  BookOpen,
  Cpu,
  CircuitBoard,
  Radio,
  Shield,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ══════════════════════════════════════════════════════════════
          HERO
         ══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24 pt-14 pb-24 overflow-hidden">
        <DotPattern opacity={0.12} spacing={24} radius={1} />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
          <motion.p
            className="text-[11px] uppercase tracking-[0.3em] text-foreground/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Groth16 · BLS12-381 · Soroban
          </motion.p>

          <div className="overflow-hidden">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.9] bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              <EncryptedText text="The ZK Standard" delay={300} speed={40} />
            </h1>
          </div>
          <div className="overflow-hidden -mt-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.9] text-foreground/30">
              <EncryptedText text="for Stellar" delay={800} speed={40} />
            </h1>
          </div>

          <motion.p
            className="text-xs leading-relaxed text-foreground/45 uppercase tracking-wider max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Private state transitions with on-chain proof verification.
            Shielded balances, hidden senders, cryptographic correctness.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <a
              href="#architecture"
              className="inline-flex items-center justify-center gap-2 bg-accent text-background px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-foreground/90 transition-all hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
            >
              <BookOpen size={14} />
              Get Started
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-foreground/30 px-6 py-3 text-xs font-bold uppercase tracking-widest hover:border-foreground/60 transition-all hover:bg-foreground/5 hover:-translate-y-0.5"
            >
              <Github size={14} />
              View on GitHub
            </a>
          </motion.div>

          {/* trust badges */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            {[
              { icon: Shield, label: "128-bit security" },
              { icon: ArrowRight, label: "192-byte proofs" },
              { icon: Cpu, label: "<1ms verification" },
            ].map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-1.5 border border-foreground/10 px-3 py-1.5 text-[10px] uppercase tracking-widest text-foreground/35 bg-background/60 backdrop-blur-sm font-mono"
              >
                <badge.icon size={10} />
                {badge.label}
              </span>
            ))}
          </motion.div>
        </div>

        {/* scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/20 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight size={12} className="rotate-90" />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PROTOCOL STATS — "Built for Production"
         ══════════════════════════════════════════════════════════════ */}
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

      {/* ══════════════════════════════════════════════════════════════
          THREAT MODEL — "What's Hidden"
         ══════════════════════════════════════════════════════════════ */}
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

      {/* ══════════════════════════════════════════════════════════════
          ARCHITECTURE — "How It's Built"
         ══════════════════════════════════════════════════════════════ */}
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

      {/* ══════════════════════════════════════════════════════════════
          PROTOCOL COMPARISON
         ══════════════════════════════════════════════════════════════ */}
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

      {/* ══════════════════════════════════════════════════════════════
          USE CASES
         ══════════════════════════════════════════════════════════════ */}
      <section id="use-cases" className="relative px-6 md:px-16 lg:px-24 py-24 border-t border-foreground/10 overflow-hidden">
        <StripedPattern opacity={0.04} spacing={30} angle={-45} />

        <div className="relative z-10 max-w-4xl mx-auto">
          <ScrollReveal>
            <SectionHeader
              title="Use Cases"
              subtitle="Privacy infrastructure for real applications"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <p className="text-xs leading-relaxed text-foreground/40 uppercase tracking-wider mb-8 max-w-lg">
              Root14 isn&apos;t a mixer. It&apos;s programmable privacy — a foundation
              for any application that needs confidential state on Stellar.
            </p>
          </ScrollReveal>

          <UseCases />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          STANDARDS
         ══════════════════════════════════════════════════════════════ */}
      <section
        id="standards"
        className="relative px-6 md:px-16 lg:px-24 py-24 border-t border-foreground/10 overflow-hidden"
      >
        <StripedPattern opacity={0.04} spacing={28} angle={45} />

        <div className="relative z-10 max-w-4xl mx-auto">
          <ScrollReveal>
            <SectionHeader
              title="Standards"
              subtitle="Root14 protocol specifications"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <p className="text-xs leading-relaxed text-foreground/40 uppercase tracking-wider mb-6 max-w-lg">
              Root14 is building open specifications for zero-knowledge privacy
              on Stellar. These standards define interoperable primitives for any
              team building on the protocol.
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal delay={0.1}>
              <div className="border border-foreground/20 p-6 bg-background/80 backdrop-blur-sm card-elevated">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-accent text-background px-2 py-0.5 text-[10px] font-bold">
                    R14-STP
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider">
                    State Transition Protocol
                  </span>
                  <span className="ml-auto border border-foreground/20 px-2 py-0.5 text-[9px] uppercase tracking-widest text-foreground/40">
                    In Development
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-foreground/50 uppercase tracking-wider">
                  Defines the commitment scheme, nullifier derivation, Merkle
                  tree construction, and Groth16 circuit constraints for
                  private state transitions on Soroban. Covers deposit,
                  transfer, and withdrawal operations.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="border border-foreground/20 p-6 bg-background/80 backdrop-blur-sm card-elevated">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-accent text-background px-2 py-0.5 text-[10px] font-bold">
                    R14-NUL
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Nullifier Specification
                  </span>
                  <span className="ml-auto border border-foreground/20 px-2 py-0.5 text-[9px] uppercase tracking-widest text-foreground/40">
                    In Development
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-foreground/50 uppercase tracking-wider">
                  Specifies nullifier generation, storage, and verification.
                  Prevents double-spending without revealing the spent
                  commitment. Defines the nullifier set data structure and
                  on-chain storage layout.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { Wallet, Repeat, Landmark, Globe } from "lucide-react";

const cases = [
  {
    tag: "01",
    title: "Private Payments",
    desc: "Send and receive XLM without exposing balances or transaction history. Every transfer is shielded by default — no opt-in required.",
    detail: "Commitment-based UTXO model hides sender, receiver, and amount on every transaction.",
  },
  {
    tag: "02",
    title: "Confidential DeFi",
    desc: "Interact with Soroban protocols without leaking trading strategy, position sizes, or portfolio composition to front-runners.",
    detail: "Zero-knowledge proofs verify constraints without revealing the underlying data.",
  },
  {
    tag: "03",
    title: "Institutional Settlement",
    desc: "Financial institutions can settle on Stellar with regulatory compliance and transaction privacy — simultaneously.",
    detail: "Selective disclosure via proof metadata allows compliance without full transparency.",
  },
  {
    tag: "04",
    title: "Cross-Border Transfers",
    desc: "Private remittances and international transfers. Recipients verified cryptographically without exposing corridor volumes.",
    detail: "On-chain verification with off-chain privacy preserves the benefits of both worlds.",
  },
];

export function UseCases() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {cases.map((c, i) => (
        <ScrollReveal key={c.tag} delay={i * 0.08}>
          <div className="border border-foreground/20 p-6 h-full flex flex-col bg-background/80 backdrop-blur-sm card-elevated group">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-accent text-background px-2 py-0.5 text-[10px] font-bold">
                {c.tag}
              </span>
              <span className="text-sm font-bold uppercase tracking-wider">
                {c.title}
              </span>
            </div>
            <p className="text-xs leading-relaxed text-foreground/50 uppercase tracking-wider flex-1">
              {c.desc}
            </p>
            <p className="mt-4 text-[10px] leading-relaxed text-foreground/30 uppercase tracking-wider border-t border-foreground/10 pt-3">
              {c.detail}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}

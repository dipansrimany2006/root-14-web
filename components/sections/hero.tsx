"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Layer 0 — Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/background.png"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* subtle overlay for text readability */}
        <div className="absolute inset-0 bg-linear-to-b from-background/30 via-transparent to-background/60" />
      </div>

      {/* Layer 1 — Title text (slides in) */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-88 py-16">
        <div className="mb-10">
          {/* <motion.h1
            className="text-[150px] leading-none text-black text-center font-poppins font-[300]!"
            initial={{ y: "50vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            The ZK Standard
            <p className="text-[#727272]">for Stellar</p>
          </motion.h1> */}
          <motion.img src="/title_text.svg" alt="Hero Title" initial={{ y: "50vh", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} />
        </div>
      </div>

      {/* Layer 2 — Foreground figure (slides down from top) */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20 flex justify-center pointer-events-none"
        initial={{ y: "10vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/heroForeground.png"
          alt=""
          className="w-full h-screen object-cover object-bottom"
        />
      </motion.div>

      {/* scroll indicator — on top of everything */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/30 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
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
  );
}

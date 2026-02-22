"use client";

import { motion } from "framer-motion";

const ImageFooter = () => {
  return (
    <section className="relative h-[70vh] overflow-hidden bg-linear-to-t from-muted-gray to-transparent">
      {/* Layer 0 — ROOT14 text (behind, like hero title) */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <motion.img
          src="/footer title.svg"
          alt="ROOT14"
          className="w-full max-w-5xl object-cover"
          initial={{ y: "30vh", opacity: 0 }}
          whileInView={{ y: "0vh", opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 3, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      {/* Layer 1 — Footer illustration (foreground, on top) */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20 flex justify-center pointer-events-none"
        initial={{ y: "10vh" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/footer.svg"
          alt=""
          className="w-full object-cover object-bottom"
        />
      </motion.div>
    </section>
  );
};

export default ImageFooter;

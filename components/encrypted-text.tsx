"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface EncryptedTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

const CHARS = "█▓▒░ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

export function EncryptedText({
  text,
  className = "",
  delay = 0,
  speed = 30,
}: EncryptedTextProps) {
  const [displayText, setDisplayText] = useState(
    text.split("").map((c) => (c === " " ? " " : "█")).join("")
  );
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const timeout = setTimeout(() => {
      setHasAnimated(true);
      let iteration = 0;

      const interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";

              if (index < iteration) {
                return text[index];
              }

              // Heavy scramble effect
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
          setDisplayText(text);
        }

        iteration += 1 / 3;
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, speed, hasAnimated]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: delay / 1000 }}
    >
      {displayText}
    </motion.span>
  );
}

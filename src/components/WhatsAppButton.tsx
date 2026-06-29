"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppButton() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar avaliação pelo WhatsApp"
      className="
        fixed bottom-4 right-4 z-[999]
        flex h-14 w-14 items-center justify-center
        rounded-full bg-[#25D366]
        shadow-[0_16px_45px_rgba(37,211,102,0.32)]
        outline-none ring-1 ring-white/20
        md:bottom-7 md:right-7 md:h-[72px] md:w-[72px]
      "
      initial={reduceMotion ? false : { opacity: 0, scale: 0.76, y: 28 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      {!reduceMotion ? (
        <>
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-[#25D366]/40"
            animate={{
              scale: [1, 1.32, 1.32],
              opacity: [0.42, 0, 0],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.span
            aria-hidden="true"
            className="absolute inset-[-5px] rounded-full border border-[#25D366]/50"
            animate={{
              scale: [1, 1.13, 1],
              opacity: [0.42, 0.12, 0.42],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      ) : null}

      <Image
        src="/assets/tatyelli/icons/whatsapp-white.svg"
        alt=""
        width={38}
        height={38}
        className="relative z-10 h-8 w-8 object-contain md:h-10 md:w-10"
        priority
      />

      <span className="sr-only">Agendar avaliação pelo WhatsApp</span>
    </motion.a>
  );
}

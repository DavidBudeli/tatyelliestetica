"use client";

import { motion } from "framer-motion";
import { whatsappUrl } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar pelo WhatsApp"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      className="focus-ring fixed bottom-4 right-4 z-40 inline-flex min-h-14 items-center gap-2 rounded-md bg-[#1F8F5F] px-3 text-white shadow-premium sm:px-4"
    >
      <span className="grid size-8 place-items-center rounded-full bg-white/[0.16] text-sm font-black">W</span>
      <strong className="hidden text-sm sm:inline">WhatsApp</strong>
    </motion.a>
  );
}

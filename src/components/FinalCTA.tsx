"use client";

import { motion } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function FinalCTA() {
  return (
    <section id="contato" className="bg-tatyelli-offwhite pb-20 pt-6">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65 }}
        className="container-page rounded-panel bg-[radial-gradient(circle_at_18%_0%,rgba(200,162,74,0.26),transparent_38%),#062E26] px-6 py-10 text-center text-white shadow-premium md:px-10 md:py-14"
      >
        <p className="eyebrow">Agendamento</p>
        <h2 className="mx-auto max-w-3xl text-[clamp(1.9rem,8vw,3.35rem)] font-black leading-[1.07] tracking-normal">
          Pronta para cuidar de você com mais confiança?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
          Agende sua avaliação e descubra o protocolo mais indicado para o seu objetivo.
        </p>
        <motion.a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2, scale: 1.015 }}
          whileTap={{ scale: 0.98 }}
          className="focus-ring mt-7 inline-flex min-h-12 items-center justify-center rounded-md bg-tatyelli-gold px-6 font-black text-tatyelli-green-dark transition-colors hover:bg-tatyelli-gold-soft"
        >
          Agendar pelo WhatsApp
        </motion.a>
      </motion.div>
    </section>
  );
}

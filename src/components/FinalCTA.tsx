"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useGsapSectionReveal } from "@/lib/useGsapSectionReveal";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function FinalCTA() {
  const scopeRef = useRef<HTMLElement>(null);
  useGsapSectionReveal(scopeRef);

  return (
    <section ref={scopeRef} id="contato" className="bg-tatyelli-offwhite pb-24 pt-6 md:pb-20">
      <motion.div
        data-reveal
        whileHover={{ y: -3 }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
        className="container-page relative overflow-hidden rounded-panel bg-[radial-gradient(circle_at_18%_0%,rgba(200,162,74,0.26),transparent_38%),linear-gradient(135deg,#031F1A,#062E26_58%,#0B3A31)] px-6 py-10 text-center text-white shadow-premium md:px-10 md:py-14"
      >
        <span
          aria-hidden="true"
          className="absolute right-[-48px] top-[-48px] size-40 rounded-full border border-tatyelli-gold/20"
        />
        <p className="eyebrow">Agendamento</p>
        <h2 className="mx-auto max-w-3xl text-[clamp(1.9rem,8vw,3.35rem)] font-black leading-[1.07] tracking-normal">
          Vamos cuidar da sua autoestima?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
          Chame no WhatsApp e agende sua avaliação.
        </p>
        <motion.a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2, scale: 1.015 }}
          whileTap={{ scale: 0.98 }}
          className="focus-ring mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-tatyelli-gold px-6 font-black text-tatyelli-green-dark transition-colors hover:bg-tatyelli-gold-soft"
        >
          <MessageCircle aria-hidden="true" size={19} />
          Agendar pelo WhatsApp
        </motion.a>
      </motion.div>
    </section>
  );
}

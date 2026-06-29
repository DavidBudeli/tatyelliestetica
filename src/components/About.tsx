"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { assets } from "@/lib/constants";
import { useGsapSectionReveal } from "@/lib/useGsapSectionReveal";

const highlights = [
  ["10 anos", "de experiência"],
  ["Protocolos", "personalizados"],
  ["Cuidado", "próximo"],
];

export function About() {
  const scopeRef = useRef<HTMLElement>(null);
  useGsapSectionReveal(scopeRef);

  return (
    <section ref={scopeRef} id="sobre" className="section-shell bg-tatyelli-offwhite">
      <div className="container-page grid items-center gap-9 md:grid-cols-[1fr_0.85fr] md:gap-10">
        <div>
          <div data-reveal>
            <p className="eyebrow">Sobre a clínica</p>
            <h2 className="heading-lg">Beleza, técnica e acolhimento</h2>
            <p className="body-copy mt-5 max-w-2xl">
              10 anos cuidando da autoestima com estética facial, corporal, laser e protocolos personalizados.
            </p>
            <span data-reveal-line className="mt-6 block h-px w-36 scale-x-0 bg-tatyelli-gold" />
          </div>

          <div className="mt-7 grid gap-3 min-[520px]:grid-cols-3">
            {highlights.map(([title, subtitle]) => (
              <motion.div
                key={title}
                data-reveal-card
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-panel border border-tatyelli-gold/25 bg-white/70 p-4 shadow-soft"
              >
                <strong className="block text-xl text-tatyelli-green-dark">{title}</strong>
                <span className="mt-1 block text-sm font-bold text-neutral-600">{subtitle}</span>
              </motion.div>
            ))}
          </div>

          <ul className="mt-6 grid gap-3 text-neutral-700">
            {["Avaliação individual", "Conduta honesta", "Acompanhamento próximo"].map((item) => (
              <li key={item} data-reveal-card className="flex gap-3">
                <span className="mt-2 size-2.5 rounded-full bg-tatyelli-gold" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          data-reveal-card
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 240, damping: 24 }}
          className="grid grid-cols-[1fr_0.72fr] items-end gap-3"
        >
          <Image
            src={assets.profile}
            alt="Tatyelli Cristina em ambiente clínico"
            width={809}
            height={809}
            className="aspect-[4/5] rounded-panel object-cover object-top shadow-premium"
          />
          <Image
            src={assets.clinicOne}
            alt="Espaço da clínica Estética Tatyelli Cristina"
            width={1400}
            height={1000}
            className="mb-6 aspect-[3/4] rounded-panel object-cover shadow-soft"
          />
        </motion.div>
      </div>
    </section>
  );
}

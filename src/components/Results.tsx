"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useGsapSectionReveal } from "@/lib/useGsapSectionReveal";

const beforeAfterResults = [
  {
    title: "Depilação a laser",
    image: "/assets/tatyelli/images/antes-depois-laser-axila.jpg",
    alt: "Antes e depois autorizado de depilação a laser na Estética Tatyelli Cristina",
    description: "Registro real autorizado de evolução em depilação a laser.",
  },
  {
    title: "Protocolo corporal",
    image: "/assets/tatyelli/images/antes-depois-corporal-01.jpg",
    alt: "Antes e depois autorizado de protocolo corporal na Estética Tatyelli Cristina",
    description: "Registro real autorizado de acompanhamento corporal.",
  },
];

export function Results() {
  const scopeRef = useRef<HTMLElement>(null);
  useGsapSectionReveal(scopeRef);

  return (
    <section ref={scopeRef} className="section-shell bg-tatyelli-offwhite">
      <div className="container-page">
        <motion.div
          data-reveal
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl"
        >
          <p className="eyebrow">Antes e depois</p>
          <h2 className="heading-lg">Resultados reais autorizados</h2>
          <p className="body-copy mt-4">
            Registros compartilhados com autorização. Resultados podem variar de acordo com cada organismo, rotina e
            protocolo indicado.
          </p>
          <span data-reveal-line className="mt-6 block h-px w-36 scale-x-0 bg-tatyelli-gold" />
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {beforeAfterResults.map((item, index) => (
            <motion.article
              key={item.title}
              data-reveal-card
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.58, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="overflow-hidden rounded-panel border border-tatyelli-green/10 bg-white shadow-soft"
            >
              <div className="overflow-hidden bg-[linear-gradient(145deg,#F7F2E8,#E9DFC9)]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1400}
                  height={1700}
                  className="aspect-[4/5] w-full object-contain transition-transform duration-500 hover:scale-[1.025]"
                />
              </div>
              <div className="p-5">
                <strong className="text-tatyelli-green-dark">{item.title}</strong>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {item.description} Indicação sempre após avaliação individual.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "@/lib/constants";

export function About() {
  return (
    <section id="sobre" className="section-shell bg-tatyelli-offwhite">
      <div className="container-page grid items-center gap-10 md:grid-cols-[1fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="eyebrow">Sobre a clínica</p>
          <h2 className="heading-lg">Cuidado, beleza e bem-estar em cada detalhe</h2>
          <p className="body-copy mt-5">
            A Estética Tatyelli Cristina é uma clínica especializada em procedimentos faciais, corporais e depilação a laser. Com 10 anos de atuação, une experiência, tecnologia e atendimento humanizado para oferecer tratamentos seguros, personalizados e alinhados aos objetivos de cada cliente.
          </p>
          <p className="body-copy mt-4">
            O foco da clínica é cuidar da autoestima com ética, acolhimento e responsabilidade, criando protocolos individualizados para quem busca beleza, bem-estar e resultados naturais.
          </p>
          <ul className="mt-7 grid gap-3 text-neutral-700">
            {[
              "Protocolos planejados conforme pele, corpo, rotina e objetivo.",
              "Conduta honesta, sem pacotes genéricos ou promessas milagrosas.",
              "Atualização profissional constante e tecnologia moderna.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 size-2.5 rounded-full bg-tatyelli-gold" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
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
            alt="Imagem institucional do espaço da clínica"
            width={1400}
            height={1000}
            className="mb-6 aspect-[3/4] rounded-panel object-cover shadow-soft"
          />
        </motion.div>
      </div>
    </section>
  );
}

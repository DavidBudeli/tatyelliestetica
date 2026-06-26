"use client";

import { motion } from "framer-motion";
import { methodSteps } from "@/lib/constants";

export function Method() {
  return (
    <section className="section-shell overflow-hidden bg-[radial-gradient(circle_at_10%_0%,rgba(200,162,74,0.18),transparent_34%),linear-gradient(180deg,#F7F2E8_0%,#EFE5D3_100%)] text-[#062E26]">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl"
        >
          <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#C8A24A]">
            Método de atendimento
          </p>
          <h2 className="heading-lg text-[#062E26]">Nada de protocolos prontos</h2>
          <p className="mt-4 text-base leading-7 text-[#1D1D1B]/70 md:text-lg">
            Cada cliente recebe uma avaliação cuidadosa para que o tratamento seja indicado de forma honesta, segura e personalizada.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 min-[560px]:grid-cols-2 lg:grid-cols-4">
          {methodSteps.map(([number, title, description], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.06, duration: 0.55 }}
              whileHover={{ y: -5 }}
              className="rounded-panel border border-[#C8A24A]/25 bg-white/[0.52] p-5 shadow-[0_18px_50px_rgba(6,46,38,0.06)] backdrop-blur-[10px]"
            >
              <span className="text-sm font-black text-[#C8A24A]">{number}</span>
              <h3 className="mt-5 text-xl font-black text-[#062E26]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#1D1D1B]/65">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

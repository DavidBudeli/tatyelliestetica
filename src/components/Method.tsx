"use client";

import { motion } from "framer-motion";
import { methodSteps } from "@/lib/constants";

export function Method() {
  return (
    <section className="section-shell overflow-hidden bg-[radial-gradient(circle_at_10%_0%,rgba(200,162,74,0.18),transparent_34%),#031F1A]">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl"
        >
          <p className="eyebrow">Método de atendimento</p>
          <h2 className="heading-lg text-white">Nada de protocolos prontos</h2>
          <p className="mt-4 text-base leading-7 text-white/75 md:text-lg">
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
              className="rounded-panel border border-white/12 bg-white/[0.07] p-5 text-white"
            >
              <span className="text-sm font-black text-tatyelli-gold-soft">{number}</span>
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

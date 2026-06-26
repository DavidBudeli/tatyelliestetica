"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "@/lib/constants";

export function Results() {
  return (
    <section className="section-shell bg-tatyelli-offwhite">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl"
        >
          <p className="eyebrow">Antes e depois</p>
          <h2 className="heading-lg">Espaço para resultados reais autorizados</h2>
          <p className="body-copy mt-4">
            Use esta área apenas com imagens reais e autorização da cliente. Resultados podem variar de acordo com cada organismo, rotina e protocolo indicado.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[1, 2].map((item) => (
            <motion.article
              key={item}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="overflow-hidden rounded-panel border border-tatyelli-green/10 bg-white shadow-soft"
            >
              <Image
                src={assets.beforeAfter}
                alt="Espaço para resultado real autorizado"
                width={1400}
                height={1000}
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="p-5">
                <strong className="text-tatyelli-green-dark">Adicionar imagem autorizada de resultado real</strong>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  Sem promessas de resultado igual para todas as pessoas. Indicação sempre após avaliação individual.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

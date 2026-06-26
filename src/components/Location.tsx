"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Location() {
  return (
    <section id="localizacao" className="section-shell bg-[linear-gradient(180deg,#F7F2E8,#EEF3EA)]">
      <div className="container-page grid items-center gap-10 md:grid-cols-[1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
        >
          <p className="eyebrow">Localização</p>
          <h2 className="heading-lg">Atendimento com hora marcada</h2>
          <p className="body-copy mt-5">
            Endereço da clínica: <strong>{siteConfig.address.street}</strong>.
          </p>
          <p className="body-copy mt-4">
            Quando o endereço definitivo estiver disponível, atualize o campo em <code>src/lib/constants.ts</code> e o link do Google Maps.
          </p>
          <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row">
            <motion.a
              href={siteConfig.address.mapsUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-tatyelli-green/20 bg-white px-5 text-center font-black text-tatyelli-green-dark"
            >
              Abrir no Google Maps
            </motion.a>
            <motion.a
              href={getWhatsAppUrl("Olá, Tatyelli! Vim pelo site e gostaria de saber o endereço da clínica.")}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md bg-tatyelli-green px-5 text-center font-black text-white"
            >
              Chamar no WhatsApp
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="grid min-h-[320px] place-items-center rounded-panel border border-tatyelli-green/10 bg-[linear-gradient(90deg,rgba(6,46,38,0.07)_1px,transparent_1px),linear-gradient(180deg,rgba(6,46,38,0.07)_1px,transparent_1px),#fff] bg-[length:34px_34px] p-7 text-center shadow-premium"
        >
          <div>
            <span className="mx-auto grid size-16 place-items-center rounded-full bg-tatyelli-green font-black text-tatyelli-gold-soft">
              Mapa
            </span>
            <strong className="mt-5 block text-xl text-tatyelli-green-dark">Adicionar endereço completo</strong>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-neutral-600">
              Use aqui o embed do Google Maps quando o endereço for confirmado.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

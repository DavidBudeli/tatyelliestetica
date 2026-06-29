"use client";

import { MapPin, MessageCircle, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Location() {
  return (
    <section id="localizacao" className="section-shell bg-[linear-gradient(180deg,#F7F2E8,#EEF3EA)]">
      <div className="container-page grid items-center gap-10 md:grid-cols-[1fr_0.95fr]">
        <div>
          <p className="eyebrow">Localização</p>
          <h2 className="heading-lg">Atendimento com hora marcada</h2>
          <div className="mt-5 flex gap-3 rounded-panel border border-tatyelli-gold/25 bg-white/60 p-4 shadow-[0_16px_40px_rgba(6,46,38,0.07)] backdrop-blur">
            <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-tatyelli-green text-tatyelli-gold-soft">
              <MapPin aria-hidden="true" size={20} />
            </span>
            <div>
              <strong className="block text-lg leading-6 text-tatyelli-green-dark">Estética Tatyelli Cristina</strong>
              <p className="mt-2 text-base leading-7 text-neutral-700">{siteConfig.address.full}</p>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row">
            <motion.a
              href={siteConfig.address.mapsUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-tatyelli-green/20 bg-white px-5 text-center font-black text-tatyelli-green-dark transition-colors hover:border-tatyelli-gold/45"
            >
              <Navigation aria-hidden="true" size={18} />
              Como chegar
            </motion.a>
            <motion.a
              href={getWhatsAppUrl("Olá, Tatyelli! Vim pelo site e gostaria de confirmar o endereço da clínica.")}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-tatyelli-green px-5 text-center font-black text-white transition-colors hover:bg-tatyelli-green-soft"
            >
              <MessageCircle aria-hidden="true" size={18} />
              Chamar no WhatsApp
            </motion.a>
          </div>
        </div>

        <div
          className="overflow-hidden rounded-panel border border-tatyelli-green/10 bg-white shadow-premium"
        >
          <iframe
            title="Mapa para chegar na Estética Tatyelli Cristina"
            src={siteConfig.address.mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[360px] w-full border-0 md:h-[430px]"
          />
        </div>
      </div>
    </section>
  );
}

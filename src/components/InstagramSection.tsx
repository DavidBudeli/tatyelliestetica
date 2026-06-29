"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { feedbackImages, siteConfig } from "@/lib/constants";
import { useGsapSectionReveal } from "@/lib/useGsapSectionReveal";

export function InstagramSection() {
  const scopeRef = useRef<HTMLElement>(null);
  useGsapSectionReveal(scopeRef);

  return (
    <section ref={scopeRef} className="section-shell bg-tatyelli-offwhite">
      <div className="container-page">
        <div data-reveal className="max-w-3xl">
          <p className="eyebrow">Instagram</p>
          <h2 className="heading-lg">Bastidores e resultados</h2>
          <p className="body-copy mt-4">Acompanhe novidades, cuidados e rotina da clínica.</p>
          <span data-reveal-line className="mt-6 block h-px w-36 scale-x-0 bg-tatyelli-gold" />
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          {[
            [siteConfig.instagram, siteConfig.instagramUrl],
            [siteConfig.professionalInstagram, siteConfig.professionalInstagramUrl],
          ].map(([label, href]) => (
            <motion.a
              key={href}
              data-reveal-card
              href={href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="focus-ring rounded-md border border-tatyelli-green/15 bg-white px-4 py-3 font-black text-tatyelli-green-dark shadow-sm"
            >
              {label}
            </motion.a>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-3 gap-2 md:gap-4">
          {feedbackImages.slice(0, 3).map((image) => (
            <motion.div
              key={image.src}
              data-reveal-card
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden rounded-panel shadow-soft"
            >
              <Image
                src={image.src}
                alt={image.title}
                width={1152}
                height={2048}
                className="aspect-square w-full object-cover object-top transition-transform duration-500 hover:scale-[1.04]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

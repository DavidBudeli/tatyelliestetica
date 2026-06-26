"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { feedbackImages, siteConfig } from "@/lib/constants";

export function InstagramSection() {
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
          <p className="eyebrow">Instagram</p>
          <h2 className="heading-lg">Acompanhe a clínica no Instagram</h2>
          <p className="body-copy mt-4">Veja bastidores, orientações de cuidado, novidades e procedimentos em destaque.</p>
        </motion.div>

        <div className="mt-7 flex flex-wrap gap-3">
          {[
            [siteConfig.instagram, siteConfig.instagramUrl],
            [siteConfig.professionalInstagram, siteConfig.professionalInstagramUrl],
          ].map(([label, href]) => (
            <motion.a
              key={href}
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
            <motion.div key={image.src} whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-panel shadow-soft">
              <Image
                src={image.src}
                alt={image.title}
                width={1152}
                height={2048}
                className="aspect-square w-full object-cover object-top"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

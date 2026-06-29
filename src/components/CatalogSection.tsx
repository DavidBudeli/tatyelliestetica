"use client";

import Image from "next/image";
import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { catalogItems, type CatalogItem } from "@/lib/constants";
import { scrollRevealConfig } from "@/lib/animations";
import { getProcedureWhatsAppUrl } from "@/lib/whatsapp";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: Math.min(index * 0.035, 0.22),
      duration: 0.58,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function CatalogImage({ item }: { item: CatalogItem }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex h-full min-h-[260px] flex-col items-center justify-center gap-4 bg-[linear-gradient(145deg,#F7F2E8,#E9DFC9)] px-6 text-center">
        <span className="flex size-14 items-center justify-center rounded-full border border-tatyelli-gold/35 bg-white/70 text-tatyelli-gold">
          <Sparkles aria-hidden="true" size={24} />
        </span>
        <span className="text-lg font-black text-tatyelli-green-dark">{item.name}</span>
      </div>
    );
  }

  return (
    <Image
      src={item.image}
      alt={`${item.name} na Estética Tatyelli Cristina`}
      fill
      sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      className="object-contain transition-transform duration-500 group-hover:scale-[1.035]"
      onError={() => setHasError(true)}
    />
  );
}

export function CatalogSection() {
  const scopeRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    let cleanup: (() => void) | undefined;
    let active = true;

    const run = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
      if (!active || !scopeRef.current) return;

      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        gsap.from("[data-catalog-heading]", {
          ...scrollRevealConfig,
          scrollTrigger: {
            trigger: scopeRef.current,
            start: "top 76%",
          },
        });

        gsap.to("[data-catalog-line]", {
          scaleX: 1,
          transformOrigin: "left center",
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: scopeRef.current,
            start: "top 68%",
          },
        });
      }, scopeRef);

      cleanup = () => ctx.revert();
    };

    run();
    return () => {
      active = false;
      cleanup?.();
    };
  }, [shouldReduceMotion]);

  return (
    <section
      ref={scopeRef}
      id="catalogo"
      className="section-shell overflow-hidden bg-[linear-gradient(180deg,#F7F2E8_0%,#EFE5D3_48%,#F7F2E8_100%)]"
    >
      <div className="container-page">
        <div data-catalog-heading className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow">Catálogo</p>
            <h2 className="heading-lg">Catálogo de Procedimentos</h2>
            <p className="body-copy mt-4">
              Conheça alguns dos tratamentos disponíveis e fale diretamente pelo WhatsApp para tirar dúvidas ou agendar sua
              avaliação.
            </p>
            <span data-catalog-line className="mt-6 block h-px w-40 scale-x-0 bg-tatyelli-gold" />
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-tatyelli-gold/35 bg-white/55 px-4 py-2 text-sm font-black text-tatyelli-green-dark shadow-[0_14px_34px_rgba(6,46,38,0.07)] backdrop-blur">
            <Sparkles aria-hidden="true" size={16} className="text-tatyelli-gold" />
            12 opções em destaque
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {catalogItems.map((item, index) => (
            <motion.article
              key={item.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="group flex h-full min-w-0 flex-col overflow-hidden rounded-panel border border-tatyelli-gold/25 bg-white/65 shadow-[0_18px_55px_rgba(6,46,38,0.08)] backdrop-blur transition-[border-color,box-shadow] duration-300 hover:border-tatyelli-gold/50 hover:shadow-premium"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F7F2E8]">
                <CatalogImage item={item} />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgba(6,46,38,0.08))]" />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex flex-col items-start gap-3">
                  <h3 className="min-w-0 text-xl font-black leading-tight text-tatyelli-green-dark">{item.name}</h3>
                  <span className="rounded-full border border-tatyelli-gold/35 bg-tatyelli-gold/12 px-3 py-1 text-sm font-black text-tatyelli-green-dark">
                    {item.price}
                  </span>
                </div>

                <p className="mt-4 flex-1 text-sm leading-6 text-neutral-700">{item.description}</p>

                <motion.a
                  href={getProcedureWhatsAppUrl(item.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Quero saber mais sobre ${item.name} pelo WhatsApp`}
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.015 }}
                  whileTap={{ scale: 0.98 }}
                  className="focus-ring mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-tatyelli-green px-4 text-center text-sm font-black text-white transition-colors hover:bg-tatyelli-green-soft"
                >
                  <MessageCircle aria-hidden="true" size={18} />
                  Quero saber mais
                  <ArrowUpRight aria-hidden="true" size={17} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl rounded-panel border border-tatyelli-gold/25 bg-white/50 px-5 py-4 text-center text-sm leading-6 text-neutral-700 shadow-[0_14px_35px_rgba(6,46,38,0.05)] backdrop-blur">
          Os valores podem sofrer alterações. Procedimentos são indicados após avaliação individual. Resultados podem variar de
          pessoa para pessoa.
        </p>
      </div>
    </section>
  );
}

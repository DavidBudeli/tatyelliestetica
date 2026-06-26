"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { assets, authorityItems } from "@/lib/constants";
import { ctaPulseConfig, heroEntrance } from "@/lib/animations";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  const scopeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let active = true;

    const run = async () => {
      const { gsap } = await import("gsap");
      if (!active || !scopeRef.current) return;

      const ctx = gsap.context(() => {
        heroEntrance(gsap, scopeRef.current as HTMLElement);

        const buttons = gsap.utils.toArray<HTMLElement>("[data-gsap-cta]");
        const listeners = buttons.map((button) => {
          const enter = () => gsap.to(button, ctaPulseConfig);
          const leave = () => gsap.to(button, { y: 0, scale: 1, duration: 0.22, ease: "power2.out" });
          button.addEventListener("mouseenter", enter);
          button.addEventListener("mouseleave", leave);
          return () => {
            button.removeEventListener("mouseenter", enter);
            button.removeEventListener("mouseleave", leave);
          };
        });

        cleanup = () => listeners.forEach((remove) => remove());
      }, scopeRef);

      const previousCleanup = cleanup;
      cleanup = () => {
        previousCleanup?.();
        ctx.revert();
      };
    };

    run();

    return () => {
      active = false;
      cleanup?.();
    };
  }, []);

  return (
    <section
      ref={scopeRef}
      id="inicio"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_85%_18%,rgba(200,162,74,0.20),transparent_30%),linear-gradient(180deg,#F7F2E8_0%,#E9DFC9_100%)] pb-16 pt-[calc(var(--header-height)+42px)] md:pb-20"
    >
      <div className="container-page grid items-center gap-10 md:grid-cols-[1fr_0.86fr]">
        <div>
          <p data-hero-kicker className="eyebrow">
            Clínica de estética há 10 anos
          </p>
          <h1 data-hero-title className="heading-xl max-w-3xl">
            Estética personalizada para realçar sua autoestima
          </h1>
          <p data-hero-copy className="body-copy mt-5 max-w-2xl">
            Há 10 anos cuidando da beleza, bem-estar e confiança de mulheres que buscam resultados reais com atendimento humanizado.
          </p>

          <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row">
            <motion.a
              data-hero-action
              data-gsap-cta
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.98 }}
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md bg-tatyelli-green px-5 text-center font-black text-white shadow-premium transition-colors hover:bg-tatyelli-green-soft"
            >
              Agendar avaliação
            </motion.a>
            <motion.a
              data-hero-action
              data-gsap-cta
              href="#procedimentos"
              whileTap={{ scale: 0.98 }}
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-tatyelli-green/20 bg-white/75 px-5 text-center font-black text-tatyelli-green-dark transition-colors hover:bg-white"
            >
              Conhecer procedimentos
            </motion.a>
          </div>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {["10 anos de experiência", "Atendimento personalizado", "Facial, corporal e laser"].map((item) => (
              <span
                key={item}
                data-hero-chip
                className="rounded-md border border-tatyelli-green/12 bg-white/70 px-3 py-2 text-sm font-extrabold text-tatyelli-green-dark"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <figure data-hero-media className="relative">
          <div className="relative overflow-hidden rounded-panel shadow-premium">
            <Image
              src={assets.hero}
              alt="Tatyelli Cristina na clínica de estética"
              width={809}
              height={809}
              priority
              className="aspect-[1/1.08] w-full object-cover object-top"
            />
            <figcaption className="absolute inset-x-3 bottom-3 flex flex-wrap items-center justify-between gap-2 rounded-md border border-white/20 bg-tatyelli-green-dark/[0.84] p-3 text-white backdrop-blur-md">
              <strong>Tatyelli Cristina</strong>
              <span className="text-sm text-white/75">Responsável pela clínica</span>
            </figcaption>
          </div>
        </figure>
      </div>

      <div className="container-page mt-10 grid overflow-hidden rounded-panel bg-tatyelli-green shadow-premium min-[560px]:grid-cols-5">
        {authorityItems.map(([title, subtitle]) => (
          <div key={`${title}-${subtitle}`} className="border-b border-white/10 p-4 min-[560px]:border-b-0 min-[560px]:border-r">
            <strong className="block text-lg leading-tight text-tatyelli-gold-soft">{title}</strong>
            <span className="mt-1 block text-sm text-white/75">{subtitle}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

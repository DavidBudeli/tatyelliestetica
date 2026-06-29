"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { assets, authorityItems } from "@/lib/constants";
import { ctaPulseConfig, heroEntrance } from "@/lib/animations";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const heroTitle = "Estética personalizada para realçar sua autoestima";
const heroWords = heroTitle.split(" ");

export function Hero() {
  const scopeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let cleanup: (() => void) | undefined;
    let active = true;

    const run = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
      if (!active || !scopeRef.current) return;

      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        heroEntrance(gsap, scopeRef.current as HTMLElement);

        gsap.to("[data-hero-parallax]", {
          yPercent: -6,
          ease: "none",
          scrollTrigger: {
            trigger: scopeRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.7,
          },
        });

        gsap.to("[data-hero-orbit]", {
          y: 12,
          rotate: 5,
          duration: 5.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

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
      className="relative overflow-hidden bg-[radial-gradient(circle_at_85%_18%,rgba(200,162,74,0.20),transparent_30%),linear-gradient(180deg,#F7F2E8_0%,#E9DFC9_100%)] pb-14 pt-[calc(var(--header-height)+30px)] md:pb-20 md:pt-[calc(var(--header-height)+42px)]"
    >
      <span
        data-hero-orbit
        aria-hidden="true"
        className="pointer-events-none absolute right-[-52px] top-24 hidden size-44 rounded-full border border-tatyelli-gold/25 md:block"
      />
      <span
        data-hero-orbit
        aria-hidden="true"
        className="pointer-events-none absolute bottom-24 left-[-42px] size-24 rounded-full border border-tatyelli-green/10"
      />

      <div className="container-page grid items-center gap-8 md:grid-cols-[1fr_0.86fr] md:gap-10">
        <div>
          <img
            data-hero-logo
            src={assets.logoSymbol}
            alt=""
            className="mb-5 h-12 w-auto object-contain md:h-14"
            aria-hidden="true"
          />
          <p data-hero-kicker className="eyebrow">
            Clínica de estética há 10 anos
          </p>
          <h1 data-hero-title className="heading-xl max-w-3xl">
            {heroWords.map((word, index) => (
              <span key={`${word}-${index}`} className="inline-block overflow-hidden pr-2 align-bottom">
                <span data-hero-title-word className="inline-block">
                  {word}
                </span>
              </span>
            ))}
          </h1>
          <p data-hero-copy className="body-copy mt-5 max-w-2xl">
            Facial, corporal e laser com avaliação individual, cuidado próximo e protocolos seguros.
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
              href={getWhatsAppUrl("Olá, Tatyelli! Vim pelo site e gostaria de saber mais sobre o catálogo de procedimentos.")}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.98 }}
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-tatyelli-green/20 bg-white/75 px-5 text-center font-black text-tatyelli-green-dark transition-colors hover:bg-white"
            >
              Ver catálogo
            </motion.a>
          </div>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {["10 anos de experiência", "Protocolos seguros", "Facial, corporal e laser"].map((item) => (
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
              data-hero-parallax
              className="aspect-[1/1.08] w-full object-cover object-top will-change-transform"
            />
            <figcaption className="absolute inset-x-3 bottom-3 flex flex-wrap items-center justify-between gap-2 rounded-md border border-white/20 bg-tatyelli-green-dark/[0.84] p-3 text-white backdrop-blur-md">
              <strong>Tatyelli Cristina</strong>
              <span className="text-sm text-white/75">Responsável pela clínica</span>
            </figcaption>
          </div>
        </figure>
      </div>

      <div className="container-page mt-8 grid overflow-hidden rounded-panel bg-tatyelli-green shadow-premium min-[560px]:grid-cols-5 md:mt-10">
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

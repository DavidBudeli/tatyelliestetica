"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { services, whatsappUrl } from "@/lib/constants";
import { scrollRevealConfig } from "@/lib/animations";

export function Services() {
  const scopeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let active = true;

    const run = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
      if (!active || !scopeRef.current) return;

      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        gsap.from("[data-service-card]", {
          ...scrollRevealConfig,
          stagger: 0.08,
          scrollTrigger: {
            trigger: scopeRef.current,
            start: "top 78%",
          },
        });

        gsap.to("[data-service-accent]", {
          scaleX: 1,
          transformOrigin: "left center",
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: scopeRef.current,
            start: "top 70%",
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
  }, []);

  return (
    <section ref={scopeRef} id="procedimentos" className="section-shell bg-[linear-gradient(180deg,#E9DFC9,#F7F2E8)]">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow">Procedimentos</p>
          <h2 className="heading-lg">Protocolos indicados após avaliação individual</h2>
          <p className="body-copy mt-4">
            Cada tratamento é planejado de forma personalizada, respeitando sua necessidade, rotina, segurança e objetivo.
          </p>
          <span data-service-accent className="mt-6 block h-px w-36 scale-x-0 bg-tatyelli-gold" />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.article
              key={service.title}
              data-service-card
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="group overflow-hidden rounded-panel border border-tatyelli-green/10 bg-white shadow-soft"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={1400}
                height={1000}
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
              />
              <div className="p-5">
                <h3 className="text-xl font-black text-tatyelli-green-dark">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-700">{service.description}</p>
                <p className="mt-4 text-sm font-extrabold leading-6 text-tatyelli-green-soft">{service.items}</p>
                <motion.a
                  href={whatsappUrl(service.message)}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.98 }}
                  className="focus-ring mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-tatyelli-green px-4 text-center font-black text-white transition-colors hover:bg-tatyelli-green-soft"
                >
                  Quero saber mais
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

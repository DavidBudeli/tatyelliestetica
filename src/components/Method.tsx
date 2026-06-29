"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { methodSteps } from "@/lib/constants";
import { useGsapSectionReveal } from "@/lib/useGsapSectionReveal";

export function Method() {
  const scopeRef = useRef<HTMLElement>(null);
  useGsapSectionReveal(scopeRef);

  return (
    <section
      ref={scopeRef}
      className="section-shell overflow-hidden bg-[radial-gradient(circle_at_10%_0%,rgba(200,162,74,0.18),transparent_34%),linear-gradient(180deg,#F7F2E8_0%,#EFE5D3_100%)] text-[#062E26]"
    >
      <div className="container-page">
        <div data-reveal className="max-w-3xl">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#C8A24A]">
            Método de atendimento
          </p>
          <h2 className="heading-lg text-[#062E26]">Nada de protocolos prontos</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#1D1D1B]/70 md:text-lg">
            Avaliação, indicação segura e acompanhamento de perto.
          </p>
          <span data-reveal-line className="mt-6 block h-px w-36 scale-x-0 bg-[#C8A24A]" />
        </div>

        <div className="relative mt-10 grid gap-4 min-[560px]:grid-cols-2 lg:grid-cols-4">
          <span
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-gradient-to-r from-transparent via-[#C8A24A]/45 to-transparent lg:block"
          />
          {methodSteps.map(([number, title, description]) => (
            <motion.article
              key={title}
              data-reveal-card
              whileHover={{ y: -5, borderColor: "rgba(200,162,74,0.48)" }}
              whileTap={{ scale: 0.98 }}
              className="relative rounded-panel border border-[#C8A24A]/25 bg-white/[0.54] p-5 shadow-[0_18px_50px_rgba(6,46,38,0.06)] backdrop-blur-[10px]"
            >
              <span className="grid size-10 place-items-center rounded-full border border-[#C8A24A]/35 bg-[#F7F2E8] text-sm font-black text-[#C8A24A]">
                {number}
              </span>
              <h3 className="mt-5 text-xl font-black text-[#062E26]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#1D1D1B]/65">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

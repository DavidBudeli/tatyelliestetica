"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { faqs } from "@/lib/constants";
import { useGsapSectionReveal } from "@/lib/useGsapSectionReveal";

export function FAQ() {
  const scopeRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState(0);
  useGsapSectionReveal(scopeRef);

  return (
    <section ref={scopeRef} className="section-shell bg-tatyelli-offwhite">
      <div className="container-page">
        <div data-reveal className="max-w-3xl">
          <p className="eyebrow">FAQ</p>
          <h2 className="heading-lg">Perguntas frequentes</h2>
          <span data-reveal-line className="mt-6 block h-px w-36 scale-x-0 bg-tatyelli-gold" />
        </div>

        <div className="mt-9 grid gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.article
                key={faq.question}
                data-reveal-card
                whileHover={{ borderColor: "rgba(200,162,74,0.35)" }}
                className="rounded-panel border border-tatyelli-green/10 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="focus-ring flex min-h-16 w-full items-center justify-between gap-4 px-5 text-left font-black text-tatyelli-green-dark"
                >
                  <span>{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="text-2xl leading-none text-tatyelli-gold"
                    aria-hidden="true"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-6 text-neutral-600 md:text-base">{faq.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { faqs } from "@/lib/constants";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-shell bg-tatyelli-offwhite">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow">FAQ</p>
          <h2 className="heading-lg">Perguntas frequentes</h2>
        </div>

        <div className="mt-9 grid gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.article
                key={faq.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.035 }}
                className="rounded-panel border border-tatyelli-green/10 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="focus-ring flex min-h-16 w-full items-center justify-between gap-4 px-5 text-left font-black text-tatyelli-green-dark"
                >
                  <span>{faq.question}</span>
                  <span className="text-2xl text-tatyelli-gold">{isOpen ? "−" : "+"}</span>
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

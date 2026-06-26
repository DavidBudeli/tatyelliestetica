"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { assets, navItems } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-[1001] border-b border-tatyelli-green/10 bg-tatyelli-offwhite/[0.92] backdrop-blur-xl">
      <div className="container-page flex h-[var(--header-height)] items-center justify-between gap-3">
        <a href="#inicio" aria-label="Estética Tatyelli Cristina" className="focus-ring flex min-w-0 items-center">
          <img
            src={assets.logoSymbol}
            alt="Estética Tatyelli Cristina"
            className="h-11 w-auto object-contain sm:hidden"
          />
          <img
            src={assets.logoHorizontal}
            alt="Estética Tatyelli Cristina"
            className="hidden h-12 w-auto max-w-[210px] object-contain sm:block lg:max-w-[230px]"
          />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-bold text-tatyelli-green-dark transition-colors hover:bg-tatyelli-green/[0.08]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <motion.a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="focus-ring hidden min-h-11 items-center justify-center rounded-md bg-tatyelli-green px-4 text-sm font-black text-white shadow-soft transition-colors hover:bg-tatyelli-green-soft lg:inline-flex"
        >
          Agendar pelo WhatsApp
        </motion.a>

        <motion.button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          whileTap={{ scale: 0.94 }}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-grid size-11 place-items-center rounded-md border border-tatyelli-green/15 bg-white text-tatyelli-green-dark shadow-sm lg:hidden"
        >
          {open ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-x-0 top-[var(--header-height)] z-[1000] min-h-[calc(100dvh-var(--header-height))] bg-tatyelli-green-dark/30 p-4 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.nav
              initial={{ y: -18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="mx-auto grid max-w-md gap-2 rounded-panel border border-tatyelli-green/10 bg-white p-3 shadow-premium"
              aria-label="Menu mobile"
              onClick={(event) => event.stopPropagation()}
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-4 py-3 text-base font-black text-tatyelli-green-dark transition-colors hover:bg-tatyelli-offwhite"
                >
                  {item.label}
                </a>
              ))}
              <motion.a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.98 }}
                className="mt-2 rounded-md bg-tatyelli-green px-4 py-3 text-center text-base font-black text-white"
              >
                Agendar pelo WhatsApp
              </motion.a>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

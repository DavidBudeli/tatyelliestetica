"use client";

import { RefObject, useEffect } from "react";
import { sectionRevealConfig } from "@/lib/animations";

type RevealOptions = {
  triggerStart?: string;
  cardSelector?: string;
};

export function useGsapSectionReveal<T extends HTMLElement>(
  scopeRef: RefObject<T | null>,
  { triggerStart = "top 78%", cardSelector = "[data-reveal-card]" }: RevealOptions = {},
) {
  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let cleanup: (() => void) | undefined;
    let active = true;

    const run = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
      if (!active || !scopeRef.current) return;

      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        const revealItems = scope.querySelectorAll("[data-reveal]");
        const cardItems = scope.querySelectorAll(cardSelector);
        const lineItems = scope.querySelectorAll("[data-reveal-line]");

        if (revealItems.length > 0) {
          ScrollTrigger.create({
            trigger: scopeRef.current,
            start: triggerStart,
            once: true,
            onEnter: () => {
              gsap.from(revealItems, {
                ...sectionRevealConfig,
                stagger: 0.08,
              });
            },
          });
        }

        if (cardItems.length > 0) {
          ScrollTrigger.create({
            trigger: scopeRef.current,
            start: "top 72%",
            once: true,
            onEnter: () => {
              gsap.from(cardItems, {
                ...sectionRevealConfig,
                y: 26,
                stagger: 0.06,
              });
            },
          });
        }

        if (lineItems.length > 0) {
          ScrollTrigger.create({
            trigger: scopeRef.current,
            start: "top 70%",
            once: true,
            onEnter: () => {
              gsap.to(lineItems, {
                scaleX: 1,
                transformOrigin: "left center",
                duration: 0.86,
                ease: "power3.out",
              });
            },
          });
        }
      }, scopeRef);

      cleanup = () => ctx.revert();
    };

    run();
    return () => {
      active = false;
      cleanup?.();
    };
  }, [scopeRef, triggerStart, cardSelector]);
}

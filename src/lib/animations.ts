type Gsap = typeof import("gsap").gsap;

export const heroEntrance = (gsap: Gsap, scope: Element) => {
  const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

  timeline
    .from(scope.querySelectorAll("[data-hero-kicker], [data-hero-title], [data-hero-copy]"), {
      autoAlpha: 0,
      y: 26,
      duration: 0.85,
      stagger: 0.12,
    })
    .from(
      scope.querySelectorAll("[data-hero-action], [data-hero-chip]"),
      {
        autoAlpha: 0,
        y: 18,
        duration: 0.55,
        stagger: 0.08,
      },
      "-=0.34",
    )
    .from(
      scope.querySelector("[data-hero-media]"),
      {
        autoAlpha: 0,
        scale: 0.96,
        y: 24,
        duration: 0.9,
      },
      "-=0.62",
    );

  return timeline;
};

export const scrollRevealConfig = {
  autoAlpha: 0,
  y: 42,
  duration: 0.82,
  ease: "power3.out",
};

export const ctaPulseConfig = {
  y: -2,
  scale: 1.015,
  duration: 0.22,
  ease: "power2.out",
};

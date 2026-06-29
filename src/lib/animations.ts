type Gsap = typeof import("gsap").gsap;

export const heroEntrance = (gsap: Gsap, scope: Element) => {
  const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

  timeline
    .from(scope.querySelector("[data-hero-logo]"), {
      autoAlpha: 0,
      scale: 0.86,
      y: 12,
      duration: 0.42,
    })
    .from(
      scope.querySelector("[data-hero-kicker]"),
      {
        autoAlpha: 0,
        y: 18,
        duration: 0.42,
      },
      "-=0.32",
    )
    .from(
      scope.querySelectorAll("[data-hero-title-word]"),
      {
        autoAlpha: 0,
        yPercent: 82,
        duration: 0.5,
        stagger: 0.026,
      },
      "-=0.2",
    )
    .from(scope.querySelector("[data-hero-copy]"), {
      autoAlpha: 0,
      y: 26,
      duration: 0.46,
    })
    .from(
      scope.querySelectorAll("[data-hero-action], [data-hero-chip]"),
      {
        autoAlpha: 0,
        y: 18,
        duration: 0.38,
        stagger: 0.05,
      },
      "-=0.34",
    )
    .from(
      scope.querySelector("[data-hero-media]"),
      {
        autoAlpha: 0,
        scale: 0.96,
        y: 24,
        duration: 0.6,
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

export const sectionRevealConfig = {
  autoAlpha: 0,
  y: 34,
  duration: 0.72,
  ease: "power3.out",
};

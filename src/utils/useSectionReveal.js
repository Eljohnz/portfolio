
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "./gsap";

export function useSectionReveal(options = {}) {
  const containerRef = useRef(null);

  const {
    selector = "[data-reveal]",
    y = 40,
    duration = 0.9,
    stagger = 0.12,
    start = "top 85%",
    once = true,
  } = options;

  useGSAP(
    () => {
      const container = containerRef.current;

      if (!container) return;

      const elements = gsap.utils.toArray(
        selector,
        container
      );

      if (!elements.length) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) return;

      gsap.from(elements, {
        y,
        autoAlpha: 0,
        duration,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start,
          once,
        },
      });
    },
    { scope: containerRef }
  );

  return containerRef;
}

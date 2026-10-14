import { useRef } from "react";
import { gsap, useGSAP } from "../utils/gsap";

const heroDetails = [
  "Web Developer",
  "2026",
  "Selected Works",
  "Tarlac, Philippines",
];

export default function Hero() {
  const heroRef = useRef(null);
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-hero-background]", {
        scale: 1.08,
        duration: 1.8,
        clearProps: "transform",
      })
        .from(
          "[data-hero-detail]",
          {
            y: 22,
            autoAlpha: 0,
            stagger: 0.09,
            duration: 0.8,
            clearProps: "transform,opacity,visibility",
          },
          0.3,
        )
        .from(
          "[data-hero-heading]",
          {
            y: 70,
            autoAlpha: 0,
            duration: 1.2,
            clearProps: "transform,opacity,visibility",
          },
          0.5,
        );
    },
    { scope: heroRef },
  );
  return (
    <section
      ref={heroRef}
      id="home"
      className="relative flex min-h-screen min-h-[100dvh] flex-col overflow-hidden bg-black text-white"
    >
      <div data-hero-background className="absolute inset-0">
        <picture className="block h-full w-full">
          <source media="(max-width: 991px)" srcSet="/images/hero-1-mob.png" />
          <img
            src="/images/hero-1.png"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </picture>

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/85" />
      </div>

      <div className="portfolio-container relative z-10 flex min-h-screen min-h-[100dvh] flex-1 flex-col justify-between pt-5 pb-8 max-[991px]:pt-5 max-[991px]:pb-8">
        <div>
          <a
            href="/"
            aria-label="Elton Zafra, homepage"
            className="inline-flex items-start text-[32px] leading-none font-semibold tracking-[-0.055em] max-[991px]:text-[24px]"
          >
            {/* Elton Zafra */}
            <span className="ml-1 text-[20px] leading-none font-normal max-[991px]:text-[15px]">
              {/* © */}
            </span>
          </a>
        </div>

        <div className="w-full min-w-0">
          <div className="mb-6 grid grid-cols-4 gap-x-5 gap-y-3 text-[14px] leading-tight tracking-[-0.025em] max-[991px]:mb-5 max-[991px]:grid-cols-2 max-[991px]:text-[12px]">
            {heroDetails.map((detail) => (
              <span data-hero-detail key={detail}>
                {detail}
              </span>
            ))}
          </div>

          <h1 className="m-0 -ml-[12px] text-[clamp(5.2rem,16vw,16rem)] leading-[0.85] font-extrabold tracking-[-0.085em] whitespace-nowrap max-[991px]:-ml-[4px] max-[991px]:text-[clamp(3rem,15vw,16rem)]">
            Portfolio
          </h1>
        </div>
      </div>
    </section>
  );
}


import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap, useGSAP } from "../utils/gsap";

const expertise = [
  {
    number: "01",
    title: "Shopify Development",
    description:
      "Building custom Shopify storefronts, Liquid sections, metafields, and seamless e-commerce experiences.",
  },
  {
    number: "02",
    title: "WordPress Development",
    description:
      "Developing responsive WordPress websites with Elementor, custom functionality, and performance optimization.",
  },
  {
    number: "03",
    title: "Frontend Development",
    description:
      "Creating interactive, responsive web experiences using React, JavaScript, HTML, CSS, and Tailwind CSS.",
  },
  {
    number: "04",
    title: "UI Implementation",
    description:
      "Transforming Figma designs into pixel-accurate, accessible, and polished user interfaces.",
  },
];

export default function Expertise() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) return;

      gsap.from("[data-expertise-label]", {
        y: 20,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });

      const introTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "[data-expertise-intro]",
          start: "top 85%",
          once: true,
        },
      });

      introTimeline
        .from("[data-expertise-heading]", {
          y: 65,
          autoAlpha: 0,
          duration: 1.1,
          ease: "power4.out",
        })
        .from(
          "[data-expertise-description]",
          {
            y: 30,
            autoAlpha: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.65"
        );

      gsap.from("[data-expertise-row]", {
        y: 55,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-expertise-list]",
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="expertise"
      className="w-full bg-[#F3F3F3] py-30 text-[#0D0D0D] max-[991px]:py-10"
    >
      <div className="portfolio-container">
        <div
          data-expertise-label
          className="mb-20 flex items-center justify-between text-[14px] font-medium max-[991px]:mb-12 max-[991px]:text-[12px]"
        >
          <span>/ EXPERTISE</span>
          <span>N. 03</span>
        </div>

        <div
          data-expertise-intro
          className="mb-20 grid grid-cols-[1fr_1fr] items-end gap-10 max-[991px]:mb-12 max-[991px]:grid-cols-1 max-[991px]:gap-5"
        >
          <h2
            data-expertise-heading
            className="text-[clamp(60px,7vw,110px)] leading-[0.95] font-semibold tracking-[-0.065em] max-[991px]:text-[48px]"
          >
            What I
            <br />
            Do<span className="text-[#999]">.</span>
          </h2>

          <p
            data-expertise-description
            className="max-w-[500px] text-[18px] leading-[1.5] text-[#555] max-[991px]:text-[14px]"
          >
            Bringing digital experiences to life through
            thoughtful design, clean development, and
            attention to every detail.
          </p>
        </div>

        <div data-expertise-list>
          {expertise.map((item) => (
            <div
              key={item.number}
              data-expertise-row
              className="group grid grid-cols-[60px_minmax(0,1fr)_minmax(0,0.8fr)_40px] items-center gap-8 border-t border-[#C9C9C9] py-9 transition-colors duration-300 last:border-b hover:border-[#0D0D0D] max-[991px]:grid-cols-[30px_minmax(0,1fr)_30px] max-[991px]:gap-x-3 max-[991px]:gap-y-3 max-[991px]:py-6"
            >
              <span className="self-start pt-2 text-[14px] text-[#777] max-[991px]:pt-1 max-[991px]:text-[12px]">
                {item.number}
              </span>

              <h3 className="text-[clamp(24px,2.8vw,42px)] leading-[1.1] font-medium tracking-[-0.05em] transition-transform duration-500 group-hover:translate-x-2 max-[991px]:text-[24px] max-[991px]:group-hover:translate-x-0">
                {item.title}
              </h3>

              <p className="max-w-[400px] text-[15px] leading-[1.5] text-[#666] max-[991px]:col-start-2 max-[991px]:row-start-2 max-[991px]:text-[13px]">
                {item.description}
              </p>

              <ArrowUpRight
                size={26}
                strokeWidth={1.3}
                aria-hidden="true"
                className="justify-self-end transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 max-[991px]:h-5 max-[991px]:w-5"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

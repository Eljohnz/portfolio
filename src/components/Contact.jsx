import { gsap, useGSAP } from "../utils/gsap";
import { useSectionReveal } from "../utils/useSectionReveal";

const contactDetails = [
  {
    label: "Elton Zafra",
    href: null,
  },
  {
    label: "your-email@example.com",
    href: "mailto:your-email@example.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
  },
];

export default function Contact() {
  const sectionRef = useSectionReveal();
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.from("[data-contact-bg]", {
      scale: 1.06,
      duration: 1.8,
      ease: "power2.out",
      clearProps: "transform",
      scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
    });
  }, { scope: sectionRef });
  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative isolate flex py-30 flex-col overflow-hidden bg-black text-white max-[991px]:min-h-[700px] max-[991px]:py-10"
    >
      <div data-contact-bg className="absolute inset-0 -z-10">
        <picture className="block h-full w-full">
          <source
            media="(max-width: 991px)"
            srcSet="/images/hero-1-mob.png"
          />
          <img
            src="/images/hero-1.png"
            alt=""
            loading="lazy"
            className="h-full w-full object-cover object-center"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/90" />
      </div>

      <div className="portfolio-container flex min-h-[650px] flex-1 flex-col justify-between pt-12 pb-12 max-[991px]:min-h-[700px] max-[991px]:pt-10 max-[991px]:pb-10">
        <div className="flex items-start justify-between gap-8 max-[991px]:flex-col max-[991px]:gap-8">
          <h2 data-reveal className="text-[clamp(72px,8vw,150px)]  leading-[0.85] font-bold tracking-[-0.075em] max-[991px]:text-[clamp(54px,12vw,80px)]">
            LET'S
            <br />
            CONNECT
          </h2>

          <a data-reveal
            href="#"
            aria-label="Back to top"
            className="inline-flex items-start text-[32px] leading-none font-semibold tracking-[-0.055em] transition-opacity duration-300 hover:opacity-70 max-[991px]:text-[24px]"
          >
            Elton Zafra
            <span className="ml-1 text-[18px] leading-none font-normal max-[991px]:text-[14px]">
              ©
            </span>
          </a>
        </div>

        <div data-reveal className="relative">
          <div className="grid grid-cols-4 gap-5 pb-6 max-[991px]:grid-cols-2 max-[991px]:gap-x-5 max-[991px]:gap-y-8 max-[991px]:pb-0">
            {contactDetails.map((detail, index) => (
              <div
                key={index}
                className="flex min-w-0 flex-col items-center gap-4 max-[991px]:items-start"
              >
                {detail.href ? (
                  <a
                    href={detail.href}
                    target={
                      detail.href.startsWith("mailto:")
                        ? undefined
                        : "_blank"
                    }
                    rel={
                      detail.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="text-center text-[15px] leading-[1.4] transition-opacity duration-300 hover:opacity-60 max-[991px]:text-left max-[991px]:text-[12px]"
                  >
                    {detail.label}
                  </a>
                ) : (
                  <span className="text-center text-[15px] leading-[1.4] max-[991px]:text-left max-[991px]:text-[12px]">
                    {detail.label}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="relative mt-1 h-px w-full bg-white/60 max-[991px]:hidden">
            <div className="absolute inset-0 flex items-center justify-between">
              <span className="h-2.5 w-2.5 rounded-full bg-white opacity-0" />
              <span className="h-2.5 w-2.5 rounded-full bg-white" />
              <span className="h-2.5 w-2.5 rounded-full bg-white" />
              <span className="h-2.5 w-2.5 rounded-full bg-white" />
              <span className="h-2.5 w-2.5 rounded-full bg-white opacity-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

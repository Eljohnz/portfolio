
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-[#0D0D0D] py-10 text-white max-[991px]:py-8">
      <div className="portfolio-container">
        <div className="flex items-center justify-between gap-6">
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              scrollToTop();
            }}
            aria-label="Elton Zafra - Back to top"
            className="inline-flex items-start text-[28px] leading-none font-semibold tracking-[-0.055em] transition-opacity duration-300 hover:opacity-60 max-[991px]:text-[22px]"
          >
            Elton Zafra
            <span className="ml-1 text-[16px] leading-none font-normal max-[991px]:text-[12px]">
              ©
            </span>
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-3 text-[14px] transition-opacity duration-300 hover:opacity-60 max-[991px]:gap-2 max-[991px]:text-[12px]"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUpRight
              size={20}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 max-[991px]:h-4 max-[991px]:w-4"
            />
          </button>
        </div>

        <div className="my-8 h-px w-full bg-white/20 max-[991px]:my-6" />

        <div className="flex items-end justify-between gap-6 max-[991px]:flex-col max-[991px]:items-start">
          <div className="text-[13px] leading-[1.7] text-white/60 max-[991px]:text-[12px]">
            <p>© 2026 Elton Zafra</p>
            <p>All rights reserved.</p>
          </div>

          <div className="text-right text-[13px] leading-[1.7] max-[991px]:text-left max-[991px]:text-[12px]">
            <p>Web Developer</p>
            <p className="text-white/60">
              Tarlac, Philippines
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

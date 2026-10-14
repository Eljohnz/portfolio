
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { gsap } from "../utils/gsap";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Resume", href: "#resume" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navRef = useRef(null);
  const underlineRef = useRef(null);
  const isNavigatingRef = useRef(false);
  const navigationTweenRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      if (isNavigatingRef.current) return;

      const offset = 150;
      let current = "home";

      navigation.forEach(({ href }) => {
        const section = document.querySelector(href);

        if (section && section.getBoundingClientRect().top <= offset) {
          current = href.slice(1);
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavigate = (event, href) => {
    event.preventDefault();

    const section = document.querySelector(href);
    if (!section) return;

    const sectionId = href.slice(1);
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const headerOffset = window.innerWidth <= 991 ? 72 : 90;

    navigationTweenRef.current?.kill();

    isNavigatingRef.current = true;
    setActiveSection(sectionId);
    setIsMenuOpen(false);

    const finishNavigation = () => {
      isNavigatingRef.current = false;
      navigationTweenRef.current = null;
    };

    navigationTweenRef.current = gsap.to(window, {
      duration: reduceMotion ? 0 : 1.25,
      scrollTo: {
        y: section,
        offsetY: headerOffset,
        autoKill: true,
      },
      ease: "power3.inOut",
      overwrite: "auto",
      onComplete: finishNavigation,
      onInterrupt: finishNavigation,
    });

    window.history.replaceState(null, "", href);
  };

  useEffect(() => {
    const nav = navRef.current;
    const underline = underlineRef.current;

    if (!nav || !underline) return;

    const activeLink = nav.querySelector(
      `[data-section="${activeSection}"]`
    );

    if (!activeLink) return;

    const navBounds = nav.getBoundingClientRect();
    const linkBounds = activeLink.getBoundingClientRect();

    const x = linkBounds.left - navBounds.left;
    const width = linkBounds.width;

    gsap.to(underline, {
      x,
      width,
      duration: 0.65,
      ease: "power3.inOut",
      overwrite: "auto",
    });
  }, [activeSection]);

  useEffect(() => {
    return () => {
      navigationTweenRef.current?.kill();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        isScrolled || isMenuOpen
          ? "border-b border-white/15 bg-[#0D0D0D]/75 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="portfolio-container flex h-[90px] items-center justify-between max-[991px]:h-[72px]">
        <a
          href="#home"
          onClick={(event) => handleNavigate(event, "#home")}
          className="relative z-50 inline-flex items-start text-[28px] leading-none font-semibold tracking-[-0.055em] text-white transition-opacity duration-300 hover:opacity-70 max-[991px]:text-[22px]"
          aria-label="Elton Zafra - Home"
        >
          Elton Zafra
          <span className="ml-1 text-[16px] leading-none font-normal max-[991px]:text-[12px]">
            ©
          </span>
        </a>

        <nav
          ref={navRef}
          aria-label="Main navigation"
          className="relative flex items-center gap-10 max-[991px]:hidden"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-section={item.href.slice(1)}
              onClick={(event) => handleNavigate(event, item.href)}
              aria-current={
                activeSection === item.href.slice(1)
                  ? "location"
                  : undefined
              }
              className={`relative pb-2 text-[14px] font-medium transition-colors duration-300 hover:text-white ${
                activeSection === item.href.slice(1)
                  ? "text-white"
                  : "text-white/60"
              }`}
            >
              {item.label}
            </a>
          ))}

          <span
            ref={underlineRef}
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-white"
          />
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          className="relative z-50 hidden h-10 w-10 items-center justify-center text-white max-[991px]:flex"
        >
          {isMenuOpen ? (
            <X size={26} strokeWidth={1.5} />
          ) : (
            <Menu size={26} strokeWidth={1.5} />
          )}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        className={`absolute top-full left-0 hidden w-full overflow-hidden border-b border-white/10 bg-[#0D0D0D]/95 backdrop-blur-2xl transition-all duration-300 max-[991px]:block ${
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <div className="portfolio-container flex flex-col gap-2 py-8">
          {navigation.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleNavigate(event, item.href)}
              aria-current={
                activeSection === item.href.slice(1)
                  ? "location"
                  : undefined
              }
              className={`flex items-center justify-between border-b border-white/10 py-4 text-[26px] font-medium tracking-[-0.04em] transition-colors ${
                activeSection === item.href.slice(1)
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <span>{item.label}</span>

              <span className="flex items-center gap-3">
                <span className="text-[12px] tracking-normal text-white/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight size={18} strokeWidth={1.5} />
              </span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

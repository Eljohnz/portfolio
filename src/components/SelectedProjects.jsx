import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { useSectionReveal } from "../utils/useSectionReveal";

const projects = [
  {
    id: 1,
    title: "Project One",
    category: "E-commerce / Shopify",
    year: "2026",
    image: "/images/slider-1.png",
    role: "Shopify Developer",
    techStack: ["Shopify", "Liquid", "JavaScript", "CSS"],
    description:
      "A short overview of the project, including the purpose of the website, the development approach, and the features implemented.",
    highlights: [
      "Custom responsive sections",
      "Interactive storefront components",
      "Mobile-first implementation",
    ],
    website: "",
  },
  {
    id: 2,
    title: "Project Two",
    category: "Web Development / WordPress",
    year: "2026",
    image: "/images/slider-2.png",
    role: "WordPress Developer",
    techStack: ["WordPress", "Elementor", "CSS", "JavaScript"],
    description:
      "A WordPress website project focused on responsive layouts, flexible content management, and a polished user experience.",
    highlights: [
      "Responsive page layouts",
      "Custom Elementor components",
      "Performance improvements",
    ],
    website: "",
  },
  {
    id: 3,
    title: "Project Three",
    category: "Frontend Development / React",
    year: "2025",
    image: "/images/slider-3.png",
    role: "Frontend Developer",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    description:
      "A frontend development project featuring reusable React components, responsive layouts, and interactive user interfaces.",
    highlights: [
      "Reusable React components",
      "Responsive interface development",
      "Interactive functionality",
    ],
    website: "",
  },
  {
    id: 4,
    title: "Project Four",
    category: "Website Design / Development",
    year: "2025",
    image: "/images/slider-4.png",
    role: "Web Developer",
    techStack: ["HTML", "CSS", "JavaScript", "Figma"],
    description:
      "A website design and development project focused on translating visual concepts into a functional and responsive web experience.",
    highlights: [
      "Design implementation",
      "Responsive development",
      "Cross-device compatibility",
    ],
    website: "",
  },
];

function ProjectModal({ project, onClose }) {
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();

      if (event.key === "Tab") {
        const focusable = Array.from(
          panelRef.current?.querySelectorAll(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          ) || []
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.();
    };
  }, [onClose]);

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 max-[991px]:p-3">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-[8px]"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-title-${project.id}`}
        className="relative z-10 flex max-h-[90dvh] w-full max-w-[1000px] flex-col overflow-hidden bg-[#F5F5F5] text-[#0D0D0D] shadow-2xl max-[991px]:max-h-[92dvh]"
      >
        <div className="flex shrink-0 items-center justify-between border-b border-black/10 px-8 py-5 max-[991px]:px-5 max-[991px]:py-4">
          <span className="text-[12px] font-medium tracking-[0.06em]">
            / PROJECT DETAILS
          </span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0D0D0D] text-white transition-transform duration-300 hover:rotate-90"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <div className="aspect-[16/9] w-full overflow-hidden bg-[#E5E5E5] max-[991px]:aspect-[4/3]">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="px-8 pt-9 pb-12 max-[991px]:px-5 max-[991px]:pt-6 max-[991px]:pb-8">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="mb-3 text-[13px] text-[#777]">
                  {project.category}
                </p>
                <h2
                  id={`project-title-${project.id}`}
                  className="text-[clamp(36px,4vw,64px)] leading-[1.05] font-semibold tracking-[-0.06em] max-[991px]:text-[34px]"
                >
                  {project.title}
                </h2>
              </div>
              <span className="pt-1 text-[14px] text-[#777]">
                {project.year}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 max-[991px]:mt-6">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#CACACA] px-4 py-2 text-[12px] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="my-10 h-px w-full bg-black/15 max-[991px]:my-8" />

            <div className="grid grid-cols-[180px_minmax(0,1fr)] gap-10 max-[991px]:grid-cols-1 max-[991px]:gap-6">
              <div>
                <p className="text-[12px] font-medium tracking-[0.05em] text-[#777]">
                  MY ROLE
                </p>
                <p className="mt-2 text-[16px]">{project.role}</p>
              </div>
              <div>
                <h3 className="text-[20px] font-semibold tracking-[-0.03em]">
                  Project Overview
                </h3>
                <p className="mt-4 text-[15px] leading-[1.8] text-[#555]">
                  {project.description}
                </p>

                {project.highlights?.length > 0 && (
                  <div className="mt-9">
                    <h3 className="text-[20px] font-semibold tracking-[-0.03em]">
                      Key Highlights
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-3 text-[14px] leading-[1.5] text-[#555]"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0D0D0D]" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 inline-flex items-center gap-3 border-b border-[#0D0D0D] pb-2 text-[14px] font-medium transition-opacity duration-300 hover:opacity-50"
                  >
                    Visit Live Website
                    <ArrowUpRight size={18} strokeWidth={1.5} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function SelectedProjects() {
  const sectionRef = useSectionReveal();
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(projects.length - 1);
  const [selectedProject, setSelectedProject] = useState(null);

  const getSliderMetrics = () => {
    const slider = sliderRef.current;
    if (!slider) return null;

    const cards = Array.from(slider.children);
    if (!cards.length) return null;

    const maxScroll = Math.max(0, slider.scrollWidth - slider.clientWidth);
    const positions = cards.map((card) =>
      Math.min(Math.max(card.offsetLeft - slider.offsetLeft, 0), maxScroll)
    );
    const lastIndex = positions.findIndex((position) => position >= maxScroll - 1);
    const finalIndex = maxScroll <= 1 ? 0 : lastIndex === -1 ? cards.length - 1 : lastIndex;

    return { slider, cards, positions, finalIndex };
  };

  const updateSlider = () => {
    const metrics = getSliderMetrics();
    if (!metrics) return;

    const { slider, positions, finalIndex } = metrics;
    const nearestIndex = positions.reduce((closest, position, index) =>
      Math.abs(position - slider.scrollLeft) <
      Math.abs(positions[closest] - slider.scrollLeft)
        ? index
        : closest,
    0);

    setMaxIndex(finalIndex);
    setActiveIndex(Math.min(nearestIndex, finalIndex));
  };

  const scrollToIndex = (index) => {
    const metrics = getSliderMetrics();
    if (!metrics) return;

    const { slider, positions, finalIndex } = metrics;
    const nextIndex = Math.max(0, Math.min(index, finalIndex));

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    slider.scrollTo({
      left: positions[nextIndex],
      behavior: reducedMotion ? "instant" : "smooth",
    });

    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    const observer = new ResizeObserver(updateSlider);
    observer.observe(slider);
    Array.from(slider.children).forEach((card) => observer.observe(card));
    updateSlider();
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="w-full overflow-hidden bg-white py-16 text-[#0D0D0D] max-[991px]:py-10"
    >
      <div className="portfolio-container">
        <div
          data-reveal
          className="mb-10 flex items-start justify-between gap-6 max-[991px]:mb-12"
        >
          <span className="text-[14px] font-medium max-[991px]:text-[12px]">
            / SELECTED PROJECTS
          </span>
          <div className="flex flex-col items-end gap-6 max-[991px]:gap-4">
            <span className="text-[14px] font-medium max-[991px]:text-[12px]">
              N. 05
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollToIndex(activeIndex - 1)}
                disabled={activeIndex === 0}
                aria-label="Previous project"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D5D5D5] transition-all duration-300 hover:bg-[#0D0D0D] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 max-[991px]:h-10 max-[991px]:w-10"
              >
                <ArrowLeft size={20} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={() => scrollToIndex(activeIndex + 1)}
                disabled={activeIndex >= maxIndex}
                aria-label="Next project"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0D0D0D] text-white transition-all duration-300 hover:bg-[#444] disabled:cursor-not-allowed disabled:opacity-30 max-[991px]:h-10 max-[991px]:w-10"
              >
                <ArrowRight size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={sliderRef}
          onScroll={updateSlider}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-[991px]:gap-4"
        >
          {projects.map((project) => (
            <article
              key={project.id}
              className="min-w-0 flex-[0_0_calc((100%-24px)/2)] snap-start max-[991px]:flex-[0_0_100%]"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                aria-label={`View details for ${project.title}`}
                className="group block w-full cursor-pointer text-left"
              >
                <div
                  data-reveal
                  className="relative aspect-[4/3] overflow-hidden bg-[#EAEAEA]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    draggable="false"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute right-5 bottom-5 flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 max-[991px]:right-3 max-[991px]:bottom-3 max-[991px]:h-10 max-[991px]:w-10">
                    <ArrowUpRight size={22} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4 max-[991px]:mt-4">
                  <div>
                    <h3 className="text-[26px] leading-[1.1] font-medium tracking-[-0.04em] max-[991px]:text-[22px]">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.4] text-[#666] max-[991px]:text-[12px]">
                      {project.category}
                    </p>
                  </div>
                  <span className="text-[14px] text-[#666] max-[991px]:text-[12px]">
                    {project.year}
                  </span>
                </div>
              </button>
            </article>
          ))}
        </div>

        <div
          data-reveal
          className="mt-14 flex items-center gap-6 max-[991px]:mt-10 max-[991px]:gap-4"
        >
          <span className="text-[13px] tabular-nums">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <div className="relative h-[2px] flex-1 overflow-hidden bg-[#DDD]">
            <div
              className="absolute top-0 left-0 h-full bg-[#0D0D0D] transition-[width] duration-300"
              style={{ width: `${((activeIndex + 1) / (maxIndex + 1)) * 100}%` }}
            />
          </div>
          <span className="text-[13px] tabular-nums text-[#777]">
            {String(maxIndex + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

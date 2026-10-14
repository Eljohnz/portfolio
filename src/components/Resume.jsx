import { useSectionReveal } from "../utils/useSectionReveal";

import { Mail, Github, Linkedin, FileDown } from "lucide-react";

const experiences = [
  {
    company: "Company Name",
    date: "Jan 2025 - Present",
    position: "Frontend Web Developer",
  },
  {
    company: "Company Name",
    date: "Jun 2024 - Dec 2024",
    position: "Web Developer",
  },
  {
    company: "Company Name",
    date: "Jan 2024 - May 2024",
    position: "WordPress Developer",
  },
];

const resumeInfo = [
  {
    title: "Education",
    content: ["Bachelor's Degree", "University Name"],
  },
  {
    title: "Tools",
    content: [
      "HTML / CSS / JavaScript / React / Tailwind CSS / Shopify / WordPress / Figma / Git / GitHub",
    ],
  },
  {
    title: "Interests",
    content: [
      "Web Development / UI Design / Technology / Gaming / Digital Experiences",
    ],
  },
];

export default function Resume() {
  const sectionRef = useSectionReveal();
  return (
    <section
      ref={sectionRef}
      id="resume"
      className="w-full bg-[#101012] py-30 text-white max-[991px]:py-10"
    >
      <div className="portfolio-container">
        <div
          data-reveal
          className="mb-20 flex items-center justify-between text-[14px] font-medium max-[991px]:mb-14 max-[991px]:text-[12px]"
        >
          <span>/ RESUME</span>
          <span>N. 04</span>
        </div>

        <div className="grid grid-cols-[1fr_1.35fr_1.35fr] gap-x-[100px] max-[991px]:grid-cols-1 max-[991px]:gap-y-14">
          <div data-reveal className="flex min-w-0 flex-col">
            <div className="border-b border-white/20 pb-3 text-[15px]">
              About me
            </div>

            <h2 className="mt-6 text-[42px] leading-[1] font-semibold tracking-[-0.055em] max-[991px]:text-[38px]">
              Elton
              <br />
              Zafra
            </h2>

            <div className="mt-auto flex items-center gap-5 pt-32 max-[991px]:pt-10">
              <a
                href="mailto:your-email@example.com"
                aria-label="Email"
                className="inline-flex items-center justify-center text-white transition-opacity duration-300 hover:opacity-60"
              >
                <Mail size={24} strokeWidth={1.7} aria-hidden="true" />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center text-white transition-opacity duration-300 hover:opacity-60"
              >
                <Github size={24} strokeWidth={1.7} aria-hidden="true" />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center text-white transition-opacity duration-300 hover:opacity-60"
              >
                <Linkedin size={24} strokeWidth={1.7} aria-hidden="true" />
              </a>

              <a
                href="/Elton-Zafra-CV.pdf"
                download="Elton-Zafra-CV.pdf"
                aria-label="Download CV"
                title="Download CV"
                className="inline-flex items-center justify-center text-white transition-opacity duration-300 hover:opacity-60"
              >
                <FileDown size={24} strokeWidth={1.7} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div data-reveal className="min-w-0">
            <div className="border-b border-white/20 pb-3 text-[15px]">
              Experience
            </div>

            <div className="mt-5 flex flex-col gap-5">
              {experiences.map((experience, index) => (
                <div key={index}>
                  <h3 className="text-[17px] leading-[1.3] tracking-[-0.025em]">
                    {experience.company}
                  </h3>

                  <p className="mt-1 text-[12px] leading-[1.3]">
                    {experience.date}
                  </p>

                  <p className="mt-1 text-[14px] leading-[1.4]">
                    {experience.position}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div data-reveal className="flex min-w-0 flex-col gap-12">
            {resumeInfo.map((info) => (
              <div key={info.title}>
                <div className="border-b border-white/20 pb-3 text-[15px]">
                  {info.title}
                </div>

                <div className="mt-5 text-[16px] leading-[1.25] tracking-[-0.025em]">
                  {info.content.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

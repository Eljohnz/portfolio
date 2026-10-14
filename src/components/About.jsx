import { useSectionReveal } from "../utils/useSectionReveal";

const stats = [
  {
    value: "1+",
    label: "Years of\nExperience",
  },
  {
    value: "30+",
    label: "Completed Projects\nthat speak",
  },
];

export default function About() {
  const sectionRef = useSectionReveal();
  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full bg-white py-30 text-[#0D0D0D] max-[991px]:py-10"
    >
      <div className="portfolio-container">
        <div data-reveal className="mb-20 flex items-center justify-between text-[14px] font-medium max-[991px]:mb-12 max-[991px]:text-[12px]">
          <span>/ ABOUT</span>
          <span>N. 02</span>
        </div>

        <div className="grid grid-cols-[280px_minmax(0,1fr)] items-start gap-[80px] max-[991px]:grid-cols-1 max-[991px]:gap-10">
          <div data-reveal className="w-full">
            <img
              src="/images/about-img.png"
              alt="Elton Zafra"
              loading="lazy"
              className="aspect-square w-full object-cover max-[991px]:max-w-[220px]"
            />
          </div>

          <div className="flex min-w-0 flex-col">
            <h2 data-reveal className="max-w-[950px] text-[52px] leading-[1.08] font-semibold tracking-[-0.045em] max-[991px]:text-[32px]">
              Turning ideas into meaningful digital experiences.
            </h2>

            <div data-reveal className="mt-9 max-w-[900px] space-y-5 text-[16px] leading-[1.6] text-[#555] max-[991px]:mt-6 max-[991px]:text-[14px]">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer posuere erat a ante venenatis dapibus posuere
                velit aliquet. Donec ullamcorper nulla non metus auctor
                fringilla.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed posuere consectetur est at lobortis. Maecenas
                faucibus mollis interdum. Praesent commodo cursus magna,
                vel scelerisque nisl consectetur et.
              </p>
            </div>

            <div data-reveal className="mt-16 grid max-w-[760px] grid-cols-2 gap-x-10 gap-y-8 max-[991px]:mt-10 max-[991px]:gap-x-4">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="flex items-center gap-4 max-[991px]:flex-col max-[991px]:items-start max-[991px]:gap-2"
                >
                  <span className="text-[68px] leading-none font-semibold tracking-[-0.07em] max-[991px]:text-[48px]">
                    {stat.value}
                  </span>

                  <span className="whitespace-pre-line text-[16px] leading-[1.25] tracking-[-0.025em] max-[991px]:text-[12px]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";

import { SkillsMarquee } from "@/components/sections/SkillsMarquee";
import { Timeline } from "@/components/sections/Timeline";
import { Reveal } from "@/components/ui/Reveal";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { education } from "@/content/education";
import { summary } from "@/content/experience";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Trajetória profissional, experiência em e-commerce, tecnologias, formação e certificações de Rodolfo Leal.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    title: "Sobre — Rodolfo Leal",
    description:
      "Trajetória profissional, experiência em e-commerce, tecnologias, formação e certificações de Rodolfo Leal.",
    url: "/sobre",
  },
};

const h2 = "mb-7 font-display text-xl font-bold";
const listRow =
  "flex flex-wrap justify-between gap-4 border-b border-line py-4 text-[15px]";

export default function SobrePage() {
  return (
    <main
      id="conteudo"
      className="max-w-[780px] px-6 pt-14 pb-16 side:px-16 side:py-[100px]"
    >
      <section>
        <Reveal
          as="h1"
          delay={0.75}
          className="mb-5 font-display text-[clamp(28px,3.2vw,38px)] font-extrabold tracking-[-0.01em]"
        >
          Sobre
        </Reveal>
        <Reveal
          as="p"
          delay={0.85}
          className="mb-[90px] max-w-[62ch] text-[17px] leading-[1.7] text-ink-muted"
        >
          {summary}
        </Reveal>
      </section>

      <section>
        <RevealOnScroll as="h2" className={h2}>
          Experiência profissional
        </RevealOnScroll>
        <Timeline />
      </section>

      <RevealOnScroll className="mt-[90px]">
        <SkillsMarquee />
      </RevealOnScroll>

      <section className="mt-[90px]">
        <RevealOnScroll as="h2" className={h2}>
          Formação e certificações
        </RevealOnScroll>

        <RevealOnScroll
          as="ul"
          className="m-0 list-none border-t border-line p-0"
        >
          <li className={listRow}>
            <span>
              <strong className="font-medium text-ink">
                {education.academic.degree}
              </strong>{" "}
              — {education.academic.institution}
            </span>
            <span className="font-mono text-[13px] text-ink-muted">
              {education.academic.year}
            </span>
          </li>

          {education.certifications.map((cert) => (
            <li key={cert.title} className={listRow}>
              <span>
                <strong className="font-medium text-ink">{cert.title}</strong> —{" "}
                {cert.issuer}
              </span>
              <span className="font-mono text-[13px] text-ink-muted">
                {cert.tag}
              </span>
            </li>
          ))}
        </RevealOnScroll>
      </section>

      <RevealOnScroll as="section" className="mt-[90px]">
        <h2 className={h2}>Idiomas</h2>
        {education.languages.map((item) => (
          <p key={item.language} className="m-0 text-[15px] text-ink-muted">
            <strong className="font-medium text-ink">{item.language}</strong> —{" "}
            {item.level}
          </p>
        ))}
      </RevealOnScroll>
    </main>
  );
}

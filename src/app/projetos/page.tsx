import type { Metadata } from "next";

import { ProjectGroup } from "@/components/sections/ProjectGroup";
import { Reveal } from "@/components/ui/Reveal";
import { projectGroups, projectsIntro } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projetos",
  description: projectsIntro,
  alternates: { canonical: "/projetos" },
  openGraph: {
    title: "Projetos — Rodolfo Leal",
    description: projectsIntro,
    url: "/projetos",
  },
};

export default function ProjetosPage() {
  return (
    <main
      id="conteudo"
      className="max-w-[820px] px-6 pt-14 pb-16 side:px-16 side:py-[100px]"
    >
      <section>
        <Reveal
          as="h1"
          delay={0.75}
          className="mb-5 font-display text-[clamp(28px,3.2vw,38px)] font-extrabold tracking-[-0.01em]"
        >
          Projetos
        </Reveal>
        <Reveal
          as="p"
          delay={0.85}
          className="mb-[90px] max-w-[62ch] text-[17px] leading-[1.7] text-ink-muted"
        >
          {projectsIntro}
        </Reveal>
      </section>

      {projectGroups.map((group) => (
        <ProjectGroup key={group.company} group={group} />
      ))}
    </main>
  );
}

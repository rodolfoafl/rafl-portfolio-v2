import { Hero } from "@/components/sections/Hero";
import { SkillsMarquee } from "@/components/sections/SkillsMarquee";
import { Stats } from "@/components/sections/Stats";
import { Reveal } from "@/components/ui/Reveal";

export default function HomePage() {
  return (
    <main
      id="conteudo"
      className="max-w-[900px] px-6 pt-14 pb-16 side:px-16 side:pt-[100px] side:pb-20"
    >
      <Hero />
      <Stats />
      <Reveal delay={1.27}>
        <SkillsMarquee />
      </Reveal>
    </main>
  );
}

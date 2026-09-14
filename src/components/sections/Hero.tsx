import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { home } from "@/content/home";

export function Hero() {
  return (
    <section>
      <Reveal
        as="h1"
        delay={0.75}
        className="mb-6 max-w-[14ch] font-display text-[clamp(32px,4.2vw,52px)] font-extrabold leading-[1.12] tracking-[-0.015em]"
      >
        {home.headline}
      </Reveal>

      <Reveal
        as="p"
        delay={0.85}
        className="mb-9 max-w-[52ch] text-lg leading-[1.6] text-ink-muted"
      >
        {home.subheadline}
      </Reveal>

      <Reveal delay={0.95} className="mb-[90px] flex flex-wrap gap-3.5">
        {home.ctas.map((cta) => (
          <Button key={cta.href} href={cta.href} external={cta.external}>
            {cta.label}
          </Button>
        ))}
      </Reveal>
    </section>
  );
}

import { Reveal } from "@/components/ui/Reveal";
import { home } from "@/content/home";

interface StatsProps {
  /** Início da cascata de reveal, em segundos. */
  startDelay?: number;
}

export function Stats({ startDelay = 1.05 }: StatsProps) {
  return (
    <section className="mb-[90px] grid border-y border-line side:grid-cols-3">
      {home.stats.map((stat, index) => (
        <Reveal
          key={stat.label}
          delay={startDelay + index * 0.06}
          // `pl` uniforme nos três cards, inclusive no primeiro.
          className="border-b border-line py-5 last:border-b-0 side:border-r side:border-b-0 side:py-7 side:pr-6 side:pl-6 side:last:border-r-0 side:last:pr-0"
        >
          <span className="mb-1.5 block font-mono text-[34px] font-bold text-aqua">
            {stat.value}
          </span>
          <span className="text-[13px] text-ink-muted">{stat.label}</span>
        </Reveal>
      ))}
    </section>
  );
}

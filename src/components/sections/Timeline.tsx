import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { experience } from "@/content/experience";

export function Timeline() {
  return (
    <ol className="m-0 list-none border-t border-line p-0">
      {experience.map((job, index) => (
        <RevealOnScroll
          key={job.company}
          as="li"
          className="grid gap-5 border-b border-line py-8 side:grid-cols-[44px_1fr]"
        >
          <span className="font-mono text-[13px] text-aqua side:pt-[3px]">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div>
            <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5">
              <h3 className="m-0 font-display text-lg font-bold">
                {job.company}
              </h3>
              <span className="font-mono text-xs whitespace-nowrap text-ink-muted">
                {job.period}
              </span>
            </div>

            <p className="mb-3.5 text-sm text-ink-muted">{job.role}</p>

            <ul className="m-0 list-disc pl-[18px] text-[15px] leading-[1.65] text-ink-muted">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="mb-1.5 last:mb-0">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      ))}
    </ol>
  );
}

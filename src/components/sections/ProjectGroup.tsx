import Image from "next/image";

import { Chip } from "@/components/ui/Chip";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type {
  ProjectGroup as ProjectGroupData,
  ProjectLink,
} from "@/content/projects";

const linkBase = "font-mono text-[13px] border-b border-transparent";

function ProjectLinkItem({ link }: { link: ProjectLink }) {
  // Sem URL (intranet, projeto fora do ar) → texto neutro, nunca link quebrado.
  if (!link.url) {
    return (
      <span className={`${linkBase} cursor-default text-ink-muted`}>
        {link.label}
      </span>
    );
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${linkBase} text-aqua no-underline hover:border-aqua focus-visible:border-aqua`}
    >
      {link.label}
    </a>
  );
}

export function ProjectGroup({ group }: { group: ProjectGroupData }) {
  return (
    <section className="mb-[90px] last:mb-0">
      <RevealOnScroll className="mb-6">
        <h2 className="mb-1.5 font-display text-xl font-bold">
          {group.company}
        </h2>
        <span className="font-mono text-xs text-ink-muted">{group.period}</span>

        {group.note && (
          <p
            className={`mt-3.5 max-w-[62ch] border-l-2 bg-surface px-4 py-3.5 text-sm leading-[1.6] text-ink-muted ${
              group.noteTone === "neutral"
                ? "border-l-ink-muted"
                : "border-l-aqua"
            }`}
          >
            {group.note}
          </p>
        )}
      </RevealOnScroll>

      <ul className="m-0 list-none border-t border-line p-0">
        {group.items.map((item) => {
          const periodLabel =
            item.status === "offline" ? "Fora do ar" : item.period;

          return (
            <RevealOnScroll
              key={item.name}
              as="li"
              className="border-b border-line py-[26px]"
            >
              <div className="mb-2.5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5">
                <h3 className="m-0 font-display text-lg font-bold">
                  {item.name}
                </h3>
                {periodLabel && (
                  <span className="font-mono text-xs whitespace-nowrap text-ink-muted">
                    {periodLabel}
                  </span>
                )}
              </div>

              <p className="mb-3.5 max-w-[60ch] text-sm leading-[1.6] text-ink-muted">
                {item.description}
              </p>

              {item.tech.length > 0 && (
                <div className="mb-3.5 flex flex-wrap gap-1.5">
                  {item.tech.map((tech) => (
                    <Chip key={tech}>{tech}</Chip>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {item.links.map((link) => (
                  <ProjectLinkItem key={link.label} link={link} />
                ))}
              </div>

              {item.images && item.images.length > 0 && (
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {item.images.map((image) => (
                    <figure key={image.caption} className="m-0">
                      {/* Prints têm proporções diferentes: moldura fixa + corte pelo topo mantém os cards alinhados. */}
                      <div className="aspect-[2/1] overflow-hidden rounded-[3px] border border-line bg-surface">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          placeholder="blur"
                          sizes="(min-width: 53.75rem) 346px, (min-width: 40rem) 50vw, 100vw"
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                      <figcaption className="mt-2 font-mono text-xs text-ink-muted">
                        {image.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </RevealOnScroll>
          );
        })}
      </ul>
    </section>
  );
}

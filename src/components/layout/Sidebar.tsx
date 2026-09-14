"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";

import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/content/profile";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Projetos", href: "/projetos" },
];

function Divider({ delay }: { delay: number }) {
  return (
    <hr
      className="reveal my-[18px] h-px border-0 bg-line"
      style={{ "--d": `${delay}s` } as CSSProperties}
    />
  );
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <header className="flex flex-col border-b border-line bg-surface px-8 py-7 side:sticky side:top-0 side:h-screen side:overflow-y-auto side:border-r side:border-b-0">
      <Reveal delay={0}>
        <p className="mb-1.5 font-display text-[28px] font-extrabold leading-[1.15] tracking-[-0.01em]">
          {profile.name}
        </p>
        <p className="mb-1 font-mono text-[13px] text-aqua">{profile.role}</p>
        <p className="text-[13px] text-ink-muted">{profile.location}</p>
      </Reveal>

      <Divider delay={0.1} />

      <Reveal delay={0.18} as="dl">
        <dt className="mb-1 font-mono text-[11px] text-ink-muted">
          Especialização
        </dt>
        <dd className="mb-3 text-sm">{profile.specialty}</dd>

        <dt className="mb-1 font-mono text-[11px] text-ink-muted">
          Stack principal
        </dt>
        <dd className="mb-3 text-sm">
          <div className="flex flex-wrap gap-1.5">
            {profile.stackChips.map((chip) => (
              <Chip key={chip}>{chip}</Chip>
            ))}
          </div>
        </dd>

        <dt className="mb-1 font-mono text-[11px] text-ink-muted">Idiomas</dt>
        <dd className="text-sm">{profile.languages}</dd>
      </Reveal>

      <Divider delay={0.26} />

      <Reveal delay={0.32} as="nav" className="flex flex-col gap-2.5">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`text-sm no-underline transition-colors duration-150 hover:text-ink focus-visible:text-ink ${
                isActive ? "text-ink" : "text-ink-muted"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </Reveal>

      {/*
        `pt-8` garante o respiro mínimo mesmo quando a ficha estoura 100vh e o
        `mt-auto` colapsa para zero (bug 2 da seção 9 do PLANNING).
        `items-start` impede o CTA de esticar 100% no mobile (bug 1).
      */}
      <Reveal
        delay={0.4}
        className="mt-auto flex flex-col items-start gap-3.5 pt-8"
      >
        <a
          href={profile.resumeUrl}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-[3px] bg-amber px-[18px] py-[11px] text-center text-sm font-medium text-on-amber no-underline transition-[transform,opacity] duration-150 hover:-translate-y-px hover:opacity-92"
        >
          Baixar currículo
        </a>

        <div className="flex gap-4 text-[13px]">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-transparent text-ink-muted no-underline hover:border-ink-muted hover:text-ink focus-visible:border-ink-muted focus-visible:text-ink"
          >
            GitHub
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-transparent text-ink-muted no-underline hover:border-ink-muted hover:text-ink focus-visible:border-ink-muted focus-visible:text-ink"
          >
            LinkedIn
          </a>
        </div>
      </Reveal>
    </header>
  );
}

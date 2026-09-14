import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-block rounded-[3px] px-[18px] py-[11px] text-center text-sm font-medium no-underline transition-[transform,opacity,border-color] duration-150 hover:-translate-y-px";

const variants = {
  filled: "bg-amber text-on-amber hover:opacity-92",
  outline:
    "border border-line bg-transparent text-ink hover:border-ink-muted focus-visible:border-ink-muted",
} as const;

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  /** `true` para mailto:, links externos e arquivos estáticos (evita client nav). */
  external?: boolean;
  download?: boolean;
}

export function Button({
  href,
  children,
  variant = "outline",
  external = false,
  download = false,
}: ButtonProps) {
  const className = `${base} ${variants[variant]}`;

  if (external) {
    const isHttp = href.startsWith("http");
    return (
      <a
        href={href}
        className={className}
        download={download || undefined}
        target={isHttp || download ? "_blank" : undefined}
        rel={isHttp || download ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

import type { ReactNode } from "react";

const sizes = {
  sm: "text-[11px] px-2 py-1 text-ink-muted",
  lg: "text-[13px] px-3.5 py-2 text-ink whitespace-nowrap",
} as const;

interface ChipProps {
  children: ReactNode;
  size?: keyof typeof sizes;
  /** Usado nas cópias duplicadas do marquee, que não devem ser lidas de novo. */
  ariaHidden?: boolean;
}

export function Chip({ children, size = "sm", ariaHidden }: ChipProps) {
  return (
    <span
      aria-hidden={ariaHidden || undefined}
      className={`font-mono rounded-[3px] border border-line bg-transparent ${sizes[size]}`}
    >
      {children}
    </span>
  );
}

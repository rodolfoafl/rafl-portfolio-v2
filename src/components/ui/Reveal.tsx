import type { CSSProperties, ElementType, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Atraso da animação, em segundos. */
  delay?: number;
  as?: ElementType;
  className?: string;
}

/**
 * Reveal de carregamento (usado na Home). É só CSS — a classe `.reveal` roda a
 * keyframe e lê o atraso da custom property `--d`, então não precisa de JS.
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
}: RevealProps) {
  const style = { "--d": `${delay}s` } as CSSProperties;

  return (
    <Tag className={className ? `reveal ${className}` : "reveal"} style={style}>
      {children}
    </Tag>
  );
}

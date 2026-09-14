"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

/**
 * Revela o elemento na primeira vez que ele entra na viewport e desconecta o
 * observer — não repete ao rolar de volta.
 */
export function RevealOnScroll({
  children,
  as: Tag = "div",
  className,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={
        className ? `reveal-on-scroll ${className}` : "reveal-on-scroll"
      }
    >
      {children}
    </Tag>
  );
}

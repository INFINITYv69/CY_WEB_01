"use client";

import { ReactNode } from "react";
import clsx from "clsx";

type AtmosphereVariant = "cyan" | "magenta" | "green" | "amber" | "neutral";

const blobColors: Record<AtmosphereVariant, [string, string]> = {
  cyan: ["bg-sky-200/40", "bg-cyan-100/35"],
  magenta: ["bg-indigo-200/35", "bg-violet-100/30"],
  green: ["bg-emerald-200/35", "bg-teal-100/30"],
  amber: ["bg-amber-200/30", "bg-orange-100/25"],
  neutral: ["bg-slate-200/40", "bg-slate-100/30"],
};

type SectionAtmosphereProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  variant?: AtmosphereVariant;
};

export default function SectionAtmosphere({
  children,
  id,
  className,
  variant = "cyan",
}: SectionAtmosphereProps) {
  const [a, b] = blobColors[variant];

  return (
    <section id={id} className={clsx("relative overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className={clsx(
            "section-atmosphere-blob scroll-float-shape absolute -top-20 -right-16 h-72 w-72 rounded-full blur-3xl",
            a
          )}
        />
        <div
          className={clsx(
            "section-atmosphere-blob scroll-float-shape absolute -bottom-24 -left-12 h-64 w-64 rounded-full blur-3xl",
            b
          )}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </section>
  );
}

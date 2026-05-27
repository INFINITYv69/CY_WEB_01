"use client";

import clsx from "clsx";

type ScrollDividerProps = {
  variant?: "cyan" | "magenta" | "green" | "amber" | "indigo";
};

const gradients: Record<NonNullable<ScrollDividerProps["variant"]>, string> = {
  cyan: "from-transparent via-sky-400/50 to-transparent",
  magenta: "from-transparent via-indigo-400/50 to-transparent",
  green: "from-transparent via-emerald-400/45 to-transparent",
  amber: "from-transparent via-amber-400/45 to-transparent",
  indigo: "from-transparent via-violet-400/45 to-transparent",
};

export default function ScrollDivider({ variant = "cyan" }: ScrollDividerProps) {
  return (
    <div className="relative h-px w-full max-w-5xl mx-auto my-0 pointer-events-none" aria-hidden>
      <div
        className={clsx(
          "scroll-section-glow absolute inset-0 h-px origin-left bg-gradient-to-r",
          gradients[variant]
        )}
      />
      <div
        className={clsx(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-1 w-24 rounded-full blur-md bg-gradient-to-r opacity-60",
          gradients[variant]
        )}
      />
    </div>
  );
}

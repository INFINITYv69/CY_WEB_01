"use client";

import { ReactNode } from "react";
import clsx from "clsx";

type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
  label?: string;
  labelClassName?: string;
  align?: "left" | "center";
  /** When false, heading is always visible (no GSAP scroll-title hide) */
  animated?: boolean;
};

export default function SectionHeading({
  children,
  className,
  label,
  labelClassName,
  align = "center",
  animated = true,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "mb-14 md:mb-16",
        align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-3xl text-left"
      )}
    >
      {label && (
        <p
          className={clsx(
            "mb-3 text-sm font-bold uppercase tracking-[0.35em] text-text-muted",
            animated && "scroll-label",
            labelClassName
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={clsx(
          "text-4xl font-orbitron font-bold md:text-6xl",
          animated && "scroll-title [perspective:900px]",
          className
        )}
      >
        {animated ? (
          <span className="scroll-title-inner inline-block">{children}</span>
        ) : (
          children
        )}
      </h2>
    </div>
  );
}

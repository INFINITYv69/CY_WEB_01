"use client";

import { ReactNode } from "react";
import clsx from "clsx";

type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
  label?: string;
  labelClassName?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  children,
  className,
  label,
  labelClassName,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "mb-14 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-4xl" : "text-left max-w-3xl"
      )}
    >
      {label && (
        <p
          className={clsx(
            "scroll-label text-sm font-bold uppercase tracking-[0.35em] text-text-muted mb-3",
            labelClassName
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={clsx(
          "scroll-title text-4xl md:text-6xl font-orbitron font-bold [perspective:900px]",
          className
        )}
      >
        <span className="scroll-title-inner inline-block">{children}</span>
      </h2>
    </div>
  );
}

"use client";

import { ReactNode, CSSProperties } from "react";
import clsx from "clsx";

type RevealVariant = "up" | "down" | "left" | "right" | "scale" | "flip" | "blur" | "pop";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  style?: CSSProperties;
  id?: string;
  tilt?: boolean;
};

export default function ScrollReveal({
  children,
  className,
  variant = "up",
  delay = 0,
  style,
  id,
  tilt = false,
}: ScrollRevealProps) {
  return (
    <div
      id={id}
      data-reveal={variant}
      data-reveal-delay={delay}
      {...(tilt ? { "data-scroll-tilt": "" } : {})}
      className={clsx("will-change-transform", className)}
      style={style}
    >
      {children}
    </div>
  );
}

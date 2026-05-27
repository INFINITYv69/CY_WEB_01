"use client";

import { ensureLenisScroll } from "@/lib/scroll/setupLenis";
import { ReactNode, useLayoutEffect } from "react";

/** Bootstraps Lenis + ScrollTrigger scroller proxy as early as possible */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  useLayoutEffect(() => {
    ensureLenisScroll();
  }, []);

  return <>{children}</>;
}

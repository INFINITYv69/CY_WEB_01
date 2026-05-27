"use client";

import { initScrollEffects } from "@/lib/scroll/initScrollEffects";
import { ensureLenisScroll, getLenis, refreshScroll } from "@/lib/scroll/setupLenis";
import { useEffect } from "react";

/** Mount scroll-driven section animations after the page is ready */
export default function ScrollEffects({ enabled }: { enabled: boolean }) {
  useEffect(() => {
    if (!enabled) return;

    ensureLenisScroll();
    getLenis()?.scrollTo(0, { immediate: true });

    let teardown: (() => void) | undefined;

    const timer = window.setTimeout(() => {
      teardown = initScrollEffects();
      refreshScroll();
    }, 80);

    return () => {
      window.clearTimeout(timer);
      teardown?.();
    };
  }, [enabled]);

  return null;
}

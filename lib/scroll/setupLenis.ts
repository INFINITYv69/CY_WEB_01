import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;
let tickerAttached = false;

/** Lenis + ScrollTrigger bridge — must run before any ScrollTrigger is created */
export function ensureLenisScroll(): Lenis {
  if (typeof window === "undefined") {
    throw new Error("ensureLenisScroll must run in the browser");
  }

  if (lenis) return lenis;

  lenis = new Lenis({
    lerp: 0.08,
    duration: 1.2,
    smoothWheel: true,
  });

  const root = document.documentElement;

  // ScrollTrigger.scrollerProxy(root, {
  //   scrollTop(value?: number) {
  //     if (!lenis) return 0;
  //     if (value !== undefined) {
  //       lenis.scrollTo(value, { immediate: true });
  //     }
  //     return lenis.scroll;
  //   },
  //   getBoundingClientRect() {
  //     return {
  //       top: 0,
  //       left: 0,
  //       width: window.innerWidth,
  //       height: window.innerHeight,
  //     };
  //   },
  //   pinType: root.style.transform ? "transform" : "fixed",
  // });

  lenis.on("scroll", ScrollTrigger.update);

  if (!tickerAttached) {
    tickerAttached = true;
    gsap.ticker.add((time) => {
      lenis?.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }

  // ScrollTrigger.defaults({ scroller: root });

  return lenis;
}

export function getLenis(): Lenis | null {
  return lenis;
}

export function refreshScroll(): void {
  getLenis()?.resize();
  ScrollTrigger.refresh();
}

export function destroyLenisScroll(): void {
  lenis?.destroy();
  lenis = null;
  ScrollTrigger.scrollerProxy(document.documentElement, {});
  ScrollTrigger.clearScrollMemory();
}

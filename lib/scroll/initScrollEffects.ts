import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ensureLenisScroll } from "./setupLenis";

gsap.registerPlugin(ScrollTrigger);

const SCROLLER = () => window;

const REVEAL_DEFAULTS: Record<
  string,
  gsap.TweenVars
> = {
  up: { y: 72, opacity: 0, rotateX: 12, transformPerspective: 900 },
  down: { y: -56, opacity: 0 },
  left: { x: -80, opacity: 0, rotateY: 14, transformPerspective: 900 },
  right: { x: 80, opacity: 0, rotateY: -14, transformPerspective: 900 },
  scale: { scale: 0.82, opacity: 0, transformOrigin: "center center" },
  flip: { rotateY: -28, opacity: 0, transformPerspective: 1000, scale: 0.94 },
  blur: { opacity: 0, filter: "blur(14px)" },
  pop: { scale: 0.6, opacity: 0, rotate: -6 },
};

function parseDelay(el: Element) {
  const raw = el.getAttribute("data-reveal-delay");
  return raw ? parseFloat(raw) : 0;
}

export function initScrollEffects() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return () => {};
  }

  ensureLenisScroll();
  ScrollTrigger.config({ limitCallbacks: true });

  const ctx = gsap.context(() => {
    // —— Scroll progress bar ——
    const progressBar = document.getElementById("scroll-progress");
    if (progressBar) {
      gsap.to(progressBar, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          scroller: SCROLLER(),
          start: "top top",
          end: "bottom bottom",
          scrub: 0.15,
        },
      });
    }

    // —— Section gradient sweeps ——
    gsap.utils.toArray<HTMLElement>(".scroll-section-glow").forEach((glow) => {
      gsap.fromTo(
        glow,
        { scaleX: 0, opacity: 0.3 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: glow,
            scroller: SCROLLER(),
            start: "top 95%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });

    // —— Title reveals ——
    gsap.utils.toArray<HTMLElement>(".scroll-title").forEach((title) => {
      const inner = title.querySelector(".scroll-title-inner");
      const target = inner ?? title;
      gsap.from(target, {
        yPercent: 105,
        rotateX: -32,
        opacity: 0,
        transformOrigin: "50% 100%",
        duration: 1.05,
        ease: "power4.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: title,
          scroller: SCROLLER(),
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    });

    // —— Subtitle / label ——
    gsap.utils.toArray<HTMLElement>(".scroll-label").forEach((label) => {
      gsap.from(label, {
        letterSpacing: "0.5em",
        opacity: 0,
        y: 16,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: label,
          scroller: SCROLLER(),
          start: "top 90%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    });

    // —— Generic reveal ——
    gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
      const variant = el.getAttribute("data-reveal") ?? "up";
      const vars = REVEAL_DEFAULTS[variant] ?? REVEAL_DEFAULTS.up;
      gsap.from(el, {
        ...vars,
        duration: 1,
        delay: parseDelay(el),
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          scroller: SCROLLER(),
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    });

    // —— Stagger children ——
    gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((parent) => {
      const children = parent.querySelectorAll(":scope > [data-stagger-item], :scope > *");
      if (!children.length) return;
      gsap.from(children, {
        y: 48,
        opacity: 0,
        rotateX: 10,
        transformPerspective: 800,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: parent,
          scroller: SCROLLER(),
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    });

    // —— Parallax layers ——
    gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
      const speed = parseFloat(el.getAttribute("data-parallax") ?? "0.25");
      gsap.to(el, {
        y: () => speed * -120,
        ease: "none",
        scrollTrigger: {
          trigger: el.closest("section") ?? el,
          scroller: SCROLLER(),
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // —— 3D scroll tilt on cards ——
    gsap.utils.toArray<HTMLElement>("[data-scroll-tilt]").forEach((card) => {
      gsap.fromTo(
        card,
        { rotateX: 8, rotateY: -6, z: -40, transformPerspective: 1000 },
        {
          rotateX: -4,
          rotateY: 4,
          z: 20,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            scroller: SCROLLER(),
            start: "top 95%",
            end: "bottom 5%",
            scrub: 1.2,
          },
        }
      );
    });

    // —— Floating shapes scrub ——
    gsap.utils.toArray<HTMLElement>(".scroll-float-shape").forEach((shape, i) => {
      gsap.to(shape, {
        y: (i % 2 === 0 ? -80 : 60) * (1 + (i % 3) * 0.2),
        x: i % 2 === 0 ? 40 : -30,
        rotation: i % 2 === 0 ? 25 : -18,
        ease: "none",
        scrollTrigger: {
          trigger: shape.closest("section") ?? shape,
          scroller: SCROLLER(),
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    });

    // —— Counter stats ——
    gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
      const end = parseFloat(el.getAttribute("data-count") ?? "0");
      const suffix = el.getAttribute("data-count-suffix") ?? "";
      const prefix = el.getAttribute("data-count-prefix") ?? "";
      const obj = { val: 0 };
      gsap.to(obj, {
        val: end,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          scroller: SCROLLER(),
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
        onUpdate: () => {
          const n = Math.round(obj.val);
          el.textContent = `${prefix}${n}${suffix}`;
        },
      });
    });

    // —— Horizontal achievements pin (desktop) ——
    const mm = gsap.matchMedia();
    mm.add("(min-width: 900px)", () => {
      const achievementsSection = document.querySelector("#achievements");
      const achievementsTrack = document.querySelector<HTMLElement>(".achievements-track");
      if (!achievementsSection || !achievementsTrack) return;

      const getScrollAmount = () =>
        -(achievementsTrack.scrollWidth - window.innerWidth + 80);

      gsap.to(achievementsTrack, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: achievementsSection,
          scroller: SCROLLER(),
          start: "top top",
          end: () => `+=${Math.max(Math.abs(getScrollAmount()), 400) + window.innerHeight * 0.35}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    });

    // —— Image / logo parallax zoom ——
    gsap.utils.toArray<HTMLElement>("[data-scroll-zoom]").forEach((img) => {
      gsap.fromTo(
        img,
        { scale: 1.15, opacity: 0.7 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            scroller: SCROLLER(),
            start: "top 95%",
            end: "top 40%",
            scrub: true,
          },
        }
      );
    });

    // —— Section atmosphere blobs ——
    gsap.utils.toArray<HTMLElement>(".section-atmosphere-blob").forEach((blob, i) => {
      gsap.fromTo(
        blob,
        { scale: 0.6, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: blob.closest("section") ?? blob,
            scroller: SCROLLER(),
            start: "top 75%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
      gsap.to(blob, {
        y: (i + 1) * 35,
        rotation: i % 2 === 0 ? 12 : -8,
        ease: "none",
        scrollTrigger: {
          trigger: blob.closest("section") ?? blob,
          scroller: SCROLLER(),
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    });
  });

  ScrollTrigger.refresh();

  return () => ctx.revert();
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ensureLenisScroll } from "@/lib/scroll/setupLenis";

gsap.registerPlugin(ScrollTrigger);

type ColorBlob = {
  x: number;
  y: number;
  radius: number;
  rgb: [number, number, number];
  phaseX: number;
  phaseY: number;
  speedX: number;
  speedY: number;
  driftX: number;
  driftY: number;
};

/** Pastel mesh nodes tuned for white / light UI */
const COLOR_BLOBS: ColorBlob[] = [
  { x: 0.12, y: 0.18, radius: 0.52, rgb: [186, 230, 253], phaseX: 0, phaseY: 1.1, speedX: 0.11, speedY: 0.08, driftX: 0.14, driftY: 0.1 },
  { x: 0.78, y: 0.22, radius: 0.48, rgb: [199, 210, 254], phaseX: 2.4, phaseY: 0.6, speedX: 0.09, speedY: 0.12, driftX: 0.12, driftY: 0.11 },
  { x: 0.22, y: 0.72, radius: 0.5, rgb: [167, 243, 208], phaseX: 1.2, phaseY: 2.8, speedX: 0.1, speedY: 0.07, driftX: 0.1, driftY: 0.13 },
  { x: 0.68, y: 0.65, radius: 0.46, rgb: [254, 205, 211], phaseX: 3.1, phaseY: 1.8, speedX: 0.08, speedY: 0.1, driftX: 0.11, driftY: 0.09 },
  { x: 0.48, y: 0.42, radius: 0.44, rgb: [221, 214, 254], phaseX: 0.8, phaseY: 3.5, speedX: 0.13, speedY: 0.11, driftX: 0.09, driftY: 0.12 },
  { x: 0.55, y: 0.12, radius: 0.38, rgb: [254, 243, 199], phaseX: 4.2, phaseY: 0.3, speedX: 0.07, speedY: 0.09, driftX: 0.08, driftY: 0.08 },
];

export default function PerspectiveGrid() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const turbulenceRef = useRef<SVGFETurbulenceElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let raf = 0;
    let time = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      time += 0.007;

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      for (const blob of COLOR_BLOBS) {
        const cx =
          (blob.x + Math.sin(time * blob.speedX + blob.phaseX) * blob.driftX) *
          width;
        const cy =
          (blob.y + Math.cos(time * blob.speedY + blob.phaseY) * blob.driftY) *
          height;
        const r = blob.radius * Math.max(width, height);
        const [rC, gC, bC] = blob.rgb;

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        gradient.addColorStop(0, `rgba(${rC},${gC},${bC},0.5)`);
        gradient.addColorStop(0.4, `rgba(${rC},${gC},${bC},0.16)`);
        gradient.addColorStop(1, "rgba(255,255,255,0)");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    ensureLenisScroll();
    const scroller = document.documentElement;

    const scrollTween = gsap.to(wrapper, {
      y: "-8%",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        scroller,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    const turb = turbulenceRef.current;
    let turbTween: gsap.core.Tween | null = null;
    if (turb) {
      turbTween = gsap.fromTo(
        turb,
        { attr: { seed: 2, baseFrequency: "0.0025 0.004" } },
        {
          attr: { seed: 42, baseFrequency: "0.0045 0.0028" },
          duration: 14,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        }
      );
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      scrollTween.scrollTrigger?.kill();
      scrollTween.kill();
      turbTween?.kill();
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-white">
      <div
        ref={wrapperRef}
        className="absolute inset-0 h-[115%] w-full origin-top"
        style={{ filter: "blur(88px) url(#aurora-warp)" }}
      >
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      </div>

      <svg className="absolute h-0 w-0" aria-hidden>
        <defs>
          <filter
            id="aurora-warp"
            x="-25%"
            y="-25%"
            width="150%"
            height="150%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              ref={turbulenceRef}
              type="fractalNoise"
              baseFrequency="0.003 0.0045"
              numOctaves="3"
              seed="8"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="52"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Soft depth wash — keeps content readable on white */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.5), transparent 70%), linear-gradient(to bottom, rgba(255,255,255,0.15), transparent 40%, rgba(248,250,252,0.4))",
        }}
      />
    </div>
  );
}

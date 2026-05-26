"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PerspectiveGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);
  const orb4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Gentle parallax scroll effect for the background mesh
    gsap.to(containerRef.current, {
      y: "-10%",
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Reactive drift on scroll for individual blobs
    if (orb1Ref.current) {
      gsap.to(orb1Ref.current, {
        x: "15vw",
        y: "25vh",
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        }
      });
    }

    if (orb2Ref.current) {
      gsap.to(orb2Ref.current, {
        x: "-20vw",
        y: "35vh",
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.8,
        }
      });
    }

    if (orb3Ref.current) {
      gsap.to(orb3Ref.current, {
        x: "20vw",
        y: "-30vh",
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
        }
      });
    }

    if (orb4Ref.current) {
      gsap.to(orb4Ref.current, {
        x: "-15vw",
        y: "-20vh",
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        }
      });
    }
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-cyber-black">
      {/* Subtle background tech grid dots */}
      <div className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Live Liquid Wavy Mesh Container */}
      <div 
        ref={containerRef}
        className="absolute inset-0 w-full h-[120%] origin-top"
        style={{
          filter: "blur(110px) url(#liquid-wavy-filter)",
        }}
      >
        {/* Blob 1: Cyan */}
        <div 
          ref={orb1Ref}
          className="absolute top-[10%] left-[5%] w-[42rem] h-[42rem] rounded-full bg-neon-cyan/6 animate-liquid-1 pointer-events-none"
        />
        {/* Blob 2: Indigo/Magenta */}
        <div 
          ref={orb2Ref}
          className="absolute top-[30%] right-[5%] w-[45rem] h-[45rem] rounded-full bg-neon-magenta/5 animate-liquid-2 pointer-events-none"
        />
        {/* Blob 3: Teal/Green */}
        <div 
          ref={orb3Ref}
          className="absolute bottom-[20%] left-[8%] w-[38rem] h-[38rem] rounded-full bg-neon-green/5 animate-liquid-3 pointer-events-none"
        />
        {/* Blob 4: Soft Orange/Gold */}
        <div 
          ref={orb4Ref}
          className="absolute bottom-[40%] right-[15%] w-[35rem] h-[35rem] rounded-full bg-neon-orange/4 animate-liquid-4 pointer-events-none"
        />
        {/* Blob 5: Purple */}
        <div 
          className="absolute top-[50%] left-[40%] w-[32rem] h-[32rem] rounded-full bg-neon-purple/5 animate-liquid-1 pointer-events-none"
        />
      </div>

      {/* Technical UI Vector Graphics (Overlays) */}
      
      {/* Top Left Dotted Matrix */}
      <div className="absolute top-12 left-12 opacity-[0.22] text-neon-cyan select-none pointer-events-none">
        <svg width="48" height="96" className="w-full h-full">
          <pattern id="dot-grid-1" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="currentColor" />
          </pattern>
          <rect width="48" height="96" fill="url(#dot-grid-1)" />
        </svg>
      </div>

      {/* Bottom Right Dotted Matrix */}
      <div className="absolute bottom-12 right-12 opacity-[0.22] text-neon-magenta select-none pointer-events-none">
        <svg width="96" height="36" className="w-full h-full">
          <pattern id="dot-grid-2" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="currentColor" />
          </pattern>
          <rect width="96" height="36" fill="url(#dot-grid-2)" />
        </svg>
      </div>

      {/* Plus indicators */}
      <div className="absolute top-[18%] right-[22%] text-neon-cyan font-sans text-lg font-light opacity-[0.35] select-none pointer-events-none">+</div>
      <div className="absolute top-[48%] left-[6%] text-neon-magenta font-sans text-lg font-light opacity-[0.35] select-none pointer-events-none">+</div>
      <div className="absolute bottom-[28%] right-[10%] text-neon-green font-sans text-lg font-light opacity-[0.35] select-none pointer-events-none">+</div>

      {/* Tiny tech labels (Faint, light-themed cyber style) */}
      <div className="absolute bottom-12 left-12 font-mono text-[9px] text-text-muted/30 tracking-[0.2em] uppercase select-none pointer-events-none flex flex-col gap-1">
        <span>SYS.LOC // CYBER_STUDIO_V2.0</span>
        <span>GRID.STATUS // WAVE_DYNAMICS_ACTIVE</span>
      </div>

      {/* SVG Liquid Filter Definition */}
      <svg className="hidden">
        <defs>
          <filter id="liquid-wavy-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.005 0.007" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="75" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <style>{`
        @keyframes morph-1 {
          0% { border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%; }
          30% { border-radius: 70% 30% 52% 48% / 60% 40% 60% 40%; }
          60% { border-radius: 50% 50% 30% 70% / 40% 60% 40% 60%; }
          100% { border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%; }
        }
        @keyframes morph-2 {
          0% { border-radius: 70% 30% 52% 48% / 60% 40% 60% 40%; }
          30% { border-radius: 40% 60% 30% 70% / 50% 50% 50% 50%; }
          60% { border-radius: 50% 50% 70% 30% / 45% 45% 55% 55%; }
          100% { border-radius: 70% 30% 52% 48% / 60% 40% 60% 40%; }
        }
        @keyframes float-loop-1 {
          0% { transform: rotate(0deg) translate(0px, 0px) scale(1); }
          50% { transform: rotate(180deg) translate(90px, 60px) scale(1.08); }
          100% { transform: rotate(360deg) translate(0px, 0px) scale(1); }
        }
        @keyframes float-loop-2 {
          0% { transform: rotate(0deg) translate(0px, 0px) scale(1.08); }
          50% { transform: rotate(-180deg) translate(-70px, -90px) scale(0.92); }
          100% { transform: rotate(-360deg) translate(0px, 0px) scale(1.08); }
        }
        .animate-liquid-1 {
          animation: morph-1 20s ease-in-out infinite, float-loop-1 28s ease-in-out infinite;
        }
        .animate-liquid-2 {
          animation: morph-2 24s ease-in-out infinite, float-loop-2 34s ease-in-out infinite;
        }
        .animate-liquid-3 {
          animation: morph-1 28s ease-in-out infinite alternate, float-loop-1 30s ease-in-out infinite alternate;
        }
        .animate-liquid-4 {
          animation: morph-2 32s ease-in-out infinite alternate, float-loop-2 38s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
}

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
  const hud1Ref = useRef<HTMLDivElement>(null);
  const hud2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Grid scrolling
    gsap.to(containerRef.current, {
      y: "-25%",
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Orb 1 scroll animation (drifts from top-left toward right)
    if (orb1Ref.current) {
      gsap.to(orb1Ref.current, {
        x: "40vw",
        y: "60vh",
        scale: 1.4,
        opacity: 0.6,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        }
      });
    }

    // Orb 2 scroll animation (drifts from middle-right toward bottom-left)
    if (orb2Ref.current) {
      gsap.to(orb2Ref.current, {
        x: "-45vw",
        y: "80vh",
        scale: 0.8,
        opacity: 0.55,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.6,
        }
      });
    }

    // Orb 3 scroll animation (drifts upward from bottom-left)
    if (orb3Ref.current) {
      gsap.to(orb3Ref.current, {
        x: "30vw",
        y: "-40vh",
        scale: 1.25,
        opacity: 0.5,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
        }
      });
    }

    // HUD 1 scroll rotation
    if (hud1Ref.current) {
      gsap.to(hud1Ref.current, {
        rotation: 360,
        y: "25vh",
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
        }
      });
    }

    // HUD 2 scroll rotation
    if (hud2Ref.current) {
      gsap.to(hud2Ref.current, {
        rotation: -270,
        y: "-30vh",
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
        }
      });
    }
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-cyber-black">
      {/* Glowing Neon Orbs */}
      <div 
        ref={orb1Ref}
        className="absolute top-[10%] left-[5%] w-[35rem] h-[35rem] rounded-full bg-neon-cyan/5 blur-[9rem] pointer-events-none z-0"
      />
      <div 
        ref={orb2Ref}
        className="absolute top-[35%] right-[2%] w-[38rem] h-[38rem] rounded-full bg-neon-magenta/4 blur-[10rem] pointer-events-none z-0"
      />
      <div 
        ref={orb3Ref}
        className="absolute bottom-[15%] left-[8%] w-[32rem] h-[32rem] rounded-full bg-neon-purple/5 blur-[8rem] pointer-events-none z-0"
      />

      {/* Rotating Cybernetic HUD Rings (Parallax) */}
      <div 
        ref={hud1Ref}
        className="absolute top-[18%] right-[-8rem] w-[26rem] h-[26rem] opacity-[0.14] pointer-events-none z-0 text-neon-cyan select-none"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2, 6" fill="none" />
          <circle cx="100" cy="100" r="85" stroke="currentColor" strokeWidth="1" strokeDasharray="30, 15, 10, 15" fill="none" />
          <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="0.25" fill="none" />
          <line x1="100" y1="5" x2="100" y2="15" stroke="currentColor" strokeWidth="1" />
          <line x1="100" y1="185" x2="100" y2="195" stroke="currentColor" strokeWidth="1" />
          <line x1="5" y1="100" x2="15" y2="100" stroke="currentColor" strokeWidth="1" />
          <line x1="185" y1="100" x2="195" y2="100" stroke="currentColor" strokeWidth="1" />
          <circle cx="100" cy="30" r="1.5" fill="currentColor" />
          <circle cx="100" cy="170" r="1.5" fill="currentColor" />
        </svg>
      </div>

      <div 
        ref={hud2Ref}
        className="absolute bottom-[12%] left-[-10rem] w-[32rem] h-[32rem] opacity-[0.12] pointer-events-none z-0 text-neon-magenta select-none"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" strokeDasharray="80, 20" fill="none" />
          <circle cx="100" cy="100" r="75" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4, 4" fill="none" />
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1.25" strokeDasharray="40, 40, 10, 10" fill="none" />
          <line x1="30" y1="30" x2="40" y2="40" stroke="currentColor" strokeWidth="0.75" />
          <line x1="170" y1="170" x2="160" y2="160" stroke="currentColor" strokeWidth="0.75" />
          <line x1="170" y1="30" x2="160" y2="40" stroke="currentColor" strokeWidth="0.75" />
          <line x1="30" y1="170" x2="40" y2="160" stroke="currentColor" strokeWidth="0.75" />
        </svg>
      </div>

      {/* Grid Canvas */}
      <div 
        ref={containerRef}
        className="absolute inset-0 h-[200%] w-full"
        style={{
          perspective: "1000px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        <div 
          className="absolute inset-0 h-full w-full"
          style={{
            transform: "rotateX(60deg)",
            transformOrigin: "center center",
            backgroundSize: "60px 60px",
            backgroundImage: `
              linear-gradient(to right, rgba(0, 245, 255, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 245, 255, 0.08) 1px, transparent 1px)
            `,
            maskImage: "linear-gradient(to bottom, transparent, black 35%, black 65%, transparent)",
          }}
        >
          {/* Pulsing Glow Layer */}
          <div className="absolute inset-0 h-full w-full animate-pulse opacity-40"
            style={{
              backgroundSize: "60px 60px",
              backgroundImage: `
                linear-gradient(to right, rgba(0, 245, 255, 0.04) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 245, 255, 0.04) 1px, transparent 1px)
              `,
            }}
          />
        </div>
      </div>
    </div>
  );
}

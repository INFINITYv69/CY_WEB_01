"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Terminal } from "lucide-react";

export default function HeroContent() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text-like entrance for department line
      gsap.from(".dept-line span", {
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out",
      });

      // Title entrance
      gsap.from(".hero-title", {
        opacity: 0,
        x: -100,
        filter: "blur(10px)",
        duration: 1.2,
        ease: "power4.out",
        delay: 0.5,
      });

      // Typewriter subline
      const sublineText = "Building ethical, industry-ready cybersecurity professionals";
      const sublineEl = document.querySelector(".subline");
      if (sublineEl) {
        let i = 0;
        sublineEl.textContent = "";
        const type = () => {
          if (i < sublineText.length) {
            sublineEl.textContent += sublineText.charAt(i);
            i++;
            setTimeout(type, 50);
          }
        };
        setTimeout(type, 1500);
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 lg:px-24">
      <div className="max-w-6xl flex flex-col items-center text-center">
        {/* Top Line */}
        <div className="dept-line mb-6 text-sm md:text-base tracking-[0.34em] text-neon-cyan flex flex-wrap justify-center gap-2 font-bold">
          {"DEPARTMENT OF".split("").map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </div>

        {/* Main Title */}
        <h1 ref={titleRef} className="hero-title text-5xl md:text-7xl xl:text-8xl font-orbitron font-black leading-tight mb-8">
          <span className="block bg-gradient-to-r from-neon-cyan via-text-primary to-neon-magenta bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-flow pb-2">
            CYBER SECURITY
          </span>
          <span className="block text-text-primary">
            & INFO SECURITY
          </span>
        </h1>

        {/* Subline */}
        <div className="flex items-center justify-center gap-3 mb-14 max-w-2xl mx-auto">
          <Terminal size={24} className="text-neon-green shrink-0" />
          <p className="subline text-neon-green font-share-tech text-lg md:text-2xl border-r-2 border-neon-green pr-2 animate-blink-caret text-left">
            Building ethical, industry-ready cybersecurity professionals
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#programs" className="group relative px-10 py-4 bg-transparent overflow-hidden interactive rounded-full">
            <div className="absolute inset-0 border-2 border-neon-cyan neon-border rounded-full" />
            <div className="absolute inset-0 bg-neon-cyan translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
            <span className="relative z-10 font-orbitron font-bold tracking-widest group-hover:text-cyber-black transition-colors">
              Explore Programs
            </span>
          </a>

          <a href="#faculty" className="group relative px-10 py-4 bg-transparent overflow-hidden interactive rounded-full">
            <div className="absolute inset-0 border-2 border-neon-magenta rounded-full" style={{ boxShadow: "inset 0 0 10px rgba(79, 70, 229, 0.1)" }} />
            <div className="absolute inset-0 bg-neon-magenta translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
            <span className="relative z-10 font-orbitron font-bold tracking-widest text-neon-magenta group-hover:text-white transition-colors">
              Meet Faculty
            </span>
          </a>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="absolute bottom-12 left-0 w-full overflow-hidden bg-cyber-panel/50 backdrop-blur-sm border-y border-neon-green/20 py-3">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="text-neon-green font-share-tech text-sm tracking-widest px-8">
              Ethical Hacking | Digital Forensics | Network Security | Cryptography | Secure Software | Cyber Defense |
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-flow {
          animation: gradient-flow 6s ease infinite;
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #39ff14; }
        }
        .animate-blink-caret {
          animation: blink-caret 0.75s step-end infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

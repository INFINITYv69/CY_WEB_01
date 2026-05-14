"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Info } from "lucide-react";

const stats = [
  { label: "EST. 2024", value: "2024", sub: "Pulsing System", type: "pulse" },
  { label: "120 SEATS", value: "120", sub: "Capacity Limit", type: "bar" },
  { label: "2 PROGRAMS", value: "2", sub: "Binary Switch", type: "binary" },
  { label: "100% PRACTICAL", value: "100", sub: "Skill Based", type: "pie" },
];

const binaryColumns = Array.from({ length: 20 }, (_, column) => ({
  delay: `${(column % 7) * 0.27}s`,
  text: Array.from({ length: 50 }, (_, bit) => ((column * 17 + bit * 11) % 3 === 0 ? "1" : "0")).join(""),
}));

const featureTags = [
  "Industry-Ready Curriculum",
  "Established 2024",
  "Practical Applications",
  "Expert Collaboration",
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const [binaryRain, setBinaryRain] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isInView) {
      setBinaryRain(true);
      const timer = setTimeout(() => setBinaryRain(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section id="about" ref={containerRef} className="relative py-24 px-6 lg:px-24 overflow-hidden">
      {/* Binary Rain Background (Temporary) */}
      {binaryRain && mounted && (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 flex justify-around overflow-hidden">
          {binaryColumns.map((column, i) => (
            <div 
              key={i} 
              className="text-neon-cyan font-mono text-xs break-all animate-matrix-fall"
              style={{ animationDelay: column.delay }}
            >
              {column.text}
            </div>
          ))}
        </div>
      )}

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-8 flex flex-col items-center gap-y-2 leading-tight">
            <span className="text-neon-cyan flex items-center gap-4"><Info size={40} className="text-neon-cyan" /> About the Department</span>
          </h2>

          <div className="space-y-6 font-share-tech text-text-primary/70 leading-relaxed text-lg md:text-2xl">
            <p>
              The Department of CS-Cybersecurity and the Department of CS-Information Security at GM University is at the forefront of network analytics, network security, and topologies, dedicated to advancing the field of cybersecurity through innovative research and quality education. Established in 2024, our department has quickly become a center of excellence for cybersecurity education and research.
            </p>
            <p>
              We offer comprehensive programs that blend theoretical foundations with practical applications, preparing students for careers in the rapidly evolving field of cybersecurity. Our curriculum is designed in collaboration with industry experts to ensure relevance and employability.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {featureTags.map((tag, i) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="px-4 py-2 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full text-[10px] md:text-sm font-bold uppercase tracking-widest text-neon-cyan hover:bg-neon-cyan/20 transition-all cursor-crosshair"
              >
                {tag}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes matrix-fall {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }
        .animate-matrix-fall {
          animation: matrix-fall linear infinite;
        }
      `}</style>
    </section>
  );
}

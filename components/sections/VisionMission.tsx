"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Eye, Target, Crosshair } from "lucide-react";

const content = [
  {
    id: "Vision",
    title: "Vision",
    icon: Eye,
    accent: "text-neon-cyan",
    border: "border-neon-cyan/30",
    glow: "shadow-[0_0_15px_rgba(0,245,255,0.1)]",
    text: "Department of CS-Cyber Security (CY) will have a transformative impact on society through continual innovation in cybersecurity education, research, ethical hacking, digital forensics, and secure software development - fostering creativity, skill development, and entrepreneurship."
  },
  {
    id: "Mission",
    title: "Mission",
    icon: Target,
    accent: "text-neon-magenta",
    border: "border-neon-magenta/30",
    glow: "shadow-[0_0_15px_rgba(255,0,255,0.1)]",
    points: [
      "Understand cybersecurity concepts in real-time applications and problem-solving.",
      "Design robust tools and applications for secure data management.",
      "To foster research, entrepreneurship, and industry partnerships that accelerate technological advancements.",
      "To empower students with digital leadership skills, creativity, and global perspectives in Cybersecurity.",
      "Apply innovative methods for digital security in automation."
    ]
  },
  {
    id: "Objectives",
    title: "Objectives",
    icon: Crosshair,
    accent: "text-neon-green",
    border: "border-neon-green/30",
    glow: "shadow-[0_0_15px_rgba(57,255,20,0.1)]",
    points: [
      "To equip students with the skills to meet global-level cybersecurity challenges.",
      "To empower graduates to secure digital data while upholding ethical values.",
      "To build professionals capable of developing automated and innovative digital security systems."
    ]
  }
];

export default function VisionMission() {
  return (
    <section id="vision" className="py-24 px-6 lg:px-24 bg-cyber-dark/50">
      <div className="mx-auto mb-14 max-w-4xl text-center">
        <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-text-primary">
          Vision, Mission and Objectives
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {content.map((panel, idx) => (
          <TerminalPanel key={panel.id} panel={panel} delay={idx * 0.2} />
        ))}
      </div>
    </section>
  );
}

type TerminalPanelData = (typeof content)[number];

function TerminalPanel({ panel, delay }: { panel: TerminalPanelData, delay: number }) {
  const [typed, setTyped] = useState("");
  
  useEffect(() => {
    let i = 0;
    const fullText = panel.text ?? panel.points?.join("\n- ") ?? "";
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setTyped(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [panel]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`relative flex flex-col bg-cyber-panel/85 border ${panel.border} ${panel.glow} rounded-2xl overflow-hidden h-full min-h-[400px]`}
    >
      <div className="p-7 text-base leading-relaxed flex-1 mt-4">
        <div className={`mb-5 font-orbitron text-2xl font-bold ${panel.accent} flex items-center gap-3`}>
          {panel.icon && <panel.icon size={28} />}
          {panel.title}
        </div>
        
        <div className="text-text-primary/80 whitespace-pre-wrap">
          {typed}
          <span className={`inline-block w-2 h-4 ml-1 ${panel.accent} animate-pulse bg-current`} />
        </div>
      </div>

      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "20px 20px" }}
      />
    </motion.div>
  );
}

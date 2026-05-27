"use client";

import { Eye, Target, Crosshair } from "lucide-react";
import SectionHeading from "@/components/ui/scroll/SectionHeading";
import SectionAtmosphere from "@/components/ui/scroll/SectionAtmosphere";

const content = [
  {
    id: "Vision",
    title: "Vision",
    icon: Eye,
    accent: "text-neon-cyan",
    border: "border-neon-cyan/30",
    glow: "shadow-[0_0_15px_rgba(0,245,255,0.1)]",
    points: [
      "Transform society through continual innovation in cybersecurity education and research.",
      "Advance ethical hacking, digital forensics, and secure software development.",
      "Foster creativity, skill development, and entrepreneurship in cybersecurity.",
      "Build graduates who lead and innovate in the global digital security landscape.",
    ],
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
      "Foster research, entrepreneurship, and industry partnerships that accelerate technological advancements.",
      "Empower students with digital leadership skills, creativity, and global perspectives in Cybersecurity.",
      "Apply innovative methods for digital security in automation.",
    ],
  },
  {
    id: "Objectives",
    title: "Objectives",
    icon: Crosshair,
    accent: "text-neon-green",
    border: "border-neon-green/30",
    glow: "shadow-[0_0_15px_rgba(57,255,20,0.1)]",
    points: [
      "Equip students with the skills to meet global-level cybersecurity challenges.",
      "Empower graduates to secure digital data while upholding ethical values.",
      "Build professionals capable of developing automated and innovative digital security systems.",
    ],
  },
];

export default function VisionMission() {
  return (
    <SectionAtmosphere id="vision" className="bg-cyber-dark/50 py-24 px-6 lg:px-24" variant="cyan">
      <div className="mx-auto max-w-7xl">
        <SectionHeading>Vision, Mission and Objectives</SectionHeading>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3" data-stagger>
          {content.map((panel) => (
            <BulletPanel key={panel.id} panel={panel} />
          ))}
        </div>
      </div>
    </SectionAtmosphere>
  );
}

type PanelData = (typeof content)[number];

function BulletPanel({ panel }: { panel: PanelData }) {
  const Icon = panel.icon;

  return (
    <div
      data-stagger-item
      data-scroll-tilt
      className={`relative flex h-full min-h-[400px] flex-col overflow-hidden rounded-2xl border bg-cyber-panel/85 ${panel.border} ${panel.glow}`}
    >
      <div className="mt-4 flex-1 p-7 text-base leading-relaxed">
        <div className={`mb-5 flex items-center gap-3 font-orbitron text-2xl font-bold ${panel.accent}`}>
          {Icon && <Icon size={28} />}
          {panel.title}
        </div>

        {panel.id === "Vision" ? (
          <p className="text-justify text-base leading-relaxed text-text-primary/85">
            {panel.points.join(" ")}
          </p>
        ) : (
          <ul className="space-y-3">
            {panel.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-text-primary/80">
                <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full bg-current ${panel.accent}`} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
    </div>
  );
}

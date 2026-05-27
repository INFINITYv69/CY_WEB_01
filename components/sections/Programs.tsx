"use client";

import { Shield, Lock, ChevronRight, Download } from "lucide-react";
import { useState } from "react";
import { programs as programData } from "@/lib/siteData";
import SectionHeading from "@/components/ui/scroll/SectionHeading";
import SectionAtmosphere from "@/components/ui/scroll/SectionAtmosphere";

const programs = programData.map((program, index) => ({
  ...program,
  accent: index === 0 ? "text-neon-cyan" : "text-neon-magenta",
  bgGradient: index === 0 ? "from-blue-50/70 to-sky-100/70" : "from-indigo-50/70 to-purple-100/70",
  shadow: index === 0 ? "hover:shadow-blue-200" : "hover:shadow-indigo-200",
  btnBg: index === 0 ? "bg-neon-cyan text-white hover:bg-sky-700" : "bg-neon-magenta text-white hover:bg-indigo-700",
  icon: index === 0 ? Shield : Lock,
}));

export default function Programs() {
  return (
    <SectionAtmosphere id="programs" className="bg-white py-24 px-6 lg:px-24" variant="magenta">
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading label="Our Academic Offerings" align="center">
          Degree <span className="text-neon-cyan">Programs</span>
        </SectionHeading>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2" data-stagger>
          {programs.map((program, idx) => (
            <ProgramCard key={program.title} program={program} idx={idx} />
          ))}
        </div>
      </div>
    </SectionAtmosphere>
  );
}

type Program = (typeof programs)[number];

function ProgramCard({ program }: { program: Program; idx: number }) {
  const [loading, setLoading] = useState<string | null>(null);

  const handleDownload = (type: string) => {
    setLoading(type);
    setTimeout(() => {
      setLoading(null);
      window.open(type === "program" ? program.programLink : program.courseLink, "_blank");
    }, 1500);
  };

  const Icon = program.icon;

  return (
    <div
      data-stagger-item
      data-scroll-tilt
      className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br p-10 shadow-xl ${program.bgGradient} ${program.shadow} transition-all duration-500 hover:-translate-y-2`}
    >
      <div className="mb-8 flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:text-left">
        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-md">
          <Icon size={40} className={`${program.accent} transition-transform duration-500 group-hover:scale-110`} />
        </div>

        <div>
          <h3 className="mb-3 font-orbitron text-2xl font-bold text-text-primary md:text-3xl">
            {program.title}
          </h3>
          <p className="leading-relaxed text-text-muted">{program.description}</p>
        </div>
      </div>

      <div className="mb-10 rounded-2xl border border-white bg-white/60 p-6 backdrop-blur-md">
        <h4 className="mb-4 border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-widest text-text-muted">
          Key Areas of Focus
        </h4>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {program.specs.map((spec: string) => (
            <div key={spec} className="group/item flex items-start gap-3">
              <ChevronRight
                size={18}
                className={`${program.accent} mt-0.5 transition-transform group-hover/item:translate-x-1`}
              />
              <span className="font-medium text-text-primary/80 transition-colors group-hover/item:text-text-primary">
                {spec}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <button
          onClick={() => handleDownload("program")}
          className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-6 py-4 font-bold tracking-wide shadow-md transition-all hover:shadow-lg ${program.btnBg}`}
        >
          {loading === "program" ? (
            <span className="animate-pulse">Loading Document...</span>
          ) : (
            <>
              <Download size={18} />
              Program Details
            </>
          )}
        </button>

        <button
          onClick={() => handleDownload("course")}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-4 font-bold tracking-wide text-text-primary shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 hover:shadow"
        >
          {loading === "course" ? (
            <span className="animate-pulse text-text-muted">Loading...</span>
          ) : (
            <>
              <Download size={18} className="text-text-muted" />
              Course Structure
            </>
          )}
        </button>
      </div>
    </div>
  );
}

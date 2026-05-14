"use client";

import { motion } from "framer-motion";
import { Shield, Lock, ChevronRight, Download } from "lucide-react";
import { useState } from "react";
import { programs as programData } from "@/lib/siteData";

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
    <section id="programs" className="py-24 px-6 lg:px-24 bg-white overflow-hidden relative">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="text-sm font-bold uppercase tracking-widest text-text-muted mb-3">Our Academic Offerings</p>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-text-primary">
            Degree <span className="text-neon-cyan">Programs</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {programs.map((program, idx) => (
            <ProgramCard key={program.title} program={program} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Program = (typeof programs)[number];

function ProgramCard({ program, idx }: { program: Program, idx: number }) {
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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.2 }}
      viewport={{ once: true }}
      className={`relative group p-10 bg-gradient-to-br ${program.bgGradient} border border-slate-200 rounded-3xl overflow-hidden shadow-xl ${program.shadow} transition-all duration-500 hover:-translate-y-2`}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8 text-center md:text-left">
        {/* Icon */}
        <div className={`flex-shrink-0 w-24 h-24 rounded-2xl flex items-center justify-center bg-white shadow-md border border-slate-100`}>
          <Icon size={40} className={`${program.accent} group-hover:scale-110 transition-transform duration-500`} />
        </div>
        
        {/* Title */}
        <div>
          <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-text-primary mb-3">
            {program.title}
          </h3>
          <p className="text-text-muted leading-relaxed">
            {program.description}
          </p>
        </div>
      </div>

      <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 mb-10 border border-white">
        <h4 className="text-sm font-bold uppercase tracking-widest text-text-muted mb-4 border-b border-slate-200 pb-2">Key Areas of Focus</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {program.specs.map((spec: string) => (
            <div key={spec} className="flex items-start gap-3 group/item">
              <ChevronRight size={18} className={`${program.accent} mt-0.5 group-hover/item:translate-x-1 transition-transform`} />
              <span className="font-medium text-text-primary/80 group-hover/item:text-text-primary transition-colors">
                {spec}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={() => handleDownload("program")}
          className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold tracking-wide transition-all ${program.btnBg} shadow-md hover:shadow-lg`}
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
          className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold tracking-wide transition-all bg-white text-text-primary border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm hover:shadow"
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
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  ClipboardList,
  FileText,
  GraduationCap,
  LibraryBig,
  Medal,
  Microscope,
  ShieldCheck,
  Users,
} from "lucide-react";

const quickLinks = [
  { title: "Programs", href: "#programs", desc: "Cyber Security and Information Security programs.", icon: GraduationCap },
  { title: "Faculty", href: "#faculty", desc: "Meet the teaching and mentoring team.", icon: Users },
  { title: "Achievements", href: "#achievements", desc: "Student awards, hackathons, and recognitions.", icon: Medal },
  { title: "BOS", href: "#board-of-studies", desc: "Board of Studies members and academic guidance.", icon: ClipboardList },
  { title: "Gallery", href: "#gallery", desc: "Department activities and student moments.", icon: CalendarDays },
  { title: "Admissions", href: "#admissions", desc: "Eligibility, process, and coordinator details.", icon: FileText },
];

const studentCorner = [
  "Hackathon preparation and team mentoring",
  "Peer learning groups for labs and projects",
  "Workshops on GitHub, LinkedIn, and career readiness",
  "Student project support and showcase opportunities",
];

const resources = [
  { title: "GMU LEAP", desc: "Learning, Engagement, and Progress tracking portal for academic excellence.", href: "https://leap.gmu.ac.in/", icon: GraduationCap },
  { title: "Digital Library", desc: "Reference material, journals, and academic reading support.", icon: LibraryBig },
  { title: "Security Labs", desc: "Hands-on practice for networks, forensics, secure software, and cyber defense.", icon: ShieldCheck },
  { title: "Research Support", desc: "Guidance for posters, publications, project writing, and competitions.", icon: Microscope },
  { title: "Learning Platforms", desc: "Curated online learning paths for certifications and skill building.", icon: BookOpen },
];

export function QuickAccess() {
  return (
    <section id="quick-access" className="relative overflow-hidden bg-cyber-black px-6 py-24 lg:px-24">
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(120deg,#00f5ff_0%,transparent_34%),linear-gradient(300deg,#ff00ff_0%,transparent_28%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-neon-green">Department Links</p>
            <h2 className="text-4xl font-bold md:text-6xl">Quick Access</h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-text-muted">
            Important academic areas are collected here so visitors can reach the most useful department information quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {quickLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-cyber-panel/80 p-6 transition-all hover:-translate-y-1 hover:border-neon-cyan/70 hover:shadow-[0_20px_60px_rgba(0,245,255,0.12)]"
              >
                <div className="mb-7 flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-neon-cyan/25 bg-neon-cyan/10 text-neon-cyan">
                    <Icon size={22} />
                  </div>
                  <ArrowUpRight size={20} className="text-text-muted transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-neon-cyan" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-text-primary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">{item.desc}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function StudentCorner() {
  return (
    <section id="student-corner" className="bg-cyber-dark/35 px-6 py-24 lg:px-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-neon-cyan">Student Support</p>
          <h2 className="mb-6 text-4xl font-bold md:text-6xl">Student Corner</h2>
          <p className="text-lg leading-relaxed text-text-muted">
            A focused space for activities that help students move from classroom learning to practical confidence,
            competitions, teamwork, and professional readiness.
          </p>
        </div>

        <div className="grid gap-4">
          {studentCorner.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-cyber-panel/80 p-5"
            >
              <div className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-neon-green/10 text-neon-green">
                {index + 1}
              </div>
              <p className="text-base leading-relaxed text-text-primary/80">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LearningResources() {
  return (
    <section id="learning-resources" className="bg-cyber-black px-6 py-24 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-neon-magenta">Academic Support</p>
          <h2 className="text-4xl font-bold md:text-6xl">Learning Resources</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {resources.map((item, index) => {
            const Icon = item.icon;
            const isLink = 'href' in item && item.href;

            const cardContent = (
              <>
                <div className="mb-8 flex items-center justify-between">
                  <Icon className="text-neon-magenta" size={34} strokeWidth={1.7} />
                  {isLink && (
                    <ArrowUpRight size={20} className="text-text-muted transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-neon-magenta" />
                  )}
                </div>
                <h3 className="mb-4 text-xl font-bold text-text-primary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">{item.desc}</p>
              </>
            );

            if (isLink) {
              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07 }}
                  className="group block min-h-64 rounded-2xl border border-white/10 bg-cyber-panel/80 p-6 transition-all hover:border-neon-magenta/60 hover:shadow-[0_20px_60px_rgba(79,70,229,0.12)] hover:-translate-y-1 cursor-pointer"
                >
                  {cardContent}
                </motion.a>
              );
            }

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07 }}
                className="min-h-64 rounded-2xl border border-white/10 bg-cyber-panel/80 p-6 transition-all hover:border-neon-magenta/60"
              >
                {cardContent}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

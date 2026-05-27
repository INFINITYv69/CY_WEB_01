"use client";

import { Briefcase } from "lucide-react";
import SectionHeading from "@/components/ui/scroll/SectionHeading";
import SectionAtmosphere from "@/components/ui/scroll/SectionAtmosphere";
import ScrollReveal from "@/components/ui/scroll/ScrollReveal";

export default function Placement() {
  return (
    <SectionAtmosphere id="placements" className="bg-cyber-black py-24 px-6 lg:px-24" variant="magenta">
      <div className="mx-auto max-w-7xl">
        <div className="mb-24 flex flex-col items-center gap-16 lg:flex-row">
          <div className="flex-1">
            <SectionHeading align="left" className="mb-8 [&_.scroll-title-inner]:text-neon-magenta">
              <span className="flex items-center gap-4">
                <Briefcase size={48} className="text-neon-magenta" />
                Placements & Internships
              </span>
            </SectionHeading>
            <ScrollReveal variant="up" delay={0.08}>
            <p className="font-share-tech text-lg leading-relaxed text-text-muted">
              Our graduates are prepared to secure the digital world. With a strong focus on practical
              skills and industry certifications, we ensure 100% placement support for our students in
              top-tier organizations.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3" data-stagger>
              <StatItem label="HIRING COMPANIES" count={20} suffix="+" color="text-neon-cyan" />
              <StatItem label="AVG PACKAGE" value="₹6.5 LPA" color="text-neon-magenta" />
              <StatItem label="PLACEMENT RATE" count={85} suffix="%" color="text-neon-green" />
            </div>
            </ScrollReveal>
          </div>

          <ScrollReveal variant="right" className="w-full lg:w-96">
            <div
              data-scroll-tilt
              className="group relative overflow-hidden rounded-3xl border-2 border-amber-200/60 bg-gradient-to-b from-yellow-50 to-amber-100/50 p-8 shadow-lg shadow-amber-900/5 transition-all duration-300 hover:border-amber-400 hover:shadow-[0_18px_50px_rgba(251,191,36,0.2)]"
            >
              <div className="mb-8 flex flex-col items-center gap-6 text-center">
                <div className="relative h-40 w-40 shrink-0 rounded-full bg-gradient-to-tr from-blue-800 via-blue-500 to-cyan-400 p-[4px] shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-500 group-hover:shadow-[0_0_35px_rgba(59,130,246,0.5)]">
                  <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white bg-white">
                    <img
                      src="https://cy-iy.vercel.app/static/Rachana_faculty.jpeg"
                      alt="Dr. Rachana P G"
                      className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-orbitron text-xl font-bold text-slate-800">Dr. Rachana P G</h4>
                  <p className="mt-1 font-mono text-xs font-bold uppercase tracking-widest text-sky-600">
                    Placement & Internship Coordinator
                  </p>
                </div>
              </div>
              <div className="mt-6 space-y-2 border-t border-slate-100 pt-4 font-mono text-sm text-slate-600">
                <p>Tel: +91 63606 01253</p>
                <p>Email: rachanapg@gmit.ac.in</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="scale" className="relative mt-12 rounded-t-3xl border-t border-white/5 bg-cyber-panel/20 py-16">
          <div className="mb-8 text-center">
            <h4 className="font-mono text-xs uppercase tracking-widest text-neon-cyan">
              Our Recruitment Partners
            </h4>
          </div>
          <div className="flex w-full justify-center px-4">
            <img
              src="https://res.cloudinary.com/dkg60zkba/image/upload/v1774188373/placement/recruitment_partners.png"
              alt="Recruitment Partners"
              data-scroll-zoom
              className="h-auto w-full max-w-5xl object-contain opacity-80 transition-all duration-500 hover:scale-[1.02] hover:opacity-100"
            />
          </div>
        </ScrollReveal>
      </div>
    </SectionAtmosphere>
  );
}

function StatItem({
  label,
  value,
  count,
  suffix = "",
  color,
}: {
  label: string;
  value?: string;
  count?: number;
  suffix?: string;
  color: string;
}) {
  return (
    <div data-stagger-item className="space-y-1">
      {count !== undefined ? (
        <p className={`font-orbitron text-3xl font-bold ${color}`} data-count={count} data-count-suffix={suffix}>
          0{suffix}
        </p>
      ) : (
        <p className={`font-orbitron text-3xl font-bold ${color}`}>{value}</p>
      )}
      <p className="font-mono text-[10px] uppercase tracking-tighter text-text-muted">{label}</p>
    </div>
  );
}

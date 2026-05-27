"use client";

import { Award, BookMarked, Mail, Phone, Presentation, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/ui/scroll/SectionHeading";
import SectionAtmosphere from "@/components/ui/scroll/SectionAtmosphere";
import ScrollReveal from "@/components/ui/scroll/ScrollReveal";

const qualityAreas = [
  "Outcome-based teaching and learning review",
  "Academic documentation and continuous improvement",
  "Student feedback, mentoring, and quality initiatives",
];

const researchAreas = [
  "Cyber defense and secure systems",
  "Digital forensics and incident response",
  "Secure software development",
  "Network security and cryptography",
];

export function DQAC() {
  return (
    <SectionAtmosphere id="dqac" className="bg-purple-900/10 py-24 px-6 lg:px-24" variant="green">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1fr_420px] lg:items-center">
        <ScrollReveal variant="left" className="flex-1">
          <SectionHeading label="Quality Assurance" align="left" className="[&_.scroll-title-inner]:text-neon-cyan">
            DQAC
          </SectionHeading>
          <p className="mb-8 font-share-tech leading-relaxed text-text-muted md:text-xl">
            The Departmental Quality Assurance Cell (DQAC) ensures the highest standards of education
            and research within the department. Led by our dedicated coordinator, the cell focuses on
            continuous improvement and academic excellence.
          </p>
          <div className="grid gap-3" data-stagger>
            {qualityAreas.map((item) => (
              <div
                key={item}
                data-stagger-item
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-cyber-panel/60 p-4"
              >
                <ShieldCheck className="mt-1 shrink-0 text-neon-cyan" size={18} />
                <p className="text-sm text-text-primary/75 md:text-lg">{item}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal variant="right" tilt className="group relative flex h-full w-full flex-col items-center justify-center rounded-3xl border-2 border-amber-200/60 bg-gradient-to-b from-yellow-50 to-amber-100/50 p-8 text-center shadow-lg shadow-amber-900/5 transition-all duration-300 hover:border-amber-400 hover:shadow-[0_18px_50px_rgba(251,191,36,0.2)]">
          <div className="relative mb-6 h-40 w-40 shrink-0 rounded-full bg-gradient-to-tr from-blue-800 via-blue-500 to-cyan-400 p-[4px] shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-500 group-hover:shadow-[0_0_35px_rgba(59,130,246,0.5)]">
            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white bg-white">
              <img
                src="https://cy-iy.vercel.app/static/pavan_faculty.png"
                alt="Mr. Pavan Kumar N T"
                className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
              />
            </div>
          </div>
          <h4 className="mb-2 font-orbitron text-xl font-bold text-slate-800 md:text-2xl">
            Mr. Pavan Kumar N T
          </h4>
          <p className="mb-6 text-sm font-bold uppercase tracking-widest text-sky-600">DQAC Coordinator</p>
          <div className="space-y-3 font-mono text-sm text-slate-600">
            <div className="flex items-center justify-center gap-2">
              <Phone size={16} className="text-sky-500" /> +91 9113283741
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail size={16} className="text-sky-500" /> pavankumaracharya007@gmail.com
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionAtmosphere>
  );
}

export function Research() {
  return (
    <SectionAtmosphere
      id="research"
      className="border-y border-white/5 bg-blue-900/10 py-24 px-6 lg:px-24"
      variant="magenta"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Research and Projects"
          align="left"
          className="[&_.scroll-title-inner]:text-neon-magenta"
        >
          Research
        </SectionHeading>
        <ScrollReveal variant="blur" className="mb-12 max-w-3xl">
          <p className="text-lg leading-relaxed text-text-muted md:text-2xl">
            The department encourages student-led projects, research posters, publications, and
            applied cybersecurity problem solving.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[420px_1fr]">
          <ScrollReveal variant="left" tilt>
            <div className="group relative h-full overflow-hidden rounded-3xl border-2 border-amber-200/60 bg-gradient-to-b from-yellow-50 to-amber-100/50 p-8 shadow-lg shadow-amber-900/5 transition-all duration-300 hover:border-amber-400 hover:shadow-[0_18px_50px_rgba(251,191,36,0.2)]">
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="relative mb-6 h-40 w-40 shrink-0 rounded-full bg-gradient-to-tr from-blue-800 via-blue-500 to-cyan-400 p-[4px] shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-500 group-hover:shadow-[0_0_35px_rgba(59,130,246,0.5)]">
                  <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white bg-white">
                    <img
                      src="https://res.cloudinary.com/dkg60zkba/image/upload/v1774188001/faculty/nmr2zfqaftglonhpsiuy.jpg"
                      alt="Dr. Aruna Kumar B T"
                      className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
                    />
                  </div>
                </div>
                <h4 className="mb-2 font-orbitron text-xl font-bold text-slate-800 md:text-2xl">
                  Dr. Aruna Kumar B T
                </h4>
                <p className="mb-6 font-share-tech text-sm font-bold uppercase tracking-widest text-sky-600 md:text-lg">
                  Research Coordinator
                </p>
                <div className="space-y-2 font-mono text-[10px] text-slate-600 md:text-sm">
                  <p>Tel: +91 99452 21208</p>
                  <p>Email: hod.cyiy@gmu.ac.in</p>
                  <p className="mt-4 border-t border-slate-100 pt-4">
                    Focus: Advancing knowledge in cybersecurity
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-2" data-stagger>
            {researchAreas.map((area, index) => (
              <div
                key={area}
                data-stagger-item
                data-scroll-tilt
                className="rounded-2xl border border-white/10 bg-cyber-panel/70 p-6"
              >
                {index % 2 === 0 ? (
                  <BookMarked className="mb-6 text-neon-green" size={30} strokeWidth={1.7} />
                ) : (
                  <Presentation className="mb-6 text-neon-cyan" size={30} strokeWidth={1.7} />
                )}
                <h3 className="mb-3 text-xl font-bold text-text-primary">{area}</h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  Faculty mentoring and project-based learning help students connect theory with
                  real-world security needs.
                </p>
              </div>
            ))}

            <div
              data-stagger-item
              className="rounded-2xl border border-neon-green/20 bg-neon-green/5 p-6 md:col-span-2"
            >
              <Award className="mb-6 text-neon-green" size={30} strokeWidth={1.7} />
              <h3 className="mb-3 text-xl font-bold text-text-primary">Student Projects</h3>
              <p className="text-sm leading-relaxed text-text-muted">
                Project details, publications, and student showcases will be updated as department
                work is reviewed and approved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionAtmosphere>
  );
}

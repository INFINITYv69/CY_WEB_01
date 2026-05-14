"use client";

import { Award, BookMarked, ExternalLink, Mail, Phone, Presentation, ShieldCheck } from "lucide-react";

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
    <section id="dqac" className="py-24 px-6 lg:px-24 bg-purple-900/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12 lg:grid-cols-[1fr_420px] lg:items-center">
        <div className="flex-1">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-neon-green">Quality Assurance</p>
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 text-neon-cyan tracking-widest">DQAC</h2>
          <p className="font-share-tech text-text-muted mb-8 leading-relaxed md:text-xl">
            The Departmental Quality Assurance Cell (DQAC) ensures the highest standards of education and research within the department. Led by our dedicated coordinator, the cell focuses on continuous improvement and academic excellence.
          </p>
          <div className="grid gap-3">
            {qualityAreas.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-cyber-panel/60 p-4">
                <ShieldCheck className="mt-1 shrink-0 text-neon-cyan" size={18} />
                <p className="text-sm md:text-lg text-text-primary/75">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-full p-8 bg-gradient-to-b from-blue-50 to-sky-100/60 border-2 border-blue-500/20 rounded-3xl relative group flex flex-col justify-center items-center text-center shadow-lg shadow-blue-900/5 hover:shadow-[0_18px_50px_rgba(59,130,246,0.25)] hover:border-blue-500 transition-all duration-300">
          <div className="relative w-40 h-40 rounded-full p-[4px] bg-gradient-to-tr from-blue-800 via-blue-500 to-cyan-400 shadow-[0_0_25px_rgba(59,130,246,0.3)] shrink-0 mb-6 group-hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] transition-all duration-500">
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white bg-white">
              <img src="https://cy-iy.vercel.app/static/pavan_faculty.png" alt="Mr. Pavan Kumar N T" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
            </div>
          </div>
          <h4 className="font-orbitron font-bold text-slate-800 text-xl md:text-2xl mb-2">{/* ... */}Mr. Pavan Kumar N T</h4>
          <p className="text-sky-600 text-sm tracking-widest uppercase font-bold mb-6">DQAC Coordinator</p>
          <div className="space-y-3 text-slate-600 font-mono text-sm">
            <div className="flex items-center justify-center gap-2"><Phone size={16} className="text-sky-500" /> +91 9113283741</div>
            <div className="flex items-center justify-center gap-2"><Mail size={16} className="text-sky-500" /> pavankumaracharya007@gmail.com</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Research() {
  return (
    <section id="research" className="py-24 px-6 lg:px-24 bg-blue-900/10 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-neon-magenta">Research and Projects</p>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-neon-magenta tracking-widest">Research</h2>
          <p className="mt-5 text-lg md:text-2xl leading-relaxed text-text-muted">
            The department encourages student-led projects, research posters, publications, and applied cybersecurity problem solving.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[420px_1fr]">
        <div>
          <div className="h-full p-8 bg-gradient-to-b from-blue-50 to-sky-100/60 border-2 border-blue-500/20 rounded-3xl relative group overflow-hidden shadow-lg shadow-blue-900/5 hover:shadow-[0_18px_50px_rgba(59,130,246,0.25)] hover:border-blue-500 transition-all duration-300">
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="relative w-40 h-40 rounded-full p-[4px] bg-gradient-to-tr from-blue-800 via-blue-500 to-cyan-400 mb-6 shadow-[0_0_25px_rgba(59,130,246,0.3)] shrink-0 group-hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] transition-all duration-500">
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white bg-white">
                  <img src="https://res.cloudinary.com/dkg60zkba/image/upload/v1774188001/faculty/nmr2zfqaftglonhpsiuy.jpg" alt="Dr. Aruna Kumar B T" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
                </div>
              </div>
              <h4 className="font-orbitron font-bold text-slate-800 mb-2 text-xl md:text-2xl">Dr. Aruna Kumar B T</h4>
              <p className="font-share-tech text-sm md:text-lg text-sky-600 mb-6 font-bold uppercase tracking-widest">Research Coordinator</p>
              <div className="space-y-2 font-mono text-[10px] md:text-sm text-slate-600">
                <p>Tel: +91 98765 43210</p>
                <p>Email: hod.iycy@gmu.ac.in</p>
                <p className="mt-4 pt-4 border-t border-slate-100">Focus: Advancing knowledge in cybersecurity</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="grid gap-5 md:grid-cols-2">
            {researchAreas.map((area, index) => (
              <div key={area} className="rounded-2xl border border-white/10 bg-cyber-panel/70 p-6">
                {index % 2 === 0 ? (
                  <BookMarked className="mb-6 text-neon-green" size={30} strokeWidth={1.7} />
                ) : (
                  <Presentation className="mb-6 text-neon-cyan" size={30} strokeWidth={1.7} />
                )}
                <h3 className="mb-3 text-xl font-bold text-text-primary">{area}</h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  Faculty mentoring and project-based learning help students connect theory with real-world security needs.
                </p>
              </div>
            ))}

            <div className="rounded-2xl border border-neon-green/20 bg-neon-green/5 p-6 md:col-span-2">
              <Award className="mb-6 text-neon-green" size={30} strokeWidth={1.7} />
              <h3 className="mb-3 text-xl font-bold text-text-primary">Student Projects</h3>
              <p className="text-sm leading-relaxed text-text-muted">
                Project details, publications, and student showcases will be updated as department work is reviewed and approved.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

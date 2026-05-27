"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink, GraduationCap, QrCode } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/ui/scroll/SectionHeading";
import SectionAtmosphere from "@/components/ui/scroll/SectionAtmosphere";

export default function Admissions() {
  return (
    <SectionAtmosphere id="admissions" className="bg-cyber-dark/20 py-24 px-6 lg:px-24" variant="cyan">
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <SectionHeading className="[&_.scroll-title-inner]:text-neon-cyan">
          <span className="flex items-center justify-center gap-4">
            <GraduationCap size={56} className="text-neon-cyan" />
            Admissions
          </span>
        </SectionHeading>

        <div className="grid w-full max-w-6xl grid-cols-1 gap-10 lg:grid-cols-3" data-stagger>
          {/* Coordinator Card */}
          <div data-stagger-item data-scroll-tilt className="group relative flex flex-col justify-center overflow-hidden rounded-3xl border-2 border-amber-200/60 bg-gradient-to-b from-yellow-50 to-amber-100/50 p-8 shadow-lg shadow-amber-900/5 transition-all duration-300 hover:border-amber-400 hover:shadow-[0_18px_50px_rgba(251,191,36,0.2)]">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8 text-center md:text-left">
              <div className="relative w-40 h-40 rounded-full p-[4px] bg-gradient-to-tr from-blue-800 via-blue-500 to-cyan-400 shadow-[0_0_25px_rgba(59,130,246,0.3)] shrink-0 group-hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] transition-all duration-500">
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white bg-white">
                  <img src="https://cy-iy.vercel.app/static/pavan_faculty.png" alt="Mr. Pavan Kumar N T" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
                </div>
              </div>
              <div>
                <h4 className="font-orbitron font-bold text-slate-800 text-xl mb-1">Mr. Pavan Kumar N T</h4>
                <p className="text-xs font-bold font-mono text-sky-600 uppercase tracking-widest">Admission Coordinator</p>
                <p className="text-xs font-mono text-slate-500 mt-0.5">Faculty Member, GM University</p>
              </div>
            </div>
            
            <div className="space-y-4 font-mono text-sm md:text-base text-slate-600 flex flex-col items-center md:items-start pt-4 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-sky-500" />
                <span>+91 9113283741</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-sky-500" />
                <span>pavankumaracharya007@gmail.com</span>
              </div>
            </div>
          </div>

          {/* QR Code Card */}
          <div data-stagger-item data-scroll-tilt className="group flex flex-col items-center justify-center rounded-3xl border-2 border-amber-200/60 bg-gradient-to-b from-yellow-50 to-amber-100/50 p-8 text-center shadow-lg shadow-amber-900/5 transition-all duration-300 hover:border-amber-400 hover:shadow-[0_18px_50px_rgba(251,191,36,0.2)]">
            <QrCode size={28} className="text-sky-600 mb-3" />
            <p className="text-xs font-bold font-mono text-sky-600 uppercase tracking-widest mb-4">Scan for Admission Query</p>
            <div className="relative w-44 h-44 rounded-2xl overflow-hidden border-4 border-white shadow-lg group-hover:shadow-[0_0_25px_rgba(14,165,233,0.3)] transition-all duration-500">
              <Image
                src="/cyberweb/qr_admission.png"
                alt="Admission Query QR Code"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs text-slate-500 mt-3 font-mono">Scan with your camera</p>
          </div>

          {/* Admission Link Call to Action */}
          <div data-stagger-item data-scroll-tilt className="group relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-neon-cyan/30 bg-cyber-panel p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-text-primary mb-6">
              Ready to Join Us?
            </h3>
            <p className="text-text-muted mb-10 leading-relaxed max-w-md">
              Start your journey in Cybersecurity. Access the official admission portal to begin your application process.
            </p>
            <motion.a
              href="https://gmu.ac.in/admission-card/branch/cs.html"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-neon-cyan text-cyber-black font-bold uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(2,132,199,0.3)] hover:shadow-[0_0_30px_rgba(2,132,199,0.5)] hover:bg-white transition-all duration-300"
            >
              <span>Apply Now</span>
              <ExternalLink size={20} />
            </motion.a>

            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
              style={{ backgroundImage: "radial-gradient(circle, #0284c7 1px, transparent 1px)", backgroundSize: "20px 20px" }}
            />
          </div>
        </div>
      </div>
    </SectionAtmosphere>
  );
}

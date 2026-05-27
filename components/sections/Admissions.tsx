"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink, GraduationCap, QrCode } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/ui/scroll/SectionHeading";
import SectionAtmosphere from "@/components/ui/scroll/SectionAtmosphere";

const cardMotion = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Admissions() {
  return (
    <SectionAtmosphere id="admissions" className="bg-cyber-dark/20 py-24 px-6 lg:px-24" variant="cyan">
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center">
        <SectionHeading animated={false} className="text-neon-cyan">
          <span className="flex items-center justify-center gap-4">
            <GraduationCap size={56} className="text-neon-cyan" />
            Admissions
          </span>
        </SectionHeading>

        <div className="grid w-full max-w-6xl grid-cols-1 gap-10 lg:grid-cols-3">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardMotion}
            className="group relative flex flex-col justify-center overflow-hidden rounded-3xl border-2 border-amber-200/60 bg-gradient-to-b from-yellow-50 to-amber-100/50 p-8 shadow-lg shadow-amber-900/5 transition-all duration-300 hover:border-amber-400 hover:shadow-[0_18px_50px_rgba(251,191,36,0.2)]"
          >
            <div className="mb-8 flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
              <div className="relative h-40 w-40 shrink-0 rounded-full bg-gradient-to-tr from-blue-800 via-blue-500 to-cyan-400 p-[4px] shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-500 group-hover:shadow-[0_0_35px_rgba(59,130,246,0.5)]">
                <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white bg-white">
                  <img
                    src="https://cy-iy.vercel.app/static/pavan_faculty.png"
                    alt="Mr. Pavan Kumar N T"
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
                  />
                </div>
              </div>
              <div>
                <h4 className="mb-1 font-orbitron text-xl font-bold text-slate-800">Mr. Pavan Kumar N T</h4>
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-sky-600">
                  Admission Coordinator
                </p>
                <p className="mt-0.5 font-mono text-xs text-slate-500">Faculty Member, GM University</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 border-t border-slate-100 pt-4 font-mono text-sm text-slate-600 md:items-start md:text-base">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-sky-500" />
                <span>+91 9113283741</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-sky-500" />
                <span>pavankumaracharya007@gmail.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardMotion}
            className="group flex flex-col items-center justify-center rounded-3xl border-2 border-amber-200/60 bg-gradient-to-b from-yellow-50 to-amber-100/50 p-8 text-center shadow-lg shadow-amber-900/5 transition-all duration-300 hover:border-amber-400 hover:shadow-[0_18px_50px_rgba(251,191,36,0.2)]"
          >
            <QrCode size={28} className="mb-3 text-sky-600" />
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-sky-600">
              Scan for Admission Query
            </p>
            <div className="relative h-44 w-44 overflow-hidden rounded-2xl border-4 border-white shadow-lg transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(14,165,233,0.3)]">
              <Image
                src="/cyberweb/qr_admission.png"
                alt="Admission Query QR Code"
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-3 font-mono text-xs text-slate-500">Scan with your camera</p>
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardMotion}
            className="group relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-neon-cyan/30 bg-cyber-panel p-12 text-center"
          >
            <h3 className="mb-6 font-orbitron text-2xl font-bold text-text-primary md:text-3xl">
              Ready to Join Us?
            </h3>
            <p className="mb-10 max-w-md leading-relaxed text-text-muted">
              Start your journey in Cybersecurity. Access the official admission portal to begin your
              application process.
            </p>
            <motion.a
              href="https://gmu.ac.in/admission-card/branch/cs.html"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 flex items-center gap-3 rounded-full bg-neon-cyan px-8 py-4 font-bold uppercase tracking-widest text-cyber-black shadow-[0_0_20px_rgba(2,132,199,0.3)] transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(2,132,199,0.5)]"
            >
              <span>Apply Now</span>
              <ExternalLink size={20} />
            </motion.a>

            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: "radial-gradient(circle, #0284c7 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
          </motion.div>
        </div>
      </div>
    </SectionAtmosphere>
  );
}

"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink } from "lucide-react";

export default function Admissions() {
  return (
    <section id="admissions" className="py-24 px-6 lg:px-24 bg-cyber-dark/20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-16 text-center">
          <span className="text-neon-cyan">Admissions</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-5xl">
          {/* Coordinator Card */}
          <div className="p-8 bg-gradient-to-b from-blue-50 to-sky-100/60 border-2 border-blue-500/20 rounded-3xl relative overflow-hidden group flex flex-col justify-center shadow-lg shadow-blue-900/5 hover:shadow-[0_18px_50px_rgba(59,130,246,0.25)] hover:border-blue-500 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8 text-center md:text-left">
              <div className="relative w-40 h-40 rounded-full p-[4px] bg-gradient-to-tr from-blue-800 via-blue-500 to-cyan-400 shadow-[0_0_25px_rgba(59,130,246,0.3)] shrink-0 group-hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] transition-all duration-500">
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white bg-white">
                  <img src="https://cy-iy.vercel.app/static/pavan_faculty.png" alt="Mr. Pavan Kumar N T" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
                </div>
              </div>
              <div>
                <h4 className="font-orbitron font-bold text-slate-800 text-xl mb-1">Mr. Pavan Kumar N T</h4>
                <p className="text-xs font-bold font-mono text-sky-600 uppercase tracking-widest">Admission Coordinator</p>
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

          {/* Admission Link Call to Action */}
          <div className="flex flex-col justify-center items-center p-12 bg-cyber-panel border border-neon-cyan/30 rounded-3xl text-center relative overflow-hidden group">
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
    </section>
  );
}

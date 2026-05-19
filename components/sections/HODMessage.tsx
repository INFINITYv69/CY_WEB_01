"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Terminal as TerminalIcon, MessageSquare, Play, Video } from "lucide-react";

export default function HODMessage() {
  return (
    <section id="hod-message" className="relative py-24 px-6 lg:px-16 bg-cyber-black overflow-hidden">
      {/* Abstract futuristic background decorations */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.03)_0%,transparent_100%)]" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-neon-cyan/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1.8fr_1.2fr] gap-12 lg:gap-16 items-start relative z-10">

        {/* Left Column: HOD Message Container */}
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10">

          {/* HOD Photo & Metadata */}
          <div className="relative flex flex-col items-center flex-shrink-0">
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-dashed border-neon-cyan/40 rounded-full"
              />

              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-[0_10px_30px_rgba(2,132,199,0.15)] bg-slate-50">
                <Image
                  src="https://cy-iy.vercel.app/static/arun_bt.jpeg"
                  alt="Dr. Aruna Kumar B T"
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                  sizes="(max-w-768px) 192px, 224px"
                />

                {/* Holographic Scan Effect */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                  <div className="absolute top-[-100%] left-0 w-full h-4 bg-neon-cyan/30 shadow-[0_0_15px_#0284c7] animate-hologram-scan" />
                </div>
              </div>
            </div>

            {/* Signature & Info Block directly under the photo */}
            <div className="text-center mt-6">
              <h4 className="font-orbitron font-bold text-slate-800 text-xl md:text-2xl">Dr. Aruna Kumar B T</h4>
              <p className="text-sm md:text-base text-sky-600 font-bold uppercase tracking-wider mt-1.5">Associate Professor &amp; HOD</p>
              <p className="text-base md:text-lg text-slate-500 font-semibold tracking-wide mt-2">Dept. of CY &amp; IY</p>
            </div>
          </div>

          {/* HOD Text Content */}
          <div className="flex-1 min-w-0">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 text-slate-800 flex items-center gap-3 justify-center md:justify-start">
              <MessageSquare size={32} className="text-sky-600 shrink-0" />
              <span>Message from <span className="text-sky-600">HOD</span></span>
            </h2>

            <div className="space-y-4 font-share-tech text-slate-600 leading-relaxed text-sm md:text-base text-justify">
              <p>
                Welcome to the Department of Cyber Security &amp; Information Security. Our mission is to provide excellence in education, research, and innovation in cybersecurity. We are committed to nurturing the next generation of cybersecurity professionals who will protect and secure our digital future.
              </p>
              <p>
                Dear Students and Aspirants, It gives me great pleasure to welcome you to the Undergraduate Program in Cybersecurity and Information Security. In today&apos;s digital era, information is the most valuable asset, and securing it has become a global priority. From critical infrastructure and financial systems to personal data and national defense, the demand for skilled cybersecurity professionals is growing at an unprecedented rate.
              </p>
              <p>
                Our program is designed to blend strong engineering foundations with specialized knowledge in cyber defense, cryptography, digital forensics, ethical hacking, and security management. With a curriculum that is both industry-oriented and research-driven, we aim to prepare graduates who can face real-world security challenges with confidence and innovation.
              </p>
              <p>
                At GM University, we emphasize not only technical expertise but also ethical responsibility, problem-solving skills, and lifelong learning — qualities that are essential for cybersecurity professionals in a rapidly changing technological landscape. Students will benefit from state-of-the-art laboratories, hands-on projects, collaborations with industry, and opportunities to engage in internships and certifications aligned with global standards.
              </p>
              <p>
                We envision our graduates as leaders, innovators, and protectors of the digital world, contributing to a safer cyberspace for individuals, businesses, and nations. Let us build a secure digital future together.
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Campus Video Container */}
        <div className="w-full h-full lg:sticky lg:top-28">
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 flex flex-col h-full relative overflow-hidden group">

            {/* Header info */}
            <div className="mb-6">
              <span className="text-xs font-bold font-mono text-sky-600 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
                Featured Broadcast
              </span>
              <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-slate-800 mt-2 flex items-center gap-3">
                <Video size={28} className="text-sky-600 shrink-0" />
                <span>Campus <span className="text-sky-600">Video</span></span>
              </h3>
              <p className="text-slate-500 text-xs md:text-sm mt-2 leading-relaxed font-share-tech">
                Take an immersive look at our advanced labs, smart campus, student life, and next-generation innovation infrastructure at GM University.
              </p>
            </div>

            {/* Video Placeholder Box with Futuristic Cyber Aesthetic */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 flex flex-col items-center justify-center cursor-pointer shadow-[0_8px_20px_rgba(0,0,0,0.08)] group/video hover:shadow-[0_12px_30px_rgba(2,132,199,0.15)] hover:border-sky-500/50 transition-all duration-500 flex-grow min-h-[220px]">

              {/* Futuristic grids & scanner sweeping in background */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-grid" />

              {/* Scanline overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(rgba(18,24,38,0.35)_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px]" />

              {/* Cyber decoration lines */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-sky-500/60 rounded-tl" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-sky-500/60 rounded-tr" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-sky-500/60 rounded-bl" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-sky-500/60 rounded-br" />

              {/* Hologram sweep animation on container */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-100%] left-0 w-full h-8 bg-sky-500/10 shadow-[0_0_20px_rgba(2,132,199,0.2)] animate-hologram-scan" />
              </div>

              {/* Pulsing Play Button */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-sky-600/90 text-white flex items-center justify-center shadow-[0_0_20px_rgba(2,132,199,0.4)] group-hover/video:bg-sky-500 group-hover/video:scale-110 group-hover/video:shadow-[0_0_30px_rgba(2,132,199,0.6)] transition-all duration-300">
                  <Play size={28} className="fill-current ml-1" />
                </div>
                <div className="text-center">
                  <p className="text-white font-orbitron font-bold text-xs uppercase tracking-widest group-hover/video:text-sky-400 transition-colors">Play Campus Stream</p>
                  <p className="text-slate-400 font-mono text-[10px] mt-0.5">Media Source: COMING SOON</p>
                </div>
              </div>

              {/* Corner tech indicators */}
              <div className="absolute bottom-3 left-4 font-mono text-[9px] text-slate-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                SYS_ONLINE
              </div>
              <div className="absolute bottom-3 right-4 font-mono text-[9px] text-slate-500">
                1080P // STREAM
              </div>
            </div>

            {/* Additional info footer inside card */}
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>GMU DIGITAL LIFE</span>
              <span>EST. 2023</span>
            </div>

          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes hologram-scan {
          0% { top: -20%; }
          100% { top: 120%; }
        }
        .animate-hologram-scan {
          animation: hologram-scan 4s linear infinite;
        }
        .bg-grid {
          background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
}

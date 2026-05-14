"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { faculty } from "@/lib/siteData";

export default function Faculty() {
  return (
    <section id="faculty" className="relative overflow-hidden bg-cyber-dark/25 px-6 py-24 lg:px-24">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(0,245,255,0.04),transparent_35%,rgba(255,0,255,0.035))]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-neon-green">Department Team</p>
          <h2 className="text-4xl font-bold md:text-6xl">
            <span className="text-neon-cyan">Faculty</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {faculty.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.04, duration: 0.35 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-cyber-panel/85 transition-all duration-300 hover:-translate-y-2 hover:border-neon-cyan/50 hover:shadow-[0_18px_50px_rgba(0,245,255,0.15)] flex flex-col items-center text-center pb-6"
            >
              <div className="relative w-40 h-40 mt-8 mb-4 overflow-hidden rounded-full border-2 border-neon-cyan/30 bg-cyber-black shadow-[0_0_15px_rgba(0,245,255,0.1)]">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="160px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={index < 4}
                />
              </div>

              <div className="px-5 flex flex-col flex-1 items-center justify-between w-full">
                <div>
                  <h3 className="text-xl font-bold leading-snug text-text-primary mb-1">{member.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neon-cyan/85">
                    {member.role}
                  </p>
                </div>
                {member.cv && (
                  <a 
                    href={member.cv} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-6 px-5 py-2 text-[10px] font-bold text-cyber-black uppercase tracking-widest bg-neon-cyan rounded-full hover:bg-white hover:shadow-[0_0_15px_#00f5ff] transition-all cursor-pointer"
                  >
                    View Profile
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

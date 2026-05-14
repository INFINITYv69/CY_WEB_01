"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, ExternalLink } from "lucide-react";
import { faculty } from "@/lib/siteData";

export default function Faculty() {
  return (
    <section id="faculty" className="relative overflow-hidden bg-slate-50 px-6 py-24 lg:px-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.05)_0%,transparent_100%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">Department Team</p>
          <h2 className="text-4xl font-bold md:text-6xl text-slate-800 flex items-center gap-4">
            <Users size={48} className="text-sky-600" />
            Faculty <span className="text-sky-600">Directory</span>
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
              className="group overflow-hidden rounded-3xl border-2 border-amber-200/60 bg-gradient-to-b from-yellow-50 to-amber-100/50 transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_18px_50px_rgba(251,191,36,0.2)] flex flex-col items-center text-center pb-6 shadow-lg shadow-amber-900/5"
            >
              <div className="relative w-40 h-40 mt-8 mb-4 shrink-0 rounded-full p-[4px] bg-gradient-to-tr from-blue-800 via-blue-500 to-cyan-400 shadow-[0_0_25px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] transition-all duration-500">
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white bg-white">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="160px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority={index < 4}
                  />
                </div>
              </div>

              <div className="px-5 flex flex-col flex-1 items-center justify-between w-full">
                <div>
                  <h3 className="text-xl font-bold leading-snug text-slate-800 mb-1">{member.name}</h3>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-600">
                    {member.role}
                  </p>
                </div>
                {member.cv && (
                  <a 
                    href={member.cv} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-6 px-6 py-2.5 text-[11px] font-bold text-white uppercase tracking-widest bg-sky-500 rounded-full hover:bg-sky-600 hover:shadow-[0_8px_20px_rgba(14,165,233,0.3)] transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>View Profile</span>
                    <ExternalLink size={14} />
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

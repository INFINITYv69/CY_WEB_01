"use client";

import { motion } from "framer-motion";
import { FileText, Users } from "lucide-react";

const internalMembers = [
  { name: "Dr. S R Shankapal", role: "Vice Chancellor", image: "/cyberweb/shankpal.jpg" },
  { name: "Dr. Venu Gopala Rao", role: "Pro Vice Chancellor", image: "/cyberweb/Venu Gopala Rao.jpg" },
  { name: "Dr. Sanjay Pandey", role: "Director", image: "/cyberweb/sanjay pandey.jpg" },
  { name: "Dr. Aruna Kumar B T", role: "HOD", image: "https://res.cloudinary.com/dkg60zkba/image/upload/v1774188001/faculty/nmr2zfqaftglonhpsiuy.jpg" },
];

const externalMembers = [
  { name: "Dr. Shreedhar", role: "External Member", image: "/cyberweb/shreedhar.jpg" },
  { name: "Dr. B.N. Veerappa", role: "External Member", image: "/cyberweb/bn veerappa.jpg" },
];

function MemberCard({ member, delay }: { member: any, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
      className="p-6 bg-gradient-to-b from-yellow-50 to-amber-100/50 border-2 border-amber-200/60 rounded-3xl relative overflow-hidden group shadow-lg shadow-amber-900/5 hover:shadow-[0_18px_50px_rgba(251,191,36,0.2)] hover:border-amber-400 transition-all duration-300 flex flex-col items-center text-center"
    >
      <div className="relative w-32 h-32 rounded-full p-[4px] bg-gradient-to-tr from-blue-800 via-blue-500 to-cyan-400 shadow-[0_0_25px_rgba(59,130,246,0.3)] shrink-0 mb-4 group-hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] transition-all duration-500">
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white bg-white">
          <img src={member.image} alt={member.name} className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
        </div>
      </div>
      <h4 className="font-orbitron font-bold text-slate-800 text-lg mb-1">{member.name}</h4>
      <p className="text-sm font-bold text-sky-600 tracking-wider uppercase">{member.role}</p>
    </motion.div>
  );
}

export default function BoardOfStudies() {
  return (
    <section id="board-of-studies" className="py-24 px-6 lg:px-24 bg-slate-50 overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">Academic Governance</p>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-slate-800 flex items-center justify-center gap-4">
            <Users size={48} className="text-sky-600" />
            Board of <span className="text-sky-600">Studies</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600 max-w-3xl mx-auto">
            The Board of Studies guides curriculum relevance, academic quality, and industry alignment for the department. Access the details and decisions of our most recent BOS meeting below.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold font-orbitron text-slate-800 mb-8 border-b border-slate-200 pb-4 text-center md:text-left">Internal Members</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {internalMembers.map((member, idx) => (
              <MemberCard key={member.name} member={member} delay={idx * 0.1} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold font-orbitron text-slate-800 mb-8 border-b border-slate-200 pb-4 text-center md:text-left">External Members</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
            {externalMembers.map((member, idx) => (
              <MemberCard key={member.name} member={member} delay={idx * 0.1} />
            ))}
          </div>
        </div>

        <div className="text-center">
          <motion.a
            href="/cyberweb/bos.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-sky-500 text-white font-bold uppercase tracking-widest rounded-full shadow-[0_8px_20px_rgba(14,165,233,0.3)] hover:shadow-[0_15px_30px_rgba(14,165,233,0.5)] hover:bg-sky-600 transition-all duration-300"
          >
            <FileText size={24} />
            <span>View BOS Meeting PDF</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

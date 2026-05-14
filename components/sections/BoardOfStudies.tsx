"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function BoardOfStudies() {
  return (
    <section id="board-of-studies" className="py-24 px-6 lg:px-24 bg-cyber-dark/40 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-neon-green">Academic Governance</p>
        <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-8">
          <span className="text-neon-cyan">Board of Studies</span>
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-text-muted mb-12">
          The Board of Studies guides curriculum relevance, academic quality, and industry alignment for the department. Access the details and decisions of our most recent BOS meeting below.
        </p>

        <motion.a
          href="/BOS_Meeting.pdf"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-neon-cyan text-cyber-black font-bold uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(0,245,255,0.4)] hover:shadow-[0_0_30px_rgba(0,245,255,0.6)] hover:bg-white hover:text-neon-cyan transition-all duration-300"
        >
          <FileText size={24} />
          <span>View BOS Meeting PDF</span>
        </motion.a>
      </div>
    </section>
  );
}

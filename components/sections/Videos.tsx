"use client";

import { motion } from "framer-motion";
import { Play, Video } from "lucide-react";

export default function Videos() {
  return (
    <section id="videos" className="py-24 px-6 lg:px-24 bg-cyber-dark/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-text-muted mb-3">Department Media</p>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-text-primary flex items-center justify-center gap-4">
            <Video size={40} className="text-neon-cyan" />
            <span>Featured <span className="text-neon-cyan">Videos</span></span>
          </h2>
          <p className="mt-5 text-lg text-text-muted max-w-2xl mx-auto">
            Explore our department highlights, events, and student achievements through our curated video collection.
          </p>
        </div>

        {/* Placeholder grid — videos will be added later */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-video bg-cyber-panel/60 border border-neon-cyan/20 rounded-2xl overflow-hidden flex items-center justify-center hover:border-neon-cyan/50 hover:shadow-[0_0_30px_rgba(0,245,255,0.1)] transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "20px 20px" }}
              />
              <div className="flex flex-col items-center gap-3 text-text-muted group-hover:text-neon-cyan transition-colors duration-300">
                <Play size={40} className="opacity-40 group-hover:opacity-80 transition-opacity" />
                <span className="text-xs font-mono uppercase tracking-widest opacity-60">Coming Soon</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

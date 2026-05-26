"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Video, X, Film } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  src?: string;
  isPlaceholder?: boolean;
}

const featuredVideos: VideoItem[] = [
  {
    id: "hod-featured-video",
    title: "Dr. Aruna Kumar B T",
    description: "Insights and featured presentation by the Head of Department, Dr. Aruna Kumar B T.",
    src: "/cyberweb/hod%20featured%20video.mp4",
  },
  {
    id: "placeholder-1",
    title: "Upcoming Lecture Highlights",
    description: "Highlights and coverage from our upcoming technical lectures, guest presentations, and classroom discussions.",
    isPlaceholder: true,
  },
  {
    id: "placeholder-2",
    title: "Classroom Session Archive",
    description: "A digital archive of past classroom sessions, lab walkthroughs, and practical guides.",
    isPlaceholder: true,
  },
];

export default function Videos() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <section id="videos" className="py-24 px-6 lg:px-24 bg-cyber-dark/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-text-muted mb-3">Department Lectures</p>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-text-primary flex items-center justify-center gap-4">
            <Video size={40} className="text-neon-cyan" />
            <span>Classroom Lecture <span className="text-neon-cyan">Videos</span></span>
          </h2>
          <p className="mt-5 text-lg text-text-muted max-w-2xl mx-auto font-share-tech">
            Explore our classroom sessions, lab streams, and educational resources through our curated video collection.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => !video.isPlaceholder && setActiveVideo(video)}
              className={`group relative aspect-video bg-cyber-panel/60 border ${
                video.isPlaceholder
                  ? "border-slate-200/50 opacity-70"
                  : "border-neon-cyan/20 cursor-pointer hover:border-neon-cyan/50 hover:shadow-[0_0_30px_rgba(2,132,199,0.1)]"
              } rounded-2xl overflow-hidden flex flex-col justify-end p-6 transition-all duration-500`}
            >
              {/* Background preview / grid pattern */}
              {!video.isPlaceholder && video.src ? (
                <div className="absolute inset-0 z-0 overflow-hidden">
                  {/* Subtle video background looping silently */}
                  <video
                    src={video.src}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
                </div>
              ) : (
                <div
                  className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
              )}

              {/* Action Overlay/Indicators */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                {video.isPlaceholder ? (
                  <div className="flex flex-col items-center gap-2 text-text-muted opacity-40 group-hover:opacity-60 transition-opacity">
                    <Film size={36} />
                    <span className="text-[10px] font-mono uppercase tracking-widest">Coming Soon</span>
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan flex items-center justify-center group-hover:bg-neon-cyan group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(2,132,199,0.3)] transition-all duration-300">
                    <Play size={24} className="fill-current ml-1" />
                  </div>
                )}
              </div>

              {/* Title & Info */}
              <div className="relative z-20 flex flex-col gap-1.5 mt-auto select-none">
                <span className={`text-[10px] font-mono uppercase tracking-widest ${video.isPlaceholder ? "text-text-muted" : "text-neon-cyan"}`}>
                  {video.isPlaceholder ? "Incoming Stream" : "Play Broadcast"}
                </span>
                <h3 className="font-orbitron text-lg font-bold text-text-primary group-hover:text-neon-cyan transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-xs text-text-muted font-share-tech line-clamp-2">
                  {video.description}
                </p>
              </div>

              {/* Cyber borders for active video */}
              {!video.isPlaceholder && (
                <>
                  <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-neon-cyan/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-neon-cyan/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-neon-cyan/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-neon-cyan/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-800/80 bg-slate-950/40">
                <div>
                  <h3 className="font-orbitron text-xl font-bold text-white flex items-center gap-3">
                    <Video className="text-neon-cyan" size={24} />
                    {activeVideo.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-share-tech">
                    {activeVideo.description}
                  </p>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Video Player */}
              <div className="aspect-video w-full bg-black relative flex items-center justify-center">
                {activeVideo.src ? (
                  <video
                    src={activeVideo.src}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <p className="text-slate-500 font-mono text-sm">No source video available</p>
                )}
              </div>

              {/* Modal Tech Footer */}
              <div className="px-6 py-4 bg-slate-950/40 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>CHANNEL // SECURE_MEDIA_PLAYER</span>
                <span>STATUS // STREAMING_24FPS</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

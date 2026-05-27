"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  ClipboardList,
  FileText,
  GraduationCap,
  LibraryBig,
  Medal,
  Microscope,
  ShieldCheck,
  Users,
  Sparkles,
  Trophy,
  Building2,
  FileDown,
  BookOpenCheck,
  FolderDown,
  Layers,
  ChevronDown,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// Updated Quick Access links
const quickLinks = [
  {
    title: "NCC",
    desc: "National Cadet Corps unit encouraging discipline, leadership, and adventure activities.",
    image: "/cyberweb/NCC (1).jpeg",
    icon: ShieldCheck,
  },
  {
    title: "MALLIKA (CULTURAL)",
    desc: "Cultural forum promoting artistic expression, annual festivals, music, and dance.",
    image: "/cyberweb/cultural1.jpeg",
    icon: Sparkles,
  },
  {
    title: "SPORTS",
    desc: "Sports achievements, physical training, tournaments, and athletic excellence.",
    image: "/cyberweb/sports1.jpeg",
    icon: Trophy,
  },
  {
    title: "INFRASTRUCTURE",
    desc: "State-of-the-art cyber defense labs, smart classrooms, and research facilities.",
    image: "/cyberweb/infrastructure.jpg",
    icon: Building2,
  },
  {
    title: "ACADEMIC SCHEDULES & UPDATES",
    desc: "Latest academic calendars, assessment schedules, exams, and university circulars.",
    href: "https://gmu.ac.in/academics_assessment",
    icon: CalendarDays,
    isExternal: true,
  }
];

const galleryImages: Record<string, string[]> = {
  "NCC": [
    "/cyberweb/NCC (1).jpeg",
    "/cyberweb/NCC (4).jpeg",
    "/cyberweb/NCC (5).jpeg",
    "/cyberweb/NCC (6).jpeg",
    "/cyberweb/NCC (7).jpeg",
    "/cyberweb/NCC (8).jpeg",
    "/cyberweb/NCC (9).jpeg",
    "/cyberweb/NCC (10).jpeg",
    "/cyberweb/NCC (11).jpeg",
    "/cyberweb/NCC (12).jpeg",
    "/cyberweb/NCC (13).jpeg",
    "/cyberweb/NCC (14).jpeg",
    "/cyberweb/NCC (15).jpeg",
    "/cyberweb/NCC (16).jpeg",
    "/cyberweb/NCC (17).jpeg",
    "/cyberweb/NCC (18).jpeg",
  ],
  "MALLIKA (CULTURAL)": [
    "/cyberweb/cultural1.jpeg",
    "/cyberweb/cultural2.png",
  ],
  "SPORTS": [
    "/cyberweb/sports1.jpeg",
    "/cyberweb/sports2.jpeg",
    "/cyberweb/sports3.jpeg",
    "/cyberweb/sports4.jpeg",
    "/cyberweb/sports5.jpeg",
  ],
  "INFRASTRUCTURE": [
    "/cyberweb/infrastructure.jpg",
  ],
};

const studentCorner = [
  "Hackathon preparation and team mentoring",
  "Peer learning groups for labs and projects",
  "Workshops on GitHub, LinkedIn, and career readiness",
  "Student project support and showcase opportunities",
];

const resourcesList = [
  { title: "GMU LEAP", desc: "Learning, Engagement, and Progress tracking portal for academic excellence.", href: "https://leap.gmu.ac.in/", icon: GraduationCap },
  { title: "Study Materials", desc: "Access semester-wise notes, syllabus structures, and resources.", isStudyMaterials: true, icon: BookOpenCheck },
  { title: "Digital Library", desc: "Reference material, journals, and academic reading support.", icon: LibraryBig },
  { title: "Security Labs", desc: "Hands-on practice for networks, forensics, secure software, and cyber defense.", icon: ShieldCheck },
  { title: "Research Support", desc: "Guidance for posters, publications, project writing, and competitions.", icon: Microscope },
];

export function QuickAccess() {
  const [selectedGallery, setSelectedGallery] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const images = selectedGallery ? galleryImages[selectedGallery] || [] : [];

  const openGallery = (title: string) => {
    if (galleryImages[title]) {
      setSelectedGallery(title);
      setCurrentImageIndex(0);
    }
  };

  const closeGallery = () => {
    setSelectedGallery(null);
  };

  const nextImage = () => {
    if (images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    if (!selectedGallery) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeGallery();
      } else if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedGallery, currentImageIndex, images.length]);

  return (
    <section id="quick-access" className="relative overflow-hidden bg-cyber-black px-6 py-24 lg:px-24">
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(120deg,#00f5ff_0%,transparent_34%),linear-gradient(300deg,#ff00ff_0%,transparent_28%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-neon-green">Department Links</p>
            <h2 className="text-4xl font-bold md:text-6xl">Quick Access</h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-text-muted">
            Explore active groups, facilities, cultural life, and official academic guidelines in the department.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((item, index) => {
            const Icon = item.icon;
            const hasImage = !!item.image;

            if (item.isExternal) {
              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-cyber-panel/80 p-6 transition-all hover:-translate-y-1 hover:border-neon-cyan/70 hover:shadow-[0_20px_60px_rgba(0,245,255,0.12)] cursor-pointer min-h-[220px] flex flex-col justify-between"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-xl border border-neon-cyan/25 bg-neon-cyan/10 text-neon-cyan">
                      <Icon size={22} />
                    </div>
                    <ArrowUpRight size={20} className="text-text-muted transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-neon-cyan" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-text-primary group-hover:text-neon-cyan transition-colors">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-text-muted">{item.desc}</p>
                  </div>
                </motion.a>
              );
            }

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                onClick={() => openGallery(item.title)}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-cyber-panel/80 min-h-[250px] transition-all hover:-translate-y-1 hover:border-neon-cyan/70 hover:shadow-[0_20px_60px_rgba(0,245,255,0.12)] cursor-pointer"
              >
                {/* Background image card */}
                {hasImage && (
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={item.image!}
                      alt={item.title}
                      fill
                      className="object-cover opacity-35 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-45"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-cyber-black/70 to-transparent" />
                  </div>
                )}

                <div className="relative z-10 h-full p-6 flex flex-col justify-between min-h-[250px]">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-xl border border-neon-cyan/25 bg-neon-cyan/10 text-neon-cyan">
                      <Icon size={22} />
                    </div>
                    {galleryImages[item.title] && (
                      <span className="text-xs font-semibold uppercase tracking-wider text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Gallery →
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-text-primary group-hover:text-neon-cyan transition-colors">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-text-primary/70">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Gallery Lightbox Modal */}
      <AnimatePresence>
        {selectedGallery && images.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
            onClick={closeGallery}
          >
            {/* Modal Header */}
            <div 
              className="absolute top-4 left-4 right-4 z-[110] flex items-center justify-between pointer-events-none"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-left bg-cyber-panel/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl">
                <h3 className="text-lg font-bold text-text-primary uppercase tracking-wide">{selectedGallery}</h3>
                <p className="text-xs text-text-muted">
                  Image {currentImageIndex + 1} of {images.length}
                </p>
              </div>

              <button
                onClick={closeGallery}
                className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-cyber-panel/60 backdrop-blur-md text-text-primary hover:bg-white/10 hover:text-neon-cyan transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Interactive Area */}
            <div 
              className="relative flex items-center justify-center w-full max-w-5xl h-[70vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous Button */}
              {images.length > 1 && (
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 z-[110] flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-cyber-panel/60 backdrop-blur-md text-text-primary hover:bg-white/10 hover:text-neon-cyan transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
              )}

              {/* Main Image */}
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="relative max-w-full max-h-full p-2 flex items-center justify-center"
                  >
                    <img
                      src={images[currentImageIndex]}
                      alt={`${selectedGallery} - image ${currentImageIndex + 1}`}
                      className="max-w-full max-h-[68vh] object-contain rounded-lg border border-white/10 shadow-2xl select-none"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Next Button */}
              {images.length > 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 z-[110] flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-cyber-panel/60 backdrop-blur-md text-text-primary hover:bg-white/10 hover:text-neon-cyan transition-all"
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </div>

            {/* Dots navigation / indicator bar */}
            {images.length > 1 && (
              <div 
                className="mt-6 flex flex-wrap justify-center gap-2 max-w-xl bg-cyber-panel/40 backdrop-blur-md border border-white/5 py-2.5 px-4 rounded-full z-[110]"
                onClick={(e) => e.stopPropagation()}
              >
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-2 transition-all rounded-full ${
                      currentImageIndex === idx 
                        ? "w-6 bg-neon-cyan" 
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export function StudentCorner() {
  return (
    <section id="student-corner" className="bg-cyber-dark/35 px-6 py-24 lg:px-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-neon-cyan">Student Support</p>
          <h2 className="mb-6 text-4xl font-bold md:text-6xl">Student Corner</h2>
          <p className="text-lg leading-relaxed text-text-muted">
            A focused space for activities that help students move from classroom learning to practical confidence,
            competitions, teamwork, and professional readiness.
          </p>
        </div>

        <div className="grid gap-4">
          {studentCorner.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-cyber-panel/80 p-5"
            >
              <div className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-neon-green/10 text-neon-green">
                {index + 1}
              </div>
              <p className="text-base leading-relaxed text-text-primary/80">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LearningResources() {
  const [showStudyMaterials, setShowStudyMaterials] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState<number | null>(1);
  const studyMaterialsRef = useRef<HTMLDivElement>(null);

  const semesters = Array.from({ length: 8 }, (_, i) => i + 1);
  const schemes = [
    { name: "2023 Scheme", description: "Curriculum structure for batches joining in 2023.", color: "border-neon-cyan text-neon-cyan bg-neon-cyan/5" },
    { name: "2024 Scheme", description: "Updated security domains curriculum for 2024 batch.", color: "border-neon-magenta text-neon-magenta bg-neon-magenta/5" },
    { name: "2025 Scheme", description: "Enhanced hands-on cyber curriculum for 2025 entry.", color: "border-neon-green text-neon-green bg-neon-green/5" },
    { name: "2026 Scheme", description: "AI & emerging security paradigms integrated scheme.", color: "border-neon-cyan text-neon-cyan bg-neon-cyan/5" },
  ];

  const handleStudyMaterialsClick = () => {
    setShowStudyMaterials(!showStudyMaterials);
    if (!showStudyMaterials) {
      setTimeout(() => {
        studyMaterialsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <section id="learning-resources" className="bg-cyber-black px-6 py-24 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-neon-magenta">Academic Support</p>
          <h2 className="text-4xl font-bold md:text-6xl">Learning Resources</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mb-12">
          {resourcesList.map((item, index) => {
            const Icon = item.icon;
            const isLink = 'href' in item && item.href;
            const isStudy = 'isStudyMaterials' in item && item.isStudyMaterials;

            const cardContent = (
              <>
                <div className="mb-8 flex items-center justify-between">
                  <Icon className="text-neon-magenta" size={34} strokeWidth={1.7} />
                  {isLink && (
                    <ArrowUpRight size={20} className="text-text-muted transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-neon-magenta" />
                  )}
                  {isStudy && (
                    <ChevronDown size={20} className={`text-text-muted transition-transform duration-300 ${showStudyMaterials ? "rotate-180 text-neon-magenta" : ""}`} />
                  )}
                </div>
                <h3 className="mb-4 text-xl font-bold text-text-primary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">{item.desc}</p>
              </>
            );

            if (isStudy) {
              return (
                <motion.button
                  key={item.title}
                  onClick={handleStudyMaterialsClick}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07 }}
                  className={`group text-left block min-h-64 rounded-2xl border p-6 transition-all hover:-translate-y-1 cursor-pointer w-full ${
                    showStudyMaterials
                      ? "border-neon-magenta bg-neon-magenta/5 shadow-[0_0_30px_rgba(255,0,255,0.15)]"
                      : "border-white/10 bg-cyber-panel/80 hover:border-neon-magenta/60 hover:shadow-[0_20px_60px_rgba(79,70,229,0.12)]"
                  }`}
                >
                  {cardContent}
                </motion.button>
              );
            }

            if (isLink) {
              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07 }}
                  className="group block min-h-64 rounded-2xl border border-white/10 bg-cyber-panel/80 p-6 transition-all hover:border-neon-magenta/60 hover:shadow-[0_20px_60px_rgba(79,70,229,0.12)] hover:-translate-y-1 cursor-pointer"
                >
                  {cardContent}
                </motion.a>
              );
            }

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07 }}
                className="min-h-64 rounded-2xl border border-white/10 bg-cyber-panel/80 p-6 transition-all hover:border-neon-magenta/60"
              >
                {cardContent}
              </motion.div>
            );
          })}
        </div>

        {/* Study Materials Panel */}
        <AnimatePresence>
          {showStudyMaterials && (
            <motion.div
              ref={studyMaterialsRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden border border-white/10 bg-cyber-panel/40 backdrop-blur-xl rounded-3xl p-6 lg:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.4)]"
            >
              <div className="flex flex-col gap-8">
                {/* Header */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold tracking-wider text-neon-magenta uppercase font-orbitron">Directory</span>
                  <h3 className="text-3xl font-bold text-text-primary">Study Materials</h3>
                  <p className="text-sm text-text-muted">Select a semester to access documents and schemes.</p>
                </div>

                {/* Semester Selector Grid */}
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 border-b border-white/10 pb-6">
                  {semesters.map((sem) => (
                    <button
                      key={sem}
                      onClick={() => setSelectedSemester(sem)}
                      className={`py-3 px-1 rounded-xl text-sm font-bold font-orbitron transition-all border ${
                        selectedSemester === sem
                          ? "bg-neon-magenta text-white border-neon-magenta shadow-[0_0_15px_rgba(255,0,255,0.3)] scale-[1.03]"
                          : "bg-cyber-black/40 text-text-muted border-white/5 hover:border-neon-magenta/40 hover:text-text-primary"
                      }`}
                    >
                      Sem {sem}
                    </button>
                  ))}
                </div>

                {/* Schemes Display */}
                {selectedSemester && (
                  <motion.div
                    key={selectedSemester}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                  >
                    {schemes.map((scheme, idx) => (
                      <div
                        key={scheme.name}
                        className="flex flex-col justify-between p-5 rounded-2xl border border-white/10 bg-cyber-black/30 min-h-[220px] transition-all hover:border-white/20"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-text-primary font-bold text-lg">{scheme.name}</span>
                          </div>
                          <p className="text-xs text-text-muted leading-relaxed mb-6">{scheme.description}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <button
                            onClick={() => alert(`Accessing Semester ${selectedSemester} - ${scheme.name} syllabus resources.`)}
                            className="flex items-center justify-between px-4 py-2.5 rounded-xl border border-white/10 text-xs font-bold text-text-primary bg-cyber-panel/60 hover:bg-white/5 transition-all w-full cursor-pointer"
                          >
                            <span className="flex items-center gap-2">
                              <FileDown size={14} className="text-neon-magenta" /> Syllabus Structure
                            </span>
                            <ArrowUpRight size={12} className="text-text-muted" />
                          </button>
                          <button
                            onClick={() => alert(`Accessing Semester ${selectedSemester} - ${scheme.name} notes & lecture materials.`)}
                            className="flex items-center justify-between px-4 py-2.5 rounded-xl border border-white/10 text-xs font-bold text-text-primary bg-cyber-panel/60 hover:bg-white/5 transition-all w-full cursor-pointer"
                          >
                            <span className="flex items-center gap-2">
                              <FolderDown size={14} className="text-neon-cyan" /> Lecture Notes
                            </span>
                            <ArrowUpRight size={12} className="text-text-muted" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Menu, X, Mail, Phone, ChevronDown, ExternalLink, 
  GraduationCap, Users, ShieldCheck, ClipboardList, 
  Microscope, Award, BookOpen, LibraryBig, Briefcase, 
  FileText, ArrowRight, Trophy, Image as ImageIcon, 
  Compass, Video, Info, Target 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const primaryLinks = [
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Admissions", href: "#admissions" },
];

const sectionCategories = [
  {
    title: "About & Highlights",
    items: [
      { name: "About Department", href: "#about", desc: "Our history & goals", icon: Info },
      { name: "HOD Message", href: "#hod-message", desc: "Welcome message", icon: Mail },
      { name: "Vision & Mission", href: "#vision", desc: "Core values & future plan", icon: Target },
      { name: "Achievements", href: "#achievements", desc: "Student & faculty wins", icon: Trophy },
      { name: "Department Gallery", href: "#gallery", desc: "Campus life snaps", icon: ImageIcon },
      { name: "University Gallery", href: "#university-gallery", desc: "GM University view", icon: Compass },
    ]
  },
  {
    title: "Academics & Quality",
    items: [
      { name: "Programs Offered", href: "#programs", desc: "UG & PG programs", icon: GraduationCap },
      { name: "Faculty Directory", href: "#faculty", desc: "Meet our educators", icon: Users },
      { name: "Faculty Roles", href: "#faculty-roles", desc: "Positions & duties", icon: ShieldCheck },
      { name: "Board of Studies", href: "#board-of-studies", desc: "BOS members & guidelines", icon: ClipboardList },
      { name: "DQAC Quality", href: "#dqac", desc: "Academic quality standards", icon: Award },
      { name: "Research & Projects", href: "#research", desc: "Publications & domains", icon: Microscope },
    ]
  },
  {
    title: "Support & Placements",
    items: [
      { name: "Placement & Careers", href: "#placements", desc: "Recruiters & track record", icon: Briefcase },
      { name: "Admissions Portal", href: "#admissions", desc: "Fees & coordinator contacts", icon: FileText },
      { name: "Student Corner", href: "#student-corner", desc: "Preparing for success", icon: BookOpen },
      { name: "Learning Resources", href: "#learning-resources", desc: "Labs, library & links", icon: LibraryBig },
      { name: "Quick Access Links", href: "#quick-access", desc: "All department pages", icon: ArrowRight },
      { name: "Video Showcase", href: "#videos", desc: "Introductory videos", icon: Video },
    ]
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#shortcuts-dropdown-container")) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      window.addEventListener("click", handleOutsideClick);
    }
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [isDropdownOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
        scrolled ? "bg-cyber-black/88 backdrop-blur-xl border-b border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.28)] py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="w-full px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-5">
          <div className="relative h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 transition-all duration-300 group-hover:scale-105">
            <Image 
              src="https://cy-iy.vercel.app/static/gmuniversity.png" 
              alt="GM University Logo" 
              fill
              sizes="112px"
              className="object-contain drop-shadow-[0_0_14px_rgba(2,132,199,0.35)]"
            />
          </div>
          <div className="hidden sm:flex flex-col justify-center font-orbitron font-bold leading-tight mt-1">
            <span className="text-neon-cyan text-2xl md:text-3xl lg:text-4xl tracking-wide">GM UNIVERSITY</span>
            <span className="text-xs md:text-sm lg:text-base text-text-muted mt-1">Department of Cyber Security & Information Security</span>
          </div>
        </Link>

        {/* Right Side */}
        <div className="hidden xl:flex flex-col items-end gap-3 mt-2">
          {/* Contact Info */}
          <div className="flex items-center gap-6 text-sm font-share-tech font-bold text-text-muted">
            <a href="mailto:hod.cyiy@gmu.ac.in" className="flex items-center gap-2 hover:text-neon-cyan transition-colors">
              <Mail size={16} /> hod.cyiy@gmu.ac.in
            </a>
            <a href="tel:+919945221208" className="flex items-center gap-2 hover:text-neon-cyan transition-colors">
              <Phone size={16} /> +91 99452 21208
            </a>
          </div>

          {/* Desktop Links */}
          <div className="flex items-center gap-6">
            {primaryLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="relative group pb-1 text-lg font-orbitron font-bold text-text-primary/90 hover:text-neon-cyan transition-colors"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-[3px] bg-neon-cyan -translate-x-1/2 group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            ))}

            {/* Shortcuts Dropdown Container */}
            <div 
              id="shortcuts-dropdown-container"
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1.5 pb-1 text-lg font-orbitron font-bold text-text-primary/90 hover:text-neon-cyan transition-colors cursor-pointer"
              >
                Section Shortcuts
                <ChevronDown size={16} className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute right-0 mt-3 w-[780px] bg-cyber-panel/95 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.18)] rounded-2xl p-6 z-[1100]"
                  >
                    <div className="grid grid-cols-3 gap-6">
                      {sectionCategories.map((category) => (
                        <div key={category.title} className="flex flex-col gap-3 text-left">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-neon-cyan font-orbitron pb-1 border-b border-white/10">
                            {category.title}
                          </h4>
                          <div className="flex flex-col gap-1">
                            {category.items.map((item) => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  onClick={() => setIsDropdownOpen(false)}
                                  className="group flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/85 border border-transparent hover:border-neon-cyan/10 transition-all duration-200"
                                >
                                  <div className="mt-0.5 text-text-muted group-hover:text-neon-cyan transition-colors">
                                    <Icon size={16} />
                                  </div>
                                  <div>
                                    <div className="text-sm font-bold text-text-primary group-hover:text-neon-cyan transition-colors leading-tight">
                                      {item.name}
                                    </div>
                                    <div className="text-[11px] text-text-muted leading-tight mt-0.5 font-sans font-normal">
                                      {item.desc}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* GMU Website Button */}
            <a 
              href="https://gmu.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neon-cyan text-white font-orbitron font-bold text-sm tracking-wider hover:bg-neon-cyan/90 transition-all shadow-[0_0_15px_rgba(2,132,199,0.3)] hover:shadow-[0_0_25px_rgba(2,132,199,0.5)] active:scale-95 cursor-pointer"
            >
              GMU Website
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="xl:hidden text-neon-cyan p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[1001] bg-cyber-black/98 backdrop-blur-xl xl:hidden flex flex-col items-start justify-start py-24 px-6 overflow-y-auto gap-6"
          >
            <button 
              className="absolute top-6 right-6 text-neon-cyan"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} className="animate-pulse" />
            </button>
            
            {/* Primary Links */}
            <div className="w-full flex flex-col gap-4 border-b border-white/10 pb-6 mt-4">
              {primaryLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-orbitron font-bold text-text-primary hover:text-neon-cyan transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Section Shortcuts Accordion */}
            <div className="w-full flex flex-col gap-4 border-b border-white/10 pb-6">
              <h3 className="text-sm font-orbitron font-bold text-text-muted uppercase tracking-wider">
                Section Shortcuts
              </h3>
              
              <div className="flex flex-col gap-3">
                {sectionCategories.map((category) => {
                  const isExpanded = expandedCategory === category.title;
                  return (
                    <div key={category.title} className="w-full flex flex-col gap-2 bg-cyber-panel/40 p-3 rounded-xl border border-white/5">
                      <button
                        onClick={() => setExpandedCategory(isExpanded ? null : category.title)}
                        className="flex items-center justify-between w-full text-lg font-orbitron font-bold text-text-primary hover:text-neon-cyan text-left cursor-pointer"
                      >
                        {category.title}
                        <ChevronDown size={18} className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                      </button>
                      
                      {isExpanded && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 pl-2">
                          {category.items.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => {
                                  setIsOpen(false);
                                  setIsDropdownOpen(false);
                                }}
                                className="flex items-center gap-3 py-2 px-1 text-sm font-orbitron font-bold text-text-muted hover:text-neon-cyan transition-colors"
                              >
                                <Icon size={16} className="text-neon-cyan" />
                                {item.name}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* External Website Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full max-w-xs mt-4"
            >
              <a 
                href="https://gmu.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-neon-cyan text-white font-orbitron font-bold tracking-wider hover:bg-neon-cyan/90 transition-all text-center shadow-[0_0_15px_rgba(2,132,199,0.3)] cursor-pointer"
              >
                GMU Website
                <ExternalLink size={16} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

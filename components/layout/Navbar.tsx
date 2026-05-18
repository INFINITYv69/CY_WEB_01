"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Achievements", href: "#achievements" },
  { name: "Vision", href: "#vision" },
  { name: "Gallery", href: "#gallery" },
  { name: "About", href: "#about" },
  { name: "HOD Message", href: "#hod-message" },
  { name: "Programs", href: "#programs" },
  { name: "Faculty", href: "#faculty" },
  { name: "BOS", href: "#board-of-studies" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="relative group pb-1 text-lg font-orbitron font-bold text-text-primary/90 hover:text-neon-cyan transition-colors"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-[3px] bg-neon-cyan -translate-x-1/2 group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            ))}
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
            className="fixed inset-0 z-[1001] bg-cyber-black/95 backdrop-blur-xl xl:hidden flex flex-col items-center justify-center gap-8"
          >
            <button 
              className="absolute top-6 right-6 text-neon-cyan"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} className="animate-pulse" />
            </button>
            
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-orbitron text-text-primary hover:text-neon-cyan glow-text-cyan transition-all"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import UniversityGallery from "@/components/sections/UniversityGallery";
import HODMessage from "@/components/sections/HODMessage";
import VisionMission from "@/components/sections/VisionMission";
import Programs from "@/components/sections/Programs";
import Faculty from "@/components/sections/Faculty";
import FacultyRoles from "@/components/sections/FacultyRoles";
import BoardOfStudies from "@/components/sections/BoardOfStudies";
import Achievements from "@/components/sections/Achievements";
import Placement from "@/components/sections/Placement";
import Admissions from "@/components/sections/Admissions";
import { LearningResources, QuickAccess, StudentCorner } from "@/components/sections/AcademicResources";
import { DQAC, Research } from "@/components/sections/SecondarySections";
import Videos from "@/components/sections/Videos";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <main className={isLoading ? "h-screen overflow-hidden text-lg md:text-xl" : "text-lg md:text-xl"}>
        <Hero />
        <Achievements />
        <VisionMission />
        <Gallery />
        <About />
        <HODMessage />
        <Programs />
        <Faculty />
        <FacultyRoles />
        <BoardOfStudies />
        <QuickAccess />
        <StudentCorner />
        <LearningResources />
        <UniversityGallery />
        <DQAC />
        <Research />
        <Placement />
        <Admissions />
        <Videos />
      </main>

      {/* Global Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-neon-cyan z-[1001] shadow-[0_0_10px_#00f5ff] origin-left"
        style={{ scaleX: 0 }}
        id="scroll-progress"
      />

      <style jsx global>{`
        #scroll-progress {
          animation: scroll-grow linear;
          animation-timeline: scroll();
        }
        @keyframes scroll-grow {
          from { scale: 0 1; }
          to { scale: 1 1; }
        }
        @keyframes scramble {
          0% { transform: translate(0) skew(0); filter: hue-rotate(0); }
          10% { transform: translate(-10px, 10px) skew(10deg); filter: hue-rotate(90deg); }
          20% { transform: translate(10px, -10px) skew(-10deg); filter: hue-rotate(180deg); }
          100% { transform: translate(0) skew(0); filter: hue-rotate(360deg); }
        }
        .animate-scramble {
          animation: scramble 0.1s infinite;
        }
      `}</style>
    </>
  );
}

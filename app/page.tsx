"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollEffects from "@/components/providers/ScrollEffects";
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
import ScrollDivider from "@/components/ui/scroll/ScrollDivider";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <ScrollEffects enabled={!isLoading} />
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <main className={isLoading ? "h-screen overflow-hidden text-lg md:text-xl" : "text-lg md:text-xl"}>
        <Hero />
        <ScrollDivider variant="green" />
        <Achievements />
        <ScrollDivider variant="cyan" />
        <VisionMission />
        <ScrollDivider variant="magenta" />
        <Gallery />
        <ScrollDivider variant="indigo" />
        <About />
        <ScrollDivider variant="amber" />
        <HODMessage />
        <ScrollDivider variant="cyan" />
        <Programs />
        <ScrollDivider variant="magenta" />
        <Faculty />
        <ScrollDivider variant="green" />
        <FacultyRoles />
        <ScrollDivider variant="cyan" />
        <BoardOfStudies />
        <ScrollDivider variant="indigo" />
        <Videos />
        <ScrollDivider variant="amber" />
        <QuickAccess />
        <ScrollDivider variant="cyan" />
        <StudentCorner />
        <ScrollDivider variant="magenta" />
        <LearningResources />
        <ScrollDivider variant="green" />
        <UniversityGallery />
        <ScrollDivider variant="indigo" />
        <DQAC />
        <ScrollDivider variant="cyan" />
        <Research />
        <ScrollDivider variant="magenta" />
        <Placement />
        <ScrollDivider variant="amber" />
        <Admissions />
      </main>

      <motion.div
        className="fixed top-0 left-0 right-0 z-[1001] h-1 origin-left bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-green shadow-[0_0_12px_rgba(2,132,199,0.45)]"
        style={{ scaleX: 0 }}
        id="scroll-progress"
      />
    </>
  );
}

import type { Metadata } from "next";
import { Orbitron, Space_Grotesk } from "next/font/google";
import "./globals.css";
import PerspectiveGrid from "@/components/ui/PerspectiveGrid";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body"
});
const orbitron = Orbitron({ 
  subsets: ["latin"], 
  variable: "--font-orbitron" 
});

export const metadata: Metadata = {
  title: "GMU Cyber Studio | Department of Cyber Security & Information Security",
  description: "A world-class cyberpunk 3D web experience for GM University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} ${orbitron.variable} bg-cyber-black text-text-primary antialiased`}>
        <SmoothScroll>
          <div className="relative z-10">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
          
          {/* Global Background Effect */}
          <PerspectiveGrid />
        </SmoothScroll>
      </body>
    </html>
  );
}

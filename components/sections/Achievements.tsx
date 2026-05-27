"use client";

import Image from "next/image";
import { Trophy } from "lucide-react";
import { achievements } from "@/lib/siteData";
import SectionHeading from "@/components/ui/scroll/SectionHeading";

export default function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden bg-cyber-black">
      <div className="flex min-h-screen flex-col justify-center py-24 px-6 lg:px-24">
        <SectionHeading className="[&_.scroll-title-inner]:text-neon-green">
          <span className="text-neon-green">Achievements</span>
        </SectionHeading>

        <div className="achievements-scroll w-full overflow-hidden max-lg:overflow-x-auto max-lg:pb-4">
          <div className="achievements-track flex w-max gap-8 max-lg:w-full max-lg:snap-x max-lg:snap-mandatory">
            {achievements.map((item) => (
              <div
                key={item.title}
                data-stagger-item
                data-scroll-tilt
                className="w-[320px] shrink-0 snap-center md:w-[420px]"
              >
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/5 bg-cyber-panel p-6">
                  <div
                    className={`absolute top-4 right-4 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-cyber-black/80 px-3 py-1 ${rankClass(item.rank)}`}
                  >
                    <Trophy size={14} />
                    <span className="text-[10px] font-bold tracking-tighter uppercase">
                      {item.rank}
                    </span>
                  </div>

                  <div className="relative mb-6 aspect-video overflow-hidden rounded-xl border border-white/10 transition-all group-hover:border-neon-cyan/50">
                    <Image
                      src={item.photo}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 320px, 420px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent opacity-60" />
                  </div>

                  <h3 className="mb-3 text-lg font-orbitron font-bold text-text-primary transition-colors group-hover:text-neon-green">
                    {item.title}
                  </h3>
                  <p className="mb-6 line-clamp-4 font-share-tech text-sm text-text-muted">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2 font-mono text-[10px] text-neon-cyan/80">
                    <span className="rounded border border-neon-cyan/30 px-2 py-0.5">
                      Student: {item.student}
                    </span>
                  </div>

                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="animate-scan-y absolute top-0 left-0 h-[1px] w-full bg-neon-green" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          data-reveal="blur"
          data-reveal-delay="0.15"
          className="mt-12 rounded-2xl border border-dashed border-neon-cyan/20 bg-cyber-panel/30 p-8 text-center"
        >
          <p className="text-sm text-text-muted md:text-base">
            More student achievements and recognitions will be added soon.
          </p>
          <div className="mx-auto mt-4 h-1 w-48 overflow-hidden bg-cyber-black">
            <div className="h-full animate-loading-infinite bg-neon-cyan" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan-y {
          0% {
            top: 0;
          }
          100% {
            top: 100%;
          }
        }
        .animate-scan-y {
          animation: scan-y 3s linear infinite;
        }
        @keyframes loading-infinite {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-loading-infinite {
          animation: loading-infinite 2s linear infinite;
        }
      `}</style>
    </section>
  );
}

function rankClass(rank: string) {
  if (rank.includes("1ST")) return "text-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.3)]";
  if (rank.includes("2ND")) return "text-slate-300 shadow-[0_0_20px_rgba(203,213,225,0.3)]";
  return "text-orange-400 shadow-[0_0_20px_rgba(251,146,60,0.3)]";
}

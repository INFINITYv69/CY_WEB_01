"use client";

import Image from "next/image";
import { Users, ExternalLink } from "lucide-react";
import { faculty } from "@/lib/siteData";
import SectionHeading from "@/components/ui/scroll/SectionHeading";
import SectionAtmosphere from "@/components/ui/scroll/SectionAtmosphere";

export default function Faculty() {
  return (
    <SectionAtmosphere id="faculty" className="bg-slate-50 px-6 py-24 lg:px-24" variant="amber">
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading label="Department Team" align="left" className="flex items-center gap-4">
          <Users size={48} className="text-sky-600" />
          <span>
            Faculty <span className="text-sky-600">Directory</span>
          </span>
        </SectionHeading>

        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          data-stagger
        >
          {faculty.map((member, index) => (
            <article
              key={member.name}
              data-stagger-item
              data-scroll-tilt
              className="group flex flex-col items-center overflow-hidden rounded-3xl border-2 border-amber-200/60 bg-gradient-to-b from-yellow-50 to-amber-100/50 pb-6 text-center shadow-lg shadow-amber-900/5 transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_18px_50px_rgba(251,191,36,0.2)]"
            >
              <div className="relative mb-4 mt-8 h-40 w-40 shrink-0 rounded-full bg-gradient-to-tr from-blue-800 via-blue-500 to-cyan-400 p-[4px] shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-500 group-hover:shadow-[0_0_35px_rgba(59,130,246,0.5)]">
                <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white bg-white">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="160px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority={index < 4}
                  />
                </div>
              </div>

              <div className="flex w-full flex-1 flex-col items-center justify-between px-5">
                <div>
                  <h3 className="mb-1 text-xl font-bold leading-snug text-slate-800">{member.name}</h3>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-600">
                    {member.role}
                  </p>
                </div>
                {member.cv && (
                  <a
                    href={member.cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex cursor-pointer items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest text-white transition-all hover:bg-sky-600 hover:shadow-[0_8px_20px_rgba(14,165,233,0.3)]"
                  >
                    <span>View Profile</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionAtmosphere>
  );
}

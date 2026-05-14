"use client";

export default function Placement() {
  return (
    <section id="placements" className="py-24 px-6 lg:px-24 bg-cyber-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-8">
              <span className="text-neon-magenta">Placements</span>
            </h2>
            <p className="font-share-tech text-lg text-text-muted leading-relaxed">
              Our graduates are prepared to secure the digital world. With a strong focus on practical skills and industry certifications, we ensure 100% placement support for our students in top-tier organizations.
            </p>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
              <StatItem label="HIRING COMPANIES" value="20+" color="text-neon-cyan" />
              <StatItem label="AVG PACKAGE" value="Rs. 6.5 LPA" color="text-neon-magenta" />
              <StatItem label="PLACEMENT RATE" value="85%" color="text-neon-green" />
            </div>
          </div>

          <div className="w-full lg:w-96">
            <div className="p-8 bg-cyber-panel border border-neon-magenta/30 rounded-3xl relative overflow-hidden group">
              <div className="flex flex-col items-center gap-6 mb-8 text-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-neon-magenta/50 shadow-lg shrink-0">
                  <img src="https://cy-iy.vercel.app/static/Rachana_faculty.jpeg" alt="Dr. Rachana P G" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div>
                  <h4 className="font-orbitron font-bold text-text-primary text-xl">Dr. Rachana P G</h4>
                  <p className="text-xs font-mono text-neon-magenta uppercase tracking-widest">Placement Coordinator</p>
                </div>
              </div>
              <div className="space-y-2 font-mono text-[10px] text-text-muted">
                <p>Tel: +91 63606 01253</p>
                <p>Email: rachanapg@gmit.ac.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recruitment Partners */}
        <div className="relative py-16 mt-12 border-t border-white/5 bg-cyber-panel/20 rounded-t-3xl">
          <div className="text-center mb-8">
            <h4 className="text-xs font-mono text-neon-cyan uppercase tracking-widest">Our Recruitment Partners</h4>
          </div>
          <div className="flex justify-center px-4 w-full">
            <img 
              src="https://res.cloudinary.com/dkg60zkba/image/upload/v1774188373/placement/recruitment_partners.png" 
              alt="Recruitment Partners" 
              className="w-full max-w-5xl h-auto object-contain opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-500" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ label, value, color }: { label: string, value: string, color: string }) {
  return (
    <div className="space-y-1">
      <p className={`text-3xl font-orbitron font-bold ${color}`}>{value}</p>
      <p className="text-[10px] font-mono text-text-muted uppercase tracking-tighter">{label}</p>
    </div>
  );
}

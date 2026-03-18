import { motion } from "motion/react";
import { Badge, DottedLine } from "./UI";

export const BacklogSection = () => {
  return (
    <section className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-20">
        <div className="md:col-span-5">
          <div className="sticky top-32">
            <div className="flex items-center gap-4 mb-10">
              <div className="text-[#22D0DF] font-mono text-sm tracking-widest">01</div>
              <DottedLine className="flex-1" />
            </div>
            <h2 className="text-5xl font-medium mb-8 leading-[1.1] text-white">
              Shrink your vulnerability backlog
            </h2>
            <p className="text-[#83919B] text-xl leading-relaxed font-light">
              Confidently identify vulnerabilities that cannot be exploited in your environment, allowing you to remove 90% of your backlog.
            </p>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-12 aspect-[4/3] flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-sm">
            {/* Ribbon Chart Visual */}
            <div className="w-full h-full relative">
              <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#E42269" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#E42269" stopOpacity="0.1" />
                  </linearGradient>
                  <linearGradient id="grad-green" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2FD48D" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#2FD48D" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <path d="M50,250 C150,250 200,220 350,220 L350,280 C200,280 150,280 50,280 Z" fill="url(#grad-red)" />
                <path d="M50,200 C150,200 200,180 350,180 L350,220 C200,220 150,220 50,220 Z" fill="url(#grad-red)" fillOpacity="0.5" />
                <path d="M50,150 C150,150 200,120 350,120 L350,180 C200,180 150,180 50,180 Z" fill="#E19C1B" fillOpacity="0.3" />
                <path d="M50,50 C150,50 200,80 350,80 L350,120 C200,120 150,120 50,120 Z" fill="url(#grad-green)" />
                
                <line x1="50" y1="20" x2="50" y2="280" stroke="#83919B" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="350" y1="20" x2="350" y2="280" stroke="#2FD48D" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
              
              <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-full pb-4 font-mono text-[10px] text-[#83919B] uppercase tracking-widest">Before Maze</div>
              <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-full pb-4 font-mono text-[10px] text-[#2FD48D] uppercase tracking-widest">After Maze</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-20 mt-48">
        <div className="md:col-span-5">
          <div className="sticky top-32">
            <div className="flex items-center gap-4 mb-10">
              <div className="text-[#22D0DF] font-mono text-sm tracking-widest">02</div>
              <DottedLine className="flex-1" />
            </div>
            <h2 className="text-5xl font-medium mb-8 leading-[1.1] text-white">
              Quickly identify the few vulnerabilities that matter
            </h2>
            <p className="text-[#83919B] text-xl leading-relaxed font-light">
              Identify the few vulnerabilities that are truly critical, so you can stop worrying about an unpatched vulnerability leading to a breach.
            </p>
          </div>
        </div>

        <div className="md:col-span-7 space-y-8">
          {[
            { id: "CVE-2024-53194", badges: ["Exploitable", "High Likelihood", "Critical Impact"] },
            { id: "CVE-2024-53990", badges: ["Exploitable", "High Likelihood", "Critical Impact"] },
            { id: "CVE-2025-21613", badges: ["Exploitable", "High Likelihood", "Critical Impact"] },
          ].map((cve) => (
            <div key={cve.id} className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 backdrop-blur-sm group hover:border-[#E42269]/30 transition-all duration-500">
              <div className="font-mono text-2xl text-white group-hover:text-[#E42269] transition-colors">{cve.id}</div>
              <div className="flex flex-wrap gap-3">
                {cve.badges.map(b => <Badge key={b} color="red">{b}</Badge>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

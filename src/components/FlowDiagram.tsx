import { motion } from "motion/react";
import { Badge, DottedLine, DottedPlus } from "./UI";

export const FlowDiagram = () => {
  return (
    <section className="py-32 bg-maze-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 max-w-4xl mx-auto leading-[1.15]">
            How can we fix the vulnerabilities that matter, before attackers beat us to it?
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-32">
          {[
            "Vulnerabilities ingested from cloud vulnerability scanners",
            "AI Agents investigate every vulnerability in the context of your environment",
            "False positives removed and high-risk vulnerabilities identified",
            "One-click mitigation and remediation actions sent to owners"
          ].map((text, i) => (
            <div key={i} className="flex flex-col gap-6">
              <div className="text-[#22D0DF] font-mono text-xs tracking-widest">0{i + 1}</div>
              <p className="text-base text-[#83919B] leading-relaxed font-light">{text}</p>
            </div>
          ))}
        </div>

        {/* The Diagram Visual */}
        <div className="relative w-full aspect-[1200/600] bg-[#0A0A0A] rounded-2xl border border-white/5 overflow-hidden p-12">
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 grid grid-cols-12 h-full">
              {[...Array(13)].map((_, i) => (
                <DottedLine key={i} vertical className="h-full" />
              ))}
            </div>
            <div className="absolute inset-0 grid grid-rows-6 w-full">
              {[...Array(7)].map((_, i) => (
                <DottedLine key={i} className="w-full" />
              ))}
            </div>
          </div>

          <div className="relative h-full grid grid-cols-12 gap-4">
            {/* Left Column: Scanners */}
            <div className="col-span-2 flex flex-col justify-center gap-8">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#83919B] mb-4">Scanners</div>
              {[
                "https://mazehq.com/public/theme/images/svg/wiz-logo.svg",
                "https://mazehq.com/public/theme/images/svg/crowdstrike-logo.svg",
                "https://mazehq.com/public/theme/images/svg/orca-logo.svg",
                "https://mazehq.com/public/theme/images/svg/defender-logo.svg"
              ].map((src, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-3 flex items-center justify-center backdrop-blur-sm">
                  <img src={src} alt="Scanner" className="h-5 opacity-80" />
                </div>
              ))}
            </div>

            {/* Middle: AI Vulnerability Analyst */}
            <div className="col-span-6 relative flex flex-col justify-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.2em] text-[#83919B]">AI Vulnerability Analyst</div>
              
              <div className="grid grid-cols-2 h-full items-center gap-12">
                {/* Column 1: Investigation */}
                <div className="flex flex-col gap-32">
                  <div className="relative bg-[#22D0DF]/10 border border-[#22D0DF]/30 rounded-xl p-6 backdrop-blur-md">
                    <div className="text-[10px] uppercase text-[#22D0DF] mb-2 font-mono">Investigation</div>
                    <div className="text-sm font-medium text-white">Potentially Exploitable</div>
                    <div className="absolute -right-12 top-1/2 -translate-y-1/2 text-xl font-mono text-[#22D0DF]">16%</div>
                  </div>
                  <div className="relative bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md">
                    <div className="text-[10px] uppercase text-[#83919B] mb-2 font-mono">Investigation</div>
                    <div className="text-sm font-medium text-[#83919B]">Not Exploitable</div>
                    <div className="absolute -right-12 top-1/2 -translate-y-1/2 text-xl font-mono text-[#83919B]">96%</div>
                  </div>
                </div>

                {/* Column 2: Priority */}
                <div className="flex flex-col gap-12">
                  <div className="bg-[#E42269]/10 border border-[#E42269]/30 rounded-xl p-6 backdrop-blur-md">
                    <div className="text-[10px] uppercase text-[#E42269] mb-2 font-mono">Priority</div>
                    <div className="text-sm font-medium text-white">Urgently Fix</div>
                    <div className="mt-2 text-xl font-mono text-[#E42269]">1%</div>
                  </div>
                  <div className="bg-[#22D0DF]/10 border border-[#22D0DF]/30 rounded-xl p-6 backdrop-blur-md">
                    <div className="text-[10px] uppercase text-[#22D0DF] mb-2 font-mono">Priority</div>
                    <div className="text-sm font-medium text-white">Patch in SLA</div>
                    <div className="mt-2 text-xl font-mono text-[#22D0DF]">6%</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md">
                    <div className="text-[10px] uppercase text-[#83919B] mb-2 font-mono">Priority</div>
                    <div className="text-sm font-medium text-[#83919B]">Ignore</div>
                    <div className="mt-2 text-xl font-mono text-[#83919B]">93%</div>
                  </div>
                </div>
              </div>

              {/* SVG Connections */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" overflow="visible">
                <path d="M 180 150 L 350 150" stroke="#22D0DF" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                <path d="M 180 150 L 350 280" stroke="#22D0DF" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                <path d="M 180 450 L 350 450" stroke="#83919B" strokeWidth="1" strokeDasharray="4 4" fill="none" />
              </svg>
            </div>

            {/* Right: AI Remediation Analyst */}
            <div className="col-span-4 flex flex-col justify-center pl-12">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#83919B] mb-8 text-center">AI Remediation Analyst</div>
              <div className="bg-[#2FD48D]/10 border border-[#2FD48D]/30 rounded-2xl p-8 backdrop-blur-md relative">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#2FD48D]/20 flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-[#2FD48D] rounded-sm" />
                    </div>
                    <div className="text-sm font-medium">Remediation Steps</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#2FD48D]/20 flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-[#2FD48D] rounded-sm rotate-45" />
                    </div>
                    <div className="text-sm font-medium">Remediation PR</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#2FD48D]/20 flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-[#2FD48D] rounded-full" />
                    </div>
                    <div className="text-sm font-medium">Remediation Ticket</div>
                  </div>
                </div>
                
                {/* Floating Detail Popups */}
                <div className="absolute -top-12 -right-8 p-3 bg-maze-bg border border-white/10 rounded-lg shadow-2xl animate-bounce">
                  <div className="text-[8px] uppercase text-[#83919B] mb-1">Requirement</div>
                  <div className="text-[10px] font-medium">KDC Server Running</div>
                  <div className="text-[10px] text-[#E42269]">Not present</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

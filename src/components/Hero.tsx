import { motion } from "motion/react";
import { Button, DottedLine, DottedPlus } from "./UI";
import { Bell, ArrowRight } from "lucide-react";
import { Globe } from "./Globe";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center pt-32 overflow-hidden">
      {/* Globe background */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="relative w-[900px] h-[900px]" style={{ opacity: 0.85 }}>
          <Globe className="w-full h-full" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-maze-bg to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-maze-accent/20 bg-maze-accent/5 text-maze-accent text-xs font-medium mb-12 hover:bg-maze-accent/10 transition-all group"
        >
          <div className="relative flex items-center justify-center">
            <Bell size={14} className="relative z-10" />
            <span className="absolute inset-0 bg-maze-accent rounded-full animate-ping opacity-20" />
          </div>
          <span>Maze Launches AI Agents for Remediation — Read More</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-[88px] font-semibold tracking-tight leading-[1.05] mb-10 text-maze-text"
        >
          Get cloud vulnerabilities<br />under control
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-maze-muted mb-12 max-w-3xl mx-auto font-light"
        >
          AI Agents that investigate and resolve cloud vulnerabilities
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Button variant="primary" className="px-12 py-5 text-lg">
            Book Demo
          </Button>
        </motion.div>
      </div>

      {/* Clients Section */}
      <div className="mt-auto pb-20 w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="relative">
          <DottedLine className="absolute top-0 left-0" />
          <DottedLine className="absolute bottom-0 left-0" />

          <div className="grid grid-cols-2 md:grid-cols-4 items-center">
            {[
              { name: "Alloy", src: "https://mazehq.com/public/upload/logotypes/120_72_x2/6960b7b1c9525.png?v=1772010362" },
              { name: "Cohere Health", src: "https://mazehq.com/public/upload/logotypes/120_72_x2/6960b7c8dc1fa.png?v=1767948096" },
              { name: "Forge", src: "https://mazehq.com/public/upload/logotypes/120_72_x2/6960b7a592c98.png?v=1767948107" },
              { name: "PartsSource", src: "https://mazehq.com/public/upload/logotypes/120_72_x2/6960b7bc688dc.png?v=1772010419" }
            ].map((client, i) => (
              <div key={i} className="relative flex justify-center py-12 px-8 group">
                {i > 0 && <DottedLine vertical className="absolute left-0 top-0 h-full" />}
                <img
                  src={client.src}
                  alt={client.name}
                  className="h-8 opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                />
                <DottedPlus className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
                {i === 3 && <DottedPlus className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2" />}
                <DottedPlus className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
                {i === 3 && <DottedPlus className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2" />}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-maze-muted font-medium">Scroll Down</div>
            <div className="w-px h-12 bg-gradient-to-b from-maze-muted/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

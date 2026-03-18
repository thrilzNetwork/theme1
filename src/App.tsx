import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FlowDiagram } from "./components/FlowDiagram";
import { BacklogSection } from "./components/BacklogSection";
import { Footer } from "./components/Footer";
import { Button } from "./components/UI";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-maze-accent selection:text-maze-bg">
      <Header />
      <main>
        <Hero />
        
        <section className="py-24 bg-maze-bg border-y border-maze-muted/10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium">Vulnerability backlogs keep growing</h3>
              <p className="text-maze-muted text-sm leading-relaxed">
                Attackers are moving faster than ever to exploit them. 40,000 vulnerabilities published in 2024 alone.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium">Most findings are false-positives</h3>
              <p className="text-maze-muted text-sm leading-relaxed">
                Security teams have no way to identify them at scale. 90% of all findings are false positives when investigated in context.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium">Manual triage is collapsing</h3>
              <p className="text-maze-muted text-sm leading-relaxed">
                Time to exploit is collapsing from 63 days in 2019 to just 5 days in 2023.
              </p>
            </div>
          </div>
        </section>

        <FlowDiagram />
        
        <BacklogSection />

        {/* Testimonials Section */}
        <section className="py-32 bg-maze-bg overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="border border-maze-muted/10 rounded-3xl p-12 md:p-20 relative">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-maze-bg px-4">
                 <div className="w-2 h-2 bg-maze-accent rounded-full" />
               </div>
               
               <blockquote className="text-2xl md:text-4xl font-light italic leading-tight mb-12 text-center">
                 "Maze's product is almost too good to be true. It is a truly novel use of Agentic AI that goes well beyond automating manual workflows."
               </blockquote>
               
               <div className="flex flex-col items-center">
                 <div className="font-medium text-lg">Mandy Andress</div>
                 <div className="text-maze-muted uppercase tracking-widest text-xs font-mono mt-1">CISO</div>
               </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-maze-bg relative overflow-hidden">
          <div className="absolute inset-0 glow-mesh opacity-30 pointer-events-none" />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-semibold mb-8">
              Get cloud vulnerabilities<br />under control
            </h2>
            <p className="text-maze-muted text-lg mb-12">
              AI that investigates and resolves cloud vulnerabilities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button variant="secondary" className="w-full sm:w-auto px-10">Contact</Button>
              <Button variant="primary" className="w-full sm:w-auto px-10">Book Demo</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

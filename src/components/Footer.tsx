import { motion } from "motion/react";
import { Button } from "./UI";

export const Footer = () => {
  return (
    <footer className="bg-maze-bg border-t border-white/5 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-32 gap-12">
          <h2 className="text-4xl md:text-6xl font-medium max-w-2xl leading-[1.1] text-white">
            Get cloud vulnerabilities under control
          </h2>
          <Button variant="primary" className="px-10 py-4">
            Book Demo
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32">
          <div className="md:col-span-4">
            <svg className="w-24 h-auto mb-10 text-white" viewBox="0 0 98 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.728 5.135l1.097.587V20.44l-1.097.587-1.096-.587V8.07l-6.577 3.522v10.023l-2.192-1.174V10.418l9.865-5.283z" fill="currentColor" />
              <path d="M21.21 10.418l2.191 1.174v10.023l2.193-1.174V10.42l-6.577-3.523v14.719l-3.289 1.76-3.288-1.76V11.593l-2.193 1.173v10.023l5.481 2.935 5.481-2.935V10.418zM86.328 8.995c3.437 0 5.796 2.604 5.809 6.421 0 .345-.025.69-.051.996h-9.079c.36 2.196 1.911 3.115 3.655 3.115 1.231 0 2.539-.485 3.552-1.29l1.334 1.903c-1.501 1.276-3.194 1.723-5.053 1.723-3.68 0-6.283-2.553-6.283-6.434 0-3.83 2.5-6.434 6.116-6.434zm-.05 2.375c-1.912 0-2.975 1.225-3.258 3.012h6.373c-.295-1.902-1.41-3.012-3.116-3.012zM78.924 9.314v1.94l-6.706 7.865h6.834v2.425H68.653v-1.94l6.821-7.864h-6.616V9.314h10.066zM66.356 9.314v12.23h-2.679v-1.468c-.847 1.085-2.116 1.787-3.86 1.787-3.436 0-6.142-2.693-6.142-6.434 0-3.74 2.706-6.434 6.142-6.434 1.744 0 3.013.715 3.86 1.8v-1.48h2.68zm-6.218 2.196c-2.308 0-3.706 1.774-3.706 3.92 0 2.144 1.398 3.918 3.706 3.918 2.218 0 3.705-1.685 3.705-3.919s-1.487-3.919-3.705-3.919zM46.768 8.995c2.924 0 4.988 2.004 4.988 4.864v7.685h-2.692V14.74c0-2.056-1.065-3.204-2.86-3.204-1.73 0-3.18 1.136-3.18 3.23v6.778h-2.693V14.74c0-2.056-1.064-3.204-2.86-3.204-1.73 0-3.18 1.136-3.18 3.23v6.778H31.6V9.314h2.667v1.494c.988-1.443 2.513-1.813 3.77-1.813 1.872 0 3.398.83 4.244 2.183 1.065-1.749 2.962-2.183 4.488-2.183z" fill="currentColor" />
            </svg>
            <p className="text-[#83919B] text-sm max-w-xs leading-relaxed font-light">
              Agentic AI for Vulnerability Management. Built from scratch to use modern AI to make decisions.
            </p>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#83919B] mb-8">Product</h4>
            <ul className="space-y-4 text-sm font-light text-[#83919B]">
              <li><a href="#" className="hover:text-[#22D0DF] transition-colors">Investigation</a></li>
              <li><a href="#" className="hover:text-[#22D0DF] transition-colors">Remediation</a></li>
              <li><a href="#" className="hover:text-[#22D0DF] transition-colors">Our Philosophy</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#83919B] mb-8">Company</h4>
            <ul className="space-y-4 text-sm font-light text-[#83919B]">
              <li><a href="#" className="hover:text-[#22D0DF] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#22D0DF] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#22D0DF] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#83919B] mb-8">Legal</h4>
            <ul className="space-y-4 text-sm font-light text-[#83919B]">
              <li><a href="#" className="hover:text-[#22D0DF] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#22D0DF] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/5 gap-8">
          <p className="text-[10px] text-[#83919B] uppercase tracking-[0.3em] font-medium">
            © 2026 Maze HQ. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[#83919B] hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

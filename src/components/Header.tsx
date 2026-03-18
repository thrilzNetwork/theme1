import { motion } from "motion/react";
import { Button } from "./UI";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-maze-bg/85 backdrop-blur-md border-b border-maze-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="/" className="flex items-center gap-2">
            <svg className="w-24 h-auto text-white" viewBox="0 0 98 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.728 5.135l1.097.587V20.44l-1.097.587-1.096-.587V8.07l-6.577 3.522v10.023l-2.192-1.174V10.418l9.865-5.283z" fill="currentColor" />
              <path d="M21.21 10.418l2.191 1.174v10.023l2.193-1.174V10.42l-6.577-3.523v14.719l-3.289 1.76-3.288-1.76V11.593l-2.193 1.173v10.023l5.481 2.935 5.481-2.935V10.418zM86.328 8.995c3.437 0 5.796 2.604 5.809 6.421 0 .345-.025.69-.051.996h-9.079c.36 2.196 1.911 3.115 3.655 3.115 1.231 0 2.539-.485 3.552-1.29l1.334 1.903c-1.501 1.276-3.194 1.723-5.053 1.723-3.68 0-6.283-2.553-6.283-6.434 0-3.83 2.5-6.434 6.116-6.434zm-.05 2.375c-1.912 0-2.975 1.225-3.258 3.012h6.373c-.295-1.902-1.41-3.012-3.116-3.012zM78.924 9.314v1.94l-6.706 7.865h6.834v2.425H68.653v-1.94l6.821-7.864h-6.616V9.314h10.066zM66.356 9.314v12.23h-2.679v-1.468c-.847 1.085-2.116 1.787-3.86 1.787-3.436 0-6.142-2.693-6.142-6.434 0-3.74 2.706-6.434 6.142-6.434 1.744 0 3.013.715 3.86 1.8v-1.48h2.68zm-6.218 2.196c-2.308 0-3.706 1.774-3.706 3.92 0 2.144 1.398 3.918 3.706 3.918 2.218 0 3.705-1.685 3.705-3.919s-1.487-3.919-3.705-3.919zM46.768 8.995c2.924 0 4.988 2.004 4.988 4.864v7.685h-2.692V14.74c0-2.056-1.065-3.204-2.86-3.204-1.73 0-3.18 1.136-3.18 3.23v6.778h-2.693V14.74c0-2.056-1.064-3.204-2.86-3.204-1.73 0-3.18 1.136-3.18 3.23v6.778H31.6V9.314h2.667v1.494c.988-1.443 2.513-1.813 3.77-1.813 1.872 0 3.398.83 4.244 2.183 1.065-1.749 2.962-2.183 4.488-2.183z" fill="currentColor" />
            </svg>
          </a>
          <nav className="hidden md:flex items-center gap-10">
            {["Product", "Solutions", "Resources", "Company"].map((item) => (
              <a key={item} href={`/${item.toLowerCase()}`} className="text-sm font-medium text-maze-muted hover:text-white transition-colors flex items-center gap-1">
                {item}
                <svg className="w-2 h-2 opacity-50" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-8">
          <a href="/login" className="text-sm font-medium text-maze-muted hover:text-white transition-colors">
            Login
          </a>
          <Button variant="primary" className="px-6 py-2.5 text-sm">
            Book Demo
          </Button>
        </div>
      </div>
    </header>
  );
};

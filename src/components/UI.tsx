import React from "react";
import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "basic";
  className?: string;
  href?: string;
  onClick?: () => void;
  icon?: LucideIcon;
}

export const Button = ({ children, variant = "primary", className = "", href, onClick }: ButtonProps) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium transition-all duration-300 rounded-full overflow-hidden group";
  
  const variants = {
    primary: "bg-[#22D0DF] text-[#050505] hover:bg-white shadow-[0_0_20px_rgba(34,208,223,0.3)]",
    secondary: "bg-transparent border border-maze-muted/30 text-maze-text hover:border-maze-accent",
    basic: "bg-transparent text-maze-muted hover:text-maze-text",
  };

  const content = (
    <div className="flex items-center gap-3">
      {variant === "primary" && (
        <span className="w-1.5 h-1.5 bg-[#050505] rounded-full group-hover:bg-[#22D0DF] transition-colors" />
      )}
      <span>{children}</span>
    </div>
  );

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
};

export const Badge = ({ children, color = "red" }: { children: React.ReactNode, color?: "red" | "green" | "blue" | "cyan", key?: string | number }) => {
  const colors = {
    red: "text-[#E42269] border-[#E42269]/30 bg-[#E42269]/5",
    green: "text-[#2FD48D] border-[#2FD48D]/30 bg-[#2FD48D]/5",
    blue: "text-[#22D0DF] border-[#22D0DF]/30 bg-[#22D0DF]/5",
    cyan: "text-[#22D0DF] border-[#22D0DF]/30 bg-[#22D0DF]/5",
  };
  
  return (
    <div className={`inline-flex items-center px-2 py-0.5 rounded border text-[10px] uppercase tracking-wider font-mono ${colors[color]}`}>
      {children}
    </div>
  );
};

export const DottedPlus = ({ className = "", key }: { className?: string, key?: string | number }) => (
  <div key={key} className={`relative w-3 h-3 flex items-center justify-center ${className}`}>
    <div className="absolute w-full h-px bg-maze-muted/30" />
    <div className="absolute h-full w-px bg-maze-muted/30" />
  </div>
);

export const DottedLine = ({ vertical = false, className = "", key }: { vertical?: boolean, className?: string, key?: string | number }) => {
  return (
    <div 
      key={key}
      className={`${className} ${vertical ? "w-px h-full border-l border-dotted border-maze-muted/30" : "h-px w-full border-t border-dotted border-maze-muted/30"}`}
    />
  );
};

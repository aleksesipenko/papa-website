"use client";

import { motion, HTMLMotionProps } from "framer-motion";

interface RetroButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function RetroButton({ children, variant = "primary", className = "", ...props }: RetroButtonProps) {
  const isPrimary = variant === "primary";
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative px-6 py-3 font-heading uppercase tracking-widest text-sm font-bold
        border-2 transition-colors duration-200
        ${isPrimary 
          ? "bg-papa-gold text-slate-900 border-papa-gold hover:bg-papa-gold-500" 
          : "bg-transparent text-papa-gold border-papa-gold hover:bg-papa-gold/10"}
        ${className}
      `}
      {...props}
    >
      {children}
      <div className="absolute top-0 left-0 w-1 h-1 bg-current" />
      <div className="absolute top-0 right-0 w-1 h-1 bg-current" />
      <div className="absolute bottom-0 left-0 w-1 h-1 bg-current" />
      <div className="absolute bottom-0 right-0 w-1 h-1 bg-current" />
    </motion.button>
  );
}

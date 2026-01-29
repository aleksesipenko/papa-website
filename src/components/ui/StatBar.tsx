"use client";

import { motion } from "framer-motion";

interface StatBarProps {
  label: string;
  value: number; // 0 to 100
  color?: string;
  icon?: React.ReactNode;
}

export function StatBar({ label, value, color = "bg-papa-gold", icon }: StatBarProps) {
  return (
    <div className="w-full mb-4">
      <div className="flex justify-between items-center mb-1 text-papa-gold font-heading text-sm uppercase tracking-wider">
        <span className="flex items-center gap-2">
          {icon}
          {label}
        </span>
        <span>{value}/100</span>
      </div>
      <div className="h-4 bg-slate-900 border border-slate-700 rounded-sm overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`h-full ${color} relative`}
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-white/30" />
        </motion.div>
      </div>
    </div>
  );
}

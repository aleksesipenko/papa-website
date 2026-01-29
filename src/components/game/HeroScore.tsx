"use client";

import { motion } from "framer-motion";

interface HeroScoreProps {
  score: number;
  maxScore?: number;
}

export function HeroScore({ score, maxScore = 100 }: HeroScoreProps) {
  const percentage = Math.min((score / maxScore) * 100, 100);
  
  return (
    <div className="flex items-center gap-3 bg-papa-card/80 backdrop-blur-sm px-4 py-2 rounded-lg">
      <span className="text-sm font-mono text-foreground/70">Геройство:</span>
      
      <div className="w-24 h-2 bg-background rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-papa-gold rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
      
      <motion.span
        key={score}
        initial={{ scale: 1.2, color: "#FFD700" }}
        animate={{ scale: 1, color: "inherit" }}
        transition={{ duration: 0.3 }}
        className="text-sm font-mono font-bold text-papa-gold min-w-[3ch] text-right"
      >
        {score}
      </motion.span>
    </div>
  );
}

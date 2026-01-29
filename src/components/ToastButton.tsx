"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { RetroButton } from "./ui/RetroButton";
import { Wine } from "lucide-react";

export function ToastButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleToast = () => {
    setShowTooltip(false);
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FBBF24', '#ffffff']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FBBF24', '#ffffff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    
    frame();
  };

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col items-end gap-2">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="mr-2 relative bg-papa-gold text-slate-900 px-4 py-2 rounded-xl font-heading text-sm shadow-[0_0_20px_rgba(251,191,36,0.4)] animate-pulse"
          >
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-papa-gold transform rotate-45"></div>
            Жми сюда для салюта! 🥂
          </motion.div>
        )}
      </AnimatePresence>
      
      <RetroButton onClick={handleToast} className="shadow-lg shadow-papa-gold/20 flex items-center gap-2 relative z-10">
        <Wine className="w-5 h-5" />
        Сказать Тост
      </RetroButton>
    </div>
  );
}

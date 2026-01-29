"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const lines = [
  "Инициализация ДмитрияOS v6.4...",
  "Включение сердечного ядра...",
  "Загрузка модулей строительства...",
  "Парсинг 25 воспоминаний...",
  "Синхронизация харизмы...",
  "Настройка Шашлыка.sys...",
  "Обход Wildberries...",
  "Протоколы Гранда активны.",
  "С Днём Рождения, Папа! 🎂"
];

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 5000); // 5 секунд чтобы прочитать поздравление
          return 100;
        }
        const inc = Math.floor(Math.random() * 6) + 2; // Медленнее прогресс
        const next = Math.min(prev + inc, 100);

        // Update line based on progress
        const targetLine = Math.floor((next / 100) * lines.length);
        if (targetLine < lines.length) setCurrentLine(targetLine);

        return next;
      });
    }, 180); // Медленнее интервал
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-slate-950 flex flex-col items-center justify-center p-6"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-md w-full">
        <div className="mb-12 space-y-2">
          <div className="flex justify-between items-end mb-2">
            <span className="text-papa-gold font-mono text-xs uppercase tracking-widest">Загрузка Системы</span>
            <span className="text-papa-gold font-mono text-sm font-semibold">{progress}%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-900 overflow-hidden rounded-full border border-slate-800">
            <motion.div
              className="h-full bg-gradient-to-r from-papa-gold-500 to-papa-gold shadow-glow-gold-lg"
              animate={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="bg-black/40 border border-slate-800 rounded-lg p-6 font-mono text-xs min-h-[180px] flex flex-col justify-end overflow-hidden">
          <div className="space-y-1 text-[11px] leading-relaxed">
            {lines.slice(0, currentLine + 1).map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                className={i === currentLine ? "text-papa-gold" : "text-slate-600"}
              >
                <span className="mr-2">[{i === lines.length - 1 ? "SUCCESS" : "   OK   "}]</span>
                {line}
              </motion.p>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="text-papa-gold-400 font-heading text-4xl mb-2 tracking-[0.2em] uppercase">PapaOS</div>
          <div className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">Корпоративное издание - Только для личного использования</div>
        </motion.div>
      </div>
    </motion.div>
  );
}

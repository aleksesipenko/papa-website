"use client";

import { motion } from "framer-motion";

interface IntroScreenProps {
  onStart: () => void;
}

export function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-background bg-[url('/assets/papaos/environments/env_100_home_fortress.png')] bg-cover bg-center bg-no-repeat"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      <motion.div
        className="relative z-10 bg-papa-card-glass backdrop-blur-xl rounded-2xl p-8 max-w-lg text-center border border-papa-gold/30 shadow-glow-gold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h1
          className="font-heading text-papa-gold text-5xl mb-3 tracking-wide drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Папа: Многоликий Герой
        </motion.h1>

        <motion.p
          className="text-papa-gold-400/80 font-body text-lg mb-8 font-medium tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          ПУТЕШЕСТВИЕ ПО АЛЬТЕРНАТИВНЫМ РЕАЛЬНОСТЯМ
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-papa-gold/10 rounded-full border border-papa-gold/20 mb-10"
        >
          <span className="text-lg">⚡️</span>
          <p className="text-papa-gold text-sm font-mono font-bold uppercase tracking-wider">
            Ваши решения меняют историю
          </p>
        </motion.div>

        <motion.button
          className="w-full bg-gradient-to-r from-papa-gold-500 to-papa-gold hover:from-papa-gold-600 hover:to-papa-gold-500 text-black font-heading text-xl py-4 px-8 rounded-xl transition-all duration-300 font-bold uppercase tracking-wider shadow-glow-gold hover:shadow-glow-gold-lg hover:scale-[1.02]"
          onClick={onStart}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Начать приключение
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

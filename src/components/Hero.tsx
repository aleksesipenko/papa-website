"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { StatBar } from "@/components/ui/StatBar";
import { Hammer, Brain, Heart, Zap, ChevronDown, RotateCw } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-papa-blue-light/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-papa-gold/10 rounded-full blur-3xl" />
      </div>

      {/* Bouncing Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-papa-gold/50 text-[10px] font-mono tracking-[0.2em] uppercase">Листай</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-papa-gold/80" />
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center gap-12">
        {/* Character Card (Left/Center on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-md"
        >
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-4 border-papa-gold/30 shadow-[0_0_50px_rgba(251,191,36,0.2)] bg-slate-800 group">

            {/* 3D Tilt Hint */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
              className="absolute top-6 right-6 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-papa-gold/30 pointer-events-none group-hover:opacity-0 transition-opacity duration-300"
            >
              <RotateCw className="w-3 h-3 text-papa-gold animate-spin-slow" />
              <span className="text-[10px] text-papa-gold font-bold uppercase tracking-wider">Покрути меня</span>
            </motion.div>

            <Image
              src="/assets/14_king_crown_humor.jpeg"
              alt="King Dmitry"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />

            {/* Nameplate */}
            <div className="absolute bottom-0 left-0 w-full p-6 text-center">
              <h1 className="font-heading text-4xl text-papa-gold drop-shadow-lg mb-1">
                ДМИТРИЙ
              </h1>
              <div className="inline-block px-3 py-1 bg-papa-gold/20 border border-papa-gold/50 rounded text-xs font-bold tracking-widest text-papa-gold-500">
                УРОВЕНЬ 64: ПАЛАДИН СЕМЬИ
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Panel (Right) */}
        <div className="flex flex-col gap-6 w-full max-w-lg">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-slate-800 relative overflow-hidden"
          >
            {/* Scanner line animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
              <motion.div
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="h-20 w-full bg-gradient-to-b from-transparent via-papa-gold/40 to-transparent"
              />
            </div>

            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="font-heading text-2xl text-white mb-1 uppercase tracking-tight">Лист Персонажа</h2>
                 <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">Статус_Системы: Оптимальная_Производительность</p>
              </div>
               <div className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded text-green-500 font-mono text-[10px] animate-pulse">
                 В СЕТИ
               </div>
            </div>

            <div className="space-y-6">
              <StatBar
                label="Мастер Строительства"
                value={99}
                icon={<Hammer className="w-4 h-4" />}
              />
              <StatBar
                label="Интеллект (AI Tech)"
                value={85}
                color="bg-blue-500"
                icon={<Brain className="w-4 h-4" />}
              />
              <StatBar
                label="Харизма (Grill Master)"
                value={100}
                color="bg-purple-500"
                icon={<Heart className="w-4 h-4" />}
              />
              <StatBar
                label="Выносливость (Wildberries)"
                value={90}
                color="bg-green-500"
                icon={<Zap className="w-4 h-4" />}
              />
            </div>

            <div className="mt-10 p-5 bg-slate-900/50 rounded-xl border border-slate-700/50 backdrop-blur-sm">
              <h3 className="text-papa-gold text-[10px] font-mono font-bold mb-2 uppercase tracking-[0.2em]">Текущая Миссия: 64 года</h3>
              <p className="text-slate-200 text-sm leading-relaxed italic">&quot;Наслаждаться плодами великих строек, обуздать нейросети и быть опорой клана.&quot;</p>
            </div>
          </motion.div>

          {/* New Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            <div className="text-slate-400 font-mono text-[10px] uppercase tracking-widest text-center md:text-left">
              Инициализация протокола исследования...
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

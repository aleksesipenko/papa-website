"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { StatBar } from "@/components/ui/StatBar";
import { PAPAOS_ASSETS } from "@/data/papaosAssets";
import { Hammer, Brain, Heart, Zap } from "lucide-react";

export function CharacterSheet() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-papa-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-papa-blue/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-12 max-w-5xl mx-auto"
        >
          <div className="text-center space-y-3">
            <h2 className="font-heading text-3xl md:text-4xl text-papa-gold uppercase tracking-wider">
              Лист Персонажа
            </h2>
            <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.2em]">
              Character_Sheet_v64.0
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full md:w-1/3"
            >
              <div className={`relative ${PAPAOS_ASSETS.baseCanon.aspectRatio} rounded-2xl overflow-hidden border-4 border-papa-gold/30 shadow-[0_0_50px_rgba(251,191,36,0.2)] bg-slate-800`}>
                <Image
                  src={PAPAOS_ASSETS.baseCanon.src}
                  alt={PAPAOS_ASSETS.baseCanon.label || "Базовый канон"}
                  fill
                  className="object-cover"
                  style={{ objectPosition: PAPAOS_ASSETS.baseCanon.objectPosition }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                  <h3 className="font-heading text-3xl text-papa-gold drop-shadow-lg mb-1">
                    ДМИТРИЙ
                  </h3>
                  <div className="inline-block px-3 py-1 bg-papa-gold/20 border border-papa-gold/50 rounded text-xs font-bold tracking-widest text-papa-gold-500">
                    ПАЛАДИН СЕМЬИ
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1 bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-slate-800 relative overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
                <motion.div
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="h-20 w-full bg-gradient-to-b from-transparent via-papa-gold/40 to-transparent"
                />
              </div>

              <div className="space-y-6">
                <StatBar
                  label="Мастер Строительства"
                  value={99}
                  icon={<Hammer className="w-4 h-4" />}
                />
                <StatBar
                  label="Интеллект"
                  value={85}
                  color="bg-blue-500"
                  icon={<Brain className="w-4 h-4" />}
                />
                <StatBar
                  label="Харизма"
                  value={100}
                  color="bg-purple-500"
                  icon={<Heart className="w-4 h-4" />}
                />
                <StatBar
                  label="Выносливость"
                  value={90}
                  color="bg-green-500"
                  icon={<Zap className="w-4 h-4" />}
                />
              </div>

              <div className="mt-10 p-5 bg-slate-900/50 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                <h4 className="text-papa-gold text-[10px] font-mono font-bold mb-2 uppercase tracking-[0.2em]">
                  Текущая Миссия
                </h4>
                <p className="text-slate-200 text-sm leading-relaxed italic">
                  &quot;Наслаждаться плодами великих строек...&quot;
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

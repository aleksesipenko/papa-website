"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, Lock, Star, Trophy, Shield, Sword, Crown, Scroll } from "lucide-react";
import { timelineEvents } from "@/data/timeline";

const iconMap = {
  star: Star,
  trophy: Trophy,
  shield: Shield,
  sword: Sword,
  crown: Crown,
  scroll: Scroll
};

export function QuestTimeline() {
  return (
    <section className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-3xl text-papa-gold mb-2 text-center">Временная Линия</h2>

        <div className="flex items-center justify-center gap-2 mb-12 text-slate-400 animate-pulse">
           <span className="text-sm">Листай вниз, чтобы узнать историю</span>
           <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
           </svg>
        </div>

        <div className="relative border-l-2 border-slate-700 ml-4 md:ml-0 space-y-12">
          {timelineEvents.map((event, index) => {
            const Icon = iconMap[event.icon];
            const isCompleted = event.status === "completed";
            const isActive = event.status === "active";
            const isLocked = event.status === "locked";

            return (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                <div className={`absolute left-[-9px] top-0 bg-slate-900 ${isActive ? "text-papa-gold animate-pulse" : isLocked ? "text-slate-600" : "text-papa-gold"}`}>
                  {isCompleted ? <CheckCircle2 /> : isActive ? <Circle /> : <Lock />}
                </div>

                <div className="md:grid md:grid-cols-[100px_1fr] gap-4 items-start">
                  <div className="text-slate-500 font-mono text-sm pt-1">{event.year}</div>
                  <div className={`bg-slate-800 p-6 rounded-lg border ${isActive ? "border-papa-gold/70" : isLocked ? "border-slate-700" : "border-slate-700"} hover:border-papa-gold/50 transition-colors`}>
                    <div className="flex items-start gap-3">
                      <Icon className={`w-6 h-6 flex-shrink-0 mt-1 ${isActive ? "text-papa-gold animate-pulse" : isLocked ? "text-slate-600" : "text-papa-gold"}`} />
                      <div className="flex-1">
                        <h3 className={`font-heading text-xl mb-2 ${isActive ? "text-white animate-pulse" : isLocked ? "text-slate-500" : "text-papa-gold"}`}>
                          {event.title}
                        </h3>
                        <p className={`text-slate-300 ${isLocked ? "text-slate-600 italic" : ""}`}>
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

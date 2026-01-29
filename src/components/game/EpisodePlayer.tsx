"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { Episode, Scene, Choice } from "@/types/game";

interface EpisodePlayerProps {
  episode: Episode;
  scene: Scene;
  heroScore: number;
  onChoice: (choice: Choice) => void;
}

export function EpisodePlayer({ episode, scene, heroScore, onChoice }: EpisodePlayerProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="fixed top-4 right-4 bg-papa-card-glass/90 backdrop-blur-md px-5 py-2.5 rounded-xl z-10 border border-papa-gold/30 shadow-glow-gold">
        <span className="text-sm font-mono text-papa-gold font-semibold">Геройство: {heroScore}</span>
      </div>

      <div className="flex-1 container mx-auto px-4 py-6 max-w-6xl flex flex-col">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-3xl md:text-4xl text-papa-gold text-center mb-6 drop-shadow-lg flex-shrink-0"
        >
          {episode.title}
        </motion.h1>

        <AnimatePresence mode="wait">
          <motion.div
            key={scene.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-0"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-glow-gold bg-papa-card border border-papa-gold/20 min-h-[280px] lg:min-h-[400px] flex items-center justify-center">
              <Image
                src={scene.image}
                alt={episode.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-contain p-2"
                priority
              />
            </div>

            <div className="flex flex-col gap-4 min-h-0">
              <div className="bg-papa-card-glass backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-papa-gold/20 flex-1 overflow-y-auto">
                <p className="text-foreground/95 leading-relaxed text-base md:text-lg">
                  {scene.text}
                </p>
              </div>

              <div className="flex flex-col gap-3 flex-shrink-0">
                {scene.choices.map((choice, index) => (
                  <motion.button
                    key={choice.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onChoice(choice)}
                    className="px-5 py-3.5 bg-gradient-to-r from-papa-gold-500 to-papa-gold text-black font-bold rounded-xl
                             hover:from-papa-gold-600 hover:to-papa-gold-500 transition-all duration-300
                             shadow-glow-gold hover:shadow-glow-gold-lg text-center text-sm md:text-base"
                  >
                    {choice.text}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

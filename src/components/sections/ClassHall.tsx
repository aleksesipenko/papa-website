"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PAPAOS_ASSETS } from "@/data/papaosAssets";

const characters = [
  PAPAOS_ASSETS.builderPaladin,
  PAPAOS_ASSETS.grillMaster,
  PAPAOS_ASSETS.worldExplorer,
  PAPAOS_ASSETS.king,
  PAPAOS_ASSETS.astronaut,
];

export function ClassHall() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl md:text-5xl text-papa-gold mb-4 text-center"
        >
          Зал Классов
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 mb-12 text-center max-w-2xl mx-auto"
        >
          Великие формы папы, разблокированные в хронологии достижений
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {characters.map((character, index) => (
            <motion.div
              key={character.label}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square bg-papa-card border-2 border-slate-700 rounded-xl overflow-hidden group cursor-pointer shadow-lg"
            >
              <Image
                src={character.src}
                alt={character.label || ""}
                fill
                className="object-cover group-hover:opacity-70 transition-opacity"
                style={{ objectPosition: character.objectPosition || "center top" }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 w-full p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-heading text-papa-gold text-lg mb-1 text-center">
                  {character.label}
                </h3>
                <div className="flex justify-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-papa-gold" />
                  <div className="w-2 h-2 rounded-full bg-papa-gold/50" />
                  <div className="w-2 h-2 rounded-full bg-papa-gold/30" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { memories, Memory } from "@/data/memories";
import { MemoryModal } from "@/components/MemoryModal";
import { Lock, Unlock } from "lucide-react";

export function MemoryVault() {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const [filter, setFilter] = useState("all");

  const categories = ["all", ...Array.from(new Set(memories.map(m => m.category.toLowerCase())))];

  const filteredMemories = filter === "all"
    ? memories
    : memories.filter(m => m.category.toLowerCase() === filter);

  const categoryLabels: Record<string, string> = {
    all: "Все",
    family: "Семья",
    celebration: "Праздник",
    travel: "Путешествия",
    portrait: "Портрет",
    hobby: "Хобби",
    humor: "Юмор",
    lifestyle: "Стиль жизни",
  };

  return (
    <section className="py-20 bg-slate-950 min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-papa-gold/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-4 uppercase tracking-tighter">
            Хранилище <span className="text-papa-gold">Воспоминаний</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Коллекция из 25 легендарных артефактов из жизни Дмитрия
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full border text-xs font-mono uppercase tracking-widest transition-all ${filter === cat
                ? "bg-papa-gold border-papa-gold text-slate-950 shadow-[0_0_20px_rgba(251,191,36,0.4)] font-bold"
                : "bg-slate-900 border-slate-700 text-slate-400 hover:border-papa-gold/50 hover:text-slate-300"
                }`}
            >
              {categoryLabels[cat] || cat}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredMemories.map((memory, index) => (
              <motion.div
                key={memory.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedMemory(memory)}
              >
                <div className="relative aspect-[3/4] bg-slate-900 border-2 border-slate-800 rounded-xl overflow-hidden group-hover:border-papa-gold transition-colors shadow-2xl">
                  <Image
                    src={memory.src}
                    alt={memory.title}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500 scale-105 group-hover:scale-100"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <p className="text-[10px] font-mono text-papa-gold mb-1 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                      #{memory.id.toString().padStart(3, '0')}
                    </p>
                    <h3 className="text-white font-heading text-sm uppercase truncate leading-tight mb-1">
                      {memory.title}
                    </h3>
                    <p className="text-slate-400 text-[10px] font-mono uppercase tracking-wider truncate">
                      {memory.category}
                    </p>
                  </div>

                  <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700 group-hover:border-papa-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:rotate-12">
                    <Unlock className="w-4 h-4 text-papa-gold" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredMemories.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Lock className="w-16 h-16 text-slate-700 mx-auto mb-4" />
            <p className="text-slate-500 font-mono text-lg">Артефакты не найдены</p>
          </motion.div>
        )}
      </div>

      <MemoryModal
        memory={selectedMemory}
        onClose={() => setSelectedMemory(null)}
      />
    </section>
  );
}

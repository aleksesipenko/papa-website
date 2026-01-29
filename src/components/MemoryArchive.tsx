"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { memories, Memory } from "@/data/memories";
import { MemoryModal } from "./MemoryModal";
import { Search, Database } from "lucide-react";

export function MemoryArchive() {
    const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
    const [filter, setFilter] = useState("all");

     const categories = ["all", "Все", ...Array.from(new Set(memories.map(m => m.category.toLowerCase())))];

    const filteredMemories = filter === "all"
        ? memories
        : memories.filter(m => m.category.toLowerCase() === filter);

    return (
        <section className="py-24 bg-slate-950 min-h-screen relative overflow-hidden" id="archive">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-papa-gold/50 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 rounded-full mb-6"
                    >
                        <Database className="w-4 h-4 text-papa-gold" />
                        <span className="text-papa-gold text-xs font-mono uppercase tracking-widest">База Данных: Жизненные_Архивы_v6.4</span>
                    </motion.div>

                    <h2 className="font-heading text-4xl md:text-5xl text-white mb-6 uppercase tracking-tighter">
                        Архивы <span className="text-papa-gold">Дмитрия</span>
                    </h2>

                    <p className="text-slate-400 max-w-2xl text-lg mb-10">
                        Исследуйте коллекцию из 25 легендарных артефактов, собранных за десятилетия славных походов и семейных достижений.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full border text-xs font-mono uppercase tracking-widest transition-all ${filter === cat
                                    ? "bg-papa-gold border-papa-gold text-slate-950 shadow-[0_0_20px_rgba(251,191,36,0.4)]"
                                    : "bg-slate-900 border-slate-700 text-slate-400 hover:border-papa-gold/50"
                                    }`}
                            >
                                {cat === "all" ? "Все данные" : cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredMemories.map((memory, index) => (
                            <motion.div
                                key={memory.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="group cursor-pointer"
                                onClick={() => setSelectedMemory(memory)}
                            >
                                <div className="relative aspect-[3/4] bg-slate-900 border border-slate-800 rounded-xl overflow-hidden group-hover:border-papa-gold transition-colors shadow-2xl">
                                    <Image
                                        src={memory.src}
                                        alt={memory.title}
                                        fill
                                        className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 scale-105 group-hover:scale-100"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                                    <div className="absolute bottom-0 left-0 w-full p-4">
                                        <p className="text-[10px] font-mono text-papa-gold mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            RECORD_ID_{memory.id.toString().padStart(3, '0')}
                                        </p>
                                        <h3 className="text-white font-heading text-sm uppercase truncate leading-tight">
                                            {memory.title}
                                        </h3>
                                    </div>

                                    {/* Icon Badge */}
                                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity group-hover:rotate-12">
                                        <Search className="w-4 h-4 text-papa-gold" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            <MemoryModal
                memory={selectedMemory}
                onClose={() => setSelectedMemory(null)}
            />
        </section>
    );
}

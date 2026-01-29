"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Tag, Info } from "lucide-react";
import Image from "next/image";
import { Memory } from "@/data/memories";

interface MemoryModalProps {
    memory: Memory | null;
    onClose: () => void;
}

export function MemoryModal({ memory, onClose }: MemoryModalProps) {
    if (!memory) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/90 backdrop-blur-md"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-4xl bg-slate-900 border border-papa-gold/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(251,191,36,0.1)]"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div className="grid md:grid-cols-2">
                        <div className="relative aspect-square md:aspect-auto h-full min-h-[400px]">
                            <Image
                                src={memory.src}
                                alt={memory.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <div className="inline-block px-3 py-1 bg-papa-gold/20 text-papa-gold text-[10px] font-bold tracking-widest uppercase rounded mb-4 w-fit">
                                System Artifact #{memory.id}
                            </div>

                            <h2 className="font-heading text-3xl text-white mb-6 uppercase tracking-tight">
                                {memory.title}
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <Calendar className="w-5 h-5 text-papa-gold shrink-0 mt-1" />
                                    <div>
                                        <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-1">Времяштамп</p>
                                        <p className="text-slate-200">{memory.date}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Tag className="w-5 h-5 text-papa-gold shrink-0 mt-1" />
                                    <div>
                                        <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-1">Классификация</p>
                                        <p className="text-slate-200">{memory.category}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Info className="w-5 h-5 text-papa-gold shrink-0 mt-1" />
                                    <div>
                                        <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-1">Анализ</p>
                                        <p className="text-slate-300 leading-relaxed italic">
                                            &quot;{memory.description}&quot;
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-slate-800">
                                <p className="text-slate-500 text-[10px] font-mono">
                                    ИСТОЧНИК: papa_website_top25_экспорт
                                    <br />
                                    ШИФРОВАНИЕ: AES-256-PAPA-GOLD
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}

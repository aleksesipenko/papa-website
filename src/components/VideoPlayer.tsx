"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState, useEffect } from "react"; // Added useState and useEffect
import Image from "next/image"; // Added Image import

interface VideoPlayerProps {
    isOpen: boolean;
    onClose: () => void;
    videoSrc: string;
    coverSrc?: string; // New prop for stylized art
    title: string;
    description: string;
}

export function VideoPlayer({ isOpen, onClose, videoSrc, coverSrc, title, description }: VideoPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    // Reset state when opening new video
    useEffect(() => {
        if (isOpen) setIsPlaying(!coverSrc);
    }, [isOpen, coverSrc]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-4xl bg-slate-900 border-2 border-papa-gold rounded-xl overflow-hidden shadow-[0_0_50px_rgba(251,191,36,0.2)]"
                    >
                        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950">
                            <h3 className="font-heading text-xl text-papa-gold">{title}</h3>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="relative aspect-video bg-black group">
                            {!isPlaying && coverSrc ? (
                                <div className="relative w-full h-full">
                                    <Image
                                        src={coverSrc}
                                        alt="Quest Art"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setIsPlaying(true)}
                                            className="bg-papa-gold text-slate-900 px-8 py-3 rounded-full font-heading text-xl shadow-[0_0_20px_rgba(251,191,36,0.5)] border-2 border-white/20 hover:border-white transition-colors"
                                        >
                                            ▶ Открыть Воспоминание
                                        </motion.button>
                                    </div>
                                </div>
                            ) : (
                                <video
                                    src={videoSrc}
                                    controls
                                    autoPlay
                                    className="w-full h-full"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            )}
                        </div>

                        <div className="p-6 bg-slate-900">
                            <p className="text-slate-300 text-lg leading-relaxed">{description}</p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

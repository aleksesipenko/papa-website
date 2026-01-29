"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { VideoPlayer } from "./VideoPlayer";
import { Lock } from "lucide-react";
import { quests as initialQuests, Quest } from "@/data/quests";

export function QuestMap() {
    const [quests, setQuests] = useState(initialQuests);
    const [activeVideo, setActiveVideo] = useState<Quest | null>(null);

    const handleQuestClick = (quest: Quest) => {
        if (quest.isLocked) return;
        setActiveVideo(quest);
    };

    const handleVideoComplete = () => {
        // Determine which quest to unlock next
        const currentIdx = quests.findIndex(q => q.id === activeVideo?.id);
        if (currentIdx !== -1 && currentIdx < quests.length - 1) {
            const nextQuestId = quests[currentIdx + 1].id;
            setQuests(prev => prev.map(q =>
                q.id === nextQuestId ? { ...q, isLocked: false } : q
            ));
        }
    };

    return (
        <section className="relative w-full h-screen bg-slate-950 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 z-0">
                {/* Background Map - blurred slightly to focus on UI */}
                <div className="relative w-full h-full opacity-50 contrast-125">
                    <Image
                        src="/assets/game/map_bg.png"
                        alt="World Map"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
            </div>

            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col">
                <header className="py-8 text-center">
                    <div className="inline-block p-1 bg-gradient-to-r from-transparent via-papa-gold/50 to-transparent mb-2">
                        <h1 className="font-heading text-4xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">Карта Приключений</h1>
                    </div>
                    <p className="text-slate-300 font-mono text-sm bg-black/50 inline-block px-4 py-1 rounded-full backdrop-blur-md">
                        Исследуй мир, чтобы открыть воспоминания
                    </p>
                </header>

                <div className="flex-1 relative w-full max-w-5xl mx-auto my-8 border-[12px] border-slate-800 rounded-xl bg-[#4a90e2] shadow-2xl overflow-hidden box-content relative group cursor-grab active:cursor-grabbing">
                    {/* Inner Map Container - In a real app this would be draggable/zoomable */}
                    <Image
                        src="/assets/game/map_bg.png"
                        alt="Game Map"
                        fill
                        className="object-cover pixelated"
                    />

                    {/* Quest Markers */}
                    {quests.map((quest) => (
                        <motion.button
                            key={quest.id}
                            onClick={() => handleQuestClick(quest)}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className={`absolute w-16 h-16 transform -translate-x-1/2 -translate-y-1/2 focus:outline-none group/marker
                 ${quest.isLocked ? 'grayscale opacity-70 cursor-not-allowed' : 'cursor-pointer'}
               `}
                            style={{ left: `${quest.x}%`, top: `${quest.y}%` }}
                        >
                            {/* Marker Pin Effect */}
                            {!quest.isLocked && (
                                <div className="absolute inset-0 bg-papa-gold/50 rounded-full animate-ping" />
                            )}

                            <div className="relative w-full h-full bg-slate-900/80 backdrop-blur-sm rounded-lg border-2 border-papa-gold p-2 shadow-lg hover:bg-slate-800 transition-colors">
                                <Image
                                    src={quest.icon}
                                    alt={quest.title}
                                    width={64}
                                    height={64}
                                    className="w-full h-full object-contain pixelated"
                                />
                                {quest.isLocked && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-md">
                                        <Lock className="w-6 h-6 text-slate-400" />
                                    </div>
                                )}
                            </div>

                            {/* Tooltip */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-slate-900/90 text-white text-xs p-3 rounded-lg border border-slate-700 opacity-0 group-hover/marker:opacity-100 transition-opacity pointer-events-none z-20">
                                <h3 className={`font-bold mb-1 ${quest.isLocked ? 'text-slate-400' : 'text-papa-gold'}`}>{quest.title}</h3>
                                <p className="text-slate-400 leading-tight">{quest.isLocked ? 'Заблокировано' : quest.description}</p>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>

            {activeVideo && (
                <VideoPlayer
                    isOpen={true}
                    onClose={() => {
                        handleVideoComplete(); // Unlock next on close (simplified logic for now)
                        setActiveVideo(null);
                    }}
                    videoSrc={activeVideo.videoSrc}
                    coverSrc={activeVideo.coverSrc}
                    title={activeVideo.title}
                    description={activeVideo.description}
                />
            )}
        </section>
    );
}

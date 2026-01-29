"use client";

import { motion } from "framer-motion";
import { Episode, GameState } from "@/types/game";

interface StatsScreenProps {
    gameState: GameState;
    episodes: Episode[];
    onContinue: () => void;
    onRestart: () => void;
}

export function StatsScreen({ gameState, episodes, onContinue, onRestart }: StatsScreenProps) {
    // Calculate stats
    const totalScenes = episodes.reduce((acc, ep) => acc + ep.scenes.length, 0);
    const visitedScenesCount = new Set(gameState.choicesHistory.map(h => h.sceneId)).size + 1; // +1 for the last scene
    const explorationPercent = Math.round((visitedScenesCount / totalScenes) * 100);

    // Find alternative paths for the first few episodes
    const missedOpportunities = episodes.flatMap(episode => {
        // Check choices made in this episode
        const episodeChoices = gameState.choicesHistory.filter(h => h.episodeId === episode.id);

        return episodeChoices.map(historyItem => {
            const scene = episode.scenes.find(s => s.id === historyItem.sceneId);
            if (!scene) return null;

            const takenChoice = scene.choices.find(c => c.id === historyItem.choiceId);
            const missedChoice = scene.choices.find(c => c.id !== historyItem.choiceId);

            if (!takenChoice || !missedChoice) return null;

            return {
                episodeTitle: episode.title,
                sceneText: scene.text.substring(0, 50) + "...",
                takenPath: takenChoice.text,
                missedPath: missedChoice.text,
                missedPoints: missedChoice.heroPoints
            };
        }).filter(Boolean);
    }).slice(0, 3); // Show top 3 missed opportunities

    return (
        <motion.div
            className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-full max-w-2xl bg-papa-card-glass backdrop-blur-xl rounded-2xl p-8 border border-papa-gold/30 shadow-glow-gold"
            >
                <h2 className="text-3xl font-heading text-papa-gold text-center mb-6 drop-shadow-lg">
                    Ваш Путь
                </h2>

                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-papa-card/50 rounded-xl p-4 text-center border border-papa-gold/10">
                        <div className="text-4xl font-bold text-foreground mb-1">
                            {gameState.heroScore}
                        </div>
                        <div className="text-sm text-papa-gold font-mono uppercase">Очки Героя</div>
                    </div>
                    <div className="bg-papa-card/50 rounded-xl p-4 text-center border border-papa-gold/10">
                        <div className="text-4xl font-bold text-foreground mb-1">
                            {explorationPercent}%
                        </div>
                        <div className="text-sm text-papa-gold font-mono uppercase">Исследовано</div>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-heading text-white mb-4 border-b border-papa-gold/20 pb-2">
                        Упущенные Возможности
                    </h3>
                    <div className="space-y-4">
                        {missedOpportunities.map((opp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4 + (idx * 0.1) }}
                                className="bg-black/20 rounded-lg p-4 border-l-2 border-papa-gold/50"
                            >
                                <div className="text-xs text-papa-gold/70 mb-1 font-mono uppercase">{opp?.episodeTitle}</div>
                                <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm">
                                    <span className="text-foreground/60 line-through decoration-papa-gold/50 decoration-2">
                                        {opp?.takenPath}
                                    </span>
                                    <span className="hidden md:inline text-papa-gold">→</span>
                                    <span className="text-white font-semibold">
                                        {opp?.missedPath}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <p className="text-center text-xs text-foreground/50 mt-4 italic">
                        Каждое решение открывает новые грани Папы...
                    </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                        onClick={onRestart}
                        className="flex-1 bg-transparent border-2 border-papa-gold hover:bg-papa-gold/10 text-papa-gold font-heading text-lg py-3 px-6 rounded-xl transition-all uppercase tracking-wider"
                    >
                        Переиграть
                    </button>
                    <button
                        onClick={onContinue}
                        className="flex-1 bg-gradient-to-r from-papa-gold-500 to-papa-gold hover:from-papa-gold-600 hover:to-papa-gold-500 text-black font-heading text-lg py-3 px-6 rounded-xl transition-all shadow-glow-gold hover:shadow-glow-gold-lg uppercase tracking-wider"
                    >
                        К Поздравлению
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
}

"use client";

import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import type { Episode, Choice, GameState } from "@/types/game";
import { IntroScreen } from "./IntroScreen";
import { EpisodePlayer } from "./EpisodePlayer";
import { StatsScreen } from "./StatsScreen";

interface TextAdventureEngineProps {
  episodes: Episode[];
}

export function TextAdventureEngine({ episodes }: TextAdventureEngineProps) {
  const [gameState, setGameState] = useState<GameState>({
    phase: "intro",
    currentEpisodeIndex: 0,
    currentSceneId: episodes[0]?.startSceneId || "",
    heroScore: 0,
    completedEpisodes: [],
    choicesHistory: [],
  });

  const handleStart = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      phase: "playing",
      currentSceneId: episodes[0].startSceneId,
    }));
  }, [episodes]);

  const handleChoice = useCallback((choice: Choice) => {
    setGameState(prev => {
      const newScore = prev.heroScore + choice.heroPoints;

      // Record choice
      const newHistory = [
        ...prev.choicesHistory,
        {
          episodeId: episodes[prev.currentEpisodeIndex].id,
          sceneId: prev.currentSceneId,
          choiceId: choice.id
        }
      ];

      if (choice.nextSceneId === "end") {
        const currentEpisode = episodes[prev.currentEpisodeIndex];
        const newCompletedEpisodes = [...prev.completedEpisodes, currentEpisode.id];
        const nextEpisodeIndex = prev.currentEpisodeIndex + 1;

        if (nextEpisodeIndex >= episodes.length) {
          return {
            ...prev,
            heroScore: newScore,
            completedEpisodes: newCompletedEpisodes,
            choicesHistory: newHistory,
            phase: "stats", // Go to stats first
          };
        }

        return {
          ...prev,
          heroScore: newScore,
          completedEpisodes: newCompletedEpisodes,
          currentEpisodeIndex: nextEpisodeIndex,
          currentSceneId: episodes[nextEpisodeIndex].startSceneId,
          choicesHistory: newHistory,
        };
      }

      return {
        ...prev,
        heroScore: newScore,
        currentSceneId: choice.nextSceneId,
        choicesHistory: newHistory,
      };
    });
  }, [episodes]);

  const handleRestart = useCallback(() => {
    setGameState({
      phase: "intro",
      currentEpisodeIndex: 0,
      currentSceneId: episodes[0]?.startSceneId || "",
      heroScore: 0,
      completedEpisodes: [],
      choicesHistory: [],
    });
  }, [episodes]);

  const handleContinueToComplete = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      phase: "complete"
    }));
  }, []);

  const currentEpisode = episodes[gameState.currentEpisodeIndex];
  const currentScene = currentEpisode?.scenes.find(s => s.id === gameState.currentSceneId);

  const getScoreMessage = (score: number) => {
    if (score >= 61) return { title: "КОРОЛЬ ВСЕХ КОРОЛЕЙ!", message: "Ты превзошёл все ожидания!" };
    if (score >= 31) return { title: "Настоящий герой!", message: "Отличное приключение!" };
    return { title: "Легенда в начале пути", message: "Попробуй ещё раз!" };
  };

  return (
    <AnimatePresence mode="wait">
      {gameState.phase === "intro" && (
        <IntroScreen key="intro" onStart={handleStart} />
      )}

      {gameState.phase === "playing" && currentEpisode && currentScene && (
        <EpisodePlayer
          key={`${currentEpisode.id}-${currentScene.id}`}
          episode={currentEpisode}
          scene={currentScene}
          heroScore={gameState.heroScore}
          onChoice={handleChoice}
        />
      )}

      {gameState.phase === "stats" && (
        <StatsScreen
          key="stats"
          gameState={gameState}
          episodes={episodes}
          onContinue={handleContinueToComplete}
          onRestart={handleRestart}
        />
      )}

      {gameState.phase === "complete" && (
        <CompletionScreen
          heroScore={gameState.heroScore}
          onRestart={handleRestart}
          getScoreMessage={getScoreMessage}
        />
      )}
    </AnimatePresence>
  );
}

function CompletionScreen({ heroScore, onRestart, getScoreMessage }: { heroScore: number, onRestart: () => void, getScoreMessage: (s: number) => { title: string, message: string } }) {
  useEffect(() => {
    // Fire confetti!
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: NodeJS.Timeout = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-papa-card-glass backdrop-blur-xl rounded-2xl p-8 max-w-lg text-center border border-papa-gold/30 shadow-glow-gold-lg"
      >
        <motion.h2
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="text-6xl mb-4"
        >
          🎉
        </motion.h2>
        <h2 className="text-4xl font-heading text-papa-gold mb-3 drop-shadow-lg">
          {getScoreMessage(heroScore).title}
        </h2>
        <p className="text-foreground/80 mb-4 text-lg">
          {getScoreMessage(heroScore).message}
        </p>
        <p className="text-3xl font-bold text-papa-gold mb-6 drop-shadow-md">
          Геройство: {heroScore}
        </p>
        <p className="text-2xl text-foreground mb-8">
          С Днём Рождения, Папа! 🎂
        </p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onRestart}
          className="w-full bg-gradient-to-r from-papa-gold-500 to-papa-gold hover:from-papa-gold-600 hover:to-papa-gold-500 text-black font-heading text-xl py-4 px-8 rounded-xl transition-all duration-300 font-bold uppercase tracking-wider shadow-glow-gold hover:shadow-glow-gold-lg"
        >
          Сыграть снова
        </motion.button>
      </motion.div>
    </div>
  );
}


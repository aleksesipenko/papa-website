"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "@/components/LoadingScreen";
import { TextAdventureEngine } from "@/components/game/TextAdventureEngine";
import { episodes } from "@/data/episodes";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-papa-gold selection:text-black">
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <TextAdventureEngine episodes={episodes} />
      )}
    </main>
  );
}

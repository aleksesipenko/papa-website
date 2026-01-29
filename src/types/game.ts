// Choice - a player decision
export interface Choice {
  id: string;
  text: string;           // Button text (Russian)
  nextSceneId: string;    // Scene to navigate to (or "end" for episode end)
  heroPoints: number;     // Points to add (10-30)
}

// Scene - one screen of gameplay
export interface Scene {
  id: string;
  text: string;           // Narrative text (Russian, 2-3 paragraphs)
  image: string;          // Path to image (e.g., "/assets/14_king_crown_humor.jpeg")
  choices: Choice[];      // 2 choices per scene
}

// Episode - a complete story arc
export interface Episode {
  id: string;
  title: string;          // Episode title (Russian)
  description: string;    // Brief description
  scenes: Scene[];        // 3-4 scenes per episode
  startSceneId: string;   // ID of first scene
}

// GameState - current game state
export interface GameState {
  phase: "intro" | "playing" | "stats" | "complete";
  currentEpisodeIndex: number;
  currentSceneId: string;
  heroScore: number;
  completedEpisodes: string[];
  choicesHistory: Array<{
    episodeId: string;
    sceneId: string;
    choiceId: string;
  }>;
}

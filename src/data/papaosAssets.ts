// Asset mapping for PapaOS generated images
// All paths are relative to /public root (served from /assets/papaos/)

export interface PapaOSAsset {
  src: string;
  aspectRatio?: string; // Tailwind aspect-* class
  objectPosition?: string; // For non-centered crops
  label?: string; // Russian label
}

export const PAPAOS_ASSETS: Record<string, PapaOSAsset> = {
  // === UI Assets ===
  poster: {
    src: "/assets/papaos/ui/ui_410_papaos_poster/ui_410_papaos_poster.png",
    aspectRatio: "aspect-[16/9]",
    objectPosition: "center",
    label: "ПапаОС Постер"
  },
  inventoryIcons: {
    src: "/assets/papaos/ui/ui_400_inventory_icons/ui_400_inventory_icons.png",
    aspectRatio: "aspect-square",
    objectPosition: "center",
    label: "Иконки инвентаря"
  },

  // === Characters ===
  baseCanon: {
    src: "/assets/papaos/characters/chr_001_base_canon/chr_001_base_canon.png",
    aspectRatio: "aspect-square",
    objectPosition: "center top",
    label: "Базовый канон"
  },
  builderPaladin: {
    src: "/assets/papaos/characters/chr_010_builder_paladin/chr_010_builder_paladin.png",
    aspectRatio: "aspect-square",
    objectPosition: "center top",
    label: "Строитель-Паладин"
  },
  grillMaster: {
    src: "/assets/papaos/characters/chr_020_grill_master/chr_020_grill_master.png",
    aspectRatio: "aspect-square",
    objectPosition: "center top",
    label: "Мастер Шашлыка"
  },
  worldExplorer: {
    src: "/assets/papaos/characters/chr_030_world_explorer/chr_030_world_explorer.png",
    aspectRatio: "aspect-square",
    objectPosition: "center top",
    label: "Мировой Исследователь"
  },
  king: {
    src: "/assets/papaos/characters/wif_310_king/wif_310_king.png",
    aspectRatio: "aspect-square",
    objectPosition: "center top",
    label: "Король"
  },
  astronaut: {
    src: "/assets/papaos/characters/wif_300_astronaut/wif_300_astronaut.png",
    aspectRatio: "aspect-square",
    objectPosition: "center top",
    label: "Космонавт"
  },

  // === Environments ===
  homeFortress: {
    src: "/assets/papaos/environments/env_100_home_fortress/env_100_home_fortress.png",
    aspectRatio: "aspect-[16/9] md:aspect-[4/3]",
    objectPosition: "center",
    label: "Домашняя Крепость"
  },
  caucasusZone: {
    src: "/assets/papaos/environments/env_110_caucasus_zone/env_110_caucasus_zone.png",
    aspectRatio: "aspect-[16/9] md:aspect-[4/3]",
    objectPosition: "center",
    label: "Зона Кавказа"
  },
  dominicanZone: {
    src: "/assets/papaos/environments/env_120_dominican_zone/env_120_dominican_zone.png",
    aspectRatio: "aspect-[16/9] md:aspect-[4/3]",
    objectPosition: "center",
    label: "Зона Доминиканы"
  },

  // === Scenes ===
  grillTriumph: {
    src: "/assets/papaos/scenes/scn_200_grill_triumph/scn_200_grill_triumph.png",
    aspectRatio: "aspect-[16/9]",
    objectPosition: "center",
    label: "Триумф Шашлыки"
  },
  mountainSummit: {
    src: "/assets/papaos/scenes/scn_210_mountain_summit/scn_210_mountain_summit.png",
    aspectRatio: "aspect-[16/9]",
    objectPosition: "center",
    label: "Вершина Горы"
  },
  partyToast: {
    src: "/assets/papaos/scenes/scn_220_party_toast/scn_220_party_toast.png",
    aspectRatio: "aspect-[16/9]",
    objectPosition: "center",
    label: "Тост на Вечеринке"
  },
  astronautScene: {
    src: "/assets/papaos/scenes/wif_300_astronaut/wif_300_astronaut.png",
    aspectRatio: "aspect-[16/9]",
    objectPosition: "center",
    label: "Космическая Сцена"
  },

  // === Game Scenes ===
  gameBizDelivery: {
    src: "/assets/papaos/game_scenes/game_biz_delivery.png",
    aspectRatio: "aspect-[16/9]",
    objectPosition: "center",
    label: "Объявление бесплатной доставки"
  },
  gameBizFinale: {
    src: "/assets/papaos/game_scenes/game_biz_finale.png",
    aspectRatio: "aspect-[16/9]",
    objectPosition: "center",
    label: "Бизнес-Легенда"
  },
  gameBizOffice: {
    src: "/assets/papaos/game_scenes/game_biz_office.png",
    aspectRatio: "aspect-[16/9]",
    objectPosition: "center",
    label: "Офис CEO"
  },
  gameBizShashlik: {
    src: "/assets/papaos/game_scenes/game_biz_shashlik.png",
    aspectRatio: "aspect-[16/9]",
    objectPosition: "center",
    label: "Империя Шашлыка"
  },
  gameKingFeast: {
    src: "/assets/papaos/game_scenes/game_king_feast.png",
    aspectRatio: "aspect-[16/9]",
    objectPosition: "center",
    label: "Королевский Пир"
  },
  gameKingGrill: {
    src: "/assets/papaos/game_scenes/game_king_grill.png",
    aspectRatio: "aspect-[16/9]",
    objectPosition: "center",
    label: "Королевский Шашлык"
  },
  gameSpaceFinale: {
    src: "/assets/papaos/game_scenes/game_space_finale.png",
    aspectRatio: "aspect-[16/9]",
    objectPosition: "center",
    label: "Триумф Командира"
  },
  gameSpaceGrill: {
    src: "/assets/papaos/game_scenes/game_space_grill.png",
    aspectRatio: "aspect-[16/9]",
    objectPosition: "center",
    label: "Космический Мангал"
  },
  gameSpacePlanet: {
    src: "/assets/papaos/game_scenes/game_space_planet.png",
    aspectRatio: "aspect-[16/9]",
    objectPosition: "center",
    label: "Космический Виноградник"
  },
};

export const CHARACTER_ASSETS = [
  PAPAOS_ASSETS.baseCanon,
  PAPAOS_ASSETS.builderPaladin,
  PAPAOS_ASSETS.grillMaster,
  PAPAOS_ASSETS.worldExplorer,
  PAPAOS_ASSETS.king,
  PAPAOS_ASSETS.astronaut,
];

export const ENVIRONMENT_ASSETS = [
  PAPAOS_ASSETS.homeFortress,
  PAPAOS_ASSETS.caucasusZone,
  PAPAOS_ASSETS.dominicanZone,
];

export const SCENE_ASSETS = [
  PAPAOS_ASSETS.grillTriumph,
  PAPAOS_ASSETS.mountainSummit,
  PAPAOS_ASSETS.partyToast,
  PAPAOS_ASSETS.astronautScene,
];

export const GAME_SCENE_ASSETS = [
  PAPAOS_ASSETS.gameBizDelivery,
  PAPAOS_ASSETS.gameBizFinale,
  PAPAOS_ASSETS.gameBizOffice,
  PAPAOS_ASSETS.gameBizShashlik,
  PAPAOS_ASSETS.gameKingFeast,
  PAPAOS_ASSETS.gameKingGrill,
  PAPAOS_ASSETS.gameSpaceFinale,
  PAPAOS_ASSETS.gameSpaceGrill,
  PAPAOS_ASSETS.gameSpacePlanet,
];

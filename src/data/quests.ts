export interface Quest {
  id: string;
  title: string;
  description: string;
  x: number;
  y: number;
  icon: string;
  videoSrc: string;
  coverSrc?: string;
  isLocked: boolean;
}

export const quests: Quest[] = [
  {
    id: "home",
    title: "Крепость Семьи",
    description: "Семья в самолёте, начало путешествия. Дмитрий, светловолосая женщина и девочка улыбаются в камеру.",
    x: 45,
    y: 55,
    icon: "/assets/game/icon_house.png",
    videoSrc: "/videos/intro_flight.mov",
    coverSrc: "/assets/game/cutscene_home.png",
    isLocked: false
  },
  {
    id: "travel",
    title: "Далекие Берега",
    description: "Доминикана. Дмитрий в футболке 'Si no has probado MAMA JUANA no has estado en DOMINICANA' показывает бутылку местного напитка.",
    x: 75,
    y: 30,
    icon: "/assets/game/icon_travel.png",
    videoSrc: "/videos/travel_mamajuana.mov",
    coverSrc: "/assets/game/cutscene_travel.png",
    isLocked: true
  },
  {
    id: "hobby",
    title: "Виноградники Мудрости",
    description: "Работа в теплице с виноградом. Дмитрий и мужчина разгружают багажник с большими стеклянными бутылями.",
    x: 25,
    y: 65,
    icon: "/assets/game/icon_hobby.png",
    videoSrc: "/videos/hobby_wine.mov",
    coverSrc: "/assets/game/cutscene_hobby.png",
    isLocked: true
  },
  {
    id: "party",
    title: "Зал Праздников",
    description: "Рождество. Семья собирается у ёлки и открывает большой картонный подарок. Радость и веселье.",
    x: 55,
    y: 20,
    icon: "/assets/game/icon_party.png",
    videoSrc: "/videos/christmas_gift.mov",
    coverSrc: "/assets/game/cutscene_party.png",
    isLocked: true
  },
  {
    id: "relax",
    title: "Спа Отдых",
    description: "Отдых в джакузи с подсветкой. Дмитрий и девочка расслабляются в горячей ванне с пузырьками.",
    x: 80,
    y: 70,
    icon: "/assets/game/icon_house.png",
    videoSrc: "/videos/jacuzzi_relax.mov",
    coverSrc: "/assets/game/cutscene_home.png",
    isLocked: true
  }
];

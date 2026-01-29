export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  status: "completed" | "active" | "locked";
  icon: "star" | "trophy" | "shield" | "sword" | "crown" | "scroll";
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: "1980-е",
    title: "Обучение Завершено",
    description: "Начало великого пути. Освоение базовых навыков.",
    status: "completed",
    icon: "scroll"
  },
  {
    year: "2017",
    title: "Секретная Миссия: Снежинка",
    description: "Успешное внедрение на новогоднюю вечеринку под прикрытием.",
    status: "completed",
    icon: "star"
  },
  {
    year: "2019",
    title: "Постройка Крепости",
    description: "Возведение фамильной цитадели своими руками.",
    status: "completed",
    icon: "shield"
  },
  {
    year: "2022",
    title: "Достигнут 60 Уровень",
    description: "Получен легендарный статус и уважение клана.",
    status: "completed",
    icon: "trophy"
  },
  {
    year: "2023",
    title: "Дополнение: Wildberries",
    description: "Захват цифрового рынка и освоение новых территорий.",
    status: "completed",
    icon: "sword"
  },
  {
    year: "2026",
    title: "Наслаждение Жизнью",
    description: "Жарить шашлык, учить ИИ кто здесь батя.",
    status: "active",
    icon: "crown"
  }
];

"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";

const quests = [
  { year: "1980-е", title: "Обучение Завершено", desc: "Начало великого пути.", status: "completed" },
  { year: "2017", title: "Секретная Миссия: Снежинка", desc: "Внедрение на новогоднюю вечеринку под прикрытием.", status: "completed" },
  { year: "2019", title: "Постройка Крепости", desc: "Возведение фамильной цитадели своими руками.", status: "completed" },
  { year: "2022", title: "Достигнут 60 Уровень", desc: "Получен легендарный статус и уважение клана.", status: "completed" },
  { year: "2023", title: "Дополнение: Wildberries", desc: "Захват цифрового рынка и освоение новых территорий.", status: "completed" },
  { year: "2026", title: "Текущая Цель", desc: "Наслаждаться жизнью, жарить шашлык, учить ИИ кто здесь батя.", status: "active" },
];

export function QuestLog() {
  return (
    <section className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-3xl text-papa-gold mb-2 text-center">Журнал Квестов</h2>
        
        <div className="flex items-center justify-center gap-2 mb-12 text-slate-400 animate-pulse">
           <span className="text-sm">Листай вниз, чтобы узнать историю</span>
           <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
           </svg>
        </div>
        
        <div className="relative border-l-2 border-slate-700 ml-4 md:ml-0 space-y-12">
          {quests.map((quest, index) => (
            <motion.div 
              key={quest.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="absolute left-[-9px] top-0 bg-slate-900 text-papa-gold">
                {quest.status === "completed" ? <CheckCircle2 /> : <Circle />}
              </div>

              <div className="md:grid md:grid-cols-[100px_1fr] gap-4 items-start">
                 <div className="text-slate-500 font-mono text-sm pt-1">{quest.year}</div>
                 <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-papa-gold/50 transition-colors">
                    <h3 className={`font-heading text-xl mb-2 ${quest.status === "active" ? "text-white animate-pulse" : "text-papa-gold"}`}>
                      {quest.title}
                    </h3>
                    <p className="text-slate-300">{quest.desc}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

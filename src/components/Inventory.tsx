"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { memories, Memory } from "@/data/memories";
import { MemoryModal } from "./MemoryModal";

const items = [
  { id: 1, name: "Зелье Семьи", src: "/assets/01_family_restaurant_portrait.jpeg", stats: "+100 Любви", memoryId: 1 },
  { id: 2, name: "Свиток Технологий", src: "/assets/11_mounting_tv_hobby.jpeg", stats: "+50 Интеллекта", memoryId: 11 },
  { id: 3, name: "Костюм Скрытности", src: "/assets/20_snowflake_costume_humor.jpeg", stats: "+1000 Харизмы", memoryId: 20 },
  { id: 4, name: "Арбузный Бафф", src: "/assets/25_watermelon_bite_humor.jpeg", stats: "+20 Выносливости", memoryId: 25 },
  { id: 5, name: "Карта: Карибы", src: "/assets/06_bavaro_beach_travel.jpeg", stats: "Открыт Регион", memoryId: 6 },
  { id: 6, name: "Эликсир Праздника", src: "/assets/23_60th_birthday_toast.jpeg", stats: "Режим Тусовки ВКЛ", memoryId: 23 },
];

export function Inventory() {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  const handleItemClick = (memoryId: number) => {
    const memory = memories.find(m => m.id === memoryId);
    if (memory) {
      setSelectedMemory(memory);
    }
  };

  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl text-papa-gold mb-4 text-center">Инвентарь</h2>

        <p className="text-center text-slate-400 mb-12 flex items-center justify-center gap-2">
           <span className="hidden md:inline">👆</span>
           Нажми на карточку, чтобы изучить предмет
           <span className="hidden md:inline">👆</span>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, borderColor: '#FBBF24' }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square bg-slate-900 border-2 border-slate-700 rounded-lg overflow-hidden group cursor-pointer"
              onClick={() => handleItemClick(item.memoryId)}
            >
              <Image
                src={item.src}
                alt={item.name}
                fill
                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />

              <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-2 text-center">
                <div className="font-heading text-papa-gold text-xs mb-1">{item.name}</div>
                <div className="text-white text-xs font-mono">{item.stats}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <MemoryModal
        memory={selectedMemory}
        onClose={() => setSelectedMemory(null)}
      />
    </section>
  );
}

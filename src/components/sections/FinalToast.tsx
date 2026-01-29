"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ToastButton } from "@/components/ToastButton";
import { PAPAOS_ASSETS } from "@/data/papaosAssets";

export function FinalToast() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-papa-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-papa-blue/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-12 max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center space-y-3"
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-papa-gold uppercase tracking-wider drop-shadow-[0_0_30px_rgba(251,191,36,0.4)]">
              Триумф
            </h2>
            <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.2em]">
              Finale_Sequence_v64.0
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-4xl relative"
          >
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border-4 border-papa-gold/30 shadow-[0_0_60px_rgba(251,191,36,0.3)] bg-slate-800">
              <Image
                src={PAPAOS_ASSETS.poster.src}
                alt={PAPAOS_ASSETS.poster.label || "ПапаОС Постер"}
                fill
                className="object-cover"
                style={{ objectPosition: PAPAOS_ASSETS.poster.objectPosition }}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40" />
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute inset-0 bg-gradient-to-b from-transparent via-papa-gold/5 to-transparent"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center space-y-4 max-w-2xl"
          >
            <p className="text-slate-200 text-lg md:text-xl leading-relaxed font-body">
              Отпраздновать 64 года легендарных достижений!
            </p>
            <p className="text-papa-gold text-sm font-mono uppercase tracking-widest">
              Путь героя завершён
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <ToastButton />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

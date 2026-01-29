"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ENVIRONMENT_ASSETS } from "@/data/papaosAssets";

export function Environments() {
  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-papa-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-papa-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12 max-w-7xl mx-auto"
        >
          <div className="text-center space-y-3">
            <h2 className="font-heading text-3xl md:text-4xl text-papa-gold uppercase tracking-wider">
              Среда Обитания
            </h2>
            <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.2em]">
              Environment_Zones_v64.0
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ENVIRONMENT_ASSETS.map((env, index) => (
              <motion.div
                key={env.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative group"
              >
                <div className={`relative ${env.aspectRatio} rounded-xl overflow-hidden border-2 border-papa-card bg-slate-800 shadow-lg transition-all duration-300 group-hover:border-papa-gold/50 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.2)]`}>
                  <Image
                    src={env.src}
                    alt={env.label || ""}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: env.objectPosition || "center" }}
                    priority={index === 0}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-70" />

                  <div className="absolute bottom-0 left-0 w-full p-5 text-center">
                    <h3 className="font-heading text-xl md:text-2xl text-papa-gold drop-shadow-lg">
                      {env.label}
                    </h3>
                  </div>

                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-papa-gold/30 group-hover:border-papa-gold/80 transition-colors duration-300" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-papa-gold/30 group-hover:border-papa-gold/80 transition-colors duration-300" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-papa-gold/30 group-hover:border-papa-gold/80 transition-colors duration-300" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-papa-gold/30 group-hover:border-papa-gold/80 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

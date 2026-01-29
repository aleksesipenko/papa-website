"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SCENE_ASSETS } from "@/data/papaosAssets";

export function LegendaryScenes() {
  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-papa-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-papa-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12 max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <div className="text-center space-y-3">
            <h2 className="font-heading text-3xl md:text-4xl text-papa-gold uppercase tracking-wider">
              Легендарные Сцены
            </h2>
            <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.2em]">
              Legendary_Scenes_v64.0
            </p>
          </div>

          {/* Scene Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {SCENE_ASSETS.map((scene, index) => (
              <motion.div
                key={scene.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative cursor-pointer"
              >
                <div
                  className={`relative ${scene.aspectRatio} rounded-xl overflow-hidden border-2 border-papa-gold/20 bg-slate-800 shadow-lg transition-all duration-300 group-hover:border-papa-gold/50 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]`}
                >
                  <Image
                    src={scene.src}
                    alt={scene.label || "Легендарная сцена"}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ objectPosition: scene.objectPosition }}
                    priority={index < 2}
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent transition-opacity duration-300 group-hover:from-slate-900/95" />

                  {/* Scene Label */}
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <div className="transform transition-all duration-300 group-hover:translate-x-1">
                      <h3 className="font-heading text-xl md:text-2xl text-papa-gold drop-shadow-lg mb-2">
                        {scene.label}
                      </h3>
                      <div className="h-0.5 w-0 bg-papa-gold transition-all duration-500 group-hover:w-16" />
                    </div>
                  </div>

                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-papa-gold/20 transition-colors duration-300 group-hover:border-papa-gold/60 rounded-tr-lg" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-papa-gold/20 transition-colors duration-300 group-hover:border-papa-gold/60 rounded-bl-lg" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

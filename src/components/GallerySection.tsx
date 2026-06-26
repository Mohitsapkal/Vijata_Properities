"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

const galleryItems = [
  {
    id: "g1",
    title: "The Aurora Sky Penthouse",
    category: "Penthouse",
    image: "/images/prop_penthouse.png",
  },
  {
    id: "g2",
    title: "Villa Sol y Mar",
    category: "Villa",
    image: "/images/prop_villa.png",
  },
  {
    id: "g3",
    title: "Aurora Executive Tower Lobby",
    category: "Commercial",
    image: "/images/prop_commercial.png",
  },
  {
    id: "g4",
    title: "Bel Air Manor Estates",
    category: "Villa",
    image: "/images/hero_mansion.png",
  },
];

const categories = ["All", "Villa", "Penthouse", "Commercial"];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <section id="gallery" className="relative bg-gray-50 py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm font-semibold uppercase tracking-widest text-primary-red"
            >
              Visual Showcase
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 font-serif text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
            >
              Gallery of Masterpieces
            </motion.h3>
          </div>

          {/* Filters List */}
          <div className="flex flex-wrap gap-2 mt-8 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-primary-red text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative h-[320px] sm:h-[400px] rounded-2xl overflow-hidden group shadow-md"
              >
                {/* Property Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Info Text overlays */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary-red mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-2xl font-bold tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.title}
                  </h4>
                  
                  {/* Floating Action Glass Icon */}
                  <div className="absolute top-6 right-6 h-12 w-12 rounded-full glassmorphism flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Search className="h-5 w-5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

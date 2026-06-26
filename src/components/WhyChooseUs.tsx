"use client";

import React from "react";
import { Compass, KeyRound, Scale, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: Compass,
    title: "Elite Global Network",
    desc: "Gain access to a premium, curated portfolio of off-market luxury estates, penthouses, and primary commercial opportunities globally.",
  },
  {
    icon: KeyRound,
    title: "Bespoke Concierge",
    desc: "Your journey is fully catered to by private advisors, arranging premium chauffeured visits, digital property walkthroughs, and customized floor plans.",
  },
  {
    icon: Scale,
    title: "Documental & Legal Integrity",
    desc: "Enjoy complete peace of mind with our dedicated, in-house legal team handling clean titles, escrow services, and regulatory compliance.",
  },
  {
    icon: TrendingUp,
    title: "Smart Capital Growth",
    desc: "We analyze historical appreciation, rental yields, and upcoming municipal planning to guide you toward high-value acquisitions.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative bg-white py-24 sm:py-32 text-gray-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Block */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold uppercase tracking-widest text-primary-red"
          >
            Our Core Pillars
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-serif text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl"
          >
            Why Choose Vijata Properties
          </motion.h3>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-primary-red mx-auto mt-6"
          />
        </div>

        {/* Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((val) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.title}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col justify-between group transition-all duration-300 hover:shadow-xl hover:bg-white"
              >
                <div>
                  {/* Icon Block */}
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary-red shadow-sm transition-colors duration-300 group-hover:bg-primary-red group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  {/* Title & Desc */}
                  <h4 className="text-xl font-bold tracking-tight text-gray-950 font-serif">
                    {val.title}
                  </h4>
                  <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>

                {/* Accent border highlight */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-primary-red rounded-b-2xl transition-colors duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

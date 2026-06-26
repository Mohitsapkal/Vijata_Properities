"use client";

import React from "react";
import Image from "next/image";
import { Award, ShieldCheck, Sparkles, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const keyPoints = [
  {
    icon: ShieldCheck,
    title: "Uncompromising Trust",
    desc: "Every transaction, documentation, and property acquisition is managed with extreme transparency and integrity.",
  },
  {
    icon: Sparkles,
    title: "Luxurious Excellence",
    desc: "We build and source architectural marvels designed with premium materials, smart home integration, and stunning layouts.",
  },
  {
    icon: Award,
    title: "Award-Winning Expertise",
    desc: "Over 15 years of industry leadership in catering to elite clients looking for premium residential and commercial spaces.",
  },
  {
    icon: Building2,
    title: "Premier Locations",
    desc: "Our properties are situated in the most sought-after, elite, and fast-appreciating postal codes.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-white py-24 sm:py-32 text-gray-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Title Block */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-sm font-semibold uppercase tracking-widest text-primary-red"
          >
            About Vijata Properties
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 font-serif text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl"
          >
            Pioneering Luxury & Trusted Real Estate Solutions
          </motion.h3>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-primary-red mx-auto mt-6"
          />
        </div>

        {/* Contents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Images Collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="relative h-[480px] sm:h-[600px] w-full"
          >
            {/* Main Image */}
            <div className="absolute inset-0 w-4/5 h-[85%] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/prop_penthouse.png"
                alt="Penthouse Living Room"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Secondary Floating Image */}
            <div className="absolute bottom-0 right-0 w-3/5 h-[50%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/prop_villa.png"
                alt="Minimalist Ibiza Villa"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Decorative block */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-primary-red -z-10 opacity-30" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-primary-red -z-10 opacity-30" />
          </motion.div>

          {/* Right Side: Text & Key Points */}
          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-lg leading-relaxed text-gray-700 mb-8"
            >
              For over a decade, Vijata Properties has remained a distinguished name in luxury real estate, matching elite clients with exceptional properties. We understand that a home is more than structure—it represents an legacy, lifestyle, and sanctuary.
            </motion.p>

            {/* List of Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {keyPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col gap-3 group"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-primary-red transition-colors duration-300 group-hover:bg-primary-red group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-md font-bold tracking-tight text-gray-900">{point.title}</h4>
                    <p className="text-sm text-gray-600 leading-normal">{point.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

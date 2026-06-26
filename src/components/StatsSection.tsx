"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: 15,
    suffix: "+",
    label: "Years of Luxury Expertise",
  },
  {
    value: 1200,
    suffix: "+",
    label: "Premium Properties Sold",
  },
  {
    value: 35,
    suffix: "+",
    label: "Strategic Corporate Alliances",
  },
  {
    value: 1.5,
    suffix: "B+",
    label: "Managed Transaction Value",
    isFloat: true,
  },
];

function Counter({ value, suffix, isFloat }: { value: number; suffix: string; isFloat?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 1500; // milliseconds
    const stepTime = 30; // ms
    const steps = duration / stepTime;
    const increment = (end - start) / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-serif text-5xl font-black tracking-tight text-white sm:text-6xl">
      {isFloat ? count.toFixed(1) : Math.floor(count)}
      <span className="text-primary-red">{suffix}</span>
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="relative bg-luxury-black py-24 sm:py-32 text-white overflow-hidden">
      {/* Background Decorative Mesh/Grids */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,16,46,0.1),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col gap-4"
            >
              {/* Animated number */}
              <Counter value={stat.value} suffix={stat.suffix} isFloat={stat.isFloat} />
              
              {/* Divider */}
              <div className="h-0.5 w-12 bg-white/20 mx-auto" />
              
              {/* Description label */}
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

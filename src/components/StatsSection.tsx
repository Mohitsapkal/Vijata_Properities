"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  {
    value: 2010,
    suffix: "",
    label: "Established Since",
  },
  {
    value: 12,
    suffix: "K+",
    label: "Trusted Customers",
  },
  {
    value: 500,
    suffix: "+",
    label: "Acres of Area Sold",
  },
  {
    value: 1.5,
    suffix: "Lac+",
    label: "Managed Transaction Value",
    isFloat: true,
  },
];

function Counter({ value, suffix, isFloat }: { value: number; suffix: string; isFloat?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const obj = { val: 0 };
    if (ref.current) {
      gsap.to(obj, {
        val: value,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          setCount(obj.val);
        },
      });
    }
  }, [value]);

  return (
    <span ref={ref} className="font-serif text-5xl font-black tracking-tight text-white sm:text-6xl">
      {isFloat ? count.toFixed(1) : Math.floor(count)}
      <span className="text-primary-red">{suffix}</span>
    </span>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll(".stat-card");

      gsap.fromTo(cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-luxury-black py-24 sm:py-32 text-white overflow-hidden">
      {/* Background Decorative Mesh/Grids */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,16,46,0.1),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 text-center">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-card flex flex-col gap-4"
            >
              {/* Animated number */}
              <Counter value={stat.value} suffix={stat.suffix} isFloat={stat.isFloat} />
              
              {/* Divider */}
              <div className="h-0.5 w-12 bg-white/20 mx-auto" />
              
              {/* Description label */}
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useEffect, useRef } from "react";
import { Compass, KeyRound, Scale, TrendingUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current) {
      // Header animations
      const h2 = sectionRef.current.querySelector(".section-sub");
      const h3 = sectionRef.current.querySelector(".section-title");
      const line = sectionRef.current.querySelector(".section-line");

      const tlHeader = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      if (h2) tlHeader.fromTo(h2, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 });
      if (h3) tlHeader.fromTo(h3, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4");
      if (line) tlHeader.fromTo(line, { width: 0 }, { width: "80px", duration: 0.8 }, "-=0.3");

      // Cards stagger reveal
      const cards = sectionRef.current.querySelectorAll(".pillar-card");
      if (cards.length > 0) {
        gsap.fromTo(cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cards[0],
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }
  }, []);

  return (
    <section id="why-choose-us" ref={sectionRef} className="relative bg-white py-24 sm:py-32 text-gray-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Block */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="section-sub text-sm font-semibold uppercase tracking-widest text-primary-red">
            Our Core Pillars
          </h2>
          <h3 className="section-title mt-4 font-serif text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            Why Choose Vijata Properties
          </h3>
          <div className="section-line h-1 bg-primary-red mx-auto mt-6" style={{ width: 0 }} />
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.title}
                className="pillar-card relative bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col justify-between group transition-all duration-300 hover:shadow-xl hover:bg-white hover:-translate-y-2"
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

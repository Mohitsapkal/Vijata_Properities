"use client";

import React, { useEffect, useRef } from "react";
import { MessageSquare, Eye, FileText, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consultation & Curation",
    desc: "We align on your preferences, budget, and desired locations to create a custom, handpicked list of properties.",
  },
  {
    number: "02",
    icon: Eye,
    title: "Exclusive Private Visits",
    desc: "Experience your potential future home through private, accompanied property tours led by our senior advisors.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Transparent Documentation",
    desc: "Our dedicated, in-house legal team performs title validation and drafts clean, fair contracts for complete security.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Handover & Ownership",
    desc: "Complete the transaction with secure escrow, register the title deeds, and step into your architectural dream.",
  },
];

export default function TimelineSection() {
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

      // Timeline rows animations
      const rows = sectionRef.current.querySelectorAll(".timeline-row");
      rows.forEach((row) => {
        const cards = row.querySelectorAll(".timeline-card");
        const node = row.querySelector(".timeline-node");

        const tlRow = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        cards.forEach((card) => {
          const isLeft = card.classList.contains("slide-left");
          const startX = isLeft ? -40 : 40;

          tlRow.fromTo(card,
            { opacity: 0, x: startX },
            { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
            0
          );
        });

        if (node) {
          tlRow.fromTo(node,
            { scale: 0 },
            { scale: 1, duration: 0.6, ease: "back.out(1.7)" },
            "-=0.5"
          );
        }
      });
    }
  }, []);

  return (
    <section id="process" ref={sectionRef} className="relative bg-white py-24 sm:py-32 text-gray-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Block */}
        <div className="mx-auto max-w-3xl text-center mb-24">
          <h2 className="section-sub text-sm font-semibold uppercase tracking-widest text-primary-red">
            The Acquisition Journey
          </h2>
          <h3 className="section-title mt-4 font-serif text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            How We Secure Your Dreams
          </h3>
          <div className="section-line h-1 bg-primary-red mx-auto mt-6" style={{ width: 0 }} />
        </div>

        {/* Timeline Path */}
        <div className="relative">
          {/* Vertical central line for larger screens */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden lg:block" />

          {/* Timeline Nodes */}
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;
              
              return (
                <div key={step.number} className="timeline-row flex flex-col lg:flex-row items-center justify-between">
                  {/* Left Column (Content or Empty depending on odd/even) */}
                  <div className={`w-full lg:w-[45%] flex ${isEven ? "justify-end text-right" : "justify-start text-left order-last lg:order-none"}`}>
                    <div
                      className={`timeline-card bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm max-w-md w-full ${isEven ? "slide-left" : "slide-right"}`}
                    >
                      <span className="font-serif text-5xl font-black text-primary-red/10 block mb-2">{step.number}</span>
                      <h4 className="text-xl font-bold font-serif text-gray-950 mb-3">{step.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Central Node Circle */}
                  <div
                    className="timeline-node relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary-red text-white shadow-lg border-4 border-white my-6 lg:my-0"
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Right Column (Content or Empty depending on odd/even) */}
                  <div className={`w-full lg:w-[45%] flex ${!isEven ? "justify-start text-left" : "justify-end text-right hidden lg:flex"}`}>
                    {!isEven ? (
                      <div
                        className="timeline-card slide-right bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm max-w-md w-full"
                      >
                        <span className="font-serif text-5xl font-black text-primary-red/10 block mb-2">{step.number}</span>
                        <h4 className="text-xl font-bold font-serif text-gray-950 mb-3">{step.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                      </div>
                    ) : (
                      // Placeholder space for symmetry
                      <div className="w-full max-w-md" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

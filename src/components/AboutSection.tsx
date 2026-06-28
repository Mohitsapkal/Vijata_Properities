"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Award, ShieldCheck, Sparkles, Building2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    desc: "Over 16 years of industry leadership in catering to elite clients looking for premium residential and commercial spaces.",
  },
  {
    icon: Building2,
    title: "Premier Locations",
    desc: "Our properties are situated in the most sought-after, elite, and fast-appreciating postal codes.",
  },
];

export default function AboutSection() {
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

      // Image collage reveal
      const collage = sectionRef.current.querySelector(".collage-container");
      if (collage) {
        gsap.fromTo(collage,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: collage,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Content paragraph and keypoint cards stagger
      const contentText = sectionRef.current.querySelector(".content-text");
      const keycards = sectionRef.current.querySelectorAll(".key-card");

      const tlContent = gsap.timeline({
        scrollTrigger: {
          trigger: contentText || sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      if (contentText) {
        tlContent.fromTo(contentText, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 });
      }

      if (keycards.length > 0) {
        tlContent.fromTo(keycards,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
          "-=0.4"
        );
      }
    }
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative bg-white py-24 sm:py-32 text-gray-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Title Block */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="section-sub text-sm font-semibold uppercase tracking-widest text-gradient-red">
            About Vijeta Properties
          </h2>
          <h3 className="section-title mt-4 font-serif text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            Pioneering Luxury & Trusted Real Estate Solutions
          </h3>
          <div className="section-line h-1 bg-primary-red mx-auto mt-6" style={{ width: 0 }} />
        </div>

        {/* Contents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Images Collage */}
          <div className="collage-container relative h-[480px] sm:h-[600px] w-full">
            {/* Main Image */}
            <div className="absolute inset-0 w-4/5 h-[85%] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/prop_penthouse.jpg"
                alt="Penthouse Living Room"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Secondary Floating Image */}
            <div className="absolute bottom-0 right-0 w-3/5 h-[50%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/prop_villa.jpg"
                alt="Minimalist Ibiza Villa"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Decorative block */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-primary-red -z-10 opacity-30" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-primary-red -z-10 opacity-30" />
          </div>

          {/* Right Side: Text & Key Points */}
          <div className="flex flex-col justify-center">
            <p className="content-text text-lg leading-relaxed text-gray-700 mb-8">
              For over a decade, Vijeta Properties has remained a distinguished name in luxury real estate, matching elite clients with exceptional properties. We understand that a home is more than structure—it represents an legacy, lifestyle, and sanctuary.
            </p>

            {/* List of Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {keyPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div
                    key={point.title}
                    className="key-card flex flex-col gap-3 group"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-primary-red transition-colors duration-300 group-hover:bg-primary-red group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-md font-bold tracking-tight text-gray-900">{point.title}</h4>
                    <p className="text-sm text-gray-600 leading-normal">{point.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

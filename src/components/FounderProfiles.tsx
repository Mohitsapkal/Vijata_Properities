"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Globe, Mail, Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FounderProfiles() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current) {
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

      // Profile card
      const card = sectionRef.current.querySelector(".founder-card");
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }
  }, []);

  return (
    <section
      id="founders"
      ref={sectionRef}
      className="relative bg-luxury-black py-24 sm:py-32 text-white overflow-hidden"
    >
      {/* Background Decorative */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(200,16,46,0.1),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] opacity-15 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="section-sub text-sm font-semibold uppercase tracking-widest text-gradient-red">
            Leadership
          </h2>
          <h3 className="section-title mt-4 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Meet Our Visionary
          </h3>
          <div className="section-line h-1 bg-primary-red mx-auto mt-6" style={{ width: 0 }} />
        </div>

        {/* Founder Card — Centered */}
        <div className="max-w-3xl mx-auto">
          <div className="founder-card group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary-red/30 hover:bg-white/[0.06]">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex flex-col sm:flex-row items-stretch">
              {/* Portrait */}
              <div className="relative w-full sm:w-64 h-80 sm:h-auto shrink-0 overflow-hidden">
                <Image
                  src="/images/founder.png"
                  alt="Ratnakar Khilare"
                  fill
                  sizes="(max-width: 640px) 100vw, 256px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-luxury-black/60" />
              </div>

              {/* Content */}
              <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
                {/* Icon Badge */}
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-red/10 text-primary-red mb-4 group-hover:bg-primary-red group-hover:text-white transition-colors duration-300">
                  <Award className="h-5 w-5" />
                </div>

                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Ratnakar Khilare
                </h4>
                <p className="text-xs font-bold uppercase tracking-widest text-primary-red mt-1">
                  Founder & Managing Director
                </p>

                <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                  With a deep-rooted passion for real estate and unwavering commitment to transparency, Ratnakar Khilare founded Vijata Properties with a mission to make premium, trust-backed land ownership accessible to every family. His visionary leadership and deep knowledge of NA plot regulations, urban planning corridors, and customer-centric development has helped thousands of families secure their dream properties across Chhatrapati Sambhajinagar.
                </p>

                {/* Social Links */}
                <div className="mt-6 flex gap-3">
                  <a
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-primary-red hover:text-white hover:border-primary-red transition-all duration-300"
                    aria-label="Ratnakar Khilare Website"
                  >
                    <Globe className="h-4 w-4" />
                  </a>
                  <a
                    href="mailto:concierge@vijataproperties.com"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-primary-red hover:text-white hover:border-primary-red transition-all duration-300"
                    aria-label="Ratnakar Khilare Email"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import {
  Building2,
  MapPin,
  TrendingUp,
  Users,
  ArrowRight,
  CheckCircle,
  Layers,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const highlights = [
  {
    icon: Building2,
    value: "3+",
    label: "Active Projects",
    desc: "Premium developments across Chhatrapati Sambhajinagar",
  },
  {
    icon: Layers,
    value: "150+",
    label: "Plots Available",
    desc: "NA-approved plots with complete infrastructure",
  },
  {
    icon: TrendingUp,
    value: "₹30L–₹1.7Cr",
    label: "Price Range",
    desc: "Options for every investment budget",
  },
  {
    icon: Users,
    value: "12K+",
    label: "Happy Families",
    desc: "Trusted by thousands across Maharashtra",
  },
];

export default function ProjectHighlights() {
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

      // Highlights cards
      const highlightCards = sectionRef.current.querySelectorAll(".hl-card");
      if (highlightCards.length > 0) {
        gsap.fromTo(
          highlightCards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: highlightCards[0],
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Project summary cards
      const projCards = sectionRef.current.querySelectorAll(".proj-summary-card");
      if (projCards.length > 0) {
        gsap.fromTo(
          projCards,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: projCards[0],
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
      id="project-highlights"
      ref={sectionRef}
      className="relative bg-white py-24 sm:py-32 text-gray-900 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Block */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="section-sub text-sm font-semibold uppercase tracking-widest text-gradient-red">
            Our Developments
          </h2>
          <h3 className="section-title mt-4 font-serif text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            Project Highlights at a Glance
          </h3>
          <div className="section-line h-1 bg-primary-red mx-auto mt-6" style={{ width: 0 }} />
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((hl) => {
            const Icon = hl.icon;
            return (
              <div
                key={hl.label}
                className="hl-card relative bg-gray-50 rounded-2xl border border-gray-100 p-6 flex flex-col gap-3 group hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary-red shadow-sm group-hover:bg-primary-red group-hover:text-white transition-colors duration-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="font-serif text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                  {hl.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-primary-red">
                  {hl.label}
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{hl.desc}</p>
                {/* Accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-primary-red rounded-b-2xl transition-colors duration-300" />
              </div>
            );
          })}
        </div>

        {/* Project Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.slug}
              className="proj-summary-card rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg hover:bg-white transition-all duration-300 group"
            >
              <div>
                {/* Type Tag */}
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary-red mb-3">
                  <CheckCircle className="h-3.5 w-3.5" />
                  {proj.type} • {proj.status}
                </span>

                <h4 className="font-serif text-xl font-bold text-gray-950 tracking-tight group-hover:text-primary-red transition-colors">
                  {proj.name}
                </h4>

                <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-500">
                  <MapPin className="h-3.5 w-3.5 text-primary-red" />
                  <span className="truncate">{proj.location}</span>
                </div>

                {/* Key highlights list */}
                <ul className="mt-4 space-y-2">
                  {proj.highlights.slice(0, 4).map((hl) => (
                    <li key={hl} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-red shrink-0" />
                      {hl}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mt-5 text-lg font-extrabold text-gray-950">
                  Starting{" "}
                  <span className="text-primary-red">{proj.price}</span>
                </div>
              </div>

              {/* CTA */}
              <Link
                href={`/projects/${proj.slug}`}
                className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-gray-950 text-white hover:bg-primary-red py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300"
              >
                View Full Details
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

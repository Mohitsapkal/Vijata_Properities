"use client";

import React, { useState, useEffect, useRef } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const testimonials = [
  {
    quote: "Vijeta Properties completely redefined our home buying experience. Their private concierge advisory and absolute integrity in the documentation phase gave us complete confidence. Truly a world-class team.",
    author: "Rajesh & Meera Sharma",
    role: "Owners, Ample Adwayam Residency",
  },
  {
    quote: "Finding a clear title villa plot with a secure buying process is challenging, but Vijeta made it effortless. Their client-first support model is outstanding.",
    author: "Dr. Anil Deshmukh",
    role: "Director, Deshmukh Hospitals",
  },
  {
    quote: "For our commercial headquarters, we required a real estate partner that understands local layout approvals and appreciation trends. Vijeta delivered a premium strategy that met our exact specifications.",
    author: "Vikram Malhotra",
    role: "Managing Director, Malhotra Group",
  },
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
    }
  }, []);

  // Slide entrance transitions
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [activeIdx]);

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section ref={sectionRef} className="relative bg-white py-24 sm:py-32 text-gray-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Block */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="section-sub text-sm font-semibold uppercase tracking-widest text-gradient-red">
            Client Stories
          </h2>
          <h3 className="section-title mt-4 font-serif text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            Voices of Trust & Luxury
          </h3>
          <div className="section-line h-1 bg-primary-red mx-auto mt-6" style={{ width: 0 }} />
        </div>

        {/* Carousel Content */}
        <div className="relative mx-auto max-w-4xl bg-gray-50 rounded-3xl p-8 sm:p-16 border border-gray-100 shadow-sm">
          {/* Quote Icon */}
          <Quote className="absolute top-8 left-8 h-12 w-12 text-primary-red/10" />

          <div className="relative h-64 sm:h-48 overflow-hidden">
            <div
              ref={contentRef}
              className="absolute inset-0 flex flex-col justify-between"
            >
              {/* Rating stars */}
              <div className="flex gap-1 mb-4 text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>

              {/* Text quote */}
              <p className="text-md sm:text-lg leading-relaxed text-gray-700 italic font-medium">
                &ldquo;{testimonials[activeIdx].quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="mt-6">
                <h4 className="font-bold text-gray-950 font-serif text-lg">{testimonials[activeIdx].author}</h4>
                <span className="text-xs uppercase font-semibold text-gray-500 tracking-wider">
                  {testimonials[activeIdx].role}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-end gap-3 mt-8">
            <button
              onClick={prevTestimonial}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-gray-100 active:scale-95 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-gray-100 active:scale-95 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

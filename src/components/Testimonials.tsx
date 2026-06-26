"use client";

import React, { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Vijata Properties completely redefined our home buying experience. Their private concierge advisory and absolute integrity in the documentation phase gave us complete confidence. Truly a world-class team.",
    author: "Marcus & Sophia Vance",
    role: "Owners, Aurora Sky Penthouse",
  },
  {
    quote: "Finding an off-market beachfront villa with a secure buying process is challenging, but Vijata made it effortless. Their client-first support model is outstanding.",
    author: "Dr. Elena Rostova",
    role: "Founder, Rostova Ventures",
  },
  {
    quote: "For our commercial headquarters, we required a real estate advisory that understands high-value portfolios. Vijata delivered a premium strategy that met our exact specifications.",
    author: "David Sterling",
    role: "CEO, Sterling Holdings",
  },
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="relative bg-white py-24 sm:py-32 text-gray-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Block */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold uppercase tracking-widest text-primary-red"
          >
            Client Stories
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-serif text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl"
          >
            Voices of Trust & Luxury
          </motion.h3>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-primary-red mx-auto mt-6"
          />
        </div>

        {/* Carousel Content */}
        <div className="relative mx-auto max-w-4xl bg-gray-50 rounded-3xl p-8 sm:p-16 border border-gray-100 shadow-sm">
          {/* Quote Icon */}
          <Quote className="absolute top-8 left-8 h-12 w-12 text-primary-red/10" />

          <div className="relative h-64 sm:h-48 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
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
              </motion.div>
            </AnimatePresence>
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

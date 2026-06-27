"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MessageCircle, MapPin, Maximize2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function PropertiesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Responsiveness tracker for number of visible cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsToShow >= projects.length ? prevIndex : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? 0 : prevIndex - 1
    );
  };

  const handlePan = (event: any, info: any) => {
    if (cardsToShow < projects.length) {
      // Damped offset (0.75) for a slower, smoother, more premium dragging gesture
      setDragOffset(info.offset.x * 0.75);
    }
  };

  const handlePanEnd = (event: any, info: any) => {
    if (cardsToShow < projects.length) {
      const swipeThreshold = 50;
      if (info.offset.x < -swipeThreshold) {
        nextSlide();
      } else if (info.offset.x > swipeThreshold) {
        prevSlide();
      }
    }
    setDragOffset(0);
  };

  const getWhatsAppLink = (projName: string) => {
    const message = encodeURIComponent(
      `Hello Vijata Properties, I am interested in inquiring about the project: "${projName}". Please share brochure and price details.`
    );
    return `https://wa.me/919876543210?text=${message}`;
  };

  return (
    <section id="properties" className="relative bg-gray-50 py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm font-semibold uppercase tracking-widest text-primary-red"
            >
              Featured Portfolio
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 font-serif text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
            >
              Featured Landmark Developments
            </motion.h3>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-6 md:mt-0">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 shadow-sm transition hover:bg-gray-100 active:scale-95 cursor-pointer disabled:opacity-40 disabled:pointer-events-none"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex + cardsToShow >= projects.length}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 shadow-sm transition hover:bg-gray-100 active:scale-95 cursor-pointer disabled:opacity-40 disabled:pointer-events-none"
              aria-label="Next project"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Carousel Tracks */}
        <div className="relative overflow-hidden" ref={carouselRef}>
          <motion.div
            className="flex gap-6 cursor-grab active:cursor-grabbing touch-pan-y"
            onPan={handlePan}
            onPanEnd={handlePanEnd}
            animate={{
              x: dragOffset !== 0
                ? `calc(-${currentIndex * (100 / cardsToShow)}% + ${dragOffset}px)`
                : `-${currentIndex * (100 / cardsToShow)}%`
            }}
            transition={{ type: "spring", stiffness: 120, damping: 24 }}
            style={{ width: `${(projects.length / cardsToShow) * 100}%` }}
          >
            {projects.map((project) => (
              <div
                key={project.slug}
                style={{ width: `calc(${100 / projects.length}% - 1.25rem)` }}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col group h-full"
              >
                {/* Image Section */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <Image
                    src={project.images.hero}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Project Type Tag */}
                  <span className="absolute top-4 left-4 rounded-md bg-black/75 px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase backdrop-blur-sm">
                    {project.type}
                  </span>
                  
                  {/* Status Tag */}
                  <span className={`absolute top-4 right-4 rounded-md px-3 py-1 text-xs font-bold text-white uppercase shadow-sm ${
                    project.status === "Available" ? "bg-emerald-500" : "bg-amber-500"
                  }`}>
                    {project.status}
                  </span>

                  {/* Price Tag */}
                  <span className="absolute bottom-4 right-4 rounded-md bg-primary-red px-4 py-1.5 text-sm font-bold text-white shadow-md">
                    Starting {project.price}
                  </span>
                </div>

                {/* Details Section */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-xs text-gray-500 font-semibold mb-2 uppercase">
                      <MapPin className="h-3.5 w-3.5 text-primary-red" />
                      <span className="truncate">{project.location}</span>
                    </div>
                    
                    <h4 className="mt-1 text-xl font-bold tracking-tight text-gray-900 group-hover:text-primary-red transition-colors font-serif">
                      {project.name}
                    </h4>
                    
                    <p className="mt-3 text-sm text-gray-600 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-100 pt-6 mt-6 flex flex-col sm:flex-row gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gray-950 text-white hover:bg-gray-800 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300"
                    >
                      Explore Project
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={getWhatsAppLink(project.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300"
                    >
                      <MessageCircle className="h-4.5 w-4.5" fill="currentColor" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

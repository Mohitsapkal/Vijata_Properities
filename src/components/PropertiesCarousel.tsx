"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MessageCircle, MapPin, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PropertiesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  
  const touchStartRef = useRef(0);
  const isDraggingRef = useRef(false);

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

  // GSAP ScrollTrigger for section header entrance animation
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (sectionRef.current) {
      const h2 = sectionRef.current.querySelector(".section-sub");
      const h3 = sectionRef.current.querySelector(".section-title");
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        }
      });
      
      if (h2) {
        tl.fromTo(h2, 
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
        );
      }
      
      if (h3) {
        tl.fromTo(h3,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        );
      }
    }
  }, []);

  // Whenever currentIndex or cardsToShow changes, animate the track position
  useEffect(() => {
    if (!trackRef.current) return;
    
    const activeCard = trackRef.current.children[currentIndex] as HTMLElement;
    if (activeCard) {
      gsap.to(trackRef.current, {
        x: -activeCard.offsetLeft,
        duration: 0.6,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  }, [currentIndex, cardsToShow]);

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

  // Dragging resistance calculations for elastic edge-hit feel
  const getDampedDiff = (diffX: number) => {
    const isAtStart = currentIndex === 0;
    const isAtEnd = currentIndex + cardsToShow >= projects.length;
    if (isAtStart && diffX > 0) {
      return diffX * 0.25;
    }
    if (isAtEnd && diffX < 0) {
      return diffX * 0.25;
    }
    return diffX;
  };

  // Touch Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].pageX;
    isDraggingRef.current = true;
    if (trackRef.current) {
      gsap.killTweensOf(trackRef.current);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    const currentX = e.touches[0].pageX;
    const diffX = currentX - touchStartRef.current;
    const dampedDiff = getDampedDiff(diffX);
    
    if (trackRef.current) {
      const activeCard = trackRef.current.children[currentIndex] as HTMLElement;
      if (activeCard) {
        gsap.set(trackRef.current, {
          x: -activeCard.offsetLeft + dampedDiff,
        });
      }
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    
    const finalX = e.changedTouches[0].pageX;
    const diffX = finalX - touchStartRef.current;
    
    const swipeThreshold = 60;
    if (diffX < -swipeThreshold && currentIndex + cardsToShow < projects.length) {
      nextSlide();
    } else if (diffX > swipeThreshold && currentIndex > 0) {
      prevSlide();
    } else {
      // Bounce back to active slide if threshold not met
      if (trackRef.current) {
        const activeCard = trackRef.current.children[currentIndex] as HTMLElement;
        if (activeCard) {
          gsap.to(trackRef.current, {
            x: -activeCard.offsetLeft,
            duration: 0.5,
            ease: "back.out(1.2)",
          });
        }
      }
    }
  };

  // Mouse Handlers (Enabling Desktop dragging as well)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // Left click only
    touchStartRef.current = e.pageX;
    isDraggingRef.current = true;
    if (trackRef.current) {
      gsap.killTweensOf(trackRef.current);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const currentX = e.pageX;
    const diffX = currentX - touchStartRef.current;
    const dampedDiff = getDampedDiff(diffX);
    
    if (trackRef.current) {
      const activeCard = trackRef.current.children[currentIndex] as HTMLElement;
      if (activeCard) {
        gsap.set(trackRef.current, {
          x: -activeCard.offsetLeft + dampedDiff,
        });
      }
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    
    const finalX = e.pageX;
    const diffX = finalX - touchStartRef.current;
    
    const swipeThreshold = 60;
    if (diffX < -swipeThreshold && currentIndex + cardsToShow < projects.length) {
      nextSlide();
    } else if (diffX > swipeThreshold && currentIndex > 0) {
      prevSlide();
    } else {
      if (trackRef.current) {
        const activeCard = trackRef.current.children[currentIndex] as HTMLElement;
        if (activeCard) {
          gsap.to(trackRef.current, {
            x: -activeCard.offsetLeft,
            duration: 0.5,
            ease: "back.out(1.2)",
          });
        }
      }
    }
  };

  const getWhatsAppLink = (projName: string) => {
    const message = encodeURIComponent(
      `Hello Vijata Properties, I am interested in inquiring about the project: "${projName}". Please share brochure and price details.`
    );
    return `https://wa.me/919876543210?text=${message}`;
  };

  return (
    <section id="properties" ref={sectionRef} className="relative bg-gray-50 py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16">
          <div className="max-w-2xl">
            <h2 className="section-sub text-sm font-semibold uppercase tracking-widest text-gradient-red">
              Featured Portfolio
            </h2>
            <h3 className="section-title mt-4 font-serif text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Featured Landmark Developments
            </h3>
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
        <div 
          className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none" 
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            ref={trackRef}
            className="flex gap-6 touch-pan-y"
            style={{ width: `${(projects.length / cardsToShow) * 100}%` }}
          >
            {projects.map((project) => (
              <div
                key={project.slug}
                style={{ width: `calc(${100 / projects.length}% - 1.25rem)` }}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col group h-full select-none"
              >
                {/* Image Section */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden pointer-events-none">
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
          </div>
        </div>
      </div>
    </section>
  );
}

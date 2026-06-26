"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (imageRef.current && containerRef.current) {
      gsap.to(imageRef.current, {
        yPercent: 20,
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  const handleExploreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector("#properties");
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* Parallax Background Image */}
      <div ref={imageRef} className="absolute inset-0 h-[120%] w-full -top-[10%]">
        <Image
          src="/images/hero_mansion.png"
          alt="Premium Luxury Mansion"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">
        <div className="max-w-3xl">
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 flex items-center gap-2"
          >
            <span className="h-0.5 w-12 bg-primary-red" />
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-red">
              Introducing Vijata Properties
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="font-serif text-5xl font-extrabold leading-none tracking-tight sm:text-7xl"
          >
            Building Dreams,<br />
            <span className="text-white">Creating Futures.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="mt-6 text-lg leading-relaxed text-gray-300 sm:text-xl"
          >
            Premium Residential and Commercial Properties Tailored to Your Lifestyle. Elevate your living space with our handpicked portfolio of ultra-luxury estates.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            {/* Explore properties button */}
            <button
              onClick={handleExploreClick}
              className="group flex items-center justify-center gap-3 rounded-full bg-primary-red px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-red-700 active:scale-95 cursor-pointer"
            >
              Explore Properties
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* WhatsApp Chat button */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white hover:text-gray-900 active:scale-95"
            >
              <MessageCircle className="h-5 w-5 text-[#25D366] transition-transform duration-300 group-hover:rotate-12" fill="currentColor" />
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
        onClick={() => {
          const aboutSection = document.querySelector("#about");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-primary-red" />
        </motion.div>
      </motion.div>
    </section>
  );
}

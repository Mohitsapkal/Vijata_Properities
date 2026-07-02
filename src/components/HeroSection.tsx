"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Parallax background
    if (imageRef.current && containerRef.current) {
      gsap.to(imageRef.current, {
        yPercent: 15,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }



    // Entrance timeline
    if (containerRef.current) {
      const subtitle = containerRef.current.querySelector(".hero-subtitle");
      const headline = containerRef.current.querySelector(".hero-title");
      const subheadline = containerRef.current.querySelector(".hero-desc");
      const ctas = containerRef.current.querySelector(".hero-ctas");
      const scrollIndicator = containerRef.current.querySelector(".hero-scroll");

      const tl = gsap.timeline();

      if (subtitle) tl.fromTo(subtitle, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 0.2);
      if (headline) tl.fromTo(headline, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: "power4.out" }, 0.4);
      if (subheadline) tl.fromTo(subheadline, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: "power4.out" }, 0.6);
      if (ctas) tl.fromTo(ctas, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: "power4.out" }, 0.8);
      

      if (scrollIndicator) {
        tl.fromTo(scrollIndicator, { opacity: 0 }, { opacity: 0.7, duration: 1 }, 1.5);
        
        // Loop bounce animation using GSAP
        const arrow = scrollIndicator.querySelector(".bounce-arrow");
        if (arrow) {
          gsap.to(arrow, {
            y: 8,
            duration: 0.75,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
          });
        }
      }
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
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black text-white py-20 lg:py-0"
    >
      {/* Parallax Background Image */}
      <div ref={imageRef} className="absolute inset-0 h-[120%] w-full -top-[10%]">
        <Image
          src="/images/Hero_mansion.jpg"
          alt="Premium Luxury Mansion"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />
      </div>

      {/* Hero Content Grid */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 max-w-2xl">
            {/* Subtitle */}
            <div className="hero-subtitle mb-4 flex items-center gap-2" style={{ opacity: 0 }}>
              <span className="h-0.5 w-12 bg-primary-red" />
              <span className="text-sm font-semibold uppercase tracking-widest text-gradient-red">
                Introducing Vijeta Properties
              </span>
            </div>

            {/* Headline */}
            <h1
              className="hero-title font-serif text-5xl font-extrabold leading-none tracking-tight sm:text-7xl"
              style={{ opacity: 0 }}
            >
              Building Dreams,<br />
              <span className="text-white">Creating Futures.</span>
            </h1>

            {/* Subheadline */}
            <p
              className="hero-desc mt-6 text-lg leading-relaxed text-gray-300 sm:text-xl"
              style={{ opacity: 0 }}
            >
              Premium Residential and Commercial Properties Tailored to Your Lifestyle. Elevate your living space with our handpicked portfolio of ultra-luxury estates.
            </p>

            {/* CTA Buttons */}
            <div
              className="hero-ctas mt-10 flex flex-col sm:flex-row gap-4"
              style={{ opacity: 0 }}
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
                href="https://wa.me/919823131416"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white hover:text-gray-900 active:scale-95"
              >
                <WhatsAppIcon className="h-5 w-5 text-[#25D366] transition-transform duration-300 group-hover:rotate-12" />
                Chat on WhatsApp
              </a>
            </div>
          </div>


        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div
        className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer transition-opacity"
        style={{ opacity: 0 }}
        onClick={() => {
          const aboutSection = document.querySelector("#about");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll Down</span>
        <div className="bounce-arrow">
          <ArrowDown className="h-5 w-5 text-primary-red" />
        </div>
      </div>
    </section>
  );
}

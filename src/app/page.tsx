"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FounderProfiles from "@/components/FounderProfiles";
import PropertiesCarousel from "@/components/PropertiesCarousel";
import ProjectHighlights from "@/components/ProjectHighlights";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsSection from "@/components/StatsSection";
import TimelineSection from "@/components/TimelineSection";
import GallerySection from "@/components/GallerySection";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import LocationMapSection from "@/components/LocationMapSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Smooth timing for the loading screen fadeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-luxury-black text-white"
          >
            <div className="text-center flex flex-col items-center">
              {/* Logo Reveal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mb-6 relative w-24 h-24 rounded-full overflow-hidden border border-white/20 bg-white"
              >
                <Image
                  src="/images/logo.jpg"
                  alt="Vijeta Logo"
                  fill
                  sizes="96px"
                  priority
                  loading="eager"
                  className="object-contain p-1"
                />
              </motion.div>

              {/* Premium Logo Reveal */}
              <motion.h1
                initial={{ opacity: 0, letterSpacing: "0.2em", y: 20 }}
                animate={{ opacity: 1, letterSpacing: "0.4em", y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                className="font-serif text-4xl font-extrabold sm:text-6xl text-white tracking-widest"
              >
                VIJETA
              </motion.h1>
              
              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-3 text-xs uppercase tracking-[0.6em] text-gradient-red font-semibold"
              >
                Premium Estates
              </motion.p>
              
              {/* Elegant progress loader line */}
              <div className="mt-8 mx-auto w-32 h-[1px] bg-white/10 relative overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                  className="absolute inset-0 bg-primary-red"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col min-h-screen relative selection:bg-primary-red selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <FounderProfiles />
          <PropertiesCarousel />
          <ProjectHighlights />
          <WhyChooseUs />
          <StatsSection />
          <TimelineSection />
          <GallerySection />
          <Testimonials />
          <FAQSection />
          <ContactSection />
          <LocationMapSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}

"use client";

import React, { useEffect, useRef } from "react";
import { MapPin, Phone, MessageCircle, Navigation, Clock, Building2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const directions = [
  {
    icon: Building2,
    title: "From Chhatrapati Sambhajinagar Railway Station",
    desc: "Head east on Jalna Road. Pass Mondha Naka and the CIDCO Flyover. Golden City Center will be on your left, near API Corner.",
    time: "~15 min drive",
  },
  {
    icon: Navigation,
    title: "From Chhatrapati Sambhajinagar Airport",
    desc: "Drive west on Jalna Road/Airport Road towards Chikalthana. Golden City Center is located just past the MIDC corridor.",
    time: "~8 min drive",
  },
  {
    icon: MapPin,
    title: "From Cidco / City Center",
    desc: "Head east on Jalna Road past Prozone Mall. Golden City Center is prominently situated on the main road near API Corner.",
    time: "~10 min drive",
  },
];

export default function LocationMapSection() {
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

      // Map & directions reveal
      const mapBlock = sectionRef.current.querySelector(".map-block");
      const dirCards = sectionRef.current.querySelectorAll(".dir-card");

      if (mapBlock) {
        gsap.fromTo(
          mapBlock,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: mapBlock,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (dirCards.length > 0) {
        gsap.fromTo(
          dirCards,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: dirCards[0],
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
      id="location"
      ref={sectionRef}
      className="relative bg-luxury-black py-24 sm:py-32 text-white overflow-hidden"
    >
      {/* Background Decorative */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,16,46,0.08),transparent_60%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="section-sub text-sm font-semibold uppercase tracking-widest text-gradient-red">
            Visit Our Office
          </h2>
          <h3 className="section-title mt-4 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
            How to Reach Us
          </h3>
          <div className="section-line h-1 bg-primary-red mx-auto mt-6" style={{ width: 0 }} />
        </div>

        {/* Grid: Map + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Google Map Embed */}
          <div className="map-block lg:col-span-7 relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-[400px] sm:h-[480px]">
            <iframe
              src="https://maps.google.com/maps?q=Golden%20City%20Center,%20Chikalthana,%20Chhatrapati%20Sambhajinagar&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            />
            {/* Floating address badge */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto glassmorphism-dark rounded-2xl p-4 max-w-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-red text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Vijata Properties Office</h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Office No. 123 & 124, Golden City Center,<br />
                    Chhatrapati Sambhajinagar, Maharashtra 431003
                  </p>
                </div>
              </div>
            </div>
          </div>
 
          {/* Right: Directions + Contact */}
          <div className="lg:col-span-5 space-y-6">
            {/* Office Hours Card */}
            <div className="dir-card rounded-2xl border border-white/10 bg-white/5 p-6 flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-red text-white">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Office Hours</h4>
                <p className="text-sm text-gray-400 mt-1">
                  Monday – Saturday: 10:00 AM – 7:00 PM<br />
                  Sunday: By Appointment Only
                </p>
              </div>
            </div>
 
            {/* Direction Cards */}
            {directions.map((dir) => {
              const Icon = dir.icon;
              return (
                <div
                  key={dir.title}
                  className="dir-card rounded-2xl border border-white/10 bg-white/5 p-6 flex items-start gap-4 hover:border-primary-red/30 transition-colors duration-300"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-primary-red">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{dir.title}</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">{dir.desc}</p>
                    <span className="inline-flex mt-2 text-xs font-semibold text-primary-red uppercase tracking-wider">
                      {dir.time}
                    </span>
                  </div>
                </div>
              );
            })}
 
            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <a
                href="tel:+919823131416"
                className="flex items-center justify-center gap-2 rounded-xl bg-white text-gray-900 py-3.5 text-xs font-bold uppercase tracking-wider hover:scale-105 active:scale-95 transition-transform duration-300 shadow-md"
              >
                <Phone className="h-4 w-4 text-primary-red" />
                Call Now
              </a>
              <a
                href="https://wa.me/919823131416?text=Hi%2C%20I%20would%20like%20to%20visit%20your%20office"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] text-white py-3.5 text-xs font-bold uppercase tracking-wider hover:scale-105 active:scale-95 transition-transform duration-300 shadow-md"
              >
                <MessageCircle className="h-4.5 w-4.5" fill="currentColor" />
                WhatsApp
              </a>
            </div>
 
            {/* Get Directions CTA */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Golden+City+Center+Chikalthana+Chhatrapati+Sambhajinagar+Maharashtra"
              target="_blank"
              rel="noopener noreferrer"
              className="dir-card flex items-center justify-center gap-3 w-full rounded-xl bg-primary-red hover:bg-red-700 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg"
            >
              <Navigation className="h-4.5 w-4.5" />
              Get Directions on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

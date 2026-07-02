"use client";

import React from "react";
import { ArrowUp, Mail, Phone, MapPin, Globe } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-luxury-black text-gray-400 py-16 sm:py-20 border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 sm:gap-16 pb-12 border-b border-white/5">
          {/* Logo & Intro */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 bg-white flex-shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="Vijeta Properties"
                  fill
                  sizes="40px"
                  priority
                  loading="eager"
                  className="object-contain p-0.5"
                />
              </div>
              <span className="font-serif text-2xl font-extrabold tracking-wider text-white">
                VIJETA <span className="text-gradient-red">PROPERTIES</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-md">
              Crafting premium architectural futures and securing trusted, luxury estates since 2010. Your dream lifestyle, curated by elite experts.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {["Facebook", "Instagram", "LinkedIn", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs uppercase tracking-wider font-bold text-gray-500 hover:text-white transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-6">
            <h5 className="font-bold text-white text-xs uppercase tracking-widest">Navigation</h5>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Properties", href: "#properties" },
                { name: "Why Vijeta", href: "#why-choose-us" },
                { name: "Our Process", href: "#process" },
                { name: "Gallery", href: "#gallery" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary-red transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-6">
            <h5 className="font-bold text-white text-xs uppercase tracking-widest">Contact Advisory</h5>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin className="h-4.5 w-4.5 text-primary-red shrink-0 mt-0.5" /> 
                <span>Office No. 123 & 124, Golden City Center, Chhatrapati Sambhajinagar, Maharashtra 431003</span>
              </li>
              
              <li className="h-2" /> {/* One line space */}
              
              <li className="flex gap-3 items-center">
                <Globe className="h-4.5 w-4.5 text-primary-red shrink-0" />
                <span className="hover:text-primary-red transition-colors">vijetaproperties.com</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="h-4.5 w-4.5 text-primary-red shrink-0" />
                <span className="hover:text-primary-red transition-colors">+91 98231 31416</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="h-4.5 w-4.5 text-primary-red shrink-0" />
                <span className="hover:text-primary-red transition-colors"><a href="https://vardoxstudio.com">Designed By :- vardoxstudio.com</a></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-12 text-xs text-gray-500 gap-6">
          <p>© {new Date().getFullYear()} Vijeta Properties. All rights reserved. Built for Trust & Luxury.</p>
          
          {/* Scroll to Top */}
          <button
            onClick={handleScrollTop}
            className="flex items-center gap-2 bg-white/5 hover:bg-primary-red hover:text-white px-4 py-2.5 rounded-full border border-white/5 text-gray-400 transition-all duration-300 active:scale-95 cursor-pointer"
          >
            Back to Top
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Projects", href: "/projects" }, // Rename to Projects
  { name: "Why Vijeta", href: "#why-choose-us" },
  { name: "Our Process", href: "#process" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    
    // If it's an external page route
    if (href.startsWith("/")) {
      return; // Let standard link navigation run
    }

    e.preventDefault();
    
    if (pathname !== "/") {
      router.push("/" + href);
      return;
    }

    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of the navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 text-gray-900 shadow-md backdrop-blur-md py-4 border-b border-gray-100"
            : "bg-transparent text-white py-6"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href={pathname === "/" ? "#home" : "/"}
              onClick={(e) => handleLinkClick(e, "#home")}
              className="flex items-center gap-3 group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-white flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
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
              <span className="font-serif text-xl sm:text-2xl font-extrabold tracking-wider">
                VIJETA <span className="text-gradient-red">PROPERTIES</span>
              </span>
            </motion.a>

            {/* Desktop Navigation & CTA Group */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10">
              <nav className="flex items-center gap-4 lg:gap-6 xl:gap-8">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href.startsWith("/") || (link.href.startsWith("#") && pathname === "/") ? link.href : "/" + link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`text-xs lg:text-sm font-semibold tracking-wider uppercase transition-colors relative py-1 group whitespace-nowrap ${
                      scrolled ? "text-gray-700 hover:text-primary-red" : "text-gray-200 hover:text-white"
                    }`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                  >
                    {link.name}
                    {/* Underline Slide Effect */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-red transition-all duration-300 group-hover:w-full" />
                  </motion.a>
                ))}
              </nav>

              {/* Action CTA */}
              <div className="hidden lg:flex items-center">
                <motion.a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                  className="flex items-center gap-2 rounded-full bg-primary-red px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-red-700 active:scale-95"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  Inquire Now
                  <ArrowRight className="h-4.5 w-4.5" />
                </motion.a>
              </div>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-md ${scrolled ? "text-gray-900" : "text-white"}`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-35 bg-black/95 flex flex-col pt-24 px-8 md:hidden"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href.startsWith("/") || (link.href.startsWith("#") && pathname === "/") ? link.href : "/" + link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-2xl font-serif tracking-widest text-gray-200 hover:text-primary-red transition-colors py-2 border-b border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="https://wa.me/919823131416"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-2 rounded-full bg-primary-red py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-xl hover:bg-red-700 active:scale-95"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
              >
                Chat on WhatsApp
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

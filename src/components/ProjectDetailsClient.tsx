"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Download,
  Calendar,
  Sparkles,
  X,
  Maximize2,
  CheckCircle,
  FileText,
  Navigation,
  Lightbulb,
  Droplet,
  ArrowDownToLine,
  Smile,
  Shield,
  Zap,
  Landmark,
  Check
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Project } from "@/data/projects";

// Dynamic highlights icon resolver
const getHighlightIcon = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes("na approved") || n.includes("sanctioned")) return FileText;
  if (n.includes("road")) return Navigation;
  if (n.includes("light")) return Lightbulb;
  if (n.includes("water")) return Droplet;
  if (n.includes("drain") || n.includes("sewage")) return ArrowDownToLine;
  if (n.includes("play") || n.includes("park")) return Smile;
  if (n.includes("temple")) return Sparkles;
  if (n.includes("wall") || n.includes("fenc") || n.includes("security")) return Shield;
  if (n.includes("transformer") || n.includes("electricity")) return Zap;
  if (n.includes("loan") || n.includes("title") || n.includes("registration") || n.includes("extract")) return Landmark;
  return Check;
};

interface ProjectDetailsClientProps {
  project: Project;
}

export default function ProjectDetailsClient({ project }: ProjectDetailsClientProps) {
  // State management
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: "Plot Purchase",
    visitDate: ""
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const getEmbedUrl = (url: string) => {
    if (url.includes('/embed/')) return url;
    if (url.includes('shorts/')) {
      const id = url.split('shorts/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes('v=')) {
      const id = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    return url;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Full name is required";
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone.trim())) {
      errors.phone = "Valid 10-digit phone number is required";
    }
    if (!formData.visitDate) errors.visitDate = "Preferred visit date is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Build inquiry message
    const formattedText = `Hello Vijeta Properties,\n\nI am interested in *${project.name}*.\n\n*Inquiry Details:*\n- *Name:* ${formData.name}\n- *Phone:* ${formData.phone}\n- *Property Interest:* ${formData.interest}\n- *Preferred Visit Date:* ${formData.visitDate}\n\nPlease share the brochure, pricing details, and contact me to coordinate the site visit.`;
    
    const waUrl = `https://wa.me/919823131416?text=${encodeURIComponent(formattedText)}`;
    
    // Redirect
    window.open(waUrl, "_blank");
    setFormSubmitted(true);
    
    // Reset Form
    setFormData({
      name: "",
      phone: "",
      interest: "Plot Purchase",
      visitDate: ""
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 selection:bg-primary-red selection:text-white">
      <Navbar />

      {/* 1. Cinematic Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center bg-gray-950 overflow-hidden pt-28 pb-16 lg:pt-0 lg:pb-0">
        {/* Blurred Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={project.images.hero}
            alt={`${project.name} background`}
            fill
            priority
            className="object-cover opacity-40 blur-2xl scale-110"
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto w-full px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* Left Side: Text Content */}
            <motion.div 
              className="w-full lg:w-1/2 text-white flex flex-col justify-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Project Category Tag */}
              <div className="flex items-center gap-2 mb-4">
                <span className="h-0.5 w-12 bg-primary-red animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-widest text-gradient-red">
                  {project.type} • {project.status}
                </span>
              </div>

              {/* Title Reveal */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                {project.name}
              </h1>

              {/* Location & Starting Price */}
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-base sm:text-lg text-gray-200">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary-red shrink-0" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Starting From:</span>
                  <span className="font-extrabold text-primary-red">{project.price}</span>
                </div>
              </div>

              {/* Quick Action CTAs */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="tel:+919823131416"
                  className="flex items-center justify-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-gray-900 shadow-md hover:scale-105 active:scale-95 transition-transform duration-300"
                >
                  <Phone className="h-4.5 w-4.5 text-primary-red" />
                  Call Advisor
                </a>

                <a
                  href={`https://wa.me/919823131416?text=Hello%20I%20am%20interested%20in%20${encodeURIComponent(project.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 rounded-full bg-emerald-500 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:scale-105 active:scale-95 transition-transform duration-300"
                >
                  <WhatsAppIcon className="h-4.5 w-4.5" />
                  WhatsApp Inquiry
                </a>

                <a
                  href={project.brochureUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm hover:bg-white hover:text-gray-900 transition-colors duration-300"
                >
                  <Download className="h-4.5 w-4.5" />
                  Brochure PDF
                </a>

                <button
                  onClick={() => document.querySelector("#inquiry-section")?.scrollIntoView({ behavior: "smooth" })}
                  className="flex items-center justify-center gap-2.5 rounded-full bg-primary-red px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-red-700 transition-colors duration-300"
                >
                  <Calendar className="h-4.5 w-4.5" />
                  Book Site Visit
                </button>
              </div>
            </motion.div>

            {/* Right Side: Framed Image */}
            <motion.div 
              className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0"
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className={`w-full ${project.slug === 'hindustan-residency' ? 'max-w-[95%] sm:max-w-lg lg:max-w-xl' : 'max-w-[90%] sm:max-w-md lg:max-w-lg'} rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl relative bg-black/40`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.images.hero}
                  alt={project.name}
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
        <div className="lg:col-span-8 space-y-24">
          {/* 2. About Project */}
          <section id="about" className="scroll-mt-32">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-gray-950">
              Project Overview
            </h2>
            <div className="mt-2 w-16 h-1 bg-primary-red" />
            <p className="mt-6 text-md text-gray-700 leading-relaxed font-light">
              {project.description}
            </p>
          </section>

          {/* 3. Key Highlights */}
          <section id="highlights" className="scroll-mt-32">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-gray-950">
              Key Highlights & Approvals
            </h2>
            <div className="mt-2 w-16 h-1 bg-primary-red" />
            
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {project.highlights.map((highlight) => {
                const Icon = getHighlightIcon(highlight);
                return (
                  <div
                    key={highlight}
                    className="flex flex-col gap-3 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary-red/20 transition-all group"
                  >
                    <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-white text-primary-red shadow-sm group-hover:bg-primary-red group-hover:text-white transition-colors duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-semibold text-gray-900 leading-tight">
                      {highlight}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 4. Master Layout & Location Plans */}
          <section id="master-plan" className="scroll-mt-32">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-gray-950">
              Master & Location Plans
            </h2>
            <div className="mt-2 w-16 h-1 bg-primary-red" />
            <p className="mt-4 text-sm text-gray-500">
              Interactive Zoom Mode: Click on the images below to inspect layout and location plans in high resolution.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Master Plan */}
              <div
                onClick={() => setZoomedImage(project.images.masterPlan)}
                className="relative h-96 sm:h-[480px] w-full rounded-3xl overflow-hidden border border-gray-100 shadow-sm cursor-zoom-in group"
              >
                <Image
                  src={project.images.masterPlan}
                  alt="Master Layout Plan"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-white/95 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-gray-900 shadow-md flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <Maximize2 className="h-4 w-4 text-primary-red" />
                    Expand Master Plan
                  </div>
                </div>
              </div>

              {/* Location Plan */}
              {project.images.locationMap && (
                <div
                  onClick={() => setZoomedImage(project.images.locationMap)}
                  className="relative h-96 sm:h-[480px] w-full rounded-3xl overflow-hidden border border-gray-100 shadow-sm cursor-zoom-in group"
                >
                  <Image
                    src={project.images.locationMap}
                    alt="Location Plan"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-white/95 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-gray-900 shadow-md flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <Maximize2 className="h-4 w-4 text-primary-red" />
                      Expand Location Plan
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* 5. Amenities Section */}
          <section id="amenities" className="scroll-mt-32">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-gray-950">
              World-Class Amenities
            </h2>
            <div className="mt-2 w-16 h-1 bg-primary-red" />
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.amenities.map((amenity) => (
                <div
                  key={amenity.name}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-primary-red">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-950">{amenity.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">Built to meet the highest architectural engineering criteria.</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Video Showcase */}
          {project.videoUrl && (
            <section id="video" className="scroll-mt-32">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-gray-950">
                Cinematic Showcase
              </h2>
              <div className="mt-2 w-16 h-1 bg-primary-red" />
              
              <div className="mt-6 relative rounded-3xl overflow-hidden shadow-lg aspect-video bg-black border border-gray-900">
                {project.videoUrl.includes('youtube.com') || project.videoUrl.includes('youtu.be') ? (
                  <iframe
                    src={getEmbedUrl(project.videoUrl)}
                    title={`${project.name} Video Showcase`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  ></iframe>
                ) : (
                  <video
                    src={project.videoUrl}
                    controls
                    preload="metadata"
                    playsInline
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                )}
              </div>
            </section>
          )}

          {/* 7. Image Gallery */}
          <section id="gallery" className="scroll-mt-32">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-gray-950">
              Project Visual Gallery
            </h2>
            <div className="mt-2 w-16 h-1 bg-primary-red" />
            
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.images.gallery.map((imgUrl, idx) => (
                <div
                  key={imgUrl}
                  onClick={() => setLightboxIndex(idx)}
                  className="relative h-40 rounded-2xl overflow-hidden border border-gray-100 shadow-sm cursor-pointer group"
                >
                  <Image
                    src={imgUrl}
                    alt={`${project.name} gallery image ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <Maximize2 className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 8. Location Section */}
          <section id="location" className="scroll-mt-32">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-gray-950">
              Strategic Neighborhood Location
            </h2>
            <div className="mt-2 w-16 h-1 bg-primary-red" />
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="relative rounded-3xl overflow-hidden h-72 border border-gray-200 shadow-sm">
                <iframe
                  src={project.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0"
                ></iframe>
              </div>

              <div>
                <h4 className="font-serif text-xl font-bold text-gray-950 mb-4">Nearby Connectivity</h4>
                <div className="space-y-4">
                  {project.landmarks.map((landmark) => (
                    <div key={landmark.name} className="flex justify-between items-center text-sm border-b border-gray-100 pb-3">
                      <span className="text-gray-700 font-medium">{landmark.name}</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary-red bg-red-50 px-2.5 py-1 rounded-full shrink-0">
                        {landmark.distance}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>


        </div>

        {/* 10. Sticky Inquiry Form */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
          <section
            id="inquiry-section"
            className="rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary-red" />
            
            <h3 className="font-serif text-2xl font-bold text-gray-950">Book Site Visit</h3>
            <p className="text-xs text-gray-500 mt-1">Direct scheduling via WhatsApp concierge.</p>

            <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className={`w-full px-4 py-3.5 rounded-xl border text-sm focus:outline-none focus:ring-1 ${
                    formErrors.name 
                      ? "border-red-500 focus:ring-red-500 focus:border-red-500" 
                      : "border-gray-200 focus:ring-primary-red focus:border-primary-red"
                  }`}
                />
                {formErrors.name && (
                  <span className="text-xs text-red-500 block mt-1">{formErrors.name}</span>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="10-digit number"
                  className={`w-full px-4 py-3.5 rounded-xl border text-sm focus:outline-none focus:ring-1 ${
                    formErrors.phone 
                      ? "border-red-500 focus:ring-red-500 focus:border-red-500" 
                      : "border-gray-200 focus:ring-primary-red focus:border-primary-red"
                  }`}
                />
                {formErrors.phone && (
                  <span className="text-xs text-red-500 block mt-1">{formErrors.phone}</span>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                  Interest Level
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-primary-red focus:border-primary-red bg-white"
                >
                  <option value="Plot Purchase">Plot Purchase</option>
                  <option value="Townhouse Villa">Townhouse Villa</option>
                  <option value="Brochure Details">Brochure Details</option>
                  <option value="General Consultation">General Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                  Preferred Visit Date
                </label>
                <input
                  type="date"
                  name="visitDate"
                  value={formData.visitDate}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3.5 rounded-xl border text-sm focus:outline-none focus:ring-1 ${
                    formErrors.visitDate 
                      ? "border-red-500 focus:ring-red-500 focus:border-red-500" 
                      : "border-gray-200 focus:ring-primary-red focus:border-primary-red"
                  }`}
                />
                {formErrors.visitDate && (
                  <span className="text-xs text-red-500 block mt-1">{formErrors.visitDate}</span>
                )}
              </div>

              <button
                type="submit"
                className="w-full mt-4 flex items-center justify-center gap-2 rounded-xl bg-primary-red py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md hover:bg-red-700 active:scale-95 transition-all cursor-pointer"
              >
                <WhatsAppIcon className="h-4.5 w-4.5" />
                Submit via WhatsApp
              </button>
            </form>

            {formSubmitted && (
              <div className="mt-4 p-4 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-semibold leading-normal text-center">
                Inquiry compiled! WhatsApp redirecting now.
              </div>
            )}
          </section>
        </div>
      </div>

      {/* Zoomable Plan Modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setZoomedImage(null)}
          >
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-primary-red bg-white/10 p-2.5 rounded-full transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-7 w-7" />
            </button>
            
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-5xl w-full h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={zoomedImage}
                alt="Zoomed Plan"
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Viewer Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white hover:text-primary-red bg-white/10 p-2.5 rounded-full transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="h-7 w-7" />
            </button>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl w-full h-[70vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={project.images.gallery[lightboxIndex]}
                alt={`Lightbox image ${lightboxIndex + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

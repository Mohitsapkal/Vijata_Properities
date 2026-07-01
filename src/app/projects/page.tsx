"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Building2, Tag, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { projects, Project } from "@/data/projects";

const categories = [
  { label: "All Properties", value: "all" },
  { label: "Residential", value: "Residential" },
  { label: "Commercial", value: "Commercial" },
  { label: "Township", value: "Township" },
  { label: "NA Plots", value: "NA Plots" }
];

const statuses = [
  { label: "All Statuses", value: "all" },
  { label: "Available", value: "Available" },
  { label: "Sold Out", value: "Sold Out" },
  { label: "Coming Soon", value: "Coming Soon" }
];

export default function ProjectsShowcase() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory =
      selectedCategory === "all" || project.type === selectedCategory;

    const matchesStatus =
      selectedStatus === "all" || project.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 selection:bg-primary-red selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[450px] w-full flex items-center justify-center bg-black overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Hero_mansion.jpg"
            alt="Mansion Header"
            fill
            priority
            className="object-cover opacity-50 scale-105"
          />
          {/* Subtle Dark Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-black/40 to-black/75 z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="h-0.5 w-8 bg-primary-red" />
            <span className="text-sm font-semibold uppercase tracking-widest text-gradient-red">
              Curated Masterpieces
            </span>
            <span className="h-0.5 w-8 bg-primary-red" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] as any }}
            className="font-serif text-4xl sm:text-6xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight"
          >
            Discover Our Landmark Developments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg text-gray-300 max-w-xl mx-auto font-light leading-relaxed"
          >
            Explore our architectural icons, offering elite township residences, NA villa plots, and premium corporate hubs tailored to your lifestyle.
          </motion.p>
        </div>
      </section>

      {/* Search & Filter Panel */}
      <section className="relative z-30 max-w-7xl mx-auto w-full px-6 lg:px-8 -mt-16 mb-16">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Search bar */}
          <div className="lg:col-span-5 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search by project name, address, keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red text-sm transition-all"
            />
          </div>

          {/* Category Dropdown */}
          <div className="lg:col-span-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red text-sm transition-all bg-white"
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          {/* Status Dropdown */}
          <div className="lg:col-span-3">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red text-sm transition-all bg-white"
            >
              {statuses.map((stat) => (
                <option key={stat.value} value={stat.value}>
                  {stat.label}
                </option>
              ))}
            </select>
          </div>

          {/* Reset Filters / Count indicator */}
          <div className="lg:col-span-1 text-center lg:text-right">
            <span className="text-xs font-bold text-gray-400 uppercase block">
              {filteredProjects.length} Results
            </span>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-8 pb-32">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Section */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.images.hero}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  
                  {/* Status Badge */}
                  <span className={`absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-sm ${
                    project.status === "Available" 
                      ? "bg-emerald-500" 
                      : project.status === "Sold Out" 
                      ? "bg-gray-500" 
                      : "bg-amber-500"
                  }`}>
                    {project.status}
                  </span>

                  {/* Type Badge */}
                  <span className="absolute bottom-4 left-4 z-10 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-sm">
                    {project.type}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Location */}
                    <div className="flex items-center gap-1 text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2">
                      <MapPin className="h-3.5 w-3.5 text-primary-red shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>

                    {/* Name */}
                    <h3 className="font-serif text-2xl font-bold text-gray-950 group-hover:text-primary-red transition-colors duration-300">
                      {project.name}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-100 pt-6 mt-6 flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-widest">
                        Starting From
                      </span>
                      <span className="text-xl font-extrabold text-primary-red">
                        {project.price}
                      </span>
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-50 text-gray-900 group-hover:bg-primary-red group-hover:text-white transition-all duration-300 active:scale-90"
                    >
                      <ArrowRight className="h-4.5 w-4.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Building2 className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-bold text-gray-900">No Projects Found</h3>
            <p className="text-sm text-gray-500 mt-2">Try adjusting your filters or search keywords.</p>
          </motion.div>
        )}
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

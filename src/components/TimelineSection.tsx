"use client";

import React from "react";
import { MessageSquare, Eye, FileText, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consultation & Curation",
    desc: "We align on your preferences, budget, and desired locations to create a custom, handpicked list of properties.",
  },
  {
    number: "02",
    icon: Eye,
    title: "Exclusive Private Visits",
    desc: "Experience your potential future home through private, accompanied property tours led by our senior advisors.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Transparent Documentation",
    desc: "Our dedicated, in-house legal team performs title validation and drafts clean, fair contracts for complete security.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Handover & Ownership",
    desc: "Complete the transaction with secure escrow, register the title deeds, and step into your architectural dream.",
  },
];

export default function TimelineSection() {
  return (
    <section id="process" className="relative bg-white py-24 sm:py-32 text-gray-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Block */}
        <div className="mx-auto max-w-3xl text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold uppercase tracking-widest text-primary-red"
          >
            The Acquisition Journey
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-serif text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl"
          >
            How We Secure Your Dreams
          </motion.h3>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-primary-red mx-auto mt-6"
          />
        </div>

        {/* Timeline Path */}
        <div className="relative">
          {/* Vertical central line for larger screens */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden lg:block" />

          {/* Timeline Nodes */}
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;
              
              return (
                <div key={step.number} className="flex flex-col lg:flex-row items-center justify-between">
                  {/* Left Column (Content or Empty depending on odd/even) */}
                  <div className={`w-full lg:w-[45%] flex ${isEven ? "justify-end text-right" : "justify-start text-left order-last lg:order-none"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm max-w-md w-full"
                    >
                      <span className="font-serif text-5xl font-black text-primary-red/10 block mb-2">{step.number}</span>
                      <h4 className="text-xl font-bold font-serif text-gray-950 mb-3">{step.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                    </motion.div>
                  </div>

                  {/* Central Node Circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                    className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary-red text-white shadow-lg border-4 border-white my-6 lg:my-0"
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>

                  {/* Right Column (Content or Empty depending on odd/even) */}
                  <div className={`w-full lg:w-[45%] flex ${!isEven ? "justify-start text-left" : "justify-end text-right hidden lg:flex"}`}>
                    {!isEven ? (
                      <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm max-w-md w-full"
                      >
                        <span className="font-serif text-5xl font-black text-primary-red/10 block mb-2">{step.number}</span>
                        <h4 className="text-xl font-bold font-serif text-gray-950 mb-3">{step.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                      </motion.div>
                    ) : (
                      // Placeholder space for symmetry
                      <div className="w-full max-w-md" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

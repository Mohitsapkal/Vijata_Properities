"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { projects } from "@/data/projects";

export default function WhatsAppButton() {
  const pathname = usePathname();
  const phoneNumber = "919823131416";
  
  // Dynamic message template based on active route
  let text = "Hi Vijata Properties, I am interested in exploring your premium residential and commercial properties. Please share more details.";
  
  if (pathname && pathname.startsWith("/projects/")) {
    const slug = pathname.replace("/projects/", "");
    const matchedProject = projects.find((p) => p.slug === slug);
    if (matchedProject) {
      text = `Hello, I am interested in ${matchedProject.name}. Please share more details.`;
    }
  }

  const message = encodeURIComponent(text);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#20ba5a] active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-400"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulsing rings */}
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75"></span>
      <span className="absolute inline-flex h-14 w-14 animate-ping rounded-full bg-[#25D366] opacity-40 delay-300"></span>
      
      {/* WhatsApp Icon */}
      <MessageCircle className="relative h-8 w-8 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" />
    </a>
  );
}

"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { projects } from "@/data/projects";

export default function WhatsAppButton() {
  const pathname = usePathname();
  const phoneNumber = "919823131416";
  
  // Dynamic message template based on active route
  let text = "Hi Vijeta Properties, I am interested in exploring your premium residential and commercial properties. Please share more details.";
  
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="relative h-9 w-9 transition-transform duration-300 group-hover:rotate-12"
      >
        <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.128.555 4.195 1.613 6.012L.416 23.584l5.688-1.492A11.968 11.968 0 0012.031 24c6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm6.541 17.202c-.276.776-1.583 1.488-2.186 1.545-.561.053-1.282.261-4.086-.902-3.385-1.405-5.59-4.887-5.759-5.113-.17-.226-1.375-1.833-1.375-3.493 0-1.66.862-2.476 1.171-2.822.31-.345.674-.431.899-.431.226 0 .452 0 .647.011.206.011.481-.077.751.57.283.676.966 2.361 1.05 2.531.085.17.142.368.028.594-.113.226-.17.368-.34.566-.17.198-.354.439-.509.58-.17.155-.353.325-.155.666.198.341.879 1.455 1.888 2.355 1.3 1.161 2.388 1.521 2.727 1.691.34.17.538.141.74-.085.198-.226.852-.995 1.079-1.336.226-.341.452-.283.765-.17.311.113 1.966.927 2.305 1.097.339.17.565.254.649.395.085.141.085.819-.191 1.595z" />
      </svg>
    </a>
  );
}

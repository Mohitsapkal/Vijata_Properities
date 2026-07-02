"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const faqs = [
  {
    question: "What types of plots and properties does Vijeta Properties offer?",
    answer:
      "Vijeta Properties offers a curated portfolio of NA-approved residential plots, township villa plots, and premium commercial spaces across Chhatrapati Sambhajinagar. All properties feature modern infrastructure including tar/concrete roads, underground drainage, street lighting, and gated security.",
  },
  {
    question: "Are the plots NA approved and ready for construction?",
    answer:
      "Yes, all our plots are Collector NA (Non-Agricultural) sanctioned with clear titles. You receive an individual 7/12 extract, and properties are ready for immediate registration and construction. Our in-house legal team ensures 100% documentation compliance.",
  },
  {
    question: "Is bank loan facility available for plot purchase?",
    answer:
      "Absolutely. Our projects are approved by leading nationalised and private banks. We assist buyers with the complete loan documentation process and coordinate with bank representatives for swift approvals and disbursements.",
  },
  {
    question: "How can I schedule a free site visit?",
    answer:
      "You can book a free site visit through our website's inquiry form, via WhatsApp, or by calling our advisory team directly. We provide complimentary chauffeured visits to all our project sites with a dedicated property advisor to walk you through the layouts and amenities.",
  },
  {
    question: "What is the process for booking and registration?",
    answer:
      "The process is simple: (1) Select your preferred plot after a site visit, (2) Pay the booking amount to reserve, (3) Complete KYC documentation, (4) Execute the sale agreement, and (5) Complete registration at the Sub-Registrar office. Our team handles the entire paperwork end-to-end.",
  },
  {
    question: "What amenities are included in Vijeta Properties projects?",
    answer:
      "Our projects feature premium amenities including grand entry gates with security cabins, community temples, children's play areas, jogging/walking tracks, landscaped gardens, wide internal roads (9m+), underground drainage, individual water connections, LED street lighting, and 24/7 security surveillance.",
  },
  {
    question: "Are there any hidden charges apart from the plot price?",
    answer:
      "We believe in complete transparency. The quoted price includes basic infrastructure development charges. Additional statutory costs like registration fees, stamp duty, GST (if applicable), and legal charges are communicated upfront before booking. There are absolutely no hidden costs.",
  },
  {
    question: "What is the expected appreciation and ROI on your properties?",
    answer:
      "Our projects are strategically located in high-growth corridors near DMIC industrial hubs, bypass roads, and upcoming infrastructure developments. Historical data from our past projects shows consistent 15-25% annual appreciation. However, real estate investments are subject to market conditions.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

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

      // FAQ items stagger
      const items = sectionRef.current.querySelectorAll(".faq-item");
      if (items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: items[0],
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }
  }, []);

  // Animate answer open/close
  useEffect(() => {
    answerRefs.current.forEach((el, idx) => {
      if (!el) return;
      if (idx === openIndex) {
        gsap.set(el, { display: "block" });
        gsap.fromTo(
          el,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
        );
      } else {
        gsap.to(el, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => gsap.set(el, { display: "none" }),
        });
      }
    });
  }, [openIndex]);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative bg-gray-50 py-24 sm:py-32 text-gray-900 overflow-hidden"
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header Block */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="section-sub text-sm font-semibold uppercase tracking-widest text-gradient-red">
            Have Questions?
          </h2>
          <h3 className="section-title mt-4 font-serif text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            Frequently Asked Questions
          </h3>
          <div className="section-line h-1 bg-primary-red mx-auto mt-6" style={{ width: 0 }} />
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`faq-item rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-primary-red/20 bg-white shadow-lg"
                    : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                }`}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-start gap-4 p-6 text-left cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <div
                    className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${
                      isOpen
                        ? "bg-primary-red text-white"
                        : "bg-red-50 text-primary-red group-hover:bg-red-100"
                    }`}
                  >
                    <HelpCircle className="h-4 w-4" />
                  </div>
                  <span
                    className={`flex-1 text-base font-semibold leading-snug transition-colors duration-200 ${
                      isOpen ? "text-gray-950" : "text-gray-800"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 mt-0.5 text-gray-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary-red" : ""
                    }`}
                  />
                </button>

                {/* Answer Panel */}
                <div
                  ref={(el) => { answerRefs.current[idx] = el; }}
                  style={{ height: 0, opacity: 0, display: "none", overflow: "hidden" }}
                >
                  <div className="px-6 pb-6 pl-18">
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Still have questions?{" "}
            <a
              href="https://wa.me/919823131416?text=Hi%2C%20I%20have%20a%20question%20about%20Vijeta%20Properties"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-[#25D366] hover:underline"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat with us on WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

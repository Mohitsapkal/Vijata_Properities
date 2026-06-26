"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Villa",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let isValid = true;
    const tempErrors = { name: "", email: "", phone: "", message: "" };

    if (!formData.name.trim()) {
      tempErrors.name = "Full Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\+?[0-9\s\-]{8,15}$/.test(formData.phone)) {
      tempErrors.phone = "Please enter a valid phone number";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message cannot be empty";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const compiledText = `*Vijata Properties Inquiry*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Property Type:* ${formData.type}\n` +
      `*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(compiledText)}`;
    
    // Small delay to simulate local submission state change
    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section id="contact" className="relative bg-white py-24 sm:py-32 text-gray-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Block */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold uppercase tracking-widest text-primary-red"
          >
            Inquire Now
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-serif text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl"
          >
            Begin Your Luxury Journey
          </motion.h3>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-primary-red mx-auto mt-6"
          />
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-10"
          >
            <div>
              <h4 className="font-serif text-2xl font-bold text-gray-950">Get in Touch</h4>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                Connect with our senior portfolio directors. Fill out the inquiry form to book a private tour, receive blueprints, or discuss legal acquisitions on WhatsApp.
              </p>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-primary-red border border-gray-100">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-950 text-sm uppercase tracking-wider">Office Headquarters</h5>
                  <p className="mt-1 text-sm text-gray-600">
                    Aurora Tower, Penthouse Level 42, Corporate Finance Hub
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-primary-red border border-gray-100">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-950 text-sm uppercase tracking-wider">Email Advisory</h5>
                  <p className="mt-1 text-sm text-gray-600 hover:text-primary-red transition-colors">
                    concierge@vijataproperties.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-primary-red border border-gray-100">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-950 text-sm uppercase tracking-wider">Hotline Advisory</h5>
                  <p className="mt-1 text-sm text-gray-600 hover:text-primary-red transition-colors">
                    +91 98765 43210
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-gray-50 rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-white text-sm outline-none transition-all focus:border-primary-red ${
                      errors.name ? "border-red-500" : "border-gray-200"
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-white text-sm outline-none transition-all focus:border-primary-red ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    }`}
                    placeholder="Enter your email"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-white text-sm outline-none transition-all focus:border-primary-red ${
                      errors.phone ? "border-red-500" : "border-gray-200"
                    }`}
                    placeholder="e.g. +91 98765 43210"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </div>

                {/* Property Type */}
                <div>
                  <label htmlFor="type" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Property Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm outline-none transition-all focus:border-primary-red cursor-pointer"
                  >
                    <option value="Villa">Luxury Villa</option>
                    <option value="Penthouse">Luxury Penthouse</option>
                    <option value="Commercial">Commercial Workspace</option>
                    <option value="Estate">Bespoke Estate</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Detailed Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg border bg-white text-sm outline-none transition-all focus:border-primary-red resize-none ${
                    errors.message ? "border-red-500" : "border-gray-200"
                  }`}
                  placeholder="Tell us about your requirements..."
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary-red hover:bg-red-700 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:scale-[1.01] active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Preparing WhatsApp Chat...</span>
                ) : (
                  <>
                    <MessageCircle className="h-4.5 w-4.5" fill="currentColor" />
                    Send Inquiry on WhatsApp
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

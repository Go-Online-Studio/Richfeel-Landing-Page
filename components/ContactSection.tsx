"use client";

import { useState, FormEvent } from "react";
import { trackEvent } from "@/lib/fpixel";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const services = [
  "Hair Transplant",
  "Hair Fall Control",
  "Scalp Treatment",
  "PRP Therapy",
  "Mesotherapy",
  "Laser Therapy",
  "Ayurvedic Hair Care",
  "Scalp Micropigmentation",
  "General Consultation",
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Richfeel Trichology Center", "Race Course Circle, Vadodara", "Gujarat – 390007"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 98765 43210", "+91 0265-XXXXXXX"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["vadodara@richfeel.in", "richfeelvadodara.in"],
  },
  {
    icon: Clock,
    title: "Clinic Hours",
    lines: ["Mon–Sat: 10:00 AM – 7:00 PM", "Sun: 10:00 AM – 2:00 PM"],
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate async form submission — integrate with your backend/CRM here
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("success");
    trackEvent("Lead", {
      content_name: form.service || "General Consultation",
      status: "submitted",
    });
  };

  return (
    <section
      id="contact"
      className="section-padding bg-slate-50"
      aria-label="Contact Us"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold tracking-wide uppercase mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 leading-tight mb-4">
            Start Your{" "}
            <span className="text-gradient">Hair Restoration Journey</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            Book a free, no-obligation consultation. Our trichology team will
            analyse your hair and scalp and suggest a personalised plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-2xl p-5 border border-slate-100 flex gap-4 items-start shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-700 mb-1">{c.title}</p>
                  {c.lines.map((l) => (
                    <p key={l} className="text-slate-500 text-sm leading-relaxed">
                      {l}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 min-h-[220px] flex items-center justify-center">
              <iframe
                title="Richfeel Vadodara Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.2765349396!2d73.18265!3d22.30832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE4JzI5LjkiTiA3M8KwMTAnNTcuNiJF!5e0!3m2!1sen!2sin!4v1692000000000!5m2!1sen!2sin"
                width="100%"
                height="220"
                className="border-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Google Map – Richfeel Vadodara location"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <div className="w-20 h-20 rounded-full bg-teal-50 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-10 h-10 text-teal-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  We&apos;ll be in touch soon!
                </h3>
                <p className="text-slate-500 max-w-sm leading-relaxed">
                  Thank you for reaching out. Our trichology team will contact you within 24 hours to confirm your consultation.
                </p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ name: "", phone: "", email: "", service: "", message: "" }); }}
                  className="mt-6 px-6 py-3 rounded-full border-2 border-slate-200 text-slate-600 font-semibold text-sm hover:border-blue-300 hover:text-blue-600 transition-all"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} id="contact-form" noValidate>
                <h3 className="text-xl font-bold text-slate-800 mb-6">
                  Book Your Free Consultation
                </h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-600 mb-1.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  {/* Phone */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-semibold text-slate-600 mb-1.5">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-600 mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  {/* Service */}
                  <div>
                    <label htmlFor="contact-service" className="block text-sm font-semibold text-slate-600 mb-1.5">
                      Service Needed <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white appearance-none cursor-pointer"
                    >
                      <option value="">Select a treatment</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-600 mb-1.5">
                      Message (Optional)
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your concern..."
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Consent note */}
                <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                  By submitting, you agree to be contacted by Richfeel Vadodara via phone,
                  email, or WhatsApp. Your data is safe and will not be shared with third parties.
                </p>

                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={status === "loading"}
                  className="mt-5 w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl gradient-primary text-white font-bold text-base shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Book My Free Consultation
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

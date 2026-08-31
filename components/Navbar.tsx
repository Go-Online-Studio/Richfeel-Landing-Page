"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#treatments", label: "Treatments" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg shadow-slate-200/60 py-3"
          : "bg-transparent py-5"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group py-1" aria-label="Richfeel Vadodara Home">
            <img
              src="/richfeel-logo.png"
              alt="Richfeel Logo"
              className="h-8 sm:h-9 rounded-lg shadow-sm w-auto object-contain transition-all duration-300"
            />
            <span
              className={`text-xs uppercase tracking-widest font-semibold border-l pl-2 py-0.5 transition-colors ${
                scrolled ? "text-blue-600 border-slate-300" : "text-blue-200 border-white/40"
              }`}
            >
              Vadodara
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-500 ${
                  scrolled ? "text-slate-600" : "text-slate-200"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled ? "text-blue-600" : "text-blue-200 hover:text-white"
              }`}
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </a>
            <a
              href="#contact"
              id="nav-book-btn"
              className="px-5 py-2.5 rounded-full text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-blue-300/50 animate-pulse-glow"
            >
              Book Free Consultation
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
            }`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass mx-4 mt-2 rounded-2xl p-4 shadow-xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-slate-200 mt-2 pt-3 flex flex-col gap-2">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 px-4 py-2 text-blue-600 font-medium text-sm"
              >
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl bg-blue-600 text-white font-semibold text-center hover:bg-blue-700 transition-colors"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

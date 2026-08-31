"use client";

import { useEffect, useRef } from "react";
import { ChevronDown, Sparkles, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 12;
      const y = ((e.clientY - top) / height - 0.5) * 8;
      el.style.setProperty("--rx", `${y}deg`);
      el.style.setProperty("--ry", `${x}deg`);
    };
    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Animated mesh / blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-3xl animate-float" />
        <div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-teal-400/20 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-300/10 blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-teal-300" />
          Vadodara&apos;s Premier Hair &amp; Scalp Clinic
          <ShieldCheck className="w-4 h-4 text-teal-300" />
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Restore Your Hair.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-300">
            Reclaim Your Confidence.
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="max-w-2xl mx-auto text-lg sm:text-xl text-blue-100 leading-relaxed mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Clinically proven hair and scalp treatments, personalised by expert
          trichologists. From hair fall control to advanced hair transplants —
          real results, not promises.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#contact"
            id="hero-book-btn"
            className="px-8 py-4 rounded-full bg-white text-blue-700 font-bold text-base sm:text-lg shadow-2xl hover:shadow-blue-200/40 hover:scale-105 transition-all duration-200 min-w-[220px] text-center"
          >
            Book Free Consultation
          </a>
          <a
            href="#treatments"
            id="hero-treatments-btn"
            className="px-8 py-4 rounded-full border-2 border-white/50 text-white font-semibold text-base sm:text-lg hover:bg-white/10 transition-all duration-200 min-w-[180px] text-center backdrop-blur-sm"
          >
            View Treatments
          </a>
        </div>

        {/* Stats bar */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { value: "15,000+", label: "Patients Treated" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "12+", label: "Years of Expertise" },
            { value: "20+", label: "Treatments Offered" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-4 text-center border border-white/20"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-blue-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}

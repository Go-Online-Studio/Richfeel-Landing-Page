"use client";

import { Award, Microscope, Users, Star, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Microscope,
    title: "Advanced Trichology",
    description:
      "State-of-the-art scalp analysis technology and science-backed treatment protocols used by leading clinics worldwide.",
  },
  {
    icon: Award,
    title: "Award-Winning Results",
    description:
      "Recognised nationally for consistent, measurable outcomes in hair restoration and scalp health management.",
  },
  {
    icon: Users,
    title: "15,000+ Patients Served",
    description:
      "Over a decade of experience serving thousands of patients across Vadodara and Gujarat with personalised care.",
  },
  {
    icon: Star,
    title: "98% Satisfaction Rate",
    description:
      "Our evidence-based approach and patient-first philosophy deliver results that speak for themselves.",
  },
];

const achievements = [
  "India's largest trichology chain network",
  "ISO-certified treatment protocols",
  "FDA-approved products & techniques",
  "Non-surgical & surgical options available",
  "Personalised treatment plans for every patient",
  "Confidential & judgment-free consultations",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding bg-white"
      aria-label="About Richfeel Vadodara"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold tracking-wide uppercase mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 leading-tight mb-4">
            Where Science Meets{" "}
            <span className="text-gradient">Hair Wellness</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Richfeel Vadodara brings 12+ years of trichological expertise to every
            consultation — combining cutting-edge diagnostics with clinically proven
            therapies for lasting results.
          </p>
        </div>

        {/* Two-col layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Visual */}
          <div className="relative">
            {/* Main card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600 to-slate-900 p-8 min-h-[420px] flex flex-col justify-end">
              {/* Background pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)",
                  backgroundSize: "48px 48px",
                }}
              />

              {/* Floating badge */}
              <div className="absolute top-6 right-6 glass rounded-2xl p-4 text-center shadow-xl">
                <div className="text-3xl font-extrabold text-blue-700">12+</div>
                <div className="text-xs text-slate-600 font-medium mt-0.5">Years<br />of Excellence</div>
              </div>

              {/* Bottom text overlay */}
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-400/20 border border-teal-400/30 text-teal-300 text-xs font-semibold mb-3">
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  Now accepting new patients
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Vadodara&apos;s Most Trusted<br />Hair Clinic
                </h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  Comprehensive diagnostics, evidence-based treatments, and compassionate care — all under one roof.
                </p>
              </div>
            </div>

            {/* Floating stat cards */}
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl px-5 py-4 shadow-xl border border-white/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-xl font-extrabold text-slate-800">15,000+</div>
                  <div className="text-xs text-slate-500">Patients Treated</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="gradient-card rounded-2xl p-5 border border-blue-50 card-hover"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center mb-3 shadow-md shadow-blue-200">
                    <f.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-800 mb-1.5">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>

            {/* Achievements list */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-bold text-slate-700 mb-4 text-sm uppercase tracking-wide">
                Why Patients Choose Us
              </h3>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {achievements.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Scissors,
  Zap,
  Droplets,
  Leaf,
  Activity,
  Shield,
  ScanFace,
  Syringe,
} from "lucide-react";

const treatments = [
  {
    icon: Scissors,
    name: "Hair Transplant",
    tag: "Most Popular",
    tagColor: "bg-blue-100 text-blue-700",
    description:
      "Advanced FUE and FUT hair transplant procedures for permanent, natural-looking hair restoration results.",
    color: "from-blue-600 to-blue-800",
  },
  {
    icon: Activity,
    name: "Hair Fall Control",
    tag: "High Demand",
    tagColor: "bg-teal-100 text-teal-700",
    description:
      "Clinically proven treatment plans targeting the root cause of hair fall using diagnostics and tailored therapy.",
    color: "from-teal-500 to-teal-700",
  },
  {
    icon: Droplets,
    name: "Scalp Treatment",
    tag: "Specialised",
    tagColor: "bg-purple-100 text-purple-700",
    description:
      "Deep scalp cleansing, hydration, and anti-dandruff protocols to restore scalp health and balance.",
    color: "from-purple-600 to-purple-800",
  },
  {
    icon: Zap,
    name: "PRP Therapy",
    tag: "Non-Surgical",
    tagColor: "bg-amber-100 text-amber-700",
    description:
      "Platelet-Rich Plasma injections to stimulate dormant follicles and naturally boost hair regrowth.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Syringe,
    name: "Mesotherapy",
    tag: "Advanced",
    tagColor: "bg-rose-100 text-rose-700",
    description:
      "Targeted micro-injections delivering vitamins and growth factors directly to the hair follicle level.",
    color: "from-rose-500 to-rose-700",
  },
  {
    icon: Leaf,
    name: "Ayurvedic Hair Care",
    tag: "Holistic",
    tagColor: "bg-green-100 text-green-700",
    description:
      "Time-tested Ayurvedic formulations combined with modern trichology for gentle yet effective hair nourishment.",
    color: "from-green-600 to-green-800",
  },
  {
    icon: ScanFace,
    name: "Scalp Micropigmentation",
    tag: "Cosmetic",
    tagColor: "bg-indigo-100 text-indigo-700",
    description:
      "A non-surgical solution that creates the appearance of a natural hairline using specialised micro-pigments.",
    color: "from-indigo-600 to-indigo-800",
  },
  {
    icon: Shield,
    name: "Low-Level Laser Therapy",
    tag: "FDA Approved",
    tagColor: "bg-sky-100 text-sky-700",
    description:
      "Painless red-light laser therapy to stimulate cellular activity and promote hair growth safely.",
    color: "from-sky-500 to-sky-700",
  },
];

export default function TreatmentsSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      id="treatments"
      className="section-padding bg-slate-50"
      aria-label="Our Treatments"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold tracking-wide uppercase mb-4">
              Treatments
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 leading-tight">
              Comprehensive{" "}
              <span className="text-gradient">Hair Solutions</span>
            </h2>
            <p className="text-slate-500 mt-3 max-w-xl leading-relaxed">
              Every treatment is customised after a thorough scalp analysis. Swipe to explore our full range.
            </p>
          </div>
          {/* Nav buttons */}
          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              id="slider-prev-btn"
              className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
              aria-label="Previous treatment"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              id="slider-next-btn"
              className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-200 shadow-md shadow-blue-200"
              aria-label="Next treatment"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {treatments.map((t) => (
              <div key={t.name} className="embla__slide">
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 card-hover h-full flex flex-col">
                  {/* Card top accent */}
                  <div className={`bg-gradient-to-br ${t.color} p-6 relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: "radial-gradient(circle at 70% 30%, white 2px, transparent 2px)",
                        backgroundSize: "32px 32px",
                      }}
                    />
                    <div className="relative z-10 flex items-start justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-inner">
                        <t.icon className="w-7 h-7 text-white" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${t.tagColor}`}>
                        {t.tag}
                      </span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{t.name}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed flex-1">{t.description}</p>
                    <a
                      href="#contact"
                      id={`treatment-inquire-${t.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-50 hover:bg-blue-600 border border-slate-200 hover:border-blue-600 text-slate-700 hover:text-white text-sm font-semibold transition-all duration-200 w-fit"
                    >
                      Inquire Now
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All treatments CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-primary text-white font-semibold text-base shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:scale-105 transition-all duration-200"
          >
            Get a Personalised Treatment Plan
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

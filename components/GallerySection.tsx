"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

// High-speed, reliable Unsplash clinic and hair restoration photography
const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    alt: "Hair transplant procedure and consultation",
    label: "Hair Transplant",
    span: "col-span-1 row-span-2",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
    alt: "Advanced scalp treatment therapy",
    label: "Scalp Treatment",
    span: "col-span-1",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
    alt: "PRP therapy session",
    label: "PRP Therapy",
    span: "col-span-1",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    alt: "Hair fall control results",
    label: "Hair Fall Control",
    span: "col-span-1 row-span-2",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80",
    alt: "Richfeel Vadodara modern clinic facility",
    label: "Our Clinic",
    span: "col-span-1",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
    alt: "Mesotherapy clinical treatment",
    label: "Mesotherapy",
    span: "col-span-1",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=600&q=80",
    alt: "Laser therapy hair revitalization",
    label: "Laser Therapy",
    span: "col-span-1",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
    alt: "Ayurvedic holistic hair care",
    label: "Ayurvedic Care",
    span: "col-span-1",
  },
];

export default function GallerySection() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>("");

  const openLightbox = (src: string, alt: string) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
  };

  const closeLightbox = () => setLightboxSrc(null);

  return (
    <section
      id="gallery"
      className="section-padding bg-white"
      aria-label="Gallery – Results & Clinic"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold tracking-wide uppercase mb-4">
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 leading-tight mb-4">
            Real Results,{" "}
            <span className="text-gradient">Real People</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            Witness the transformations our patients experience through our
            clinically proven treatments.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryItems.map((item) => (
            <button
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => openLightbox(item.src, item.alt)}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${item.span} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-slate-100`}
              aria-label={`View ${item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-white font-semibold text-sm mb-1">{item.label}</span>
                <div className="flex items-center gap-1 text-blue-300 text-xs">
                  <ZoomIn className="w-3.5 h-3.5" />
                  Click to zoom
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* CTA below gallery */}
        <p className="text-center mt-10 text-slate-500 text-sm">
          Results may vary. Individual outcomes depend on hair type, treatment stage, and adherence to protocol.
        </p>
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl max-h-[85vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxSrc}
              alt={lightboxAlt}
              fill
              className="object-contain rounded-2xl"
              unoptimized
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-slate-300 p-2 rounded-full bg-white/10 backdrop-blur-sm transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

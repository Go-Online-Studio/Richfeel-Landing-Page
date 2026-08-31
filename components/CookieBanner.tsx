"use client";

import { useState, useEffect } from "react";
import { Cookie, X, ShieldCheck } from "lucide-react";
import { FB_PIXEL_ID, grantPixelConsent, revokePixelConsent, pageview } from "@/lib/fpixel";

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const consent = localStorage.getItem("richfeel_cookie_consent");
      if (!consent) {
        // Show cookie card right away on page load
        setVisible(true);
      }
    } catch (e) {
      setVisible(true);
    }
  }, []);

  const acceptAll = () => {
    try {
      localStorage.setItem("richfeel_cookie_consent", "accepted");
    } catch (e) {}
    setVisible(false);
    grantPixelConsent();
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("init", FB_PIXEL_ID);
      pageview();
    }
    window.dispatchEvent(new Event("cookie_consent_updated"));
  };

  const decline = () => {
    try {
      localStorage.setItem("richfeel_cookie_consent", "declined");
    } catch (e) {}
    setVisible(false);
    revokePixelConsent();
    window.dispatchEvent(new Event("cookie_consent_updated"));
  };

  if (!mounted || !visible) return null;

  return (
    <div
      id="cookie-banner"
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent card"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200/80 p-5 transition-all animate-fade-in-up"
    >
      <div className="flex items-start gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5 border border-blue-100">
          <Cookie className="w-5 h-5 text-blue-600" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-1">
            <h4 className="font-bold text-slate-900 text-sm">Cookie &amp; Privacy Preferences</h4>
            <ShieldCheck className="w-4 h-4 text-blue-600" />
          </div>
          <p className="text-slate-600 text-xs leading-relaxed">
            We use cookies and Meta Pixel to improve your experience and measure ad relevance.
            Please accept cookies to allow performance and advertising tracking.
          </p>
          <div className="flex flex-wrap items-center gap-2.5 mt-4">
            <button
              id="cookie-accept-btn"
              onClick={acceptAll}
              className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 active:scale-95 transition-all shadow-md shadow-blue-200"
            >
              Accept All
            </button>
            <button
              id="cookie-essential-btn"
              onClick={decline}
              className="px-3.5 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 active:scale-95 transition-all border border-slate-200"
            >
              Reject / Essential Only
            </button>
          </div>
        </div>
        <button
          onClick={decline}
          className="text-slate-400 hover:text-slate-600 transition-colors p-1 flex-shrink-0 rounded-lg hover:bg-slate-100"
          aria-label="Close cookie card"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

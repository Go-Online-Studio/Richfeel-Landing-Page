import { Phone, Mail, MapPin } from "lucide-react";

// Inline SVG brand icons (lucide-react does not ship social brand icons)
const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const Facebook = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Youtube = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);

const footerLinks = {
  Treatments: [
    "Hair Transplant",
    "Hair Fall Control",
    "Scalp Treatment",
    "PRP Therapy",
    "Mesotherapy",
    "Laser Therapy",
  ],
  Company: [
    "About Us",
    "Gallery",
    "Testimonials",
    "Contact Us",
    "Privacy Policy",
    "Terms of Service",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/richfeel-logo.png"
                alt="Richfeel Logo"
                className="h-8 sm:h-9 w-auto rounded-lg shadow-sm object-contain"
              />
              <span className="text-xs uppercase tracking-widest font-semibold text-blue-300 border-l border-slate-700 pl-2 py-0.5">
                Vadodara
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-400 max-w-xs">
              Vadodara&apos;s leading hair and scalp clinic. Evidence-based trichology
              with compassionate care — restoring confidence, one patient at a time.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: "https://instagram.com/richfeelvadodara", label: "Instagram" },
                { Icon: Facebook, href: "https://facebook.com/richfeelvadodara", label: "Facebook" },
                { Icon: Youtube, href: "https://youtube.com/@richfeelvadodara", label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">
                {group}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-blue-300 text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                Race Course Circle, Vadodara, Gujarat – 390007
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-blue-300 transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-400" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="mailto:vadodara@richfeel.in"
                  className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-blue-300 transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  vadodara@richfeel.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Richfeel Vadodara. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            <a
              href="https://richfeelvadodara.in"
              className="hover:text-blue-400 transition-colors"
            >
              richfeelvadodara.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

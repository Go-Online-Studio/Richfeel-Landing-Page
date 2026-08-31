"use client";

import { useEffect } from "react";
import Script from "next/script";
import { FB_PIXEL_ID, grantPixelConsent, revokePixelConsent, pageview } from "@/lib/fpixel";

export default function MetaPixel() {
  useEffect(() => {
    const handleConsentChange = () => {
      const consent = typeof window !== "undefined" ? localStorage.getItem("richfeel_cookie_consent") : null;
      if (consent === "accepted") {
        grantPixelConsent();
        if (typeof window !== "undefined" && window.fbq) {
          window.fbq("init", FB_PIXEL_ID);
          pageview();
        }
      } else {
        revokePixelConsent();
      }
    };

    // Check on mount
    handleConsentChange();

    window.addEventListener("cookie_consent_updated", handleConsentChange);
    return () => {
      window.removeEventListener("cookie_consent_updated", handleConsentChange);
    };
  }, []);

  return (
    <>
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            var consent = null;
            try {
              consent = localStorage.getItem('richfeel_cookie_consent');
            } catch (e) {}

            if (consent === 'accepted') {
              fbq('consent', 'grant');
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            } else {
              fbq('consent', 'revoke');
            }
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}

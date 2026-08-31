export const FB_PIXEL_ID = "1375431714166121";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

/**
 * Trigger Meta Pixel PageView
 */
export const pageview = () => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "PageView");
  }
};

/**
 * Trigger custom Meta Pixel event
 */
export const trackEvent = (name: string, options: Record<string, unknown> = {}) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", name, options);
  }
};

/**
 * Grant consent to Meta Pixel
 */
export const grantPixelConsent = () => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("consent", "grant");
  }
};

/**
 * Revoke consent from Meta Pixel
 */
export const revokePixelConsent = () => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("consent", "revoke");
  }
};

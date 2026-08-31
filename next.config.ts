import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow local network devices (e.g. Mac, iPhone, iPad) to access dev server without 403 Forbidden
  allowedDevOrigins: [
    "192.168.1.21",
    "192.168.1.*",
    "192.168.*.*",
    "localhost",
    "localhost:3000",
    "192.168.1.21:3000",
  ],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;

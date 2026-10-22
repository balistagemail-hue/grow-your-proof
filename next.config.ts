import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The landing page and the contact form are static files in /public.
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/index.html" },
        { source: "/get-in-touch", destination: "/get-in-touch.html" },
        { source: "/privacy-policy", destination: "/privacy-policy.html" },
        { source: "/cookie-policy", destination: "/cookie-policy.html" },
        { source: "/terms-and-conditions", destination: "/terms-and-conditions.html" },
        { source: "/signature", destination: "/signature.html" },
        { source: "/signature-bs", destination: "/signature-bs.html" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The landing page and the contact form are static files in /public.
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/index.html" },
        { source: "/get-in-touch", destination: "/get-in-touch.html" },
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

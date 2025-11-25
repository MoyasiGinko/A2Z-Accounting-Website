/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["execor.vamtam.com"],
    unoptimized: true, // Since we're using static assets
  },
  // Enable compression
  compress: true,
  // Enable experimental features for better performance
  experimental: {
    // optimizeCss: true, // Removed due to critters module issues
  },
  // PWA and performance optimizations
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "X-Frame-Options",
          value: "DENY",
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "Referrer-Policy",
          value: "origin-when-cross-origin",
        },
      ],
    },
  ],
};

module.exports = nextConfig;

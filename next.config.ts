import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/buy-iptv-uk",
        destination: "/iptv-uk",
        permanent: true,
      },
      {
        source: "/blog/iptv-vs-sky-comparison",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/premier-league-streaming-guide",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/iptv-free-trial",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/best-iptv-uk-guide-2026",
        destination: "/blog/best-iptv-uk-guide",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

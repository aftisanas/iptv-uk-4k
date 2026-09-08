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
  /**
   * Every commercial landing consolidates into /buy-iptv.
   *
   * The site previously ran eleven separate money pages plus /iptv-uk. They all
   * sold the same four plans, so they competed with each other for the same
   * queries and split the signal eleven ways. One page now carries the offer and
   * everything else points at it.
   *
   * /buy-iptv-uk and /iptv-subscription-uk already pointed at /iptv-uk, so those
   * two are now chains (buy-iptv-uk -> iptv-uk -> buy-iptv) as far as any link
   * still pointing at the original is concerned. They are repointed straight at
   * /buy-iptv here so the chain is only ever walked by external links, never by
   * anything on this site.
   *
   * The page files under src/app for the redirected routes are deliberately kept
   * rather than deleted — the redirect makes them unreachable, and the copy is
   * worth having if any of these come back.
   */
  async redirects() {
    const toBuyIptv = [
      "/",
      "/iptv-uk",
      "/buy-iptv-uk",
      "/iptv-subscription-uk",
      "/best-iptv-uk",
      "/best-iptv-uk/best-iptv-provider-uk",
      "/iptv-provider-uk",
      "/uk-sports-iptv",
      "/iptv-free-trial-uk",
      "/iptv-subscription",
      "/iptv-subscription/4k-iptv-uk",
      "/iptv-subscription/iptv-subscription-uk",
      "/iptv-subscription/iptv-uk-subscription",
      "/iptv-subscription/uk-iptv-subscription",
    ].map((source) => ({
      source,
      destination: "/buy-iptv",
      permanent: true,
    }));

    return [
      ...toBuyIptv,
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

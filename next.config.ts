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
   * Every commercial landing consolidates into /uk-iptv.
   *
   * The site once ran twelve money pages selling the same four plans to the same
   * queries, competing with each other and splitting the signal twelve ways. One
   * page carries the offer; everything else points at it.
   *
   * That page has now moved three times: /iptv-uk (15 Aug), /buy-iptv (8 Sep),
   * /uk-iptv (14 Sep). Every source below is repointed at the current
   * destination on each move, so nothing on this site ever walks a chain — a
   * request to any of these URLs is one 301 and it arrives. The chains exist
   * only in Google's memory of the earlier destinations and in whatever external
   * links still point at the oldest URLs, which is why the moves are not free:
   * each one restarts the indexing and consolidation work at a new URL before
   * the previous one has finished.
   *
   * The page files under src/app for the redirected routes are deliberately kept
   * rather than deleted — the redirect makes them unreachable, and the copy is
   * worth having if any of these come back.
   */
  async redirects() {
    const toUkIptv = [
      "/",
      "/buy-iptv",
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
      destination: "/uk-iptv",
      permanent: true,
    }));

    return [
      ...toUkIptv,
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

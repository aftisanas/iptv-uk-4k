import type { MetadataRoute } from "next";
import { BLOG_POSTS, SITE_URL } from "@/lib/constants";

/**
 * Per-route last-meaningful-update dates.
 *
 * Deliberately hand-maintained rather than `new Date()` at build time: a
 * build-time timestamp re-stamps every URL on every deploy, so `lastmod`
 * carries no signal and crawlers learn to ignore it. Bump the entry for a
 * route only when that route's content actually changes.
 */
const ROUTE_LAST_MODIFIED: Record<string, string> = {
  "/": "2026-07-25",
  "/iptv-uk": "2026-08-15",
  "/iptv-subscription-uk": "2026-07-25",
  "/best-iptv-uk": "2026-07-25",
  "/best-iptv-uk/best-iptv-provider-uk": "2026-08-02",
  "/iptv-provider-uk": "2026-08-02",
  "/uk-sports-iptv": "2026-08-02",
  "/iptv-free-trial-uk": "2026-08-02",
  "/iptv-subscription": "2026-07-25",
  "/iptv-subscription/iptv-subscription-uk": "2026-07-25",
  "/iptv-subscription/iptv-uk-subscription": "2026-07-25",
  "/iptv-subscription/4k-iptv-uk": "2026-08-02",
  "/iptv-subscription/uk-iptv-subscription": "2026-08-02",
  "/blog": "2026-07-27",
  "/tutorials": "2026-07-27",
  "/contact": "2026-07-27",
  "/refund": "2026-04-20",
  "/privacy": "2026-04-20",
  "/terms": "2026-04-20",
  "/dmca": "2026-04-20",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const fallback = new Date("2026-04-20");

  const parseDate = (value: string | undefined) => {
    if (!value) return fallback;
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? fallback : parsed;
  };

  const lastModified = (path: string) => parseDate(ROUTE_LAST_MODIFIED[path]);

  const staticRoutes: MetadataRoute.Sitemap = [
    // Homepage
    { url: SITE_URL, lastModified: lastModified("/"), changeFrequency: "weekly", priority: 1 },

    // Commercial landings (highest transactional intent after homepage)
    { url: `${SITE_URL}/iptv-uk`, lastModified: lastModified("/iptv-uk"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/iptv-subscription-uk`, lastModified: lastModified("/iptv-subscription-uk"), changeFrequency: "weekly", priority: 0.9 },

    // Standalone commercial landings (301 destinations from the legacy domain)
    { url: `${SITE_URL}/iptv-provider-uk`, lastModified: lastModified("/iptv-provider-uk"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/uk-sports-iptv`, lastModified: lastModified("/uk-sports-iptv"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/iptv-free-trial-uk`, lastModified: lastModified("/iptv-free-trial-uk"), changeFrequency: "monthly", priority: 0.7 },

    // Pillar article + child
    { url: `${SITE_URL}/best-iptv-uk`, lastModified: lastModified("/best-iptv-uk"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/best-iptv-uk/best-iptv-provider-uk`, lastModified: lastModified("/best-iptv-uk/best-iptv-provider-uk"), changeFrequency: "monthly", priority: 0.7 },

    // Subscription hub + child articles
    { url: `${SITE_URL}/iptv-subscription`, lastModified: lastModified("/iptv-subscription"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/iptv-subscription/4k-iptv-uk`, lastModified: lastModified("/iptv-subscription/4k-iptv-uk"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/iptv-subscription/iptv-subscription-uk`, lastModified: lastModified("/iptv-subscription/iptv-subscription-uk"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/iptv-subscription/iptv-uk-subscription`, lastModified: lastModified("/iptv-subscription/iptv-uk-subscription"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/iptv-subscription/uk-iptv-subscription`, lastModified: lastModified("/iptv-subscription/uk-iptv-subscription"), changeFrequency: "monthly", priority: 0.7 },

    // Editorial indexes
    { url: `${SITE_URL}/blog`, lastModified: lastModified("/blog"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/tutorials`, lastModified: lastModified("/tutorials"), changeFrequency: "monthly", priority: 0.6 },

    // Support / legal
    { url: `${SITE_URL}/contact`, lastModified: lastModified("/contact"), changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/refund`, lastModified: lastModified("/refund"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/privacy`, lastModified: lastModified("/privacy"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: lastModified("/terms"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/dmca`, lastModified: lastModified("/dmca"), changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.filter((post) =>
    Boolean(post.slug)
  ).map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: parseDate(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}

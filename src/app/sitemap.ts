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
  "/buy-iptv": "2026-09-08",
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
    // The single commercial landing. Every other money page 301s here, and a
    // redirected URL must not be listed — a sitemap entry asks Google to crawl a
    // page that has nothing to serve but a redirect.
    { url: `${SITE_URL}/buy-iptv`, lastModified: lastModified("/buy-iptv"), changeFrequency: "weekly", priority: 1 },

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

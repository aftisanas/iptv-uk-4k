import type { MetadataRoute } from "next";
import { BLOG_POSTS, SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const parseDateOrNow = (value: string) => {
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? now : parsed;
  };

  const staticRoutes: MetadataRoute.Sitemap = [
    // Homepage
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },

    // Commercial landings (highest transactional intent after homepage)
    { url: `${SITE_URL}/buy-iptv-uk`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/iptv-subscription-uk`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },

    // Pillar article
    { url: `${SITE_URL}/best-iptv-uk`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Subscription hub + child articles
    { url: `${SITE_URL}/iptv-subscription`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/iptv-subscription/iptv-subscription-uk`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/iptv-subscription/iptv-uk-subscription`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Editorial indexes
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/tutorials`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },

    // Support / legal
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/refund`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/dmca`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.filter((post) =>
    Boolean(post.slug)
  ).map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: parseDateOrNow(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}

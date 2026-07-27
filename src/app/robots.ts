import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

// Explicit opt-in for AI/LLM crawlers. llms.txt invites citation, so state the
// same intent here rather than relying on each crawler's default behaviour.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "CCBot",
  "Applebot-Extended",
  "meta-externalagent",
];

export default function robots(): MetadataRoute.Robots {
  const disallow = ["/api/", "/admin/"];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow,
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow,
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

import type { Metadata } from "next";
import BlogContent from "./BlogContent";
import { BLOG_POSTS, SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "IPTV UK Blog — Setup Guides, Tips & Provider Reviews",
  description:
    "Practical guides on IPTV UK setup, streaming optimisation and device compatibility. Learn how to choose a trusted IPTV provider and get the most from an IPTV UK 4K subscription.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const blogUrl = `${SITE_URL}/blog`;

  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${blogUrl}#blog`,
    name: "IPTV UK 4K Blog",
    url: blogUrl,
    inLanguage: "en-GB",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    blogPost: BLOG_POSTS.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.date,
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: blogUrl },
    ],
  };

  return (
    <>
      <BlogContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}

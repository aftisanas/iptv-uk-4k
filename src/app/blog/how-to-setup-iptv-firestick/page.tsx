import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostContent from "../[slug]/BlogPostContent";
import { AUTHOR_BYLINE, BLOG_POSTS, SITE_LOGO_URL, SITE_NAME, SITE_URL } from "@/lib/constants";

const SLUG = "how-to-setup-iptv-firestick";

const PLACEHOLDER_CONTENT = [
  "[PLACEHOLDER] This route reuses the shared BlogPostContent layout. Final Firestick setup content will be migrated from buy-iptv-uk.com during Phase 1.",
  "## Placeholder Section\n\nHeadings, lists and paragraph rhythm will match the shared blog post architecture. This body copy is temporary and will be replaced with the migrated tutorial content.",
];

export const metadata: Metadata = {
  title: "[Placeholder] How To Set Up IPTV On Firestick",
  description:
    "Placeholder route — final copy pending Phase 1 migration from buy-iptv-uk.com.",
  alternates: { canonical: `/blog/${SLUG}` },
  robots: { index: false, follow: false },
};

export default function HowToSetupIptvFirestickPage() {
  const post = BLOG_POSTS.find((p) => p.slug === SLUG);
  if (!post) notFound();

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: AUTHOR_BYLINE.name,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: SITE_LOGO_URL },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${SLUG}`,
    },
  };

  return (
    <>
      <div className="bg-yellow-100 border-b border-yellow-300 text-yellow-900 text-center py-2 text-sm font-medium">
        [PLACEHOLDER] /blog/{SLUG} — copy pending Phase 1 migration
      </div>
      <BlogPostContent post={post} content={PLACEHOLDER_CONTENT} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
    </>
  );
}

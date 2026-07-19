import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AUTHOR_BYLINE, BLOG_POSTS, SITE_LOGO_URL, SITE_URL, SITE_NAME } from "@/lib/constants";
import BlogPostContent from "./BlogPostContent";

const blogContent: Record<string, { content: string[] }> = {
  "best-iptv-uk-guide": {
    content: [
      "Finding the best IPTV service in the UK means looking beyond flashy promises and inflated channel counts. With dozens of IPTV providers competing for your subscription, the challenge is not finding an option — it is finding one that actually delivers reliable streaming, genuine UK-focused channel coverage, responsive customer support, and fair pricing without hidden catches.",
      "## What Makes an IPTV Service Good For a UK Household?\n\nThe best IPTV service for a UK household is not necessarily the one with the most channels. It is the one that consistently delivers the channels you actually watch, in the quality you expect, on the devices you own, with support available when something goes wrong — all at a price that represents genuine value compared to traditional pay-TV.",
      "## The Seven Criteria UK Viewers Should Evaluate\n\n- **UK Channel Lineup Quality** — broad coverage of the mainstream UK entertainment, sport, news, kids and international categories\n- **Streaming Stability** — anti-buffering technology and consistent performance during peak evening and weekend usage\n- **Streaming Quality** — HD as baseline, Full HD (1080p) for premium content, 4K UHD where the source feed supports it\n- **EPG & Catch-Up** — full electronic programme guide with 7-day catch-up functionality on major feeds\n- **Device Compatibility** — works on Fire Stick, Smart TVs, phones, tablets, MAG boxes and computers\n- **Customer Support** — accessible, responsive, competent support available via multiple channels\n- **Pricing & True Value** — fair monthly cost with a genuine money-back guarantee",
      "## Red Flags to Watch Out For\n\nNot every IPTV service delivers what it promises. Watch for unverifiable channel-count claims, no money-back guarantee, WhatsApp-only communication with no email fallback, fake reviews with stock-photo avatars, missing legal pages, and pressure tactics like fake countdown timers or \"only 3 subscriptions left\" messaging.",
      "## IPTV vs Traditional Pay-TV in the UK\n\nTraditional premium pay-TV packages typically cost between £40 and £120 per month. A comparable IPTV subscription usually costs £5–£15 per month — a saving of £300–£1,200 per year. IPTV provides much broader channel selection with no long-term contracts, and modern providers deliver quality comparable to satellite when you have stable broadband of at least 10 Mbps.",
      "## Our Recommendation\n\nIPTV UK 4K was built to address the problems UK viewers encounter with other IPTV providers. With 37,000+ channels, HD and 4K UHD quality with adaptive streaming, full EPG and 7-day catch-up, support for every major device platform, and plans from £4.17/mo with a 30-day money-back guarantee, it measures up against every criterion above.",
    ],
  },
  "how-to-setup-iptv-firestick": {
    content: [
      "Setting up IPTV on your Amazon Fire Stick is surprisingly simple and takes just a few minutes. This step-by-step guide walks you through the entire process from start to finish.",
      "## What You'll Need\n\n- An Amazon Fire Stick (any generation)\n- A stable internet connection (10 Mbps minimum for HD, 25 Mbps for 4K)\n- An active IPTV subscription with login credentials\n- 5–10 minutes of your time",
      "## Step 1: Enable Apps From Unknown Sources\n\nGo to Settings → My Fire TV → Developer Options → Install unknown apps. Find the Downloader app in the list and toggle it ON. This allows you to install IPTV player apps that are not distributed via the Amazon App Store.",
      "## Step 2: Install the Downloader App\n\nFrom the Fire Stick home screen, search for \"Downloader\" and install it. This free app lets you download IPTV applications directly to your Fire Stick.",
      "## Step 3: Download Your IPTV App\n\nOpen the Downloader app and enter the URL provided by your IPTV service for the app download. Popular IPTV player apps include IPTV Smarters Pro, TiviMate and Smart IPTV. IPTV UK 4K recommends IPTV Smarters Pro for the best experience.",
      "## Step 4: Enter Your Credentials\n\nOpen the installed IPTV app and enter the login details provided by your IPTV service — typically a server URL, username and password. IPTV UK 4K sends these via both email and WhatsApp within minutes of purchase.",
      "## Step 5: Start Watching\n\nThat's it. Your channels should load, and you can start browsing the EPG, exploring the on-demand library and watching live TV. If you need help during setup, our support team is on hand to walk you through it.",
    ],
  },
};

type PageParams = { slug: string };

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<PageParams> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const content = blogContent[slug];

  if (!post || !content) {
    notFound();
  }

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
      logo: {
        "@type": "ImageObject",
        url: SITE_LOGO_URL,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };

  return (
    <>
      <BlogPostContent post={post} content={content.content} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
    </>
  );
}

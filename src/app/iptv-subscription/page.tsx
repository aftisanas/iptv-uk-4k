import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, BookOpen, ShoppingCart } from "lucide-react";
import { SITE_LOGO_PATH, SITE_NAME, SITE_URL } from "@/lib/constants";

const PAGE_PATH = "/iptv-subscription";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE = "IPTV Subscription Hub — Guides, Plans & Setup";
const PAGE_DESCRIPTION =
  "Everything about an IPTV subscription for British homes — buyer's guides, subscription plans from £4.17/mo, activation walkthroughs and device coverage from IPTV UK 4K.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_PATH, languages: { "en-GB": PAGE_PATH } },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: SITE_NAME,
    url: PAGE_URL,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: SITE_LOGO_PATH,
        width: 1200,
        height: 630,
        alt: "IPTV Subscription Hub — guides and plans from IPTV UK 4K",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [SITE_LOGO_PATH],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const HUB_LINKS = [
  {
    href: "/iptv-subscription-uk",
    eyebrow: "Buy",
    title: "IPTV Subscription UK — 37,000 Channels From £4.17/mo",
    description:
      "The transactional landing page. Compare all four subscription terms (3, 6, 12 and 24 months), see what every plan includes and check out via WhatsApp in minutes.",
    icon: ShoppingCart,
  },
  {
    href: "/iptv-subscription/iptv-subscription-uk",
    eyebrow: "Article",
    title: "IPTV Subscription UK Explained — Buyer's Guide for British Homes",
    description:
      "How an IPTV subscription actually works for a UK household — versus Sky/Virgin, what the channel numbers mean, how pricing tiers stack up and what to check before you sign up.",
    icon: BookOpen,
  },
  {
    href: "/iptv-subscription/iptv-uk-subscription",
    eyebrow: "Article",
    title: "IPTV UK Subscription — Channels, Devices & Activation",
    description:
      "A deeper look at what a single IPTV UK subscription unlocks: the full 37,000-channel catalogue, 198,000 on-demand titles, supported devices and the same-day activation flow.",
    icon: BookOpen,
  },
] as const;

export default function IptvSubscriptionHubPage() {
  const webpageId = `${PAGE_URL}#webpage`;
  const breadcrumbId = `${PAGE_URL}#breadcrumb`;
  const itemListId = `${PAGE_URL}#itemlist`;
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;

  return (
    <>
      <main id="main-content" className="relative pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0 section-gradient-1" />
        <div className="absolute inset-0 mesh-gradient" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs (visible) */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 text-sm text-muted flex items-center gap-1.5"
          >
            <Link href="/" className="hover:text-violet-700 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-muted/60" aria-hidden="true" />
            <span className="text-foreground font-medium" aria-current="page">
              IPTV Subscription
            </span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-200 px-4 py-1.5 text-xs font-semibold text-violet-700 mb-4">
            Hub · IPTV Subscription
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-5">
            IPTV Subscription Hub —{" "}
            <span className="gradient-text">Guides, Plans & Setup</span>
          </h1>

          <p className="text-base lg:text-lg text-muted leading-relaxed mb-10 max-w-2xl">
            One place to reach every IPTV UK 4K subscription resource — the
            transactional landing page for buying a plan and the two long-form
            articles that unpack the offering in detail.
          </p>

          <div className="space-y-4">
            {HUB_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group block rounded-2xl border border-violet-100 bg-white/70 backdrop-blur-sm p-6 lg:p-7 transition-all hover:border-violet-300 hover:shadow-lg hover:shadow-purple-500/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-cyan-100 text-violet-700">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-semibold uppercase tracking-wider text-violet-600 mb-1">
                        {link.eyebrow}
                      </div>
                      <h2 className="text-lg lg:text-xl font-bold text-foreground mb-2 group-hover:text-violet-700 transition-colors">
                        {link.title}
                      </h2>
                      <p className="text-sm text-muted leading-relaxed">
                        {link.description}
                      </p>
                    </div>
                    <ChevronRight
                      className="h-5 w-5 text-muted shrink-0 mt-1 transition-transform group-hover:translate-x-1 group-hover:text-violet-600"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-violet-50 to-cyan-50 border border-violet-100">
            <p className="text-sm text-muted leading-relaxed">
              Looking for the shortlist of best IPTV UK options?{" "}
              <Link href="/best-iptv-uk" className="text-violet-700 font-semibold underline-offset-2 hover:underline">
                Read our Best IPTV UK 2026 buyer&rsquo;s guide
              </Link>{" "}
              — the pillar article on how to choose a trusted IPTV provider for
              a British home.
            </p>
          </div>
        </div>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CollectionPage",
                "@id": webpageId,
                url: PAGE_URL,
                name: PAGE_TITLE,
                description: PAGE_DESCRIPTION,
                inLanguage: "en-GB",
                isPartOf: { "@id": websiteId },
                about: { "@id": organizationId },
                breadcrumb: { "@id": breadcrumbId },
                mainEntity: { "@id": itemListId },
              },
              {
                "@type": "BreadcrumbList",
                "@id": breadcrumbId,
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                  { "@type": "ListItem", position: 2, name: "IPTV Subscription", item: PAGE_URL },
                ],
              },
              {
                "@type": "ItemList",
                "@id": itemListId,
                itemListElement: HUB_LINKS.map((link, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  url: `${SITE_URL}${link.href}`,
                  name: link.title,
                })),
              },
            ],
          }),
        }}
      />
    </>
  );
}

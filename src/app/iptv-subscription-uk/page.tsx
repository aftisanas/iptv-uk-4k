import type { Metadata } from "next";
import Link from "next/link";
import { Gem, ChevronRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import DevicesSection from "@/components/DevicesSection";
import ChannelsSection from "@/components/ChannelsSection";
import FAQSection from "@/components/FAQSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import {
  PRICING_PLANS,
  SITE_LOGO_PATH,
  SITE_LOGO_URL,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

const PAGE_PATH = "/iptv-subscription-uk";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE =
  "IPTV Subscription UK — 37,000 Channels In 4K From £4.17/mo";
const PAGE_DESCRIPTION =
  "IPTV subscription UK with 37,000 live channels, 198,000 films and series, native 4K UHD, extra simultaneous-connection options and a 30-day money-back guarantee — from £4.17/mo.";

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
        alt: "IPTV Subscription UK — 4K UHD IPTV subscription for British homes",
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

export default function IptvSubscriptionUkPage() {
  const webpageId = `${PAGE_URL}#webpage`;
  const serviceId = `${PAGE_URL}#service`;
  const breadcrumbId = `${PAGE_URL}#breadcrumb`;
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;

  const lowPrice = Math.min(...PRICING_PLANS.map((p) => p.price)).toFixed(2);
  const highPrice = Math.max(...PRICING_PLANS.map((p) => p.price)).toFixed(2);

  return (
    <>
      {/* Custom Hero props — keyword-targeted H1 differentiates this page from
          the homepage while preserving the reference's transactional intent. */}
      <HeroSection
        h1TopLine="IPTV Subscription UK"
        h1BottomLine="37,000 Channels In 4K — From £4.17/mo"
        subheading="IPTV subscription UK with 37,000 live channels, 198,000 films & series, native 4K UHD, extra simultaneous-connection options and a 30-day money-back guarantee. Instant activation via WhatsApp."
        primaryCtaLabel="Get IPTV UK Now — From £4.17/mo"
        primaryCtaHref="#pricing"
        secondaryCtaLabel="Compare All Plans"
        secondaryCtaHref="#pricing"
      />
      <StatsBar />
      <FeaturesSection />
      <PricingSection />

      {/* Subscription hand-off — matches the original ranking page's structural
          link from /iptv-subscription-uk → /iptv-subscription/iptv-uk-subscription.
          Copy rewritten for this domain; anchor id preserved. */}
      <section id="subscription" className="relative py-11 lg:py-16">
        <div className="absolute inset-0 section-gradient-1" />
        <div className="absolute inset-0 mesh-gradient" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-200 px-5 py-2 text-sm font-semibold text-violet-700 mb-5">
            <Gem className="h-4 w-4" />
            Subscription Detail
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            One IPTV UK Subscription,{" "}
            <span className="gradient-text">The Full Catalogue</span>
          </h2>

          <p className="mx-auto max-w-2xl text-base lg:text-lg text-muted leading-relaxed mb-8">
            Every subscription tier ships with the same 37,000 live channels,
            198,000 on-demand films and series, native 4K UHD where the source
            supports it and 40+ international language packs — the only
            difference between tiers is the term length and per-month rate.
          </p>

          <Link
            href="/iptv-subscription/iptv-uk-subscription"
            className="group relative inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-8 py-4 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-900/20 transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98]"
          >
            Explore Full Subscription Details
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        </div>
      </section>

      <DevicesSection />
      <ChannelsSection />
      <FAQSection />
      <TrustSection />
      <CTASection />

      {/* JSON-LD graph — WebPage, Breadcrumb, Service+AggregateOffer, FAQPage.
          Organization + WebSite live on the homepage; referenced by @id.
          No Product schema (owned by homepage). */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": webpageId,
                url: PAGE_URL,
                name: PAGE_TITLE,
                description: PAGE_DESCRIPTION,
                inLanguage: "en-GB",
                isPartOf: { "@id": websiteId },
                about: { "@id": organizationId },
                breadcrumb: { "@id": breadcrumbId },
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  url: SITE_LOGO_URL,
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id": breadcrumbId,
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: SITE_URL,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "IPTV Subscription UK",
                    item: PAGE_URL,
                  },
                ],
              },
              {
                "@type": "Service",
                "@id": serviceId,
                serviceType: "IPTV UK Subscription",
                name: "IPTV Subscription UK — 4K UHD Streaming",
                url: PAGE_URL,
                description: PAGE_DESCRIPTION,
                provider: { "@id": organizationId },
                areaServed: {
                  "@type": "Country",
                  name: "United Kingdom",
                },
                audience: {
                  "@type": "Audience",
                  geographicArea: {
                    "@type": "Country",
                    name: "United Kingdom",
                  },
                },
                offers: {
                  "@type": "AggregateOffer",
                  priceCurrency: "GBP",
                  lowPrice,
                  highPrice,
                  offerCount: String(PRICING_PLANS.length),
                  availability: "https://schema.org/InStock",
                  url: `${PAGE_URL}#pricing`,
                },
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "How do I buy an IPTV subscription in the UK?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Choose a plan on the pricing table and confirm your order on WhatsApp. Your M3U or Xtream Codes credentials and a setup email land within minutes. Activation is instant, backed by a 30-day money-back guarantee.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is it safe to subscribe to IPTV online in the UK?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, when the provider publishes a refund policy and takes checkout off-site. Our checkout completes on WhatsApp so no card details sit in a browser form, and every plan carries a same-day refund window inside the first 30 days.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is the best IPTV UK subscription plan?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "The 12-month plan at £4.17/mo is the best-value pick for most British households — it sits close to the 24-month per-month rate but only commits you to a year. The 24-month plan is the cheapest per month if you already know IPTV suits your household long-term.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}

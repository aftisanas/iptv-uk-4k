import type { Metadata } from "next";
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
  CONTACT_EMAIL,
  FAQ_ITEMS,
  PRICING_PLANS,
  SITE_LOGO_PATH,
  SITE_LOGO_URL,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-GB": SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: "IPTV UK — 4K UHD Streaming For Every British Home | £4.17/mo",
    description:
      "IPTV UK subscription with 37,000 live channels, 198,000 films and series, native 4K UHD, extra simultaneous-connection options and a 30-day money-back guarantee — from £4.17/mo.",
    images: [
      {
        url: SITE_LOGO_PATH,
        width: 1200,
        height: 630,
        alt: "IPTV UK 4K — 4K UHD IPTV subscription for British homes",
      },
    ],
  },
};

export default function HomePage() {
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const webpageId = `${SITE_URL}/#webpage`;
  const serviceId = `${SITE_URL}/#service`;
  const breadcrumbId = `${SITE_URL}/#breadcrumb`;
  const logoUrl = SITE_LOGO_URL;
  const lowPrice = Math.min(...PRICING_PLANS.map((p) => p.price)).toFixed(2);
  const highPrice = Math.max(...PRICING_PLANS.map((p) => p.price)).toFixed(2);

  return (
    <>
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <PricingSection />
      <DevicesSection />
      <ChannelsSection />
      <FAQSection />
      <TrustSection />
      <CTASection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": organizationId,
                name: SITE_NAME,
                alternateName: "IPTV UK",
                url: SITE_URL,
                logo: {
                  "@type": "ImageObject",
                  url: logoUrl,
                },
                description:
                  "UK-focused IPTV service — 37,000 live channels, 198,000 films and series, native 4K UHD streaming and an optional Secure Proxy add-on, from £4.17/mo.",
                areaServed: { "@type": "Country", name: "United Kingdom" },
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  availableLanguage: "English",
                  areaServed: "GB",
                  email: CONTACT_EMAIL,
                },
              },
              {
                "@type": "WebSite",
                "@id": websiteId,
                name: SITE_NAME,
                url: SITE_URL,
                inLanguage: "en-GB",
                publisher: { "@id": organizationId },
                potentialAction: {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
                  },
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@type": "WebPage",
                "@id": webpageId,
                url: SITE_URL,
                name: "IPTV UK — 4K UHD Streaming For Every British Home | £4.17/mo",
                inLanguage: "en-GB",
                isPartOf: {
                  "@id": websiteId,
                },
                about: {
                  "@id": organizationId,
                },
                breadcrumb: {
                  "@id": breadcrumbId,
                },
                description:
                  "UK IPTV subscription for British viewers — 37,000 channels, 198,000 films and series, native 4K UHD, an optional Secure Proxy add-on, extra simultaneous-connection options and a 30-day money-back guarantee.",
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
                ],
              },
              {
                "@type": "Service",
                "@id": serviceId,
                serviceType: "IPTV UK Subscription",
                name: "IPTV UK 4K — IPTV UK Subscription",
                url: SITE_URL,
                description:
                  "IPTV UK subscription with 37,000+ live channels, 198,000+ on-demand films and series, native 4K UHD, an optional Secure Proxy add-on and extra simultaneous-connection options.",
                provider: { "@id": organizationId },
                areaServed: { "@type": "Country", name: "United Kingdom" },
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
                  url: `${SITE_URL}/#pricing`,
                  offers: PRICING_PLANS.map((plan) => ({
                    "@type": "Offer",
                    name: `${plan.name} IPTV UK Plan`,
                    price: plan.price.toFixed(2),
                    priceCurrency: "GBP",
                    availability: "https://schema.org/InStock",
                    url: `${SITE_URL}/#pricing`,
                  })),
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}

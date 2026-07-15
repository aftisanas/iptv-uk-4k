import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import DevicesSection from "@/components/DevicesSection";
import ChannelsSection from "@/components/ChannelsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
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
    title: "IPTV UK 2026 — The Definitive British IPTV Hub In 4K",
    description:
      "The IPTV UK service 50,000 homes already trust. 37,000 live channels, 198,000 films, premium 4K streaming, instant activation. Buy IPTV and watch in minutes.",
    images: [
      {
        url: SITE_LOGO_PATH,
        width: 1200,
        height: 630,
        alt: "IPTV UK 4K — Premium British IPTV Subscription",
      },
    ],
  },
};

export default function HomePage() {
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const webpageId = `${SITE_URL}/#webpage`;
  const productId = `${SITE_URL}/#product`;
  const breadcrumbId = `${SITE_URL}/#breadcrumb`;
  const logoUrl = SITE_LOGO_URL;

  return (
    <>
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <PricingSection />
      <DevicesSection />
      <ChannelsSection />
      <TestimonialsSection />
      <FAQSection />
      <TrustSection />
      <CTASection />

      {/* JSON-LD Structured Data */}
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
                  "IPTV UK service for British homes — 37,000 live channels, 198,000 films and series, native 4K UHD streaming and a secure proxy option, from £4.17/mo.",
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
                publisher: {
                  "@id": organizationId,
                },
              },
              {
                "@type": "WebPage",
                "@id": webpageId,
                url: SITE_URL,
                name: "IPTV UK 2026 | #1 UK IPTV Subscription 4K — £4.17/mo",
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
                  "IPTV UK built for British viewers — 37,000 channels, 198,000 films and series, native 4K UHD, a secure proxy option, multi-device connections available and a 30-day money-back guarantee.",
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
                    name: "IPTV UK",
                    item: `${SITE_URL}/#features`,
                  },
                ],
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
            "@type": "Product",
            "@id": productId,
            name: "IPTV UK Subscription",
            url: SITE_URL,
            image: [logoUrl],
            description:
              "IPTV UK subscription with 37,000+ live channels, 198,000+ on-demand films and series, native 4K UHD, a secure proxy option and multi-device connections available — from £4.17/mo.",
            brand: { "@type": "Brand", name: SITE_NAME },
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "GBP",
              lowPrice: "4.17",
              highPrice: PRICING_PLANS.reduce((m, p) => Math.max(m, p.price), 0).toFixed(2),
              offerCount: PRICING_PLANS.length,
              availability: "https://schema.org/InStock",
              url: `${SITE_URL}/#pricing`,
              offers: PRICING_PLANS.map((plan) => ({
                "@type": "Offer",
                name: `${plan.name} IPTV UK Plan`,
                price: plan.price.toFixed(2),
                priceCurrency: "GBP",
                availability: "https://schema.org/InStock",
                itemCondition: "https://schema.org/NewCondition",
                url: `${SITE_URL}/#pricing`,
              })),
            },
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

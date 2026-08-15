import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Clock3,
  Wallet,
  CheckCircle2,
  ChevronRight,
  Gem,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import DevicesSection from "@/components/DevicesSection";
import ChannelsSection from "@/components/ChannelsSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import SectionLink from "@/components/SectionLink";
import MotionReveal from "@/components/MotionReveal";
import {
  CONTACT_EMAIL,
  PRICING_PLANS,
  SITE_LOGO_PATH,
  SITE_LOGO_URL,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

const PAGE_PATH = "/iptv-uk";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE = "Buy IPTV UK — 37,000 Channels In 4K From £4.17/mo";
const PAGE_DESCRIPTION =
  "Buy IPTV UK from £4.17/mo. Get 37,000 live channels, 198,000 films & series in 4K UHD, instant activation and a 30-day money-back guarantee.";

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
        alt: "Buy IPTV UK — 4K UHD IPTV subscription for British homes",
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

const PURCHASE_ASSURANCES = [
  {
    icon: Clock3,
    title: "Live within minutes",
    body: "Credentials arrive by email and WhatsApp as soon as your order is confirmed — no manual review queue, no office-hours gate.",
  },
  {
    icon: ShieldCheck,
    title: "30-day money-back",
    body: "Every plan you buy is protected by a same-day refund policy. If it does not fit your household, we return every penny.",
  },
  {
    icon: Wallet,
    title: "No card entered on-site",
    body: "Checkout completes on WhatsApp so you never enter card details in a browser form. Choose your preferred payment method there.",
  },
];

const BUY_IPTV_UK_FAQ_ITEMS = [
  {
    question: "How do I buy IPTV UK from IPTV UK 4K?",
    answer:
      "Choose a plan on the pricing table below, add any extra simultaneous connections or the Secure Proxy option, then confirm your order on WhatsApp. Your subscription login and a step-by-step setup email arrive within minutes.",
  },
  {
    question: "What IPTV UK subscription plans can I buy?",
    answer:
      "Four terms are available: 3 months (£25.99), 6 months (£35.99), 12 months (£49.99 — from £4.17/mo) and 24 months (£79.99). Every plan unlocks the full library — 37,000 live channels, 198,000 films and series, native 4K where the source supports it, EPG with 7-day catch-up and 24/7 support.",
  },
  {
    question: "What payment methods can I use to buy IPTV UK?",
    answer:
      "Checkout is handled on WhatsApp so you never enter card details in a browser form. From there you can settle by bank transfer, card or the payment option our support agent shares — whichever suits you.",
  },
  {
    question: "How fast is activation after I buy?",
    answer:
      "Activation is typically complete within a few minutes of your order being confirmed. There is no manual review and no office-hours restriction — buy late at night and your UK IPTV subscription is live before you finish making tea.",
  },
  {
    question: "Which devices does the IPTV subscription work on?",
    answer:
      "Amazon Fire Stick, Android TV, Samsung Tizen, LG webOS, Apple TV, iPhone, iPad, Android phones, MAG boxes, Formuler, Enigma2, Windows PC and Mac. Six IPTV player apps are officially supported, with a setup guide emailed after purchase.",
  },
  {
    question: "Can I stream on more than one device at the same time?",
    answer:
      "Each subscription streams on one device by default. Add extra simultaneous-connection options at checkout — pick the number you need so the whole household can watch different channels at once.",
  },
  {
    question: "Can I cancel and get a refund?",
    answer:
      "Yes. Every IPTV UK subscription you buy is covered by a 30-day money-back guarantee. Email support within 30 days for any reason and we refund the full subscription fee, same-day, with no forms and no retention calls.",
  },
  {
    question: "What happens if I buy and the service does not work for me?",
    answer:
      "Contact support within the 30-day window and we issue a same-day full refund. Most issues are five-minute fixes once you reach a support agent, so the refund route is a last resort — not the first thing you have to fight for.",
  },
  {
    question: "How do I get support after I buy IPTV UK?",
    answer:
      "24/7 English-language support is available on WhatsApp and by email at " +
      CONTACT_EMAIL +
      ". Setup tutorials for every supported device are linked from the confirmation email, and support agents can walk you through activation if you get stuck.",
  },
];

const linkCls =
  "font-semibold text-violet-600 underline-offset-4 hover:underline hover:text-violet-700 transition-colors";

export default function IptvUkPage() {
  const webpageId = `${PAGE_URL}#webpage`;
  const serviceId = `${PAGE_URL}#service`;
  const breadcrumbId = `${PAGE_URL}#breadcrumb`;
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;

  const lowPrice = Math.min(...PRICING_PLANS.map((p) => p.price)).toFixed(2);
  const highPrice = Math.max(...PRICING_PLANS.map((p) => p.price)).toFixed(2);

  return (
    <>
      <HeroSection
        h1TopLine="Buy IPTV UK"
        h1BottomLine="37,000 Channels In 4K — From £4.17/mo"
        subheading="Buy an IPTV UK subscription with 37,000 live channels, 198,000 films & series and native 4K UHD. Instant activation, no dish, no lock-in, 30-day money-back — settle in minutes on WhatsApp."
        primaryCtaLabel="See Plans & Buy Now"
        primaryCtaHref="#pricing"
        secondaryCtaLabel="Read the Setup Guide"
        secondaryCtaHref="/blog/how-to-setup-iptv-firestick"
      />

      <StatsBar />

      {/* Why buy from us — commercial framing */}
      <section
        id="why-buy"
        aria-labelledby="why-buy-heading"
        className="relative py-14 lg:py-20"
      >
        <div className="absolute inset-0 section-gradient-1" />
        <div className="absolute inset-0 mesh-gradient" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-200 px-5 py-2 text-sm font-semibold text-violet-700 mb-5">
                <CheckCircle2 className="h-4 w-4" />
                Why Buy IPTV UK From Us
              </span>
              <h2
                id="why-buy-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5"
              >
                Why Buy IPTV UK{" "}
                <span className="gradient-text">From Us</span>
              </h2>
              <p className="mx-auto max-w-2xl text-base lg:text-lg text-muted leading-relaxed">
                People buying a UK IPTV subscription usually want three things:
                a channel line-up that actually covers what they watch, a
                service that stays live on match nights, and a way out if it
                does not deliver. IPTV UK 4K is engineered around those three
                commitments — nothing bolted on, nothing held back.
              </p>
            </div>
          </MotionReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PURCHASE_ASSURANCES.map(({ icon: Icon, title, body }) => (
              <MotionReveal
                key={title}
                className="group rounded-2xl border border-slate-200/70 bg-white/80 backdrop-blur-sm p-6 lg:p-7 shadow-sm hover:shadow-md hover:border-violet-300 transition-all"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 text-white shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {title}
                </h3>
                <p className="text-sm lg:text-base text-muted leading-relaxed">
                  {body}
                </p>
              </MotionReveal>
            ))}
          </div>

          <MotionReveal>
            <p className="mx-auto mt-12 max-w-3xl text-center text-base text-muted leading-relaxed">
              Comparing options before you buy? See how our{" "}
              <Link href="/iptv-subscription-uk" className={linkCls}>
                IPTV subscription UK plans work
              </Link>
              , read the{" "}
              <Link href="/iptv-provider-uk" className={linkCls}>
                IPTV provider UK breakdown
              </Link>{" "}
              or check the{" "}
              <Link href="/iptv-subscription/4k-iptv-uk" className={linkCls}>
                4K IPTV UK details
              </Link>{" "}
              first.
            </p>
          </MotionReveal>
        </div>
      </section>

      <FeaturesSection />

      {/* Pricing — the conversion block */}
      <PricingSection />

      {/* What's included in the subscription you buy */}
      <section id="subscription" className="relative py-11 lg:py-16">
        <div className="absolute inset-0 section-gradient-1" />
        <div className="absolute inset-0 mesh-gradient" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-200 px-5 py-2 text-sm font-semibold text-violet-700 mb-5">
            <Gem className="h-4 w-4" />
            What&apos;s Included When You Buy
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            What&apos;s Included With Your{" "}
            <span className="gradient-text">IPTV Subscription</span>
          </h2>

          <p className="mx-auto max-w-2xl text-base lg:text-lg text-muted leading-relaxed mb-8">
            The plan you pick only changes the length of the term and the
            per-month rate. Every subscription unlocks the same 37,000 live
            channels, 198,000 films and series, native 4K where the feed
            supports it, EPG with 7-day catch-up and 24/7 English-language
            support.
          </p>

          <Link
            href="/iptv-subscription/iptv-uk-subscription"
            className="group relative inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-8 py-4 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-900/20 transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98]"
          >
            See Full Subscription Details
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        </div>
      </section>

      {/* How to buy — activation flow */}
      <section
        id="how-to-buy"
        aria-labelledby="how-to-buy-heading"
        className="relative py-14 lg:py-20"
      >
        <div className="absolute inset-0 section-gradient-1" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-50 border border-cyan-200 px-5 py-2 text-sm font-semibold text-cyan-700 mb-5">
                <Clock3 className="h-4 w-4" />
                How To Buy
              </span>
              <h2
                id="how-to-buy-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5"
              >
                How To Buy{" "}
                <span className="gradient-text">IPTV UK</span>
              </h2>
              <p className="mx-auto max-w-2xl text-base lg:text-lg text-muted leading-relaxed">
                Four steps from choosing a plan to loading your first channel.
                Here is exactly what happens from the moment you place your
                order.
              </p>
            </div>
          </MotionReveal>

          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Pick your plan",
                body: "Choose the term length and add extra connections or the Secure Proxy option if you want them.",
              },
              {
                step: "02",
                title: "Confirm on WhatsApp",
                body: "A pre-filled order opens in WhatsApp — no card fields, no on-site checkout form.",
              },
              {
                step: "03",
                title: "Receive credentials",
                body: "Your M3U or Xtream Codes login arrives by email and WhatsApp within minutes.",
              },
              {
                step: "04",
                title: "Load and watch",
                body: "Paste the credentials into your player, EPG populates, first channel loads — done.",
              },
            ].map(({ step, title, body }) => (
              <MotionReveal
                key={step}
                className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 text-xs font-semibold tracking-wider text-violet-600">
                  STEP {step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{body}</p>
              </MotionReveal>
            ))}
          </ol>

          <MotionReveal>
            <p className="mx-auto mt-10 max-w-3xl text-center text-base text-muted leading-relaxed">
              First time setting up on a Fire Stick? Our{" "}
              <Link href="/blog/how-to-setup-iptv-firestick" className={linkCls}>
                step-by-step Fire Stick guide
              </Link>{" "}
              covers the whole flow. For every other device, browse the{" "}
              <Link href="/tutorials" className={linkCls}>
                setup tutorials library
              </Link>
              .
            </p>
          </MotionReveal>
        </div>
      </section>

      <DevicesSection />

      {/* Refund reassurance — commercial objection handling */}
      <section
        id="guarantee"
        aria-labelledby="guarantee-heading"
        className="relative py-14 lg:py-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-cyan-50" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <MotionReveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-violet-200 px-5 py-2 text-sm font-semibold text-violet-700 mb-5 shadow-sm">
              <ShieldCheck className="h-4 w-4" />
              30-Day Money-Back Guarantee
            </span>
            <h2
              id="guarantee-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5"
            >
              Buy IPTV UK Risk-Free —{" "}
              <span className="gradient-text">No Hoops, No Retention Calls</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base lg:text-lg text-muted leading-relaxed mb-8">
              Every plan you buy is covered for 30 days from the day of
              purchase. If the channel line-up, picture quality or reliability
              does not match what we promised, one email to{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className={linkCls}
              >
                {CONTACT_EMAIL}
              </a>{" "}
              starts a same-day refund. No forms, no reduced-offer counter,
              no retention loop.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <SectionLink
                href="#pricing"
                className="group relative inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-900/20 transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98]"
              >
                Buy IPTV UK — From £{lowPrice}
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </SectionLink>
              <Link
                href="/refund"
                className="text-sm font-semibold text-violet-700 underline-offset-4 hover:underline"
              >
                Read the full refund policy →
              </Link>
            </div>
          </MotionReveal>
        </div>
      </section>

      <ChannelsSection />

      {/* Commercial FAQ — page-specific, purchase-focused */}
      <section
        id="buy-faq"
        aria-labelledby="buy-faq-heading"
        className="relative py-14 lg:py-20"
      >
        <div className="absolute inset-0 section-gradient-1" />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-200 px-5 py-2 text-sm font-semibold text-violet-700 mb-5">
                Purchase Questions
              </span>
              <h2
                id="buy-faq-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5"
              >
                Everything Worth Knowing{" "}
                <span className="gradient-text">Before You Buy</span>
              </h2>
              <p className="mx-auto max-w-2xl text-base lg:text-lg text-muted leading-relaxed">
                Common questions from shoppers ready to buy IPTV UK — plans,
                payment, activation, devices, cancellation and support. If we
                missed one, message us on the{" "}
                <Link href="/contact" className={linkCls}>
                  contact page
                </Link>
                .
              </p>
            </div>
          </MotionReveal>

          <div className="space-y-3">
            {BUY_IPTV_UK_FAQ_ITEMS.map((item, i) => (
              <MotionReveal
                key={item.question}
                className="rounded-2xl border border-slate-200/70 bg-white p-5 lg:p-6 shadow-sm"
              >
                <details className="group">
                  <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                    <h3 className="text-base lg:text-lg font-semibold text-foreground pr-2">
                      {item.question}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700 transition-transform group-open:rotate-45 text-lg leading-none"
                    >
                      +
                    </span>
                  </summary>
                  <p
                    id={`buy-faq-panel-${i}`}
                    className="mt-3 text-sm lg:text-base text-muted leading-relaxed"
                  >
                    {item.answer}
                  </p>
                </details>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <TrustSection />
      <CTASection />

      {/* JSON-LD graph — WebPage, Breadcrumb, Service, FAQPage.
          Organization + WebSite live on the homepage; referenced by @id here. */}
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
                    name: "Buy IPTV UK",
                    item: PAGE_URL,
                  },
                ],
              },
              {
                "@type": "Service",
                "@id": serviceId,
                serviceType: "IPTV UK Subscription",
                name: "Buy IPTV UK — 4K UHD Subscription",
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
                mainEntity: BUY_IPTV_UK_FAQ_ITEMS.map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                  },
                })),
              },
            ],
          }),
        }}
      />
    </>
  );
}

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

const PAGE_PATH = "/buy-iptv-uk";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE = "Buy IPTV UK — 37,000 Channels In 4K From £4.17/mo";
const PAGE_DESCRIPTION =
  "Buy an IPTV UK subscription with 37,000 live channels, 198,000 films & series, native 4K UHD and a 30-day money-back guarantee. Instant activation from £4.17/mo.";

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
    body: "Every plan is protected by a same-day refund policy. If it does not fit your household, we return every penny.",
  },
  {
    icon: Wallet,
    title: "No card entered on-site",
    body: "Checkout completes on WhatsApp so you never enter card details in a browser form. Choose your preferred payment method there.",
  },
];

const BUY_FAQ_ITEMS = [
  {
    question: "How do I actually buy an IPTV UK subscription from IPTV UK 4K?",
    answer:
      "Choose your plan on the pricing table below, add any extra simultaneous connections or the Secure Proxy option, then confirm your purchase on WhatsApp. Your login credentials and a step-by-step setup email land within minutes.",
  },
  {
    question: "What payment methods can I use to buy IPTV UK?",
    answer:
      "Checkout is handled on WhatsApp so you never enter card details in a browser form. From there you can settle by bank transfer, card, or the payment option our support agent shares — whichever suits you.",
  },
  {
    question: "How fast is activation after I buy?",
    answer:
      "Activation is typically complete within a few minutes of your order being confirmed. There is no manual review and no office-hours restriction — buy late at night and your subscription is live before you finish making tea.",
  },
  {
    question: "What happens if I buy and the service does not work for me?",
    answer:
      "Every plan you buy from IPTV UK 4K carries a 30-day money-back guarantee. Email support within 30 days for any reason and we refund the full subscription fee, same-day, with no retention calls or paperwork.",
  },
  {
    question: "Do I need to buy any equipment on top of the subscription?",
    answer:
      "No. If you already own a Fire Stick, Smart TV, Apple TV, Android box, laptop, phone or tablet, the subscription runs on it. There is no dish, no engineer visit and no proprietary receiver to buy.",
  },
  {
    question: "Is it safe to buy IPTV subscriptions online in the UK?",
    answer:
      "Buying a subscription from a UK-focused provider that runs its own infrastructure and honours a public money-back window is safe. Our WhatsApp checkout means no card details ever sit in an on-site form, and the refund guarantee protects you if the service does not deliver.",
  },
  {
    question: "Can I upgrade my plan later after I buy?",
    answer:
      "Yes. Add extra simultaneous connections, extend your term, or switch to a longer plan at any time — just message support and we prorate the difference against your remaining subscription.",
  },
];

const linkCls =
  "font-semibold text-violet-600 underline-offset-4 hover:underline hover:text-violet-700 transition-colors";

export default function BuyIptvUkPage() {
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
        subheading="Buy an IPTV UK subscription with 37,000 live channels, 198,000 films & series, native 4K UHD and a 30-day money-back guarantee. Instant activation, no dish, no lock-in — settle in minutes on WhatsApp."
        primaryCtaLabel="See Plans & Buy Now"
        primaryCtaHref="#pricing"
        secondaryCtaLabel="Read the Setup Guide"
        secondaryCtaHref="/blog/how-to-setup-iptv-firestick"
      />

      <StatsBar />

      {/* Why buy from IPTV UK 4K — bespoke, buy-intent framed */}
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
                Why Buy From IPTV UK 4K
              </span>
              <h2
                id="why-buy-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5"
              >
                Buy Premium IPTV UK — Built For{" "}
                <span className="gradient-text">British Households</span>
              </h2>
              <p className="mx-auto max-w-2xl text-base lg:text-lg text-muted leading-relaxed">
                People looking to buy IPTV in the UK usually want three things:
                a channel line-up that actually covers what they watch, a
                subscription that stays live on match nights, and a way out if
                it does not deliver. IPTV UK 4K is engineered around those
                three commitments — nothing bolted on, nothing held back.
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
              Not sure whether IPTV UK 4K is right for you? Compare us against
              the{" "}
              <Link href="/best-iptv-uk" className={linkCls}>
                best IPTV UK options
              </Link>{" "}
              or read how our{" "}
              <Link href="/iptv-subscription-uk" className={linkCls}>
                subscription plans work
              </Link>{" "}
              before you buy.
            </p>
          </MotionReveal>
        </div>
      </section>

      <FeaturesSection />

      {/* Money block — anchor for the buy CTA */}
      <PricingSection />

      {/* Subscription hand-off — internal link to the nested subscription hub
          (matches the original ranking page's structural link from
          /buy-iptv-uk → /iptv-subscription/iptv-uk-subscription). Copy rewritten
          for this domain; anchor id preserved for backward-compatible deep-links. */}
      <section id="subscription" className="relative py-11 lg:py-16">
        <div className="absolute inset-0 section-gradient-1" />
        <div className="absolute inset-0 mesh-gradient" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-200 px-5 py-2 text-sm font-semibold text-violet-700 mb-5">
            <Gem className="h-4 w-4" />
            Inside The Subscription
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Every IPTV UK Subscription Ships With{" "}
            <span className="gradient-text">The Full Library</span>
          </h2>

          <p className="mx-auto max-w-2xl text-base lg:text-lg text-muted leading-relaxed mb-8">
            The tier you pick changes the length of the plan and the per-month
            rate — nothing else. Every subscription unlocks the same 37,000
            live channels, 198,000 films and series, native 4K where the feed
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

      {/* Activation flow — bespoke buy-flow content */}
      <section
        id="activation"
        aria-labelledby="activation-heading"
        className="relative py-14 lg:py-20"
      >
        <div className="absolute inset-0 section-gradient-1" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-50 border border-cyan-200 px-5 py-2 text-sm font-semibold text-cyan-700 mb-5">
                <Clock3 className="h-4 w-4" />
                Activation Flow
              </span>
              <h2
                id="activation-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5"
              >
                From Checkout To Live Streams In{" "}
                <span className="gradient-text">Under Ten Minutes</span>
              </h2>
              <p className="mx-auto max-w-2xl text-base lg:text-lg text-muted leading-relaxed">
                Buying an IPTV subscription should not require patience. Here
                is exactly what happens from the moment you choose your plan
                to the moment your first channel loads.
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

      {/* Refund reassurance — bespoke, addresses biggest buy-intent objection */}
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

      {/* Buy-intent FAQ — bespoke, targets purchase friction */}
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
                Everything You Need To Know{" "}
                <span className="gradient-text">Before You Buy</span>
              </h2>
              <p className="mx-auto max-w-2xl text-base lg:text-lg text-muted leading-relaxed">
                Common questions from shoppers ready to buy IPTV UK —
                everything worth knowing before you order your subscription.
                If we missed one, message us on the{" "}
                <Link href="/contact" className={linkCls}>
                  contact page
                </Link>
                .
              </p>
            </div>
          </MotionReveal>

          <div className="space-y-3">
            {BUY_FAQ_ITEMS.map((item, i) => (
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
                mainEntity: BUY_FAQ_ITEMS.map((item) => ({
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

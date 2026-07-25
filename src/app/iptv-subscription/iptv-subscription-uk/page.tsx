import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";
import SectionLink from "@/components/SectionLink";
import MotionReveal from "@/components/MotionReveal";
import {
  PRICING_PLANS,
  SITE_LOGO_PATH,
  SITE_LOGO_URL,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

const PAGE_PATH = "/iptv-subscription/iptv-subscription-uk";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE =
  "IPTV Subscription UK — 37,000 Channels In 4K From £4.17/mo";
const PAGE_DESCRIPTION =
  "IPTV subscription UK with 37,000 live channels, 198,000 films and series, native 4K UHD, UK-focused edge routing and a 30-day money-back guarantee. Plans from £4.17 a month.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_PATH, languages: { "en-GB": PAGE_PATH } },
  openGraph: {
    type: "article",
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
        alt: "IPTV Subscription UK — 37,000 channels, 4K UHD, 30-day money-back",
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

const linkCls =
  "text-violet-700 underline-offset-2 hover:underline hover:text-violet-800 font-medium";

// Long-form article: 6 prose H2 sections, mid CTA after section 2. Sections
// preserved from reference: vs-sky-virgin, channels, pricing, sign-up,
// subscribers, trust. All copy rewritten uniquely for this domain.
const SECTIONS = [
  {
    id: "vs-sky-virgin",
    h2: "Why an IPTV subscription UK beats a traditional pay-TV bill",
    body: (
      <p>
        A conventional UK pay-TV bundle with sport, cinema and HD box rental
        typically clears £70 a month — and that is before the mid-contract
        annual price rise. An IPTV subscription UK from IPTV UK 4K covers the
        same channel surface, in the same picture quality, from £4.17 a month
        on the 24-month plan. Over a year the difference against a full
        traditional bundle runs to several hundred pounds — meaningful money
        for a UK household. For the wider framing of how each subscription
        term compares, see the{" "}
        <Link href="/iptv-subscription-uk" className={linkCls}>
          IPTV subscription UK comparison page
        </Link>{" "}
        or the sibling{" "}
        <Link
          href="/iptv-subscription/iptv-uk-subscription"
          className={linkCls}
        >
          IPTV UK subscription article
        </Link>{" "}
        — same catalogue, slightly different framing.
      </p>
    ),
  },
  {
    id: "channels",
    h2: "Channels and on-demand library",
    body: (
      <p>
        The live line-up carries every UK terrestrial channel with regional
        variants and +1 timeshifts, every premium UK sport channel for
        football, rugby, cricket, motorsport, boxing and MMA, the premium
        cinema and entertainment tier, and the full international package
        across 40+ language packs. On the on-demand side, 198,000 films and
        series sit in a searchable library — new releases arrive within 48
        hours of transmission and the same-evening UK TV episodes are indexed
        automatically. There is no bronze/silver/gold segmentation and no
        premium unlock behind a paywall; every subscription tier gets the
        full library.
      </p>
    ),
  },
  {
    id: "pricing",
    h2: "IPTV subscription UK pricing",
    body: (
      <p>
        Four terms run in parallel: 3 months at £25.99, 6 months at £39.99,
        12 months at £59.99 and 24 months at £79.99. The 12-month term is the
        sweet-spot per-month figure most UK households pick; the 24-month term
        drops the effective monthly rate to £4.17 for viewers committing
        longer. One simultaneous connection is included by default, with up
        to five extra connections available at £7.25 each for larger
        households.{" "}
        <Link href="/#pricing" className={linkCls}>
          View the full pricing table
        </Link>{" "}
        with every term side by side.
      </p>
    ),
  },
  {
    id: "sign-up",
    h2: "Sign up and stream tonight",
    body: (
      <p>
        Pick a plan, confirm the order on WhatsApp, and your M3U or Xtream
        Codes credentials plus a device-specific setup checklist arrive within
        minutes. Paste the credentials into IPTV Smarters, TiViMate or your
        preferred UK player, and the channel list, EPG and on-demand catalogue
        populate automatically — usually inside a minute. Most new UK
        subscribers are on a live channel within five minutes of ordering.
        First-time installers usually start with the{" "}
        <Link href="/blog/how-to-setup-iptv-firestick" className={linkCls}>
          Fire Stick setup walkthrough
        </Link>{" "}
        or the wider{" "}
        <Link href="/tutorials" className={linkCls}>
          tutorials library
        </Link>{" "}
        before their first evening of channel-hopping.
      </p>
    ),
  },
  {
    id: "subscribers",
    h2: "Thousands of active UK subscribers and counting",
    body: (
      <p>
        The IPTV UK 4K subscription is delivered to thousands of active UK
        households on capacity provisioned for peak-hour traffic, not
        quiet-day averages. UK-focused edge routing keeps live-event latency
        inside 30 seconds end-to-end — faster than some traditional pay-TV
        boxes over poor home Wi-Fi. Independent customer feedback is
        published on public review platforms; if you want the honest signals
        of a legitimate UK IPTV service, they are easier to check than any
        star widget on a provider&rsquo;s own site.
      </p>
    ),
  },
  {
    id: "trust",
    h2: "30-day money-back, instant activation, 24/7 UK support",
    body: (
      <p>
        The 30-day money-back guarantee covers every IPTV subscription UK
        plan — same-day processing, no retention loop, no forms beyond a
        WhatsApp message. The full policy is published on the{" "}
        <Link href="/refund" className={linkCls}>
          refund page
        </Link>{" "}
        rather than gated behind a support ticket. Activation is effectively
        instant once your WhatsApp order is confirmed. English-language
        support runs 24/7 over WhatsApp and email, with response times
        typically measured in minutes rather than hours.
      </p>
    ),
  },
];

const MID_CTA_AFTER = 2;

const FAQS = [
  {
    q: "What is the best IPTV subscription UK in 2026?",
    a: "IPTV UK 4K — 37,000 live channels, 198,000 films and series, native 4K UHD on the feeds that broadcast in 4K, UK-focused edge infrastructure, English-language 24/7 support and a 30-day money-back guarantee. The plan surface, refund window and pricing are all published on-site rather than hidden behind a support ticket.",
  },
  {
    q: "Is an IPTV subscription UK legal?",
    a: "Buying a licensed IPTV subscription from a provider that runs its own streaming infrastructure and licenses the content it distributes is legal in the UK. Issues arise only with unlicensed re-broadcasters — those services carry no refund policy, no support and typically disappear inside a few weeks.",
  },
  {
    q: "What is the cheapest IPTV subscription UK?",
    a: "The 3-month starter plan sits at £25.99 total. The 24-month household plan drops the effective monthly rate to £4.17, which is the cheapest per-month figure on the page. The 12-month term is the sweet-spot most UK households pick.",
  },
  {
    q: "Can I cancel my IPTV subscription UK any time?",
    a: "The 30-day money-back guarantee covers every plan, including the discounted 24-month term. Cancellations inside the window return the full subscription fee — same-day processing, no retention loop, no automatic partial-refund reduction.",
  },
  {
    q: "Will UK sport channels work on my IPTV subscription UK?",
    a: "Yes. Premier League, EFL, top-flight European football, Six Nations rugby, cricket, Formula 1, boxing, tennis and MMA all sit on the live schedule — in HD, and in 4K where the source feed transmits in 4K.",
  },
  {
    q: "Does the IPTV subscription UK work in 4K?",
    a: "Yes — on Fire TV Stick 4K and Fire TV Cube, Apple TV 4K, Samsung and LG 4K Smart TVs, Android TV 4K boxes and any player that supports H.265. The 4K library is not gated behind a premium tier; every subscription plan streams natively in 4K on the feeds that broadcast in 4K.",
  },
  {
    q: "How many devices can I use?",
    a: "One simultaneous connection is included by default. Up to five extra connections are available at £7.25 each for larger households — enough to cover the living-room TV, a bedroom, a tablet and a phone streaming different channels at once.",
  },
  {
    q: "Will my IPTV subscription UK work when I travel?",
    a: "The subscription is UK-focused but the account remains reachable while travelling. Some households prefer to layer an encrypted route on shared or hotel Wi-Fi — the optional Secure Proxy add-on handles that in a single checkout line without needing a separate VPN app.",
  },
] as const;

export default function IptvSubscriptionUkNestedPage() {
  const webpageId = `${PAGE_URL}#webpage`;
  const serviceId = `${PAGE_URL}#service`;
  const breadcrumbId = `${PAGE_URL}#breadcrumb`;
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;

  const lowPrice = Math.min(...PRICING_PLANS.map((p) => p.price)).toFixed(2);
  const highPrice = Math.max(...PRICING_PLANS.map((p) => p.price)).toFixed(2);

  return (
    <>
      {/* Pillar header — matches reference SeoLanding shape */}
      <section
        id="pillar-header"
        className="relative pt-28 sm:pt-32 pb-10 lg:pt-36 lg:pb-14"
      >
        <div className="absolute inset-0 section-gradient-1" />
        <div className="absolute inset-0 mesh-gradient" />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="text-xs sm:text-sm text-muted mb-5"
          >
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-violet-700">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/iptv-subscription-uk"
                  className="hover:text-violet-700"
                >
                  IPTV Subscription UK
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground font-medium" aria-current="page">
                Subscription Article
              </li>
            </ol>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-200 px-4 py-1.5 text-xs font-semibold text-violet-700 mb-4">
            Article · IPTV Subscription UK
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-5">
            IPTV Subscription UK —{" "}
            <span className="gradient-text">
              37,000 Channels, 4K UHD, From £4.17
            </span>
          </h1>

          <p className="text-base lg:text-lg text-muted leading-relaxed">
            Our IPTV subscription UK delivers 37,000 live channels and 198,000
            films and series for as little as £4.17 a month on the 24-month
            plan. Built for UK viewers, served from UK-focused edge
            infrastructure, with native 4K UHD where the feed supports it,
            English-language 24/7 support and a 30-day money-back guarantee.
            Compare with the sibling{" "}
            <Link
              href="/iptv-subscription/iptv-uk-subscription"
              className={linkCls}
            >
              IPTV UK subscription article
            </Link>{" "}
            or the{" "}
            <Link href="/iptv-subscription-uk" className={linkCls}>
              term-by-term comparison
            </Link>{" "}
            to pick the framing that suits you.
          </p>
        </div>
      </section>

      {/* Long-form body — 6 prose sections, mid CTA after section 2 */}
      <div className="relative bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
          {SECTIONS.map((s, i) => (
            <div key={s.id}>
              <MotionReveal>
                <section
                  id={s.id}
                  aria-labelledby={`${s.id}-heading`}
                  className="py-8 lg:py-10 border-b border-slate-200/70 last:border-b-0"
                >
                  <h2
                    id={`${s.id}-heading`}
                    className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-foreground mb-4 leading-tight"
                  >
                    {s.h2}
                  </h2>
                  <div className="space-y-4 text-base lg:text-lg text-muted leading-relaxed">
                    {s.body}
                  </div>
                </section>
              </MotionReveal>

              {i + 1 === MID_CTA_AFTER && (
                <MotionReveal>
                  <div className="my-6 rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-cyan-50 p-6 lg:p-8 text-center">
                    <p className="text-sm sm:text-base font-medium text-muted mb-4">
                      Know the catalogue? Pick a term.
                    </p>
                    <SectionLink
                      href="/#pricing"
                      className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-900/20 transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98]"
                    >
                      See IPTV Subscription UK Plans
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </SectionLink>
                  </div>
                </MotionReveal>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* FAQ — 8 items */}
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="relative py-14 lg:py-20"
      >
        <div className="absolute inset-0 section-gradient-1" />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            >
              IPTV Subscription UK{" "}
              <span className="gradient-text">FAQs</span>
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((item, i) => (
              <MotionReveal
                key={item.q}
                className="rounded-2xl border border-slate-200/70 bg-white p-5 lg:p-6 shadow-sm"
              >
                <details className="group">
                  <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                    <h3 className="text-base lg:text-lg font-semibold text-foreground pr-2">
                      {item.q}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700 transition-transform group-open:rotate-45 text-lg leading-none"
                    >
                      +
                    </span>
                  </summary>
                  <p
                    id={`faq-panel-${i}`}
                    className="mt-3 text-sm lg:text-base text-muted leading-relaxed"
                  >
                    {item.a}
                  </p>
                </details>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing paragraph + final CTA */}
      <section
        id="closing"
        aria-labelledby="closing-heading"
        className="relative py-14 lg:py-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-cyan-50" />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <MotionReveal>
            <h2
              id="closing-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-5 leading-tight"
            >
              One subscription,{" "}
              <span className="gradient-text">
                every UK channel, four term lengths
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-base lg:text-lg text-muted leading-relaxed mb-8">
              See{" "}
              <Link href="/iptv-subscription-uk" className={linkCls}>
                all four subscription terms side by side
              </Link>{" "}
              on the comparison page, or head straight to the pricing table to{" "}
              <Link href="/buy-iptv-uk" className={linkCls}>
                buy IPTV in the UK
              </Link>{" "}
              tonight — no installer, no dish, no long contract.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <SectionLink
                href="/#pricing"
                className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-900/20 transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98]"
              >
                <ShieldCheck className="h-5 w-5" />
                Start Your IPTV Subscription UK Today
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </SectionLink>
              <Link
                href="/buy-iptv-uk"
                className="text-sm font-semibold text-violet-700 underline-offset-4 hover:underline"
              >
                Or go straight to the purchase page &rarr;
              </Link>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* JSON-LD @graph — WebPage + BreadcrumbList (3 levels) + Service +
          AggregateOffer + FAQPage. Organization + WebSite live on the
          homepage and are referenced by @id. Reference had an explicit
          Organization node; kept as @id reference for consistency with the
          rest of the site's graph pattern. */}
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
                    item: `${SITE_URL}/iptv-subscription-uk`,
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "IPTV Subscription UK Article",
                    item: PAGE_URL,
                  },
                ],
              },
              {
                "@type": "Service",
                "@id": serviceId,
                serviceType: "IPTV Subscription UK",
                name: "IPTV UK 4K — IPTV Subscription UK",
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
                  url: `${SITE_URL}/#pricing`,
                },
              },
              {
                "@type": "FAQPage",
                mainEntity: FAQS.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
            ],
          }),
        }}
      />
    </>
  );
}

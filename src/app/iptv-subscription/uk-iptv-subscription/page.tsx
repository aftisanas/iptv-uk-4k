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

/* ------------------------------------------------------------------ *
 *  /iptv-subscription/uk-iptv-subscription
 *  Primary keyword: "uk iptv subscription" · secondaries:
 *  "uk iptv subs", "subscription uk iptv".
 *
 *  Angle: UK-first framing — what changes when the service is built
 *  around British viewing habits rather than bolting the UK onto a
 *  global channel list. House style: no broadcaster brand names.
 * ------------------------------------------------------------------ */

const PAGE_PATH = "/iptv-subscription/uk-iptv-subscription";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE = "UK IPTV Subscription — Built for British Viewers";
const PAGE_DESCRIPTION =
  "A UK IPTV subscription designed around British viewing: UK channels first in the guide, 7-day catch-up, native 4K, UK-focused edge routing and a 30-day money-back guarantee.";

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
        alt: "UK IPTV subscription built for British households",
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

const SECTIONS = [
  {
    id: "different",
    h2: "What makes a UK IPTV subscription different",
    body: (
      <>
        <p>
          Most IPTV services serve a global channel list and bolt the UK on as a
          regional folder somewhere below the international packs. A UK IPTV
          subscription inverts that: the guide opens on British terrestrial
          channels, the search defaults to UK schedules, the EPG runs on UK time
          out of the box, and billing is in pounds without a currency-conversion
          fee landing on your statement a week later.
        </p>
        <p>
          The difference sounds cosmetic until you use it nightly. Finding a
          channel you actually watch should take one press, not four. Recording
          the right episode depends on an EPG that knows British transmission
          times. And when something breaks at 9pm on a Saturday, support that
          works UK hours in English is the difference between a five-minute fix
          and a lost evening.
        </p>
      </>
    ),
  },
  {
    id: "channels",
    h2: "Channels included in the UK IPTV subscription",
    body: (
      <>
        <p>
          Every UK terrestrial channel, including the public-service main feeds,
          the full set of regional variants, the +1 timeshifts and the
          sister-channels that carry archive drama and comedy. For most British
          households this block alone replaces the aerial entirely.
        </p>
        <p>
          Every premium UK subscription tier for entertainment, films, news and
          documentaries, plus the full premium sport line-up — top-flight UK
          football, rugby union and league, cricket, racing, motorsport, boxing
          and MMA. Weekend PPV cards are part of the same catalogue rather than
          separate purchases. The{" "}
          <Link href="/uk-sports-iptv" className={linkCls}>
            UK sports IPTV breakdown
          </Link>{" "}
          covers the live schedule in detail.
        </p>
        <p>
          On top of that sits the international package — 40+ language packs
          spanning European, Asian, African, MENA, North American and Indian
          sub-continent programming — and the 198,000-title on-demand library,
          with new UK releases typically arriving inside 48 hours and
          same-evening episode drops for major British series.
        </p>
        <p>
          Catch-up runs 7 days across the UK terrestrial block, so a missed
          fixture or episode is replayable inside the same player rather than
          sending you to a separate app and a separate login.
        </p>
      </>
    ),
  },
  {
    id: "quality",
    h2: "Stream quality, 4K and peak-hour stability",
    body: (
      <>
        <p>
          Channels stream in 1080p as standard and in native 4K UHD wherever the
          source broadcast is produced in UHD — nothing is upscaled and
          relabelled. The{" "}
          <Link href="/iptv-subscription/4k-iptv-uk" className={linkCls}>
            4K IPTV UK page
          </Link>{" "}
          sets out exactly which feeds carry UHD and what bandwidth they need.
        </p>
        <p>
          Stability under load is the metric that actually separates services.
          UK-focused edge routing holds live-event latency inside roughly 30
          seconds end-to-end, and anti-freeze rebuffering re-fetches dropped
          packets within a second or two rather than stalling the picture. The
          test that matters is Saturday evening, when every under-provisioned
          provider in the market starts to buckle.
        </p>
      </>
    ),
  },
  {
    id: "pricing",
    h2: "UK IPTV subscription pricing and plan length",
    body: (
      <>
        <p>
          Four subscription terms — 3, 6, 12 and 24 months — with the effective
          monthly cost falling as the term extends. The 12-month plan sits at
          the usual sweet spot for households that already know the service
          suits them; the 24-month term carries the lowest per-month figure on
          the page. Optional add-ons for extra simultaneous connections and a
          secure proxy are priced per term at checkout, so what you see is the
          full amount.{" "}
          <Link href="/#pricing" className={linkCls}>
            See the pricing table
          </Link>{" "}
          for current GBP figures.
        </p>
        <p>
          Nothing core is sold separately: the 4K feeds, the on-demand
          catalogue, the 7-day catch-up, the language packs and 24/7 support are
          bundled into every term. Set against a traditional UK pay-TV bill —
          where UHD and premium sport typically sit behind the top bundle and an
          18-month contract — the annual difference for a household runs into
          the hundreds. The{" "}
          <Link href="/iptv-subscription-uk" className={linkCls}>
            IPTV subscription UK comparison
          </Link>{" "}
          lays the terms out side by side.
        </p>
      </>
    ),
  },
  {
    id: "activation",
    h2: "Activating your UK IPTV subscription",
    body: (
      <p>
        Pick a term, complete checkout over WhatsApp, and your credentials —
        either an M3U URL or Xtream Codes login — arrive within minutes.
        Paste them into IPTV Smarters Pro, TiViMate or any compatible player and
        the channel list, EPG, logos and catch-up library populate
        automatically. Most new subscribers are watching live inside five
        minutes of paying. The{" "}
        <Link href="/tutorials" className={linkCls}>
          tutorials library
        </Link>{" "}
        walks through each device individually if you would rather follow along.
      </p>
    ),
  },
  {
    id: "devices",
    h2: "Compatible devices for the UK IPTV subscription",
    body: (
      <p>
        Fire TV Stick in every generation including 4K Max and Fire TV Cube,
        Apple TV and Apple TV 4K, Android TV across all brands, Nvidia Shield,
        Samsung Tizen and LG webOS smart TVs, iPhone and iPad, Android phones
        and tablets, Windows and macOS desktops, plus MAG, Formuler and Enigma2
        receivers. One subscription covers them all up to your plan&rsquo;s
        connection count — you can install on every screen in the house and the
        limit only applies to how many stream at the same moment.
      </p>
    ),
  },
];

const MID_CTA_AFTER = 3;

const FAQS = [
  {
    q: "What is a UK IPTV subscription?",
    a: "A UK IPTV subscription delivers live television and on-demand films over your existing internet connection instead of a satellite dish or cable box, with the channel guide, EPG timings and support all built around British viewing. Ours carries 37,000 channels including the full UK terrestrial block and premium sport.",
  },
  {
    q: "How much does a UK IPTV subscription cost?",
    a: "Four terms are available — 3, 6, 12 and 24 months — with the effective monthly cost dropping as the term lengthens. The 12-month plan is the usual sweet spot and the 24-month term carries the lowest per-month rate. Current GBP figures are on the pricing table.",
  },
  {
    q: "Do I get UK catch-up television?",
    a: "Yes. Catch-up runs 7 days across the UK terrestrial block inside the same player, so a missed episode or fixture is replayable without opening a separate app or signing into another service.",
  },
  {
    q: "Can I cancel or change my UK IPTV subscription?",
    a: "Every plan is covered by a 30-day money-back guarantee, published on the refund page and processed same-day with no retention loop. Subscriptions run for the term you choose and do not auto-renew without your say-so.",
  },
  {
    q: "What if a channel stops working?",
    a: "Message support on WhatsApp or live chat — both are staffed 24/7 in English. Replacement streams are pushed within minutes rather than sitting in a ticket queue, and any outage counts towards the 30-day money-back window.",
  },
  {
    q: "Can I share my UK IPTV subscription with family?",
    a: "Yes, within your plan's simultaneous-connection count. You can install the credentials on every screen in the house; the limit applies only to how many stream at the same time. Extra connections can be added at checkout for the length of the term.",
  },
  {
    q: "Does the subscription work when I travel outside the UK?",
    a: "Yes. The optional secure-proxy add-on keeps the UK channel list reachable across Europe and North America, which is the usual reason expat and holiday-home subscribers add it at checkout.",
  },
  {
    q: "How is this different from traditional UK pay-TV?",
    a: "The same channel coverage at a fraction of the price, with no installation visit, no satellite dish, no set-top box rental and no 18-month minimum term. Native 4K is included on every plan rather than gated behind a premium tier.",
  },
] as const;

export default function UkIptvSubscriptionPage() {
  const webpageId = `${PAGE_URL}#webpage`;
  const serviceId = `${PAGE_URL}#service`;
  const breadcrumbId = `${PAGE_URL}#breadcrumb`;
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;

  const lowPrice = Math.min(...PRICING_PLANS.map((p) => p.price)).toFixed(2);
  const highPrice = Math.max(...PRICING_PLANS.map((p) => p.price)).toFixed(2);

  return (
    <>
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
                <Link href="/iptv-subscription" className="hover:text-violet-700">
                  IPTV Subscription
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground font-medium" aria-current="page">
                UK IPTV Subscription
              </li>
            </ol>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-200 px-4 py-1.5 text-xs font-semibold text-violet-700 mb-4">
            UK IPTV Subscription
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-5">
            UK IPTV Subscription —{" "}
            <span className="gradient-text">Built for British Viewers</span>
          </h1>

          <p className="text-base lg:text-lg text-muted leading-relaxed">
            A UK IPTV subscription from IPTV UK 4K puts British television first
            — the guide opens on UK terrestrial, the EPG runs on UK time, catch-up
            covers 7 days, and billing is in pounds. 37,000 live channels,
            198,000 films and series, native 4K where the broadcast is 4K, and a
            30-day money-back guarantee. Read the focused{" "}
            <Link
              href="/iptv-subscription/iptv-uk-subscription"
              className={linkCls}
            >
              IPTV UK subscription details
            </Link>{" "}
            or the broader{" "}
            <Link
              href="/iptv-subscription/iptv-subscription-uk"
              className={linkCls}
            >
              IPTV subscription UK overview
            </Link>
            .
          </p>
        </div>
      </section>

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
                      Four terms, one full channel list, no hidden tiers.
                    </p>
                    <SectionLink
                      href="/#pricing"
                      className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-900/20 transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98]"
                    >
                      See UK IPTV Subscription Plans
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </SectionLink>
                  </div>
                </MotionReveal>
              )}
            </div>
          ))}
        </div>
      </div>

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
              UK IPTV Subscription{" "}
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
              <span className="gradient-text">every screen in the house</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base lg:text-lg text-muted leading-relaxed mb-8">
              UK channels first, 7-day catch-up, native 4K on the feeds that
              carry it, and support that answers in English at nine on a
              Saturday evening. When you are ready to{" "}
              <Link href="/buy-iptv-uk" className={linkCls}>
                buy IPTV in the UK
              </Link>
              , your login lands within minutes of checkout.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <SectionLink
                href="/buy-iptv-uk"
                className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-900/20 transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98]"
              >
                <ShieldCheck className="h-5 w-5" />
                Start Your UK IPTV Subscription
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </SectionLink>
              <Link
                href="/iptv-subscription"
                className="text-sm font-semibold text-violet-700 underline-offset-4 hover:underline"
              >
                Or read the subscription overview &rarr;
              </Link>
            </div>
          </MotionReveal>
        </div>
      </section>

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
                  { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "IPTV Subscription",
                    item: `${SITE_URL}/iptv-subscription`,
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "UK IPTV Subscription",
                    item: PAGE_URL,
                  },
                ],
              },
              {
                "@type": "Service",
                "@id": serviceId,
                serviceType: "UK IPTV Subscription",
                name: "IPTV UK 4K — UK IPTV Subscription",
                url: PAGE_URL,
                description: PAGE_DESCRIPTION,
                provider: { "@id": organizationId },
                areaServed: { "@type": "Country", name: "United Kingdom" },
                audience: {
                  "@type": "Audience",
                  geographicArea: { "@type": "Country", name: "United Kingdom" },
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

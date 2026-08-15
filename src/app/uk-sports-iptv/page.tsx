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
 *  /uk-sports-iptv  (standalone)
 *  Primary keyword: "uk sports iptv" · secondary: "uk sport iptv".
 *
 *  House style — strictly enforced on this page: no broadcaster names,
 *  no league or competition trademarks. Generic descriptors only
 *  ("top-flight UK football", "domestic cup competitions"). Sport is
 *  the highest-sensitivity topic on the site and this page must not
 *  imply any affiliation with, or authorised carriage of, a named
 *  rights holder's output.
 * ------------------------------------------------------------------ */

const PAGE_PATH = "/uk-sports-iptv";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE = "UK Sports IPTV — Live Fixtures in 4K, One Subscription";
const PAGE_DESCRIPTION =
  "UK sports IPTV from IPTV UK 4K: top-flight football, rugby, motorsport, cricket, boxing and MMA on one subscription, in 4K where the broadcast is 4K, on any device you own.";

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
        alt: "UK sports IPTV — live fixtures in 4K from IPTV UK 4K",
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
    id: "covers",
    h2: "What UK sports IPTV covers",
    body: (
      <>
        <p>
          The appeal of a sports-focused IPTV subscription is consolidation. A
          British household following football, rugby and motorsport through
          traditional routes typically ends up paying three separate bills, each
          renewing on a different date, each carrying its own minimum term. One
          subscription collapses that into a single line item.
        </p>
        <p>
          The live schedule spans top-flight UK football and the divisions below
          it, domestic cup competitions, European club football, rugby union and
          rugby league including the international windows, the full motorsport
          calendar across practice, qualifying and race day, international
          cricket in all three formats, tennis through the major tournaments,
          golf&rsquo;s championship weeks, athletics, darts, snooker and the
          combat-sports calendar including headline weekend cards.
        </p>
      </>
    ),
  },
  {
    id: "football",
    h2: "Live football on UK sports IPTV",
    body: (
      <>
        <p>
          Football is what most subscribers actually sign up for. The schedule
          covers the top flight of the English and Scottish game, the divisions
          beneath them, the domestic cup rounds, and the European club
          competitions from the group stage through to the finals — plus the
          major continental leagues for viewers who follow Spanish, Italian,
          German or French football.
        </p>
        <p>
          Fixtures not carried domestically are frequently available through
          international feeds, which is one of the practical reasons households
          move to IPTV in the first place. Match-day coverage runs with the
          usual build-up, half-time analysis and post-match reaction where the
          source feed carries it.
        </p>
      </>
    ),
  },
  {
    id: "other-sports",
    h2: "Rugby, motorsport, cricket and combat sports",
    body: (
      <p>
        Domestic league rugby, the northern-hemisphere international
        championship and autumn internationals all stream live, as does rugby
        league through its domestic season and international fixtures. The
        motorsport calendar covers every race weekend end to end — practice
        sessions, qualifying and the race itself — across the leading open-wheel
        and endurance series. Cricket runs through the international calendar in
        the long, one-day and short formats, including the global tournaments
        and the marquee touring series. Combat sports cover headline weekend
        cards and their undercards across the major boxing and mixed
        martial-arts promotions, included in the subscription rather than
        purchased separately each time.
      </p>
    ),
  },
  {
    id: "4k",
    h2: "4K UHD on live sport streams",
    body: (
      <p>
        Every live sport feed transmitted natively in 4K is delivered in 4K
        through the service — the fixtures produced in UHD, the premium cinema
        simulcasts, and the marquee weekend cards, which are routinely produced
        in UHD. Sport is where the resolution jump is most visible: fast lateral
        motion, a wide pitch shot and floodlit conditions are exactly the
        circumstances in which upscaled 1080p falls apart and native UHD holds
        together. Where HDR metadata is present it is passed through to capable
        displays, which on a decent panel makes a bigger difference under
        floodlights than the pixel count does. The{" "}
        <Link href="/iptv-subscription/4k-iptv-uk" className={linkCls}>
          4K IPTV UK page
        </Link>{" "}
        covers the encoding and bandwidth detail.
      </p>
    ),
  },
  {
    id: "anti-freeze",
    h2: "Stability on match day — the only test that counts",
    body: (
      <p>
        Any service looks competent on a quiet Wednesday. The measure that
        matters is a Saturday evening kick-off, when demand spikes across the
        entire country at the same second and under-provisioned providers begin
        to freeze. UK-focused edge routing keeps live-event latency inside
        roughly 30 seconds end-to-end, which matters when a neighbour&rsquo;s
        reaction through the wall would otherwise reach you before the goal
        does. Anti-freeze rebuffering re-fetches dropped packets within a second
        or two rather than stalling the picture — the difference between a brief
        softening and missing the decisive moment entirely.
      </p>
    ),
  },
  {
    id: "devices",
    h2: "Watching UK sports IPTV on your existing kit",
    body: (
      <p>
        Fire TV Stick including 4K Max and Fire TV Cube, Apple TV 4K, Android TV
        and Nvidia Shield, Samsung Tizen and LG webOS smart TVs, phones and
        tablets on iOS and Android, Windows and macOS laptops, plus MAG,
        Formuler and Enigma2 boxes. For match day specifically, the single most
        useful thing you can do is run Ethernet to whatever device feeds the main
        TV — wired delivery removes the most common cause of mid-match
        buffering. Setup walkthroughs for each platform sit in the{" "}
        <Link href="/tutorials" className={linkCls}>
          tutorials library
        </Link>
        .
      </p>
    ),
  },
  {
    id: "pricing",
    h2: "UK sports IPTV pricing",
    body: (
      <p>
        The full sports line-up is included on every plan from the entry term
        upwards — there is no separate sports tier and no per-event charge for
        headline weekend cards. Four subscription terms are available, with the
        effective monthly rate falling as the term lengthens. Set against
        maintaining several separate sports subscriptions through traditional
        routes, the annual difference for a household following more than one
        sport is substantial.{" "}
        <Link href="/#pricing" className={linkCls}>
          See the pricing table
        </Link>{" "}
        for current GBP figures, or compare terms on the{" "}
        <Link href="/iptv-subscription-uk" className={linkCls}>
          IPTV subscription UK page
        </Link>
        .
      </p>
    ),
  },
];

const MID_CTA_AFTER = 3;

const FAQS = [
  {
    q: "What sports are included with UK sports IPTV?",
    a: "Top-flight UK football and the divisions below it, domestic cup competitions, European club football, rugby union and league, the full motorsport calendar, international cricket in all formats, tennis, golf, athletics, darts, snooker and the combat-sports calendar including headline weekend cards.",
  },
  {
    q: "Does UK sports IPTV include 4K streams?",
    a: "Yes — every fixture produced natively in 4K is delivered in 4K, at no extra charge on any plan. Sport is where the difference is most visible, because fast motion and wide pitch shots are exactly where upscaled 1080p breaks down.",
  },
  {
    q: "Is UK sports IPTV legal?",
    a: "Subscribing to a licensed IPTV service that runs its own streaming infrastructure and pays for the content it distributes is legal in the UK. The unlicensed re-broadcast market is where the risk sits, and those services are identifiable by the absence of published refund terms and real support.",
  },
  {
    q: "What devices work for UK sports IPTV?",
    a: "Fire Stick including 4K Max and Cube, Apple TV, Android TV, Nvidia Shield, Samsung and LG smart TVs, iPhone, iPad, Android, Windows, macOS, plus MAG, Formuler and Enigma2 receivers. For match day, wiring the main TV's device to the router with Ethernet is the single best reliability upgrade.",
  },
  {
    q: "How much does UK sports IPTV cost?",
    a: "The full sports schedule is included on every plan — there is no separate sports tier and no per-event charge for headline cards. Four subscription terms are available with the effective monthly rate falling as the term lengthens. Current GBP figures are on the pricing table.",
  },
  {
    q: "What happens if a stream freezes during a match?",
    a: "Anti-freeze rebuffering recovers dropped packets within a second or two rather than stalling. If a channel drops entirely, WhatsApp and live chat are staffed 24/7 and a replacement stream is pushed within minutes — which on a match night is the response time that actually matters.",
  },
  {
    q: "Can I watch on more than one screen during the same match?",
    a: "Yes, up to your plan's simultaneous-connection count. Extra connections can be added at checkout for the length of the term, which is what most multi-sport households do so two fixtures can run in different rooms at once.",
  },
  {
    q: "Is there a risk-free way to test the sports coverage?",
    a: "Every plan carries a 30-day money-back guarantee, published on the refund page and processed same-day. That window is deliberately long enough to cover several match weekends, so you can judge peak-time stability rather than a quiet weekday evening.",
  },
] as const;

export default function UkSportsIptvPage() {
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
              <li className="text-foreground font-medium" aria-current="page">
                UK Sports IPTV
              </li>
            </ol>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-200 px-4 py-1.5 text-xs font-semibold text-violet-700 mb-4">
            UK Sports IPTV
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-5">
            UK Sports IPTV —{" "}
            <span className="gradient-text">Every Fixture, One Bill</span>
          </h1>

          <p className="text-base lg:text-lg text-muted leading-relaxed">
            Following football, rugby and motorsport through traditional routes
            usually means three subscriptions, three renewal dates and three
            minimum terms. UK sports IPTV from IPTV UK 4K puts the live schedule
            on one subscription — in 4K where the broadcast is 4K, on the device
            already under your TV. For the full service scope see the{" "}
            <Link href="/iptv-subscription" className={linkCls}>
              IPTV subscription overview
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
                      The full sports schedule is on every plan — no sports tier.
                    </p>
                    <SectionLink
                      href="/#pricing"
                      className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-900/20 transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98]"
                    >
                      See UK Sports IPTV Plans
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
              UK Sports IPTV <span className="gradient-text">FAQs</span>
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
              Judge it on a{" "}
              <span className="gradient-text">Saturday evening</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base lg:text-lg text-muted leading-relaxed mb-8">
              That is when every provider in the market is under load at once,
              and it is the only test worth running. The 30-day money-back
              window is deliberately long enough to cover several match
              weekends. When you are ready to{" "}
              <Link href="/iptv-uk" className={linkCls}>
                buy IPTV in the UK
              </Link>
              , credentials land within minutes of checkout.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <SectionLink
                href="/iptv-uk"
                className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-900/20 transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98]"
              >
                <ShieldCheck className="h-5 w-5" />
                Start UK Sports IPTV Risk-Free
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </SectionLink>
              <Link
                href="/iptv-subscription/4k-iptv-uk"
                className="text-sm font-semibold text-violet-700 underline-offset-4 hover:underline"
              >
                Or read about 4K sport streams &rarr;
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
                    name: "UK Sports IPTV",
                    item: PAGE_URL,
                  },
                ],
              },
              {
                "@type": "Service",
                "@id": serviceId,
                serviceType: "UK Sports IPTV",
                name: "IPTV UK 4K — UK Sports IPTV",
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

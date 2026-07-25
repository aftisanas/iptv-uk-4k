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

const PAGE_PATH = "/best-iptv-uk";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE =
  "Best IPTV UK 2026 — 37,000 Channels, 4K UHD, 30-Day Refund";
const PAGE_DESCRIPTION =
  "Best IPTV UK for 2026: IPTV UK 4K carries 37,000 live channels, 198,000 films and series, native 4K UHD and a 30-day money-back guarantee — held against the criteria that actually matter for British households.";

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
        alt: "Best IPTV UK 2026 — IPTV UK 4K shortlist for British households",
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

// Reference stance: brand-first pillar that answers the "best" question with
// the site itself, then supports the claim across 8 prose sections. Copy fully
// rewritten for this domain; internal links rerouted to routes that exist.
const SECTIONS = [
  {
    id: "what-makes-best",
    h2: "What makes an IPTV service the best in the UK",
    body: (
      <>
        <p>
          Five things sort a serious UK IPTV subscription from a weekend-only
          one. Channel coverage that includes every UK terrestrial feed, every
          major premium sports and entertainment tier, and the regional +1
          timeshifts British households actually flip between. Stream quality
          that runs natively in 4K UHD when the source broadcast is 4K —
          not upscaled 1080p wearing a marketing sticker. Peak-hour stability
          that holds on Saturday-evening kick-off, when under-provisioned
          servers begin to freeze. Pricing measured in pounds, all-in, printed
          on the page before checkout. And support staffed by an
          English-speaking team you can actually reach outside office hours.
        </p>
        <p>
          Channel count on its own is a vanity metric. A 50,000-channel
          catalogue that buffers into stoppage time is worth less than a
          curated 37,000-channel line-up that stays live through full-time. The
          honest measure of the best IPTV UK service is what happens when a
          million viewers open the same stream at the same second — everything
          else is a spec sheet.
        </p>
      </>
    ),
  },
  {
    id: "shortlist",
    h2: "The UK shortlist — what to look for in 2026",
    body: (
      <>
        <p>
          <strong className="text-foreground">
            First-party streaming infrastructure.
          </strong>{" "}
          Providers running their own servers are almost always more stable
          than resellers-of-resellers. Ask where the edge nodes sit; a serious
          UK IPTV service will name specific UK datacentres and not deflect the
          question. For the underlying subscription structure see the{" "}
          <Link
            href="/iptv-subscription/iptv-uk-subscription"
            className={linkCls}
          >
            IPTV UK subscription overview
          </Link>{" "}
          and the wider{" "}
          <Link href="/iptv-subscription-uk" className={linkCls}>
            subscription comparison
          </Link>
          .
        </p>
        <p>
          <strong className="text-foreground">
            Native 4K UHD on feeds that transmit in 4K.
          </strong>{" "}
          UK top-flight football, premium cinema and the major terrestrial
          broadcasters all push a 4K signal. A best-in-class IPTV UK
          subscription mirrors that resolution rather than downscaling
          everything to 1080p and calling it "HD ready."
        </p>
        <p>
          <strong className="text-foreground">
            An optional secure proxy at checkout.
          </strong>{" "}
          Some UK ISPs shape streaming bandwidth during peak hours. A bundled
          secure-proxy add-on holds the channel at full quality without
          layering a separate VPN app on top. The best IPTV UK providers offer
          it as a checkout line item, not as a compulsory upsell.
        </p>
        <p>
          <strong className="text-foreground">
            A published money-back guarantee.
          </strong>{" "}
          A refund window written on the site — not "contact us for details" —
          is one of the strongest signals of a legitimate service. IPTV UK 4K
          runs a 30-day money-back window with same-day processing, spelled
          out on the refund page in plain English.
        </p>
        <p>
          <strong className="text-foreground">
            24/7 English-language support.
          </strong>{" "}
          Most IPTV issues are five-minute fixes once you reach a competent
          human. A ticket queue that answers in three days is not real support.
          Look for WhatsApp or live-chat response measured in minutes, staffed
          around the clock, in English.
        </p>
      </>
    ),
  },
  {
    id: "channels",
    h2: "Channels — what the best IPTV UK service actually carries",
    body: (
      <>
        <p>
          Every UK terrestrial channel in HD and 4K where transmitted, plus the
          public-service main feeds, the regional variants, the +1 timeshifts,
          and the sister-channels that carry archive comedy and drama. The
          shortlist a UK household actually opens on a weekday evening should
          all be one click away in the EPG, not buried under a category tree.
        </p>
        <p>
          Every premium UK subscription channel for entertainment, films and
          news. Every premium UK sport channel for live football, rugby,
          cricket, racing, Formula 1, boxing and MMA — including the regional
          sport variants that carry the fixtures the national feeds skip.
          Weekend PPV events (title fights, wrestling headline cards) are part
          of the same catalogue rather than a separate paywalled purchase.
        </p>
        <p>
          The full international package — North American, European, Asian,
          African, MENA and Indian sub-continent bundles — covers 40+ language
          packs. Useful for expat households and for viewers who want the
          overseas feed of fixtures not broadcast domestically.
        </p>
        <p>
          On-demand: 198,000 films and series, refreshed continuously, with new
          UK releases typically arriving inside 48 hours of transmission and
          same-evening episode drops for the major British series.
        </p>
      </>
    ),
  },
  {
    id: "pricing",
    h2: "Pricing — what the best IPTV UK plans cost",
    body: (
      <>
        <p>
          The best IPTV UK services price aggressively because they carry none
          of the satellite bandwidth, engineer-visit and set-top-box overheads
          of traditional pay-TV. IPTV UK 4K runs four subscription terms — 3,
          6, 12 and 24 months — from a single-connection household tier up to
          a five-connection household plan for larger homes. The 12-month plan
          settles near the annual sweet spot; the 24-month plan is the
          cheapest per-month figure on the page.{" "}
          <Link href="/#pricing" className={linkCls}>
            See the pricing table
          </Link>{" "}
          for the current GBP figures.
        </p>
        <p>
          What you do not pay for separately: the 4K UHD feeds, the 198,000-film
          on-demand catalogue, the 7-day EPG catch-up, the 40+ language packs
          and 24/7 English support are all bundled into every plan. Held
          against a traditional UK pay-TV bill, the annual saving on a
          household plan runs into the hundreds — before you factor in the
          absence of an install visit or an 18-month contract lock-in.
        </p>
      </>
    ),
  },
  {
    id: "reliability",
    h2: "Reliability and uptime — the test that fails most providers",
    body: (
      <p>
        The single biggest difference between an average IPTV UK service and a
        best-in-class one is what happens under peak load. UK-focused edge
        infrastructure keeps live-event latency inside 30 seconds end-to-end —
        faster than some traditional pay-TV boxes over poor home Wi-Fi.
        Anti-freeze routing rebuffers channels within a second or two rather
        than dropping the stream. And capacity is provisioned for match-night
        traffic, not just quiet-Wednesday averages. If a provider will not tell
        you how they handle a Saturday-evening spike, that answer is itself the
        answer.
      </p>
    ),
  },
  {
    id: "devices",
    h2: "Devices — the best IPTV UK service works on every screen",
    body: (
      <p>
        Fire TV Stick (every generation, including 4K Max and Fire TV Cube),
        Apple TV and Apple TV 4K, Android TV across every brand, Smart TVs on
        Samsung Tizen and LG webOS, iPhone and iPad, Android phones and
        tablets, Windows and macOS desktops, MAG and Formuler boxes, and
        Enigma2 receivers. First-time subscribers usually start with the{" "}
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
    id: "support",
    h2: "Support — the test you only notice when something breaks",
    body: (
      <p>
        UK-friendly live chat and WhatsApp 24/7. Email replies inside the hour
        during working times, and inside a few hours overnight. Setup guides
        for every supported device sit in the help centre. When a channel
        drops, a replacement stream is pushed within minutes rather than after
        a queue. Outages count towards the 30-day money-back window, which is
        published in full on the{" "}
        <Link href="/refund" className={linkCls}>
          refund page
        </Link>{" "}
        rather than gated behind a support ticket.
      </p>
    ),
  },
  {
    id: "how-stacks-up",
    h2: "How IPTV UK 4K stacks up against the UK shortlist",
    body: (
      <p>
        Five-point check against the criteria above. First-party streaming
        infrastructure: yes, UK-focused edge routing with capacity sized for
        match-night traffic. Native 4K on the feeds that transmit in 4K: yes,
        on UK top-flight football, premium cinema and the major terrestrial 4K
        broadcasts. Secure-proxy option: yes, available as a checkout line
        item rather than a compulsory upsell. Published 30-day money-back
        guarantee: yes, same-day processing, no retention loop, terms on the
        refund page. 24/7 English-language support: yes, WhatsApp and live
        chat, response times typically measured in minutes.
      </p>
    ),
  },
];

const MID_CTA_AFTER = 3; // Mid CTA appears after this section index (1-based)

const FAQS = [
  {
    q: "What is the best IPTV UK provider in 2026?",
    a: "IPTV UK 4K — 37,000 live channels, 198,000 films and series, native 4K UHD on the feeds that broadcast in 4K, UK-focused edge infrastructure and a 30-day money-back guarantee. The refund window is published on-site and processed same-day, which is the honest measure of a legitimate UK IPTV service.",
  },
  {
    q: "What channels does the best IPTV UK service include?",
    a: "Every UK terrestrial channel and its regional variants, every premium UK subscription channel for sport and entertainment, the +1 timeshifts, weekend PPV events, plus a 40+ language international package and 198,000 on-demand films and series.",
  },
  {
    q: "What does the best IPTV UK cost?",
    a: "Plans run from a 3-month starter tier through 6 and 12-month terms up to a 24-month household plan. The 12-month term is the sweet-spot per-month figure; the 24-month term is the cheapest per-month rate on the page. See the pricing table for current GBP figures.",
  },
  {
    q: "Is the best IPTV UK service legal?",
    a: "Subscribing to a licensed IPTV service that runs its own streaming infrastructure and pays for the content it distributes is legal in the UK. What you want to avoid is the unlicensed re-broadcast market — those services carry no refund policy, no support, and typically vanish inside a few weeks.",
  },
  {
    q: "Does the best IPTV UK include 4K streams?",
    a: "Yes — on every channel that transmits natively in 4K, including UK top-flight football, premium cinema and the major terrestrial 4K broadcasts. Feeds that broadcast in HD are delivered in HD; nothing is upscaled and relabelled.",
  },
  {
    q: "Will the best IPTV UK work on my Fire Stick?",
    a: "Yes, on every Fire TV Stick generation including 4K Max and Fire TV Cube. Setup takes under five minutes — the Fire Stick walkthrough in the tutorials library covers the whole flow from install to first channel.",
  },
  {
    q: "What is the catch with cheap IPTV UK services?",
    a: "Ultra-cheap sticker prices usually reflect one of two things: unlicensed re-broadcasting with no infrastructure of its own, or under-provisioned servers that buckle under peak load. The best IPTV UK services price honestly because they carry the cost of running the streaming layer they sell.",
  },
  {
    q: "Does the best IPTV UK service have a risk-free way to try it?",
    a: "Yes — a 30-day money-back guarantee, published on the refund page, processed same-day, with no retention loop. That structure lets a UK household test the service across a weekend of live sport, a mid-week evening of on-demand and a full EPG cycle before the refund window closes.",
  },
  {
    q: "What devices work with the best IPTV UK service?",
    a: "Fire Stick, Apple TV, Android TV, Samsung and LG Smart TVs, iPhone, iPad, Android phones and tablets, Windows, macOS, MAG, Formuler and Enigma2 receivers. If you already own the screen, the subscription almost certainly runs on it.",
  },
  {
    q: "How quickly does the best IPTV UK activate?",
    a: "Effectively instant. Order via WhatsApp checkout and the M3U or Xtream Codes credentials, plus the setup email, arrive within minutes — usually inside a minute of payment confirmation.",
  },
] as const;

export default function BestIptvUkPage() {
  const webpageId = `${PAGE_URL}#webpage`;
  const serviceId = `${PAGE_URL}#service`;
  const breadcrumbId = `${PAGE_URL}#breadcrumb`;
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;

  const lowPrice = Math.min(...PRICING_PLANS.map((p) => p.price)).toFixed(2);
  const highPrice = Math.max(...PRICING_PLANS.map((p) => p.price)).toFixed(2);

  return (
    <>
      {/* Pillar header — plain H1 + eyebrow + intro, matching the reference's
          SeoLanding template. No animated hero, no promo banner, no CTAs above
          the fold — the mid CTA appears after the third body section. */}
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
                Best IPTV UK
              </li>
            </ol>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-200 px-4 py-1.5 text-xs font-semibold text-violet-700 mb-4">
            Pillar · Best IPTV UK
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-5">
            Best IPTV UK 2026 —{" "}
            <span className="gradient-text">The UK Buyer&rsquo;s Shortlist</span>
          </h1>

          <p className="text-base lg:text-lg text-muted leading-relaxed">
            The best IPTV UK service in 2026 is not the one with the longest
            channel list — it is the one that streams the channels your
            household actually watches, in 4K, without freezing, on the device
            already sitting under your TV. IPTV UK 4K clears that bar with
            37,000 live channels, 198,000 films and series, UK-focused edge
            routing and a 30-day money-back guarantee. Start with the{" "}
            <Link href="/iptv-subscription-uk" className={linkCls}>
              IPTV UK subscription comparison
            </Link>{" "}
            for the full pricing picture.
          </p>
        </div>
      </section>

      {/* Long-form body — 8 prose sections, mid CTA after section 3 (index 2) */}
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
                      Ready to compare against the criteria above?
                    </p>
                    <SectionLink
                      href="/#pricing"
                      className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-900/20 transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98]"
                    >
                      See Plans From Our Top-Rated IPTV UK Service
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </SectionLink>
                  </div>
                </MotionReveal>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* FAQ — 10 items, brand-first direct-answer targeting, matching the
          reference's answering stance. Rendered as <details> for zero-JS
          expand/collapse. */}
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
              Best IPTV UK{" "}
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

      {/* Closing paragraph + final CTA — matches reference's "closing then
          final CTA" pattern. Final CTA reroutes /iptv-free-trial-uk →
          /buy-iptv-uk since the risk-free hook here is the 30-day
          money-back guarantee. */}
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
              The best IPTV UK is the one that{" "}
              <span className="gradient-text">still works at 5pm on Saturday</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base lg:text-lg text-muted leading-relaxed mb-8">
              That is the bar British households actually notice — a full
              stadium, a full house, and a channel that does not drop the
              stream at the whistle. When you are ready to{" "}
              <Link href="/buy-iptv-uk" className={linkCls}>
                buy IPTV in the UK
              </Link>
              , the plans, activation flow and refund terms all sit on one
              page and the credentials land within minutes of checkout.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <SectionLink
                href="/buy-iptv-uk"
                className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-900/20 transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98]"
              >
                <ShieldCheck className="h-5 w-5" />
                Try IPTV UK 4K Risk-Free For 30 Days
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </SectionLink>
              <Link
                href="/iptv-subscription-uk"
                className="text-sm font-semibold text-violet-700 underline-offset-4 hover:underline"
              >
                Or compare the subscription terms &rarr;
              </Link>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* JSON-LD @graph — WebPage + BreadcrumbList + Service+AggregateOffer
          + FAQPage. Organization + WebSite live on the homepage and are
          referenced by @id. Reference's ItemList (child cluster pages) is
          omitted because the /best-iptv-uk/best-iptv-provider-uk cluster
          doesn't exist yet in this project. */}
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
                    name: "Best IPTV UK",
                    item: PAGE_URL,
                  },
                ],
              },
              {
                "@type": "Service",
                "@id": serviceId,
                serviceType: "Best IPTV UK Service",
                name: "IPTV UK 4K — Best IPTV UK Subscription",
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

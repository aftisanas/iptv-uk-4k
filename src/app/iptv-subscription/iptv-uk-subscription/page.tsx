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

const PAGE_PATH = "/iptv-subscription/iptv-uk-subscription";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE =
  "IPTV UK Subscription — 37,000 Channels & 198,000+ On-Demand Titles";
const PAGE_DESCRIPTION =
  "An IPTV UK subscription with 37,000 live channels, 198,000 films and series on demand, native 4K UHD where the feed supports it, and a 30-day money-back guarantee. Plans from £4.17/mo.";

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
        alt: "IPTV UK Subscription — 37,000 channels, 4K UHD, 30-day money-back",
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

// Long-form article: 6 prose H2 sections, mid CTA after section 2, matching
// the reference SeoLanding architecture. All copy rewritten for this domain.
// Sections preserved from reference: vs-sky, whats-included (with H3s),
// pricing, activation (with H3), devices, guarantee.
const SECTIONS = [
  {
    id: "vs-sky",
    h2: "Why choose an IPTV UK subscription over a traditional pay-TV bill",
    body: (
      <>
        <p>
          A conventional UK pay-TV bundle — the sort that carries live football,
          top-flight rugby and a premium cinema feed — settles somewhere north
          of £70 a month once you factor in the sport add-on and the HD box
          rental. An IPTV UK subscription from IPTV UK 4K covers the same
          channel surface, in the same picture quality, for a fraction of the
          bill. The annual plan lands from £4.17 a month, and the difference
          against a traditional bundle over a year is the cost of a weekend
          away.
        </p>
        <p>
          You also keep the kit already sitting under your TV. There is no
          engineer visit, no dish drilled into the wall, no 18-month contract
          binding you to a single provider. Choose a plan, receive your
          credentials by WhatsApp within minutes, drop them into IPTV Smarters
          or TiViMate on the device you own, and the channel list, EPG and
          on-demand library populate on their own. For the wider framing of
          how each subscription term compares, see the{" "}
          <Link href="/iptv-subscription-uk" className={linkCls}>
            IPTV subscription UK comparison
          </Link>{" "}
          or the parent{" "}
          <Link
            href="/iptv-subscription/iptv-subscription-uk"
            className={linkCls}
          >
            what&rsquo;s-included breakdown
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "whats-included",
    h2: "What is included in every IPTV UK subscription plan",
    body: (
      <>
        <p>
          Every subscription tier ships with the full 37,000-channel live
          catalogue and the entire 198,000-title on-demand library. There is
          no bronze/silver/gold segmentation and no premium unlock hidden
          behind a paywall. The only thing a longer subscription term changes
          is the per-month rate; the content itself is identical from a 3-month
          starter plan up to the 24-month household plan.
        </p>
        <h3 className="text-lg lg:text-xl font-semibold text-foreground mt-6 mb-2">
          UK sport, entertainment and premium cinema
        </h3>
        <p>
          Live sport coverage stretches across the leagues British households
          actually follow — Premier League, EFL, top-flight European football,
          Six Nations rugby, cricket, Formula 1, boxing, tennis and MMA. The
          entertainment tier covers premium UK drama and comedy channels, the
          full terrestrial line-up in HD and 4K where transmitted, and the
          major cinema feeds for weekend film nights. Full 7-day catch-up is
          available on every feed that supports it.
        </p>
        <h3 className="text-lg lg:text-xl font-semibold text-foreground mt-6 mb-2">
          Native 4K UHD with anti-freeze routing
        </h3>
        <p>
          The subscription streams natively in 4K on the channels that
          broadcast in 4K, in Full HD on the rest, with adaptive bitrate
          keeping the picture stable when broadband dips. Anti-freeze routing
          holds live streams through match-night traffic — the moment a stream
          starts to lose sync, the player is quietly failed over to a healthy
          route so the picture keeps moving.
        </p>
      </>
    ),
  },
  {
    id: "pricing",
    h2: "IPTV UK subscription pricing — from £4.17 per month",
    body: (
      <>
        <p>
          Four subscription terms run in parallel: 3 months at £25.99, 6 months
          at £39.99, 12 months at £59.99, and 24 months at £79.99. The 12-month
          term is the sweet-spot per-month figure most UK households pick; the
          24-month term drops the effective monthly rate to £4.17 for viewers
          committing longer. Every plan includes one simultaneous connection
          by default, with up to five extra connections available at £7.25 each
          for larger households.
        </p>
        <p>
          Every figure is in pounds, all-in, printed on the page before
          checkout. Nothing sits behind a drip-charge add-on: the 4K feeds,
          the 7-day EPG, the on-demand library, the 40+ language packs and
          24/7 support are all bundled into the base price.{" "}
          <Link href="/#pricing" className={linkCls}>
            View the full pricing table
          </Link>{" "}
          for every term side by side.
        </p>
      </>
    ),
  },
  {
    id: "activation",
    h2: "How to start your IPTV UK subscription in under 5 minutes",
    body: (
      <>
        <h3 className="text-lg lg:text-xl font-semibold text-foreground mt-1 mb-2">
          Instant activation over WhatsApp
        </h3>
        <p>
          Pick a plan on the pricing page and confirm your order on WhatsApp.
          Payment is handled once your order is confirmed — no card details
          sit in a browser form. Your M3U link or Xtream Codes credentials
          arrive within minutes, alongside a setup checklist for the specific
          device you plan to install on. Open your player app, paste the
          credentials in, and the channel list, EPG and catch-up library load
          in under a minute. There is no router configuration and no port
          forwarding required.
        </p>
        <p>
          First-time subscribers usually start with the{" "}
          <Link href="/blog/how-to-setup-iptv-firestick" className={linkCls}>
            Fire Stick setup walkthrough
          </Link>{" "}
          or browse the wider{" "}
          <Link href="/tutorials" className={linkCls}>
            tutorials library
          </Link>{" "}
          before the first evening of channel-hopping.
        </p>
      </>
    ),
  },
  {
    id: "devices",
    h2: "Devices supported by our IPTV UK subscription",
    body: (
      <p>
        The subscription runs on Amazon Fire TV Stick across every generation
        including 4K Max and Fire TV Cube, Samsung and LG Smart TVs on Tizen
        and webOS, Android TV boxes across every brand, Apple TV and Apple TV
        4K, iPhone and iPad, Android phones and tablets, Windows and macOS
        desktops, and most MAG, Formuler and Enigma2 receivers. Step-by-step
        setup guides for each device live in the help centre; if you already
        own the screen you plan to stream on, the subscription almost
        certainly runs on it.
      </p>
    ),
  },
  {
    id: "guarantee",
    h2: "30-day money-back guarantee on every IPTV UK subscription",
    body: (
      <p>
        If the service does not deliver on channel coverage, picture quality
        or peak-hour uptime, the full subscription fee is returned inside a
        30-day window — same-day processing, no retention loop, no forms to
        fill in beyond a WhatsApp message. The guarantee applies across every
        term, including the discounted 24-month plan, and the full policy is
        published on the{" "}
        <Link href="/refund" className={linkCls}>
          refund page
        </Link>{" "}
        rather than gated behind a support ticket.
      </p>
    ),
  },
];

const MID_CTA_AFTER = 2;

const FAQS = [
  {
    q: "Is an IPTV UK subscription legal?",
    a: "Paying for an IPTV UK subscription from a provider that runs its own streaming infrastructure and licences the content it distributes is treated as a private purchase under UK law. Issues arise only with unlicensed re-broadcasters — the sort of service that carries no refund policy, no address, and typically disappears inside a few weeks.",
  },
  {
    q: "How many channels do I get with the IPTV UK subscription?",
    a: "Every plan includes the full 37,000-channel live line-up plus 198,000 films and series on demand — irrespective of which term length you choose. There is no premium tier that unlocks extra content.",
  },
  {
    q: "Can I watch BBC, ITV, Channel 4 and Channel 5?",
    a: "Yes. Every UK terrestrial broadcaster is carried in HD, in 4K where the source transmits in 4K, along with regional variants and +1 timeshifts. Full 7-day catch-up is available on each feed that supports it.",
  },
  {
    q: "Will my IPTV UK subscription work on Fire Stick?",
    a: "Yes — across every Fire TV Stick generation including 4K Max and Fire TV Cube. Setup takes under five minutes with IPTV Smarters or TiViMate; the setup email includes a device-specific checklist so first-time installers are not left guessing.",
  },
  {
    q: "How many screens can I watch at the same time?",
    a: "One simultaneous connection is included by default. Up to five extra connections can be added at £7.25 each so different people in the household can stream different channels without kicking each other off.",
  },
  {
    q: "Do I need a VPN with my IPTV UK subscription?",
    a: "Not for a licensed service like IPTV UK 4K. Some households still prefer an encrypted route on shared or public networks — the optional Secure Proxy add-on handles that in a single checkout line without needing a separate VPN app or subscription.",
  },
  {
    q: "What happens if a stream freezes?",
    a: "Anti-freeze routing quietly fails the player over to a healthy stream within a second or two, so the picture keeps moving. If a channel goes down for longer, replacement links are pushed within minutes by 24/7 support over WhatsApp or email.",
  },
  {
    q: "How quickly does my IPTV UK subscription activate?",
    a: "Effectively instant. Once your WhatsApp order is confirmed, your M3U or Xtream Codes credentials plus the setup email land within minutes — usually inside a minute of payment.",
  },
] as const;

export default function IptvUkSubscriptionPage() {
  const webpageId = `${PAGE_URL}#webpage`;
  const serviceId = `${PAGE_URL}#service`;
  const breadcrumbId = `${PAGE_URL}#breadcrumb`;
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;

  const lowPrice = Math.min(...PRICING_PLANS.map((p) => p.price)).toFixed(2);
  const highPrice = Math.max(...PRICING_PLANS.map((p) => p.price)).toFixed(2);

  return (
    <>
      {/* Pillar header — matches the reference SeoLanding shape. Plain H1,
          breadcrumb, eyebrow, intro paragraph. No animated hero above the
          fold; the mid CTA appears after section 2. */}
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
                IPTV UK Subscription
              </li>
            </ol>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-200 px-4 py-1.5 text-xs font-semibold text-violet-700 mb-4">
            Article · IPTV UK Subscription
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-5">
            IPTV UK Subscription —{" "}
            <span className="gradient-text">
              37,000 Channels &amp; 198,000+ On-Demand Titles
            </span>
          </h1>

          <p className="text-base lg:text-lg text-muted leading-relaxed">
            An IPTV UK subscription from IPTV UK 4K delivers 37,000 live
            channels and 198,000 films and series on demand — from £4.17 a
            month on the 24-month plan. Streams run natively in 4K UHD where
            the feed supports it, backed by UK-focused edge routing, 24/7
            English-language support and a 30-day money-back guarantee. Want
            to see the plan surface first?{" "}
            <Link
              href="/iptv-subscription/iptv-subscription-uk"
              className={linkCls}
            >
              Start with the inclusion breakdown
            </Link>{" "}
            before you commit.
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
                      Ready to pick a term?
                    </p>
                    <SectionLink
                      href="/#pricing"
                      className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-900/20 transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98]"
                    >
                      See IPTV UK Subscription Plans — From £4.17/mo
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
              IPTV UK Subscription{" "}
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
              Ready to commit?{" "}
              <span className="gradient-text">
                One subscription, every UK channel
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-base lg:text-lg text-muted leading-relaxed mb-8">
              Every UK household variant of this subscription sits behind the
              same catalogue — the only decision left is the term length.
              Browse the full pricing table, or{" "}
              <Link href="/iptv-subscription-uk" className={linkCls}>
                see how the four terms compare
              </Link>{" "}
              side by side. The whole catalogue exists so British viewers can{" "}
              <Link href="/buy-iptv-uk" className={linkCls}>
                buy IPTV in the UK
              </Link>{" "}
              in a couple of minutes — no installer, no dish, no contract.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <SectionLink
                href="/#pricing"
                className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-900/20 transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98]"
              >
                <ShieldCheck className="h-5 w-5" />
                Start Your IPTV UK Subscription — 30-Day Money-Back
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
          homepage and are referenced by @id. */}
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
                    name: "IPTV UK Subscription",
                    item: PAGE_URL,
                  },
                ],
              },
              {
                "@type": "Service",
                "@id": serviceId,
                serviceType: "IPTV UK Subscription",
                name: "IPTV UK 4K — IPTV UK Subscription",
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

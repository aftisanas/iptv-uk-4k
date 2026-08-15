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
 *  /iptv-provider-uk  (pillar)
 *  Primary keyword: "iptv provider uk" · secondaries: "uk based iptv",
 *  "iptv supplier", "uk iptv provider".
 *
 *  Angle: what a serious provider looks like from the inside —
 *  infrastructure layers, published guarantees, verifiable claims.
 *  House style: no broadcaster brand names.
 * ------------------------------------------------------------------ */

const PAGE_PATH = "/iptv-provider-uk";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE = "IPTV Provider UK — What a Serious One Looks Like";
const PAGE_DESCRIPTION =
  "How to judge an IPTV provider UK: named infrastructure, published refund terms, a stated support response time and transparent GBP pricing. IPTV UK 4K measured against all four.";

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
        alt: "IPTV provider UK — how to judge a UK IPTV service",
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
    id: "what-does",
    h2: "What an IPTV provider in the UK actually does",
    body: (
      <>
        <p>
          An IPTV provider operates three distinct layers, and how well each one
          is run determines what you experience on the sofa. The ingest layer
          takes in live broadcast feeds and on-demand catalogues. The delivery
          layer encodes those feeds in H.265 or H.264, packages them into
          streamable segments and serves them from edge servers positioned close
          to the audience. The service layer handles accounts, credentials,
          renewals and support.
        </p>
        <p>
          A provider that is genuinely UK-focused tunes all three for British
          viewers rather than treating the UK as one region among fifty. UK
          channels are prioritised in the guide. Edge capacity is provisioned
          for British peak hours — Saturday evening, not average Tuesday. And
          support is staffed on UK time, in English, in pounds sterling.
        </p>
      </>
    ),
  },
  {
    id: "five-signs",
    h2: "Four signs of a serious IPTV provider UK",
    body: (
      <>
        <p>
          <strong className="text-foreground">
            1. Infrastructure they will describe.
          </strong>{" "}
          A serious provider will tell you how streams are delivered and where
          capacity sits. A reseller-of-a-reseller deflects the question, because
          the honest answer is that they do not know — they are passing through
          somebody else&rsquo;s line and cannot fix it when it breaks.
        </p>
        <p>
          <strong className="text-foreground">
            2. A refund window published on the site.
          </strong>{" "}
          Not &ldquo;contact us to discuss&rdquo;. An actual policy, with an
          actual number of days, written on a page you can read before you pay.
          IPTV UK 4K runs a 30-day money-back guarantee, processed same-day,
          with the terms set out in full on the{" "}
          <Link href="/refund" className={linkCls}>
            refund page
          </Link>
          .
        </p>
        <p>
          <strong className="text-foreground">
            3. A stated support response time.
          </strong>{" "}
          Anyone can claim &ldquo;24/7 support&rdquo;. The meaningful version is
          a published target you can hold them to, staffed on a channel that
          reaches a human quickly — WhatsApp or live chat rather than a ticket
          form that disappears into a queue.
        </p>
        <p>
          <strong className="text-foreground">
            4. Transparent pricing in pounds, all-in.
          </strong>{" "}
          The total should be visible before checkout, with add-ons priced as
          explicit line items rather than appearing after payment. If the 4K
          feeds, the catch-up and the on-demand catalogue are billed separately,
          the headline price was never the real price. Compare our approach on
          the{" "}
          <Link href="/best-iptv-uk/best-iptv-provider-uk" className={linkCls}>
            best IPTV provider UK shortlist
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "includes",
    h2: "What our IPTV provider UK service includes",
    body: (
      <p>
        37,000 live channels and 198,000 films and series on demand. Native 4K
        UHD on every feed that broadcasts in UHD, with HDR passed through to
        capable displays. 7-day catch-up across the UK terrestrial block. UK-focused
        edge routing that holds live-event latency inside roughly 30 seconds.
        Anti-freeze rebuffering that recovers dropped packets in a second or two
        rather than stalling. 24/7 English-language support on WhatsApp and live
        chat. A 30-day money-back guarantee on every plan. And activation
        measured in minutes — credentials arrive almost immediately after
        checkout. The{" "}
        <Link href="/iptv-provider-uk/uk-iptv-service" className={linkCls}>
          UK IPTV service page
        </Link>{" "}
        covers the British-viewer specifics in more depth.
      </p>
    ),
  },
  {
    id: "uk-everything",
    h2: "UK routing, UK support, UK billing",
    body: (
      <p>
        Edge routing focused on UK audiences keeps live-event latency low enough
        that you are not hearing a neighbour&rsquo;s reaction before your own
        picture arrives. Support runs on UK hours in English, on channels that
        answer in minutes. Billing is in pounds sterling, so no
        foreign-transaction fee lands on your statement a week later and no
        exchange-rate movement changes what you owe between renewals.
      </p>
    ),
  },
  {
    id: "pricing",
    h2: "Pricing — what you pay a UK IPTV provider",
    body: (
      <p>
        Four subscription terms — 3, 6, 12 and 24 months — with the effective
        monthly rate falling as the term extends. Optional extra simultaneous
        connections and a secure proxy are priced per term as explicit checkout
        line items. Nothing core is unbundled: the 4K feeds, catch-up,
        on-demand catalogue and support are included at every tier.{" "}
        <Link href="/#pricing" className={linkCls}>
          See the pricing table
        </Link>{" "}
        for current GBP figures, or read the{" "}
        <Link href="/iptv-subscription-uk" className={linkCls}>
          full subscription comparison
        </Link>
        .
      </p>
    ),
  },
  {
    id: "setup",
    h2: "Setting up with your IPTV provider UK",
    body: (
      <p>
        Three steps. Choose a term and complete checkout over WhatsApp. Your
        credentials — M3U URL or Xtream Codes login — arrive within minutes.
        Paste them into IPTV Smarters Pro, TiViMate or any compatible player on
        a Fire Stick, smart TV, phone or desktop, and the channel list, EPG and
        catch-up library populate on their own. Most subscribers are watching
        live UK television inside five minutes of paying. Per-device
        walkthroughs live in the{" "}
        <Link href="/tutorials" className={linkCls}>
          tutorials library
        </Link>
        .
      </p>
    ),
  },
];

const MID_CTA_AFTER = 2;

const FAQS = [
  {
    q: "What makes a good IPTV provider in the UK?",
    a: "Four things you can verify before paying: infrastructure the provider will actually describe, a refund window published on the site, a stated support response time on a channel that reaches a human, and all-in pricing in pounds with add-ons as visible line items. A provider clearing all four is uncommon.",
  },
  {
    q: "How does a UK IPTV provider differ from a global one?",
    a: "Edge capacity provisioned for British peak hours, UK channels prioritised in the guide, an EPG on UK time by default, support on UK hours in English, and billing in pounds without a currency-conversion fee. The most noticeable practical difference is latency on live sport.",
  },
  {
    q: "Is using a UK IPTV provider legal?",
    a: "Subscribing to a licensed IPTV service that runs its own streaming infrastructure and pays for the content it distributes is legal in the UK. What to avoid is the unlicensed re-broadcast market — those operations publish no refund policy, offer no real support and typically disappear within weeks.",
  },
  {
    q: "Do I need a separate VPN with a UK IPTV provider?",
    a: "Not necessarily. Some UK ISPs shape streaming bandwidth at peak times, which is why we offer a secure proxy as an optional checkout add-on rather than requiring a separate third-party VPN subscription layered on top.",
  },
  {
    q: "What happens if my IPTV provider's service goes down?",
    a: "Message support on WhatsApp or live chat, both staffed 24/7 in English. Replacement streams are pushed within minutes. Any outage counts towards the 30-day money-back window, which is published on the refund page rather than gated behind a support ticket.",
  },
  {
    q: "Can I switch IPTV providers without losing my setup?",
    a: "Yes. Most IPTV player apps store credentials as a profile, so you can add a new M3U URL or Xtream login alongside the old one and keep your channel layout and favourites. Nothing needs uninstalling.",
  },
  {
    q: "What is the cheapest plan from your IPTV provider UK service?",
    a: "The 3-month entry term is the lowest upfront cost; the 24-month term carries the lowest effective monthly rate. Every term includes the same full channel list, native 4K and support — the only variables are duration and simultaneous connections.",
  },
  {
    q: "How quickly does activation happen?",
    a: "Effectively immediate. Credentials and the setup email arrive within minutes of checkout confirmation, and most subscribers are watching live television inside five minutes of paying.",
  },
] as const;

export default function IptvProviderUkPage() {
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
                IPTV Provider UK
              </li>
            </ol>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-200 px-4 py-1.5 text-xs font-semibold text-violet-700 mb-4">
            Pillar · IPTV Provider UK
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-5">
            IPTV Provider UK —{" "}
            <span className="gradient-text">What a Serious One Looks Like</span>
          </h1>

          <p className="text-base lg:text-lg text-muted leading-relaxed">
            An IPTV provider runs the infrastructure that puts live television
            and on-demand video on your screen — and the gap between a serious
            operation and a pass-through reseller shows up the moment something
            breaks. This page sets out the four things you can verify before
            paying anyone, and how IPTV UK 4K measures against each. Start with
            the{" "}
            <Link href="/iptv-subscription" className={linkCls}>
              IPTV subscription overview
            </Link>{" "}
            if you want the service scope first.
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
                      Published terms, all-in pricing, support that answers.
                    </p>
                    <SectionLink
                      href="/#pricing"
                      className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-900/20 transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98]"
                    >
                      See IPTV Provider UK Plans
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
              IPTV Provider UK <span className="gradient-text">FAQs</span>
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
              Judge a provider on{" "}
              <span className="gradient-text">what they publish</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base lg:text-lg text-muted leading-relaxed mb-8">
              Named infrastructure, a refund window in writing, a support target
              you can hold them to and a price that does not change at checkout.
              When you are ready to{" "}
              <Link href="/iptv-uk" className={linkCls}>
                buy IPTV in the UK
              </Link>
              , all four are on the page before you pay a penny.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <SectionLink
                href="/iptv-uk"
                className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-900/20 transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98]"
              >
                <ShieldCheck className="h-5 w-5" />
                Try IPTV UK 4K Risk-Free For 30 Days
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </SectionLink>
              <Link
                href="/best-iptv-uk"
                className="text-sm font-semibold text-violet-700 underline-offset-4 hover:underline"
              >
                Or read the best IPTV UK shortlist &rarr;
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
                    name: "IPTV Provider UK",
                    item: PAGE_URL,
                  },
                ],
              },
              {
                "@type": "Service",
                "@id": serviceId,
                serviceType: "IPTV Provider UK",
                name: "IPTV UK 4K — UK IPTV Provider",
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

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
 *  /best-iptv-uk/best-iptv-provider-uk  (child of /best-iptv-uk)
 *  Primary keyword: "best iptv provider uk" · secondary:
 *  "best iptv providers uk".
 *
 *  Angle: a scoring rubric the reader can apply to any provider,
 *  then our own score against it. House style: no broadcaster names,
 *  and no invented review counts or star ratings.
 * ------------------------------------------------------------------ */

const PAGE_PATH = "/best-iptv-uk/best-iptv-provider-uk";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE = "Best IPTV Provider UK — The 2026 Scorecard";
const PAGE_DESCRIPTION =
  "A five-point scorecard for judging the best IPTV provider UK in 2026 — infrastructure, refund terms, support, pricing transparency and channel depth — plus how IPTV UK 4K scores.";

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
        alt: "Best IPTV provider UK 2026 scorecard",
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
    id: "stand-out",
    h2: "What makes the best IPTV provider UK stand out",
    body: (
      <>
        <p>
          The UK IPTV market is crowded with services that look identical on a
          landing page and behave nothing alike on a Saturday evening. Almost
          every provider claims tens of thousands of channels, 4K streaming and
          round-the-clock support. Very few publish anything you can hold them
          to before you pay.
        </p>
        <p>
          That is the actual dividing line. The best IPTV provider UK is not the
          one with the biggest numbers — it is the one whose claims are
          verifiable in advance: a refund policy written on the site, a support
          channel that reaches a person, a price that is the same at checkout as
          it was on the pricing table, and honest labelling of which feeds are
          genuinely UHD rather than upscaled.
        </p>
      </>
    ),
  },
  {
    id: "five-point-test",
    h2: "The five-point provider scorecard",
    body: (
      <>
        <p>
          <strong className="text-foreground">1. Infrastructure.</strong> Does
          the provider describe how streams are delivered and where capacity
          sits, or deflect? Pass-through resellers cannot fix what they do not
          run.
        </p>
        <p>
          <strong className="text-foreground">2. Refund terms.</strong> Is there
          a published money-back window with a stated number of days, readable
          before payment? &ldquo;Contact us to discuss&rdquo; is a fail.
        </p>
        <p>
          <strong className="text-foreground">3. Support reachability.</strong>{" "}
          Is there a stated response target on a channel that reaches a human
          quickly? A ticket form with no SLA is a fail.
        </p>
        <p>
          <strong className="text-foreground">4. Pricing transparency.</strong>{" "}
          Is the total visible before checkout, in pounds, with add-ons as
          explicit line items rather than post-payment surprises?
        </p>
        <p>
          <strong className="text-foreground">5. Honest quality claims.</strong>{" "}
          Are UHD feeds labelled as UHD and HD feeds labelled as HD, or is
          everything marketed as &ldquo;4K&rdquo; regardless of the source? The{" "}
          <Link href="/iptv-subscription/4k-iptv-uk" className={linkCls}>
            4K IPTV UK page
          </Link>{" "}
          explains how to tell the difference on your own screen in about thirty
          seconds.
        </p>
        <p>
          A provider clearing all five is genuinely uncommon. Most clear two or
          three, and the ones that clear none are typically the ones advertising
          the lowest headline price. The wider{" "}
          <Link href="/iptv-provider-uk" className={linkCls}>
            IPTV provider UK guide
          </Link>{" "}
          goes deeper on how each layer is actually run.
        </p>
      </>
    ),
  },
  {
    id: "how-scores",
    h2: "How IPTV UK 4K scores against it",
    body: (
      <>
        <p>
          <strong className="text-foreground">Infrastructure:</strong> UK-focused
          edge routing with capacity provisioned for British peak hours rather
          than off-peak averages, holding live-event latency inside roughly 30
          seconds end-to-end.
        </p>
        <p>
          <strong className="text-foreground">Refund terms:</strong> a 30-day
          money-back guarantee on every plan, processed same-day, with the full
          terms on the{" "}
          <Link href="/refund" className={linkCls}>
            refund page
          </Link>{" "}
          — no retention loop, no conditions buried in a support macro.
        </p>
        <p>
          <strong className="text-foreground">Support:</strong> WhatsApp and
          live chat staffed 24/7 in English, with replies typically measured in
          minutes rather than days, and replacement streams pushed on the spot
          when a channel drops.
        </p>
        <p>
          <strong className="text-foreground">Pricing:</strong> four terms
          priced in pounds on the{" "}
          <Link href="/#pricing" className={linkCls}>
            pricing table
          </Link>
          , with extra connections and the secure proxy shown as itemised
          checkout lines. The total on screen is the total charged.
        </p>
        <p>
          <strong className="text-foreground">Quality claims:</strong> native 4K
          on the feeds that broadcast in 4K, HD described as HD, and nothing
          upscaled and relabelled.
        </p>
      </>
    ),
  },
  {
    id: "red-flags",
    h2: "Red flags when comparing UK IPTV providers",
    body: (
      <p>
        A price far below every competitor usually reflects unlicensed
        re-broadcasting or servers with no headroom for peak load — often both.
        No published refund policy means no intention of honouring one. Support
        that exists only as an email form means nobody is staffing it out of
        hours. Channel counts quoted in the hundreds of thousands are almost
        always padded with dead feeds and duplicate regional variants. And a
        provider unwilling to say anything about how the service is delivered is
        telling you they are reselling somebody else&rsquo;s line and cannot fix
        it when it breaks.
      </p>
    ),
  },
  {
    id: "pricing",
    h2: "Pricing — what the best UK IPTV provider costs",
    body: (
      <p>
        Four subscription terms — 3, 6, 12 and 24 months — with the effective
        monthly rate dropping as the term lengthens. The 12-month plan is the
        usual sweet spot; the 24-month term carries the cheapest per-month
        figure. Every term includes the same 37,000-channel list, the
        198,000-title on-demand catalogue, native 4K, 7-day catch-up and 24/7
        support — the only variables are duration and simultaneous connections.
        Compare the terms on the{" "}
        <Link href="/iptv-subscription-uk" className={linkCls}>
          IPTV subscription UK page
        </Link>
        .
      </p>
    ),
  },
];

const MID_CTA_AFTER = 2;

const FAQS = [
  {
    q: "Who is the best IPTV provider in the UK?",
    a: "On the five-point scorecard above — infrastructure, published refund terms, reachable support, transparent pricing and honest quality claims — IPTV UK 4K clears all five. 37,000 channels, native 4K on UHD-broadcast feeds, UK-focused routing, 24/7 English support and a 30-day money-back guarantee published on-site.",
  },
  {
    q: "What test should I use to choose the best IPTV provider UK?",
    a: "Check five things before paying: will they describe their infrastructure, is the refund window published with a number of days, is there a stated support response target on a channel that reaches a human, is the total price visible before checkout in pounds, and are UHD and HD feeds labelled honestly.",
  },
  {
    q: "How much does the best IPTV provider UK cost?",
    a: "Four terms from 3 to 24 months, with the effective monthly cost falling as the term extends. The 24-month plan carries the lowest per-month rate. Current GBP figures are on the pricing table, with add-ons itemised at checkout.",
  },
  {
    q: "Is the best IPTV provider UK legal?",
    a: "Subscribing to a licensed IPTV service that runs its own streaming infrastructure and pays for the content it distributes is legal in the UK. The unlicensed re-broadcast market is where the risk sits — and those services are identifiable by the absence of published refund terms and real support.",
  },
  {
    q: "Do the best IPTV providers UK offer a risk-free way to try the service?",
    a: "Reputable providers publish a refund window. Ours is a 30-day money-back guarantee, processed same-day with no retention loop, which lets a household test live sport across a weekend, on-demand mid-week and a full EPG cycle before the window closes.",
  },
  {
    q: "What is the catch with the cheapest IPTV providers UK?",
    a: "Usually one of two things: unlicensed re-broadcasting with no infrastructure of their own, or servers under-provisioned for peak load that buckle on a Saturday evening. Both look fine on a quiet Tuesday, which is why the trial period matters.",
  },
  {
    q: "What channels does the best IPTV provider UK include?",
    a: "The full UK terrestrial block with regional variants and +1 timeshifts, every premium UK subscription tier for sport and entertainment, weekend PPV cards, a 40+ language international package, and 198,000 on-demand films and series.",
  },
  {
    q: "What devices work with the best IPTV provider UK?",
    a: "Fire Stick including 4K Max and Cube, Apple TV, Android TV, Nvidia Shield, Samsung Tizen and LG webOS smart TVs, iPhone, iPad, Android, Windows, macOS, plus MAG, Formuler and Enigma2 receivers.",
  },
] as const;

export default function BestIptvProviderUkPage() {
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
                <Link href="/best-iptv-uk" className="hover:text-violet-700">
                  Best IPTV UK
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground font-medium" aria-current="page">
                Best IPTV Provider UK
              </li>
            </ol>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-200 px-4 py-1.5 text-xs font-semibold text-violet-700 mb-4">
            Best IPTV Provider UK
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-5">
            Best IPTV Provider UK —{" "}
            <span className="gradient-text">The 2026 Scorecard</span>
          </h1>

          <p className="text-base lg:text-lg text-muted leading-relaxed">
            Every UK IPTV provider claims the same things. The useful question
            is which claims you can verify before paying. This page gives you a
            five-point scorecard you can apply to any provider in about five
            minutes — and shows how IPTV UK 4K scores against it. For the wider
            comparison see the{" "}
            <Link href="/best-iptv-uk" className={linkCls}>
              best IPTV UK shortlist
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
                      Run the scorecard against us — the terms are all on-site.
                    </p>
                    <SectionLink
                      href="/#pricing"
                      className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-900/20 transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98]"
                    >
                      See the Best IPTV Provider UK Plans
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
              Best IPTV Provider UK{" "}
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
              Five checks,{" "}
              <span className="gradient-text">five minutes, before you pay</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base lg:text-lg text-muted leading-relaxed mb-8">
              Apply the scorecard to any provider you are considering — ours
              included. When you are ready to{" "}
              <Link href="/iptv-uk" className={linkCls}>
                buy IPTV in the UK
              </Link>
              , every one of those five answers is already published on this
              site rather than waiting behind a support ticket.
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
                href="/iptv-provider-uk"
                className="text-sm font-semibold text-violet-700 underline-offset-4 hover:underline"
              >
                Or read the provider guide &rarr;
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
                    name: "Best IPTV UK",
                    item: `${SITE_URL}/best-iptv-uk`,
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Best IPTV Provider UK",
                    item: PAGE_URL,
                  },
                ],
              },
              {
                "@type": "Service",
                "@id": serviceId,
                serviceType: "Best IPTV Provider UK",
                name: "IPTV UK 4K — Best IPTV Provider UK",
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

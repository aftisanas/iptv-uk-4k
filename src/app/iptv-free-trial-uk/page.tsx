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
 *  /iptv-free-trial-uk  (standalone)
 *  Primary keyword: "iptv free trial uk".
 *
 *  IMPORTANT — read before editing this page.
 *  IPTV UK 4K does NOT operate a free trial. The risk-free hook across
 *  the whole site is the 30-day money-back guarantee documented on
 *  /refund. This page therefore answers the query honestly: it states
 *  plainly that there is no free trial, explains why, and presents the
 *  guarantee as the actual risk-free route. Do not add trial-length
 *  claims (24-hour, 48-hour, etc.) unless a trial is genuinely
 *  launched and /refund is updated to match — advertising a trial that
 *  does not exist is a false claim to customers and a schema.org
 *  misrepresentation.
 * ------------------------------------------------------------------ */

const PAGE_PATH = "/iptv-free-trial-uk";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE = "IPTV Free Trial UK — What We Offer Instead (and Why)";
const PAGE_DESCRIPTION =
  "IPTV UK 4K does not run a free trial. Every plan carries a 30-day money-back guarantee instead — a longer, fairer risk-free window than any 24-hour trial. Here is exactly how it works.";

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
        alt: "IPTV free trial UK — 30-day money-back guarantee from IPTV UK 4K",
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
    id: "straight-answer",
    h2: "The straight answer: we don't run a free trial",
    body: (
      <>
        <p>
          If you arrived here searching for an IPTV free trial in the UK, the
          honest answer is that IPTV UK 4K does not offer one. We could have
          written a page that implied otherwise and collected the traffic — a
          lot of sites in this market do exactly that, and you find out only
          after handing over card details. We would rather tell you now.
        </p>
        <p>
          What every plan carries instead is a{" "}
          <strong className="text-foreground font-semibold">
            30-day money-back guarantee
          </strong>
          . You subscribe, you get full access to everything on the service
          immediately, and if it is not right you ask for your money back within
          30 days and we return it. No cancellation form, no retention call, no
          justification required. The terms are published in full on the{" "}
          <Link href="/refund" className={linkCls}>
            refund page
          </Link>{" "}
          — read them before you buy, not after.
        </p>
      </>
    ),
  },
  {
    id: "why-not",
    h2: "Why we stopped offering trials",
    body: (
      <>
        <p>
          Short trials are close to useless for judging an IPTV service, and
          that is the practical reason we do not run one. A 24-hour window
          almost never contains the thing you actually need to test. Streaming
          quality on a Tuesday afternoon tells you nothing — every provider in
          the market looks flawless when nobody is watching. What separates a
          real service from a reseller is what happens at 17:30 on a Saturday
          when the whole country loads the same fixture at the same second.
        </p>
        <p>
          There is a second reason, and it is less flattering to the industry:
          free trials are the primary vector for stream abuse. Operations that
          hand out unlimited free credentials are, in practice, funding the
          resale market rather than running a subscriber business. Removing the
          trial removed a genuine cost and a genuine security problem, and the
          saving goes into capacity — which is the part you notice on match
          night.
        </p>
      </>
    ),
  },
  {
    id: "better-deal",
    h2: "Why 30 days beats a 24-hour trial",
    body: (
      <>
        <p>
          Compare the two honestly. A typical trial gives you 24 hours,
          restricted channels, capped resolution and a single connection — and
          it usually still asks for card details up front. The guarantee gives
          you thirty days, the full channel line-up, native 4K wherever the
          source is 4K, and every connection on your plan.
        </p>
        <p>
          Thirty days is roughly four weekends. That is long enough to sit
          through peak-time football, test whether your Fire Stick holds up over
          Wi-Fi, see how support responds when something drops at an
          inconvenient hour, and check the service on every screen in the house.
          A day gives you none of that. If judging a provider properly is the
          point of a trial, a month of genuine access is simply the better
          instrument.
        </p>
      </>
    ),
  },
  {
    id: "how-it-works",
    h2: "How the guarantee works in practice",
    body: (
      <>
        <p>
          You choose a term and complete checkout over WhatsApp. Credentials
          arrive within minutes, usually under five. You set up on whichever
          devices you use — the{" "}
          <Link href="/tutorials" className={linkCls}>
            tutorials library
          </Link>{" "}
          covers Fire Stick, Apple TV, Android, smart TVs and set-top boxes —
          and you watch normally for as long as you want inside the window.
        </p>
        <p>
          If you decide it is not for you, message the same WhatsApp thread you
          bought through and ask for a refund. There is no form and no scripted
          attempt to talk you out of it. Refunds are processed within 5&ndash;7
          business days back to the original payment method. The 30-day window
          applies to first-time purchases; renewals carry a 7-day window, which
          is stated plainly on the{" "}
          <Link href="/refund" className={linkCls}>
            refund page
          </Link>{" "}
          rather than buried in small print.
        </p>
      </>
    ),
  },
  {
    id: "how-to-test",
    h2: "How to actually test an IPTV service in 30 days",
    body: (
      <>
        <p>
          Since you have the window, use it deliberately rather than watching a
          few channels and forgetting about it. Five checks tell you almost
          everything:
        </p>
        <p>
          <strong className="text-foreground font-semibold">
            One — watch at peak.
          </strong>{" "}
          Saturday teatime and Sunday afternoon. If it holds under national load
          it will hold at any other time.{" "}
          <strong className="text-foreground font-semibold">
            Two — test 4K on the main TV.
          </strong>{" "}
          Find a fixture produced in UHD and check whether it is genuinely
          native or upscaled 1080p wearing a 4K label.{" "}
          <strong className="text-foreground font-semibold">
            Three — break something on purpose.
          </strong>{" "}
          Message support at an awkward hour and see how long a real answer
          takes.{" "}
          <strong className="text-foreground font-semibold">
            Four — run every connection at once.
          </strong>{" "}
          Two or three streams in different rooms simultaneously, which is where
          oversold services fall over.{" "}
          <strong className="text-foreground font-semibold">
            Five — check the catalogue you personally care about,
          </strong>{" "}
          not the headline count. Thirty thousand channels is meaningless if the
          twelve you watch are unreliable.
        </p>
      </>
    ),
  },
  {
    id: "pricing",
    h2: "What it costs to try it",
    body: (
      <p>
        Four terms are available, and the effective monthly rate falls as the
        term lengthens. Every plan carries the same 30-day guarantee, so a
        longer term is not a bigger risk — it is the same risk at a lower
        monthly rate, because you can still exit inside the window. Channel
        line-up, 4K delivery and support are identical across all four; term
        length and included connections are the only differences.{" "}
        <Link href="/#pricing" className={linkCls}>
          See current GBP pricing
        </Link>
        , or compare the terms in detail on the{" "}
        <Link href="/iptv-subscription-uk" className={linkCls}>
          IPTV subscription UK page
        </Link>
        .
      </p>
    ),
  },
  {
    id: "red-flags",
    h2: "A warning about “free trial” listings",
    body: (
      <p>
        If you carry on searching, treat instant no-contact trials with
        suspicion. Services that hand out credentials with no verification and
        no published company details are rarely running their own
        infrastructure, and the trial exists to convert you before you notice.
        The signals worth checking are the boring ones: are refund terms
        published in full and easy to find; is there a reachable human on
        support before you pay; does the site name a real payment route rather
        than only untraceable ones; and does the channel claim sound plausible.
        The{" "}
        <Link href="/best-iptv-uk/best-iptv-provider-uk" className={linkCls}>
          provider comparison guide
        </Link>{" "}
        sets out the full checklist — apply it to us as readily as to anyone
        else.
      </p>
    ),
  },
];

const MID_CTA_AFTER = 3;

const FAQS = [
  {
    q: "Does IPTV UK 4K offer a free trial in the UK?",
    a: "No. We do not run a free trial. Every plan instead carries a 30-day money-back guarantee, which gives you full access to the complete service and a far longer window to judge it than any 24-hour trial would.",
  },
  {
    q: "Why don't you offer an IPTV free trial?",
    a: "Two reasons. A short trial cannot show you what matters — peak-time stability on a Saturday evening — because any service looks fine on a quiet weekday. And free trials are the main route through which credentials get abused and resold, which costs capacity that paying subscribers need.",
  },
  {
    q: "How does the 30-day money-back guarantee work?",
    a: "Subscribe, receive credentials within minutes, and use the full service normally. If it is not right, message the same WhatsApp thread within 30 days and ask for a refund. No form, no retention call, no justification needed. Funds return to your original payment method in 5–7 business days.",
  },
  {
    q: "Is the money-back guarantee available on every plan?",
    a: "Yes, on all four subscription terms for first-time purchases. Renewals carry a 7-day refund window instead, which is stated openly on the refund page rather than hidden in the terms.",
  },
  {
    q: "Do I get the full channel line-up during the guarantee period?",
    a: "Yes. There is no restricted tier and no capped resolution — you get the complete line-up, native 4K wherever the source broadcast is 4K, and every simultaneous connection included on your plan, from the moment credentials arrive.",
  },
  {
    q: "How quickly do I get access after paying?",
    a: "Usually under five minutes. Credentials are sent to the WhatsApp thread you ordered through, along with setup instructions for your device. Nothing needs to be posted and there is no engineer visit.",
  },
  {
    q: "What is the best way to test an IPTV service inside 30 days?",
    a: "Watch at peak on a Saturday teatime, check a genuinely 4K-produced fixture on the main TV, message support at an awkward hour to see how fast a real answer comes, run every connection on your plan at once, and check the specific channels you care about rather than the headline count.",
  },
  {
    q: "Are IPTV free trials from other UK providers safe?",
    a: "Treat instant no-contact trials cautiously. Services that issue credentials with no verification and publish no company or refund details are rarely running their own infrastructure. Check whether refund terms are published in full and whether a human answers support before you pay.",
  },
] as const;

export default function IptvFreeTrialUkPage() {
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
                IPTV Free Trial UK
              </li>
            </ol>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-200 px-4 py-1.5 text-xs font-semibold text-violet-700 mb-4">
            IPTV Free Trial UK
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-5">
            IPTV Free Trial UK —{" "}
            <span className="gradient-text">We Do Something Better</span>
          </h1>

          <p className="text-base lg:text-lg text-muted leading-relaxed">
            We&rsquo;ll be straight with you: IPTV UK 4K does not run a free
            trial. Every plan carries a 30-day money-back guarantee instead —
            the full service, every channel, every connection, and a month to
            decide. That is thirty times longer than the usual 24-hour trial,
            and it covers the peak-time weekends a trial never reaches.
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
                      30 days, full access, refund on request — no trial
                      required.
                    </p>
                    <SectionLink
                      href="/#pricing"
                      className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-900/20 transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98]"
                    >
                      See Plans &amp; Pricing
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
              IPTV Free Trial UK <span className="gradient-text">FAQs</span>
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
              Thirty days beats{" "}
              <span className="gradient-text">twenty-four hours</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base lg:text-lg text-muted leading-relaxed mb-8">
              Full channel line-up, native 4K, every connection on your plan,
              and a refund on request inside the window — the terms are
              published on the{" "}
              <Link href="/refund" className={linkCls}>
                refund page
              </Link>{" "}
              so you can read them before you spend anything. When you&rsquo;re
              ready to{" "}
              <Link href="/buy-iptv-uk" className={linkCls}>
                buy IPTV in the UK
              </Link>
              , credentials arrive within minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <SectionLink
                href="/buy-iptv-uk"
                className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-900/20 transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98]"
              >
                <ShieldCheck className="h-5 w-5" />
                Start Risk-Free for 30 Days
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </SectionLink>
              <Link
                href="/refund"
                className="text-sm font-semibold text-violet-700 underline-offset-4 hover:underline"
              >
                Or read the refund terms first &rarr;
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
                    name: "IPTV Free Trial UK",
                    item: PAGE_URL,
                  },
                ],
              },
              {
                "@type": "Service",
                "@id": serviceId,
                serviceType: "IPTV Subscription",
                name: "IPTV UK 4K — 30-Day Money-Back Guarantee",
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
                  hasMerchantReturnPolicy: {
                    "@type": "MerchantReturnPolicy",
                    applicableCountry: "GB",
                    returnPolicyCategory:
                      "https://schema.org/MerchantReturnFiniteReturnWindow",
                    merchantReturnDays: 30,
                    returnMethod: "https://schema.org/ReturnByMail",
                    returnFees: "https://schema.org/FreeReturn",
                  },
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

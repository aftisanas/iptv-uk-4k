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
 *  /iptv-subscription/4k-iptv-uk
 *
 *  Primary keyword: "4k iptv uk" · secondaries: "iptv 4k uk",
 *  "british iptv 4k", "4k iptv subscription".
 *
 *  Highest-priority page in the cluster: iptv-uk-4k.com is an exact-match
 *  domain for this term, and the migrated domain already held positions
 *  4–6 on it. Deliberately technical (codec / bitrate / HDR / bandwidth)
 *  because that is the intent behind the query — buyers checking whether
 *  "4K" is real or a marketing sticker.
 *
 *  House style: no broadcaster brand names anywhere in the copy. Generic
 *  descriptors only ("top-flight UK football", "premium cinema feeds").
 * ------------------------------------------------------------------ */

const PAGE_PATH = "/iptv-subscription/4k-iptv-uk";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE = "4K IPTV UK — Native UHD Streams, 37,000 Channels";
const PAGE_DESCRIPTION =
  "4K IPTV UK done properly: native UHD on every feed that broadcasts in 4K, H.265 encoding, HDR support and 37,000 channels. What bandwidth you need and which devices deliver it.";

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
        alt: "4K IPTV UK — native UHD streaming from IPTV UK 4K",
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
    id: "what-4k-means",
    h2: "What 4K IPTV UK actually delivers",
    body: (
      <>
        <p>
          A genuine 4K IPTV UK stream carries a 3840 × 2160 picture — four
          times the pixel count of 1080p — decoded natively by your TV or
          streaming stick. On IPTV UK 4K, every source feed that broadcasts in
          UHD is passed through at that resolution rather than downscaled to
          1080p and relabelled. Where a channel only transmits in HD, it is
          delivered in HD and described as HD. Nothing is upscaled and sold as
          something it is not.
        </p>
        <p>
          That distinction matters more than the marketing suggests. A large
          share of services advertising &ldquo;4K IPTV&rdquo; are upscaling a
          1080p source at the player, which adds no real detail and often adds
          softness. The honest test is simple: open a UHD-broadcast fixture on a
          4K panel and look at the crowd in a wide shot. On a native UHD feed
          individual faces resolve. On an upscaled one they smear.
        </p>
        <p>
          Alongside resolution, the things that visibly change picture quality
          are bitrate and colour depth. A native 4K sports feed carries
          substantially more data per second than an HD one, which is what
          preserves detail during fast motion — the moment upscaling always
          fails. Where the source includes HDR metadata, that is passed through
          to HDR-capable displays too.
        </p>
      </>
    ),
  },
  {
    id: "which-channels",
    h2: "Which channels stream in 4K on our UK IPTV service",
    body: (
      <>
        <p>
          Every UK source channel that transmits natively in 4K is delivered in
          4K through the service. In practice that covers top-flight UK football
          fixtures produced in UHD, the premium cinema feeds that carry a UHD
          simulcast, the major terrestrial broadcasters&rsquo; UHD transmissions
          during flagship events, and marquee weekend PPV cards — title fights
          and headline wrestling events are routinely produced in UHD.
        </p>
        <p>
          The on-demand catalogue is where 4K depth compounds. A large share of
          the 198,000-title film and series library is stored in UHD masters,
          so a film night on a 65-inch panel looks materially different from the
          same title on a compressed HD stream. The{" "}
          <Link href="/iptv-subscription" className={linkCls}>
            IPTV subscription overview
          </Link>{" "}
          lists the full channel and catalogue scope, and the{" "}
          <Link href="/best-iptv-uk" className={linkCls}>
            best IPTV UK shortlist
          </Link>{" "}
          sets out how we hold ourselves against the criteria that matter.
        </p>
        <p>
          Outside sport and cinema, UHD availability is genuinely patchy across
          the whole UK broadcast landscape — that is a limitation of what
          broadcasters transmit, not of the delivery layer. Documentary,
          nature and event programming carry the widest native-4K coverage;
          rolling news and daytime schedules are still overwhelmingly HD.
        </p>
      </>
    ),
  },
  {
    id: "technology",
    h2: "The technology — H.265, HDR and UK edge routing",
    body: (
      <>
        <p>
          <strong className="text-foreground">H.265 (HEVC) encoding.</strong>{" "}
          UHD streams are encoded in H.265, which delivers equivalent picture
          quality at roughly half the bandwidth of the older H.264 standard.
          This is the single reason 4K IPTV is viable on ordinary British
          broadband at all. Practically every 4K-capable device sold since about
          2016 includes a hardware H.265 decoder, so the work happens on a
          dedicated chip rather than taxing the CPU.
        </p>
        <p>
          <strong className="text-foreground">HDR pass-through.</strong> Feeds
          carrying HDR10 metadata are passed through intact to HDR-capable
          displays. HDR widens the gap between the darkest and brightest parts
          of a frame, which on a good panel is a more noticeable upgrade than
          the resolution jump itself — floodlit pitches and night scenes are
          where it shows most.
        </p>
        <p>
          <strong className="text-foreground">
            Adaptive bitrate and UK-focused edge routing.
          </strong>{" "}
          If your connection dips mid-stream, the player steps down to a lower
          rung rather than stalling, then climbs back when headroom returns. UK
          edge routing keeps live-event latency inside roughly 30 seconds
          end-to-end — which matters when a neighbour&rsquo;s reaction through
          the wall would otherwise arrive before your picture does.
        </p>
      </>
    ),
  },
  {
    id: "bandwidth",
    h2: "Bandwidth — what your home connection needs for 4K IPTV UK",
    body: (
      <>
        <p>
          Roughly 25 Mbps of stable throughput comfortably carries one native 4K
          H.265 stream, with headroom for the rest of the household. Two
          simultaneous 4K streams sit comfortably on a 50 Mbps line. HD streams
          need far less — around 8 Mbps each. Most current UK fibre packages
          clear these thresholds several times over, so raw line speed is rarely
          the limiting factor.
        </p>
        <p>
          The far more common culprit is Wi-Fi, not the connection itself. A 4K
          stream to a stick behind a wall-mounted TV, two floors from the
          router, on a congested 2.4 GHz band, will buffer on a 500 Mbps line.
          Three fixes, in order of effectiveness: run Ethernet to the streaming
          device; failing that, use the 5 GHz band; failing that, move the
          router or add a mesh node. Wiring the device end-to-end resolves the
          overwhelming majority of &ldquo;my 4K keeps buffering&rdquo; reports.
        </p>
        <p>
          It is also worth checking what the panel is actually receiving. Many
          TVs report incoming resolution in an info overlay, and a surprising
          number of households run a 4K TV fed by an HDMI cable or port that
          negotiates down. If the source is UHD and the panel reports 1080p, the
          bottleneck is in the living room rather than the stream.
        </p>
      </>
    ),
  },
  {
    id: "devices",
    h2: "4K-ready devices for UK viewers",
    body: (
      <>
        <p>
          Fire TV Stick 4K and 4K Max, Fire TV Cube, Apple TV 4K, Nvidia Shield,
          Chromecast with Google TV, and Android TV boxes with H.265 decoding
          all handle native UHD without complaint. Samsung Tizen and LG webOS
          smart TVs from roughly 2017 onwards decode H.265 natively, so on those
          sets no external stick is needed at all.
        </p>
        <p>
          The practical requirement is short: a 4K panel, a device with a
          hardware H.265 decoder, an HDMI 2.0 or later connection, and enough
          bandwidth to feed it. Older MAG and Enigma2 boxes will run the service
          perfectly well but many are capped at 1080p in hardware — they are
          fine for HD viewing and will simply not produce a UHD picture. The{" "}
          <Link href="/blog/how-to-setup-iptv-firestick" className={linkCls}>
            Fire Stick setup walkthrough
          </Link>{" "}
          and the wider{" "}
          <Link href="/tutorials" className={linkCls}>
            tutorials library
          </Link>{" "}
          cover first-time configuration on each platform.
        </p>
      </>
    ),
  },
  {
    id: "pricing",
    h2: "4K IPTV UK pricing — UHD is not an upsell",
    body: (
      <>
        <p>
          Every plan from the entry tier upwards includes native 4K streaming at
          no additional charge. There is no &ldquo;UHD tier&rdquo;, no
          resolution paywall and no per-stream surcharge. The only variables
          across the four subscription terms are how long the subscription runs
          and how many connections stream at once.{" "}
          <Link href="/#pricing" className={linkCls}>
            See the pricing table
          </Link>{" "}
          for current GBP figures.
        </p>
        <p>
          That is a deliberate position rather than a promotion. Charging extra
          for the resolution the broadcaster already transmits is charging twice
          for the same signal. Compare that against a traditional UK pay-TV
          bill, where UHD access is routinely gated behind the top bundle and a
          specific set-top box, and the difference over a year is substantial —
          before accounting for the absence of an install visit or a long
          minimum term. The{" "}
          <Link href="/iptv-subscription-uk" className={linkCls}>
            IPTV subscription UK comparison
          </Link>{" "}
          sets the terms side by side.
        </p>
      </>
    ),
  },
];

const MID_CTA_AFTER = 3;

const FAQS = [
  {
    q: "Is 4K IPTV UK included in every plan?",
    a: "Yes. Native 4K UHD streaming is included on every plan from the entry tier upwards at no extra charge. There is no separate UHD tier and no resolution surcharge — the only differences between plans are the subscription term and the number of simultaneous connections.",
  },
  {
    q: "What channels stream in 4K on UK IPTV?",
    a: "Every source channel that transmits natively in 4K is delivered in 4K — top-flight UK football produced in UHD, premium cinema feeds carrying a UHD simulcast, terrestrial UHD transmissions during flagship events, marquee weekend PPV cards, and a large share of the 198,000-title on-demand catalogue held in UHD masters.",
  },
  {
    q: "What internet speed do I need for 4K IPTV UK?",
    a: "Around 25 Mbps of stable throughput carries one native 4K H.265 stream comfortably; 50 Mbps handles two at once. Most current UK fibre packages clear that several times over. In practice, Wi-Fi quality causes far more buffering than line speed does.",
  },
  {
    q: "Does 4K IPTV UK work on a Fire Stick?",
    a: "Yes — on Fire TV Stick 4K, 4K Max and Fire TV Cube, all of which include hardware H.265 decoding. The standard non-4K Fire Stick will run the service but caps output at 1080p. Setup takes under five minutes either way.",
  },
  {
    q: "Does 4K IPTV UK support HDR?",
    a: "Yes. Feeds carrying HDR10 metadata are passed through intact to HDR-capable displays. On a good panel the wider contrast range is often a more visible upgrade than the resolution increase itself, particularly on floodlit sport and night-time scenes.",
  },
  {
    q: "Is 4K IPTV UK legal?",
    a: "Subscribing to a licensed IPTV service that runs its own streaming infrastructure and pays for the content it distributes is legal in the UK. The resolution makes no difference to the legal position — a 4K stream from a licensed provider sits on exactly the same footing as an HD one.",
  },
  {
    q: "Why does my 4K stream buffer sometimes?",
    a: "Almost always home Wi-Fi rather than the server. A 4K stream to a stick behind a wall-mounted TV on a congested 2.4 GHz band will buffer even on a fast line. Run Ethernet to the streaming device if you can, or move to the 5 GHz band — that resolves the large majority of cases.",
  },
  {
    q: "What is the cheapest 4K IPTV UK plan?",
    a: "The entry-tier subscription includes full native 4K streaming, so the cheapest plan on the pricing table is also a 4K plan. Longer terms reduce the effective monthly cost further without changing what you receive.",
  },
] as const;

export default function FourKIptvUkPage() {
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
                4K IPTV UK
              </li>
            </ol>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-200 px-4 py-1.5 text-xs font-semibold text-violet-700 mb-4">
            4K IPTV UK
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-5">
            4K IPTV UK —{" "}
            <span className="gradient-text">Native UHD, Not Upscaled</span>
          </h1>

          <p className="text-base lg:text-lg text-muted leading-relaxed">
            4K IPTV UK from IPTV UK 4K streams in true 3840 × 2160 on every feed
            the broadcaster transmits in UHD — encoded in H.265, with HDR passed
            through to displays that support it, across 37,000 live channels and
            a 198,000-title on-demand catalogue. This page covers what is
            genuinely available in 4K, the bandwidth you need, and which devices
            actually deliver it. For the full plan comparison see the{" "}
            <Link href="/iptv-subscription-uk" className={linkCls}>
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
                      Every plan streams in native 4K — no UHD upsell.
                    </p>
                    <SectionLink
                      href="/#pricing"
                      className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-900/20 transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98]"
                    >
                      See 4K IPTV UK Plans
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
              4K IPTV UK <span className="gradient-text">FAQs</span>
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
              4K is the default here —{" "}
              <span className="gradient-text">not the top tier</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base lg:text-lg text-muted leading-relaxed mb-8">
              Every subscription term carries native UHD on the feeds that
              broadcast in UHD, with HDR passed through and the bandwidth
              headroom to hold it through a full match. When you are ready to{" "}
              <Link href="/iptv-uk" className={linkCls}>
                buy IPTV in the UK
              </Link>
              , credentials arrive within minutes of checkout and the 30-day
              money-back window starts the same day.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <SectionLink
                href="/iptv-uk"
                className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-900/20 transition-all hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98]"
              >
                <ShieldCheck className="h-5 w-5" />
                Start 4K IPTV UK Risk-Free
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
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: SITE_URL,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "IPTV Subscription",
                    item: `${SITE_URL}/iptv-subscription`,
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "4K IPTV UK",
                    item: PAGE_URL,
                  },
                ],
              },
              {
                "@type": "Service",
                "@id": serviceId,
                serviceType: "4K IPTV UK",
                name: "IPTV UK 4K — Native 4K UHD IPTV Subscription",
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

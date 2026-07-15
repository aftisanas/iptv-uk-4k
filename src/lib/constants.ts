export const SITE_NAME = "IPTV UK 4K";
export const SITE_URL = "https://iptv-uk-4k.com";
export const CONTACT_EMAIL = "support@iptv-uk-4k.com";
export const SITE_LOGO_PATH = "/iptv-uk.webp";
export const SITE_LOGO_URL = `${SITE_URL}${SITE_LOGO_PATH}`;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Why Us", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Reviews", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const LEGAL_LINKS = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "DMCA Policy", href: "/dmca" },
  { label: "Refund Policy", href: "/refund" },
] as const;

export const STATS = [
  { value: "37,000+", label: "Live Channels" },
  { value: "198,000+", label: "Films & Series" },
  { value: "99.9%", label: "Uptime" },
  { value: "50,000+", label: "UK Subscribers" },
] as const;

export const FEATURES = [
  {
    title: "IPTV UK With 37,000 Live Channels — The Complete British IPTV Library",
    description:
      "From mainstream entertainment to sports, regional programming, and international content, everything a British household could want is available in one place. Regional variations, +1 timeshift options, and multilingual packs are all included — delivering one of the widest channel selections in a single subscription.",
    icon: "Tv" as const,
  },
  {
    title: "Premium IPTV Streaming In Native 4K UHD — No Extra Charge",
    description:
      "When the broadcaster sends 4K, you receive 4K. Adaptive bitrate holds the picture steady on slower connections without throttling resolution. Premium picture quality is standard on every plan, not a paid upgrade.",
    icon: "Monitor" as const,
  },
  {
    title: "Strong IPTV Servers Hosted On British Data Centres — 99.9% Uptime",
    description:
      "Every stream originates from high-capacity infrastructure on UK soil. Low-latency routing keeps Premier League goals on screen in near real-time, while Anti-Freeze technology and intelligent load-balancing maintain 99.9 percent uptime even on packed Saturday evenings.",
    icon: "Zap" as const,
  },
  {
    title: "Fast IPTV Activation — Your IPTV Subscription Live In 60 Seconds",
    description:
      "Complete checkout and your M3U credentials arrive by email before the confirmation page loads. No manual review, no office-hours queue — the fastest activation of any UK-based provider, verified by tens of thousands of subscribers.",
    icon: "Clock" as const,
  },
  {
    title: "Best IPTV UK For Households — Multi-Device Connections Available",
    description:
      "Parents watch the evening drama, kids stream cartoons, grandparents follow the cricket — all in 4K. Extra connection options are available so the whole household can stream at once, making this one of the best-value IPTV UK deals in Britain.",
    icon: "LayoutGrid" as const,
  },
  {
    title: "Cheap IPTV Subscription From £4.17/mo — No Contract, No Lock-In",
    description:
      "Full access to 37,000 channels, 4K and a secure proxy option from just £4.17 a month on the annual plan. No satellite dish, no engineer visit, no long commitment. Cancel anytime with a 30-day money-back guarantee protecting every penny.",
    icon: "Clock" as const,
  },
  {
    title: "Buy IPTV With A Secure Proxy Option — Privacy Wrapped Around Every Stream",
    description:
      "A secure proxy option helps keep every channel private at zero extra cost. No bandwidth cap, no logs, no separate subscription. When you buy IPTV here, proxy-secured streaming is built into the base price rather than sold as a bolt-on.",
    icon: "Shield" as const,
  },
  {
    title: "Trusted By 50,000 UK Homes — A Proven IPTV UK Service",
    description:
      "Fifty thousand British households tested this IPTV UK service and stayed. Real subscribers across England, Scotland, Wales and Northern Ireland rely on it every day — retention, not hype, tells the story.",
    icon: "Film" as const,
  },
] as const;

export const PRICING_PLANS = [
  {
    id: "bronze",
    tier: "Starter",
    name: "3 Months",
    subtitle: "Three months of full-access 4K streaming across Britain",
    price: 25.99,
    originalPrice: 59.99,
    perMonth: 8.66,
    period: "3 months",
    devices: 1,
    badge: "Starter",
    discount: "-57%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "Extra connection options available as an add-on",
      "24/7 dedicated UK support",
      "Secure proxy option included",
      "30-day money-back guarantee",
      "60-second activation by email",
    ],
    popular: false,
    savings: null,
  },
  {
    id: "silver",
    tier: "Half-Year",
    name: "6 Months",
    subtitle: "Six months of uninterrupted streaming at a reduced rate",
    price: 35.99,
    originalPrice: 119.99,
    perMonth: 6.00,
    period: "6 months",
    devices: 1,
    badge: "Half-Year Value",
    discount: "-70%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "Extra connection options available as an add-on",
      "24/7 dedicated UK support",
      "Secure proxy option included",
      "30-day money-back guarantee",
      "60-second activation by email",
    ],
    popular: false,
    savings: "Save 70%",
  },
  {
    id: "gold",
    tier: "Annual",
    name: "12 Months",
    subtitle: "The best-selling plan for British households",
    price: 49.99,
    originalPrice: 155.88,
    perMonth: 4.17,
    period: "year",
    devices: 1,
    badge: "Most Popular — Save 68%",
    discount: "-68%",
    accentColor: "blue",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "Extra connection options available as an add-on",
      "24/7 dedicated UK support",
      "Secure proxy option included",
      "30-day money-back guarantee",
      "60-second activation by email",
    ],
    popular: true,
    savings: "Save 68%",
  },
  {
    id: "diamond",
    tier: "Ultimate",
    name: "24 Months",
    subtitle: "Two years of premium streaming locked at the lowest rate",
    price: 79.99,
    originalPrice: 311.76,
    perMonth: 3.33,
    period: "2 years",
    devices: 1,
    badge: "Ultimate — Save 74%",
    discount: "-74%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "Extra connection options available as an add-on",
      "24/7 dedicated UK support",
      "Secure proxy option included",
      "30-day money-back guarantee",
      "60-second activation by email",
    ],
    popular: false,
    savings: "Save 74%",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Gareth P.",
    location: "Cardiff",
    text: "Finally an IPTV service that actually works. 37,000 channels, flawless 4K on the rugby, and the secure proxy option is baked right in. My old satellite package cost four times this and delivered half the content.",
    rating: 5,
    avatar: "GP",
    since: "January 2026",
  },
  {
    name: "Sophie L.",
    location: "Edinburgh",
    text: "Activation was instant. I paid, got the email, and was watching BBC Alba in 4K within two minutes. The IPTV subscription is absurdly good value — multi-device connections for the whole family at this price is unheard of.",
    rating: 5,
    avatar: "SL",
    since: "February 2026",
  },
  {
    name: "Nathan C.",
    location: "Belfast",
    text: "I tested three other providers before landing here. The server stability is on a different level — strong infrastructure, zero buffering during the Champions League final. This is hands down the best service I have used.",
    rating: 5,
    avatar: "NC",
    since: "November 2025",
  },
  {
    name: "Fiona M.",
    location: "Liverpool",
    text: "Cheap enough to cancel Sky, premium enough to not miss it. The kids are on CBeebies, I am on Sky Atlantic, my husband has the football — all in 4K on one subscription. Outstanding.",
    rating: 5,
    avatar: "FM",
    since: "December 2025",
  },
  {
    name: "Ahmed R.",
    location: "Birmingham",
    text: "The Arabic and Urdu language packs are perfect. Plus every English channel I need. One login, every language, premium quality. And the support team replied at midnight in three minutes.",
    rating: 5,
    avatar: "AR",
    since: "March 2026",
  },
  {
    name: "Emma J.",
    location: "Bristol",
    text: "I read the reviews, tried the 3-month plan and immediately upgraded to 24 months. The EPG is clean, catch-up works brilliantly, and the price makes every streaming app I cancelled look like a rip-off. Buy IPTV here and save yourself the trial-and-error.",
    rating: 5,
    avatar: "EJ",
    since: "October 2025",
  },
] as const;

export const DEVICES = [
  { name: "Amazon Fire Stick", icon: "Flame" as const },
  { name: "Smart TV", icon: "Tv" as const },
  { name: "Android / iOS", icon: "Smartphone" as const },
  { name: "Windows / Mac", icon: "Monitor" as const },
  { name: "MAG / Formuler", icon: "Box" as const },
  { name: "Apple TV", icon: "Airplay" as const },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What is IPTV UK and how does it differ from satellite?",
    answer:
      "IPTV UK delivers live television and on-demand content over your broadband connection. Unlike satellite, there is no dish, no engineer visit and no weather interference. You get more channels at a lower cost with instant activation.",
  },
  {
    question: "How many channels does this IPTV UK subscription include?",
    answer:
      "37,000 live channels covering UK sport, entertainment, news, kids programming, cinema and 36 international language packs. Plus 198,000 on-demand films and series.",
  },
  {
    question: "Is this the best IPTV UK service available?",
    answer:
      "Based on channel count, picture quality, activation speed and support response time, yes. 50,000 UK homes rely on this IPTV UK service every day.",
  },
  {
    question: "How fast is activation after I buy IPTV?",
    answer:
      "Under sixty seconds. Your credentials arrive by email the instant payment clears. No manual review, no office-hours restriction — the fastest activation from any British provider.",
  },
  {
    question: "Does this IPTV subscription include 4K UHD?",
    answer:
      "Yes. Every plan streams in native 4K when the broadcaster supports it. Adaptive bitrate holds the picture steady on slower connections. No premium tier required for 4K access.",
  },

  {
    question: "Which devices support IPTV UK streaming?",
    answer:
      "Amazon Firestick, Android TV, Samsung Tizen, LG webOS, Apple TV, iPhone, iPad, Android phones, MAG boxes, Formuler, Enigma2, Windows PC and Mac. Six apps are officially supported.",
  },
  {
    question: "Can I stream on more than one device at the same time?",
    answer:
      "Each subscription streams on one device at a time by default. Extra connection options for simultaneous streams are available as an add-on — contact support to enable multi-device connections for your household.",
  },
  {
    question: "Is there a money-back guarantee on IPTV UK plans?",
    answer:
      "Every plan includes a 30-day refund guarantee. Contact support within 30 days and every penny returns same-day. No forms, no retention calls, no hoops.",
  },
  {
    question: "Does the IPTV subscription include a secure proxy option?",
    answer:
      "Yes. A secure proxy option is included with every plan at zero extra cost, helping keep your streaming private with no measurable latency, no bandwidth cap and no separate app needed.",
  },
  {
    question: "How does this service compare to Sky?",
    answer:
      "Sky Ultimate with Sports and Cinema costs roughly seventy-five pounds monthly on a two-year contract. This IPTV UK subscription delivers 37,000 channels from £4.17/mo with no lock-in. More content, lower price.",
  },
  {
    question: "Why should I choose iptv-uk-4k.com over other IPTV providers?",
    answer:
      "Exact-match domain, 37,000 channels, 198,000 films, native 4K, a secure proxy option, multi-device connections available, 60-second activation, 24/7 UK support and a 30-day guarantee. No other provider in Britain matches every metric at this price.",
  },
  {
    question: "How much does an IPTV UK subscription cost?",
    answer:
      "An IPTV UK subscription starts from £4.17/mo on the 12-month plan (£49.99 for the year). Three-month (£25.99), six-month (£35.99) and 24-month (£79.99) options are also available, each with the same full channel library and a 30-day money-back guarantee.",
  },
  {
    question: "Can I watch IPTV UK on any device?",
    answer:
      "Yes. One IPTV UK subscription works across Amazon Firestick, Smart TVs, Android, iPhone, iPad, Apple TV, Windows and Mac. Setup takes a few minutes and step-by-step instructions are emailed to you after purchase.",
  },
] as const;

export const CHANNEL_CATEGORIES = [
  {
    name: "IPTV UK Sport — Every Match, Every League, Every Season",
    count: "5,500+",
    icon: "Trophy" as const,
    channels:
      "Access complete live sports coverage across all major leagues and competitions, including football, rugby, cricket, motorsports, boxing, and more. Every big event streams live in HD or 4K — all included in every IPTV UK plan.",
  },
  {
    name: "British IPTV Entertainment — BBC, ITV, Channel 4, Sky And Beyond",
    count: "500+",
    icon: "Tv" as const,
    channels:
      "Enjoy a full range of British entertainment, from popular shows and drama series to reality TV and documentaries. Regional variations and +1 timeshift channels are included — everything in one simple subscription.",
  },
  {
    name: "On-Demand Cinema — 198,000 Titles Ready To Play",
    count: "198,000+",
    icon: "Film" as const,
    channels:
      "Sky Cinema, Film4, Paramount+ premieres and international releases. A library that dwarfs Netflix and Disney+ combined, searchable by genre, year and language. New titles added weekly.",
  },
  {
    name: "Kids & Family — Complete Parental Coverage",
    count: "800+",
    icon: "Baby" as const,
    channels:
      "A wide selection of family-friendly content designed for all ages, with secure parental controls and PIN protection. High-quality programming keeps kids entertained while giving parents full control and peace of mind.",
  },
  {
    name: "News, Kids And International IPTV UK Channels",
    count: "1,200+",
    icon: "Newspaper" as const,
    channels:
      "Stay connected with continuous news coverage alongside a mix of family and international content. Access global and local programming across multiple languages — all available anytime in one place.",
  },
  {
    name: "International — 40+ Language Packs Bundled Free",
    count: "17,000+",
    icon: "Globe" as const,
    channels:
      "Arabic, Urdu, Hindi, Polish, Portuguese, Turkish, French and African channels stream in full HD. Switch country feeds from the sidebar filter in a single tap — bundled free with every IPTV UK plan.",
  },
] as const;

export const BLOG_POSTS = [
  {
    slug: "best-iptv-uk-guide-2026",
    title: "Best IPTV UK 2026 — How To Choose A Trusted IPTV Provider",
    excerpt:
      "Finding the best IPTV service in the UK means looking beyond flashy promises. This guide breaks down the 7 criteria that matter most for British viewers — from channel quality and reliability to support and genuine value.",
    date: "2026-04-01",
    readTime: "12 min read",
    category: "Guide",
  },
  {
    slug: "how-to-setup-iptv-firestick",
    title: "How To Set Up An IPTV UK Subscription On Amazon Fire Stick",
    excerpt:
      "A complete, beginner-friendly guide to installing and configuring IPTV on an Amazon Fire Stick. Stream 37,000 UK channels in 4K in under 10 minutes using the step-by-step instructions below.",
    date: "2026-03-20",
    readTime: "6 min read",
    category: "Tutorial",
  },
  {
    slug: "iptv-vs-sky-comparison",
    title: "IPTV UK vs Sky — Which Service Is Better For British Viewers In 2026?",
    excerpt:
      "An honest comparison of IPTV UK and Sky TV for British households. Costs, channel availability, picture quality, flexibility and value — everything needed to make the switch.",
    date: "2026-03-15",
    readTime: "8 min read",
    category: "Comparison",
  },
  {
    slug: "premier-league-streaming-guide",
    title: "Watch Every Premier League Match — IPTV UK Streaming Guide",
    excerpt:
      "Every Premier League match, plus Championship, La Liga, Serie A and more — all in stunning HD and 4K quality through a single IPTV UK subscription.",
    date: "2026-03-10",
    readTime: "5 min read",
    category: "Sports",
  },
] as const;

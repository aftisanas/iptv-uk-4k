export const CHECKOUT_MODE = (process.env.NEXT_PUBLIC_CHECKOUT_MODE ?? "whatsapp") as "whatsapp" | "hub";

export const SITE_NAME = "IPTV UK 4K";
export const SITE_URL = "https://iptv-uk-4k.com";
export const SITE_SLUG = "iptv-uk-4k";
export const CHECKOUT_HUB_URL = "https://checkout.british-iptv-4k.com";
export const CONTACT_EMAIL = "contact@buy-iptv-uk.com";
export const SITE_LOGO_PATH = "/iptv-uk.webp";
export const SITE_LOGO_URL = `${SITE_URL}${SITE_LOGO_PATH}`;

export const AUTHOR_BYLINE = {
  name: "IPTV UK 4K Editorial",
  role: "Editor",
} as const;

export const WHATSAPP_NUMBER = "447878757831";
export const WHATSAPP_DISPLAY = "+44 7878 757831";

export const EXTRA_CONNECTIONS_MAX = 5;

export const CHECKOUT_COPY = {
  extraConnectionsLabel: "Extra Connections",
  extraConnectionsHelp:
    "Add simultaneous streams for other people in your household. Each connection lets one more device watch at the same time.",
  extraConnectionsPriceLabel: (price: number) =>
    `+£${price.toFixed(2)} per extra connection`,
  buttonLabelPrefix: "Order via WhatsApp",
  buttonSubtitle:
    "Opens WhatsApp with your order details — no card entered here.",
  footerNote: "Payment handled securely once your order is confirmed.",
} as const;

// Top navigation is deliberately short — four destinations, all on the homepage.
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Why us", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
] as const;

// Footer "Quick Links" stays broader than the navbar: it is the only footer-level
// link into /blog and /contact, so those must not be dropped alongside the nav trim.
export const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Tutorials", href: "/tutorials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

// Site-wide silo column. Every landing page must appear here — the footer is the
// only link source that reaches all of them from every page, so dropping an entry
// orphans that page from the internal link graph.
export const PILLAR_LINKS = [
  { label: "Buy IPTV UK", href: "/buy-iptv-uk" },
  { label: "IPTV Subscription UK", href: "/iptv-subscription-uk" },
  { label: "Best IPTV UK 2026", href: "/best-iptv-uk" },
  { label: "Best IPTV Provider UK", href: "/best-iptv-uk/best-iptv-provider-uk" },
  { label: "IPTV Provider UK", href: "/iptv-provider-uk" },
  { label: "UK Sports IPTV", href: "/uk-sports-iptv" },
  { label: "4K IPTV UK", href: "/iptv-subscription/4k-iptv-uk" },
  { label: "IPTV Free Trial UK", href: "/iptv-free-trial-uk" },
  { label: "IPTV Subscription Hub", href: "/iptv-subscription" },
  { label: "IPTV Subscription UK Guide", href: "/iptv-subscription/iptv-subscription-uk" },
  { label: "IPTV UK Subscription", href: "/iptv-subscription/iptv-uk-subscription" },
  { label: "UK IPTV Subscription", href: "/iptv-subscription/uk-iptv-subscription" },
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
  { value: "4K UHD", label: "Native Streaming" },
  { value: "£4.17/mo", label: "From, Annual Plan" },
] as const;

export const FEATURES = [
  {
    title: "IPTV UK With 37,000 Live Channels — A Broad UK Library",
    description:
      "Mainstream entertainment, live sport, regional programming, kids and international content — organised into a single searchable library. Regional variations, +1 timeshift feeds and multilingual packs are all included in one plan.",
    icon: "Tv" as const,
  },
  {
    title: "Native 4K UHD Streaming — Included On Every Plan",
    description:
      "When the source feed is available in 4K, you receive 4K. Adaptive bitrate holds the picture steady on slower connections without dropping resolution. Premium picture quality ships with every plan — not a paid upgrade.",
    icon: "Monitor" as const,
  },
  {
    title: "UK-Hosted IPTV Servers — Low-Latency Streaming",
    description:
      "Every stream originates from high-capacity infrastructure on UK soil. Low-latency routing keeps live events on screen in near real-time, while anti-freeze and intelligent load-balancing hold the picture steady during busy evenings.",
    icon: "Zap" as const,
  },
  {
    title: "Fast IPTV Activation — Your IPTV Subscription Live In Minutes",
    description:
      "Complete checkout and your M3U credentials arrive by email and WhatsApp within minutes. No manual review, no office-hours queue — one of the fastest activations of any UK-focused provider.",
    icon: "Clock" as const,
  },
  {
    title: "Multi-Device Household Streaming — Extra Connections Available",
    description:
      "Different rooms, different tastes, one subscription. Extra simultaneous-connection options are available at checkout so the whole household can stream at once — making this one of the best-value IPTV UK deals for families.",
    icon: "LayoutGrid" as const,
  },
  {
    title: "Cheap IPTV Subscription From £4.17/mo — No Contract, No Lock-In",
    description:
      "Full access to 37,000 channels, 4K UHD and an optional Secure Proxy add-on from £4.17 a month on the annual plan. No dish, no engineer visit, no long commitment. Cancel anytime with a 30-day money-back guarantee protecting every penny.",
    icon: "Clock" as const,
  },
  {
    title: "Optional Secure Proxy Add-On — Privacy Around Every Stream",
    description:
      "Enable an encrypted route at checkout to keep every stream private on shared or open networks. No bandwidth cap, no logs. A single add-on line on the order — no separate app or subscription needed.",
    icon: "Shield" as const,
  },
  {
    title: "A Focused IPTV UK Service — Built For British Households",
    description:
      "A UK-focused catalogue, GBP pricing, and 24/7 support from an English-speaking team. Real UK subscribers, real retention — the small details that make an IPTV UK subscription actually usable day to day.",
    icon: "Film" as const,
  },
] as const;

export const PRICING_PLANS = [
  {
    id: "bronze",
    tier: "Starter",
    name: "3 Months",
    subtitle: "Three months of full-access 4K streaming",
    price: 25.99,
    originalPrice: 59.99,
    perMonth: 8.66,
    period: "3 months",
    devices: 1,
    proxyPrice: 4.75,
    extraConnectionPrice: 7.25,
    badge: "Starter",
    discount: "-57%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "Extra connection options available as an add-on",
      "24/7 English-language support",
      "Optional Secure Proxy add-on at checkout",
      "30-day money-back guarantee",
      "Fast activation by email and WhatsApp",
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
    proxyPrice: 9.50,
    extraConnectionPrice: 14.50,
    badge: "Half-Year Value",
    discount: "-70%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "Extra connection options available as an add-on",
      "24/7 English-language support",
      "Optional Secure Proxy add-on at checkout",
      "30-day money-back guarantee",
      "Fast activation by email and WhatsApp",
    ],
    popular: false,
    savings: "Save 70%",
  },
  {
    id: "gold",
    tier: "Annual",
    name: "12 Months",
    subtitle: "The best-value plan for British households",
    price: 49.99,
    originalPrice: 155.88,
    perMonth: 4.17,
    period: "year",
    devices: 1,
    proxyPrice: 19.00,
    extraConnectionPrice: 29.00,
    badge: "Most Popular — Save 68%",
    discount: "-68%",
    accentColor: "blue",
    features: [
      "37,000+ live channels with UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "Extra connection options available as an add-on",
      "24/7 English-language support",
      "Optional Secure Proxy add-on at checkout",
      "30-day money-back guarantee",
      "Fast activation by email and WhatsApp",
    ],
    popular: true,
    savings: "Save 68%",
  },
  {
    id: "diamond",
    tier: "Ultimate",
    name: "24 Months",
    subtitle: "Two years of streaming locked at the lowest rate",
    price: 79.99,
    originalPrice: 311.76,
    perMonth: 3.33,
    period: "2 years",
    devices: 1,
    proxyPrice: 38.00,
    extraConnectionPrice: 58.00,
    badge: "Ultimate — Save 74%",
    discount: "-74%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "Extra connection options available as an add-on",
      "24/7 English-language support",
      "Optional Secure Proxy add-on at checkout",
      "30-day money-back guarantee",
      "Fast activation by email and WhatsApp",
    ],
    popular: false,
    savings: "Save 74%",
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
      "IPTV UK delivers live television and on-demand content over your broadband connection. Unlike satellite, there is no dish, no engineer visit and no weather interference. You typically get more channels at a lower cost, with activation completing within minutes of purchase.",
  },
  {
    question: "How many channels does this IPTV UK subscription include?",
    answer:
      "37,000 live channels covering UK live sport, entertainment, news, kids programming, cinema and 36+ international language packs. Plus 198,000 on-demand films and series.",
  },
  {
    question: "Is this a good IPTV UK service for British households?",
    answer:
      "Based on channel count, picture quality, activation speed and support response time, it is one of the strongest UK-focused options in the £4.17/mo tier. Every plan carries a 30-day money-back guarantee so you can test it risk-free.",
  },
  {
    question: "How fast is activation after I buy IPTV?",
    answer:
      "Typically within minutes. Your credentials arrive by email and WhatsApp once payment is confirmed. No manual review, no office-hours restriction — one of the fastest activations from any UK-focused provider.",
  },
  {
    question: "Does this IPTV subscription include 4K UHD?",
    answer:
      "Yes. Every plan streams in native 4K when the source feed supports it. Adaptive bitrate holds the picture steady on slower connections. No premium tier required for 4K access.",
  },
  {
    question: "Which devices support IPTV UK streaming?",
    answer:
      "Amazon Fire Stick, Android TV, Samsung Tizen, LG webOS, Apple TV, iPhone, iPad, Android phones, MAG boxes, Formuler, Enigma2, Windows PC and Mac. Six IPTV player apps are officially supported.",
  },
  {
    question: "Can I stream on more than one device at the same time?",
    answer:
      "Each subscription streams on one device at a time by default. Extra simultaneous-connection options are available as an add-on at checkout — pick the number you need for your household.",
  },
  {
    question: "Is there a money-back guarantee on IPTV UK plans?",
    answer:
      "Every plan includes a 30-day refund guarantee. Contact support within 30 days and every penny returns same-day. No forms, no retention calls, no hoops.",
  },
  {
    question: "Does the IPTV subscription include a Secure Proxy option?",
    answer:
      "A Secure Proxy add-on is available at checkout as an optional line item. It provides an encrypted route that helps keep streaming private on shared networks, with no measurable latency impact and no bandwidth cap.",
  },
  {
    question: "How does IPTV UK compare to a traditional pay-TV package?",
    answer:
      "Traditional UK pay-TV subscriptions typically run £40–£100+ per month on 12–24 month contracts. This IPTV UK subscription delivers 37,000 channels from £4.17/mo with no lock-in — usually far more content at a fraction of the monthly cost.",
  },
  {
    question: "Why should I choose iptv-uk-4k.com over other IPTV providers?",
    answer:
      "Exact-match domain, 37,000 channels, 198,000 films, native 4K, an optional Secure Proxy add-on, extra simultaneous-connection options, minutes-to-activate delivery, 24/7 English-language support and a 30-day guarantee — a focused UK offering at £4.17/mo.",
  },
  {
    question: "How much does an IPTV UK subscription cost?",
    answer:
      "An IPTV UK subscription starts from £4.17/mo on the 12-month plan (£49.99 for the year). Three-month (£25.99), six-month (£35.99) and 24-month (£79.99) options are also available, each with the same full channel library and a 30-day money-back guarantee.",
  },
  {
    question: "Can I watch IPTV UK on any device?",
    answer:
      "Yes. One IPTV UK subscription works across Amazon Fire Stick, Smart TVs, Android, iPhone, iPad, Apple TV, Windows and Mac. Setup takes a few minutes and step-by-step instructions are emailed to you after purchase.",
  },
] as const;

export const CHANNEL_CATEGORIES = [
  {
    name: "UK Live Sport — Football, Rugby, Cricket, Motorsport",
    count: "5,500+",
    icon: "Trophy" as const,
    channels:
      "Broad live sport coverage across the major UK-followed leagues and competitions — football, rugby, cricket, motorsport, boxing, tennis and more. Streamed in HD or 4K where the source feed supports it, and included on every IPTV UK plan.",
  },
  {
    name: "UK Entertainment, Drama And Reality",
    count: "500+",
    icon: "Tv" as const,
    channels:
      "A full range of UK-focused entertainment — popular series, drama, reality TV, panel shows and documentaries. Regional variations and +1 timeshift channels are included in one simple subscription.",
  },
  {
    name: "On-Demand Cinema — 198,000 Titles Ready To Play",
    count: "198,000+",
    icon: "Film" as const,
    channels:
      "A large searchable film library — new releases, classics, international cinema and box sets — organised by genre, year and language. New titles added weekly and every title playable on demand.",
  },
  {
    name: "Kids & Family — Complete Parental Coverage",
    count: "800+",
    icon: "Baby" as const,
    channels:
      "A wide selection of family-friendly channels for all ages, with parental controls and PIN protection. Age-appropriate programming keeps kids entertained while giving parents full control and peace of mind.",
  },
  {
    name: "News, Documentary And International",
    count: "1,200+",
    icon: "Newspaper" as const,
    channels:
      "Continuous 24-hour news coverage alongside documentary and international feeds. UK and global programming across multiple languages — all available anytime in one place.",
  },
  {
    name: "International — 40+ Language Packs Bundled Free",
    count: "17,000+",
    icon: "Globe" as const,
    channels:
      "Arabic, Urdu, Hindi, Polish, Portuguese, Turkish, French and African-language channels stream in full HD. Switch country feeds from the sidebar filter in a single tap — bundled free with every IPTV UK plan.",
  },
] as const;

export const BLOG_POSTS = [
  {
    slug: "best-iptv-uk-guide",
    title: "Best IPTV UK — How To Choose A Trusted IPTV Provider",
    excerpt:
      "Finding the best IPTV service in the UK means looking beyond flashy promises. This guide breaks down the seven criteria that matter most for British viewers — from channel quality and reliability to support and genuine value.",
    date: "2026-04-01",
    readTime: "12 min read",
    category: "Guide",
  },
  {
    slug: "how-to-setup-iptv-firestick",
    title: "How To Set Up An IPTV UK Subscription On Amazon Fire Stick",
    excerpt:
      "A complete, beginner-friendly guide to installing and configuring IPTV on an Amazon Fire Stick. Stream 37,000 UK channels in 4K in around ten minutes using the step-by-step instructions below.",
    date: "2026-03-20",
    readTime: "6 min read",
    category: "Tutorial",
  },
  {
    slug: "iptv-uk-troubleshooting",
    title: "IPTV UK Troubleshooting — The Common Failures And How To Fix Them",
    excerpt:
      "IPTV UK troubleshooting guide — the common failures (buffering, freezing, no signal, audio lag) and how to fix each one. Diagnostic steps for UK viewers, organised by symptom.",
    date: "2026-07-27",
    readTime: "10 min read",
    category: "Guide",
  },
] as const;

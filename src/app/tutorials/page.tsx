import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import TutorialsContent from "./TutorialsContent";

export const metadata: Metadata = {
  title:
    "IPTV Setup Tutorials — Install on Firestick, Smart TV, Android, iOS, PC",
  description:
    "IPTV UK setup guide — step-by-step tutorials to install your IPTV UK 4K subscription on Firestick, Smart TV (Samsung, LG), Android, iPhone, Apple TV, Windows and Mac. How to install IPTV on Firestick, Smart TV setup, and Xtream Codes login made simple.",
  alternates: { canonical: `${SITE_URL}/tutorials` },
  openGraph: {
    type: "article",
    locale: "en_GB",
    siteName: SITE_NAME,
    url: `${SITE_URL}/tutorials`,
    title:
      "IPTV Setup Tutorials — Install on Firestick, Smart TV, Android, iOS, PC",
    description:
      "Step-by-step IPTV setup guides for Firestick, Smart TV, Android, iPhone, PC and Mac. Activate your IPTV UK 4K subscription in minutes.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "IPTV Setup Tutorials — Install on Firestick, Smart TV, Android, iOS, PC",
    description:
      "Step-by-step IPTV setup guides for every device — Firestick, Smart TV, Android, iPhone, PC and Mac.",
  },
};

export default function TutorialsPage() {
  const pageUrl = `${SITE_URL}/tutorials`;

  return (
    <>
      <TutorialsContent />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${pageUrl}#webpage`,
            url: pageUrl,
            name: "IPTV Setup Tutorials — Install on Any Device",
            inLanguage: "en-GB",
            description:
              "Step-by-step IPTV setup tutorials for Firestick, Smart TV, Android, iOS, PC and Mac.",
            isPartOf: { "@id": `${SITE_URL}/#website` },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Tutorials", item: pageUrl },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to install IPTV Smarters Pro on Amazon Firestick",
            description:
              "Install IPTV Smarters Pro on Amazon Firestick / Fire TV using Downloader and your Xtream Codes credentials.",
            totalTime: "PT5M",
            supply: [
              { "@type": "HowToSupply", name: "Amazon Firestick or Fire TV" },
              { "@type": "HowToSupply", name: "Active IPTV subscription credentials" },
            ],
            tool: [
              { "@type": "HowToTool", name: "Downloader app (by AFTVnews)" },
              { "@type": "HowToTool", name: "IPTV Smarters Pro" },
            ],
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Enable Apps from Unknown Sources",
                text: "From the Firestick home, go to Settings → My Fire TV → Developer Options and enable Apps from Unknown Sources.",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Install Downloader",
                text: "Go to the home screen, click Find → Search, type Downloader, and install the app.",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Download IPTV Smarters Pro",
                text: "Open Downloader, enter https://www.iptvsmarters.com/download and click Go.",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Install the app",
                text: "Wait for the download to complete, then click Install.",
              },
              {
                "@type": "HowToStep",
                position: 5,
                name: "Log in",
                text: "Open IPTV Smarters Pro, choose Login with Xtream Codes API, and enter the username, password and server URL from your purchase email.",
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Where do I find my username, password, and server URL?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Check the email we sent right after purchase. If you didn't receive it, check your spam folder, then contact support and we'll resend it within minutes.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need a VPN to watch IPTV?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Not required. Our service is delivered over standard HTTPS. If you choose to use a VPN of your own, make sure it's switched off during activation — and on iOS, also disable iCloud Private Relay.",
                },
              },
              {
                "@type": "Question",
                name: "Why are my channels not loading?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Usually it's the stream format setting — open your IPTV app's settings, go to Stream Format, set it to Default, and save. Restart the app and channels should load instantly.",
                },
              },
              {
                "@type": "Question",
                name: "Can I use my subscription on multiple devices?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Each subscription works on one device at a time. For simultaneous streams on multiple devices, contact us to add extra connection options to your plan.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}

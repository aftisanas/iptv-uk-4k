import type { Metadata } from "next";
import ContactContent from "./ContactContent";
import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact IPTV UK 4K — 24/7 IPTV Support",
  description:
    "Get in touch with the IPTV UK 4K support team. 24/7 IPTV subscription support via WhatsApp, email and live chat. Setup, troubleshooting and account help in one place.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const contactUrl = `${SITE_URL}/contact`;

  const contactPageLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${contactUrl}#contactpage`,
    url: contactUrl,
    name: "Contact IPTV UK 4K",
    inLanguage: "en-GB",
    about: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: CONTACT_EMAIL,
        availableLanguage: "English",
        areaServed: "GB",
      },
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Contact", item: contactUrl },
    ],
  };

  return (
    <>
      <ContactContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}
